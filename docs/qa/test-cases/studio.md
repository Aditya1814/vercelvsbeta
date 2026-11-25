# Test cases: Studio

5 cases · 1 pass · 3 fail

## TC-FUNC-071 — Verify that Studio lists recordings and opens a recording drawer

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-22
- Preconditions: Signed in
- Steps: 1. Open /studio → 2. Click a session → 3. Esc
- Expected: List + drawer with actions; Esc closes; focus returns.
- Actual: Two "Session - 11/17/2026" items; drawer "Studio recording ... Make AI Clips / Edit in Editor / Open in Library / Download"; Esc closes, focus goes to <body>.
- Notes: Functional pass; focus restore fails.

## TC-FUNC-072 — Verify that Studio search handles matches, no results, special characters and long input

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /studio
- Steps: 1. Search Session, zzqq-none, %, <i>x</i>, 300 x "a"
- Expected: Matches / literal no-results message / no overflow.
- Actual: Session -> 2 items; others -> 'No recordings match "<query>" Try a different search.' rendered literally; no overflow. 2/2.

## TC-FUNC-073 — Verify that Studio Live tab and List view survive refresh

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-27
- Preconditions: /studio
- Steps: 1. Click Live; reload → 2. Click List view; reload
- Expected: Selected tab/view remembered (as Post/Plan/Settings do).
- Actual: Both revert to Recordings / Grid after reload (no URL state). 2/2.

## TC-FUNC-074 — Verify that Schedule a session dialog opens and closes with Escape

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-22
- Preconditions: /studio
- Steps: 1. Click Schedule → 2. Esc
- Expected: Dialog with name/date/time/timezone; Esc closes; focus returns.
- Actual: Dialog opens (name 20/50, date, time, stop date/time, timezone list); Esc closes; focus to <body>. Schedule not submitted.

## TC-FUNC-075 — Verify that Go live / Record start a session

- Status: **not-run** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /studio
- Steps: 1. Click Go live
- Expected: Lobby opens.
- Actual: Not executed.
- Notes: Would create/join a studio session (forbidden).
