# Defect log: P3

24 defects, sorted by severity.

## BUG-FUNC-05 — [Encoders] Page calls admin/relays which returns 404 on every load

- Severity: **minor** · Priority: **P3** · Module: Encoders · Reproducibility: Always (3/3)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /encoders
- Preconditions: Signed in (workspace owner, Free plan)

**Steps to reproduce**

1. Open /encoders
2. Check console/network

**Expected:** No failing requests (admin data only requested for admins / endpoint exists).

**Actual:** 404 + console error on every load; page otherwise renders.

**Console / network**

```
GET /api/gateway/encoder/v1/admin/relays -> 404 {"error":"not_found","message":"not found"}; console "Failed to load resource: the server responded with a status of 404 ()"
```

Related findings: LIVE-08

- Screenshot: [shell_nav_encoders_r1.png](../../images/img0059.webp)
- Screenshot: [shell_nav_encoders_r2.png](../../images/img0059.webp)

## BUG-FUNC-12 — [Post/Settings] Connected-account count differs between Post and Settings

- Severity: **minor** · Priority: **P3** · Module: Post / Settings · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post, /settings#connected-accounts
- Preconditions: Signed in; 2 YouTube channels connected

**Steps to reproduce**

1. /post: read header pill and Manage accounts
2. /settings#connected-accounts: read the counter

**Expected:** Same platform universe and count everywhere.

**Actual:** Header "1 platform live"; Manage accounts "1/9 connected"; Settings "1 / 4 connected" (YouTube "2 accounts connected").

**Console / network**

```
n/a
```

Related findings: PUB-08

- Screenshot: [mod_post_manage_r1.png](../../images/img0249.webp)
- Screenshot: [settings_ConnectedAccounts_r1.png](../../images/img0272.webp)

## BUG-FUNC-15 — [App shell] Unknown routes return HTTP 200 (soft 404); /projects/123 returns 404 with internal copy

- Severity: **minor** · Priority: **P3** · Module: App shell · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /nope-qa-404, /webinars, /projects/123
- Preconditions: Signed in

**Steps to reproduce**

1. Open /nope-qa-404
2. Open /projects/123

**Expected:** HTTP 404 with the friendly page in both cases.

**Actual:** /nope-qa-404 and retired routes (/webinars…): friendly 404 page, HTTP 200. /projects/123: HTTP 404 but copy "That route is not registered with the Shell."

**Console / network**

```
GET /nope-qa-404 -> 200; GET /projects/123 -> 404
```

Related findings: X-06 SHA-34 SHA-33

- Screenshot: [edge__nope_qa_404_r1.png](../../images/img0042.webp)
- Screenshot: [edge__projects_123_r1.png](../../images/img0273.webp)

## BUG-FUNC-16 — [Auth] /onboarding is a 404 when signed in; signed-out users are sent to log in and then land on the 404

- Severity: **minor** · Priority: **P3** · Module: Auth / onboarding · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /onboarding
- Preconditions: Signed in / signed out

**Steps to reproduce**

1. Signed in: open /onboarding
2. Signed out: open /onboarding

**Expected:** Onboarding flow or redirect to Home.

**Actual:** Signed in: "404 Page not found" (HTTP 200). Signed out: /login?next=%2Fonboarding.

**Console / network**

```
n/a
```

Related findings: SHA-09

- Screenshot: [shell_onboarding_r1.png](../../images/img0042.webp)
- Screenshot: [shell_onboarding_r2.png](../../images/img0042.webp)

## BUG-FUNC-20 — [Projects/Simulcast] Deep links to a missing project or channel silently show the list with no message

- Severity: **minor** · Priority: **P3** · Module: Project detail / Simulcast · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects?video=<made-up uuid>, /projects?video=not-a-uuid, /simulcast?channel=<made-up uuid>
- Preconditions: Signed in

**Steps to reproduce**

1. Open /projects?video=00000000-0000-4000-8000-000000000000
2. Open /projects?video=not-a-uuid
3. Open /simulcast?channel=00000000-0000-4000-8000-000000000000

**Expected:** "This project/channel doesn't exist or was deleted" with a link back.

**Actual:** Project links redirect to /projects with no notice; channel link keeps the bogus id in the URL and shows the list. Malformed id logs a 404 console error.

**Console / network**

```
GET /api/gateway/video/content?ids=not-a-uuid -> 404 {"error":{"code":"not_found","message":"not found"}}
```

Related findings: · New. Users following a stale share link get no explanation.

- Screenshot: [edge__projects_video_00000000_0000_4000_8000_000000000000_r1.png](../../images/img0274.webp)
- Screenshot: [edge__simulcast_channel_00000000_0000_4000_8000_000000000000_r1.png](../../images/img0137.webp)

## BUG-FUNC-21 — [Workflows] Unknown workflow ids silently show the Video Library

- Severity: **minor** · Priority: **P3** · Module: Workflows · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects?workflow=unknown
- Preconditions: Signed in

**Steps to reproduce**

1. Open /projects?workflow=unknown (or ?workflow=)

**Expected:** "Workflow not found" notice or redirect to the workflow list.

**Actual:** Plain Video Library; URL keeps ?workflow=unknown; no message.

**Console / network**

```
n/a
```

Related findings: CREATE-25 SHA-33

- Screenshot: [edge__projects_workflow_unknown_r1.png](../../images/img0275.webp)
- Screenshot: [edge__projects_workflow_unknown_r2.png](../../images/img0275.webp)

## BUG-FUNC-23 — [Sign-up] Whitespace-only Full name enables Create account

- Severity: **minor** · Priority: **P3** · Module: Sign-up · Reproducibility: Always (4/4: spaces and tab, 2 runs)
- Environment: Chrome 158, 1440x900, signed-out fresh context — /signup?step=2&profile=creator
- Preconditions: Signed out; valid email, valid password, Terms checked

**Steps to reproduce**

1. Type " " (3 spaces) or a tab in Full name
2. Observe Create account

**Expected:** Name treated as empty; Create account disabled or inline error.

**Actual:** Create account enabled (disabled only for truly empty value).

**Console / network**

```
n/a (not submitted)
```

Related findings: · New. Server validation unverified (would require creating an account).

- Screenshot: [auth_signup_spaces_name_r1.png](../../images/img0276.webp)
- Screenshot: [auth_signup_spaces_name_r2.png](../../images/img0277.webp)

## BUG-FUNC-25 — [Settings] Display name can be cleared and Save changes stays enabled with no validation

- Severity: **minor** · Priority: **P3** · Module: Settings · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /settings#account
- Preconditions: Signed in

**Steps to reproduce**

1. Open Settings > Account
2. Clear Display name
3. Observe Save changes

**Expected:** Save disabled or inline "Name is required".

**Actual:** Save changes enabled, no message (not clicked; original restored).

**Console / network**

```
n/a
```

Related findings: · New. Server-side validation unverified.

- Screenshot: [settings_Account_r1.png](../../images/img0033.webp)

## BUG-CA-05 — [Projects] "Newest" sort menu is role=menu but arrow keys do nothing, and Esc from inside it drops focus to body

- Severity: **minor** · Priority: **P3** · Module: Projects (/projects) filters · Reproducibility: Always (2/2 runs)
- Environment: Chrome 158 1440x900 macOS; /projects
- Preconditions: Signed in

**Steps to reproduce**

1. Tab to the "Newest" sort button, press Enter
2. Press ArrowDown
3. Press Tab (focus enters "Newest" item), then Esc

**Expected:** A role="menu" supports Up/Down arrows between menuitems and Esc returns focus to the trigger (WAI-ARIA menu button pattern); or drop the menu roles and behave like a plain listbox/disclosure

**Actual:** ArrowDown leaves focus on the trigger; items are only reachable by Tab. After Esc from inside the menu, focus is on <body>.

**Console / network**

```
sort_after_arrow "BUTTON[] Newest"; sort_after_tab "BUTTON[menuitem] Newest inMenu=true"; sort_focus_after_esc "BODY"
```

Related findings: · Reference sort control does not claim role=menu; it also has no arrow support.

- Screenshot: [kb_projects_sort_open_run1.png](../../images/img0278.webp)

## BUG-CA-07 — [Projects] Project cards are role="button" containing other buttons/checkbox (nested interactive)

- Severity: **minor** · Priority: **P3** · Module: Projects, Simulcast broadcast picker · Reproducibility: Always (2/2)
- Environment: Chrome 158 1440x900, axe
- Preconditions: Signed in, workspace has 4 projects

**Steps to reproduce**

1. Open /projects
2. Run axe; or Tab through a card

**Expected:** A card is either one control or a container of controls, not both (WCAG 4.1.2)

**Actual:** Each card is <div role="button" tabindex="0" aria-label="Open Session - ..."> with a Select checkbox, favourite, More options and Continue editing buttons inside: 4 nodes on /projects, 4 more in the Simulcast "Broadcast a video" list. Screen readers may not announce the inner controls; Tab gives 5 stops per card.

**Console / network**

```
axe nested-interactive: ".hover\:shadow-md.hover\:border-violet-200.hover\:-translate-y-0\.5:nth-child(1) - Element has focusable descendants"
```

Related findings: CREATE-09 · Shared with the reference (/video-library 6 nodes).


## BUG-CA-08 — [Shell] Phone nav drawer does not contain focus: Tab walks into page controls hidden behind the scrim, Esc leaves focus there

- Severity: **minor** · Priority: **P3** · Module: App shell / mobile drawer · Reproducibility: Always (3/3)
- Environment: Chrome 158 390x844 (mobile, touch) macOS; Home
- Preconditions: Signed in

**Steps to reproduce**

1. At 390 px open Home
2. Focus "Open menu", press Enter
3. Press Tab ~23 times
4. Press Esc

**Expected:** While the drawer is open focus stays inside it (or the drawer closes when focus leaves); Esc returns focus to "Open menu"

**Actual:** After the drawer's "Upgrade", focus moves to header Search/Upgrade/Notifications and the Home cards behind the dimmed scrim (focus ring visible on the hidden bell). Esc closes the drawer but focus stays on a Home card. Drawer has no role="dialog"/aria-modal. Also the floating crew avatars sit above the drawer, covering its bottom-right corner.

**Console / network**

```
Tab sequence: ... N x21,783 BUTTON Upgrade | OUT x67,6 BUTTON Search | OUT x123,9 BUTTON Upgrade | OUT x248,6 BUTTON Notifications ... focus after Esc: A "Host an event"
```

Related findings: SHA-30 · Reference has the same problem (not beta-specific); keyboard on phones is rare, but this also affects switch/VoiceOver users.

- Screenshot: [ev_drawer_focus_behind_scrim.png](../../images/img0279.webp)
- Screenshot: [ev_drawer_Chrome360_scrolled.png](../../images/img0280.webp)

## BUG-CA-09 — [Plan] On phones the floating menu button and crew bubble cover calendar day cells

- Severity: **minor** · Priority: **P3** · Module: Plan (/plan) phone · Reproducibility: Always (3/3: matrix iPhone 15, matrix Chrome 360, verify run)
- Environment: Safari/WebKit 27.2 iPhone 15 preset; Chrome 158 360x740 mobile; /plan
- Preconditions: Signed in

**Steps to reproduce**

1. Open /plan on a phone
2. Look at the bottom calendar row in view

**Expected:** Floating controls do not sit on top of tappable day cells (or the page reserves space for them)

**Actual:** iPhone 15: days 8, 12, 13, 14 are covered at load (elementFromPoint hits the fixed FAB / "Ask the Clipper" bubble); Chrome 360: days 15, 19, 20 covered. Scrolling moves them clear, so it is a nuisance rather than a blocker.

**Console / network**

```
covered: ["8:fixed overlay","12:fixed overlay","13:fixed overlay","14:fixed overlay"]
```

Related findings: SHA-30 PUB-21 · Same floating-button placement issue as SHA-30, logged for the specific Plan impact.

- Screenshot: [ev_iphone_plan_fab.png](../../images/img0281.webp)
- Screenshot: [_plan.jpg](../../images/img0282.webp)
- Screenshot: [_plan.jpg](../../images/img0283.webp)

## BUG-NF-05 — [Privacy] Device-id cookie cr_did is set without the Secure flag

- Severity: **minor** · Priority: **P3** · Module: Platform / Cookies · Reproducibility: Always (2/2: signed-in storage state and fresh signed-out context)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Any visit

**Steps to reproduce**

1. Open https://app-beta.cloudreel.com/login
2. DevTools > Application > Cookies

**Expected:** All cookies Secure (site is HTTPS-only); persistent identifiers ideally HttpOnly and set server-side.

**Actual:** cr_did: Secure=false, HttpOnly=false (written by JS), SameSite=Lax, ~1-year expiry. Session cookie __Host-cr_session is correct (Secure, HttpOnly, Lax).

**Console / network**

```
cookie cr_did domain=app-beta.cloudreel.com secure=false httpOnly=false sameSite=Lax
```


## BUG-NF-06 — [Privacy] Full user profile + permissions cached in plain sessionStorage and left there after the session cookie is gone

- Severity: **minor** · Priority: **P3** · Module: Shell / Session · Reproducibility: Always (2/2)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in

**Steps to reproduce**

1. Sign-in state, open any app page
2. DevTools > Application > Session Storage > cloudreel:session
3. Remove cookies; the key is still present until the tab closes

**Expected:** Keep only what the UI needs client-side; clear cached identity when the session ends.

**Actual:** cloudreel:session holds user id, name, email, workspace id/name, role, plan and the full permission map in plain JSON (readable by any script on the origin; no CSP).

**Console / network**

```
sessionStorage keys: cloudreel:session, cloudreel:plan-prompt-shown, cr:back-stack; localStorage: cloudreel:analytics:queue, cloudreel:analytics:session
```

Related findings: · Email redacted in evidence. Not an exposure by itself; rated minor hygiene.


## BUG-NF-10 — [Resilience] Losing the connection turns any in-app navigation into Chrome's 'No internet' page - no offline notice

- Severity: **minor** · Priority: **P3** · Module: Shell / Navigation · Reproducibility: Always (10/10: 5 pages x 2 runs)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), context.setOffline(true)
- Preconditions: Signed in, app loaded on Home

**Steps to reproduce**

1. Load Home
2. Go offline (DevTools > Network > Offline)
3. Click Post / Projects / Studio / Plan / Analytics in the sidebar

**Expected:** App stays on screen with an 'You're offline - we'll reconnect automatically' notice; navigation retried when back online.

**Actual:** The whole app is replaced by Chrome's dinosaur page (ERR_INTERNET_DISCONNECTED). Recovery after reconnect works only because the browser auto-reloads.

**Console / network**

```
net::ERR_INTERNET_DISCONNECTED on RSC fetch -> hard navigation
```

Related findings: · Not compared on Vercel (mock site).

- Screenshot: [res_projects_offline.png](../../images/img0284.webp)
- Screenshot: [res_projects_online_again.png](../../images/img0285.webp)

## BUG-NF-13 — [SEO] robots.txt, sitemap.xml and /favicon.ico redirect (307) to /login

- Severity: **minor** · Priority: **P3** · Module: Public pages / SEO · Reproducibility: Always (2/2)
- Environment: curl
- Preconditions: Signed out

**Steps to reproduce**

1. curl -sI https://app-beta.cloudreel.com/robots.txt
2. Same for /sitemap.xml and /favicon.ico

**Expected:** robots.txt served (for an app subdomain usually 'Disallow: /' except public pages) and favicon.ico served; auth middleware excludes these paths.

**Actual:** All three return 307 -> /login. Lighthouse SEO flags 'robots.txt is not valid' (SEO 92 on every public page).

**Console / network**

```
HTTP/2 307 location: /login
```

Related findings: · Page <link rel=icon> points to /icon.png so the tab icon works; only the conventional /favicon.ico path is broken (bookmarks, some crawlers).


## BUG-NF-15 — [Build] Production build reports appVersion 'dev' in analytics and ships a hardcoded storage-salt fallback

- Severity: **minor** · Priority: **P3** · Module: Platform / Build config · Reproducibility: Always (2/2)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in

**Steps to reproduce**

1. Open any page
2. Read localStorage cloudreel:analytics:queue -> attrs.appVersion
3. Search the client bundle for NEXT_PUBLIC_STORAGE_SALT

**Expected:** NEXT_PUBLIC_APP_VERSION set at build so analytics/errors can be tied to a release; storage salt configured per environment.

**Actual:** Every analytics event carries appVersion:'dev' (verified). Bundle reads NEXT_PUBLIC_STORAGE_SALT at runtime with fallback 'jnya-fallback-salt' (inferred to be in use, since NEXT_PUBLIC vars are not inlined in this chunk).

**Console / network**

```
"appVersion":"dev"; n(77836).env.NEXT_PUBLIC_STORAGE_SALT ?? "jnya-fallback-salt"
```

Related findings: · Salt is client-side so it is not a secret either way; no API keys/tokens found in 59 JS chunks (searched AKIA, sk_/pk_, AIza, JWT, Slack/GitHub tokens, private keys).


## BUG-NF-16 — [Billing] Billing outage surfaces as an unrequested blocking modal ('Billing is temporarily unavailable') over whatever page the user opens

- Severity: **minor** · Priority: **P3** · Module: Shell / Plan picker · Reproducibility: Always (2/2 runs)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), billing GETs forced to 500 client-side
- Preconditions: Signed in, free plan, new tab

**Steps to reproduce**

1. Route /api/gateway/subscription/** and /api/gateway/billing/** to 500
2. Open /post, /projects or /analytics in a new tab

**Expected:** If plans can't load, don't auto-open the picker; show the error only when the user clicks Upgrade.

**Actual:** 'Choose your plan' modal opens with 'Billing is temporarily unavailable. Please try again in a moment. Try again' on every page tested (5/5).

Related findings: · Wording itself is good; reproduced in resilience runs 1 (5/5 pages) and in billing_500_modal.png.

- Screenshot: [billing_500_modal.png](../../images/img0286.webp)

## BUG-FUNC-17 — [Public pages] Signed-out pages log a 401 console error for /api/auth/me

- Severity: **trivial** · Priority: **P3** · Module: Auth / Pricing / Legal · Reproducibility: Always (2/2 runs, every public page)
- Environment: Chrome 158, 1440x900, signed-out fresh context — /login, /signup, /forgot-password, /pricing, /terms, /privacy, /reset-password
- Preconditions: Signed out

**Steps to reproduce**

1. Open /pricing (or any public page) signed out
2. Open DevTools console

**Expected:** Session probe handled silently (no console error).

**Actual:** Console "Failed to load resource: the server responded with a status of 401 ()".

**Console / network**

```
GET /api/auth/me -> 401 {"error":{"code":"unauthenticated","message":"sign in to continue"}}
```

Related findings: X-10 SHA-10

- Screenshot: [auth_pricing.png](../../images/img0053.webp)

## BUG-FUNC-18 — [Command palette] Footer shows "Ctrl K" on macOS

- Severity: **trivial** · Priority: **P3** · Module: App shell · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — any page, Cmd+K
- Preconditions: Signed in on macOS (navigator.platform MacIntel)

**Steps to reproduce**

1. Press Cmd+K
2. Read the footer hint

**Expected:** "⌘K" on Mac.

**Actual:** "Ctrl K".

**Console / network**

```
n/a
```

Related findings: SHA-17

- Screenshot: [shell_cmdk_r1.png](../../images/img0287.webp)
- Screenshot: [shell_cmdk_r2.png](../../images/img0288.webp)

## BUG-FUNC-24 — [Reset password] Invalid/expired token is not checked until submit

- Severity: **trivial** · Priority: **P3** · Module: Forgot / reset password · Reproducibility: Always (2/2)
- Environment: Chrome 158, 1440x900, signed-out fresh context — /reset-password?token=not-a-real-token
- Preconditions: Signed out

**Steps to reproduce**

1. Open /reset-password?token=not-a-real-token

**Expected:** "This link is invalid or expired" with Request a new link, before the user types a password.

**Actual:** Full "Choose a new password" form is shown for a made-up token.

**Console / network**

```
No token-check request on load.
```

Related findings: · New. Submit not run.

- Screenshot: [auth_reset_faketoken.png](../../images/img0289.webp)

## BUG-FUNC-27 — [Studio/Simulcast] Selected tab/filter and view mode are lost on refresh and Back

- Severity: **trivial** · Priority: **P3** · Module: Studio / Simulcast · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /studio, /simulcast
- Preconditions: Signed in

**Steps to reproduce**

1. /studio: click Live (or List view), reload
2. /simulcast: click Scheduled, reload

**Expected:** Selection kept in URL like Post (?tab=), Plan (?view=), Settings (#…), Encoders (#…).

**Actual:** Studio returns to Recordings/Grid; Simulcast returns to All Simulcasts; URL never changes.

**Console / network**

```
n/a
```

Related findings: · New. Inconsistency between modules.

- Screenshot: [shell_nav_studio_r1.png](../../images/img0290.webp)

## BUG-CA-10 — [Encoders] On phones the stat card captions wrap one word per line

- Severity: **trivial** · Priority: **P3** · Module: Encoders (/encoders) phone · Reproducibility: Always (4/4 phone configs)
- Environment: All phone configs (Chrome 390/360, Safari iPhone 15, Firefox 390); /encoders
- Preconditions: Signed in

**Steps to reproduce**

1. Open /encoders at 390 px or narrower

**Expected:** Stat cards stack one per row or the caption gets enough width

**Actual:** In the 2-column grid the icon takes most of each card, so "phones of members who can broadcast here" breaks into 7 one-word lines and the cards become tall and uneven.

Related findings: · Cosmetic; identical in all engines.

- Screenshot: [_encoders.jpg](../../images/img0291.webp)
- Screenshot: [_encoders.jpg](../../images/img0292.webp)

## BUG-NF-14 — [SEO] Public pages share one generic description, login/signup/forgot-password titles are just 'CloudReel', no OG/Twitter tags

- Severity: **trivial** · Priority: **P3** · Module: Public pages / SEO · Reproducibility: Always (2/2)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), signed out
- Preconditions: Signed out

**Steps to reproduce**

1. Open /login, /signup, /pricing, /terms, /privacy
2. Inspect <title>, meta description, og:*

**Expected:** Per-page title ('Sign in · CloudReel', 'Create account · CloudReel'), per-page description (reference gives Pricing/Terms/Privacy their own), og:title/og:image so shared /pricing or /signup links render a card.

**Actual:** Description 'CloudReel — video clipping and publishing platform.' on all 6 pages; title 'CloudReel' on /login, /signup, /forgot-password; no canonical, no og:*, no twitter:card, no apple-touch-icon. lang='en' and viewport are correct.

Related findings: · Reference also lacks OG/canonical.
