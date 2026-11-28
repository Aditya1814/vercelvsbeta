"""Vercel serverless entry point for the CloudReel beta tracker.

Every request is routed here (see vercel.json). It gates the whole site
behind a session cookie set by a custom sign-in page (site/login.html,
POST /api/login) rather than the browser's native Basic Auth prompt. It
serves the static site/ and images/ assets, and backs the tracking API
with Upstash Redis (Vercel's KV integration) since serverless functions
have no writable shared disk.

Local development still uses ../server.py, which writes straight to
tracking/status.json and is unaffected by this file.
"""
import hashlib, hmac, json, mimetypes, os, time
from http.cookies import SimpleCookie
from http.server import BaseHTTPRequestHandler
from urllib.request import Request, urlopen

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_DIRS = ("site", "images")
STATUS_KEY = "cloudreel:status"
COOKIE_NAME = "cr_session"
SESSION_SECONDS = 30 * 86400
PUBLIC_PATHS = ("/login", "/login.html", "/site/login.html", "/site/style.css")

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


def _sign(exp):
    return hmac.new(AUTH_PASS.encode("utf-8"), str(exp).encode("utf-8"), hashlib.sha256).hexdigest()


def make_session_token():
    exp = int(time.time()) + SESSION_SECONDS
    return "%d.%s" % (exp, _sign(exp))


def valid_session(token):
    if not token or not AUTH_PASS:
        return False
    try:
        exp_s, sig = token.split(".", 1)
        exp = int(exp_s)
    except ValueError:
        return False
    if exp < time.time():
        return False
    return hmac.compare_digest(sig, _sign(exp))


class handler(BaseHTTPRequestHandler):
    def _cookie(self, name):
        jar = SimpleCookie()
        jar.load(self.headers.get("Cookie", ""))
        return jar[name].value if name in jar else None

    def _authed(self):
        return valid_session(self._cookie(COOKIE_NAME))

    def _json(self, obj, code=200, extra_headers=None):
        body = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for k, v in (extra_headers or {}).items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def _not_found(self):
        self.send_response(404)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def _serve_file(self, rel, cache="no-cache"):
        full = os.path.join(ROOT, rel)
        if not os.path.isfile(full):
            return self._not_found()
        ctype = mimetypes.guess_type(full)[0] or "application/octet-stream"
        with open(full, "rb") as f:
            data = f.read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", cache)
        self.end_headers()
        self.wfile.write(data)

    def _serve_static(self, path):
        rel = path.lstrip("/") or "site/index.html"
        if rel in ("site", "site/"):
            rel = "site/index.html"
        norm = os.path.normpath(rel)
        if norm.startswith("..") or os.path.isabs(norm) or norm.split(os.sep)[0] not in STATIC_DIRS:
            return self._not_found()
        is_image = norm.split(os.sep)[0] == "images"
        self._serve_file(norm, "public, max-age=31536000, immutable" if is_image else "no-cache")

    def _redirect(self, location):
        self.send_response(302)
        self.send_header("Location", location)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path in ("/login", "/login.html"):
            return self._serve_file("site/login.html")
        if not self._authed() and path not in PUBLIC_PATHS:
            if path.startswith("/api/"):
                return self._json({"error": "unauthorized"}, 401)
            return self._redirect("/login")
        if path in ("/", "/index.html"):
            return self._redirect("/site/")
        if path == "/api/status":
            return self._json(load_state())
        return self._serve_static(path)

    def do_POST(self):
        path = self.path.split("?", 1)[0]
        try:
            length = int(self.headers.get("Content-Length") or 0)
            data = json.loads(self.rfile.read(length) or b"{}")
        except ValueError:
            return self._json({"error": "bad json"}, 400)

        if path == "/api/login":
            user_ok = AUTH_USER and hmac.compare_digest(str(data.get("username", "")), AUTH_USER)
            pass_ok = AUTH_PASS and hmac.compare_digest(str(data.get("password", "")), AUTH_PASS)
            if user_ok and pass_ok:
                cookie = "%s=%s; Path=/; Max-Age=%d; HttpOnly; Secure; SameSite=Lax" % (COOKIE_NAME, make_session_token(), SESSION_SECONDS)
                return self._json({"ok": True}, 200, {"Set-Cookie": cookie})
            return self._json({"error": "Incorrect username or password."}, 401)

        if path == "/api/logout":
            cookie = "%s=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax" % COOKIE_NAME
            return self._json({"ok": True}, 200, {"Set-Cookie": cookie})

        if not self._authed():
            return self._json({"error": "unauthorized"}, 401)

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
