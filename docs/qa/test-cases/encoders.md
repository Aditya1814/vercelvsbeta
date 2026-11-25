# Test cases: Encoders

3 cases · 2 pass · 1 fail

## TC-FUNC-076 — Verify that Encoders loads without errors

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-05
- Preconditions: Signed in
- Steps: 1. Open /encoders
- Expected: Page loads; no failing requests.
- Actual: Page renders (0 devices, "No phones yet") but GET /api/gateway/encoder/v1/admin/relays -> 404 {"error":"not_found"} + console error on every load. 2/2.

## TC-FUNC-077 — Verify that Devices/Streams tabs switch and persist on refresh

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /encoders
- Steps: 1. Click Streams; reload → 2. Click Devices; reload
- Expected: Tab kept.
- Actual: #streams / #devices hash kept across reload.

## TC-FUNC-078 — Verify that Invite a user dialog opens and closes with Escape

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /encoders
- Steps: 1. Click Invite a user → 2. Esc
- Expected: Dialog; Esc closes; focus returns.
- Actual: Dialog (email, Role Editor, Cancel, Send invitation); Esc closes; focus back on "Invite a user". Not sent.
