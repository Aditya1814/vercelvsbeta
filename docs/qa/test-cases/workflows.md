# Test cases: Workflows

8 cases · 6 pass · 2 fail

## TC-FUNC-063 — Verify that the "Create clips" composer becomes startable after picking a library video

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects?workflow=create-clips
- Steps: 1. Open composer → 2. choose a video -> From my library -> pick → 3. Check Start
- Expected: Start disabled before pick, enabled after; price shown.
- Actual: Start disabled -> enabled after picking; summary "5 steps · about 5 credits". 2/2. Start not clicked.
- Notes: Running the workflow not executed (spends credits).

## TC-FUNC-064 — Verify that the "Caption a video" composer becomes startable after picking a library video

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects?workflow=caption
- Steps: 1. Open composer → 2. choose a video -> From my library -> pick → 3. Check Start
- Expected: Start disabled before pick, enabled after; price shown.
- Actual: Start disabled -> enabled after picking; summary "1 step · about 2 credits". 2/2. Start not clicked.
- Notes: Running the workflow not executed (spends credits).

## TC-FUNC-065 — Verify that the "Reach new languages" composer becomes startable after picking a library video

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects?workflow=go-global
- Steps: 1. Open composer → 2. choose a video -> From my library -> pick → 3. Check Start
- Expected: Start disabled before pick, enabled after; price shown.
- Actual: Start disabled -> enabled after picking; summary "4 steps · about 224 credits". 2/2. Start not clicked.
- Notes: Running the workflow not executed (spends credits).

## TC-FUNC-066 — Verify that the "Make a podcast" composer becomes startable after picking a library video

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects?workflow=make-podcast
- Steps: 1. Open composer → 2. choose a video -> From my library -> pick → 3. Check Start
- Expected: Start disabled before pick, enabled after; price shown.
- Actual: Start disabled -> enabled after picking; summary "5 steps · about 5 credits". 2/2. Start not clicked.
- Notes: Running the workflow not executed (spends credits).

## TC-FUNC-067 — Verify that the "Make it vertical" composer becomes startable after picking a library video

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects?workflow=go-vertical
- Steps: 1. Open composer → 2. choose a video -> From my library -> pick → 3. Check Start
- Expected: Start disabled before pick, enabled after; price shown.
- Actual: Start disabled -> enabled after picking; summary "4 steps · about 4 credits". 2/2. Start not clicked.
- Notes: Running the workflow not executed (spends credits).

## TC-FUNC-068 — Verify that the "Write from a video" composer becomes startable after picking a library video

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: /projects?workflow=write
- Steps: 1. Open composer → 2. choose a video -> From my library -> pick → 3. Check Start
- Expected: Start disabled before pick, enabled after; price shown.
- Actual: Start disabled -> enabled after picking; summary "1 step · about 1 credits". 2/2. Start not clicked.
- Notes: Running the workflow not executed (spends credits). Copy "about 1 credits" (CREATE-26).

## TC-FUNC-069 — Verify that "Spotlight each speaker" becomes startable after picking a video

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-09
- Preconditions: /projects?workflow=speaker-clips
- Steps: 1. Pick a library video → 2. Check Start workflow
- Expected: Start enabled with sensible defaults.
- Actual: Sentence still contains the unfilled blank "as pick a shape clips"; Start workflow stays disabled. 2/2.

## TC-FUNC-070 — Verify that an unknown workflow id shows a helpful message

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-21
- Preconditions: Signed in
- Steps: 1. Open /projects?workflow=unknown and ?workflow=
- Expected: "Workflow not found" or redirect with notice.
- Actual: Silently shows the full Video Library; URL keeps ?workflow=unknown. 2/2.
