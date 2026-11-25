# Test cases: Settings

5 cases · 1 pass · 2 fail

## TC-FUNC-106 — Verify that every Settings section opens and survives refresh

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in
- Steps: 1. Click Workspace & Team, Connected Accounts, Connected apps, Security, Billing and plans, Account → 2. Reload on each
- Expected: Section in URL and restored.
- Actual: Hash routes #workspace, #connected-accounts, #apps, #security, #billing, #account all restored after reload. 2/2. (Note: /settings?tab=... is ignored — only the hash works.)

## TC-FUNC-107 — Verify that Display name cannot be saved empty

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-25
- Preconditions: Settings > Account
- Steps: 1. Clear Display name → 2. Check Save changes → 3. Type 300 chars
- Expected: Save disabled or inline error for empty; length capped.
- Actual: Empty name: Save changes ENABLED, no error; 300 chars capped at 80 (maxlength). Restored original; Save not clicked. 2/2.
- Notes: Server-side handling unverified.

## TC-FUNC-108 — Verify that Change password dialog opens and closes with Escape

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-22
- Preconditions: Settings > Account
- Steps: 1. Change password → 2. Esc
- Expected: Dialog; Esc closes; focus returns.
- Actual: Dialog (Current/New/Confirm, Cancel, Save password); Esc closes; focus to <body>.

## TC-FUNC-109 — Verify that 2FA set-up, sign out of other devices, delete account work

- Status: **not-run** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Settings
- Steps: 1. Set up 2FA → 2. Sign out other devices → 3. Delete account
- Expected: Flows work.
- Actual: Not executed.
- Notes: All write data / sign out (forbidden). Set up 2FA sends POST /api/auth/mfa/enroll on open (earlier pass).

## TC-FUNC-110 — Verify that Connect a social account starts OAuth

- Status: **not-run** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Settings > Connected Accounts
- Steps: 1. Add account
- Expected: OAuth flow.
- Actual: Not executed. Note: merely opening the section fires POST .../oauth/<platform>/start-ticket for 4 platforms (blocked by our guard).
- Notes: Connecting accounts forbidden.
