# Test cases: Sign-up

11 cases · 9 pass · 2 fail

## TC-FUNC-009 — Verify that step 1 requires a profile choice before Continue

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signed out, /signup
- Steps: 1. Open /signup → 2. Check Continue → 3. Pick "Content Creator" → 4. Continue
- Expected: Continue disabled until a profile is picked, then step 2 opens.
- Actual: Continue disabled initially; after picking Content Creator -> /signup?step=2&profile=creator.

## TC-FUNC-010 — Verify that Create account stays disabled while required fields are empty

- Status: **pass** · Priority: P1 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signup step 2
- Steps: 1. Leave all fields empty
- Expected: Create account disabled; requirements visible.
- Actual: Create account disabled; password checklist "At least 8 characters (not yet) / At least 3 of these (0/3)".

## TC-FUNC-011 — Verify that a malformed email keeps Create account disabled

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signup step 2
- Steps: 1. Name "QA Tester", email "qa@@example", strong password
- Expected: Invalid email blocks account creation.
- Actual: Email validity=false; Create account disabled.
- Notes: No visible inline error text next to the email field; only the disabled button signals the problem.

## TC-FUNC-012 — Verify that the live password rules match the stated policy (8+ chars, 3 of 4 classes)

- Status: **pass** · Priority: P1 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signup step 2, valid name/email
- Steps: 1. Type abc, abcdefgh, abcdefg1, Abcdefg1, 12345678, 8 spaces, Ab1!
- Expected: Checklist updates per rule; only passwords meeting both rules count as done.
- Actual: abc 1/3 + length not yet; abcdefgh len done 1/3; abcdefg1 2/3; Abcdefg1 3/3 + len done; 12345678 1/3; 8 spaces len done 0/3; Ab1! 3/3 but len not yet. Checklist is accurate.
- Notes: 8 spaces counts toward length (common/NIST-acceptable).

## TC-FUNC-013 — Verify that Create account enables only with valid fields AND Terms consent

- Status: **pass** · Priority: P1 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signup step 2
- Steps: 1. Fill valid name/email/password → 2. Check consent checkbox
- Expected: Disabled without consent, enabled with it.
- Actual: Disabled without consent; enabled after consent. Not clicked.
- Notes: Submission not run (would create an account).

## TC-FUNC-014 — Verify that a whitespace-only Full name is rejected

- Status: **fail** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context · Defects: BUG-FUNC-23
- Preconditions: Signup step 2 with valid email/password/consent
- Steps: 1. Type " " (or a tab) in Full name
- Expected: Name treated as empty; Create account disabled or inline error.
- Actual: Create account becomes ENABLED for " " and "\t" (disabled only for truly empty ""). 2/2 runs.
- Notes: Server-side handling unverified (would need submit).

## TC-FUNC-015 — Verify that a 300-character name is handled (limit or graceful acceptance)

- Status: **pass** · Priority: P3 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signup step 2
- Steps: 1. Paste 300 x "A" into Full name
- Expected: A sensible maxlength or validation message.
- Actual: All 300 chars accepted, no maxlength, no message; layout intact. (Settings > Display name caps at 80, so limits differ.)
- Notes: Inconsistent with Settings (80). Server behaviour unverified. Logged as observation, not a defect.

## TC-FUNC-016 — Verify that emoji and RTL text are accepted in Full name

- Status: **pass** · Priority: P3 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signup step 2
- Steps: 1. Type "😀 محمد علي 名前"
- Expected: Characters preserved and rendered correctly.
- Actual: Value preserved exactly; field valid; renders correctly (no dir=auto, Arabic shown inline).

## TC-FUNC-017 — Verify that leading/trailing spaces in email are trimmed

- Status: **pass** · Priority: P2 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signup step 2
- Steps: 1. Type " qa.validation@example.com "
- Expected: Spaces stripped; email valid.
- Actual: Input value becomes "qa.validation@example.com" (trimmed by type=email); valid.

## TC-FUNC-018 — Verify that Back returns to profile step and invalid ?profile values fall back to step 1

- Status: **pass** · Priority: P3 · Env: Chrome 158, 1440x900, signed-out fresh context
- Preconditions: Signup step 2
- Steps: 1. Click Back → 2. Open /signup?step=2 and /signup?step=2&profile=bogus
- Expected: Back -> step 1; bad params -> step 1 (no crash).
- Actual: Back -> /signup step 1; both crafted URLs show "Choose your profile".

## TC-FUNC-019 — Verify that the Terms and Privacy pages linked from sign-up are final legal copy

- Status: **fail** · Priority: P1 · Env: Chrome 158, 1440x900, signed-out fresh context · Defects: BUG-FUNC-28
- Preconditions: Signed out
- Steps: 1. Open /terms → 2. Open /privacy
- Expected: Reviewed legal text (consent is mandatory to sign up).
- Actual: /terms: "Placeholder. Sign-up links here and requires agreement, so this route must resolve — replace with the reviewed legal copy before any external launch." /privacy contains 8 unique [BRACKET] placeholders e.g. [LEGAL ENTITY], [PRIVACY CONTACT EMAIL]. 2/2.
