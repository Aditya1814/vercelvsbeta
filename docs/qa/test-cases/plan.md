# Test cases: Plan

5 cases · 4 pass · 1 fail

## TC-FUNC-095 — Verify that Plan shows posts and live events for the month

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-04, BUG-FUNC-02
- Preconditions: Signed in
- Steps: 1. Open /plan
- Expected: Calendar with posts and Studio events, no error banner.
- Actual: Posts render (4) but banner "Studio events could not be loaded: The Studio could not do that (200)." and "0 live events". POST .../producerEventPlaylist returns 200 with a JSON-encoded STRING body ("{\"Data\":[...]}"), so the client cannot read it; also GET .../post-metrics -> 500. 4/4 loads.

## TC-FUNC-096 — Verify that Month/Week/Day views switch and persist on refresh

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /plan
- Steps: 1. Week; reload → 2. Day; reload → 3. Month; reload
- Expected: View kept in URL.
- Actual: ?view=week, ?view=day kept; Month = /plan. 2/2.

## TC-FUNC-097 — Verify that Next month navigation persists on refresh

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /plan
- Steps: 1. Next month → 2. Reload
- Expected: Same month after reload.
- Actual: /plan?date=2026-12 kept after reload.

## TC-FUNC-098 — Verify that an invalid ?view value falls back gracefully

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in
- Steps: 1. Open /plan?view=bogus
- Expected: Default view.
- Actual: Month view shown, no crash.

## TC-FUNC-099 — Verify that the New menu opens and closes with Escape

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /plan
- Steps: 1. New → 2. Esc
- Expected: Menu Post / Live event; Esc closes; focus returns.
- Actual: Menu "Post — Schedule a video to social / Live event — A Studio session on the calendar"; Esc closes; focus on New.
