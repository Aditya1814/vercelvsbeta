# Test cases: Custom Layouts & Graphics

3 cases · 0 pass · 2 fail

## TC-FUNC-079 — Verify that Custom Layouts loads and its Recycle bin opens/closes

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-22
- Preconditions: Signed in
- Steps: 1. Open /layouts → 2. Recycle bin → 3. Esc
- Expected: Empty state; bin dialog; Esc closes; focus returns.
- Actual: Loads with no errors; "Recycle bin ... The recycle bin is empty."; Esc closes; focus to <body>.

## TC-FUNC-080 — Verify that Graphics loads and "Start from a template" opens/closes

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-22
- Preconditions: Signed in
- Steps: 1. Open /graphics → 2. Start from a template → 3. Esc
- Expected: Templates dialog; Esc closes; focus returns.
- Actual: Templates dialog (News, Sports, Breaking + L-Band); Esc closes; focus to <body>.

## TC-FUNC-081 — Verify that New layout / New template create a design

- Status: **not-run** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: –
- Steps: 1. Click New layout
- Expected: Editor opens.
- Actual: Not executed.
- Notes: May create a draft on the server.
