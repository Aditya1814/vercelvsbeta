# Test cases: Analytics

2 cases · 0 pass · 2 fail

## TC-FUNC-104 — Verify that Analytics loads the overview for the default range

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-01
- Preconditions: Signed in
- Steps: 1. Open /analytics
- Expected: KPIs and charts.
- Actual: Only "Could not load analytics internal error Try again"; GET /api/gateway/video/social/overview?range=30d -> 500; Export CSV disabled. 3/3.

## TC-FUNC-105 — Verify that changing range and Try again recover

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-01
- Preconditions: /analytics
- Steps: 1. Click 7d → 2. Try again
- Expected: Data loads or a clear recoverable message.
- Actual: ?range=7d set, overview?range=7d -> 500; Try again repeats the 500. 2/2.
