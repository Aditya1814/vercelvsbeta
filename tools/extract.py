#!/usr/bin/env python3
"""Split the big "Vercel vs Beta comparison" HTML report into small files.

Usage:  python3 tools/extract.py ["path/to/report.html"]

Writes:
  images/imgNNNN.webp     screenshots that were embedded as base64
  site/data/*.js          structured data the tracker website loads
  docs/**/*.md            small markdown files (easy for people and Claude to read)
"""
import base64, hashlib, html, json, os, re, sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "Vercel vs Beta comparison (1).html")
MAX_MD = 28000  # split markdown files above this many characters

# ---------------------------------------------------------------- mini DOM
VOID = {"img", "br", "input", "meta", "link", "hr"}


class Node:
    def __init__(self, tag, attrs=None, parent=None):
        self.tag, self.attrs, self.parent, self.kids = tag, dict(attrs or {}), parent, []

    def cls(self):
        return (self.attrs.get("class") or "").split()

    def has(self, c):
        return c in self.cls()

    def walk(self):
        for k in self.kids:
            if isinstance(k, Node):
                yield k
                yield from k.walk()

    def all(self, tag=None, c=None, id=None):
        return [n for n in self.walk()
                if (tag is None or n.tag == tag) and (c is None or n.has(c)) and (id is None or n.attrs.get("id") == id)]

    def one(self, tag=None, c=None, id=None):
        for n in self.walk():
            if (tag is None or n.tag == tag) and (c is None or n.has(c)) and (id is None or n.attrs.get("id") == id):
                return n
        return None

    def children(self, tag=None, c=None):
        return [k for k in self.kids if isinstance(k, Node) and (tag is None or k.tag == tag) and (c is None or k.has(c))]

    def raw(self):
        out = []
        for k in self.kids:
            if isinstance(k, Node):
                out.append("\n" if k.tag == "br" else k.raw())
            else:
                out.append(k)
        return "".join(out)

    def text(self):
        lines = [re.sub(r"[ \t\r\f\v]+", " ", l).strip() for l in self.raw().split("\n")]
        return "\n".join(l for l in lines if l).strip()

    def flat(self):
        return re.sub(r"\s+", " ", self.raw()).strip()


class Builder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("root")
        self.cur = self.root

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.kids.append(n)
        if tag not in VOID:
            self.cur = n

    def handle_startendtag(self, tag, attrs):
        self.cur.kids.append(Node(tag, attrs, self.cur))

    def handle_endtag(self, tag):
        n = self.cur
        while n is not self.root and n.tag != tag:
            n = n.parent
        if n is not self.root:
            self.cur = n.parent

    def handle_data(self, data):
        if self.cur.tag not in ("script", "style"):
            self.cur.kids.append(data)


def T(n):
    return n.text() if n else ""


def F(n):
    return n.flat() if n else ""


def refs(n):
    """IDs linked from a node: #f-SHA-01 -> SHA-01, #b-BUG-FUNC-01 -> BUG-FUNC-01"""
    out = []
    for a in (n.all("a") if n else []):
        h = a.attrs.get("href", "")
        if h.startswith("#f-") or h.startswith("#b-"):
            out.append(h[3:])
    return out


def table(t):
    head = [F(th) for th in t.one("thead").all("th")] if t.one("thead") else []
    rows = []
    body = t.one("tbody") or t
    for tr in body.children("tr"):
        cells = [c for c in tr.children() if c.tag in ("td", "th")]
        if tr.has("grp"):
            rows.append({"group": F(cells[0])})
        else:
            rows.append([F(c) for c in cells])
    return {"head": head, "rows": rows}


def shots(n):
    out = []
    for fig in n.all("figure"):
        img = fig.one("img")
        out.append({"img": IMG.get(img.attrs.get("src"), ""), "caption": F(fig.one("figcaption"))})
    return out


def panel(p):
    """A .panel made of <strong>Heading</strong><ul>…</ul> pairs (or loose paragraphs)."""
    blocks, cur = [], None
    for k in p.children():
        if k.tag == "strong":
            cur = {"title": F(k), "items": []}
            blocks.append(cur)
        elif k.tag == "ul":
            if cur is None:
                cur = {"title": "", "items": []}
                blocks.append(cur)
            cur["items"] += [F(li) for li in k.all("li")]
        elif k.tag == "p":
            if cur is None:
                cur = {"title": "", "items": []}
                blocks.append(cur)
            cur["items"].append(F(k))
    return blocks


# ---------------------------------------------------------------- load + images
print("reading", SRC)
src = open(SRC, encoding="utf-8", errors="replace").read()
IMG = {}  # placeholder -> relative file path
os.makedirs(os.path.join(ROOT, "images"), exist_ok=True)
_seen = {}


def _img(m):
    key = "IMG%04d" % (len(IMG) + 1)
    data = base64.b64decode(m.group(2))
    h = hashlib.sha1(data).hexdigest()
    if h not in _seen:
        ext = {"jpeg": "jpg", "svg+xml": "svg"}.get(m.group(1), m.group(1))
        name = "img%04d.%s" % (len(_seen) + 1, ext)
        with open(os.path.join(ROOT, "images", name), "wb") as f:
            f.write(data)
        _seen[h] = "images/" + name
    IMG[key] = _seen[h]
    return key


src = re.sub(r"data:image/([a-z0-9.+-]+);base64,([A-Za-z0-9+/=]+)", _img, src)
print("images: %d embedded, %d unique files" % (len(IMG), len(_seen)))

b = Builder()
b.feed(src)
doc = b.root


def sec(id):
    return doc.one("section", id=id)


D = {}

# ---------------------------------------------------------------- part 1
top = doc.one("header", c="top")
s = sec("summary")
D["overview"] = {
    "eyebrow": F(top.one("p", c="eyebrow")),
    "title": F(top.one("h1")),
    "intro": F([p for p in top.all("p") if not p.has("eyebrow")][0]),
    "urls": [{"label": F(a), "href": a.attrs["href"]} for a in top.one("div", c="urls").all("a")],
    "kpis": [{"value": F(k.one("b")), "label": F(k.one("span"))} for k in s.all("div", c="kpi")],
    "panels": [blk for p in s.all("div", c="panel") for blk in panel(p)],
    "method": [F(li) for li in sec("method").all("li")],
    "footer": F(doc.one("footer")),
}

s = sec("status")
rows, grp = [], ""
for tr in s.one("tbody").children("tr"):
    if tr.has("grp"):
        grp = F(tr)
        continue
    td = tr.children("td")
    rows.append({"group": grp, "module": F(td[0]), "status": tr.attrs.get("data-st", ""), "statusLabel": F(td[1]),
                 "works": F(td[2]), "broken": F(td[3]), "refs": refs(td[4])})
D["modules"] = {"lede": F(s.one("p", c="lede")), "counts": [F(x) for x in s.one("div", c="stkpis").all("span")], "rows": rows}

s = sec("top")
D["top"] = {"lede": F(s.one("p", c="lede")), "rows": [
    {"sev": F(td[0]).lower(), "module": F(td[1]), "title": F(td[2]), "id": (refs(td[2]) or [""])[0], "fix": F(td[3])}
    for td in (tr.children("td") for tr in s.one("tbody").children("tr"))]}

s = sec("coverage")
D["coverage"] = {"lede": F(s.one("p", c="lede")), **table(s.one("table"))}

s = sec("areas")
D["areas"] = [{"title": F(c.one("h3")), "modules": F(c.one("p", c="area-mods")),
               "text": " ".join(F(p) for p in c.children("p") if not p.has("area-mods")),
               "counts": [F(x) for x in c.one("div", c="mini").all("span")]} for c in s.all("div", c="area-card")]

s = sec("response")
D["response"] = {"lede": F(s.one("p", c="lede")), **table(s.one("table"))}


def finding(a):
    chips = a.one("div", c="f-meta").all("span", c="chip")
    sides = a.all("div", c="side")
    foot = {F(d.one("dt")): F(d.one("dd")) for d in a.one("dl", c="f-foot").children("div")}
    return {"id": F(a.one("span", c="fid")), "sev": a.attrs["data-sev"], "type": a.attrs["data-type"],
            "typeLabel": F(chips[0]), "module": a.attrs["data-module"], "area": a.attrs["data-area"],
            "title": F(a.one("h3")), "vercel": T(sides[0].one("p")), "beta": T(sides[1].one("p")),
            "impact": foot.get("Impact", ""), "rec": foot.get("Recommendation", ""), "shots": shots(a)}


D["findings"] = [finding(a) for a in sec("findings").all("article", c="finding")]
D["better"] = [finding(a) for a in sec("better").all("article", c="finding")]

s = sec("wireframes")
jr = []
for w in s.all("div", c="wf"):
    h = w.one("div", c="wf-h")
    lanes = []
    for lane in w.all("div", c="lane"):
        steps = []
        for li in lane.all("li", c="wstep"):
            img = li.one("img")
            st = [c[2:] for c in li.cls() if c.startswith("s-")]
            steps.append({"title": F(li.one("p", c="wtitle")), "hint": F(li.one("p", c="whint")),
                          "action": F(li.one("p", c="wact").one("span")) if li.one("p", c="wact") else "",
                          "state": st[0] if st else "", "badge": F(li.one("span", c="sbadge")),
                          "note": F(li.one("p", c="wnote")) or F(li.one("p", c="wnoshot")),
                          "img": IMG.get(img.attrs["src"], "") if img else ""})
        lanes.append({"label": F(lane.one("div", c="lane-l")), "steps": steps})
    jr.append({"title": F(h.one("h3")), "desc": F(h.one("p")), "refs": refs(h), "lanes": lanes})
D["journeys"] = {"lede": F(s.one("p", c="lede")), "items": jr}

s = sec("flows")
D["flows"] = {"lede": F(s.one("p", c="lede")), "rows": [
    {"module": F(td[0]), "flow": F(td[1]), "vercel": F(td[2]), "beta": F(td[3]), "result": tr.attrs.get("data-res", ""), "note": F(td[5])}
    for tr, td in ((tr, tr.children("td")) for tr in s.one("tbody").children("tr"))]}

# ---------------------------------------------------------------- part 2: QA
qa = {}
qa["intro"] = F(doc.one("div", id="qa").one("p", c="lede"))
s = sec("qa-summary")
v = s.one("div", c="verdict")
tb = s.all("table")
qa["summary"] = {"verdict": F(v.one("b")), "text": F(v.one("p")),
                 "kpis": [{"value": F(k.one("b")), "label": F(k.one("span"))} for k in s.all("div", c="kpi")],
                 "bySeverity": table(tb[0]), "byModule": table(tb[1]), "exit": table(tb[2])}
s = sec("qa-plan")
qa["plan"] = {"panels": [blk for p in s.all("div", c="panel") for blk in panel(p)],
              "suites": [{"title": F(c.one("h3")), "text": " ".join(F(p) for p in c.children("p") if not p.has("area-mods")),
                          "env": F(c.one("p", c="area-mods"))} for c in s.all("div", c="area-card")]}
s = sec("qa-compat")
t = s.one("table")
qa["compat"] = {"lede": F(s.one("p", c="lede")), "head": [F(th) for th in t.one("thead").all("th")],
                "rows": [{"page": F(td[0]), "cells": [{"res": F(c), "note": c.attrs.get("title", "")} for c in td[1:]]}
                         for td in (tr.children("td") for tr in t.one("tbody").children("tr"))]}
s = sec("qa-a11y")
tb = s.all("table")
qa["a11y"] = {"lede": F(s.one("p", c="lede")), "scans": table(tb[0]), "keyboard": table(tb[1])}
s = sec("qa-nf")
nf, title = [], ""
for k in s.children():
    if k.tag == "h3":
        title = F(k)
    elif k.tag == "div" and k.has("tbl"):
        nf.append({"title": title, **table(k.one("table"))})
qa["nonfunctional"] = {"lede": F(s.one("p", c="lede")), "tables": nf}
D["qa"] = qa

bugs = []
for a in sec("qa-defects").all("article", c="bug"):
    chips = [F(c) for c in a.one("div", c="f-meta").all("span", c="chip")]
    meta = {F(d.one("dt")): F(d.one("dd")) for d in a.one("dl", c="bugmeta").children("div")}
    sides = a.all("div", c="side")
    bug = {"id": F(a.one("span", c="fid")), "sev": a.attrs["data-sev"], "pri": a.attrs["data-pri"],
           "module": chips[1] if len(chips) > 1 else "", "repro": chips[2] if len(chips) > 2 else "",
           "title": F(a.one("h3")), "env": meta.get("Environment", ""), "pre": meta.get("Preconditions", ""),
           "expected": T(sides[0].one("p")), "actual": T(sides[1].one("p")), "steps": [], "logs": "", "shots": [],
           "related": F(a.one("p", c="bugrel")), "refs": refs(a.one("p", c="bugrel"))}
    for d in a.all("details"):
        if d.one("ol"):
            bug["steps"] = [F(li) for li in d.one("ol").children("li")]
        elif d.one("pre"):
            bug["logs"] = d.one("pre").raw().strip()
        else:
            bug["shots"] = shots(d)
    bugs.append(bug)
D["defects"] = bugs

s = sec("qa-cases")
D["suites"] = table(s.all("table")[0])
cases = []
for tr in s.one("tbody", id="tcbody").children("tr"):
    td = tr.children("td")
    c = {"id": F(td[0]), "suite": F(td[1]), "title": F(td[2].one("b")), "pri": F(td[3]), "env": F(td[4]),
         "status": tr.attrs.get("data-st", ""), "statusLabel": F(td[5]), "defects": refs(td[6]),
         "pre": "", "steps": "", "expected": "", "actual": "", "notes": ""}
    for p in (td[2].one("details").children("p") if td[2].one("details") else []):
        lab = p.one("i")
        if lab:
            key = {"Preconditions:": "pre", "Expected:": "expected", "Actual:": "actual", "Notes:": "notes"}.get(F(lab))
            txt = T(p)[len(F(lab)):].strip()
            if key:
                c[key] = txt
            else:
                c["notes"] += (" " if c["notes"] else "") + T(p)
        else:
            c["steps"] = T(p)
    cases.append(c)
D["cases"] = cases

# ---------------------------------------------------------------- part 3: JTBD
j = doc.one("div", id="jtbd")
jt = {"intro": F(j.one("p", c="lede")), "note": F(j.one("div", c="panel")), "matrix": table(sec("jtbd-matrix").one("table")), "segments": []}
JRES = {"jp": "pass", "jw": "partial", "jf": "fail", "jn": "not-run", "jb": "blocked", "jx": "missing"}
for sp in sec("jtbd-segments").all("div", c="segp"):
    panels = sp.one("div", c="grid2").children("div", c="panel")
    meta = {F(d.one("dt")): F(d.one("dd")) for d in panels[0].one("dl").children("div")}
    seg = {"id": sp.attrs["id"][4:], "name": F(panels[0].one("h3")), "verdict": F(panels[0].one("span", c="st")),
           "summary": F(panels[0].children("p")[0]), "who": meta.get("Who", ""), "plan": meta.get("Plan", ""),
           "success": meta.get("Success for them", ""), "blockers": [F(li) for li in panels[1].all("li")], "jobs": []}
    for a in sp.all("article", c="job"):
        left = a.one("div", c="job-left")
        steps = []
        for tr in a.one("table").one("tbody").children("tr"):
            td = tr.children("td")

            def cell(c):
                tag = c.one("span", c="jt")
                code = [x for x in (tag.cls() if tag else []) if x != "jt"]
                lab = F(tag)
                return {"res": lab, "code": code[0] if code else "", "text": F(c)[len(lab):].strip()}
            steps.append({"n": F(td[0]), "step": F(td[1].one("b")), "where": F(td[1].one("div", c="muted")),
                          "ref": cell(td[2]), "beta": cell(td[3])})
        ev = [d for d in a.children("details") if d.one("figure")]
        seg["jobs"].append({"id": F(a.one("span", c="fid")), "segment": seg["name"], "segmentId": seg["id"],
                            "priority": F(a.one("div", c="f-meta").one("span", c="chip")),
                            "outcome": a.attrs.get("data-outcome", ""), "outcomeLabel": F(a.one("div", c="f-meta").one("span", c="res")),
                            "statement": F(a.one("p", c="job-st")), "note": F(left.one("p", c="job-note")),
                            "success": [F(li) for li in left.all("li")], "refs": refs(left.one("p", c="bugrel")),
                            "steps": steps, "shots": shots(ev[0]) if ev else []})
    jt["segments"].append(seg)
D["jtbd"] = jt

# ---------------------------------------------------------------- write site data
os.makedirs(os.path.join(ROOT, "site", "data"), exist_ok=True)
for key, val in D.items():
    with open(os.path.join(ROOT, "site", "data", key + ".js"), "w", encoding="utf-8") as f:
        f.write("window.DATA=window.DATA||{};window.DATA[%s]=" % json.dumps(key))
        json.dump(val, f, ensure_ascii=False, indent=1)
        f.write(";\n")

# ---------------------------------------------------------------- write markdown
FILES = []  # (path, description)


def esc(s):
    return (s or "").replace("|", "\\|").replace("\n", "<br>")


def md_table(head, rows):
    out = ["| " + " | ".join(esc(h) for h in head) + " |", "|" + "---|" * len(head)]
    for r in rows:
        if isinstance(r, dict):
            out.append("| **" + esc(r["group"]) + "** |" + " |" * (len(head) - 1))
        else:
            out.append("| " + " | ".join(esc(c) for c in r) + " |")
    return "\n".join(out) + "\n"


def write(path, desc, text):
    full = os.path.join(ROOT, "docs", path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(text.rstrip() + "\n")
    FILES.append(("docs/" + path, desc, len(text)))


def write_chunks(base, title, desc, intro, blocks):
    """Write blocks into base.md, splitting into base-2.md, … when too large."""
    parts, cur = [], []
    for blk in blocks:
        if cur and sum(map(len, cur)) + len(blk) > MAX_MD:
            parts.append(cur)
            cur = []
        cur.append(blk)
    parts.append(cur)
    for i, p in enumerate(parts):
        suffix = "" if i == 0 else "-%d" % (i + 1)
        head = "# %s%s\n\n%s\n\n" % (title, "" if len(parts) == 1 else " (part %d of %d)" % (i + 1, len(parts)), intro)
        write(base + suffix + ".md", desc + ("" if len(parts) == 1 else " (part %d/%d)" % (i + 1, len(parts))), head + "\n".join(p))


def shots_md(sh, up="../../"):
    return "".join("- Screenshot: [%s](%s%s)\n" % (x["caption"] or x["img"], up, x["img"]) for x in sh)


def finding_md(f):
    return ("## %s — %s\n\n- Severity: **%s** · Type: %s · Module: %s\n\n**Vercel reference:** %s\n\n**Beta:** %s\n\n**Impact:** %s\n\n**Recommendation:** %s\n\n%s"
            % (f["id"], f["title"], f["sev"], f["typeLabel"], f["module"], f["vercel"], f["beta"], f["impact"], f["rec"], shots_md(f["shots"])))


o = D["overview"]
txt = "# %s\n\n%s\n\n%s\n\n" % (o["title"], o["eyebrow"], o["intro"])
txt += "".join("- %s: %s\n" % (u["label"], u["href"]) for u in o["urls"])
txt += "\n## Numbers\n\n" + "".join("- **%s** %s\n" % (k["value"], k["label"]) for k in o["kpis"])
for p in o["panels"]:
    txt += "\n## %s\n\n" % p["title"] + "".join("- %s\n" % i for i in p["items"])
txt += "\n## By area\n"
for a in D["areas"]:
    txt += "\n### %s\n\n*%s*\n\n%s\n\n%s\n" % (a["title"], a["modules"], a["text"], " · ".join(a["counts"]))
txt += "\n## Method and limits\n\n" + "".join("- %s\n" % i for i in o["method"])
write("01-overview.md", "Summary, headline numbers, area summaries, method and limits", txt)

m = D["modules"]
txt = "# Module status: what works on the beta\n\n%s\n\n%s\n\n" % (m["lede"], " · ".join(m["counts"]))
grp = None
for r in m["rows"]:
    if r["group"] != grp:
        grp = r["group"]
        txt += "\n## %s\n" % grp
    txt += "\n### %s — %s\n\n- Works today: %s\n- Doesn't work / missing: %s\n- Findings: %s\n" % (
        r["module"], r["statusLabel"], r["works"], r["broken"], ", ".join(r["refs"]) or "–")
write("02-module-status.md", "One entry per module: working / partly / broken / missing", txt)

txt = "# Top issues to fix first\n\n%s\n\n" % D["top"]["lede"]
txt += md_table(["Severity", "Module", "ID", "Issue", "Fix"], [[r["sev"], r["module"], r["id"], r["title"], r["fix"]] for r in D["top"]["rows"]])
write("03-top-issues.md", "Critical and high severity issues, most important first", txt)

write("04-module-coverage.md", "Which reference modules/routes exist on the beta",
      "# Module coverage\n\n%s\n\n%s" % (D["coverage"]["lede"], md_table(D["coverage"]["head"], D["coverage"]["rows"])))
write("05-site-response.md", "LCP / TTFB per page and failing API calls",
      "# Site response\n\n%s\n\n%s" % (D["response"]["lede"], md_table(D["response"]["head"], D["response"]["rows"])))

SEVS = ["critical", "high", "medium", "low"]
for sv in SEVS:
    fs = [f for f in D["findings"] if f["sev"] == sv]
    if fs:
        write_chunks("findings/findings-" + sv, "Findings: %s severity" % sv, "%d %s-severity findings (%s … %s)" % (len(fs), sv, fs[0]["id"], fs[-1]["id"]),
                     "%d findings. Each compares the Vercel reference with the beta." % len(fs), [finding_md(f) for f in fs])
write_chunks("findings/beta-better", "Where the beta is better", "%d places the beta beats the reference (keep these)" % len(D["better"]),
             "Worth keeping, and worth bringing back into the reference.", [finding_md(f) for f in D["better"]])
idx = "# Findings index\n\nAll %d findings (plus %d \"beta is better\" notes). Details live in the `findings-<severity>*.md` files next to this one.\n\n" % (len(D["findings"]), len(D["better"]))
idx += md_table(["ID", "Severity", "Type", "Module", "Title"], [[f["id"], f["sev"], f["typeLabel"], f["module"], f["title"]] for f in D["findings"] + D["better"]])
write("findings/00-index.md", "One-line index of every finding (ID, severity, module, title)", idx)

txt = "# Key journeys, screen by screen\n\n%s\n" % D["journeys"]["lede"]
for w in D["journeys"]["items"]:
    txt += "\n## %s\n\n%s\n" % (w["title"], w["desc"])
    for lane in w["lanes"]:
        txt += "\n**%s**\n\n" % lane["label"]
        for i, st in enumerate(lane["steps"], 1):
            bits = [st["hint"], "Action: " + st["action"] if st["action"] else "", "**%s**" % st["badge"] if st["badge"] else "", st["note"],
                    "[screen](../%s)" % st["img"] if st["img"] else ""]
            txt += "%d. **%s** — %s\n" % (i, st["title"], " · ".join(x for x in bits if x))
write("06-key-journeys.md", "7 key journeys compared step by step (reference vs beta)", txt)

fl = D["flows"]
write_chunks("07-tested-flows", "All tested flows (checklist)", "%d task flows with pass / partial / fail / stopped result" % len(fl["rows"]), fl["lede"],
             ["## %s — %s\n\n- Result: **%s**\n- Vercel: %s\n- Beta: %s\n- Note: %s\n" % (r["module"], r["flow"], r["result"], r["vercel"], r["beta"], r["note"]) for r in fl["rows"]])

q = D["qa"]
sm = q["summary"]
txt = "# QA test report: summary and release recommendation\n\n%s\n\n## Verdict\n\n**%s**\n\n%s\n\n## Numbers\n\n" % (q["intro"], sm["verdict"], sm["text"])
txt += "".join("- **%s** %s\n" % (k["value"], k["label"]) for k in sm["kpis"])
txt += "\n## Defects by severity and priority\n\n" + md_table(sm["bySeverity"]["head"], sm["bySeverity"]["rows"])
txt += "\n## Defects by module\n\n" + md_table(sm["byModule"]["head"], sm["byModule"]["rows"])
txt += "\n## Exit criteria\n\n" + md_table(sm["exit"]["head"], sm["exit"]["rows"])
write("qa/01-summary.md", "Release recommendation (No-Go), QA numbers, exit criteria", txt)

txt = "# QA test plan and approach\n"
for p in q["plan"]["panels"]:
    txt += "\n## %s\n\n" % p["title"] + "".join("- %s\n" % i for i in p["items"])
txt += "\n## Suites run\n"
for su in q["plan"]["suites"]:
    txt += "\n### %s\n\n%s\n\n*Environment:* %s\n" % (su["title"], su["text"], su["env"])
write("qa/02-test-plan.md", "Scope, approach, and what each test suite covered", txt)


def bug_md(x):
    return ("## %s — %s\n\n- Severity: **%s** · Priority: **%s** · Module: %s · Reproducibility: %s\n- Environment: %s\n- Preconditions: %s\n\n**Steps to reproduce**\n\n%s\n**Expected:** %s\n\n**Actual:** %s\n\n%s%s%s"
            % (x["id"], x["title"], x["sev"], x["pri"], x["module"], x["repro"], x["env"], x["pre"],
               "".join("%d. %s\n" % (i, s_) for i, s_ in enumerate(x["steps"], 1)), x["expected"], x["actual"],
               "**Console / network**\n\n```\n%s\n```\n\n" % x["logs"] if x["logs"] else "",
               "%s\n\n" % x["related"] if x["related"] else "", shots_md(x["shots"])))


for pri in ["P1", "P2", "P3"]:
    bs = [x for x in D["defects"] if x["pri"] == pri]
    if bs:
        write_chunks("qa/defects-" + pri.lower(), "Defect log: %s" % pri, "%d %s defects, ticket-ready (steps, expected/actual, logs)" % (len(bs), pri),
                     "%d defects, sorted by severity." % len(bs), [bug_md(x) for x in bs])
write("qa/defects-00-index.md", "One-line index of all %d defects" % len(D["defects"]),
      "# Defect index\n\n" + md_table(["ID", "Severity", "Priority", "Module", "Title"], [[x["id"], x["sev"], x["pri"], x["module"], x["title"]] for x in D["defects"]]))


def case_md(c):
    out = "## %s — %s\n\n- Status: **%s** · Priority: %s · Env: %s%s\n" % (c["id"], c["title"], c["status"], c["pri"], c["env"],
                                                                         " · Defects: " + ", ".join(c["defects"]) if c["defects"] else "")
    for lab, k in (("Preconditions", "pre"), ("Steps", "steps"), ("Expected", "expected"), ("Actual", "actual"), ("Notes", "notes")):
        if c[k]:
            out += "- %s: %s\n" % (lab, c[k].replace("\n", " → ") if k == "steps" else c[k])
    return out


def slug(s_):
    return re.sub(r"[^a-z0-9]+", "-", s_.lower()).strip("-")


txt = "# Test cases: index\n\n%d test cases. Full steps are in `test-cases/<suite>.md`.\n\n## Suites\n\n%s\n## All cases\n\n" % (len(D["cases"]), md_table(D["suites"]["head"], D["suites"]["rows"]))
txt += md_table(["ID", "Suite", "Status", "Pri", "Test case", "Defects"], [[c["id"], c["suite"], c["status"], c["pri"], c["title"], ", ".join(c["defects"])] for c in D["cases"]])
write_chunks("qa/test-cases/00-index", "Test cases: index", "Suite totals and a one-line index of all %d test cases" % len(D["cases"]), "", [txt])
for su in sorted({c["suite"] for c in D["cases"]}):
    cs = [c for c in D["cases"] if c["suite"] == su]
    write_chunks("qa/test-cases/" + slug(su), "Test cases: " + su, "%d test cases for %s" % (len(cs), su),
                 "%d cases · %d pass · %d fail" % (len(cs), sum(c["status"] == "pass" for c in cs), sum(c["status"] == "fail" for c in cs)), [case_md(c) for c in cs])

cp = q["compat"]
txt = "# Cross-browser and devices\n\n%s\n\n%s\n## Notes for cells that are not a plain pass\n\n" % (cp["lede"], md_table(cp["head"], [[r["page"]] + [c["res"] for c in r["cells"]] for r in cp["rows"]]))
for r in cp["rows"]:
    for h, c in zip(cp["head"][1:], r["cells"]):
        if c["res"] != "pass":
            txt += "- `%s` · %s: %s\n" % (r["page"], h, c["note"])
write("qa/03-cross-browser.md", "Browser × viewport compatibility matrix", txt)
a = q["a11y"]
write("qa/04-accessibility.md", "axe-core scan counts per page and keyboard walkthroughs",
      "# Accessibility (WCAG 2.1 AA)\n\n%s\n\n## axe-core scans\n\n%s\n## Keyboard flows\n\n%s" % (a["lede"], md_table(a["scans"]["head"], a["scans"]["rows"]), md_table(a["keyboard"]["head"], a["keyboard"]["rows"])))
txt = "# Security, performance and resilience\n\n%s\n" % q["nonfunctional"]["lede"]
for t_ in q["nonfunctional"]["tables"]:
    txt += "\n## %s\n\n%s" % (t_["title"], md_table(t_["head"], t_["rows"]))
write("qa/05-security-performance.md", "Security headers, cookies, Lighthouse, page performance, error handling", txt)

jt = D["jtbd"]
txt = "# Jobs to be done, by user segment\n\n%s\n\n> %s\n\n## Readiness by segment\n\n%s" % (jt["intro"], jt["note"], md_table(jt["matrix"]["head"], jt["matrix"]["rows"]))
write("jtbd/00-overview.md", "Segment readiness matrix and test-environment note", txt)
for sg in jt["segments"]:
    intro = "**%s.** %s\n\n- Who: %s\n- Plan: %s\n- Success for them: %s\n\n## Top blockers\n\n%s" % (
        sg["verdict"], sg["summary"], sg["who"], sg["plan"], sg["success"], "".join("- %s\n" % x for x in sg["blockers"]))
    blocks = []
    for jb in sg["jobs"]:
        t_ = "## %s — %s (%s)\n\n> %s\n\n%s\n\n**Success looks like**\n\n%s\nRelated: %s\n\n" % (
            jb["id"], jb["outcomeLabel"], jb["priority"], jb["statement"], jb["note"], "".join("- %s\n" % x for x in jb["success"]), ", ".join(jb["refs"]) or "–")
        t_ += md_table(["#", "Step", "Reference", "Beta"], [[st["n"], "%s (%s)" % (st["step"], st["where"]), "**%s** %s" % (st["ref"]["res"], st["ref"]["text"]),
                                                              "**%s** %s" % (st["beta"]["res"], st["beta"]["text"])] for st in jb["steps"]])
        t_ += "\n" + shots_md(jb["shots"], "../../")
        blocks.append(t_)
    write_chunks("jtbd/" + sg["id"], "Segment: " + sg["name"], "%s — %s, %d jobs" % (sg["name"], sg["verdict"], len(sg["jobs"])), intro, blocks)

# index
FILES.sort()
idx = "# CloudReel: Vercel reference vs Beta — report index\n\n%s\n\nThe original 13 MB HTML report was split into the small files below. Screenshots are in `images/`.\nRegenerate with `python3 tools/extract.py`. Fix-tracking state lives in `tracking/status.json` (written by the tracker website).\n\n" % o["eyebrow"]
idx += "| File | Size | What's inside |\n|---|---|---|\n"
idx += "".join("| [%s](%s) | %d KB | %s |\n" % (p, p, max(1, n // 1024), d) for p, d, n in FILES)
with open(os.path.join(ROOT, "INDEX.md"), "w", encoding="utf-8") as f:
    f.write(idx)

print("findings %d, better %d, defects %d, cases %d, flows %d, journeys %d, segments %d, jobs %d" % (
    len(D["findings"]), len(D["better"]), len(D["defects"]), len(D["cases"]), len(D["flows"]["rows"]), len(jr),
    len(jt["segments"]), sum(len(s_["jobs"]) for s_ in jt["segments"])))
print("markdown files: %d, largest %d KB" % (len(FILES), max(n for _, _, n in FILES) // 1024))
