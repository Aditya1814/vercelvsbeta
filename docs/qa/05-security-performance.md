# Security, performance and resilience

Passive security checks only (headers, cookies, what the app itself exposes); failures were simulated inside the test browser, never against the server.

## Security headers

| URL | Header | Value | Verdict |
|---|---|---|---|
| https://app-beta.cloudreel.com/ (signed in) | content-security-policy | MISSING | fail |
| https://app-beta.cloudreel.com/ (signed in) | x-frame-options | MISSING | fail |
| https://app-beta.cloudreel.com/post (signed in) | content-security-policy | MISSING | fail |
| https://app-beta.cloudreel.com/post (signed in) | x-frame-options | MISSING | fail |
| https://app-beta.cloudreel.com/pricing | content-security-policy | MISSING | fail |
| https://app-beta.cloudreel.com/pricing | x-frame-options | MISSING | fail |
| https://app-beta.cloudreel.com/terms | content-security-policy | MISSING | fail |
| https://app-beta.cloudreel.com/terms | x-frame-options | MISSING | fail |
| https://app-beta.cloudreel.com/privacy | content-security-policy | MISSING | fail |
| https://app-beta.cloudreel.com/privacy | x-frame-options | MISSING | fail |
| https://app-beta.cloudreel.com/login | content-security-policy | frame-ancestors 'none' (only directive) | warn |
| https://app-beta.cloudreel.com/login | x-frame-options | DENY | ok |
| https://app-beta.cloudreel.com/signup | content-security-policy | frame-ancestors 'none' (only directive) | warn |
| https://app-beta.cloudreel.com/signup | x-frame-options | DENY | ok |
| https://app-beta.cloudreel.com/forgot-password | content-security-policy | frame-ancestors 'none' (only directive) | warn |
| https://app-beta.cloudreel.com/forgot-password | x-frame-options | DENY | ok |
| https://app-beta.cloudreel.com/settings | content-security-policy | frame-ancestors 'none' (only directive) | warn |
| https://app-beta.cloudreel.com/settings | x-frame-options | DENY | ok |
| https://app-beta.cloudreel.com/login | strict-transport-security | MISSING | fail |
| https://app-beta.cloudreel.com/login | x-content-type-options | MISSING | warn |
| https://app-beta.cloudreel.com/login | referrer-policy | MISSING | warn |
| https://app-beta.cloudreel.com/login | permissions-policy | MISSING | warn |
| https://app-beta.cloudreel.com/ (signed in) | strict-transport-security | MISSING | fail |
| https://app-beta.cloudreel.com/ (signed in) | x-content-type-options | MISSING | warn |
| https://app-beta.cloudreel.com/ (signed in) | referrer-policy | MISSING | warn |
| https://app-beta.cloudreel.com/ (signed in) | permissions-policy | MISSING | warn |
| https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary | strict-transport-security | MISSING | fail |
| https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary | x-content-type-options | MISSING | warn |
| https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary | referrer-policy | MISSING | warn |
| https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary | permissions-policy | MISSING | warn |
| https://app-beta.cloudreel.com/api/status | strict-transport-security | MISSING | fail |
| https://app-beta.cloudreel.com/api/status | x-content-type-options | MISSING | warn |
| https://app-beta.cloudreel.com/api/status | referrer-policy | MISSING | warn |
| https://app-beta.cloudreel.com/api/status | permissions-policy | MISSING | warn |
| https://app-beta.cloudreel.com/login | x-powered-by | Next.js | warn |
| https://app-beta.cloudreel.com/login | server | nginx (no version) | ok |
| https://app-beta.cloudreel.com/ (signed in) | cache-control | private, no-cache, no-store, max-age=0, must-revalidate | ok |
| https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary | cache-control | no-store | ok |
| https://app-beta.cloudreel.com/api/gateway/subscription/v1/billing/summary | access-control-allow-origin | MISSING (no CORS opened) | ok |
| https://cloud-reel-dashboard.vercel.app/ | strict-transport-security | max-age=63072000; includeSubDomains; preload | ok |
| https://cloud-reel-dashboard.vercel.app/ | x-frame-options | MISSING | warn |
| https://cloud-reel-dashboard.vercel.app/ | content-security-policy | MISSING | warn |
| https://cloud-reel-dashboard.vercel.app/ | access-control-allow-origin | * (static mock) | warn |

## Cookies

| Name | Secure | Httponly | Samesite | Verdict | Note | Site | Set by | Expiry |
|---|---|---|---|---|---|---|---|---|
| __Host-cr_session | True | True | Lax | ok | __Host- prefix, Secure, HttpOnly, path=/ - good | beta | server (session) | ~2026-12-24 (30 days) |
| cr_did | False | False | Lax | warn | Persistent device id used by analytics; no Secure flag; set before any consent | beta | client JS on first visit (also signed out) | ~1 year (2027-11) |
| (none) |  |  |  | ok | Reference uses localStorage only; shows cookie notice | vercel | - |  |

## Lighthouse (public pages)

| Site | Page | Preset | Perf | A11y | Best pr. | SEO | LCP ms | CLS | TBT ms |
|---|---|---|---|---|---|---|---|---|---|
| beta | /login | desktop | 100 | 92 | 100 | 92 | 430 | 0 | 0 |
| beta | /login | mobile | 99 | 92 | 100 | 92 | 1968 | 0 | 28 |
| beta | /pricing | desktop | 100 | 100 | 96 | 92 | 450 | 0 | 0 |
| beta | /pricing | mobile | 100 | 100 | 96 | 92 | 1081 | 0 | 4 |
| beta | /signup | desktop | 100 | 96 | 100 | 92 | 342 | 0 | 0 |
| beta | /signup | mobile | 99 | 96 | 100 | 92 | 2054 | 0 | 13 |
| vercel | /login (redirects to / mock home) | desktop | 74 | 96 | 100 | 92 | 2347 | 0.138 | 147 |
| vercel | /login (redirects to / mock home) | mobile | 48 | 100 | 100 | 92 | 10506 | 0.193 | 688 |
| vercel | /pricing | desktop | 100 | 98 | 100 | 92 | 484 | 0 | 0 |
| vercel | /pricing | mobile | 97 | 98 | 100 | 92 | 2498 | 0 | 31 |
| vercel | /signup (redirects to /onboarding) | desktop | 100 | 91 | 100 | 92 | 530 | 0 | 0 |
| vercel | /signup (redirects to /onboarding) | mobile | 79 | 96 | 100 | 92 | 2433 | 0 | 734 |

## Signed-in page performance

| site | page | lcp ms | cls | requests | transfer kb | slowest api | url | long tasks | longest task ms | tbt est ms | js requests | js kb transferred | ttfb ms | networkidle ms | failed requests | repeat visit | over budget |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| beta | home | 1360 | 0.15 | 87 | 1896 | ['GET /api/gateway/subscription/v1/billing/coupons 200 136ms', 'GET /api/gateway/subscription/v1/billing/summary 200 136ms'] | https://app-beta.cloudreel.com/ | 0 | 0 | 0 | 16 | 257 | 73 | 2204 | ['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100'] | {'networkidle_ms': 956, 'lcp_ms': 168, 'transfer_kb': 61} | ['CLS'] |
| beta | projects | 592 | 0.172 | 81 | 341 | ['GET /projects?_rsc=1TX1itLzob2zpySZ 200 75ms', 'GET /editor?_rsc=1TX1itLzob2zpySZ 200 72ms'] | https://app-beta.cloudreel.com/projects | 0 | 0 | 0 | 21 | 260 | 40 | 1103 | ['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100', 'GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content/uploading'] | {'networkidle_ms': 1213, 'lcp_ms': 708, 'transfer_kb': 50} | ['CLS'] |
| beta | studio | 636 | 0.118 | 75 | 248 | ['GET /layouts?_rsc=qvajPJFzoPGNrtRf 200 69ms', 'GET /graphics?_rsc=qvajPJFzoPGNrtRf 200 69ms'] | https://app-beta.cloudreel.com/studio | 0 | 0 | 0 | 26 | 165 | 104 | 1110 | ['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100'] | {'networkidle_ms': 1057, 'lcp_ms': 584, 'transfer_kb': 52} | ['CLS'] |
| beta | post | 604 | 0.148 | 80 | 238 | ['GET /api/gateway/video/content/01a1e4a0-7cec-73dc-b1de-bcfec73252cf/documents 200 79ms', 'GET /api/gateway/video/content/01a1e4a0-7cec-73dc-b1de-bcfec73252cf/dubs 200 69ms'] | https://app-beta.cloudreel.com/post | 0 | 0 | 0 | 21 | 172 | 45 | 1125 | ['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100', 'GET 500 https://app-beta.cloudreel.com/api/gateway/video/social/posts?range=all&sort=published&limit=200', 'GET 500 https://app-beta.cloudreel.com/api/gateway/video/social/post-metrics?post_uuids=34e09034-d6ec-4897-8d85-ac31194d0b5d%2C9'] | {'networkidle_ms': 1063, 'lcp_ms': 540, 'transfer_kb': 53} | ['CLS'] |
| beta | plan | 3136 | 0.167 | 77 | 62 | ['POST /api/studio/v2/ProducerEvent/producerEventPlaylist 200 2293ms', 'POST /api/studio-session 200 367ms'] | https://app-beta.cloudreel.com/plan | 0 | 0 | 0 | 21 | 0 | 41 | 3620 | ['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100', 'GET 500 https://app-beta.cloudreel.com/api/gateway/video/social/post-metrics?post_uuids=34e09034-d6ec-4897-8d85-ac31194d0b5d%2C9'] | {'networkidle_ms': 3418, 'lcp_ms': 2940, 'transfer_kb': 62} | ['LCP', 'CLS'] |
| beta | analytics | 428 | 0.108 | 67 | 98 | ['GET /api/gateway/subscription/v1/billing/summary 200 66ms', 'GET /api/gateway/billing/v1/billing/credits 200 66ms'] | https://app-beta.cloudreel.com/analytics | 0 | 0 | 0 | 18 | 47 | 160 | 1105 | ['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100', 'GET 500 https://app-beta.cloudreel.com/api/gateway/video/social/overview?range=30d'] | {'networkidle_ms': 994, 'lcp_ms': 264, 'transfer_kb': 43} | ['CLS'] |
| beta | settings | 556 | 0.02 | 73 | 138 | ['GET /api/auth/me 200 115ms', 'GET /remotes/settings 200 104ms'] | https://app-beta.cloudreel.com/settings | 0 | 0 | 0 | 19 | 81 | 63 | 1087 | ['GET net::ERR_ABORTED https://app-beta.cloudreel.com/api/gateway/video/content?limit=100'] | {'networkidle_ms': 1070, 'lcp_ms': 512, 'transfer_kb': 47} | [] |
| vercel | home | 896 | 0.199 | 141 | 2835 | ['GET /multiviewer?_rsc=5CB68i4pnAekjehf 200 935ms', 'GET /gfx-studio?_rsc=5CB68i4pnAekjehf 200 925ms'] | https://cloud-reel-dashboard.vercel.app/ | 0 | 0 | 0 | 62 | 1075 | 158 | 4890 | [] | {'networkidle_ms': 3666, 'lcp_ms': 412, 'transfer_kb': 55} | ['CLS', 'JS'] |
| vercel | projects | 1856 | 0.698 | 136 | 872 | ['GET /changelog?_rsc=pMJnBWoMqi7yt4vY 200 408ms', 'GET /plan?_rsc=gi3_yVKRKKogn-vV 200 287ms'] | https://cloud-reel-dashboard.vercel.app/video-library | 1 | 63 | 13 | 75 | 790 | 32 | 4633 | [] | {'networkidle_ms': 4477, 'lcp_ms': 1464, 'transfer_kb': 62} | ['CLS'] |
| vercel | studio | 1436 | 0.698 | 134 | 82 | ['GET /analytics-intelligence?_rsc=xN9m0eAmykUDGHNs 200 468ms', 'GET /co-creator?_rsc=HiZ4lN8_Sb-dqF6m 200 438ms'] | https://cloud-reel-dashboard.vercel.app/recordings | 1 | 81 | 31 | 73 | 0 | 20 | 4911 | [] | {'networkidle_ms': 3715, 'lcp_ms': 628, 'transfer_kb': 63} | ['CLS'] |
| vercel | post | 752 | 0.698 | 136 | 90 | ['GET /voice-clones?_rsc=7xdY6J5mcOvUsTHs 200 310ms', 'GET /webinars?_rsc=bRNyZ1ooeJ1-Nf4V 200 294ms'] | https://cloud-reel-dashboard.vercel.app/publishing-hub | 1 | 87 | 37 | 74 | 8 | 33 | 3882 | [] | {'networkidle_ms': 3837, 'lcp_ms': 672, 'transfer_kb': 63} | ['CLS'] |
| vercel | plan | 692 | 0.698 | 135 | 113 | ['GET /recordings?_rsc=t2z1CY6llAzk2aRu 200 451ms', 'GET /encoders?_rsc=McGboGlLADWvvVNv 200 337ms'] | https://cloud-reel-dashboard.vercel.app/schedule | 1 | 97 | 47 | 75 | 31 | 28 | 3880 | [] | {'networkidle_ms': 3868, 'lcp_ms': 752, 'transfer_kb': 62} | ['CLS'] |
| vercel | analytics | 624 | 0.128 | 134 | 84 | ['GET /portrait-pro?_rsc=SBQTe5j_tuXrhZXN 200 336ms', 'GET /long-to-shorts?_rsc=VH8KWDlD7Jp71eww 200 303ms'] | https://cloud-reel-dashboard.vercel.app/analytics | 1 | 93 | 43 | 73 | 0 | 22 | 3889 | [] | {'networkidle_ms': 4169, 'lcp_ms': 932, 'transfer_kb': 64} | ['CLS'] |
| vercel | settings | 608 | 0.128 | 133 | 85 | ['GET /multiviewer?_rsc=r7EtBNeSiJ5uak-5 200 335ms', 'GET /layout-builder?_rsc=m58nOez-PqE4pTRV 200 335ms'] | https://cloud-reel-dashboard.vercel.app/settings | 1 | 99 | 49 | 73 | 0 | 54 | 3960 | [] | {'networkidle_ms': 4131, 'lcp_ms': 692, 'transfer_kb': 66} | ['CLS'] |

## Error handling & resilience

| Page | Scenario | Result | What the user sees |
|---|---|---|---|
| /post | 500 | weak | Red banners 'Could not load your connected accounts: internal error' + 'Could not load posts: internal error', each with 'Try again'; This Month shows dashes; sidebar navigation still works. Raw backend text 'internal error'. |
| /post | slow | good | 'Loading posts…' indicator at 2 s, content after the 8 s delay; nothing broken. |
| /post | offline | bad | Clicking 'Post' in the sidebar while offline replaces the app with Chrome's 'No internet' (ERR_INTERNET_DISCONNECTED) page; no in-app offline notice. Recovers by itself when back online (browser auto-reload). |
| /post | session-lost | good | Next sidebar navigation goes to /login?next=<page>; reload also goes to login. Already-rendered data stays visible until the next navigation. |
| /analytics | 500 | weak | 'Could not load analytics' / 'internal error' / 'Try again' - whole page is an error state; nav works. |
| /analytics | slow | good | 'Loading analytics…' at 2 s, then result (real backend currently returns 500, so ends in the same error state as PUB-23). |
| /analytics | offline | bad | Chrome 'No internet' page on in-app navigation; recovers on reconnect. |
| /analytics | session-lost | good | Redirect to /login?next=… on next navigation. |
| /plan | 500 | weak | 'Could not load scheduled posts: internal error' + 'Studio events could not be loaded: Could not open the Studio. Try again shortly.' with Try again / Refresh; calendar grid still renders. |
| /plan | slow | good | 'Loading scheduled posts…' at 2 s; content after delay. |
| /plan | offline | bad | Chrome 'No internet' page; on reconnect Plan reloads but shows the existing real error 'Studio events could not be loaded: The Studio could not do that (200).' |
| /plan | session-lost | good | Redirect to /login?next=… on next navigation. |
| /projects | 500 | weak | 'Could not load your library' / 'internal error' / 'Retry', next to header 'Projects (0)' and 'No folders yet. Use New Folder to create one.' (misleading empty counts). |
| /projects | slow | good | Skeleton cards at 2 s, real projects after the delay. |
| /projects | offline | bad | Chrome 'No internet' page; recovers on reconnect. |
| /projects | session-lost | good | Redirect to /login?next=… ; in-flight library calls get 401 and are handled silently. |
| /studio | 500 | bad | Banner 'Something went wrong on our side. Try again.' (no Try again button) AND the empty state 'No recordings yet - Schedule a session or start recording.' at the same time. |
| /studio | slow | good | Skeleton cards at 2 s, content after delay. |
| /studio | offline | bad | Chrome 'No internet' page; recovers on reconnect. |
| /studio | session-lost | good | Redirect to /login?next=… on next navigation. |
| (all signed-in pages) | 500 | weak | When billing endpoints fail, the auto-opening 'Choose your plan' modal appears over the page with 'Billing is temporarily unavailable. Please try again in a moment.' (friendly text, but a blocking modal the user didn't ask for). |
