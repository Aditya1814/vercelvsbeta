# Test cases: Cross-browser

14 cases · 12 pass · 2 fail

## TC-COMPAT-001 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 1440

- Status: **pass** · Priority: P1 · Env: Chrome 1440 158.0.8127.38
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 14 pass, 0 minor (-), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Chrome_1440/

## TC-COMPAT-002 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 1280x720

- Status: **pass** · Priority: P2 · Env: Chrome 1280x720 158.0.8127.38
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 14 pass, 0 minor (-), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Chrome_1280x720/

## TC-COMPAT-003 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 768

- Status: **fail** · Priority: P2 · Env: Chrome 768 158.0.8127.38 · Defects: BUG-CA-01
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 13 pass, 0 minor (-), 1 fail (/post). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Chrome_768/

## TC-COMPAT-004 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 390

- Status: **pass** · Priority: P1 · Env: Chrome 390 158.0.8127.38 · Defects: BUG-CA-10
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 12 pass, 2 minor (/encoders, /co-creator), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Chrome_390/

## TC-COMPAT-005 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 360 Android

- Status: **pass** · Priority: P2 · Env: Chrome 360 Android 158.0.8127.38 · Defects: BUG-CA-09, BUG-CA-10
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 12 pass, 2 minor (/encoders, /plan), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Chrome_360_Android/

## TC-COMPAT-006 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Safari 1440

- Status: **pass** · Priority: P2 · Env: Safari 1440 27.2
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 14 pass, 0 minor (-), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Safari_1440/

## TC-COMPAT-007 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Safari iPad

- Status: **pass** · Priority: P2 · Env: Safari iPad 27.2
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 14 pass, 0 minor (-), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Safari_iPad/

## TC-COMPAT-008 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Safari iPhone 15

- Status: **pass** · Priority: P1 · Env: Safari iPhone 15 27.2 · Defects: BUG-CA-09, BUG-CA-10
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 12 pass, 2 minor (/encoders, /plan), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Safari_iPhone_15/

## TC-COMPAT-009 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Firefox 1440

- Status: **pass** · Priority: P2 · Env: Firefox 1440 159.0
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 14 pass, 0 minor (-), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Firefox_1440/

## TC-COMPAT-010 — Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Firefox 390

- Status: **pass** · Priority: P2 · Env: Firefox 390 159.0 · Defects: BUG-CA-10
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed; /login and /signup in a fresh signed-out context
- Steps: 1. Open each page: /, /studio, /encoders, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup, /pricing → 2. Wait for network idle + 1.5 s, close the plan modal if shown → 3. Measure document scrollWidth vs clientWidth, elements past the right edge, controls whose centre is covered (elementFromPoint), broken images, font loading, console errors → 4. Screenshot each page and review
- Expected: No horizontal scroll, no overlapped/clipped controls, all actions reachable, system font + SVG icons render, no browser-specific console errors
- Actual: 13 pass, 1 minor (/encoders), 0 fail (-). No horizontal overflow on any page; body font is the system stack and all icons are inline SVG (nothing to fail to load); console errors were the same server 404/500s seen in every browser.
- Notes: Per-cell detail in extra.browser_matrix; screenshots in qa/compat-a11y/shots/beta_Firefox_390/

## TC-COMPAT-011 — Verify that beta-only layout issues are told apart from issues shared with the reference

- Status: **pass** · Priority: P2 · Env: Chrome/WebKit/Firefox, see extra.reference_compare
- Preconditions: Same matrix script pointed at the reference with mapped routes
- Steps: 1. Run /, /projects, /post, /plan, /simulcast, /settings on the reference in Safari iPhone 15, Firefox 1440, Chrome 768, Chrome 360 → 2. Compare overflow, covered controls and console errors with the beta cells
- Expected: Reference has no layout defects the beta lacks, and vice versa
- Actual: No horizontal overflow on either site. The /post header buttons are clickable on the reference at 768 (Manage accounts / New post OK) but blocked on the beta, so BUG-CA-01 is beta-only. Desktop sidebar needing a scroll for the lower nav items is shared. Reference shows 0 console errors on these pages; beta shows server 404/500s (backend, not browser).

## TC-COMPAT-012 — Verify that the phone navigation drawer opens, shows every section and closes in Chrome, Safari and Firefox

- Status: **pass** · Priority: P1 · Env: Chrome 390, Chrome 360, Safari iPhone 15, Firefox 390
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. At 390x844 / 360x740 / iPhone 15 open Home → 2. Tap "Open menu" → 3. Check nav links visible, scroll the drawer to Analytics → 4. Press Esc
- Expected: Drawer opens, all sections reachable, closes on Esc
- Actual: Opens in all 4 phone configs; Simulcast and Analytics sit below the drawer fold (iPhone 15: list scrolls 511 px in a 340 px box) and are reachable by scrolling, same as the reference. Esc closes it.
- Notes: Evidence: qa/compat-a11y/ev_drawer_SafariiPhone15_scrolled.png, shots/beta_Safari_iPhone_15/__menu.jpg

## TC-COMPAT-013 — Verify that lower sidebar items (Plan, Simulcast, Analytics) are reachable on a short laptop (1280x720)

- Status: **pass** · Priority: P2 · Env: Chrome/Safari/Firefox 1280x720 and 1440x900
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Open Home at 1280x720 in Chrome, Safari, Firefox → 2. Locate Analytics link; scroll the sidebar nav; trial-click
- Expected: All nav items reachable
- Actual: Analytics starts at y=658 under the sticky Settings/credits/Upgrade footer; the nav list is overflow-y:auto and scrolls it into view; trial click succeeds in all 3 engines. Reference behaves the same.
- Notes: Evidence: qa/compat-a11y/ev_sidebar_1280x720_scrolled.png

## TC-COMPAT-014 — Verify that the Posts header actions are clickable on tablet portrait (768 px) in every engine

- Status: **fail** · Priority: P1 · Env: Chrome 158 / WebKit 27.2 / Firefox 159 @768x1024 · Defects: BUG-CA-01
- Preconditions: Signed-in beta session (beta_state.json); plan modal closed
- Steps: 1. Open /post at 768x1024 → 2. Trial-click (actionability check only, no click) "Manage accounts" and "New post" → 3. Repeat at 800, 900, 1024, 1100 and on iPad (810)
- Expected: Buttons receive the pointer like on the reference
- Actual: Blocked at 768 in Chrome, Safari and Firefox: <div class="mx-auto max-w-[1400px] px-6 py-6"> (the tab row container) intercepts pointer events. OK at 800+ and on iPad 810. Also blocked at 720 px (200% zoom of 1440).
