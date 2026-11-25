# Defect log: P2

20 defects, sorted by severity.

## BUG-FUNC-03 — [Post] Post details dialog cannot load the post's numbers (500)

- Severity: **major** · Priority: **P2** · Module: Post · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post?tab=posts
- Preconditions: Signed in

**Steps to reproduce**

1. Open /post?tab=posts
2. Click the first row

**Expected:** Details dialog shows views/engagement for the post.

**Actual:** Dialog opens (timeline, View on YouTube) but shows "Could not load this post’s numbers: internal error".

**Console / network**

```
GET /api/gateway/video/social/posts/cd82645d-fd4b-4bd7-9860-58cb1f91716e/metrics?range=90d -> 500 {"error":{"code":"internal","message":"internal error"}}
```

Related findings: PUB-02 PUB-03

- Screenshot: [post_detail_r1.png](../../images/img0244.webp)
- Screenshot: [post_detail_r2.png](../../images/img0245.webp)

## BUG-FUNC-08 — [Orbit] Assistant opens a voice session without any mic action (page load and launcher click)

- Severity: **major** · Priority: **P2** · Module: Assistant (Orbit) · Reproducibility: Always (5/5)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /co-creator, floating "Ask Orbit" pill
- Preconditions: Signed in

**Steps to reproduce**

1. Open /co-creator (or click the "Ask Orbit" pill on Home)
2. Watch network; do not touch the mic

**Expected:** Voice session only created when the user starts voice input.

**Actual:** POST voice/session sent on page load and on each launcher click.

**Console / network**

```
POST /api/gateway/assistant/api/voice/session (aborted by QA guard) — fired on /co-creator load 3/3 and launcher click 2/2
```

Related findings: SHA-29 CREATE-29 · Possible cost/quota impact and privacy concern (voice session without consent).

- Screenshot: [shell_orbit_pill_r1.png](../../images/img0246.webp)
- Screenshot: [shell_orbit_pill_r2.png](../../images/img0247.webp)

## BUG-FUNC-09 — [Workflows] "Spotlight each speaker" cannot be started: unfilled "pick a shape" blank keeps Start disabled

- Severity: **major** · Priority: **P2** · Module: Workflows · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects?workflow=speaker-clips
- Preconditions: Signed in; at least one library video

**Steps to reproduce**

1. Open /projects?workflow=speaker-clips
2. choose a video -> From my library -> pick "Session - 11/17/2026"
3. Check Start workflow

**Expected:** Start enabled with a default clip shape (other composers enable Start after picking a video).

**Actual:** Sentence reads "…as pick a shape clips locked on the speaker…"; Start workflow stays disabled.

**Console / network**

```
No errors logged.
```

Related findings: CREATE-24

- Screenshot: [wf_speaker-clips_picked_r1.png](../../images/img0248.webp)
- Screenshot: [wf_speaker-clips_picked_r2.png](../../images/img0248.webp)

## BUG-FUNC-11 — [Post] Manage accounts offers live "Add account" for platforms "Not set up on this server yet"

- Severity: **major** · Priority: **P2** · Module: Post · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post -> Manage accounts
- Preconditions: Signed in

**Steps to reproduce**

1. Open /post
2. Click Manage accounts

**Expected:** Only connectable platforms offer Add account; others disabled/hidden.

**Actual:** "1/9 connected"; TikTok, Threads, LinkedIn, X show "Not set up on this server yet" next to an enabled "Add account".

**Console / network**

```
n/a (Add account not clicked)
```

Related findings: PUB-07 LIVE-24

- Screenshot: [mod_post_manage_r1.png](../../images/img0249.webp)
- Screenshot: [mod_post_manage_r2.png](../../images/img0250.webp)

## BUG-FUNC-26 — [App shell] At 1440x900 the pinned sidebar footer covers Plan and Simulcast and pushes Analytics below the fold

- Severity: **major** · Priority: **P2** · Module: App shell · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — any app page at 1440x900
- Preconditions: Signed in, desktop 1440x900

**Steps to reproduce**

1. Open / at 1440x900
2. Try to click Plan / Simulcast / Analytics in the sidebar

**Expected:** All primary nav items visible and clickable.

**Actual:** elementFromPoint at the centre of Plan (y761) and Simulcast (y811) hits the footer, not the link; Analytics starts at y890 (off-screen). Users must scroll the nav or use Cmd+K.

**Console / network**

```
n/a
```

Related findings: PUB-40

- Screenshot: [nav_sidebar_1440_r1.png](../../images/img0251.webp)
- Screenshot: [nav_sidebar_1440_r2.png](../../images/img0252.webp)

## BUG-CA-03 — [Studio] Schedule a session dialog: close (X) button has no accessible name and gets initial focus; dialog not marked modal

- Severity: **major** · Priority: **P2** · Module: Studio > Schedule · Reproducibility: Always (2/2 runs)
- Environment: Chrome 158 1440x900 macOS; https://app-beta.cloudreel.com/studio
- Preconditions: Signed in

**Steps to reproduce**

1. Open /studio
2. Tab to "Schedule" and press Enter
3. Note where focus lands; run axe on the dialog

**Expected:** The close button is announced as "Close" (aria-label), and the dialog has aria-modal="true" like the Simulcast Broadcast dialog

**Actual:** Focus lands on an unnamed <button class="-my-1 ..."> (the X); a screen reader announces just "button". axe: button-name (critical, 1 node, .-my-1). The dialog has role="dialog" but no aria-modal. Also color-contrast (serious, 4) on #studio-schedule-description-count.

**Console / network**

```
axe in dialog: ["button-name(critical,1) .-my-1", "color-contrast(serious,4) #studio-schedule-description-count"]
```

Related findings: · Stopped before "Schedule session" (would write data).

- Screenshot: [kb_studio_schedule_open_run1.png](../../images/img0253.webp)
- Screenshot: [kb_studio_schedule_open_run2.png](../../images/img0254.webp)

## BUG-NF-02 — [Security] No HSTS (Strict-Transport-Security) on any beta response

- Severity: **major** · Priority: **P2** · Module: Platform / HTTP headers · Reproducibility: Always (2/2)
- Environment: curl + Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: None

**Steps to reproduce**

1. curl -sD - -o /dev/null https://app-beta.cloudreel.com/login
2. Look for strict-transport-security
3. Repeat for an API response (/api/status) and signed-in '/'

**Expected:** strict-transport-security: max-age>=31536000; includeSubDomains (the Vercel reference sends max-age=63072000; includeSubDomains; preload).

**Actual:** Header absent on HTML pages and API responses.

**Console / network**

```
GET https://app-beta.cloudreel.com/login -> HTTP/2 200, server: nginx, no strict-transport-security
```

Related findings: · Session cookie is __Host- (Secure) so it is not sent over HTTP, but first-visit SSL-strip is still possible.


## BUG-NF-04 — [Privacy] Analytics events and a 1-year device-id cookie start on first visit with no cookie/consent notice

- Severity: **major** · Priority: **P2** · Module: Public pages / Analytics · Reproducibility: Always (6/6 public pages)
- Environment: Chrome 158 headless, fresh context (no storage), 1440x900, https://app-beta.cloudreel.com/login, /signup, /pricing
- Preconditions: Signed out, clean browser profile

**Steps to reproduce**

1. Open https://app-beta.cloudreel.com/login in a fresh profile
2. Watch Network: GET /api/events/vg and POST /api/events fire on load
3. Check cookies: cr_did (expires ~1 year) is set
4. Look for any cookie/consent notice

**Expected:** Reference shows a notice 'We use cookies to keep you signed in and remember preferences. Privacy' and analytics wait for consent (non-essential tracking needs opt-in for EU/UK users).

**Actual:** No notice on any public page; POST /api/events (SCREEN_VIEW with deviceID, sessionID, timezone, viewport) and the cr_did cookie are created immediately. Privacy page only refers to consent given on www.cloudreel.com, which doesn't apply to users who land directly on the app.

**Console / network**

```
GET https://app-beta.cloudreel.com/api/events/vg 200; POST https://app-beta.cloudreel.com/api/events
```

Related findings: SHA-04 · First-party only - no third-party trackers were loaded on any page (verified).

- Screenshot: [public_beta_login.png](../../images/img0036.webp)
- Screenshot: [public_vercel_pricing.png](../../images/img0255.webp)

## BUG-NF-09 — [Studio] When recordings fail to load, Studio shows 'No recordings yet' empty state together with the error and has no retry button

- Severity: **major** · Priority: **P2** · Module: Studio · Reproducibility: Always (2/2)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), https://app-beta.cloudreel.com/studio, GET /api/gateway/studio/v1/events forced to 500 client-side
- Preconditions: Signed in

**Steps to reproduce**

1. page.route('**/api/gateway/**', r => r.fulfill({status:500}))
2. Open /studio, close the plan picker

**Expected:** Error state replaces the list, with a Retry button; never claim the user has no recordings when the list failed to load.

**Actual:** Banner 'Something went wrong on our side. Try again.' (plain text, no button) above the empty state 'No recordings yet - Schedule a session or start recording.'

**Console / network**

```
GET /api/gateway/studio/v1/events?from=…&to=… -> 500 (simulated)
```

Related findings: · Projects has a milder version: header 'Projects (0)' and 'No folders yet. Use New Folder to create one.' beside 'Could not load your library' (res_projects_500.png).

- Screenshot: [res_studio_500.png](../../images/img0256.webp)

## BUG-FUNC-10 — [Post] Published-post counts disagree on the same page (4 vs 2)

- Severity: **minor** · Priority: **P2** · Module: Post · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post?tab=posts
- Preconditions: Signed in; 2 videos published to 2 YouTube channels

**Steps to reproduce**

1. Open /post?tab=posts
2. Compare "This Month" with the Posts tab counters

**Expected:** One consistent count.

**Actual:** This Month "Posts published 4"; Posts tab "2 Videos published" and "Published 2"; header "1 platform live".

**Console / network**

```
n/a
```

Related findings: PUB-05 PUB-04

- Screenshot: [post_poststab_r1.png](../../images/img0257.webp)
- Screenshot: [post_kebab_final_r1.png](../../images/img0258.webp)

## BUG-FUNC-13 — [Project detail] Creations composer lists 8 platforms incl. TikTok, LinkedIn, X, Threads, Snapchat

- Severity: **minor** · Priority: **P2** · Module: Project detail · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects?video=<id>&tab=creations
- Preconditions: Signed in

**Steps to reproduce**

1. Open test-clip
2. Click Creations

**Expected:** Only publishable platforms (YouTube/Instagram/Facebook per reference).

**Actual:** "YouTube ✓ Instagram ! TikTok ! LinkedIn ! Facebook ! X ! Threads ! Snapchat ! — 1 of 8 posts ready".

**Console / network**

```
n/a
```

Related findings: CREATE-16 PUB-07

- Screenshot: [proj_detail_creations_r1.png](../../images/img0259.webp)
- Screenshot: [proj_detail_creations_r2.png](../../images/img0259.webp)

## BUG-FUNC-14 — [Post] Row "More" (⋮) button does nothing

- Severity: **minor** · Priority: **P2** · Module: Post · Reproducibility: Always (4/4, 2 rows)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post?tab=posts
- Preconditions: Signed in; published posts listed

**Steps to reproduce**

1. Open /post?tab=posts
2. Click "More for <post title>" on any row

**Expected:** Menu with post actions opens.

**Actual:** No menu; aria-haspopup="menu" but aria-expanded stays "false"; no popup in DOM.

**Console / network**

```
No console errors.
```

Related findings: PUB-12

- Screenshot: [post_kebab_final_r1.png](../../images/img0258.webp)
- Screenshot: [post_kebab_final_r2.png](../../images/img0260.webp)

## BUG-FUNC-19 — [Projects] Favorites / Archived / Bin views stack into a contradictory state with the wrong empty message

- Severity: **minor** · Priority: **P2** · Module: Projects · Reproducibility: Always (2/2)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects
- Preconditions: Signed in

**Steps to reproduce**

1. Open /projects
2. Click Favorites
3. Click Archived
4. Click Bin
5. Click the Videos tab

**Expected:** Views are mutually exclusive (one pressed at a time) or combine with a matching message; Videos resets to all videos.

**Actual:** URL becomes /projects?fav=1&archived=1&bin=1; all three pressed; heading "Bin (0)" with the message "No favorites yet"; Videos tab keeps all three filters; state persists across refresh.

**Console / network**

```
n/a
```

Related findings: CREATE-05 · New.

- Screenshot: [proj_view_stacked_r1.png](../../images/img0261.webp)
- Screenshot: [proj_view_stacked_r2.png](../../images/img0261.webp)

## BUG-FUNC-22 — [A11y/Dialogs] Focus is dropped to <body> after closing many dialogs instead of returning to the trigger

- Severity: **minor** · Priority: **P2** · Module: App shell (cross-module) · Reproducibility: Always (2/2 per dialog)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /, /projects, /studio, /layouts, /graphics, /brand-kits, /settings, /co-creator
- Preconditions: Signed in, keyboard user

**Steps to reproduce**

1. Open e.g. /projects
2. Click New Folder
3. Press Escape
4. Check document.activeElement

**Expected:** Focus returns to the control that opened the dialog (as it does for Notifications, Manage accounts, New post, Invite a user, New channel, Plan New).

**Actual:** Focus goes to <body> after closing: Command palette, New Folder, Schedule a session, Studio recording drawer, Layouts Recycle bin, Graphics Templates, New brand kit, Change password, Personalize, Ask Orbit panel, auto-opened plan picker.

**Console / network**

```
document.activeElement after Esc = BODY
```

Related findings: SHA-31 · New. Keyboard and screen-reader users lose their place.

- Screenshot: [proj_dlg_NewFolder_r1.png](../../images/img0262.webp)
- Screenshot: [mod_studio_schedule_r1.png](../../images/img0263.webp)

## BUG-CA-02 — [Shell] No "Skip to content" link; keyboard users tab through ~21 sidebar stops on every page

- Severity: **minor** · Priority: **P2** · Module: App shell / sidebar · Reproducibility: Always (2/2 runs)
- Environment: Chrome 158 1440x900 macOS; every signed-in page (checked /, /projects)
- Preconditions: Signed in

**Steps to reproduce**

1. Open / and click nowhere
2. Press Tab

**Expected:** First Tab shows a "Skip to content" link that moves focus to <main> (WCAG 2.4.1); the reference has one as its first Tab stop

**Actual:** First Tab goes to sidebar "Notifications"; the first main-content control is the 22nd Tab stop on /projects (search box) and 28th on Home ("Yes, find the clips"). No skip link exists in the DOM.

**Console / network**

```
document.querySelectorAll("a") with /skip/i -> []. Reference: first Tab = "Skip to content".
```

Related findings: · Regression vs the reference.

- Screenshot: [kb_home_tabbed_run1.png](../../images/img0264.webp)

## BUG-CA-06 — [Accessibility] Text below 4.5:1 contrast on 11 of 15 pages (grey-400 meta text, grey-500 on grey-100 segmented controls)

- Severity: **minor** · Priority: **P2** · Module: Cross-cutting (design tokens) · Reproducibility: Always (2/2 identical axe runs)
- Environment: Chrome 158 1440x900, axe-core wcag2aa
- Preconditions: Signed in (and signed out for /login, /signup)

**Steps to reproduce**

1. Open any listed page
2. Run axe (color-contrast)

**Expected:** Normal-size text >= 4.5:1 (WCAG 1.4.3)

**Actual:** color-contrast on: /studio, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup. Most nodes are text-gray-400 #99a1af on white (2.6:1) or on #f9fafb (2.48:1), e.g. Studio card dates, "No folders yet...", Posts section labels "UPCOMING"/"RECENTLY PUBLISHED" at 10 px, "Orbit can make mistakes"; and text-gray-500 #6a7282 on #f3f4f6 (4.39:1) in Plan Month/Week/Day and Analytics 7d/30d/90d toggles; /login and /signup left-panel copy #6b7280 on #f3f4f6 (4.39:1). /plan alone has 24 nodes.

**Console / network**

```
/plan: ".md\:inline" Asia/Calcutta 2.6:1; /post ".space-y-2:nth-child(1) > .tracking-wider.text-\[10px\].uppercase" 2.48:1; /settings "Sign out" button #e7000b on #fef2f2 4.46:1
```

Related findings: · Shared with the reference (Vercel /schedule has 35 nodes, /recordings 14). One token change (grey-400 -> grey-500/600 for text) fixes most of it.

- Screenshot: [_plan.jpg](../../images/img0265.webp)
- Screenshot: [_post.jpg](../../images/img0266.webp)

## BUG-NF-03 — [Security] No CSP, X-Content-Type-Options, Referrer-Policy or Permissions-Policy; X-Powered-By: Next.js disclosed

- Severity: **minor** · Priority: **P2** · Module: Platform / HTTP headers · Reproducibility: Always (2/2)
- Environment: curl + Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: None

**Steps to reproduce**

1. curl -sD - -o /dev/null https://app-beta.cloudreel.com/login
2. Signed in, read headers of '/' and /api/gateway/subscription/v1/billing/summary

**Expected:** Baseline hardening headers: a CSP with script-src/connect-src, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy limiting camera/microphone to self; no framework banner.

**Actual:** Only frame-ancestors on 4 routes; the other four headers missing everywhere; x-powered-by: Next.js on every HTML response.

**Console / network**

```
x-powered-by: Next.js; x-content-type-options MISSING; referrer-policy MISSING; permissions-policy MISSING
```

Related findings: · Permissions-Policy matters here because Studio uses camera/mic. Without CSP there is no second line of defence for the user profile cached in sessionStorage (BUG-NF-06).


## BUG-NF-08 — [Error handling] Raw backend text 'internal error' shown in user-facing error banners (Posts, Analytics, Plan, Projects)

- Severity: **minor** · Priority: **P2** · Module: Posts / Analytics / Plan / Projects · Reproducibility: Always (2/2 runs, 4 pages)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan); failures simulated client-side with page.route() returning 500, plus real 500s on /post and /analytics
- Preconditions: Signed in

**Steps to reproduce**

1. Make the page's /api/gateway/* GETs return 500 (or just open /analytics, which currently fails for real)
2. Read the banner

**Expected:** Plain-language message with what to do: e.g. 'We couldn't load your posts. Try again in a moment.' (Studio and Billing already do this: 'Something went wrong on our side. Try again.', 'Billing is temporarily unavailable…').

**Actual:** 'Could not load posts: internal error', 'Could not load your connected accounts: internal error', 'Could not load analytics / internal error', 'Could not load scheduled posts: internal error', 'Could not load your library / internal error'.

**Console / network**

```
500 /api/gateway/video/social/overview?range=30d :: {"error":{"code":"internal","message":"internal error"}}
```

Related findings: PUB-03 PUB-23 PUB-01 · Backend error bodies themselves are terse (no stack traces/SQL) - good; the issue is only the client echoing message verbatim.

- Screenshot: [res_post_500.png](../../images/img0267.webp)
- Screenshot: [res_analytics_500.png](../../images/img0268.webp)
- Screenshot: [res_plan_500.png](../../images/img0269.webp)

## BUG-NF-11 — [Performance] CLS over budget (0.11-0.17) on 6 of 7 signed-in pages, caused by the auto-opening 'Choose your plan' modal, which re-opens in every new tab

- Severity: **minor** · Priority: **P2** · Module: Shell / Plan picker · Reproducibility: Always (3/3 runs)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in, free plan

**Steps to reproduce**

1. Open '/', /projects, /post or /plan in a new tab
2. Record layout-shift entries (PerformanceObserver)
3. Open another page in a NEW tab

**Expected:** CLS <= 0.1; picker shown at most once per user/session (not per tab), animated with transform/opacity.

**Actual:** 0.098 of shift per load comes from DIV.max-h-[92vh] 'Choose your plan…' sliding in; totals: / 0.139-0.15, /projects 0.162-0.172, /post 0.12-0.148, /plan 0.154-0.167, /studio 0.118, /analytics 0.108. Without the modal pages sit at 0.02-0.06. The 'shown' flag lives in sessionStorage (cloudreel:plan-prompt-shown), so every new tab re-opens the modal.

**Console / network**

```
layout-shift v=0.098 sources: DIV 'Choose your planMonthlyAnnually', H2 'Choose your plan'
```

Related findings: · Reference also exceeds CLS (0.13-0.70) so this is not a regression vs Vercel, but the beta is the shipped product.

- Screenshot: [perf_beta_post.png](../../images/img0270.webp)
- Screenshot: [perf_beta_projects.png](../../images/img0011.webp)

## BUG-NF-12 — [Plan] Plan LCP ~3.0-3.1 s (budget 2.5 s): calendar waits on a 2.3 s POST /api/studio/v2/ProducerEvent/producerEventPlaylist

- Severity: **minor** · Priority: **P2** · Module: Plan · Reproducibility: Always (2/2 + repeat visit)
- Environment: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), https://app-beta.cloudreel.com/plan
- Preconditions: Signed in

**Steps to reproduce**

1. Open /plan cold and warm
2. Measure LCP and API timings

**Expected:** LCP <= 2.5 s; calendar renders with posts first, live events fill in.

**Actual:** Cold LCP 3136 ms, repeat visit 2940 ms; network idle 3.4-3.6 s. Slowest call POST producerEventPlaylist 2293 ms (+ POST /api/studio-session 367 ms). All other pages LCP < 1.4 s.

**Console / network**

```
POST /api/studio/v2/ProducerEvent/producerEventPlaylist 200 2293ms
```

Related findings: PUB-18 PUB-17 · Vercel /schedule LCP 692 ms.

- Screenshot: [perf_beta_plan.png](../../images/img0271.webp)
