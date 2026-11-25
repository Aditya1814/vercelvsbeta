window.DATA=window.DATA||{};window.DATA["defects"]=[
 {
  "id": "BUG-FUNC-01",
  "sev": "critical",
  "pri": "P1",
  "module": "Analytics",
  "repro": "Always (3/3)",
  "title": "[Analytics] Overview API returns 500, page is only an error card; range change and Try again repeat the 500",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /analytics",
  "pre": "Signed in",
  "expected": "Overview KPIs/charts load for the chosen range; Export CSV enabled.",
  "actual": "Only \"Could not load analytics internal error Try again\"; Export CSV disabled; every range and retry fails with 500.",
  "steps": [
   "Open /analytics",
   "Observe the page",
   "Click 7d",
   "Click Try again"
  ],
  "logs": "GET /api/gateway/video/social/overview?range=30d -> 500 {\"error\":{\"code\":\"internal\",\"message\":\"internal error\"}}; GET /api/gateway/video/social/overview?range=7d -> 500 (same body); console \"Failed to load resource: the server responded with a status of 500 ()\"",
  "shots": [
   {
    "img": "images/img0001.webp",
    "caption": "analytics_r1.png"
   },
   {
    "img": "images/img0001.webp",
    "caption": "analytics_r2.png"
   }
  ],
  "related": "Related findings: PUB-23 PUB-03 PUB-24 · Raw backend text \"internal error\" shown to users (PUB-03).",
  "refs": [
   "PUB-23",
   "PUB-03",
   "PUB-24"
  ]
 },
 {
  "id": "BUG-FUNC-02",
  "sev": "major",
  "pri": "P1",
  "module": "Post / Plan",
  "repro": "Always (3/3)",
  "title": "[Post] Posts list and post-metrics APIs return 500; Best Time to Post and all view counts fail",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post, /plan",
  "pre": "Signed in; workspace with 4 published YouTube posts",
  "expected": "Post numbers and best times load.",
  "actual": "\"Could not read your post numbers: internal error Try again\"; Views/Total views/Engagements/ENG. RATE all \"—\". Plan also fires the failing post-metrics call.",
  "steps": [
   "Open /post",
   "Watch network and the Best Time to Post card",
   "Open /plan"
  ],
  "logs": "GET /api/gateway/video/social/posts?range=all&sort=published&limit=200 -> 500 {\"error\":{\"code\":\"internal\",\"message\":\"internal error\"}}; GET /api/gateway/video/social/post-metrics?post_uuids=34e09034-…,94ad07e4-…,9f1fb7b8-…,cd82645d-… -> 500 {\"error\":{\"code\":\"internal\",\"message\":\"internal error\"}}",
  "shots": [
   {
    "img": "images/img0235.webp",
    "caption": "post_main_r1.png"
   },
   {
    "img": "images/img0236.webp",
    "caption": "post_poststab_r2.png"
   }
  ],
  "related": "Related findings: PUB-01 PUB-03",
  "refs": [
   "PUB-01",
   "PUB-03"
  ]
 },
 {
  "id": "BUG-FUNC-04",
  "sev": "major",
  "pri": "P1",
  "module": "Plan",
  "repro": "Always (4/4)",
  "title": "[Plan] \"Studio events could not be loaded: The Studio could not do that (200)\" — events API returns a JSON-encoded string",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /plan",
  "pre": "Signed in",
  "expected": "Scheduled Studio events appear on the calendar; no banner.",
  "actual": "Banner \"Studio events could not be loaded: The Studio could not do that (200).\"; \"0 live events\" while the API actually returns events.",
  "steps": [
   "Open /plan",
   "Read the yellow banner and the \"live events\" count"
  ],
  "logs": "POST /api/studio/v2/ProducerEvent/producerEventPlaylist -> 200, content-type application/json, body starts with a quote: \"{\\\"Data\\\":[{\\\"startDateTime\\\":1793471400,\\\"events\\\":[{\\\"Cid\\\":228,…\" — JSON.parse(body) yields a string, not an object (double-encoded).",
  "shots": [
   {
    "img": "images/img0237.webp",
    "caption": "plan_main_r1.png"
   },
   {
    "img": "images/img0237.webp",
    "caption": "plan_banner_final.png"
   }
  ],
  "related": "Related findings: PUB-17 PUB-03 PUB-18 · Root cause verified: double-encoded JSON from the Studio gateway; fix server serialisation or parse twice defensively. The error copy also shows a raw status \"(200)\".",
  "refs": [
   "PUB-17",
   "PUB-03",
   "PUB-18"
  ]
 },
 {
  "id": "BUG-FUNC-06",
  "sev": "major",
  "pri": "P1",
  "module": "App shell",
  "repro": "Always (2/2 contexts, 2/2 second tabs)",
  "title": "[App shell] \"Choose your plan\" upsell opens by itself on the first page of every new tab/session",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — any page (/, /projects, /post, /plan…)",
  "pre": "Signed in on Free plan",
  "expected": "No unrequested upsell (or at most once per user, dismissal remembered).",
  "actual": "Modal \"Choose your plan\" (Lite/Essential/Growth) covers the page on first load and again in every new tab; not on client-side nav or same-tab reload. Focus after Esc goes to <body>.",
  "steps": [
   "Open the app in a new browser context",
   "Observe the modal",
   "Close it, open the app in a second tab of the same session"
  ],
  "logs": "n/a (client behaviour)",
  "shots": [
   {
    "img": "images/img0238.webp",
    "caption": "shell_plan_modal_r1.png"
   },
   {
    "img": "images/img0239.webp",
    "caption": "shell_plan_modal_r2.png"
   }
  ],
  "related": "Related findings: SHA-01",
  "refs": [
   "SHA-01"
  ]
 },
 {
  "id": "BUG-FUNC-07",
  "sev": "major",
  "pri": "P1",
  "module": "Assistant (Orbit) / Brand Kits",
  "repro": "Always (5/5)",
  "title": "[Orbit] Closing the Personalize dialog without changes sends a PATCH to the brand board",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /co-creator",
  "pre": "Signed in; no edits made in the dialog",
  "expected": "Dismissing an untouched dialog sends no write.",
  "actual": "Every dismissal fires PATCH /api/gateway/video/brand-boards/<default kit id> with an EMPTY personalize block. If this reaches the server it may overwrite any saved tone/voice/guides (inferred, not verified – our guard aborted the request).",
  "steps": [
   "Open /co-creator",
   "Click Personalize",
   "Press Escape (or the dialog's close button) without touching anything"
  ],
  "logs": "PATCH /api/gateway/video/brand-boards/01a20c8d-ece0-791d-9f20-2ac68369e1fb body {\"styling\":{\"personalize\":{\"enabled\":{},\"guides\":{},\"tone\":null,\"voice\":\"\"}},\"version\":1} (aborted client-side by the QA read-only guard)",
  "shots": [
   {
    "img": "images/img0240.webp",
    "caption": "mod_orbit_personalize_r1.png"
   },
   {
    "img": "images/img0126.webp",
    "caption": "orbit_personalize_open.png"
   }
  ],
  "related": "Related findings: · New. Same family as CREATE-28 (writes on open). Data-loss risk is inferred.",
  "refs": []
 },
 {
  "id": "BUG-FUNC-28",
  "sev": "major",
  "pri": "P1",
  "module": "Sign-up / Legal",
  "repro": "Always (2/2)",
  "title": "[Sign-up/Legal] Sign-up requires agreeing to placeholder Terms and a draft Privacy Policy",
  "env": "Chrome 158, 1440x900, signed-out fresh context — /signup?step=2, /terms, /privacy",
  "pre": "Signed out",
  "expected": "Final, reviewed legal copy.",
  "actual": "/terms: \"Placeholder. … replace with the reviewed legal copy before any external launch.\" /privacy: draft with placeholders [LEGAL ENTITY], [REGISTERED ADDRESS], [PRIVACY CONTACT EMAIL], [GRIEVANCE OFFICER NAME + CONTACT], [EMAIL DELIVERY PROVIDER], 3x [RETENTION: …].",
  "steps": [
   "Open /signup, pick a profile, Continue",
   "Follow \"Terms of Service\" and \"Privacy Policy\" links"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0007.webp",
    "caption": "legal_terms_placeholder.png"
   },
   {
    "img": "images/img0008.webp",
    "caption": "legal_privacy_brackets.png"
   }
  ],
  "related": "Related findings: SHA-03 SHA-04 · Must be fixed before any wider beta that accepts new sign-ups.",
  "refs": [
   "SHA-03",
   "SHA-04"
  ]
 },
 {
  "id": "BUG-CA-01",
  "sev": "major",
  "pri": "P1",
  "module": "Posts (/post)",
  "repro": "Always (5/5: matrix Chrome 768, trial clicks in Chrome/Safari/Firefox 768, Chrome 720 zoom)",
  "title": "[Posts] \"Manage accounts\" and \"New post\" cannot be clicked at tablet-portrait / 200%-zoom widths (720-799 px)",
  "env": "Chrome 158, Safari/WebKit 27.2, Firefox 159 on macOS; 768x1024 and 720x450 (= 1440x900 at 200% zoom); https://app-beta.cloudreel.com/post; Pavan's workspace",
  "pre": "Signed in; plan modal closed",
  "expected": "The buttons respond, as at 800 px and above, and as on the reference /publishing-hub at 768 px",
  "actual": "The header wraps to two rows and the next block (div.mx-auto.max-w-[1400px].px-6.py-6 holding Queue/Approvals/Posts) overlaps the buttons invisibly; clicks land on that div. Playwright actionability: \"<div class=\\\"mx-auto max-w-[1400px] px-6 py-6\\\"> from <div class=\\\"flex-1 overflow-y-auto\\\"> subtree intercepts pointer events\". The user cannot create a post or open account management without resizing.",
  "steps": [
   "Set the window to 768 px wide (or zoom a 1440 px window to 200%)",
   "Open /post",
   "Click \"New post\" or \"Manage accounts\" (or the gear \"Manage social media accounts\")"
  ],
  "logs": "elementFromPoint(centre of \"New post\" at y=54-90) -> DIV.mx-auto max-w-[1400px] px-6 py-6. At 800/900/1024/1100 px the button is at y=23-59 and receives the click.",
  "shots": [
   {
    "img": "images/img0241.webp",
    "caption": "ev_768_post_header.png"
   },
   {
    "img": "images/img0242.webp",
    "caption": "ev_post_header_Safari_768.png"
   },
   {
    "img": "images/img0243.webp",
    "caption": "ev_post_header_Firefox_768.png"
   }
  ],
  "related": "Related findings: · Beta-only: reference buttons are clickable at 768. Works on iPad (810 px). Likely a negative margin / sticky header height that does not account for the wrapped second row. Only trial (no-op) clicks were used.",
  "refs": []
 },
 {
  "id": "BUG-NF-01",
  "sev": "major",
  "pri": "P1",
  "module": "Platform / HTTP headers",
  "repro": "Always (2/2 curl runs + 1 Playwright run)",
  "title": "[Security] Signed-in app pages and most public pages can be framed (no X-Frame-Options / frame-ancestors) - clickjacking",
  "env": "curl 8 + Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan); https://app-beta.cloudreel.com/ , /post, /pricing, /terms, /privacy",
  "pre": "None (headers read passively)",
  "expected": "Every HTML response sends X-Frame-Options: DENY and/or CSP frame-ancestors 'none' (as /login, /signup, /forgot-password and /settings already do).",
  "actual": "Signed-in '/', /post, /projects etc. and public /pricing, /terms, /privacy send neither header. Only /login, /signup, /forgot-password and /settings are protected - the policy is applied per route, not globally.",
  "steps": [
   "curl -sD - -o /dev/null https://app-beta.cloudreel.com/pricing",
   "Open https://app-beta.cloudreel.com/ signed in and read the document response headers (DevTools > Network)",
   "Compare with /login and /settings"
  ],
  "logs": "GET / 200 (signed in): content-security-policy MISSING, x-frame-options MISSING; GET /login 200: content-security-policy: frame-ancestors 'none', x-frame-options: DENY",
  "shots": [],
  "related": "Related findings: · Signed-in pages contain one-click actions (New post, Go live, Upgrade). Apply the header globally in nginx/next.config headers().",
  "refs": []
 },
 {
  "id": "BUG-FUNC-03",
  "sev": "major",
  "pri": "P2",
  "module": "Post",
  "repro": "Always (2/2)",
  "title": "[Post] Post details dialog cannot load the post's numbers (500)",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post?tab=posts",
  "pre": "Signed in",
  "expected": "Details dialog shows views/engagement for the post.",
  "actual": "Dialog opens (timeline, View on YouTube) but shows \"Could not load this post’s numbers: internal error\".",
  "steps": [
   "Open /post?tab=posts",
   "Click the first row"
  ],
  "logs": "GET /api/gateway/video/social/posts/cd82645d-fd4b-4bd7-9860-58cb1f91716e/metrics?range=90d -> 500 {\"error\":{\"code\":\"internal\",\"message\":\"internal error\"}}",
  "shots": [
   {
    "img": "images/img0244.webp",
    "caption": "post_detail_r1.png"
   },
   {
    "img": "images/img0245.webp",
    "caption": "post_detail_r2.png"
   }
  ],
  "related": "Related findings: PUB-02 PUB-03",
  "refs": [
   "PUB-02",
   "PUB-03"
  ]
 },
 {
  "id": "BUG-FUNC-08",
  "sev": "major",
  "pri": "P2",
  "module": "Assistant (Orbit)",
  "repro": "Always (5/5)",
  "title": "[Orbit] Assistant opens a voice session without any mic action (page load and launcher click)",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /co-creator, floating \"Ask Orbit\" pill",
  "pre": "Signed in",
  "expected": "Voice session only created when the user starts voice input.",
  "actual": "POST voice/session sent on page load and on each launcher click.",
  "steps": [
   "Open /co-creator (or click the \"Ask Orbit\" pill on Home)",
   "Watch network; do not touch the mic"
  ],
  "logs": "POST /api/gateway/assistant/api/voice/session (aborted by QA guard) — fired on /co-creator load 3/3 and launcher click 2/2",
  "shots": [
   {
    "img": "images/img0246.webp",
    "caption": "shell_orbit_pill_r1.png"
   },
   {
    "img": "images/img0247.webp",
    "caption": "shell_orbit_pill_r2.png"
   }
  ],
  "related": "Related findings: SHA-29 CREATE-29 · Possible cost/quota impact and privacy concern (voice session without consent).",
  "refs": [
   "SHA-29",
   "CREATE-29"
  ]
 },
 {
  "id": "BUG-FUNC-09",
  "sev": "major",
  "pri": "P2",
  "module": "Workflows",
  "repro": "Always (2/2)",
  "title": "[Workflows] \"Spotlight each speaker\" cannot be started: unfilled \"pick a shape\" blank keeps Start disabled",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects?workflow=speaker-clips",
  "pre": "Signed in; at least one library video",
  "expected": "Start enabled with a default clip shape (other composers enable Start after picking a video).",
  "actual": "Sentence reads \"…as pick a shape clips locked on the speaker…\"; Start workflow stays disabled.",
  "steps": [
   "Open /projects?workflow=speaker-clips",
   "choose a video -> From my library -> pick \"Session - 11/17/2026\"",
   "Check Start workflow"
  ],
  "logs": "No errors logged.",
  "shots": [
   {
    "img": "images/img0248.webp",
    "caption": "wf_speaker-clips_picked_r1.png"
   },
   {
    "img": "images/img0248.webp",
    "caption": "wf_speaker-clips_picked_r2.png"
   }
  ],
  "related": "Related findings: CREATE-24",
  "refs": [
   "CREATE-24"
  ]
 },
 {
  "id": "BUG-FUNC-11",
  "sev": "major",
  "pri": "P2",
  "module": "Post",
  "repro": "Always (2/2)",
  "title": "[Post] Manage accounts offers live \"Add account\" for platforms \"Not set up on this server yet\"",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post -> Manage accounts",
  "pre": "Signed in",
  "expected": "Only connectable platforms offer Add account; others disabled/hidden.",
  "actual": "\"1/9 connected\"; TikTok, Threads, LinkedIn, X show \"Not set up on this server yet\" next to an enabled \"Add account\".",
  "steps": [
   "Open /post",
   "Click Manage accounts"
  ],
  "logs": "n/a (Add account not clicked)",
  "shots": [
   {
    "img": "images/img0249.webp",
    "caption": "mod_post_manage_r1.png"
   },
   {
    "img": "images/img0250.webp",
    "caption": "mod_post_manage_r2.png"
   }
  ],
  "related": "Related findings: PUB-07 LIVE-24",
  "refs": [
   "PUB-07",
   "LIVE-24"
  ]
 },
 {
  "id": "BUG-FUNC-26",
  "sev": "major",
  "pri": "P2",
  "module": "App shell",
  "repro": "Always (2/2)",
  "title": "[App shell] At 1440x900 the pinned sidebar footer covers Plan and Simulcast and pushes Analytics below the fold",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — any app page at 1440x900",
  "pre": "Signed in, desktop 1440x900",
  "expected": "All primary nav items visible and clickable.",
  "actual": "elementFromPoint at the centre of Plan (y761) and Simulcast (y811) hits the footer, not the link; Analytics starts at y890 (off-screen). Users must scroll the nav or use Cmd+K.",
  "steps": [
   "Open / at 1440x900",
   "Try to click Plan / Simulcast / Analytics in the sidebar"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0251.webp",
    "caption": "nav_sidebar_1440_r1.png"
   },
   {
    "img": "images/img0252.webp",
    "caption": "nav_sidebar_1440_r2.png"
   }
  ],
  "related": "Related findings: PUB-40",
  "refs": [
   "PUB-40"
  ]
 },
 {
  "id": "BUG-CA-03",
  "sev": "major",
  "pri": "P2",
  "module": "Studio > Schedule",
  "repro": "Always (2/2 runs)",
  "title": "[Studio] Schedule a session dialog: close (X) button has no accessible name and gets initial focus; dialog not marked modal",
  "env": "Chrome 158 1440x900 macOS; https://app-beta.cloudreel.com/studio",
  "pre": "Signed in",
  "expected": "The close button is announced as \"Close\" (aria-label), and the dialog has aria-modal=\"true\" like the Simulcast Broadcast dialog",
  "actual": "Focus lands on an unnamed <button class=\"-my-1 ...\"> (the X); a screen reader announces just \"button\". axe: button-name (critical, 1 node, .-my-1). The dialog has role=\"dialog\" but no aria-modal. Also color-contrast (serious, 4) on #studio-schedule-description-count.",
  "steps": [
   "Open /studio",
   "Tab to \"Schedule\" and press Enter",
   "Note where focus lands; run axe on the dialog"
  ],
  "logs": "axe in dialog: [\"button-name(critical,1) .-my-1\", \"color-contrast(serious,4) #studio-schedule-description-count\"]",
  "shots": [
   {
    "img": "images/img0253.webp",
    "caption": "kb_studio_schedule_open_run1.png"
   },
   {
    "img": "images/img0254.webp",
    "caption": "kb_studio_schedule_open_run2.png"
   }
  ],
  "related": "Related findings: · Stopped before \"Schedule session\" (would write data).",
  "refs": []
 },
 {
  "id": "BUG-NF-02",
  "sev": "major",
  "pri": "P2",
  "module": "Platform / HTTP headers",
  "repro": "Always (2/2)",
  "title": "[Security] No HSTS (Strict-Transport-Security) on any beta response",
  "env": "curl + Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)",
  "pre": "None",
  "expected": "strict-transport-security: max-age>=31536000; includeSubDomains (the Vercel reference sends max-age=63072000; includeSubDomains; preload).",
  "actual": "Header absent on HTML pages and API responses.",
  "steps": [
   "curl -sD - -o /dev/null https://app-beta.cloudreel.com/login",
   "Look for strict-transport-security",
   "Repeat for an API response (/api/status) and signed-in '/'"
  ],
  "logs": "GET https://app-beta.cloudreel.com/login -> HTTP/2 200, server: nginx, no strict-transport-security",
  "shots": [],
  "related": "Related findings: · Session cookie is __Host- (Secure) so it is not sent over HTTP, but first-visit SSL-strip is still possible.",
  "refs": []
 },
 {
  "id": "BUG-NF-04",
  "sev": "major",
  "pri": "P2",
  "module": "Public pages / Analytics",
  "repro": "Always (6/6 public pages)",
  "title": "[Privacy] Analytics events and a 1-year device-id cookie start on first visit with no cookie/consent notice",
  "env": "Chrome 158 headless, fresh context (no storage), 1440x900, https://app-beta.cloudreel.com/login, /signup, /pricing",
  "pre": "Signed out, clean browser profile",
  "expected": "Reference shows a notice 'We use cookies to keep you signed in and remember preferences. Privacy' and analytics wait for consent (non-essential tracking needs opt-in for EU/UK users).",
  "actual": "No notice on any public page; POST /api/events (SCREEN_VIEW with deviceID, sessionID, timezone, viewport) and the cr_did cookie are created immediately. Privacy page only refers to consent given on www.cloudreel.com, which doesn't apply to users who land directly on the app.",
  "steps": [
   "Open https://app-beta.cloudreel.com/login in a fresh profile",
   "Watch Network: GET /api/events/vg and POST /api/events fire on load",
   "Check cookies: cr_did (expires ~1 year) is set",
   "Look for any cookie/consent notice"
  ],
  "logs": "GET https://app-beta.cloudreel.com/api/events/vg 200; POST https://app-beta.cloudreel.com/api/events",
  "shots": [
   {
    "img": "images/img0036.webp",
    "caption": "public_beta_login.png"
   },
   {
    "img": "images/img0255.webp",
    "caption": "public_vercel_pricing.png"
   }
  ],
  "related": "Related findings: SHA-04 · First-party only - no third-party trackers were loaded on any page (verified).",
  "refs": [
   "SHA-04"
  ]
 },
 {
  "id": "BUG-NF-09",
  "sev": "major",
  "pri": "P2",
  "module": "Studio",
  "repro": "Always (2/2)",
  "title": "[Studio] When recordings fail to load, Studio shows 'No recordings yet' empty state together with the error and has no retry button",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), https://app-beta.cloudreel.com/studio, GET /api/gateway/studio/v1/events forced to 500 client-side",
  "pre": "Signed in",
  "expected": "Error state replaces the list, with a Retry button; never claim the user has no recordings when the list failed to load.",
  "actual": "Banner 'Something went wrong on our side. Try again.' (plain text, no button) above the empty state 'No recordings yet - Schedule a session or start recording.'",
  "steps": [
   "page.route('**/api/gateway/**', r => r.fulfill({status:500}))",
   "Open /studio, close the plan picker"
  ],
  "logs": "GET /api/gateway/studio/v1/events?from=…&to=… -> 500 (simulated)",
  "shots": [
   {
    "img": "images/img0256.webp",
    "caption": "res_studio_500.png"
   }
  ],
  "related": "Related findings: · Projects has a milder version: header 'Projects (0)' and 'No folders yet. Use New Folder to create one.' beside 'Could not load your library' (res_projects_500.png).",
  "refs": []
 },
 {
  "id": "BUG-FUNC-10",
  "sev": "minor",
  "pri": "P2",
  "module": "Post",
  "repro": "Always (2/2)",
  "title": "[Post] Published-post counts disagree on the same page (4 vs 2)",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post?tab=posts",
  "pre": "Signed in; 2 videos published to 2 YouTube channels",
  "expected": "One consistent count.",
  "actual": "This Month \"Posts published 4\"; Posts tab \"2 Videos published\" and \"Published 2\"; header \"1 platform live\".",
  "steps": [
   "Open /post?tab=posts",
   "Compare \"This Month\" with the Posts tab counters"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0257.webp",
    "caption": "post_poststab_r1.png"
   },
   {
    "img": "images/img0258.webp",
    "caption": "post_kebab_final_r1.png"
   }
  ],
  "related": "Related findings: PUB-05 PUB-04",
  "refs": [
   "PUB-05",
   "PUB-04"
  ]
 },
 {
  "id": "BUG-FUNC-13",
  "sev": "minor",
  "pri": "P2",
  "module": "Project detail",
  "repro": "Always (2/2)",
  "title": "[Project detail] Creations composer lists 8 platforms incl. TikTok, LinkedIn, X, Threads, Snapchat",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects?video=<id>&tab=creations",
  "pre": "Signed in",
  "expected": "Only publishable platforms (YouTube/Instagram/Facebook per reference).",
  "actual": "\"YouTube ✓ Instagram ! TikTok ! LinkedIn ! Facebook ! X ! Threads ! Snapchat ! — 1 of 8 posts ready\".",
  "steps": [
   "Open test-clip",
   "Click Creations"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0259.webp",
    "caption": "proj_detail_creations_r1.png"
   },
   {
    "img": "images/img0259.webp",
    "caption": "proj_detail_creations_r2.png"
   }
  ],
  "related": "Related findings: CREATE-16 PUB-07",
  "refs": [
   "CREATE-16",
   "PUB-07"
  ]
 },
 {
  "id": "BUG-FUNC-14",
  "sev": "minor",
  "pri": "P2",
  "module": "Post",
  "repro": "Always (4/4, 2 rows)",
  "title": "[Post] Row \"More\" (⋮) button does nothing",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post?tab=posts",
  "pre": "Signed in; published posts listed",
  "expected": "Menu with post actions opens.",
  "actual": "No menu; aria-haspopup=\"menu\" but aria-expanded stays \"false\"; no popup in DOM.",
  "steps": [
   "Open /post?tab=posts",
   "Click \"More for <post title>\" on any row"
  ],
  "logs": "No console errors.",
  "shots": [
   {
    "img": "images/img0258.webp",
    "caption": "post_kebab_final_r1.png"
   },
   {
    "img": "images/img0260.webp",
    "caption": "post_kebab_final_r2.png"
   }
  ],
  "related": "Related findings: PUB-12",
  "refs": [
   "PUB-12"
  ]
 },
 {
  "id": "BUG-FUNC-19",
  "sev": "minor",
  "pri": "P2",
  "module": "Projects",
  "repro": "Always (2/2)",
  "title": "[Projects] Favorites / Archived / Bin views stack into a contradictory state with the wrong empty message",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects",
  "pre": "Signed in",
  "expected": "Views are mutually exclusive (one pressed at a time) or combine with a matching message; Videos resets to all videos.",
  "actual": "URL becomes /projects?fav=1&archived=1&bin=1; all three pressed; heading \"Bin (0)\" with the message \"No favorites yet\"; Videos tab keeps all three filters; state persists across refresh.",
  "steps": [
   "Open /projects",
   "Click Favorites",
   "Click Archived",
   "Click Bin",
   "Click the Videos tab"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0261.webp",
    "caption": "proj_view_stacked_r1.png"
   },
   {
    "img": "images/img0261.webp",
    "caption": "proj_view_stacked_r2.png"
   }
  ],
  "related": "Related findings: CREATE-05 · New.",
  "refs": [
   "CREATE-05"
  ]
 },
 {
  "id": "BUG-FUNC-22",
  "sev": "minor",
  "pri": "P2",
  "module": "App shell (cross-module)",
  "repro": "Always (2/2 per dialog)",
  "title": "[A11y/Dialogs] Focus is dropped to <body> after closing many dialogs instead of returning to the trigger",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /, /projects, /studio, /layouts, /graphics, /brand-kits, /settings, /co-creator",
  "pre": "Signed in, keyboard user",
  "expected": "Focus returns to the control that opened the dialog (as it does for Notifications, Manage accounts, New post, Invite a user, New channel, Plan New).",
  "actual": "Focus goes to <body> after closing: Command palette, New Folder, Schedule a session, Studio recording drawer, Layouts Recycle bin, Graphics Templates, New brand kit, Change password, Personalize, Ask Orbit panel, auto-opened plan picker.",
  "steps": [
   "Open e.g. /projects",
   "Click New Folder",
   "Press Escape",
   "Check document.activeElement"
  ],
  "logs": "document.activeElement after Esc = BODY",
  "shots": [
   {
    "img": "images/img0262.webp",
    "caption": "proj_dlg_NewFolder_r1.png"
   },
   {
    "img": "images/img0263.webp",
    "caption": "mod_studio_schedule_r1.png"
   }
  ],
  "related": "Related findings: SHA-31 · New. Keyboard and screen-reader users lose their place.",
  "refs": [
   "SHA-31"
  ]
 },
 {
  "id": "BUG-CA-02",
  "sev": "minor",
  "pri": "P2",
  "module": "App shell / sidebar",
  "repro": "Always (2/2 runs)",
  "title": "[Shell] No \"Skip to content\" link; keyboard users tab through ~21 sidebar stops on every page",
  "env": "Chrome 158 1440x900 macOS; every signed-in page (checked /, /projects)",
  "pre": "Signed in",
  "expected": "First Tab shows a \"Skip to content\" link that moves focus to <main> (WCAG 2.4.1); the reference has one as its first Tab stop",
  "actual": "First Tab goes to sidebar \"Notifications\"; the first main-content control is the 22nd Tab stop on /projects (search box) and 28th on Home (\"Yes, find the clips\"). No skip link exists in the DOM.",
  "steps": [
   "Open / and click nowhere",
   "Press Tab"
  ],
  "logs": "document.querySelectorAll(\"a\") with /skip/i -> []. Reference: first Tab = \"Skip to content\".",
  "shots": [
   {
    "img": "images/img0264.webp",
    "caption": "kb_home_tabbed_run1.png"
   }
  ],
  "related": "Related findings: · Regression vs the reference.",
  "refs": []
 },
 {
  "id": "BUG-CA-06",
  "sev": "minor",
  "pri": "P2",
  "module": "Cross-cutting (design tokens)",
  "repro": "Always (2/2 identical axe runs)",
  "title": "[Accessibility] Text below 4.5:1 contrast on 11 of 15 pages (grey-400 meta text, grey-500 on grey-100 segmented controls)",
  "env": "Chrome 158 1440x900, axe-core wcag2aa",
  "pre": "Signed in (and signed out for /login, /signup)",
  "expected": "Normal-size text >= 4.5:1 (WCAG 1.4.3)",
  "actual": "color-contrast on: /studio, /projects, /projects?workflow=create-clips, /post, /plan, /simulcast, /analytics, /settings, /co-creator, /login, /signup. Most nodes are text-gray-400 #99a1af on white (2.6:1) or on #f9fafb (2.48:1), e.g. Studio card dates, \"No folders yet...\", Posts section labels \"UPCOMING\"/\"RECENTLY PUBLISHED\" at 10 px, \"Orbit can make mistakes\"; and text-gray-500 #6a7282 on #f3f4f6 (4.39:1) in Plan Month/Week/Day and Analytics 7d/30d/90d toggles; /login and /signup left-panel copy #6b7280 on #f3f4f6 (4.39:1). /plan alone has 24 nodes.",
  "steps": [
   "Open any listed page",
   "Run axe (color-contrast)"
  ],
  "logs": "/plan: \".md\\:inline\" Asia/Calcutta 2.6:1; /post \".space-y-2:nth-child(1) > .tracking-wider.text-\\[10px\\].uppercase\" 2.48:1; /settings \"Sign out\" button #e7000b on #fef2f2 4.46:1",
  "shots": [
   {
    "img": "images/img0265.webp",
    "caption": "_plan.jpg"
   },
   {
    "img": "images/img0266.webp",
    "caption": "_post.jpg"
   }
  ],
  "related": "Related findings: · Shared with the reference (Vercel /schedule has 35 nodes, /recordings 14). One token change (grey-400 -> grey-500/600 for text) fixes most of it.",
  "refs": []
 },
 {
  "id": "BUG-NF-03",
  "sev": "minor",
  "pri": "P2",
  "module": "Platform / HTTP headers",
  "repro": "Always (2/2)",
  "title": "[Security] No CSP, X-Content-Type-Options, Referrer-Policy or Permissions-Policy; X-Powered-By: Next.js disclosed",
  "env": "curl + Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)",
  "pre": "None",
  "expected": "Baseline hardening headers: a CSP with script-src/connect-src, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy limiting camera/microphone to self; no framework banner.",
  "actual": "Only frame-ancestors on 4 routes; the other four headers missing everywhere; x-powered-by: Next.js on every HTML response.",
  "steps": [
   "curl -sD - -o /dev/null https://app-beta.cloudreel.com/login",
   "Signed in, read headers of '/' and /api/gateway/subscription/v1/billing/summary"
  ],
  "logs": "x-powered-by: Next.js; x-content-type-options MISSING; referrer-policy MISSING; permissions-policy MISSING",
  "shots": [],
  "related": "Related findings: · Permissions-Policy matters here because Studio uses camera/mic. Without CSP there is no second line of defence for the user profile cached in sessionStorage (BUG-NF-06).",
  "refs": []
 },
 {
  "id": "BUG-NF-08",
  "sev": "minor",
  "pri": "P2",
  "module": "Posts / Analytics / Plan / Projects",
  "repro": "Always (2/2 runs, 4 pages)",
  "title": "[Error handling] Raw backend text 'internal error' shown in user-facing error banners (Posts, Analytics, Plan, Projects)",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan); failures simulated client-side with page.route() returning 500, plus real 500s on /post and /analytics",
  "pre": "Signed in",
  "expected": "Plain-language message with what to do: e.g. 'We couldn't load your posts. Try again in a moment.' (Studio and Billing already do this: 'Something went wrong on our side. Try again.', 'Billing is temporarily unavailable…').",
  "actual": "'Could not load posts: internal error', 'Could not load your connected accounts: internal error', 'Could not load analytics / internal error', 'Could not load scheduled posts: internal error', 'Could not load your library / internal error'.",
  "steps": [
   "Make the page's /api/gateway/* GETs return 500 (or just open /analytics, which currently fails for real)",
   "Read the banner"
  ],
  "logs": "500 /api/gateway/video/social/overview?range=30d :: {\"error\":{\"code\":\"internal\",\"message\":\"internal error\"}}",
  "shots": [
   {
    "img": "images/img0267.webp",
    "caption": "res_post_500.png"
   },
   {
    "img": "images/img0268.webp",
    "caption": "res_analytics_500.png"
   },
   {
    "img": "images/img0269.webp",
    "caption": "res_plan_500.png"
   }
  ],
  "related": "Related findings: PUB-03 PUB-23 PUB-01 · Backend error bodies themselves are terse (no stack traces/SQL) - good; the issue is only the client echoing message verbatim.",
  "refs": [
   "PUB-03",
   "PUB-23",
   "PUB-01"
  ]
 },
 {
  "id": "BUG-NF-11",
  "sev": "minor",
  "pri": "P2",
  "module": "Shell / Plan picker",
  "repro": "Always (3/3 runs)",
  "title": "[Performance] CLS over budget (0.11-0.17) on 6 of 7 signed-in pages, caused by the auto-opening 'Choose your plan' modal, which re-opens in every new tab",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)",
  "pre": "Signed in, free plan",
  "expected": "CLS <= 0.1; picker shown at most once per user/session (not per tab), animated with transform/opacity.",
  "actual": "0.098 of shift per load comes from DIV.max-h-[92vh] 'Choose your plan…' sliding in; totals: / 0.139-0.15, /projects 0.162-0.172, /post 0.12-0.148, /plan 0.154-0.167, /studio 0.118, /analytics 0.108. Without the modal pages sit at 0.02-0.06. The 'shown' flag lives in sessionStorage (cloudreel:plan-prompt-shown), so every new tab re-opens the modal.",
  "steps": [
   "Open '/', /projects, /post or /plan in a new tab",
   "Record layout-shift entries (PerformanceObserver)",
   "Open another page in a NEW tab"
  ],
  "logs": "layout-shift v=0.098 sources: DIV 'Choose your planMonthlyAnnually', H2 'Choose your plan'",
  "shots": [
   {
    "img": "images/img0270.webp",
    "caption": "perf_beta_post.png"
   },
   {
    "img": "images/img0011.webp",
    "caption": "perf_beta_projects.png"
   }
  ],
  "related": "Related findings: · Reference also exceeds CLS (0.13-0.70) so this is not a regression vs Vercel, but the beta is the shipped product.",
  "refs": []
 },
 {
  "id": "BUG-NF-12",
  "sev": "minor",
  "pri": "P2",
  "module": "Plan",
  "repro": "Always (2/2 + repeat visit)",
  "title": "[Plan] Plan LCP ~3.0-3.1 s (budget 2.5 s): calendar waits on a 2.3 s POST /api/studio/v2/ProducerEvent/producerEventPlaylist",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), https://app-beta.cloudreel.com/plan",
  "pre": "Signed in",
  "expected": "LCP <= 2.5 s; calendar renders with posts first, live events fill in.",
  "actual": "Cold LCP 3136 ms, repeat visit 2940 ms; network idle 3.4-3.6 s. Slowest call POST producerEventPlaylist 2293 ms (+ POST /api/studio-session 367 ms). All other pages LCP < 1.4 s.",
  "steps": [
   "Open /plan cold and warm",
   "Measure LCP and API timings"
  ],
  "logs": "POST /api/studio/v2/ProducerEvent/producerEventPlaylist 200 2293ms",
  "shots": [
   {
    "img": "images/img0271.webp",
    "caption": "perf_beta_plan.png"
   }
  ],
  "related": "Related findings: PUB-18 PUB-17 · Vercel /schedule LCP 692 ms.",
  "refs": [
   "PUB-18",
   "PUB-17"
  ]
 },
 {
  "id": "BUG-FUNC-05",
  "sev": "minor",
  "pri": "P3",
  "module": "Encoders",
  "repro": "Always (3/3)",
  "title": "[Encoders] Page calls admin/relays which returns 404 on every load",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /encoders",
  "pre": "Signed in (workspace owner, Free plan)",
  "expected": "No failing requests (admin data only requested for admins / endpoint exists).",
  "actual": "404 + console error on every load; page otherwise renders.",
  "steps": [
   "Open /encoders",
   "Check console/network"
  ],
  "logs": "GET /api/gateway/encoder/v1/admin/relays -> 404 {\"error\":\"not_found\",\"message\":\"not found\"}; console \"Failed to load resource: the server responded with a status of 404 ()\"",
  "shots": [
   {
    "img": "images/img0059.webp",
    "caption": "shell_nav_encoders_r1.png"
   },
   {
    "img": "images/img0059.webp",
    "caption": "shell_nav_encoders_r2.png"
   }
  ],
  "related": "Related findings: LIVE-08",
  "refs": [
   "LIVE-08"
  ]
 },
 {
  "id": "BUG-FUNC-12",
  "sev": "minor",
  "pri": "P3",
  "module": "Post / Settings",
  "repro": "Always (2/2)",
  "title": "[Post/Settings] Connected-account count differs between Post and Settings",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /post, /settings#connected-accounts",
  "pre": "Signed in; 2 YouTube channels connected",
  "expected": "Same platform universe and count everywhere.",
  "actual": "Header \"1 platform live\"; Manage accounts \"1/9 connected\"; Settings \"1 / 4 connected\" (YouTube \"2 accounts connected\").",
  "steps": [
   "/post: read header pill and Manage accounts",
   "/settings#connected-accounts: read the counter"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0249.webp",
    "caption": "mod_post_manage_r1.png"
   },
   {
    "img": "images/img0272.webp",
    "caption": "settings_ConnectedAccounts_r1.png"
   }
  ],
  "related": "Related findings: PUB-08",
  "refs": [
   "PUB-08"
  ]
 },
 {
  "id": "BUG-FUNC-15",
  "sev": "minor",
  "pri": "P3",
  "module": "App shell",
  "repro": "Always (2/2)",
  "title": "[App shell] Unknown routes return HTTP 200 (soft 404); /projects/123 returns 404 with internal copy",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /nope-qa-404, /webinars, /projects/123",
  "pre": "Signed in",
  "expected": "HTTP 404 with the friendly page in both cases.",
  "actual": "/nope-qa-404 and retired routes (/webinars…): friendly 404 page, HTTP 200. /projects/123: HTTP 404 but copy \"That route is not registered with the Shell.\"",
  "steps": [
   "Open /nope-qa-404",
   "Open /projects/123"
  ],
  "logs": "GET /nope-qa-404 -> 200; GET /projects/123 -> 404",
  "shots": [
   {
    "img": "images/img0042.webp",
    "caption": "edge__nope_qa_404_r1.png"
   },
   {
    "img": "images/img0273.webp",
    "caption": "edge__projects_123_r1.png"
   }
  ],
  "related": "Related findings: X-06 SHA-34 SHA-33",
  "refs": [
   "X-06",
   "SHA-34",
   "SHA-33"
  ]
 },
 {
  "id": "BUG-FUNC-16",
  "sev": "minor",
  "pri": "P3",
  "module": "Auth / onboarding",
  "repro": "Always (2/2)",
  "title": "[Auth] /onboarding is a 404 when signed in; signed-out users are sent to log in and then land on the 404",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /onboarding",
  "pre": "Signed in / signed out",
  "expected": "Onboarding flow or redirect to Home.",
  "actual": "Signed in: \"404 Page not found\" (HTTP 200). Signed out: /login?next=%2Fonboarding.",
  "steps": [
   "Signed in: open /onboarding",
   "Signed out: open /onboarding"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0042.webp",
    "caption": "shell_onboarding_r1.png"
   },
   {
    "img": "images/img0042.webp",
    "caption": "shell_onboarding_r2.png"
   }
  ],
  "related": "Related findings: SHA-09",
  "refs": [
   "SHA-09"
  ]
 },
 {
  "id": "BUG-FUNC-20",
  "sev": "minor",
  "pri": "P3",
  "module": "Project detail / Simulcast",
  "repro": "Always (2/2)",
  "title": "[Projects/Simulcast] Deep links to a missing project or channel silently show the list with no message",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects?video=<made-up uuid>, /projects?video=not-a-uuid, /simulcast?channel=<made-up uuid>",
  "pre": "Signed in",
  "expected": "\"This project/channel doesn't exist or was deleted\" with a link back.",
  "actual": "Project links redirect to /projects with no notice; channel link keeps the bogus id in the URL and shows the list. Malformed id logs a 404 console error.",
  "steps": [
   "Open /projects?video=00000000-0000-4000-8000-000000000000",
   "Open /projects?video=not-a-uuid",
   "Open /simulcast?channel=00000000-0000-4000-8000-000000000000"
  ],
  "logs": "GET /api/gateway/video/content?ids=not-a-uuid -> 404 {\"error\":{\"code\":\"not_found\",\"message\":\"not found\"}}",
  "shots": [
   {
    "img": "images/img0274.webp",
    "caption": "edge__projects_video_00000000_0000_4000_8000_000000000000_r1.png"
   },
   {
    "img": "images/img0137.webp",
    "caption": "edge__simulcast_channel_00000000_0000_4000_8000_000000000000_r1.png"
   }
  ],
  "related": "Related findings: · New. Users following a stale share link get no explanation.",
  "refs": []
 },
 {
  "id": "BUG-FUNC-21",
  "sev": "minor",
  "pri": "P3",
  "module": "Workflows",
  "repro": "Always (2/2)",
  "title": "[Workflows] Unknown workflow ids silently show the Video Library",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /projects?workflow=unknown",
  "pre": "Signed in",
  "expected": "\"Workflow not found\" notice or redirect to the workflow list.",
  "actual": "Plain Video Library; URL keeps ?workflow=unknown; no message.",
  "steps": [
   "Open /projects?workflow=unknown (or ?workflow=)"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0275.webp",
    "caption": "edge__projects_workflow_unknown_r1.png"
   },
   {
    "img": "images/img0275.webp",
    "caption": "edge__projects_workflow_unknown_r2.png"
   }
  ],
  "related": "Related findings: CREATE-25 SHA-33",
  "refs": [
   "CREATE-25",
   "SHA-33"
  ]
 },
 {
  "id": "BUG-FUNC-23",
  "sev": "minor",
  "pri": "P3",
  "module": "Sign-up",
  "repro": "Always (4/4: spaces and tab, 2 runs)",
  "title": "[Sign-up] Whitespace-only Full name enables Create account",
  "env": "Chrome 158, 1440x900, signed-out fresh context — /signup?step=2&profile=creator",
  "pre": "Signed out; valid email, valid password, Terms checked",
  "expected": "Name treated as empty; Create account disabled or inline error.",
  "actual": "Create account enabled (disabled only for truly empty value).",
  "steps": [
   "Type \" \" (3 spaces) or a tab in Full name",
   "Observe Create account"
  ],
  "logs": "n/a (not submitted)",
  "shots": [
   {
    "img": "images/img0276.webp",
    "caption": "auth_signup_spaces_name_r1.png"
   },
   {
    "img": "images/img0277.webp",
    "caption": "auth_signup_spaces_name_r2.png"
   }
  ],
  "related": "Related findings: · New. Server validation unverified (would require creating an account).",
  "refs": []
 },
 {
  "id": "BUG-FUNC-25",
  "sev": "minor",
  "pri": "P3",
  "module": "Settings",
  "repro": "Always (2/2)",
  "title": "[Settings] Display name can be cleared and Save changes stays enabled with no validation",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /settings#account",
  "pre": "Signed in",
  "expected": "Save disabled or inline \"Name is required\".",
  "actual": "Save changes enabled, no message (not clicked; original restored).",
  "steps": [
   "Open Settings > Account",
   "Clear Display name",
   "Observe Save changes"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0033.webp",
    "caption": "settings_Account_r1.png"
   }
  ],
  "related": "Related findings: · New. Server-side validation unverified.",
  "refs": []
 },
 {
  "id": "BUG-CA-05",
  "sev": "minor",
  "pri": "P3",
  "module": "Projects (/projects) filters",
  "repro": "Always (2/2 runs)",
  "title": "[Projects] \"Newest\" sort menu is role=menu but arrow keys do nothing, and Esc from inside it drops focus to body",
  "env": "Chrome 158 1440x900 macOS; /projects",
  "pre": "Signed in",
  "expected": "A role=\"menu\" supports Up/Down arrows between menuitems and Esc returns focus to the trigger (WAI-ARIA menu button pattern); or drop the menu roles and behave like a plain listbox/disclosure",
  "actual": "ArrowDown leaves focus on the trigger; items are only reachable by Tab. After Esc from inside the menu, focus is on <body>.",
  "steps": [
   "Tab to the \"Newest\" sort button, press Enter",
   "Press ArrowDown",
   "Press Tab (focus enters \"Newest\" item), then Esc"
  ],
  "logs": "sort_after_arrow \"BUTTON[] Newest\"; sort_after_tab \"BUTTON[menuitem] Newest inMenu=true\"; sort_focus_after_esc \"BODY\"",
  "shots": [
   {
    "img": "images/img0278.webp",
    "caption": "kb_projects_sort_open_run1.png"
   }
  ],
  "related": "Related findings: · Reference sort control does not claim role=menu; it also has no arrow support.",
  "refs": []
 },
 {
  "id": "BUG-CA-07",
  "sev": "minor",
  "pri": "P3",
  "module": "Projects, Simulcast broadcast picker",
  "repro": "Always (2/2)",
  "title": "[Projects] Project cards are role=\"button\" containing other buttons/checkbox (nested interactive)",
  "env": "Chrome 158 1440x900, axe",
  "pre": "Signed in, workspace has 4 projects",
  "expected": "A card is either one control or a container of controls, not both (WCAG 4.1.2)",
  "actual": "Each card is <div role=\"button\" tabindex=\"0\" aria-label=\"Open Session - ...\"> with a Select checkbox, favourite, More options and Continue editing buttons inside: 4 nodes on /projects, 4 more in the Simulcast \"Broadcast a video\" list. Screen readers may not announce the inner controls; Tab gives 5 stops per card.",
  "steps": [
   "Open /projects",
   "Run axe; or Tab through a card"
  ],
  "logs": "axe nested-interactive: \".hover\\:shadow-md.hover\\:border-violet-200.hover\\:-translate-y-0\\.5:nth-child(1) - Element has focusable descendants\"",
  "shots": [],
  "related": "Related findings: CREATE-09 · Shared with the reference (/video-library 6 nodes).",
  "refs": [
   "CREATE-09"
  ]
 },
 {
  "id": "BUG-CA-08",
  "sev": "minor",
  "pri": "P3",
  "module": "App shell / mobile drawer",
  "repro": "Always (3/3)",
  "title": "[Shell] Phone nav drawer does not contain focus: Tab walks into page controls hidden behind the scrim, Esc leaves focus there",
  "env": "Chrome 158 390x844 (mobile, touch) macOS; Home",
  "pre": "Signed in",
  "expected": "While the drawer is open focus stays inside it (or the drawer closes when focus leaves); Esc returns focus to \"Open menu\"",
  "actual": "After the drawer's \"Upgrade\", focus moves to header Search/Upgrade/Notifications and the Home cards behind the dimmed scrim (focus ring visible on the hidden bell). Esc closes the drawer but focus stays on a Home card. Drawer has no role=\"dialog\"/aria-modal. Also the floating crew avatars sit above the drawer, covering its bottom-right corner.",
  "steps": [
   "At 390 px open Home",
   "Focus \"Open menu\", press Enter",
   "Press Tab ~23 times",
   "Press Esc"
  ],
  "logs": "Tab sequence: ... N x21,783 BUTTON Upgrade | OUT x67,6 BUTTON Search | OUT x123,9 BUTTON Upgrade | OUT x248,6 BUTTON Notifications ... focus after Esc: A \"Host an event\"",
  "shots": [
   {
    "img": "images/img0279.webp",
    "caption": "ev_drawer_focus_behind_scrim.png"
   },
   {
    "img": "images/img0280.webp",
    "caption": "ev_drawer_Chrome360_scrolled.png"
   }
  ],
  "related": "Related findings: SHA-30 · Reference has the same problem (not beta-specific); keyboard on phones is rare, but this also affects switch/VoiceOver users.",
  "refs": [
   "SHA-30"
  ]
 },
 {
  "id": "BUG-CA-09",
  "sev": "minor",
  "pri": "P3",
  "module": "Plan (/plan) phone",
  "repro": "Always (3/3: matrix iPhone 15, matrix Chrome 360, verify run)",
  "title": "[Plan] On phones the floating menu button and crew bubble cover calendar day cells",
  "env": "Safari/WebKit 27.2 iPhone 15 preset; Chrome 158 360x740 mobile; /plan",
  "pre": "Signed in",
  "expected": "Floating controls do not sit on top of tappable day cells (or the page reserves space for them)",
  "actual": "iPhone 15: days 8, 12, 13, 14 are covered at load (elementFromPoint hits the fixed FAB / \"Ask the Clipper\" bubble); Chrome 360: days 15, 19, 20 covered. Scrolling moves them clear, so it is a nuisance rather than a blocker.",
  "steps": [
   "Open /plan on a phone",
   "Look at the bottom calendar row in view"
  ],
  "logs": "covered: [\"8:fixed overlay\",\"12:fixed overlay\",\"13:fixed overlay\",\"14:fixed overlay\"]",
  "shots": [
   {
    "img": "images/img0281.webp",
    "caption": "ev_iphone_plan_fab.png"
   },
   {
    "img": "images/img0282.webp",
    "caption": "_plan.jpg"
   },
   {
    "img": "images/img0283.webp",
    "caption": "_plan.jpg"
   }
  ],
  "related": "Related findings: SHA-30 PUB-21 · Same floating-button placement issue as SHA-30, logged for the specific Plan impact.",
  "refs": [
   "SHA-30",
   "PUB-21"
  ]
 },
 {
  "id": "BUG-NF-05",
  "sev": "minor",
  "pri": "P3",
  "module": "Platform / Cookies",
  "repro": "Always (2/2: signed-in storage state and fresh signed-out context)",
  "title": "[Privacy] Device-id cookie cr_did is set without the Secure flag",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)",
  "pre": "Any visit",
  "expected": "All cookies Secure (site is HTTPS-only); persistent identifiers ideally HttpOnly and set server-side.",
  "actual": "cr_did: Secure=false, HttpOnly=false (written by JS), SameSite=Lax, ~1-year expiry. Session cookie __Host-cr_session is correct (Secure, HttpOnly, Lax).",
  "steps": [
   "Open https://app-beta.cloudreel.com/login",
   "DevTools > Application > Cookies"
  ],
  "logs": "cookie cr_did domain=app-beta.cloudreel.com secure=false httpOnly=false sameSite=Lax",
  "shots": [],
  "related": "",
  "refs": []
 },
 {
  "id": "BUG-NF-06",
  "sev": "minor",
  "pri": "P3",
  "module": "Shell / Session",
  "repro": "Always (2/2)",
  "title": "[Privacy] Full user profile + permissions cached in plain sessionStorage and left there after the session cookie is gone",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)",
  "pre": "Signed in",
  "expected": "Keep only what the UI needs client-side; clear cached identity when the session ends.",
  "actual": "cloudreel:session holds user id, name, email, workspace id/name, role, plan and the full permission map in plain JSON (readable by any script on the origin; no CSP).",
  "steps": [
   "Sign-in state, open any app page",
   "DevTools > Application > Session Storage > cloudreel:session",
   "Remove cookies; the key is still present until the tab closes"
  ],
  "logs": "sessionStorage keys: cloudreel:session, cloudreel:plan-prompt-shown, cr:back-stack; localStorage: cloudreel:analytics:queue, cloudreel:analytics:session",
  "shots": [],
  "related": "Related findings: · Email redacted in evidence. Not an exposure by itself; rated minor hygiene.",
  "refs": []
 },
 {
  "id": "BUG-NF-10",
  "sev": "minor",
  "pri": "P3",
  "module": "Shell / Navigation",
  "repro": "Always (10/10: 5 pages x 2 runs)",
  "title": "[Resilience] Losing the connection turns any in-app navigation into Chrome's 'No internet' page - no offline notice",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), context.setOffline(true)",
  "pre": "Signed in, app loaded on Home",
  "expected": "App stays on screen with an 'You're offline - we'll reconnect automatically' notice; navigation retried when back online.",
  "actual": "The whole app is replaced by Chrome's dinosaur page (ERR_INTERNET_DISCONNECTED). Recovery after reconnect works only because the browser auto-reloads.",
  "steps": [
   "Load Home",
   "Go offline (DevTools > Network > Offline)",
   "Click Post / Projects / Studio / Plan / Analytics in the sidebar"
  ],
  "logs": "net::ERR_INTERNET_DISCONNECTED on RSC fetch -> hard navigation",
  "shots": [
   {
    "img": "images/img0284.webp",
    "caption": "res_projects_offline.png"
   },
   {
    "img": "images/img0285.webp",
    "caption": "res_projects_online_again.png"
   }
  ],
  "related": "Related findings: · Not compared on Vercel (mock site).",
  "refs": []
 },
 {
  "id": "BUG-NF-13",
  "sev": "minor",
  "pri": "P3",
  "module": "Public pages / SEO",
  "repro": "Always (2/2)",
  "title": "[SEO] robots.txt, sitemap.xml and /favicon.ico redirect (307) to /login",
  "env": "curl",
  "pre": "Signed out",
  "expected": "robots.txt served (for an app subdomain usually 'Disallow: /' except public pages) and favicon.ico served; auth middleware excludes these paths.",
  "actual": "All three return 307 -> /login. Lighthouse SEO flags 'robots.txt is not valid' (SEO 92 on every public page).",
  "steps": [
   "curl -sI https://app-beta.cloudreel.com/robots.txt",
   "Same for /sitemap.xml and /favicon.ico"
  ],
  "logs": "HTTP/2 307 location: /login",
  "shots": [],
  "related": "Related findings: · Page <link rel=icon> points to /icon.png so the tab icon works; only the conventional /favicon.ico path is broken (bookmarks, some crawlers).",
  "refs": []
 },
 {
  "id": "BUG-NF-15",
  "sev": "minor",
  "pri": "P3",
  "module": "Platform / Build config",
  "repro": "Always (2/2)",
  "title": "[Build] Production build reports appVersion 'dev' in analytics and ships a hardcoded storage-salt fallback",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)",
  "pre": "Signed in",
  "expected": "NEXT_PUBLIC_APP_VERSION set at build so analytics/errors can be tied to a release; storage salt configured per environment.",
  "actual": "Every analytics event carries appVersion:'dev' (verified). Bundle reads NEXT_PUBLIC_STORAGE_SALT at runtime with fallback 'jnya-fallback-salt' (inferred to be in use, since NEXT_PUBLIC vars are not inlined in this chunk).",
  "steps": [
   "Open any page",
   "Read localStorage cloudreel:analytics:queue -> attrs.appVersion",
   "Search the client bundle for NEXT_PUBLIC_STORAGE_SALT"
  ],
  "logs": "\"appVersion\":\"dev\"; n(77836).env.NEXT_PUBLIC_STORAGE_SALT ?? \"jnya-fallback-salt\"",
  "shots": [],
  "related": "Related findings: · Salt is client-side so it is not a secret either way; no API keys/tokens found in 59 JS chunks (searched AKIA, sk_/pk_, AIza, JWT, Slack/GitHub tokens, private keys).",
  "refs": []
 },
 {
  "id": "BUG-NF-16",
  "sev": "minor",
  "pri": "P3",
  "module": "Shell / Plan picker",
  "repro": "Always (2/2 runs)",
  "title": "[Billing] Billing outage surfaces as an unrequested blocking modal ('Billing is temporarily unavailable') over whatever page the user opens",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), billing GETs forced to 500 client-side",
  "pre": "Signed in, free plan, new tab",
  "expected": "If plans can't load, don't auto-open the picker; show the error only when the user clicks Upgrade.",
  "actual": "'Choose your plan' modal opens with 'Billing is temporarily unavailable. Please try again in a moment. Try again' on every page tested (5/5).",
  "steps": [
   "Route /api/gateway/subscription/** and /api/gateway/billing/** to 500",
   "Open /post, /projects or /analytics in a new tab"
  ],
  "logs": "",
  "shots": [
   {
    "img": "images/img0286.webp",
    "caption": "billing_500_modal.png"
   }
  ],
  "related": "Related findings: · Wording itself is good; reproduced in resilience runs 1 (5/5 pages) and in billing_500_modal.png.",
  "refs": []
 },
 {
  "id": "BUG-FUNC-17",
  "sev": "trivial",
  "pri": "P3",
  "module": "Auth / Pricing / Legal",
  "repro": "Always (2/2 runs, every public page)",
  "title": "[Public pages] Signed-out pages log a 401 console error for /api/auth/me",
  "env": "Chrome 158, 1440x900, signed-out fresh context — /login, /signup, /forgot-password, /pricing, /terms, /privacy, /reset-password",
  "pre": "Signed out",
  "expected": "Session probe handled silently (no console error).",
  "actual": "Console \"Failed to load resource: the server responded with a status of 401 ()\".",
  "steps": [
   "Open /pricing (or any public page) signed out",
   "Open DevTools console"
  ],
  "logs": "GET /api/auth/me -> 401 {\"error\":{\"code\":\"unauthenticated\",\"message\":\"sign in to continue\"}}",
  "shots": [
   {
    "img": "images/img0053.webp",
    "caption": "auth_pricing.png"
   }
  ],
  "related": "Related findings: X-10 SHA-10",
  "refs": [
   "X-10",
   "SHA-10"
  ]
 },
 {
  "id": "BUG-FUNC-18",
  "sev": "trivial",
  "pri": "P3",
  "module": "App shell",
  "repro": "Always (2/2)",
  "title": "[Command palette] Footer shows \"Ctrl K\" on macOS",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — any page, Cmd+K",
  "pre": "Signed in on macOS (navigator.platform MacIntel)",
  "expected": "\"⌘K\" on Mac.",
  "actual": "\"Ctrl K\".",
  "steps": [
   "Press Cmd+K",
   "Read the footer hint"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0287.webp",
    "caption": "shell_cmdk_r1.png"
   },
   {
    "img": "images/img0288.webp",
    "caption": "shell_cmdk_r2.png"
   }
  ],
  "related": "Related findings: SHA-17",
  "refs": [
   "SHA-17"
  ]
 },
 {
  "id": "BUG-FUNC-24",
  "sev": "trivial",
  "pri": "P3",
  "module": "Forgot / reset password",
  "repro": "Always (2/2)",
  "title": "[Reset password] Invalid/expired token is not checked until submit",
  "env": "Chrome 158, 1440x900, signed-out fresh context — /reset-password?token=not-a-real-token",
  "pre": "Signed out",
  "expected": "\"This link is invalid or expired\" with Request a new link, before the user types a password.",
  "actual": "Full \"Choose a new password\" form is shown for a made-up token.",
  "steps": [
   "Open /reset-password?token=not-a-real-token"
  ],
  "logs": "No token-check request on load.",
  "shots": [
   {
    "img": "images/img0289.webp",
    "caption": "auth_reset_faketoken.png"
   }
  ],
  "related": "Related findings: · New. Submit not run.",
  "refs": []
 },
 {
  "id": "BUG-FUNC-27",
  "sev": "trivial",
  "pri": "P3",
  "module": "Studio / Simulcast",
  "repro": "Always (2/2)",
  "title": "[Studio/Simulcast] Selected tab/filter and view mode are lost on refresh and Back",
  "env": "Chrome 158.0.8127.38 (Playwright, headless), macOS 26.6.2, 1440x900; Signed in (beta_state.json), Pavan's workspace, Free plan; https://app-beta.cloudreel.com — /studio, /simulcast",
  "pre": "Signed in",
  "expected": "Selection kept in URL like Post (?tab=), Plan (?view=), Settings (#…), Encoders (#…).",
  "actual": "Studio returns to Recordings/Grid; Simulcast returns to All Simulcasts; URL never changes.",
  "steps": [
   "/studio: click Live (or List view), reload",
   "/simulcast: click Scheduled, reload"
  ],
  "logs": "n/a",
  "shots": [
   {
    "img": "images/img0290.webp",
    "caption": "shell_nav_studio_r1.png"
   }
  ],
  "related": "Related findings: · New. Inconsistency between modules.",
  "refs": []
 },
 {
  "id": "BUG-CA-10",
  "sev": "trivial",
  "pri": "P3",
  "module": "Encoders (/encoders) phone",
  "repro": "Always (4/4 phone configs)",
  "title": "[Encoders] On phones the stat card captions wrap one word per line",
  "env": "All phone configs (Chrome 390/360, Safari iPhone 15, Firefox 390); /encoders",
  "pre": "Signed in",
  "expected": "Stat cards stack one per row or the caption gets enough width",
  "actual": "In the 2-column grid the icon takes most of each card, so \"phones of members who can broadcast here\" breaks into 7 one-word lines and the cards become tall and uneven.",
  "steps": [
   "Open /encoders at 390 px or narrower"
  ],
  "logs": "",
  "shots": [
   {
    "img": "images/img0291.webp",
    "caption": "_encoders.jpg"
   },
   {
    "img": "images/img0292.webp",
    "caption": "_encoders.jpg"
   }
  ],
  "related": "Related findings: · Cosmetic; identical in all engines.",
  "refs": []
 },
 {
  "id": "BUG-NF-14",
  "sev": "trivial",
  "pri": "P3",
  "module": "Public pages / SEO",
  "repro": "Always (2/2)",
  "title": "[SEO] Public pages share one generic description, login/signup/forgot-password titles are just 'CloudReel', no OG/Twitter tags",
  "env": "Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan), signed out",
  "pre": "Signed out",
  "expected": "Per-page title ('Sign in · CloudReel', 'Create account · CloudReel'), per-page description (reference gives Pricing/Terms/Privacy their own), og:title/og:image so shared /pricing or /signup links render a card.",
  "actual": "Description 'CloudReel — video clipping and publishing platform.' on all 6 pages; title 'CloudReel' on /login, /signup, /forgot-password; no canonical, no og:*, no twitter:card, no apple-touch-icon. lang='en' and viewport are correct.",
  "steps": [
   "Open /login, /signup, /pricing, /terms, /privacy",
   "Inspect <title>, meta description, og:*"
  ],
  "logs": "",
  "shots": [],
  "related": "Related findings: · Reference also lacks OG/canonical.",
  "refs": []
 }
];
