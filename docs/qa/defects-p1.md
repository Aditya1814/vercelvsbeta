# Defect log: P1

8 defects, sorted by severity.

## BUG-FUNC-01 — [Analytics] Overview API returns 500, page is only an error card; range change and Try again repeat the 500

- Severity: **critical** · Priority: **P1** · Module: Analytics · Reproducibility: Always (3/3)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /analytics
- Preconditions: Signed in

**Steps to reproduce**

1. Open /analytics
2. Observe the page
3. Click 7d
4. Click Try again

**Expected:** Overview KPIs/charts load for the chosen range; Export CSV enabled.

**Actual:** Only "Could not load analytics internal error Try again"; Export CSV disabled; every range and retry fails with 500.

**Console / network**

```
GET /api/gateway/video/social/overview?range=30d -> 500 {"error":{"code":"internal","message":"internal error"}}; GET /api/gateway/video/social/overview?range=7d -> 500 (same body); console "Failed to load resource: the server responded with a status of 500 ()"
```

Related findings: PUB-23 PUB-03 PUB-24 · Raw backend text "internal error" shown to users (PUB-03).

- Screenshot: [analytics_r1.png](../../images/img0001.webp)
- Screenshot: [analytics_r2.png](../../images/img0001.webp)

## BUG-FUNC-02 — [Post] Posts list and post-metrics APIs return 500; Best Time to Post and all view counts fail

- Severity: **major** · Priority: **P1** · Module: Post / Plan · Reproducibility: Always (3/3)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post, /plan
- Preconditions: Signed in; workspace with 4 published YouTube posts

**Steps to reproduce**

1. Open /post
2. Watch network and the Best Time to Post card
3. Open /plan

**Expected:** Post numbers and best times load.

**Actual:** "Could not read your post numbers: internal error Try again"; Views/Total views/Engagements/ENG. RATE all "—". Plan also fires the failing post-metrics call.

**Console / network**

```
GET /api/gateway/video/social/posts?range=all&sort=published&limit=200 -> 500 {"error":{"code":"internal","message":"internal error"}}; GET /api/gateway/video/social/post-metrics?post_uuids=34e09034-…,94ad07e4-…,9f1fb7b8-…,cd82645d-… -> 500 {"error":{"code":"internal","message":"internal error"}}
```

Related findings: PUB-01 PUB-03

- Screenshot: [post_main_r1.png](../../images/img0235.webp)
- Screenshot: [post_poststab_r2.png](../../images/img0236.webp)

## BUG-FUNC-04 — [Plan] "Studio events could not be loaded: The Studio could not do that (200)" — events API returns a JSON-encoded string

- Severity: **major** · Priority: **P1** · Module: Plan · Reproducibility: Always (4/4)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /plan
- Preconditions: Signed in

**Steps to reproduce**

1. Open /plan
2. Read the yellow banner and the "live events" count

**Expected:** Scheduled Studio events appear on the calendar; no banner.

**Actual:** Banner "Studio events could not be loaded: The Studio could not do that (200)."; "0 live events" while the API actually returns events.

**Console / network**

```
POST /api/studio/v2/ProducerEvent/producerEventPlaylist -> 200, content-type application/json, body starts with a quote: "{\"Data\":[{\"startDateTime\":1793471400,\"events\":[{\"Cid\":228,…" — JSON.parse(body) yields a string, not an object (double-encoded).
```

Related findings: PUB-17 PUB-03 PUB-18 · Root cause verified: double-encoded JSON from the Studio gateway; fix server serialisation or parse twice defensively. The error copy also shows a raw status "(200)".

- Screenshot: [plan_main_r1.png](../../images/img0237.webp)
- Screenshot: [plan_banner_final.png](../../images/img0237.webp)

## BUG-FUNC-06 — [App shell] "Choose your plan" upsell opens by itself on the first page of every new tab/session

- Severity: **major** · Priority: **P1** · Module: App shell · Reproducibility: Always (2/2 contexts, 2/2 second tabs)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — any page (/, /projects, /post, /plan…)
- Preconditions: Signed in on Free plan

**Steps to reproduce**

1. Open the app in a new browser context
2. Observe the modal
3. Close it, open the app in a second tab of the same session

**Expected:** No unrequested upsell (or at most once per user, dismissal remembered).

**Actual:** Modal "Choose your plan" (Lite/Essential/Growth) covers the page on first load and again in every new tab; not on client-side nav or same-tab reload. Focus after Esc goes to <body>.

**Console / network**

```
n/a (client behaviour)
```

Related findings: SHA-01

- Screenshot: [shell_plan_modal_r1.png](../../images/img0238.webp)
- Screenshot: [shell_plan_modal_r2.png](../../images/img0239.webp)

## BUG-FUNC-07 — [Orbit] Closing the Personalize dialog without changes sends a PATCH to the brand board

- Severity: **major** · Priority: **P1** · Module: Assistant (Orbit) / Brand Kits · Reproducibility: Always (5/5)
- Environment: Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /co-creator
- Preconditions: Signed in; no edits made in the dialog

**Steps to reproduce**

1. Open /co-creator
2. Click Personalize
3. Press Escape (or the dialog's close button) without touching anything

**Expected:** Dismissing an untouched dialog sends no write.

**Actual:** Every dismissal fires PATCH /api/gateway/video/brand-boards/<default kit id> with an EMPTY personalize block. If this reaches the server it may overwrite any saved tone/voice/guides (inferred, not verified – our guard aborted the request).

**Console / network**

```
PATCH /api/gateway/video/brand-boards/01a20c8d-ece0-791d-9f20-2ac68369e1fb body {"styling":{"personalize":{"enabled":{},"guides":{},"tone":null,"voice":""}},"version":1} (aborted client-side by the QA read-only guard)
```

Related findings: · New. Same family as CREATE-28 (writes on open). Data-loss risk is inferred.

- Screenshot: [mod_orbit_personalize_r1.png](../../images/img0240.webp)
- Screenshot: [orbit_personalize_open.png](../../images/img0126.webp)

## BUG-FUNC-28 — [Sign-up/Legal] Sign-up requires agreeing to placeholder Terms and a draft Privacy Policy

- Severity: **major** · Priority: **P1** · Module: Sign-up / Legal · Reproducibility: Always (2/2)
- Environment: Chrome 158, 1440x900, signed-out fresh context — /signup?step=2, /terms, /privacy
- Preconditions: Signed out

**Steps to reproduce**

1. Open /signup, pick a profile, Continue
2. Follow "Terms of Service" and "Privacy Policy" links

**Expected:** Final, reviewed legal copy.

**Actual:** /terms: "Placeholder. … replace with the reviewed legal copy before any external launch." /privacy: draft with placeholders [LEGAL ENTITY], [REGISTERED ADDRESS], [PRIVACY CONTACT EMAIL], [GRIEVANCE OFFICER NAME + CONTACT], [EMAIL DELIVERY PROVIDER], 3x [RETENTION: …].

**Console / network**

```
n/a
```

Related findings: SHA-03 SHA-04 · Must be fixed before any wider beta that accepts new sign-ups.

- Screenshot: [legal_terms_placeholder.png](../../images/img0007.webp)
- Screenshot: [legal_privacy_brackets.png](../../images/img0008.webp)

## BUG-CA-01 — [Posts] "Manage accounts" and "New post" cannot be clicked at tablet-portrait / 200%-zoom widths (720-799 px)

- Severity: **major** · Priority: **P1** · Module: Posts (/post) · Reproducibility: Always (5/5: matrix Chrome 768, trial clicks in Chrome/Safari/Firefox 768, Chrome 720 zoom)
- Environment: Chrome 158, Safari/WebKit 27.2, Firefox 159 on macOS; 768x1024 and 720x450 (= 1440x900 at 200% zoom); https://app-beta.cloudreel.com/post; Pavan's workspace
- Preconditions: Signed in; plan modal closed

**Steps to reproduce**

1. Set the window to 768 px wide (or zoom a 1440 px window to 200%)
2. Open /post
3. Click "New post" or "Manage accounts" (or the gear "Manage social media accounts")

**Expected:** The buttons respond, as at 800 px and above, and as on the reference /publishing-hub at 768 px

**Actual:** The header wraps to two rows and the next block (div.mx-auto.max-w-[1400px].px-6.py-6 holding Queue/Approvals/Posts) overlaps the buttons invisibly; clicks land on that div. Playwright actionability: "<div class=\"mx-auto max-w-[1400px] px-6 py-6\"> from <div class=\"flex-1 overflow-y-auto\"> subtree intercepts pointer events". The user cannot create a post or open account management without resizing.

**Console / network**

```
elementFromPoint(centre of "New post" at y=54-90) -> DIV.mx-auto max-w-[1400px] px-6 py-6. At 800/900/1024/1100 px the button is at y=23-59 and receives the click.
```

Related findings: · Beta-only: reference buttons are clickable at 768. Works on iPad (810 px). Likely a negative margin / sticky header height that does not account for the wrapped second row. Only trial (no-op) clicks were used.

- Screenshot: [ev_768_post_header.png](../../images/img0241.webp)
- Screenshot: [ev_post_header_Safari_768.png](../../images/img0242.webp)
- Screenshot: [ev_post_header_Firefox_768.png](../../images/img0243.webp)

## BUG-NF-01 — [Security] Signed-in app pages and most public pages can be framed (no X-Frame-Options / frame-ancestors) - clickjacking

- Severity: **major** · Priority: **P1** · Module: Platform / HTTP headers · Reproducibility: Always (2/2 curl runs + 1 Playwright run)
- Environment: curl 8 + Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan); https://app-beta.cloudreel.com/ , /post, /pricing, /terms, /privacy
- Preconditions: None (headers read passively)

**Steps to reproduce**

1. curl -sD - -o /dev/null https://app-beta.cloudreel.com/pricing
2. Open https://app-beta.cloudreel.com/ signed in and read the document response headers (DevTools > Network)
3. Compare with /login and /settings

**Expected:** Every HTML response sends X-Frame-Options: DENY and/or CSP frame-ancestors 'none' (as /login, /signup, /forgot-password and /settings already do).

**Actual:** Signed-in '/', /post, /projects etc. and public /pricing, /terms, /privacy send neither header. Only /login, /signup, /forgot-password and /settings are protected - the policy is applied per route, not globally.

**Console / network**

```
GET / 200 (signed in): content-security-policy MISSING, x-frame-options MISSING; GET /login 200: content-security-policy: frame-ancestors 'none', x-frame-options: DENY
```

Related findings: · Signed-in pages contain one-click actions (New post, Go live, Upgrade). Apply the header globally in nginx/next.config headers().
