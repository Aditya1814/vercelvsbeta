# Test cases: Authentication

8 cases · 7 pass · 0 fail

## TC-FUNC-001 — Verify that the sign-in page renders Google SSO, email, password, Forgot password and Sign up

- Status: **pass** · Priority: P1 · Env: Chrome 158, 1440x900, signed-out fresh context · Defects: BUG-FUNC-17
- Preconditions: Signed out
- Steps: 1. Open /login
- Expected: Sign-in form with Google, email + password, Forgot password link, Sign up link (reference: Google/Microsoft/GitHub SSO + email).
- Actual: H1 "Welcome back"; Continue with Google, email (required, autocomplete=email), password (required, autocomplete=current-password), Show password, Sign in, Forgot password?, Sign up, Pricing/Terms/Privacy links. Only Google SSO (known SHA-07).
- Notes: Run 2x. Console shows GET /api/auth/me 401 on load (BUG-FUNC-17).

## TC-FUNC-002 — Verify that submitting sign-in with empty fields is blocked with a field message

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out, /login
- Steps: 1. Leave email and password empty → 2. Click Sign in
- Expected: No request sent; user told the field is required; focus on first invalid field.
- Actual: Native validation "Please fill out this field." on email; focus moved to email; no network request; URL unchanged.

## TC-FUNC-003 — Verify that malformed email addresses are rejected client-side on sign-in

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out, /login
- Steps: 1. Type each of: abc, abc@, "a b@example.com", @example.com → 2. Type any password → 3. Click Sign in (also press Enter)
- Expected: Submission blocked with a clear message for each; no auth request.
- Actual: Each blocked by native type=email validation with browser messages (e.g. "Please include an '@' in the email address."). No POST /api/auth/signin sent. No custom inline error or aria-invalid; relies on browser bubble only.
- Notes: Messages are the browser defaults, not product copy; acceptable but inconsistent with sign-up step 2 styling.

## TC-FUNC-004 — Verify that sign-in with a non-existent account shows a generic error and does not reveal whether the account exists

- Status: **pass** · Priority: P1 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out; fake address qa.nonexistent.<ts>@example.com (2 attempts total, per QA rules)
- Steps: 1. Enter qa.nonexistent.1795512841441@example.com + NotARealPassw0rd! → 2. Click Sign in → 3. Repeat once
- Expected: HTTP 401 with a generic message (no account enumeration); user stays on /login; email kept, password field usable.
- Actual: Both attempts: POST /api/auth/signin -> 401 {"error":{"code":"invalid_credentials","message":"email or password is incorrect"}} (~1.65 s). UI alert: "We could not sign you in. Check your email and password. If you deleted your account, you can sign up again with the same email." Stays on /login, email and password retained.
- Notes: Generic message = good (no enumeration). Rate-limit/lockout behaviour not tested (would need more attempts; forbidden).

## TC-FUNC-005 — Verify that the password visibility toggle shows and hides the password without losing the value

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out, /login
- Steps: 1. Type Secret12! in password → 2. Click "Show password" → 3. Click "Hide password"
- Expected: Type switches password->text->password; label switches Show/Hide; value kept.
- Actual: type password -> text (label becomes "Hide password") -> password; value "Secret12!" kept. Same toggle works on sign-up step 2.
- Notes: Toggle has no aria-pressed; label swap is sufficient.

## TC-FUNC-006 — Verify that a signed-in user opening /login is redirected into the app and honours ?next

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan
- Preconditions: Signed in
- Steps: 1. Open /login?next=/projects → 2. Open /login?next=/settings?tab=billing
- Expected: Redirect to the requested in-app page.
- Actual: /login?next=/projects -> /projects; /login?next=/settings?tab=billing -> /settings?tab=billing.

## TC-FUNC-007 — Verify that ?next on /login cannot redirect off-site (open redirect)

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan
- Preconditions: Signed in
- Steps: 1. Open /login?next=//example.com → 2. Open /login?next=https://example.com
- Expected: External targets ignored; user lands inside the app.
- Actual: Both land on https://app-beta.cloudreel.com/ (external next ignored).
- Notes: Passive check only (own browser navigation).

## TC-FUNC-008 — Verify that returning to the original page after signing in works end-to-end

- Status: **not-run** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out deep link to /projects
- Steps: 1. Open /projects signed out → 2. Sign in → 3. Observe landing page
- Expected: Lands on /projects after sign-in.
- Actual: Redirect to /login?next=%2Fprojects verified, and next is honoured for an already-signed-in session (see previous TC). The actual sign-in step was not performed.
- Notes: Not run: QA rules forbid signing in to real accounts; covered indirectly by the two TCs above.
