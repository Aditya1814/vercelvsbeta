"""Vercel serverless entry point for the CloudReel beta tracker.

Every request is routed here (see vercel.json). It gates the whole site
behind HTTP Basic Auth, serves the static site/ and images/ assets, and
backs the tracking API with Upstash Redis (Vercel's KV integration) since
serverless functions have no writable shared disk.

Local development still uses ../server.py, which writes straight to
tracking/status.json and is unaffected by this file.
"""
import base64, hmac, json, mimetypes, os
from http.server import BaseHTTPRequestHandler
from urllib.request import Request, urlopen

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_DIRS = ("site", "images")
STATUS_KEY = "cloudreel:status"

AUTH_USER = os.environ.get("BASIC_AUTH_USER", "")
AUTH_PASS = os.environ.get("BASIC_AUTH_PASS", "")

KV_URL = (os.environ.get("KV_REST_API_URL") or os.environ.get("UPSTASH_REDIS_REST_URL") or "").rstrip("/")
KV_TOKEN = os.environ.get("KV_REST_API_TOKEN") or os.environ.get("UPSTASH_REDIS_REST_TOKEN") or ""


def kv_request(path, body=None):
    req = Request(KV_URL + path, data=body, headers={"Authorization": "Bearer " + KV_TOKEN})
    if body is not None:
        req.method = "POST"
    with urlopen(req, timeout=10) as r:
        return json.loads(r.read().decode("utf-8"))


def load_state():
    if not KV_URL or not KV_TOKEN:
        return {"items": {}}
    try:
        raw = kv_request("/get/" + STATUS_KEY).get("result")
        return json.loads(raw) if raw else {"items": {}}
    except Exception:
        return {"items": {}}


def save_state(state):
    kv_request("/set/" + STATUS_KEY, json.dumps(state).encode("utf-8"))


class handler(BaseHTTPRequestHandler):
    def _authed(self):
        if not AUTH_USER or not AUTH_PASS:
            return False
        expected = "Basic " + base64.b64encode((AUTH_USER + ":" + AUTH_PASS).encode()).decode()
        got = self.headers.get("Authorization", "")
        return hmac.compare_digest(got, expected)

    def _require_auth(self):
        body = b"Authentication required."
        self.send_response(401)
        self.send_header("WWW-Authenticate", 'Basic realm="CloudReel Beta Tracker"')
        self.send_header("Content-Type", "text/plain")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _json(self, obj, code=200):
        body = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _not_found(self):
        self.send_response(404)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def _serve_static(self, path):
        rel = path.lstrip("/") or "site/index.html"
        if rel in ("site", "site/"):
            rel = "site/index.html"
        norm = os.path.normpath(rel)
        if norm.startswith("..") or os.path.isabs(norm) or norm.split(os.sep)[0] not in STATIC_DIRS:
            return self._not_found()
        full = os.path.join(ROOT, norm)
        if not os.path.isfile(full):
            return self._not_found()
        ctype = mimetypes.guess_type(full)[0] or "application/octet-stream"
        with open(full, "rb") as f:
            data = f.read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        is_image = norm.split(os.sep)[0] == "images"
        self.send_header("Cache-Control", "public, max-age=31536000, immutable" if is_image else "no-cache")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        if not self._authed():
            return self._require_auth()
        path = self.path.split("?", 1)[0]
        if path == "/api/status":
            return self._json(load_state())
        return self._serve_static(path)

    def do_POST(self):
        if not self._authed():
            return self._require_auth()
        try:
            length = int(self.headers.get("Content-Length") or 0)
            data = json.loads(self.rfile.read(length) or b"{}")
        except ValueError:
            return self._json({"error": "bad json"}, 400)
        path = self.path.split("?", 1)[0]
        state = load_state()
        if path == "/api/item" and isinstance(data.get("id"), str):
            if data.get("entry"):
                state["items"][data["id"]] = data["entry"]
            else:
                state["items"].pop(data["id"], None)
        elif path == "/api/import" and isinstance(data.get("items"), dict):
            state = {"items": data["items"]}
        else:
            return self._json({"error": "unknown request"}, 400)
        save_state(state)
        self._json(state)
