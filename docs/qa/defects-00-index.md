# Defect index

| ID | Severity | Priority | Module | Title |
|---|---|---|---|---|
| BUG-FUNC-01 | critical | P1 | Analytics | [Analytics] Overview API returns 500, page is only an error card; range change and Try again repeat the 500 |
| BUG-FUNC-02 | major | P1 | Post / Plan | [Post] Posts list and post-metrics APIs return 500; Best Time to Post and all view counts fail |
| BUG-FUNC-04 | major | P1 | Plan | [Plan] "Studio events could not be loaded: The Studio could not do that (200)" — events API returns a JSON-encoded string |
| BUG-FUNC-06 | major | P1 | App shell | [App shell] "Choose your plan" upsell opens by itself on the first page of every new tab/session |
| BUG-FUNC-07 | major | P1 | Assistant (Orbit) / Brand Kits | [Orbit] Closing the Personalize dialog without changes sends a PATCH to the brand board |
| BUG-FUNC-28 | major | P1 | Sign-up / Legal | [Sign-up/Legal] Sign-up requires agreeing to placeholder Terms and a draft Privacy Policy |
| BUG-CA-01 | major | P1 | Posts (/post) | [Posts] "Manage accounts" and "New post" cannot be clicked at tablet-portrait / 200%-zoom widths (720-799 px) |
| BUG-NF-01 | major | P1 | Platform / HTTP headers | [Security] Signed-in app pages and most public pages can be framed (no X-Frame-Options / frame-ancestors) - clickjacking |
| BUG-FUNC-03 | major | P2 | Post | [Post] Post details dialog cannot load the post's numbers (500) |
| BUG-FUNC-08 | major | P2 | Assistant (Orbit) | [Orbit] Assistant opens a voice session without any mic action (page load and launcher click) |
| BUG-FUNC-09 | major | P2 | Workflows | [Workflows] "Spotlight each speaker" cannot be started: unfilled "pick a shape" blank keeps Start disabled |
| BUG-FUNC-11 | major | P2 | Post | [Post] Manage accounts offers live "Add account" for platforms "Not set up on this server yet" |
| BUG-FUNC-26 | major | P2 | App shell | [App shell] At 1440x900 the pinned sidebar footer covers Plan and Simulcast and pushes Analytics below the fold |
| BUG-CA-03 | major | P2 | Studio > Schedule | [Studio] Schedule a session dialog: close (X) button has no accessible name and gets initial focus; dialog not marked modal |
| BUG-NF-02 | major | P2 | Platform / HTTP headers | [Security] No HSTS (Strict-Transport-Security) on any beta response |
| BUG-NF-04 | major | P2 | Public pages / Analytics | [Privacy] Analytics events and a 1-year device-id cookie start on first visit with no cookie/consent notice |
| BUG-NF-09 | major | P2 | Studio | [Studio] When recordings fail to load, Studio shows 'No recordings yet' empty state together with the error and has no retry button |
| BUG-FUNC-10 | minor | P2 | Post | [Post] Published-post counts disagree on the same page (4 vs 2) |
| BUG-FUNC-13 | minor | P2 | Project detail | [Project detail] Creations composer lists 8 platforms incl. TikTok, LinkedIn, X, Threads, Snapchat |
| BUG-FUNC-14 | minor | P2 | Post | [Post] Row "More" (⋮) button does nothing |
| BUG-FUNC-19 | minor | P2 | Projects | [Projects] Favorites / Archived / Bin views stack into a contradictory state with the wrong empty message |
| BUG-FUNC-22 | minor | P2 | App shell (cross-module) | [A11y/Dialogs] Focus is dropped to <body> after closing many dialogs instead of returning to the trigger |
| BUG-CA-02 | minor | P2 | App shell / sidebar | [Shell] No "Skip to content" link; keyboard users tab through ~21 sidebar stops on every page |
| BUG-CA-06 | minor | P2 | Cross-cutting (design tokens) | [Accessibility] Text below 4.5:1 contrast on 11 of 15 pages (grey-400 meta text, grey-500 on grey-100 segmented controls) |
| BUG-NF-03 | minor | P2 | Platform / HTTP headers | [Security] No CSP, X-Content-Type-Options, Referrer-Policy or Permissions-Policy; X-Powered-By: Next.js disclosed |
| BUG-NF-08 | minor | P2 | Posts / Analytics / Plan / Projects | [Error handling] Raw backend text 'internal error' shown in user-facing error banners (Posts, Analytics, Plan, Projects) |
| BUG-NF-11 | minor | P2 | Shell / Plan picker | [Performance] CLS over budget (0.11-0.17) on 6 of 7 signed-in pages, caused by the auto-opening 'Choose your plan' modal, which re-opens in every new tab |
| BUG-NF-12 | minor | P2 | Plan | [Plan] Plan LCP ~3.0-3.1 s (budget 2.5 s): calendar waits on a 2.3 s POST /api/studio/v2/ProducerEvent/producerEventPlaylist |
| BUG-FUNC-05 | minor | P3 | Encoders | [Encoders] Page calls admin/relays which returns 404 on every load |
| BUG-FUNC-12 | minor | P3 | Post / Settings | [Post/Settings] Connected-account count differs between Post and Settings |
| BUG-FUNC-15 | minor | P3 | App shell | [App shell] Unknown routes return HTTP 200 (soft 404); /projects/123 returns 404 with internal copy |
| BUG-FUNC-16 | minor | P3 | Auth / onboarding | [Auth] /onboarding is a 404 when signed in; signed-out users are sent to log in and then land on the 404 |
| BUG-FUNC-20 | minor | P3 | Project detail / Simulcast | [Projects/Simulcast] Deep links to a missing project or channel silently show the list with no message |
| BUG-FUNC-21 | minor | P3 | Workflows | [Workflows] Unknown workflow ids silently show the Video Library |
| BUG-FUNC-23 | minor | P3 | Sign-up | [Sign-up] Whitespace-only Full name enables Create account |
| BUG-FUNC-25 | minor | P3 | Settings | [Settings] Display name can be cleared and Save changes stays enabled with no validation |
| BUG-CA-05 | minor | P3 | Projects (/projects) filters | [Projects] "Newest" sort menu is role=menu but arrow keys do nothing, and Esc from inside it drops focus to body |
| BUG-CA-07 | minor | P3 | Projects, Simulcast broadcast picker | [Projects] Project cards are role="button" containing other buttons/checkbox (nested interactive) |
| BUG-CA-08 | minor | P3 | App shell / mobile drawer | [Shell] Phone nav drawer does not contain focus: Tab walks into page controls hidden behind the scrim, Esc leaves focus there |
| BUG-CA-09 | minor | P3 | Plan (/plan) phone | [Plan] On phones the floating menu button and crew bubble cover calendar day cells |
| BUG-NF-05 | minor | P3 | Platform / Cookies | [Privacy] Device-id cookie cr_did is set without the Secure flag |
| BUG-NF-06 | minor | P3 | Shell / Session | [Privacy] Full user profile + permissions cached in plain sessionStorage and left there after the session cookie is gone |
| BUG-NF-10 | minor | P3 | Shell / Navigation | [Resilience] Losing the connection turns any in-app navigation into Chrome's 'No internet' page - no offline notice |
| BUG-NF-13 | minor | P3 | Public pages / SEO | [SEO] robots.txt, sitemap.xml and /favicon.ico redirect (307) to /login |
| BUG-NF-15 | minor | P3 | Platform / Build config | [Build] Production build reports appVersion 'dev' in analytics and ships a hardcoded storage-salt fallback |
| BUG-NF-16 | minor | P3 | Shell / Plan picker | [Billing] Billing outage surfaces as an unrequested blocking modal ('Billing is temporarily unavailable') over whatever page the user opens |
| BUG-FUNC-17 | trivial | P3 | Auth / Pricing / Legal | [Public pages] Signed-out pages log a 401 console error for /api/auth/me |
| BUG-FUNC-18 | trivial | P3 | App shell | [Command palette] Footer shows "Ctrl K" on macOS |
| BUG-FUNC-24 | trivial | P3 | Forgot / reset password | [Reset password] Invalid/expired token is not checked until submit |
| BUG-FUNC-27 | trivial | P3 | Studio / Simulcast | [Studio/Simulcast] Selected tab/filter and view mode are lost on refresh and Back |
| BUG-CA-10 | trivial | P3 | Encoders (/encoders) phone | [Encoders] On phones the stat card captions wrap one word per line |
| BUG-NF-14 | trivial | P3 | Public pages / SEO | [SEO] Public pages share one generic description, login/signup/forgot-password titles are just 'CloudReel', no OG/Twitter tags |
