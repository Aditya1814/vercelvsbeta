#!/usr/bin/env python3
"""Tiny local server for the CloudReel beta tracker.

    python3 server.py            # then open http://localhost:8765/

Serves the website in site/ and saves tracking changes to tracking/status.json,
a small readable file (one entry per finding / defect / test case / job).
"""
import json, os, sys, tempfile, threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
STATE = os.path.join(ROOT, "tracking", "status.json")
LOCK = threading.Lock()


def load():
    try:
        with open(STATE, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {"items": {}}


def save(state):
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=os.path.dirname(STATE), suffix=".tmp")
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=1, sort_keys=True)
        f.write("\n")
    os.replace(tmp, STATE)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def _json(self, obj, code=200):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def end_headers(self):
        if not self.path.startswith("/images/"):
            self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def do_GET(self):
        if self.path in ("/", "/index.html"):
            self.send_response(302)
            self.send_header("Location", "/site/")
            self.end_headers()
        elif self.path.startswith("/api/status"):
            with LOCK:
                self._json(load())
        else:
            super().do_GET()

    def do_POST(self):
        try:
            data = json.loads(self.rfile.read(int(self.headers.get("Content-Length") or 0)) or b"{}")
        except ValueError:
            return self._json({"error": "bad json"}, 400)
        with LOCK:
            state = load()
            if self.path == "/api/item" and isinstance(data.get("id"), str):
                if data.get("entry"):
                    state["items"][data["id"]] = data["entry"]
                else:
                    state["items"].pop(data["id"], None)
            elif self.path == "/api/import" and isinstance(data.get("items"), dict):
                state = {"items": data["items"]}
            else:
                return self._json({"error": "unknown request"}, 400)
            save(state)
        self._json(state)

    def log_message(self, fmt, *args):
        if "/api/" in (args[0] if args else ""):
            super().log_message(fmt, *args)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    print("CloudReel beta tracker: http://localhost:%d/   (Ctrl+C to stop)" % port)
    print("Tracking file: %s" % STATE)
    ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
