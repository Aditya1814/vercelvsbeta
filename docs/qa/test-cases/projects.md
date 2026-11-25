# Test cases: Projects

13 cases · 8 pass · 2 fail

## TC-FUNC-045 — Verify that Projects lists the workspace videos

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in
- Steps: 1. Open /projects
- Expected: Library with project cards, filters, New Folder/New Project.
- Actual: H1 "Video Library" (nav says Projects, CREATE-02); 4 cards (2 Session, 2 test-clip); filters and views present.

## TC-FUNC-046 — Verify that search finds matching projects case-insensitively, trims spaces and syncs to the URL

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Search "test", "TEST", " test " → 2. Reload
- Expected: Matches regardless of case/padding; ?q= kept after reload.
- Actual: All three return the 2 test-clip cards; URL ?q=test; after reload the query and results persist. 2/2.

## TC-FUNC-047 — Verify that search with no match shows an empty state

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Search zzqq-no-match-qa
- Expected: Clear empty state with a way to reset.
- Actual: "Nothing matches that search — Try a different word, or clear the search to see everything." Projects (0). No Clear button (CREATE-06).

## TC-FUNC-048 — Verify that search treats special characters literally (%, _, quotes, HTML)

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Search %, _, <script>x</script>, '"\, 😀, محمد
- Expected: Literal matching (no wildcard behaviour), no markup rendering, no errors.
- Actual: All return 0 results with the empty state; "%" and "_" do not act as wildcards; text encoded in URL; no console errors. 2/2.

## TC-FUNC-049 — Verify that a 300-character search does not break the layout

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Paste 300 x "a"
- Expected: No horizontal overflow; empty state.
- Actual: Empty state; no page overflow (scrollWidth ok).

## TC-FUNC-050 — Verify that Favorites / Archived / Bin views switch cleanly and survive refresh

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-19
- Preconditions: /projects
- Steps: 1. Click Favorites, then Archived, then Bin → 2. Click Videos tab → 3. Reload
- Expected: Exactly one view active; matching empty state; Videos resets; URL reflects view.
- Actual: Each alone works (?fav=1 "No favorites yet", ?archived=1 "Nothing archived", ?bin=1 "The bin is empty") and persists on refresh. But clicking one after another stacks them (?fav=1&archived=1&bin=1), all pressed, header "Bin (0)" with the "No favorites yet" message; Videos tab keeps the filters. 2/2.

## TC-FUNC-051 — Verify that Assets tab opens and persists

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Click Assets → 2. Reload
- Expected: Assets view with empty state and filters.
- Actual: "Add your first assets", filters All/Video/Audio/Images, view=assets kept after reload.

## TC-FUNC-052 — Verify that the sort menu opens and closes with Escape, returning focus

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Click Newest → 2. Esc
- Expected: Menu Newest/Oldest/Name; Esc closes, focus on trigger.
- Actual: Menu "Newest, Oldest, Name (A–Z)"; Esc closes; focus on Newest.

## TC-FUNC-053 — Verify that New Folder dialog validates the name and closes with Esc/Cancel

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-22
- Preconditions: /projects
- Steps: 1. Click New Folder → 2. Check Create with empty, spaces-only, 300-char name → 3. Cancel; reopen; Esc
- Expected: Create disabled for empty/blank; length capped; Esc/Cancel close; focus returns.
- Actual: Create disabled for "" and " "; input capped at 80 (maxlength=80); Cancel/Esc close. Focus after Esc goes to <body>, not New Folder. Create not clicked.
- Notes: Validation passes; only the focus part fails.

## TC-FUNC-054 — Verify that creating a folder adds it to Folders

- Status: **not-run** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. New Folder → 2. Name + colour → 3. Create
- Expected: Folder appears.
- Actual: Not executed.
- Notes: Would write data.

## TC-FUNC-055 — Verify that New Project and card More menus open and close with Escape

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Open New Project menu, Esc → 2. Open card ⋯ menu, Esc
- Expected: Menus list actions; Esc closes; focus returns.
- Actual: New Project: Upload Video, AI Clips, AI Captions, Portrait Pro, AI Dub, AI Writer, Record, Schedule for later, Custom Edit. Card ⋯: Overview, Download, Share, Add to Favorites, Archive, Move to Folder, Clone, Rename, Delete. Esc closes; focus returns to trigger.

## TC-FUNC-056 — Verify that rename / archive / delete / move / clone work from the card menu

- Status: **not-run** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. Card ⋯ -> Rename / Archive / Delete / Move / Clone
- Expected: Actions apply and show confirmation/undo.
- Actual: Not executed.
- Notes: All write data.

## TC-FUNC-057 — Verify that uploading a video creates a project

- Status: **not-run** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects
- Steps: 1. New Project -> Upload Video
- Expected: Upload flow.
- Actual: Not executed.
- Notes: Upload forbidden on beta.
