# Test cases: Accessibility

13 cases · 7 pass · 6 fail

## TC-COMPAT-015 — Verify that 15 key beta pages have no WCAG 2.1 A/AA axe violations

- Status: **fail** · Priority: P2 · Env: Chrome 158 1440x900 · Defects: BUG-CA-06, BUG-CA-07, BUG-CA-03
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; desktop Chrome 1440x900
- Steps: 1. Load each page, close plan modal → 2. Inject axe-core and run with wcag2a/wcag2aa/wcag21a/wcag21aa → 3. Repeat the whole run a second time
- Expected: 0 violations
- Actual: Beta: 0 critical, 54 serious, 0 moderate, 0 minor nodes across 15 pages; rules: color-contrast on 11 pages, nested-interactive on /projects. /, /encoders, /brand-kits, /pricing clean. Run 2 identical: True. Inside the Studio Schedule dialog: button-name (critical).
- Notes: Page-level axe only scans what is rendered; dialogs scanned separately in the keyboard flows.

## TC-COMPAT-016 — Verify that the beta is no worse than the reference on axe

- Status: **pass** · Priority: P3 · Env: Chrome 158 1440x900
- Preconditions: Reference with cookie notice dismissed
- Steps: 1. Run the same axe script on the 15 mapped reference pages
- Expected: Beta violation count <= reference
- Actual: Reference: 4 critical (aria-required-parent on /analytics), 70 serious. Beta: 0 critical, 54 serious. Beta is equal or better overall; worse on /post (8 vs 3 contrast nodes) and /login (2 contrast vs 1 nested-interactive).

## TC-COMPAT-017 — Verify keyboard / assistive behaviour: Skip link (first Tab on any page)

- Status: **fail** · Priority: P2 · Env: Chrome 158 1440x900 · Defects: BUG-CA-02
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: No skip link on beta; first Tab lands on sidebar "Notifications". The first main-area control is Tab stop 22 on /projects (search box) and 28 on Home ("Yes, find the clips"). Reference has "Skip to content" as the first Tab stop. 2/2 runs. BUG-CA-02

## TC-COMPAT-018 — Verify keyboard / assistive behaviour: Sidebar navigation by keyboard (Chrome 1440)

- Status: **pass** · Priority: P2 · Env: Chrome 158 1440x900
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: Tab order is top-to-bottom through workspace switcher, Getting started, all nav links, Settings, Upgrade, then header and main. Every stop showed a visible focus outline/ring. Enter on "Projects" (reached in 25 Tabs) navigated to /projects. Lower links (Analytics) scroll into view inside the sidebar when focused and are not covered by the sticky footer. Landmarks: 1 main, 1 nav, 1 header, lang="en".

## TC-COMPAT-019 — Verify keyboard / assistive behaviour: Studio > Schedule dialog: open, tab, Esc

- Status: **fail** · Priority: P2 · Env: Chrome 158 1440x900 · Defects: BUG-CA-03
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: Opens with Enter; role="dialog" but no aria-modal; initial focus goes to the close (X) button which has NO accessible name (axe button-name, critical). Tab stays inside the dialog over 25 presses (trap OK). Esc closes. Focus is NOT returned to the "Schedule" trigger, it drops to <body> (2/2 runs). BUG-CA-03, BUG-CA-04. Nothing was scheduled.

## TC-COMPAT-020 — Verify keyboard / assistive behaviour: Simulcast > Broadcast a video dialog: open, tab, Esc

- Status: **pass** · Priority: P2 · Env: Chrome 158 1440x900
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: role="dialog" aria-modal="true", initial focus on "Close", Tab cycles inside (Search > videos > Cancel > Close), Esc closes, focus returns to "Broadcast a video" (2/2). axe inside dialog: nested-interactive (4) + color-contrast (5). Nothing broadcast.

## TC-COMPAT-021 — Verify keyboard / assistive behaviour: "Choose your plan" auto-modal by keyboard

- Status: **pass** · Priority: P2 · Env: Chrome 158 1440x900
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: Keyboard-wise OK: aria-modal dialog, focus starts in the dialog, Tab cycles Monthly > Annually > Close > Get Lite/Essential/Growth > promo code, Esc closes. (The modal appearing uninvited is already reported as SHA-01.)

## TC-COMPAT-022 — Verify keyboard / assistive behaviour: Projects search via keyboard

- Status: **pass** · Priority: P2 · Env: Chrome 158 1440x900
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: Search input is Tab stop 22 (after sidebar), has an accessible name, filtering works as you type ("Nothing matches that search" empty state for "zzqa"), Esc clears the field. Focus indicator on the search box is weak (border darkens from light grey to mid grey only, no violet ring like other controls).

## TC-COMPAT-023 — Verify keyboard / assistive behaviour: Projects filters (Newest sort menu) via keyboard

- Status: **fail** · Priority: P2 · Env: Chrome 158 1440x900 · Defects: BUG-CA-05
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: Enter opens a role="menu" with role="menuitem" items, but focus stays on the trigger and ArrowDown does nothing; Tab is needed to enter the menu. Esc closes it, but after tabbing into the menu Esc drops focus to <body> instead of the "Newest" trigger (2/2). The other filter chips (All media, Source, All duration, Favorites, Archived, Bin) are reachable by Tab in visual order. BUG-CA-05

## TC-COMPAT-024 — Verify keyboard / assistive behaviour: Sign-in form by keyboard (signed out)

- Status: **pass** · Priority: P2 · Env: Chrome 158 1440x900
- Preconditions: Fresh signed-out context
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: Order: Continue with Google > Email > "Forgot password?" > Password > Show password > Sign in > Sign up > footer links. Inputs have <label>s, autocomplete=email/current-password, required. Enter on an empty form shows native "Please fill out this field." and sends no auth request (only the /api/events analytics beacon). Minor: "Forgot password?" sits between Email and Password in Tab order. No credentials were submitted.

## TC-COMPAT-025 — Verify keyboard / assistive behaviour: Phone nav drawer by keyboard (Chrome 390)

- Status: **fail** · Priority: P2 · Env: Chrome 158 390x844 mobile · Defects: BUG-CA-08
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: Enter on "Open menu" sets aria-expanded=true and Tab moves through the drawer items, but the drawer is not a dialog and focus is not contained: after "Upgrade" Tab continues to Search/Upgrade/Notifications and Home cards behind the scrim (focus ring visible on a hidden control). Same on the reference. Esc closes the drawer but leaves focus on page content, not on "Open menu". 2/2. BUG-CA-08

## TC-COMPAT-026 — Verify keyboard / assistive behaviour: 200% zoom (1440x900 -> 720x450 CSS px; 1280x720 -> 640x360)

- Status: **fail** · Priority: P2 · Env: Chrome 158 1440x900 · Defects: BUG-CA-01
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: /projects and /login reflow with no horizontal scroll at both sizes. /post at 720 px: "Manage accounts", "New post", "Manage social media accounts" are covered and unclickable (same root cause as BUG-CA-01). At 640x360 the floating crew bubble covers part of the content, and only a few rail icons fit without scrolling.

## TC-COMPAT-027 — Verify keyboard / assistive behaviour: prefers-reduced-motion

- Status: **pass** · Priority: P2 · Env: Chrome 158 1440x900
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Keyboard only (Tab / Shift+Tab / Enter / Esc / Arrow keys); record activeElement, focus style and dialog containment after each key → 2. Run twice
- Expected: WCAG 2.1 AA: 2.1.1 keyboard, 2.1.2 no trap, 2.4.1 bypass blocks, 2.4.3 focus order, 2.4.7 focus visible, 4.1.2 name/role/value; dialogs contain focus, Esc closes, focus returns to trigger
- Actual: With reduce: 0 running animations on /, /co-creator, /studio (vs 3 infinite "bounce", 4 infinite "cr-orb-blink", 2 "ping"/"pulse" without it). Beta ships 2-6 prefers-reduced-motion media rules per page. Same as reference.
