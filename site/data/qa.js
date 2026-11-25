window.DATA=window.DATA||{};window.DATA["qa"]={
 "intro": "A senior-QA pass on the beta: formal test cases, negative and edge-case testing, sessions and navigation, cross-browser and device coverage, accessibility (WCAG 2.1 AA), security hygiene, performance and error handling. Part 1 above compares the beta with the reference; this part says whether the beta works, how reliably, and what blocks a wider release.",
 "summary": {
  "verdict": "Recommendation: No-Go for a wider or public release. OK to continue the closed beta while the 8 P1 defects are fixed.",
  "text": "108 of 199 executed test cases pass (54%). 52 defects are open: 1 critical and 16 major. Analytics doesn't work, Posts can't show its numbers and Plan can't load live events (backend errors). Sign-up asks people to accept placeholder legal pages. The assistant writes to the workspace when its Personalize dialog is only closed. A plan checkout pops up on every new tab, and most pages can be framed by other sites. Navigation, sign-in protection, search, cross-browser layout and speed are solid. Re-test after the P1 fixes and again before inviting outside users.",
  "kpis": [
   {
    "value": "216",
    "label": "Test cases"
   },
   {
    "value": "199",
    "label": "Executed"
   },
   {
    "value": "108",
    "label": "Passed"
   },
   {
    "value": "91",
    "label": "Failed"
   },
   {
    "value": "3",
    "label": "Blocked"
   },
   {
    "value": "14",
    "label": "Not run (write-protected)"
   },
   {
    "value": "54%",
    "label": "Pass rate (executed)"
   },
   {
    "value": "52",
    "label": "Defects logged"
   }
  ],
  "bySeverity": {
   "head": [
    "Severity \\ Priority",
    "P1",
    "P2",
    "P3",
    "Total"
   ],
   "rows": [
    [
     "blocker",
     "–",
     "–",
     "–",
     "0"
    ],
    [
     "critical",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "major",
     "7",
     "9",
     "–",
     "16"
    ],
    [
     "minor",
     "–",
     "11",
     "18",
     "29"
    ],
    [
     "trivial",
     "–",
     "–",
     "6",
     "6"
    ]
   ]
  },
  "byModule": {
   "head": [
    "Module",
    "Blocker",
    "Critical",
    "Major",
    "Minor",
    "Trivial",
    "Total"
   ],
   "rows": [
    [
     "Analytics",
     "–",
     "1",
     "–",
     "–",
     "–",
     "1"
    ],
    [
     "App shell",
     "–",
     "–",
     "2",
     "1",
     "1",
     "4"
    ],
    [
     "Platform / HTTP headers",
     "–",
     "–",
     "2",
     "1",
     "–",
     "3"
    ],
    [
     "Post",
     "–",
     "–",
     "2",
     "2",
     "–",
     "4"
    ],
    [
     "Assistant (Orbit)",
     "–",
     "–",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "Assistant (Orbit) / Brand Kits",
     "–",
     "–",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "Plan",
     "–",
     "–",
     "1",
     "1",
     "–",
     "2"
    ],
    [
     "Post / Plan",
     "–",
     "–",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "Posts (/post)",
     "–",
     "–",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "Public pages / Analytics",
     "–",
     "–",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "Sign-up / Legal",
     "–",
     "–",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "Studio",
     "–",
     "–",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "Studio > Schedule",
     "–",
     "–",
     "1",
     "–",
     "–",
     "1"
    ],
    [
     "Workflows",
     "–",
     "–",
     "1",
     "1",
     "–",
     "2"
    ],
    [
     "App shell (cross-module)",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "App shell / mobile drawer",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "App shell / sidebar",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Auth / Pricing / Legal",
     "–",
     "–",
     "–",
     "–",
     "1",
     "1"
    ],
    [
     "Auth / onboarding",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Cross-cutting (design tokens)",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Encoders",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Encoders (/encoders) phone",
     "–",
     "–",
     "–",
     "–",
     "1",
     "1"
    ],
    [
     "Forgot / reset password",
     "–",
     "–",
     "–",
     "–",
     "1",
     "1"
    ],
    [
     "Plan (/plan) phone",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Platform / Build config",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Platform / Cookies",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Post / Settings",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Posts / Analytics / Plan / Projects",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Project detail",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Project detail / Simulcast",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Projects",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Projects (/projects) filters",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Projects, Simulcast broadcast picker",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Public pages / SEO",
     "–",
     "–",
     "–",
     "1",
     "1",
     "2"
    ],
    [
     "Settings",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Shell / Navigation",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Shell / Plan picker",
     "–",
     "–",
     "–",
     "2",
     "–",
     "2"
    ],
    [
     "Shell / Session",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Sign-up",
     "–",
     "–",
     "–",
     "1",
     "–",
     "1"
    ],
    [
     "Studio / Simulcast",
     "–",
     "–",
     "–",
     "–",
     "1",
     "1"
    ]
   ]
  },
  "exit": {
   "head": [
    "Criterion",
    "Status",
    "Note"
   ],
   "rows": [
    [
     "No open blocker or critical defects",
     "fail",
     "1 critical open: Analytics never loads (BUG-FUNC-01)."
    ],
    [
     "All P1 defects fixed and re-tested",
     "fail",
     "8 P1 open: Analytics, Posts and Plan backend errors, auto-opening plan modal, Personalize PATCH on close, placeholder legal pages, Posts buttons at tablet width, framing protection."
    ],
    [
     "Pass rate of executed test cases ≥ 90%",
     "fail",
     "54% (108 pass / 91 fail)."
    ],
    [
     "Core journeys complete end to end (sign up, create clips, go live, post)",
     "blocked",
     "Final write steps weren't run on the shared beta workspace; needs a dedicated QA workspace with test social accounts."
    ],
    [
     "No 5xx or console errors on core pages",
     "fail",
     "500s on Analytics, Posts, Post metrics; Plan events unreadable; Encoders admin 404."
    ],
    [
     "Works in Chrome, Safari and Firefox at desktop, tablet and phone",
     "pass",
     "132 of 140 cells pass; 1 fail (Posts at 720–799 px), 7 minor."
    ],
    [
     "No critical WCAG 2.1 AA issues; serious issues triaged",
     "fail",
     "Beta: 0 critical on scans but 54 serious (contrast, nested controls); Schedule dialog close button unnamed; no skip link."
    ],
    [
     "Security baseline: HSTS, frame protection, secure cookies, auth on every route",
     "fail",
     "Auth and session cookie pass; HSTS and frame protection missing on most pages."
    ],
    [
     "Core pages meet performance budget (LCP ≤ 2.5 s, CLS ≤ 0.1)",
     "fail",
     "LCP fine except Plan (~3.1 s); CLS 0.11–0.17 on 6 of 7 pages (auto-opening plan modal)."
    ],
    [
     "Legal and consent ready for outside users",
     "fail",
     "Terms placeholder, Privacy draft, no consent notice before analytics."
    ]
   ]
  }
 },
 "plan": {
  "panels": [
   {
    "title": "Scope",
    "items": [
     "Every beta module in the sidebar, plus sign-in, sign-up, password reset, pricing and legal pages",
     "Functional, negative, boundary, session and navigation behaviour",
     "Chrome, Safari (WebKit) and Firefox at 1440×900, 1280×720, 768×1024, 390×844 and 360×740",
     "Accessibility against WCAG 2.1 AA (axe-core + keyboard-only)",
     "Security and privacy hygiene (passive), performance (Lighthouse + in-browser metrics), error handling and offline behaviour",
     "Comparison against the reference frontend as the expected behaviour (Part 1)"
    ]
   },
   {
    "title": "Out of scope",
    "items": [
     "Steps that write data on the shared beta workspace: publishing, going live, uploads, AI jobs, checkout, invites, account changes (marked Not run)",
     "Backend correctness of saved data and real social publishing",
     "Load / stress testing and penetration testing",
     "Native mobile apps"
    ]
   },
   {
    "title": "Approach",
    "items": [
     "Test cases derived from the reference behaviour and the product's own copy; each executed on the beta and recorded Pass / Fail / Blocked / Not run",
     "Every defect reproduced at least twice before logging, with environment, steps, expected vs actual, logs and screenshots",
     "A network guard blocked every non-GET request during testing, so nothing was written by accident",
     "Failures (500, slow, offline, lost session) simulated only inside the test browser"
    ]
   },
   {
    "title": "Environments",
    "items": [
     "Beta: app-beta.cloudreel.com, signed in as “Pavan's workspace” (Free plan) via Google; signed-out contexts for public and redirect tests",
     "Reference: cloud-reel-dashboard.vercel.app (mock data)",
     "Chrome 158, WebKit 27.2 (Safari engine), Firefox 159 on macOS; iPhone 15, Pixel 7 and iPad presets",
     "Test date: 24 Nov 2026"
    ]
   }
  ],
  "suites": [
   {
    "title": "Functional, negative & session",
    "text": "Formal functional, negative/boundary and session/navigation testing of every beta sidebar module plus sign-in, sign-up, forgot/reset password and pricing, executed with Playwright on Chrome 158 (desktop 1440x900, phone 390x844) under a strict read-only network guard. 134 test cases: 64 pass, 55 fail, 2 blocked, 13 not-run (steps that would write data). Navigation, back/forward, deep-link redirects (?next preserved, no open redirect), search handling of special/long input and most dialog Esc/double-click behaviour are solid. The headline failures are backend: Analytics, Post numbers and Plan events are broken by 500s and a double-encoded JSON response; and two client-side writes happen without user intent (Personalize dismissal PATCHes the brand board, the assistant opens a voice session on load). 28 defects logged (1 critical, 10 major, 13 minor, 4 trivial); 18 earlier \"bug\" findings re-confirmed, 2 could not be re-run under the rules.",
    "env": "Chrome 158.0.8127.38 via Playwright (headless, channel chrome) on macOS 26.6.2 (Darwin 25.6.0). Viewports 1440x900 desktop and 390x844 touch (phone). Executed 2026-11-24 against https://app-beta.cloudreel.com, signed in via beta_state.json (Google account, \"Pavan's workspace\", Free plan, 1,000 credits) and in fresh signed-out contexts. Each suite run twice (r1/r2). Reference: https://cloud-reel-dashboard.vercel.app + source."
   },
   {
    "title": "Cross-browser, devices & accessibility",
    "text": "Ran a 14-page x 10-config compatibility matrix on the beta (Chrome, WebKit/Safari incl. iPhone 15 and iPad presets, Firefox; 1440 down to 360 px) with automated overflow/overlap/console probes plus a review of every screenshot, and compared six pages against the reference in four configs. The beta is solid across engines: no horizontal scroll, no font/icon gaps, and no browser-specific console errors (only the server 404/500s that hit every browser). The one real compatibility bug is beta-only: at 720-799 px (tablet portrait or 200% zoom) the Posts \"New post\" / \"Manage accounts\" buttons can't be clicked. axe found 0 critical and 54 serious nodes on 15 pages, mostly grey-text contrast (fewer than the reference). Keyboard testing found no skip link, an unnamed close button and lost focus on the Studio Schedule dialog, a sort menu without arrow-key support, and a phone drawer that lets focus escape. Reduced motion is respected.",
    "env": "macOS (Darwin 25.6), headless Playwright. Chrome 158.0.8127.38 (stable channel), WebKit 27.2 (Playwright Safari engine), Firefox 159.0. Viewports: 1440x900, 1280x720, 768x1024, 390x844 (mobile+touch), 360x740 (mobile+touch, Pixel 7 UA), iPhone 15 preset (393x659 @3x), iPad (gen 7) preset (810x1080). Run 2026-11-24. Beta https://app-beta.cloudreel.com signed in as the shared QA session (Pavan's workspace, Free plan, 1,000 credits) via beta_state.json; /login and /signup signed out. Reference https://cloud-reel-dashboard.vercel.app (mock). axe-core 4.x tags wcag2a/aa + wcag21a/aa, desktop Chrome 1440x900. The auto-opening \"Choose your plan\" modal (SHA-01) was closed with its Close button before each measurement."
   },
   {
    "title": "Security, performance & resilience",
    "text": "Passive security/privacy review (headers, cookies, storage, bundles, auth gating), Lighthouse on 3 public pages x 2 presets for beta and reference, Playwright Web-Vitals on 7 signed-in pages (cold + repeat) vs the Vercel equivalents, client-side failure simulation (500 / 8 s delay / offline / session loss) on 5 pages, and SEO basics. Auth gating is solid: all 19 app routes redirect to /login, app APIs return 401 without the session, the session cookie is __Host-/Secure/HttpOnly, no secrets or source maps ship to the client, and no third-party trackers load. Hardening is thin: clickjacking protection is only on 4 routes, no HSTS/CSP/nosniff/Referrer/Permissions-Policy, and first-party analytics plus a 1-year device cookie start with no consent notice. Performance is good - beta beats the reference almost everywhere (Lighthouse 99-100, LCP < 1.4 s) except Plan (LCP ~3.1 s) and CLS > 0.1 caused by the auto-opening plan picker. Error handling is mostly decent (loading states, Try again), but raw 'internal error' text leaks into banners, Studio shows 'No recordings yet' when the load failed, and going offline drops users onto Chrome's dinosaur page.",
    "env": "macOS 26.6.2; Google Chrome 158.0.8127.38 via Playwright (headless) at 1440x900; Lighthouse 12.2.1 (headless Chrome, desktop + mobile presets); curl for headers. Beta https://app-beta.cloudreel.com signed in via beta_state.json (workspace owner, free plan); reference https://cloud-reel-dashboard.vercel.app (mock, cookie notice pre-accepted for runtime perf). Tested 2026-11-24. No logins, no writes; failures simulated only in the test browser."
   }
  ]
 },
 "compat": {
  "lede": "Beta pages in Chrome, Safari (WebKit) and Firefox at desktop, short-laptop, tablet and phone sizes. Hover a cell for its note.",
  "head": [
   "Page",
   "Chrome 1440",
   "Chrome 1280x720",
   "Chrome 768",
   "Chrome 390",
   "Chrome 360 Android",
   "Safari 1440",
   "Safari iPad",
   "Safari iPhone 15",
   "Firefox 1440",
   "Firefox 390"
  ],
  "rows": [
   {
    "page": "/",
    "cells": [
     {
      "res": "pass",
      "note": "pass (Plan/Simulcast/Analytics sit below the fold of the sidebar; the nav list scrolls (same as reference))"
     },
     {
      "res": "pass",
      "note": "pass (Plan/Simulcast/Analytics sit below the fold of the sidebar; the nav list scrolls (same as reference))"
     },
     {
      "res": "pass",
      "note": "pass (collapsed rail; \"Expand sidebar\" works)"
     },
     {
      "res": "pass",
      "note": "pass (drawer opens via \"Open menu\", Esc closes; Simulcast/Analytics need a scroll inside the drawer (reference same))"
     },
     {
      "res": "pass",
      "note": "pass (drawer opens via \"Open menu\", Esc closes; Simulcast/Analytics need a scroll inside the drawer (reference same))"
     },
     {
      "res": "pass",
      "note": "pass (Plan/Simulcast/Analytics sit below the fold of the sidebar; the nav list scrolls (same as reference))"
     },
     {
      "res": "pass",
      "note": "pass (collapsed rail; \"Expand sidebar\" works)"
     },
     {
      "res": "pass",
      "note": "pass (drawer opens via \"Open menu\", Esc closes; Simulcast/Analytics need a scroll inside the drawer (reference same))"
     },
     {
      "res": "pass",
      "note": "pass (Plan/Simulcast/Analytics sit below the fold of the sidebar; the nav list scrolls (same as reference))"
     },
     {
      "res": "pass",
      "note": "pass (drawer opens via \"Open menu\", Esc closes; Simulcast/Analytics need a scroll inside the drawer (reference same))"
     }
    ]
   },
   {
    "page": "/studio",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   },
   {
    "page": "/encoders",
    "cells": [
     {
      "res": "pass",
      "note": "pass (shared 404 on encoder/v1/admin/relays in every browser (LIVE-08))"
     },
     {
      "res": "pass",
      "note": "pass (shared 404 on encoder/v1/admin/relays in every browser (LIVE-08))"
     },
     {
      "res": "pass",
      "note": "pass (shared 404 on encoder/v1/admin/relays in every browser (LIVE-08))"
     },
     {
      "res": "minor",
      "note": "minor: KPI card captions wrap one word per line (\"phones / of / members / who / can / broadcast / here\") (BUG-CA-10); qa/compat-a11y/shots/beta_Chrome_390/_encoders.jpg"
     },
     {
      "res": "minor",
      "note": "minor: KPI card captions wrap one word per line (\"phones / of / members / who / can / broadcast / here\") (BUG-CA-10); qa/compat-a11y/shots/beta_Chrome_360_Android/_encoders.jpg"
     },
     {
      "res": "pass",
      "note": "pass (shared 404 on encoder/v1/admin/relays in every browser (LIVE-08))"
     },
     {
      "res": "pass",
      "note": "pass (shared 404 on encoder/v1/admin/relays in every browser (LIVE-08))"
     },
     {
      "res": "minor",
      "note": "minor: KPI card captions wrap one word per line (\"phones / of / members / who / can / broadcast / here\") (BUG-CA-10); qa/compat-a11y/shots/beta_Safari_iPhone_15/_encoders.jpg"
     },
     {
      "res": "pass",
      "note": "pass (shared 404 on encoder/v1/admin/relays in every browser (LIVE-08))"
     },
     {
      "res": "minor",
      "note": "minor: KPI card captions wrap one word per line (\"phones / of / members / who / can / broadcast / here\") (BUG-CA-10); qa/compat-a11y/shots/beta_Firefox_390/_encoders.jpg"
     }
    ]
   },
   {
    "page": "/projects",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   },
   {
    "page": "/projects?workflow=create-clips",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   },
   {
    "page": "/post",
    "cells": [
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     },
     {
      "res": "fail",
      "note": "fail: \"Manage accounts\" / \"New post\" header buttons unclickable, covered by the tab-row container (BUG-CA-01); qa/compat-a11y/shots/beta_Chrome_768/_post.jpg"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/posts + post-metrics in every browser (PUB-01))"
     }
    ]
   },
   {
    "page": "/plan",
    "cells": [
     {
      "res": "pass",
      "note": "pass (shared API 500 on post-metrics, \"Studio events could not be loaded\" banner in every browser (PUB-17))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on post-metrics, \"Studio events could not be loaded\" banner in every browser (PUB-17))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on post-metrics, \"Studio events could not be loaded\" banner in every browser (PUB-17))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on post-metrics, \"Studio events could not be loaded\" banner in every browser (PUB-17))"
     },
     {
      "res": "minor",
      "note": "minor: floating menu button + crew bubble cover calendar day cells (BUG-CA-09); qa/compat-a11y/shots/beta_Chrome_360_Android/_plan.jpg"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on post-metrics, \"Studio events could not be loaded\" banner in every browser (PUB-17))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on post-metrics, \"Studio events could not be loaded\" banner in every browser (PUB-17))"
     },
     {
      "res": "minor",
      "note": "minor: floating menu button + crew bubble cover calendar day cells (BUG-CA-09); qa/compat-a11y/shots/beta_Safari_iPhone_15/_plan.jpg"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on post-metrics, \"Studio events could not be loaded\" banner in every browser (PUB-17))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on post-metrics, \"Studio events could not be loaded\" banner in every browser (PUB-17))"
     }
    ]
   },
   {
    "page": "/simulcast",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   },
   {
    "page": "/analytics",
    "cells": [
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     },
     {
      "res": "pass",
      "note": "pass (shared API 500 on social/overview, page is an error state in every browser (PUB-23))"
     }
    ]
   },
   {
    "page": "/settings",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   },
   {
    "page": "/co-creator",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "minor",
      "note": "minor: 13.2 s to settle, 502 on /api/gateway/subscription/v1/billing/plans (seen once, not reproduced in 9 other configs); qa/compat-a11y/shots/beta_Chrome_390/_co_creator.jpg"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   },
   {
    "page": "/login",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   },
   {
    "page": "/signup",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   },
   {
    "page": "/pricing",
    "cells": [
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     },
     {
      "res": "pass",
      "note": "pass"
     }
    ]
   }
  ]
 },
 "a11y": {
  "lede": "Automated axe-core scans on both sites, plus keyboard-only walkthroughs on the beta.",
  "scans": {
   "head": [
    "Site",
    "Page",
    "Critical",
    "Serious",
    "Moderate",
    "Minor",
    "Top rules"
   ],
   "rows": [
    [
     "beta",
     "/",
     "0",
     "0",
     "0",
     "0",
     ""
    ],
    [
     "beta",
     "/studio",
     "0",
     "4",
     "0",
     "0",
     "color-contrast (4)"
    ],
    [
     "beta",
     "/encoders",
     "0",
     "0",
     "0",
     "0",
     ""
    ],
    [
     "beta",
     "/projects",
     "0",
     "6",
     "0",
     "0",
     "nested-interactive (4), color-contrast (2)"
    ],
    [
     "beta",
     "/projects?workflow=create-clips",
     "0",
     "1",
     "0",
     "0",
     "color-contrast (1)"
    ],
    [
     "beta",
     "/post",
     "0",
     "8",
     "0",
     "0",
     "color-contrast (8)"
    ],
    [
     "beta",
     "/plan",
     "0",
     "24",
     "0",
     "0",
     "color-contrast (24)"
    ],
    [
     "beta",
     "/simulcast",
     "0",
     "2",
     "0",
     "0",
     "color-contrast (2)"
    ],
    [
     "beta",
     "/analytics",
     "0",
     "2",
     "0",
     "0",
     "color-contrast (2)"
    ],
    [
     "beta",
     "/settings",
     "0",
     "2",
     "0",
     "0",
     "color-contrast (2)"
    ],
    [
     "beta",
     "/co-creator",
     "0",
     "1",
     "0",
     "0",
     "color-contrast (1)"
    ],
    [
     "beta",
     "/brand-kits",
     "0",
     "0",
     "0",
     "0",
     ""
    ],
    [
     "beta",
     "/pricing",
     "0",
     "0",
     "0",
     "0",
     ""
    ],
    [
     "beta",
     "/login",
     "0",
     "2",
     "0",
     "0",
     "color-contrast (2)"
    ],
    [
     "beta",
     "/signup",
     "0",
     "2",
     "0",
     "0",
     "color-contrast (2)"
    ],
    [
     "vercel",
     "/",
     "0",
     "1",
     "0",
     "0",
     "nested-interactive (1)"
    ],
    [
     "vercel",
     "/recordings",
     "0",
     "14",
     "0",
     "0",
     "color-contrast (14)"
    ],
    [
     "vercel",
     "/encoders",
     "0",
     "0",
     "0",
     "0",
     ""
    ],
    [
     "vercel",
     "/video-library",
     "0",
     "8",
     "0",
     "0",
     "nested-interactive (6), color-contrast (2)"
    ],
    [
     "vercel",
     "/workflow?type=create-clips",
     "0",
     "1",
     "0",
     "0",
     "color-contrast (1)"
    ],
    [
     "vercel",
     "/publishing-hub",
     "0",
     "3",
     "0",
     "0",
     "color-contrast (3)"
    ],
    [
     "vercel",
     "/schedule",
     "0",
     "35",
     "0",
     "0",
     "color-contrast (35)"
    ],
    [
     "vercel",
     "/channels",
     "0",
     "1",
     "0",
     "0",
     "color-contrast (1)"
    ],
    [
     "vercel",
     "/analytics",
     "4",
     "2",
     "0",
     "0",
     "aria-required-parent (4), color-contrast (2)"
    ],
    [
     "vercel",
     "/settings",
     "0",
     "2",
     "0",
     "0",
     "color-contrast (2)"
    ],
    [
     "vercel",
     "/co-creator",
     "0",
     "0",
     "0",
     "0",
     ""
    ],
    [
     "vercel",
     "/brand-kits",
     "0",
     "0",
     "0",
     "0",
     ""
    ],
    [
     "vercel",
     "/pricing",
     "0",
     "0",
     "0",
     "0",
     ""
    ],
    [
     "vercel",
     "/login",
     "0",
     "1",
     "0",
     "0",
     "nested-interactive (1)"
    ],
    [
     "vercel",
     "/signup",
     "0",
     "2",
     "0",
     "0",
     "color-contrast (2)"
    ]
   ]
  },
  "keyboard": {
   "head": [
    "Keyboard flow",
    "Result",
    "Notes"
   ],
   "rows": [
    [
     "Skip link (first Tab on any page)",
     "fail",
     "No skip link on beta; first Tab lands on sidebar \"Notifications\". The first main-area control is Tab stop 22 on /projects (search box) and 28 on Home (\"Yes, find the clips\"). Reference has \"Skip to content\" as the first Tab stop. 2/2 runs. BUG-CA-02"
    ],
    [
     "Sidebar navigation by keyboard (Chrome 1440)",
     "pass",
     "Tab order is top-to-bottom through workspace switcher, Getting started, all nav links, Settings, Upgrade, then header and main. Every stop showed a visible focus outline/ring. Enter on \"Projects\" (reached in 25 Tabs) navigated to /projects. Lower links (Analytics) scroll into view inside the sidebar when focused and are not covered by the sticky footer. Landmarks: 1 main, 1 nav, 1 header, lang=\"en\"."
    ],
    [
     "Studio > Schedule dialog: open, tab, Esc",
     "fail",
     "Opens with Enter; role=\"dialog\" but no aria-modal; initial focus goes to the close (X) button which has NO accessible name (axe button-name, critical). Tab stays inside the dialog over 25 presses (trap OK). Esc closes. Focus is NOT returned to the \"Schedule\" trigger, it drops to <body> (2/2 runs). BUG-CA-03, BUG-CA-04. Nothing was scheduled."
    ],
    [
     "Simulcast > Broadcast a video dialog: open, tab, Esc",
     "pass",
     "role=\"dialog\" aria-modal=\"true\", initial focus on \"Close\", Tab cycles inside (Search > videos > Cancel > Close), Esc closes, focus returns to \"Broadcast a video\" (2/2). axe inside dialog: nested-interactive (4) + color-contrast (5). Nothing broadcast."
    ],
    [
     "\"Choose your plan\" auto-modal by keyboard",
     "pass",
     "Keyboard-wise OK: aria-modal dialog, focus starts in the dialog, Tab cycles Monthly > Annually > Close > Get Lite/Essential/Growth > promo code, Esc closes. (The modal appearing uninvited is already reported as SHA-01.)"
    ],
    [
     "Projects search via keyboard",
     "pass",
     "Search input is Tab stop 22 (after sidebar), has an accessible name, filtering works as you type (\"Nothing matches that search\" empty state for \"zzqa\"), Esc clears the field. Focus indicator on the search box is weak (border darkens from light grey to mid grey only, no violet ring like other controls)."
    ],
    [
     "Projects filters (Newest sort menu) via keyboard",
     "fail",
     "Enter opens a role=\"menu\" with role=\"menuitem\" items, but focus stays on the trigger and ArrowDown does nothing; Tab is needed to enter the menu. Esc closes it, but after tabbing into the menu Esc drops focus to <body> instead of the \"Newest\" trigger (2/2). The other filter chips (All media, Source, All duration, Favorites, Archived, Bin) are reachable by Tab in visual order. BUG-CA-05"
    ],
    [
     "Sign-in form by keyboard (signed out)",
     "pass",
     "Order: Continue with Google > Email > \"Forgot password?\" > Password > Show password > Sign in > Sign up > footer links. Inputs have <label>s, autocomplete=email/current-password, required. Enter on an empty form shows native \"Please fill out this field.\" and sends no auth request (only the /api/events analytics beacon). Minor: \"Forgot password?\" sits between Email and Password in Tab order. No credentials were submitted."
    ],
    [
     "Phone nav drawer by keyboard (Chrome 390)",
     "fail",
     "Enter on \"Open menu\" sets aria-expanded=true and Tab moves through the drawer items, but the drawer is not a dialog and focus is not contained: after \"Upgrade\" Tab continues to Search/Upgrade/Notifications and Home cards behind the scrim (focus ring visible on a hidden control). Same on the reference. Esc closes the drawer but leaves focus on page content, not on \"Open menu\". 2/2. BUG-CA-08"
    ],
    [
     "200% zoom (1440x900 -> 720x450 CSS px; 1280x720 -> 640x360)",
     "fail",
     "/projects and /login reflow with no horizontal scroll at both sizes. /post at 720 px: \"Manage accounts\", \"New post\", \"Manage social media accounts\" are covered and unclickable (same root cause as BUG-CA-01). At 640x360 the floating crew bubble covers part of the content, and only a few rail icons fit without scrolling."
    ],
    [
     "prefers-reduced-motion",
     "pass",
     "With reduce: 0 running animations on /, /co-creator, /studio (vs 3 infinite \"bounce\", 4 infinite \"cr-orb-blink\", 2 \"ping\"/\"pulse\" without it). Beta ships 2-6 prefers-reduced-motion media rules per page. Same as reference."
    ]
   ]
  }
 },
 "nonfunctional": {
  "lede": "Passive security checks only (headers, cookies, what the app itself exposes); failures were simulated inside the test browser, never against the server.",
  "tables": [
   {
    "title": "Security headers",
    "head": [
     "URL",
     "Header",
     "Value",
     "Verdict"
    ],
    "rows": [
     [
      "https://app-beta.cloudreel.com/ (signed in)",
      "content-security-policy",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/ (signed in)",
      "x-frame-options",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/post (signed in)",
      "content-security-policy",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/post (signed in)",
      "x-frame-options",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/pricing",
      "content-security-policy",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/pricing",
      "x-frame-options",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/terms",
      "content-security-policy",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/terms",
      "x-frame-options",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/privacy",
      "content-security-policy",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/privacy",
      "x-frame-options",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/login",
      "content-security-policy",
      "frame-ancestors 'none' (only directive)",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/login",
      "x-frame-options",
      "DENY",
      "ok"
     ],
     [
      "https://app-beta.cloudreel.com/signup",
      "content-security-policy",
      "frame-ancestors 'none' (only directive)",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/signup",
      "x-frame-options",
      "DENY",
      "ok"
     ],
     [
      "https://app-beta.cloudreel.com/forgot-password",
      "content-security-policy",
      "frame-ancestors 'none' (only directive)",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/forgot-password",
      "x-frame-options",
      "DENY",
      "ok"
     ],
     [
      "https://app-beta.cloudreel.com/settings",
      "content-security-policy",
      "frame-ancestors 'none' (only directive)",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/settings",
      "x-frame-options",
      "DENY",
      "ok"
     ],
     [
      "https://app-beta.cloudreel.com/login",
      "strict-transport-security",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/login",
      "x-content-type-options",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/login",
      "referrer-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/login",
      "permissions-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/ (signed in)",
      "strict-transport-security",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/ (signed in)",
      "x-content-type-options",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/ (signed in)",
      "referrer-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/ (signed in)",
      "permissions-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary",
      "strict-transport-security",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary",
      "x-content-type-options",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary",
      "referrer-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary",
      "permissions-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/api/status",
      "strict-transport-security",
      "MISSING",
      "fail"
     ],
     [
      "https://app-beta.cloudreel.com/api/status",
      "x-content-type-options",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/api/status",
      "referrer-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/api/status",
      "permissions-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/login",
      "x-powered-by",
      "Next.js",
      "warn"
     ],
     [
      "https://app-beta.cloudreel.com/login",
      "server",
      "nginx (no version)",
      "ok"
     ],
     [
      "https://app-beta.cloudreel.com/ (signed in)",
      "cache-control",
      "private, no-cache, no-store, max-age=0, must-revalidate",
      "ok"
     ],
     [
      "https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary",
      "cache-control",
      "no-store",
      "ok"
     ],
     [
      "https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary",
      "access-control-allow-origin",
      "MISSING (no CORS opened)",
      "ok"
     ],
     [
      "https://cloud-reel-dashboard.vercel.app/",
      "strict-transport-security",
      "max-age=63072000; includeSubDomains; preload",
      "ok"
     ],
     [
      "https://cloud-reel-dashboard.vercel.app/",
      "x-frame-options",
      "MISSING",
      "warn"
     ],
     [
      "https://cloud-reel-dashboard.vercel.app/",
      "content-security-policy",
      "MISSING",
      "warn"
     ],
     [
      "https://cloud-reel-dashboard.vercel.app/",
      "access-control-allow-origin",
      "* (static mock)",
      "warn"
     ]
    ]
   },
   {
    "title": "Cookies",
    "head": [
     "Name",
     "Secure",
     "Httponly",
     "Samesite",
     "Verdict",
     "Note",
     "Site",
     "Set by",
     "Expiry"
    ],
    "rows": [
     [
      "__Host-cr_session",
      "True",
      "True",
      "Lax",
      "ok",
      "__Host- prefix, Secure, HttpOnly, path=/ - good",
      "beta",
      "server (session)",
      "~2026-12-24 (30 days)"
     ],
     [
      "cr_did",
      "False",
      "False",
      "Lax",
      "warn",
      "Persistent device id used by analytics; no Secure flag; set before any consent",
      "beta",
      "client JS on first visit (also signed out)",
      "~1 year (2027-11)"
     ],
     [
      "(none)",
      "",
      "",
      "",
      "ok",
      "Reference uses localStorage only; shows cookie notice",
      "vercel",
      "-",
      ""
     ]
    ]
   },
   {
    "title": "Lighthouse (public pages)",
    "head": [
     "Site",
     "Page",
     "Preset",
     "Perf",
     "A11y",
     "Best pr.",
     "SEO",
     "LCP ms",
     "CLS",
     "TBT ms"
    ],
    "rows": [
     [
      "beta",
      "/login",
      "desktop",
      "100",
      "92",
      "100",
      "92",
      "430",
      "0",
      "0"
     ],
     [
      "beta",
      "/login",
      "mobile",
      "99",
      "92",
      "100",
      "92",
      "1968",
      "0",
      "28"
     ],
     [
      "beta",
      "/pricing",
      "desktop",
      "100",
      "100",
      "96",
      "92",
      "450",
      "0",
      "0"
     ],
     [
      "beta",
      "/pricing",
      "mobile",
      "100",
      "100",
      "96",
      "92",
      "1081",
      "0",
      "4"
     ],
     [
      "beta",
      "/signup",
      "desktop",
      "100",
      "96",
      "100",
      "92",
      "342",
      "0",
      "0"
     ],
     [
      "beta",
      "/signup",
      "mobile",
      "99",
      "96",
      "100",
      "92",
      "2054",
      "0",
      "13"
     ],
     [
      "vercel",
      "/login (redirects to / mock home)",
      "desktop",
      "74",
      "96",
      "100",
      "92",
      "2347",
      "0.138",
      "147"
     ],
     [
      "vercel",
      "/login (redirects to / mock home)",
      "mobile",
      "48",
      "100",
      "100",
      "92",
      "10506",
      "0.193",
      "688"
     ],
     [
      "vercel",
      "/pricing",
      "desktop",
      "100",
      "98",
      "100",
      "92",
      "484",
      "0",
      "0"
     ],
     [
      "vercel",
      "/pricing",
      "mobile",
      "97",
      "98",
      "100",
      "92",
      "2498",
      "0",
      "31"
     ],
     [
      "vercel",
      "/signup (redirects to /onboarding)",
      "desktop",
      "100",
      "91",
      "100",
      "92",
      "530",
      "0",
      "0"
     ],
     [
      "vercel",
      "/signup (redirects to /onboarding)",
      "mobile",
      "79",
      "96",
      "100",
      "92",
      "2433",
      "0",
      "734"
     ]
    ]
   },
   {
    "title": "Signed-in page performance",
    "head": [
     "site",
     "page",
     "lcp ms",
     "cls",
     "requests",
     "transfer kb",
     "slowest api",
     "url",
     "long tasks",
     "longest task ms",
     "tbt est ms",
     "js requests",
     "js kb transferred",
     "ttfb ms",
     "networkidle ms",
     "failed requests",
     "repeat visit",
     "over budget"
    ],
    "rows": [
     [
      "beta",
      "home",
      "1360",
      "0.15",
      "87",
      "1896",
      "['GET /api/gateway/subscription/v1/billing/coupons 200 136ms', 'GET /api/gateway/subscription/v1/billing/summary 200 136ms']",
      "https://app-beta.cloudreel.com/",
      "0",
      "0",
      "0",
      "16",
      "257",
      "73",
      "2204",
      "['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100']",
      "{'networkidle_ms': 956, 'lcp_ms': 168, 'transfer_kb': 61}",
      "['CLS']"
     ],
     [
      "beta",
      "projects",
      "592",
      "0.172",
      "81",
      "341",
      "['GET /projects?_rsc=1TX1itLzob2zpySZ 200 75ms', 'GET /editor?_rsc=1TX1itLzob2zpySZ 200 72ms']",
      "https://app-beta.cloudreel.com/projects",
      "0",
      "0",
      "0",
      "21",
      "260",
      "40",
      "1103",
      "['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100', 'GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content/uploading']",
      "{'networkidle_ms': 1213, 'lcp_ms': 708, 'transfer_kb': 50}",
      "['CLS']"
     ],
     [
      "beta",
      "studio",
      "636",
      "0.118",
      "75",
      "248",
      "['GET /layouts?_rsc=qvajPJFzoPGNrtRf 200 69ms', 'GET /graphics?_rsc=qvajPJFzoPGNrtRf 200 69ms']",
      "https://app-beta.cloudreel.com/studio",
      "0",
      "0",
      "0",
      "26",
      "165",
      "104",
      "1110",
      "['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100']",
      "{'networkidle_ms': 1057, 'lcp_ms': 584, 'transfer_kb': 52}",
      "['CLS']"
     ],
     [
      "beta",
      "post",
      "604",
      "0.148",
      "80",
      "238",
      "['GET /api/gateway/video/content/01a1e4a0-7cec-73dc-b1de-bcfec73252cf/documents 200 79ms', 'GET /api/gateway/video/content/01a1e4a0-7cec-73dc-b1de-bcfec73252cf/dubs 200 69ms']",
      "https://app-beta.cloudreel.com/post",
      "0",
      "0",
      "0",
      "21",
      "172",
      "45",
      "1125",
      "['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100', 'GET 500 https://app-beta.cloudreel.com/api/gateway/video/social/posts?range=all&sort=published&limit=200', 'GET 500 https://app-beta.cloudreel.com/api/gateway/video/social/post-metrics?post_uuids=34e09034-d6ec-4897-8d85-ac31194d0b5d%2C9']",
      "{'networkidle_ms': 1063, 'lcp_ms': 540, 'transfer_kb': 53}",
      "['CLS']"
     ],
     [
      "beta",
      "plan",
      "3136",
      "0.167",
      "77",
      "62",
      "['POST /api/studio/v2/ProducerEvent/producerEventPlaylist 200 2293ms', 'POST /api/studio-session 200 367ms']",
      "https://app-beta.cloudreel.com/plan",
      "0",
      "0",
      "0",
      "21",
      "0",
      "41",
      "3620",
      "['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100', 'GET 500 https://app-beta.cloudreel.com/api/gateway/video/social/post-metrics?post_uuids=34e09034-d6ec-4897-8d85-ac31194d0b5d%2C9']",
      "{'networkidle_ms': 3418, 'lcp_ms': 2940, 'transfer_kb': 62}",
      "['LCP', 'CLS']"
     ],
     [
      "beta",
      "analytics",
      "428",
      "0.108",
      "67",
      "98",
      "['GET /api/gateway/subscription/v1/billing/summary 200 66ms', 'GET /api/gateway/billing/v1/billing/credits 200 66ms']",
      "https://app-beta.cloudreel.com/analytics",
      "0",
      "0",
      "0",
      "18",
      "47",
      "160",
      "1105",
      "['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100', 'GET 500 https://app-beta.cloudreel.com/api/gateway/video/social/overview?range=30d']",
      "{'networkidle_ms': 994, 'lcp_ms': 264, 'transfer_kb': 43}",
      "['CLS']"
     ],
     [
      "beta",
      "settings",
      "556",
      "0.02",
      "73",
      "138",
      "['GET /api/auth/me 200 115ms', 'GET /remotes/settings 200 104ms']",
      "https://app-beta.cloudreel.com/settings",
      "0",
      "0",
      "0",
      "19",
      "81",
      "63",
      "1087",
      "['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100']",
      "{'networkidle_ms': 1070, 'lcp_ms': 512, 'transfer_kb': 47}",
      "[]"
     ],
     [
      "vercel",
      "home",
      "896",
      "0.199",
      "141",
      "2835",
      "['GET /multiviewer?_rsc=5CB68i4pnAekjehf 200 935ms', 'GET /gfx-studio?_rsc=5CB68i4pnAekjehf 200 925ms']",
      "https://cloud-reel-dashboard.vercel.app/",
      "0",
      "0",
      "0",
      "62",
      "1075",
      "158",
      "4890",
      "[]",
      "{'networkidle_ms': 3666, 'lcp_ms': 412, 'transfer_kb': 55}",
      "['CLS', 'JS']"
     ],
     [
      "vercel",
      "projects",
      "1856",
      "0.698",
      "136",
      "872",
      "['GET /changelog?_rsc=pMJnBWoMqi7yt4vY 200 408ms', 'GET /plan?_rsc=gi3_yVKRKKogn-vV 200 287ms']",
      "https://cloud-reel-dashboard.vercel.app/video-library",
      "1",
      "63",
      "13",
      "75",
      "790",
      "32",
      "4633",
      "[]",
      "{'networkidle_ms': 4477, 'lcp_ms': 1464, 'transfer_kb': 62}",
      "['CLS']"
     ],
     [
      "vercel",
      "studio",
      "1436",
      "0.698",
      "134",
      "82",
      "['GET /analytics-intelligence?_rsc=xN9m0eAmykUDGHNs 200 468ms', 'GET /co-creator?_rsc=HiZ4lN8_Sb-dqF6m 200 438ms']",
      "https://cloud-reel-dashboard.vercel.app/recordings",
      "1",
      "81",
      "31",
      "73",
      "0",
      "20",
      "4911",
      "[]",
      "{'networkidle_ms': 3715, 'lcp_ms': 628, 'transfer_kb': 63}",
      "['CLS']"
     ],
     [
      "vercel",
      "post",
      "752",
      "0.698",
      "136",
      "90",
      "['GET /voice-clones?_rsc=7xdY6J5mcOvUsTHs 200 310ms', 'GET /webinars?_rsc=bRNyZ1ooeJ1-Nf4V 200 294ms']",
      "https://cloud-reel-dashboard.vercel.app/publishing-hub",
      "1",
      "87",
      "37",
      "74",
      "8",
      "33",
      "3882",
      "[]",
      "{'networkidle_ms': 3837, 'lcp_ms': 672, 'transfer_kb': 63}",
      "['CLS']"
     ],
     [
      "vercel",
      "plan",
      "692",
      "0.698",
      "135",
      "113",
      "['GET /recordings?_rsc=t2z1CY6llAzk2aRu 200 451ms', 'GET /encoders?_rsc=McGboGlLADWvvVNv 200 337ms']",
      "https://cloud-reel-dashboard.vercel.app/schedule",
      "1",
      "97",
      "47",
      "75",
      "31",
      "28",
      "3880",
      "[]",
      "{'networkidle_ms': 3868, 'lcp_ms': 752, 'transfer_kb': 62}",
      "['CLS']"
     ],
     [
      "vercel",
      "analytics",
      "624",
      "0.128",
      "134",
      "84",
      "['GET /portrait-pro?_rsc=SBQTe5j_tuXrhZXN 200 336ms', 'GET /long-to-shorts?_rsc=VH8KWDlD7Jp71eww 200 303ms']",
      "https://cloud-reel-dashboard.vercel.app/analytics",
      "1",
      "93",
      "43",
      "73",
      "0",
      "22",
      "3889",
      "[]",
      "{'networkidle_ms': 4169, 'lcp_ms': 932, 'transfer_kb': 64}",
      "['CLS']"
     ],
     [
      "vercel",
      "settings",
      "608",
      "0.128",
      "133",
      "85",
      "['GET /multiviewer?_rsc=r7EtBNeSiJ5uak-5 200 335ms', 'GET /layout-builder?_rsc=m58nOez-PqE4pTRV 200 335ms']",
      "https://cloud-reel-dashboard.vercel.app/settings",
      "1",
      "99",
      "49",
      "73",
      "0",
      "54",
      "3960",
      "[]",
      "{'networkidle_ms': 4131, 'lcp_ms': 692, 'transfer_kb': 66}",
      "['CLS']"
     ]
    ]
   },
   {
    "title": "Error handling & resilience",
    "head": [
     "Page",
     "Scenario",
     "Result",
     "What the user sees"
    ],
    "rows": [
     [
      "/post",
      "500",
      "weak",
      "Red banners 'Could not load your connected accounts: internal error' + 'Could not load posts: internal error', each with 'Try again'; This Month shows dashes; sidebar navigation still works. Raw backend text 'internal error'."
     ],
     [
      "/post",
      "slow",
      "good",
      "'Loading posts…' indicator at 2 s, content after the 8 s delay; nothing broken."
     ],
     [
      "/post",
      "offline",
      "bad",
      "Clicking 'Post' in the sidebar while offline replaces the app with Chrome's 'No internet' (ERR_INTERNET_DISCONNECTED) page; no in-app offline notice. Recovers by itself when back online (browser auto-reload)."
     ],
     [
      "/post",
      "session-lost",
      "good",
      "Next sidebar navigation goes to /login?next=<page>; reload also goes to login. Already-rendered data stays visible until the next navigation."
     ],
     [
      "/analytics",
      "500",
      "weak",
      "'Could not load analytics' / 'internal error' / 'Try again' - whole page is an error state; nav works."
     ],
     [
      "/analytics",
      "slow",
      "good",
      "'Loading analytics…' at 2 s, then result (real backend currently returns 500, so ends in the same error state as PUB-23)."
     ],
     [
      "/analytics",
      "offline",
      "bad",
      "Chrome 'No internet' page on in-app navigation; recovers on reconnect."
     ],
     [
      "/analytics",
      "session-lost",
      "good",
      "Redirect to /login?next=… on next navigation."
     ],
     [
      "/plan",
      "500",
      "weak",
      "'Could not load scheduled posts: internal error' + 'Studio events could not be loaded: Could not open the Studio. Try again shortly.' with Try again / Refresh; calendar grid still renders."
     ],
     [
      "/plan",
      "slow",
      "good",
      "'Loading scheduled posts…' at 2 s; content after delay."
     ],
     [
      "/plan",
      "offline",
      "bad",
      "Chrome 'No internet' page; on reconnect Plan reloads but shows the existing real error 'Studio events could not be loaded: The Studio could not do that (200).'"
     ],
     [
      "/plan",
      "session-lost",
      "good",
      "Redirect to /login?next=… on next navigation."
     ],
     [
      "/projects",
      "500",
      "weak",
      "'Could not load your library' / 'internal error' / 'Retry', next to header 'Projects (0)' and 'No folders yet. Use New Folder to create one.' (misleading empty counts)."
     ],
     [
      "/projects",
      "slow",
      "good",
      "Skeleton cards at 2 s, real projects after the delay."
     ],
     [
      "/projects",
      "offline",
      "bad",
      "Chrome 'No internet' page; recovers on reconnect."
     ],
     [
      "/projects",
      "session-lost",
      "good",
      "Redirect to /login?next=… ; in-flight library calls get 401 and are handled silently."
     ],
     [
      "/studio",
      "500",
      "bad",
      "Banner 'Something went wrong on our side. Try again.' (no Try again button) AND the empty state 'No recordings yet - Schedule a session or start recording.' at the same time."
     ],
     [
      "/studio",
      "slow",
      "good",
      "Skeleton cards at 2 s, content after delay."
     ],
     [
      "/studio",
      "offline",
      "bad",
      "Chrome 'No internet' page; recovers on reconnect."
     ],
     [
      "/studio",
      "session-lost",
      "good",
      "Redirect to /login?next=… on next navigation."
     ],
     [
      "(all signed-in pages)",
      "500",
      "weak",
      "When billing endpoints fail, the auto-opening 'Choose your plan' modal appears over the page with 'Billing is temporarily unavailable. Please try again in a moment.' (friendly text, but a blocking modal the user didn't ask for)."
     ]
    ]
   }
  ]
 }
};
