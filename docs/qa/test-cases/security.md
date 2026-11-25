# Test cases: Security

16 cases · 8 pass · 6 fail

## TC-NF-001 — Verify that every HTML response sends X-Frame-Options/frame-ancestors

- Status: **fail** · Priority: P1 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-01
- Preconditions: None
- Steps: 1. Read document headers of public and signed-in pages
- Expected: DENY / frame-ancestors none on all pages
- Actual: Only /login, /signup, /forgot-password, /settings

## TC-NF-002 — Verify that HSTS is sent on all responses

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-02
- Preconditions: None
- Steps: 1. curl -sD - beta pages and API
- Expected: strict-transport-security present (reference has it)
- Actual: Missing everywhere

## TC-NF-003 — Verify that CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy are set

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-03
- Preconditions: None
- Steps: 1. Read headers
- Expected: Present
- Actual: All missing (CSP only frame-ancestors on 4 routes); x-powered-by exposed

## TC-NF-004 — Verify that the session cookie is Secure, HttpOnly and SameSite

- Status: **pass** · Priority: P1 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in
- Steps: 1. Inspect cookies
- Expected: Secure+HttpOnly+SameSite
- Actual: __Host-cr_session: Secure, HttpOnly, SameSite=Lax, __Host- prefix

## TC-NF-005 — Verify that every other cookie has Secure flag

- Status: **fail** · Priority: P3 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-05
- Preconditions: Any visit
- Steps: 1. Inspect cookies
- Expected: Secure on all cookies
- Actual: cr_did not Secure, not HttpOnly

## TC-NF-006 — Verify that all app routes redirect to /login when signed out

- Status: **pass** · Priority: P1 · Env: curl
- Preconditions: Signed out
- Steps: 1. curl 19 app routes incl. /admin, /onboarding
- Expected: 307 to /login?next=<route>
- Actual: All 19 redirect (/ -> /login, others with next=)

## TC-NF-007 — Verify that app APIs refuse requests without a session

- Status: **pass** · Priority: P1 · Env: curl
- Preconditions: No cookies
- Steps: 1. Replay GET /api/auth/me, /api/gateway/subscription/v1/billing/summary, /api/gateway/video/content?limit=100 without cookies
- Expected: 401
- Actual: 401 {"error":{"code":"unauthenticated","message":"sign in to continue"}} for all three; /api/status is intentionally public

## TC-NF-008 — Verify that signed-in HTML and API responses are not cacheable by shared caches

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in
- Steps: 1. Read cache-control
- Expected: private/no-store
- Actual: HTML private,no-store; API no-store

## TC-NF-009 — Verify that no secrets/keys are present in client JS bundles or page source

- Status: **pass** · Priority: P1 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-15
- Preconditions: Signed in
- Steps: 1. Download 59 JS chunks loaded by 12 pages → 2. Grep for AWS/Stripe/Google keys, JWTs, tokens, private keys, sentry DSNs
- Expected: None
- Actual: None found; only public env names and a client salt fallback

## TC-NF-010 — Verify that source maps are not publicly served

- Status: **pass** · Priority: P3 · Env: curl
- Preconditions: None
- Steps: 1. GET <chunk>.js.map for 4 chunks → 2. Check sourceMappingURL comments
- Expected: 404 / no comments
- Actual: 404 for all, no sourceMappingURL in chunks

## TC-NF-011 — Verify that browser storage holds no tokens and minimal PII

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-06
- Preconditions: Signed in
- Steps: 1. Read localStorage/sessionStorage/document.cookie
- Expected: No tokens; minimal identity
- Actual: No tokens (session is HttpOnly). Full profile+permissions in sessionStorage cloudreel:session

## TC-NF-012 — Verify that console logs do not print user data or tokens

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in
- Steps: 1. Collect console on 12 pages
- Expected: No sensitive logs
- Actual: Only resource-load errors (404 admin relays, 500 social APIs)

## TC-NF-013 — Verify that user pages do not call admin/internal endpoints

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in
- Steps: 1. Visit 12 pages, filter requests for admin|internal|debug
- Expected: None
- Actual: /encoders calls /api/gateway/encoder/v1/admin/relays (404)

## TC-NF-014 — Verify that backend error bodies are not verbose

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-08
- Preconditions: Signed in
- Steps: 1. Capture bodies of 4xx/5xx API responses
- Expected: No stack traces / internals
- Actual: Terse JSON {"error":{"code":"internal","message":"internal error"}} - good; but text shown raw in UI

## TC-NF-016 — Verify that a negative login with an invalid account is handled safely

- Status: **not-run** · Priority: P3 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed out
- Steps: 1. Sign in with qa.nonexistent.<ts>@example.com
- Expected: Generic error, no account enumeration
- Actual: Not run - other QA areas own login; kept the 2-attempt budget unused
- Notes: Skipped to avoid spending the shared attempt budget.

## TC-NF-017 — Verify that ?next= on /login only redirects to same-origin paths

- Status: **blocked** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed out
- Steps: 1. Would require a sign-in to observe the redirect
- Expected: Same-origin only
- Actual: Not run - requires logging in (forbidden)
