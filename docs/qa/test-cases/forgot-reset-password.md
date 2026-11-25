# Test cases: Forgot / reset password

5 cases · 3 pass · 1 fail

## TC-FUNC-020 — Verify that Send reset link is disabled with an empty email

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out, /forgot-password
- Steps: 1. Leave email empty
- Expected: Button disabled or required message.
- Actual: Send reset link disabled; field required.

## TC-FUNC-021 — Verify that malformed emails cannot be submitted on forgot password

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: /forgot-password
- Steps: 1. Type abc / abc@ / 300 x "x" + "@" / "😀@example" → 2. Click Send reset link
- Expected: Submission blocked with a message.
- Actual: Button becomes enabled but native validation blocks submit for every value ("Please include an '@'..." etc.); no reset request sent. A single space keeps the button disabled.
- Notes: Valid-format submit not run (would send an email).

## TC-FUNC-022 — Verify that a valid address triggers the reset email and a confirmation

- Status: **not-run** · Priority: P1 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: /forgot-password
- Steps: 1. Enter a real address → 2. Send reset link
- Expected: Neutral confirmation ("if an account exists...").
- Actual: Not executed.
- Notes: Would send an email (write). Stopped before Send.

## TC-FUNC-023 — Verify that /reset-password without a token explains what to do

- Status: **pass** · Priority: P3 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out
- Steps: 1. Open /reset-password
- Expected: Friendly message and link to request a new email.
- Actual: "Nothing to reset — This page needs the link from your password-reset email... Request a new link".

## TC-FUNC-024 — Verify that an invalid/expired reset token is rejected before the user types a new password

- Status: **fail** · Priority: P3 · Env: Chrome 158, 1440x900, signed-out fresh context · Defects: BUG-FUNC-24
- Preconditions: Signed out
- Steps: 1. Open /reset-password?token=not-a-real-token
- Expected: Token checked on load; "link expired/invalid" with Request a new link.
- Actual: Shows full "Choose a new password" form (New/Confirm password, Update password) for a made-up token; failure would only surface after submit. 2/2.
- Notes: Submit not run.
