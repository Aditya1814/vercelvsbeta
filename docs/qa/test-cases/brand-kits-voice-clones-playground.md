# Test cases: Brand Kits, Voice clones, Playground

5 cases · 4 pass · 1 fail

## TC-FUNC-082 — Verify that Brand Kits lists kits and the kit options menu opens/closes

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /brand-kits
- Steps: 1. Open → 2. Options for Default Brand → 3. Esc → 4. Open Default Brand
- Expected: Menu Open/Rename/Delete; Esc closes; kit opens in editor without writing.
- Actual: Menu Open / Rename… / Delete (visible popup without role=menu); Esc closes, focus returns; Open -> /brand-kits?kit=<id>; no write requests. 2/2.

## TC-FUNC-083 — Verify that "Add new" brand kit dialog opens and closes with Escape

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-22
- Preconditions: /brand-kits
- Steps: 1. Add new → 2. Esc
- Expected: Dialog; Esc closes; focus returns.
- Actual: "New brand kit" dialog; Esc closes; focus to <body>.

## TC-FUNC-084 — Verify that New voice clone dialog opens and closes

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /voice-clones
- Steps: 1. New voice clone → 2. Esc
- Expected: Wizard; Esc closes; focus returns.
- Actual: "Create voice clone" (Whose / Recording / Finish; others "Coming soon"); Esc closes; focus returns.

## TC-FUNC-085 — Verify that the Playground prompt validates empty/blank input and caps length

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /playground
- Steps: 1. Check Generate empty → 2. Type spaces → 3. Paste 5000 chars
- Expected: Generate disabled for empty/blank; sensible limit.
- Actual: Disabled for "" and " "; textarea maxlength=2000 (5000 truncated to 2000) and Generate enabled. No visible character counter at the limit. Generate not clicked. 2/2.
- Notes: No counter shown when input is truncated (polish).

## TC-FUNC-086 — Verify that the Image type picker opens and closes with Escape

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /playground
- Steps: 1. Image type → 2. Esc
- Expected: Listbox; Esc closes; focus returns.
- Actual: Listbox with 9 types and ratios; Esc closes; focus returns to trigger.
