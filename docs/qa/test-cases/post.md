# Test cases: Post

8 cases · 2 pass · 5 fail

## TC-FUNC-087 — Verify that the Post page loads posts and numbers without errors

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-02
- Preconditions: Signed in
- Steps: 1. Open /post
- Expected: Queue, recent posts, Best Time to Post and view counts load.
- Actual: GET /api/gateway/video/social/posts?range=all&sort=published&limit=200 -> 500 and GET .../post-metrics?post_uuids=... -> 500 ({"error":{"code":"internal","message":"internal error"}}); "Could not read your post numbers: internal error"; Views "—". 3/3 loads.

## TC-FUNC-088 — Verify that Post counts agree across the page

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-10
- Preconditions: /post
- Steps: 1. Compare This Month and Posts tab counters
- Expected: Same number of published posts everywhere.
- Actual: "This Month: Posts published 4" vs Posts tab "2 Videos published" / "Published 2" (each post is listed twice, once per YouTube channel). 2/2.

## TC-FUNC-089 — Verify that Queue / Approvals / Posts tabs switch and persist on refresh

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /post
- Steps: 1. Click Approvals; reload → 2. Click Posts; reload
- Expected: Tab kept in URL.
- Actual: ?tab=approvals and ?tab=posts kept after reload. 2/2.

## TC-FUNC-090 — Verify that clicking a published post opens its details with numbers

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-03
- Preconditions: /post?tab=posts
- Steps: 1. Click first row → 2. Esc
- Expected: Details dialog with metrics; Esc closes; focus returns.
- Actual: Dialog opens with activity timeline and View on YouTube, but "Could not load this post’s numbers: internal error" (GET /social/posts/<uuid>/metrics?range=90d -> 500). Esc closes; focus returns to the row. 2/2.

## TC-FUNC-091 — Verify that the row More (⋮) button opens a menu

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-14
- Preconditions: /post?tab=posts
- Steps: 1. Click "More for <title>"
- Expected: Menu with post actions.
- Actual: Nothing opens: aria-haspopup=menu but aria-expanded stays false, no popup in DOM, page text unchanged. 4/4 clicks over 2 rows.

## TC-FUNC-092 — Verify that Manage accounts only offers connectable platforms and a consistent count

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-11, BUG-FUNC-12
- Preconditions: /post
- Steps: 1. Manage accounts → 2. Esc
- Expected: Only supported platforms; count consistent with Settings; Esc closes.
- Actual: Dialog "1/9 connected" with live "Add account" on TikTok, Threads, LinkedIn, X labelled "Not set up on this server yet"; Settings > Connected Accounts says "1 / 4 connected" (YouTube "2 accounts connected"); header "1 platform live". Esc closes, focus returns. Add account not clicked.

## TC-FUNC-093 — Verify that New post opens the video picker and closes with Escape

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /post
- Steps: 1. New post → 2. Esc
- Expected: Picker; Esc closes; focus returns.
- Actual: "Select a video to post" with 4 ready videos; Esc closes; focus returns.

## TC-FUNC-094 — Verify that publishing/scheduling a post works

- Status: **not-run** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /post
- Steps: 1. New post -> pick -> Publish/Schedule
- Expected: Post queued/published.
- Actual: Not executed.
- Notes: Publishes/schedules (forbidden).
