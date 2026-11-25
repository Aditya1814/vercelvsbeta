# CloudReel Beta Tracker

The 13 MB report `Vercel vs Beta comparison (1).html` split into small files, plus a website to track fixes.

## Open the tracker

    python3 server.py          # then open http://localhost:8765/

Set a status (Open / In progress / Fixed / Verified / Won't fix), owner and notes on any finding,
defect, failed test case or user job. Changes are saved to `tracking/status.json`.

Handy: `Ctrl/⌘ K` searches everything by ID or title, `/` jumps to the list filter, tick rows to set
a status in bulk, and every item has a shareable link (`#/findings?item=SHA-01`). Light and dark themes
follow the system, with a toggle top right.

Opening `site/index.html` directly also works, but then changes stay in that browser only (use Export / Import).

## What's where

| Path | What |
|---|---|
| `INDEX.md` | List of every markdown file with a one-line description. Start here. |
| `docs/` | The report as 59 small markdown files (largest 28 KB) |
| `images/` | 359 screenshots that were embedded in the HTML |
| `site/` | The tracker website (`site/data/*.js` holds the structured data) |
| `tracking/status.json` | Fix-tracking state, written by the website |
| `tools/extract.py` | Regenerates `docs/`, `images/` and `site/data/` from the HTML report |

IDs: `SHA-`, `LIVE-`, `CREATE-`, `PUB-`, `X-` are findings; `BUG-*` are QA defects; `TC-*` are test cases; `CC-J1`, `ED-J2`, … are user jobs.

## Deploying to Vercel

The site also runs on Vercel for the whole team to use. Everything (pages, images and the
`/api/*` endpoints) is routed through one Python serverless function, `api/index.py` (see
`vercel.json`), which:

- Requires HTTP Basic Auth on every request, using the `BASIC_AUTH_USER` / `BASIC_AUTH_PASS`
  environment variables. The site returns 401 for everyone until both are set.
- Reads and writes tracking state from Upstash Redis (Vercel's KV storage integration), since
  serverless functions have no writable shared disk — `tracking/status.json` is only used by the
  local server.

### One-time setup

1. **Import the repo** — in the Vercel dashboard, "Add New… → Project" and pick this GitHub repo.
   No build command or framework preset is needed ("Other" is fine).
2. **Add a KV store** — Project → Storage → Create Database → *Upstash Redis* (Marketplace),
   then connect it to this project. That injects the `KV_REST_API_URL` / `KV_REST_API_TOKEN`
   (or `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`) environment variables automatically.
3. **Set the Basic Auth credentials** — Project → Settings → Environment Variables, add
   `BASIC_AUTH_USER` and `BASIC_AUTH_PASS`.
4. Redeploy (Deployments → ⋯ → Redeploy) so the function picks up the new environment variables.

The import step from GitHub can import the whole team's status once; after that, every `git push`
to the connected branch redeploys automatically.
