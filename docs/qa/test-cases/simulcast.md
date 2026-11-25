# Test cases: Simulcast

4 cases · 2 pass · 2 fail

## TC-FUNC-100 — Verify that Simulcast lists channels and opens a channel page with tabs

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in
- Steps: 1. Open /simulcast → 2. Open test-clip → 3. Click Schedule; reload
- Expected: Channel page with Overview/Analytics/Schedule/Playlists/Settings; tab kept.
- Actual: /simulcast?channel=<id>, tabs Overview/Analytics/Schedule/Playlists/Settings; &tab=schedule kept after reload.

## TC-FUNC-101 — Verify that Live / Scheduled / Drafts filters persist on refresh

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-27
- Preconditions: /simulcast
- Steps: 1. Click each filter; reload
- Expected: Filter kept.
- Actual: All revert to "All Simulcasts" after reload (URL never changes). 2/2.

## TC-FUNC-102 — Verify that New channel and Broadcast a video dialogs open and close with Escape

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /simulcast
- Steps: 1. New channel, Esc → 2. Broadcast a video, Esc
- Expected: Dialogs; Esc closes; focus returns.
- Actual: Both open (Broadcast shows a video listbox); Esc closes; focus returns to trigger. Not submitted.

## TC-FUNC-103 — Verify that a non-existent channel id shows a not-found message

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-20
- Preconditions: Signed in
- Steps: 1. Open /simulcast?channel=00000000-0000-4000-8000-000000000000
- Expected: Not-found notice.
- Actual: Silently shows the channel list (URL keeps the bogus id).
