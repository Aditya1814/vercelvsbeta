# CloudReel Beta Tracker

- Do NOT read `Vercel vs Beta comparison (1).html` (13 MB, base64 images). It is already split up.
- Start with `INDEX.md`, then read the specific file under `docs/` (all under 30 KB). To find an item by ID, grep `docs/` (e.g. `SHA-01`, `BUG-FUNC-01`, `TC-FUNC-001`, `CC-J1`).
- Fix-tracking state is `tracking/status.json` (`items[ID] = {status, owner, note, updated}`; status is open / in-progress / fixed / verified / wontfix; a missing ID means open). The website (`python3 server.py`, http://localhost:8765/) reads and writes it.
- `python3 tools/extract.py` regenerates `docs/`, `images/`, `site/data/` from the HTML; it never touches `tracking/`.
