"""Vercel serverless entry point for the CloudReel beta tracker.

Every request is routed here (see vercel.json). It gates the whole site
behind a session cookie set by a custom sign-in page (site/login.html,
POST /api/login) rather than the browser's native Basic Auth prompt. It
serves the static site/ and images/ assets, and backs the tracking API
with Upstash Redis (Vercel's KV integration) since serverless functions
have no writable shared disk.

Local development still uses ../server.py, which writes straight to
tracking/status.json and is unaffected by this file.

GET or POST /api/sync pulls the team's public "Issues" and "Studio New UI"
sheet tabs (CSV export, no auth needed since they're link-shared) and
upserts Live/Studio Issues into Redis, same storage as a user-submitted
"Report a bug" entry. New sheet rows are appended; existing ones only
have their displayed fields refreshed, and their tracked status is only
advanced when the sheet's own Dev/QA status changed - owner/notes typed
into the tracker are never touched. Requires the session cookie (manual
trigger) or an `Authorization: Bearer <CRON_SECRET>` header (Vercel Cron,
see vercel.json).
"""
import csv, hashlib, hmac, io, json, mimetypes, os, re, time
from datetime import datetime, timezone
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
CRON_SECRET = os.environ.get("CRON_SECRET", "")

KV_URL = (os.environ.get("KV_REST_API_URL") or os.environ.get("UPSTASH_REDIS_REST_URL") or "").rstrip("/")
KV_TOKEN = os.environ.get("KV_REST_API_TOKEN") or os.environ.get("UPSTASH_REDIS_REST_TOKEN") or ""

SHEET_ID = "1p7RyixQF_QS-tP7PkILYEJbK7WQYx1dI"
SHEET_SOURCES = (
    {"kind": "live", "prefix": "ISS", "gid": "1692181084", "cols": 11},
    {"kind": "studio", "prefix": "STU", "gid": "1067447891", "cols": 12},
)


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


def _clean(s):
    return re.sub(r"[ \t]+", " ", s.strip()) if s else ""


def _split_steps(raw):
    if not raw:
        return []
    return [l for l in (_clean(x) for x in raw.split("\n")) if l]


def _norm_sev(raw):
    return {"high": "High", "medium": "Medium", "low": "Low"}.get(raw.strip().lower(), "Medium")


def _norm_qa(raw):
    c = _clean(raw)
    low = c.lower()
    if low.startswith("done"):
        return "Done"
    if "reop" in low or "ropen" in low:
        return "Reopen"
    return c


_WONTFIX_KW = ["as per design", "as per ux", "as per the ux", "ux design", "as designed",
               "as expected", "not a bug", "new requirement", "functionality"]
_PROGRESS_KW = ["need more detail", "need in detail", "sent for the approval", "shell team",
                "needs decision", "needs product decision", "waiting from"]


def _derive_status(dev, qa):
    d, q = dev.strip().lower(), qa.strip().lower()
    if any(k in d for k in _WONTFIX_KW):
        status = "wontfix"
    elif any(k in d for k in _PROGRESS_KW):
        status = "in-progress"
    elif d.startswith("fixed") or d.startswith("partly fixed") or "re fixed" in d or "refixed" in d:
        status = "fixed"
    else:
        status = "open"
    if "reop" in q or "ropen" in q:
        return "open"
    if "need discus" in q:
        return "in-progress"
    if "not fixed" in q or "not working" in q:
        return "open"
    if q.startswith("done"):
        return "verified"
    return status


def fetch_csv_rows(gid):
    url = "https://docs.google.com/spreadsheets/d/%s/export?format=csv&gid=%s" % (SHEET_ID, gid)
    with urlopen(url, timeout=20) as r:
        text = r.read().decode("utf-8-sig")
    return list(csv.reader(io.StringIO(text)))


def parse_source(src):
    """Fetch and parse one sheet tab into a list of item dicts, in file order."""
    rows = fetch_csv_rows(src["gid"])[1:]
    ncols = src["cols"]
    items = []
    for raw in rows:
        row = raw + [""] * (ncols - len(raw))
        if src["kind"] == "live":
            bug_id, date, title, module, steps, actual, expected, sev, dev, qa, comments = row[:11]
            bugtype = ""
        else:
            bug_id, date, title, module, steps, actual, expected, sev, bugtype, dev, qa, comments = row[:12]
        if not title.strip() or bug_id.strip() == "Bug ID":
            continue
        items.append({
            "sheetId": _clean(bug_id), "date": _clean(date), "title": _clean(title),
            "module": _clean(module) or "Unspecified", "steps": _split_steps(steps),
            "actual": _clean(actual), "expected": _clean(expected), "sev": _norm_sev(sev),
            "bugType": _clean(bugtype), "devStatus": _clean(dev), "qaStatus": _norm_qa(qa),
            "qaNote": _clean(comments),
        })
    return items


def sync_source(src, state):
    rows = parse_source(src)
    added = updated = unchanged = 0
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    for i, r in enumerate(rows, 1):
        iid = "%s-%03d" % (src["prefix"], i)
        note_parts = []
        if r["bugType"]:
            note_parts.append("Type: " + r["bugType"])
        if r["devStatus"]:
            note_parts.append("Dev: " + r["devStatus"])
        if r["qaStatus"]:
            note_parts.append("QA: " + r["qaStatus"])
        if r["qaNote"]:
            note_parts.append("Comments: " + r["qaNote"])
        data = {
            "id": iid, "module": r["module"], "sev": r["sev"], "title": r["title"],
            "summary": r["title"], "steps": r["steps"], "actual": r["actual"],
            "expected": r["expected"], "reporter": "", "date": r["date"],
            "devStatus": r["devStatus"], "qaStatus": r["qaStatus"], "qaNote": r["qaNote"],
            "sheetId": r["sheetId"],
        }
        existing = state["items"].get(iid)
        if existing is None:
            state["items"][iid] = {
                "custom": True, "kind": src["kind"], "status": _derive_status(r["devStatus"], r["qaStatus"]),
                "owner": "", "note": " | ".join(note_parts), "title": r["title"], "updated": now, "data": data,
            }
            added += 1
            continue
        old_data = existing.get("data") or {}
        changed = (not existing.get("custom") or old_data.get("devStatus") != r["devStatus"]
                   or old_data.get("qaStatus") != r["qaStatus"] or old_data.get("title") != r["title"]
                   or old_data.get("steps") != r["steps"])
        if not changed:
            unchanged += 1
            continue
        entry = dict(existing)
        entry["custom"] = True
        entry["data"] = data
        entry["title"] = r["title"]
        if old_data.get("devStatus") != r["devStatus"] or old_data.get("qaStatus") != r["qaStatus"]:
            entry["status"] = _derive_status(r["devStatus"], r["qaStatus"])
            entry["updated"] = now
        state["items"][iid] = entry
        updated += 1
    return {"total": len(rows), "added": added, "updated": updated, "unchanged": unchanged}


def sync_all():
    state = load_state()
    result = {}
    for src in SHEET_SOURCES:
        result[src["kind"]] = sync_source(src, state)
    save_state(state)
    return result


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

    def _sync_authed(self):
        if self._authed():
            return True
        auth = self.headers.get("Authorization", "")
        return bool(CRON_SECRET) and hmac.compare_digest(auth, "Bearer " + CRON_SECRET)

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
        if path == "/api/sync":
            if not self._sync_authed():
                return self._json({"error": "unauthorized"}, 401)
            try:
                return self._json({"ok": True, "result": sync_all()})
            except Exception as e:
                return self._json({"ok": False, "error": str(e)}, 502)
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

        if path == "/api/sync":
            if not self._sync_authed():
                return self._json({"error": "unauthorized"}, 401)
            try:
                return self._json({"ok": True, "result": sync_all()})
            except Exception as e:
                return self._json({"ok": False, "error": str(e)}, 502)

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
