# Test cases: Assistant (Orbit)

4 cases · 2 pass · 2 fail

## TC-FUNC-111 — Verify that the assistant page loads without starting a voice session

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-08
- Preconditions: Signed in
- Steps: 1. Open /co-creator
- Expected: Chat page; no voice request until mic used.
- Actual: Page loads ("What are we creating today?"), but POST /api/gateway/assistant/api/voice/session fires on load. 3/3.

## TC-FUNC-112 — Verify that Send is disabled for empty/blank messages and long input is accepted

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /co-creator
- Steps: 1. Check Send empty → 2. Type spaces → 3. Type 4000 chars
- Expected: Disabled for blank; long text handled.
- Actual: Disabled for "" and " "; 4000 chars accepted, Send enabled (no maxlength/counter). Not sent.
- Notes: Sending a message forbidden.

## TC-FUNC-113 — Verify that chat search shows a no-results state for special/long input

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /co-creator
- Steps: 1. Search zzqq-none, %, 300 x "a"
- Expected: No-results state.
- Actual: "No chats match that." for all; no overflow.

## TC-FUNC-114 — Verify that closing Personalize without changes does not save anything

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-07
- Preconditions: /co-creator
- Steps: 1. Click Personalize → 2. Press Escape (or the close button) without changing anything
- Expected: No write request when nothing changed.
- Actual: Every dismissal sends PATCH /api/gateway/video/brand-boards/<id> with body {"styling":{"personalize":{"enabled":{},"guides":{},"tone":null,"voice":""}},"version":1} (blocked by our guard). 5/5 (Esc x3, close button x1, double-click toggle x1).
