# Accessibility (WCAG 2.1 AA)

Automated axe-core scans on both sites, plus keyboard-only walkthroughs on the beta.

## axe-core scans

| Site | Page | Critical | Serious | Moderate | Minor | Top rules |
|---|---|---|---|---|---|---|
| beta | / | 0 | 0 | 0 | 0 |  |
| beta | /studio | 0 | 4 | 0 | 0 | color-contrast (4) |
| beta | /encoders | 0 | 0 | 0 | 0 |  |
| beta | /projects | 0 | 6 | 0 | 0 | nested-interactive (4), color-contrast (2) |
| beta | /projects?workflow=create-clips | 0 | 1 | 0 | 0 | color-contrast (1) |
| beta | /post | 0 | 8 | 0 | 0 | color-contrast (8) |
| beta | /plan | 0 | 24 | 0 | 0 | color-contrast (24) |
| beta | /simulcast | 0 | 2 | 0 | 0 | color-contrast (2) |
| beta | /analytics | 0 | 2 | 0 | 0 | color-contrast (2) |
| beta | /settings | 0 | 2 | 0 | 0 | color-contrast (2) |
| beta | /co-creator | 0 | 1 | 0 | 0 | color-contrast (1) |
| beta | /brand-kits | 0 | 0 | 0 | 0 |  |
| beta | /pricing | 0 | 0 | 0 | 0 |  |
| beta | /login | 0 | 2 | 0 | 0 | color-contrast (2) |
| beta | /signup | 0 | 2 | 0 | 0 | color-contrast (2) |
| vercel | / | 0 | 1 | 0 | 0 | nested-interactive (1) |
| vercel | /recordings | 0 | 14 | 0 | 0 | color-contrast (14) |
| vercel | /encoders | 0 | 0 | 0 | 0 |  |
| vercel | /video-library | 0 | 8 | 0 | 0 | nested-interactive (6), color-contrast (2) |
| vercel | /workflow?type=create-clips | 0 | 1 | 0 | 0 | color-contrast (1) |
| vercel | /publishing-hub | 0 | 3 | 0 | 0 | color-contrast (3) |
| vercel | /schedule | 0 | 35 | 0 | 0 | color-contrast (35) |
| vercel | /channels | 0 | 1 | 0 | 0 | color-contrast (1) |
| vercel | /analytics | 4 | 2 | 0 | 0 | aria-required-parent (4), color-contrast (2) |
| vercel | /settings | 0 | 2 | 0 | 0 | color-contrast (2) |
| vercel | /co-creator | 0 | 0 | 0 | 0 |  |
| vercel | /brand-kits | 0 | 0 | 0 | 0 |  |
| vercel | /pricing | 0 | 0 | 0 | 0 |  |
| vercel | /login | 0 | 1 | 0 | 0 | nested-interactive (1) |
| vercel | /signup | 0 | 2 | 0 | 0 | color-contrast (2) |

## Keyboard flows

| Keyboard flow | Result | Notes |
|---|---|---|
| Skip link (first Tab on any page) | fail | No skip link on beta; first Tab lands on sidebar "Notifications". The first main-area control is Tab stop 22 on /projects (search box) and 28 on Home ("Yes, find the clips"). Reference has "Skip to content" as the first Tab stop. 2/2 runs. BUG-CA-02 |
| Sidebar navigation by keyboard (Chrome 1440) | pass | Tab order is top-to-bottom through workspace switcher, Getting started, all nav links, Settings, Upgrade, then header and main. Every stop showed a visible focus outline/ring. Enter on "Projects" (reached in 25 Tabs) navigated to /projects. Lower links (Analytics) scroll into view inside the sidebar when focused and are not covered by the sticky footer. Landmarks: 1 main, 1 nav, 1 header, lang="en". |
| Studio > Schedule dialog: open, tab, Esc | fail | Opens with Enter; role="dialog" but no aria-modal; initial focus goes to the close (X) button which has NO accessible name (axe button-name, critical). Tab stays inside the dialog over 25 presses (trap OK). Esc closes. Focus is NOT returned to the "Schedule" trigger, it drops to <body> (2/2 runs). BUG-CA-03, BUG-CA-04. Nothing was scheduled. |
| Simulcast > Broadcast a video dialog: open, tab, Esc | pass | role="dialog" aria-modal="true", initial focus on "Close", Tab cycles inside (Search > videos > Cancel > Close), Esc closes, focus returns to "Broadcast a video" (2/2). axe inside dialog: nested-interactive (4) + color-contrast (5). Nothing broadcast. |
| "Choose your plan" auto-modal by keyboard | pass | Keyboard-wise OK: aria-modal dialog, focus starts in the dialog, Tab cycles Monthly > Annually > Close > Get Lite/Essential/Growth > promo code, Esc closes. (The modal appearing uninvited is already reported as SHA-01.) |
| Projects search via keyboard | pass | Search input is Tab stop 22 (after sidebar), has an accessible name, filtering works as you type ("Nothing matches that search" empty state for "zzqa"), Esc clears the field. Focus indicator on the search box is weak (border darkens from light grey to mid grey only, no violet ring like other controls). |
| Projects filters (Newest sort menu) via keyboard | fail | Enter opens a role="menu" with role="menuitem" items, but focus stays on the trigger and ArrowDown does nothing; Tab is needed to enter the menu. Esc closes it, but after tabbing into the menu Esc drops focus to <body> instead of the "Newest" trigger (2/2). The other filter chips (All media, Source, All duration, Favorites, Archived, Bin) are reachable by Tab in visual order. BUG-CA-05 |
| Sign-in form by keyboard (signed out) | pass | Order: Continue with Google > Email > "Forgot password?" > Password > Show password > Sign in > Sign up > footer links. Inputs have <label>s, autocomplete=email/current-password, required. Enter on an empty form shows native "Please fill out this field." and sends no auth request (only the /api/events analytics beacon). Minor: "Forgot password?" sits between Email and Password in Tab order. No credentials were submitted. |
| Phone nav drawer by keyboard (Chrome 390) | fail | Enter on "Open menu" sets aria-expanded=true and Tab moves through the drawer items, but the drawer is not a dialog and focus is not contained: after "Upgrade" Tab continues to Search/Upgrade/Notifications and Home cards behind the scrim (focus ring visible on a hidden control). Same on the reference. Esc closes the drawer but leaves focus on page content, not on "Open menu". 2/2. BUG-CA-08 |
| 200% zoom (1440x900 -> 720x450 CSS px; 1280x720 -> 640x360) | fail | /projects and /login reflow with no horizontal scroll at both sizes. /post at 720 px: "Manage accounts", "New post", "Manage social media accounts" are covered and unclickable (same root cause as BUG-CA-01). At 640x360 the floating crew bubble covers part of the content, and only a few rail icons fit without scrolling. |
| prefers-reduced-motion | pass | With reduce: 0 running animations on /, /co-creator, /studio (vs 3 infinite "bounce", 4 infinite "cr-orb-blink", 2 "ping"/"pulse" without it). Beta ships 2-6 prefers-reduced-motion media rules per page. Same as reference. |
