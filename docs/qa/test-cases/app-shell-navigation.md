# Test cases: App shell & navigation

11 cases · 6 pass · 5 fail

## TC-FUNC-028 — Verify that every sidebar module link opens its page with the right heading and active state

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-26, BUG-FUNC-05, BUG-FUNC-02, BUG-FUNC-04, BUG-FUNC-01
- Preconditions: Signed in, 1440x900
- Steps: 1. From Home click each sidebar item: Home, Studio, Encoders, Custom Layouts, Graphics, Projects, Brand Kits, Voice clones, Playground, Post, Plan, Simulcast, Analytics, Settings → 2. Record URL, H1, aria-current, console/network errors
- Expected: Each link opens its page (<~1.5 s), correct heading, item marked current, no errors.
- Actual: All 14 open the expected route and set aria-current (Settings verified via its link in the pinned footer). H1s: Home->/ ""Afternoon, Pavan. ..." briefing"; Studio->/studio "Studio"; Encoders->/encoders "Encoders"; Custom Layouts->/layouts "Custom Layouts"; Graphics->/graphics "Graphics"; Projects->/projects "Video Library"; Brand Kits->/brand-kits "Your brand kits"; Voice clones->/voice-clones "Voice clones"; Playground->/playground "Playground"; Post->/post "Posts"; Plan->/plan "Plan"; Simulcast->/simulcast "Simulcast"; Analytics->/analytics "Analytics"; Settings->/settings "Settings (no H1)". Errors on Encoders (404), Post (2x500), Plan (500 + events error), Analytics (500). Plan/Simulcast/Analytics links are covered by the sidebar footer at 1440x900.
- Notes: Navigation itself passes; failure is the visible errors on 4 modules and the covered links. 2 runs.

## TC-FUNC-029 — Verify that Plan, Simulcast and Analytics are clickable without scrolling at 1440x900

- Status: **fail** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-26
- Preconditions: Signed in, 1440x900
- Steps: 1. Load Home → 2. elementFromPoint at the centre of each sidebar link
- Expected: All primary nav items reachable.
- Actual: Post hit=true; Plan (y761), Simulcast (y811) hit=false (covered by pinned Settings/credits footer); Analytics at y890 is below the fold. 2/2.

## TC-FUNC-030 — Verify that browser Back/Forward walks through 5 visited modules correctly

- Status: **pass** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in
- Steps: 1. Home -> Studio -> Projects -> Brand Kits -> Post -> Simulcast via sidebar → 2. Back x5 → 3. Forward x5
- Expected: Each step restores the previous/next page and heading; no modal reappears.
- Actual: Back: /simulcast -> /post -> /brand-kits -> /projects -> /studio -> /; Forward reverses exactly, H1s correct; plan modal did not reappear. 2/2.

## TC-FUNC-031 — Verify that Back from a project detail returns to the filtered library

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in
- Steps: 1. Open /projects?q=test → 2. Open test-clip → 3. Back
- Expected: Returns to /projects?q=test with the search preserved.
- Actual: Detail URL /projects?q=test&video=<id>; Back -> /projects?q=test, search box "test". 2/2.

## TC-FUNC-032 — Verify that the same page works in two tabs independently

- Status: **pass** · Priority: P2 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-06
- Preconditions: Signed in
- Steps: 1. Open /projects in tab A and tab B → 2. Search "test" in tab B → 3. Return to tab A
- Expected: Both tabs load; state in one tab does not leak into the other.
- Actual: Both show 4 cards; tab A search stays empty at /projects. Second tab of the same session shows the "Choose your plan" modal again.

## TC-FUNC-033 — Verify that the plan picker does not interrupt every new tab/session

- Status: **fail** · Priority: P1 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-06
- Preconditions: Signed in, Free plan
- Steps: 1. Open / in a fresh context → 2. Navigate client-side → 3. Reload → 4. Open a second tab
- Expected: Upsell shown at most once per user or on demand.
- Actual: Opens on first load of every new context AND on every new tab of the same session (2/2 runs); not on client-side nav or same-tab reload.

## TC-FUNC-034 — Verify that unknown routes show a 404 page with HTTP 404

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-15
- Preconditions: Signed in
- Steps: 1. Open /nope-qa-404, /webinars, /projects/123
- Expected: Friendly 404 page and HTTP status 404.
- Actual: /nope-qa-404 and /webinars: friendly "404 Page not found" but HTTP 200. /projects/123: HTTP 404 but copy "That route is not registered with the Shell." 2/2.

## TC-FUNC-035 — Verify that trailing slashes resolve to the canonical route

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900
- Preconditions: Signed in
- Steps: 1. Open /projects/ and /studio/
- Expected: Redirect to /projects, /studio.
- Actual: Both normalised (/projects, /studio) and render correctly.

## TC-FUNC-036 — Verify behaviour of uppercase paths

- Status: **pass** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-15
- Preconditions: Signed in
- Steps: 1. Open /PROJECTS and /Projects
- Expected: Either redirect to /projects or a proper 404.
- Actual: Shows the friendly 404 (HTTP 200). Paths are case-sensitive; acceptable apart from the 200 status.
- Notes: Pass on behaviour; status code tracked in BUG-FUNC-15.

## TC-FUNC-037 — Verify that /onboarding works for new and signed-in users

- Status: **fail** · Priority: P3 · Env: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900 · Defects: BUG-FUNC-16
- Preconditions: Signed in and signed out
- Steps: 1. Open /onboarding signed in → 2. Open /onboarding signed out
- Expected: Onboarding or redirect to Home; never a 404.
- Actual: Signed in: "404 Page not found" (HTTP 200). Signed out: /login?next=%2Fonboarding, so post-login lands on 404. 2/2.

## TC-FUNC-038 — Verify that the phone navigation drawer opens, closes with Esc and closes after navigating

- Status: **pass** · Priority: P2 · Env: Chrome 158 (Playwright, iPhone-size context), macOS 26.6.2, 390x844 touch
- Preconditions: Signed in, 390x844
- Steps: 1. Tap "Open menu" → 2. Press Escape → 3. Open again, tap Studio → 4. Back
- Expected: Drawer opens/closes; focus returns to the menu button; navigation closes it.
- Actual: aria-expanded toggles; Esc closes and focus returns to "Open menu"; tapping Studio navigates to /studio and closes the drawer; Back -> /projects. Drawer has no close button and is not exposed as a dialog (aria-modal). 2/2.
- Notes: A11y semantics gap noted (no close button / not modal).
