# Test cases: Project detail

5 cases · 1 pass · 2 fail

## TC-FUNC-058 — Verify that opening a project shows its tabs and each tab is deep-linkable

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Open test-clip → 2. Click Clips, Captions, Creations, Downloads, Drafts, Recording → 3. Reload on a tab
- Expected: Tabs switch content; tab in URL; refresh keeps the tab.
- Actual: Opens /projects?video=<id>, H1 "test-clip"; tabs switch and write &tab=clips|captions|creations|downloads|drafts; reload keeps the URL/tab; Back returns to library. Captions: "No speech was found in this video."
- Notes: Tabs are buttons without role=tab (a11y note).

## TC-FUNC-059 — Verify that the Creations composer only offers supported platforms

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-13
- Preconditions: Project detail > Creations
- Steps: 1. Open Creations
- Expected: Only platforms the product can publish to (reference: YouTube/Instagram/Facebook).
- Actual: "YOUR POSTS YouTube ✓ Instagram ! TikTok ! LinkedIn ! Facebook ! X ! Threads ! Snapchat ! — 1 of 8 posts ready". 2/2.

## TC-FUNC-060 — Verify that a deep link to a non-existent project shows a not-found message

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-20
- Preconditions: Signed in
- Steps: 1. Open /projects?video=00000000-0000-4000-8000-000000000000 → 2. Open /projects?video=not-a-uuid
- Expected: "This project doesn't exist or was deleted" with a way back.
- Actual: Both silently drop to the full library (/projects) with no message; malformed id triggers GET /api/gateway/video/content?ids=not-a-uuid -> 404 console error. 2/2.

## TC-FUNC-061 — Verify that Start Smart Clips analysis runs

- Status: **not-run** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Project detail > Clips
- Steps: 1. Click Start Smart Clips Analysis
- Expected: Job starts.
- Actual: Not executed.
- Notes: Spends credits / runs AI job.

## TC-FUNC-062 — Verify that the editor opens a project

- Status: **not-run** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Project card
- Steps: 1. Continue editing
- Expected: Editor opens without writing.
- Actual: Not executed.
- Notes: Rule: never open /editor (auto-saves on open, CREATE-28).
