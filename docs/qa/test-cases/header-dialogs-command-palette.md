# Test cases: Header, dialogs & command palette

6 cases · 4 pass · 2 fail

## TC-FUNC-039 — Verify that Notifications, Account menu, Workspace switcher and Getting started open and close with Escape

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in, Home
- Steps: 1. Click each control → 2. Press Escape → 3. Check focus
- Expected: Each opens; Esc closes; focus returns to the trigger.
- Actual: All open and close with Esc. Focus returns to the trigger for Notifications, Account menu, Workspace, Getting started. Account menu not exercised past open (contains Sign out).

## TC-FUNC-040 — Verify that double-clicking dialog/menu triggers does not open duplicate dialogs

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in
- Steps: 1. Double-click Search, Notifications, Account menu, Workspace, Getting started, New Folder, New Project, card More, Schedule, Invite a user, Recycle bin, New brand kit, Voice clone, Manage accounts, New post, Plan New, New channel, Broadcast, Change password, Personalize
- Expected: At most one instance of each dialog.
- Actual: Never more than one dialog of a kind (toggles end closed or with exactly one open). 2/2.

## TC-FUNC-041 — Verify that the command palette opens with Cmd+K, closes with Esc and returns focus

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-18, BUG-FUNC-22
- Preconditions: Signed in, macOS
- Steps: 1. Press Meta+K → 2. Press Meta+K again → 3. Open and press Esc
- Expected: Opens/toggles; Esc closes; focus returns to where it was; shortcut hint matches the OS.
- Actual: Opens; second Cmd+K toggles closed; Esc closes. Focus after closing goes to <body> (not the Search button). Footer hint says "Ctrl K" on MacIntel.

## TC-FUNC-042 — Verify that the command palette handles special characters, emoji, RTL and 500-char queries

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Command palette open
- Steps: 1. Type %, <b>x</b>, '"\;{}, 😀, زمن, 500 x "a"
- Expected: Text treated literally, no HTML rendering, no layout break, no-results state.
- Actual: Each shows a single "Ask Deep Search: <query>" option rendered as literal text; no markup rendered; 500-char query wraps inside the dialog (no overflow). No explicit "No results" line for GO TO matches.

## TC-FUNC-043 — Verify that a palette result navigates with Enter

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Command palette
- Steps: 1. Type "brand" → 2. Enter
- Expected: Navigates to Brand Kits and closes palette.
- Actual: Options: GO TO Brand Kits + Ask Deep Search; Enter -> /brand-kits, palette closed. 2/2.

## TC-FUNC-044 — Verify that opening the floating "Ask Orbit" launcher does not start a voice session

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-08, BUG-FUNC-22
- Preconditions: Signed in, Home
- Steps: 1. Click the crew pill "Ask Orbit"
- Expected: Panel opens; no voice/session request until the mic is used.
- Actual: Click immediately sends POST /api/gateway/assistant/api/voice/session (blocked by our guard). Focus after Esc goes to <body>. 2/2.
