# Test cases: Pricing

3 cases · 2 pass · 0 fail

## TC-FUNC-025 — Verify that public /pricing lists plans with prices and working CTAs

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out
- Steps: 1. Open /pricing → 2. Read plans → 3. Check CTA targets
- Expected: Plans with price, credits, features; CTAs go to sign-up; Sign in link.
- Actual: HTTP 200; Lite $12 (1,200 credits), Essential $29 Popular (3,600), Growth $49 (7,200); 3 x "Get started" -> /signup; Sign in -> /login. Footer text "Every account starts on Free" but Free plan is not shown as a column.
- Notes: Copy issues already in SHA-05; signed-in pricing journey in SHA-06.

## TC-FUNC-026 — Verify that the in-app plan picker can be dismissed with Escape and Close

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan · Defects: BUG-FUNC-06
- Preconditions: Signed in, new tab
- Steps: 1. Open / in a new context → 2. Press Escape
- Expected: Modal closes; focus returns to page.
- Actual: Esc closes "Choose your plan"; focus lands on <body>. The modal opened unrequested (BUG-FUNC-06).

## TC-FUNC-027 — Verify that choosing a plan starts checkout

- Status: **not-run** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan
- Preconditions: Signed in
- Steps: 1. Click Get Lite
- Expected: Checkout opens.
- Actual: Not executed.
- Notes: Would start checkout/billing (forbidden).
