# QA test plan and approach

## Scope

- Every beta module in the sidebar, plus sign-in, sign-up, password reset, pricing and legal pages
- Functional, negative, boundary, session and navigation behaviour
- Chrome, Safari (WebKit) and Firefox at 1440×900, 1280×720, 768×1024, 390×844 and 360×740
- Accessibility against WCAG 2.1 AA (axe-core + keyboard-only)
- Security and privacy hygiene (passive), performance (Lighthouse + in-browser metrics), error handling and offline behaviour
- Comparison against the reference frontend as the expected behaviour (Part 1)

## Out of scope

- Steps that write data on the shared beta workspace: publishing, going live, uploads, AI jobs, checkout, invites, account changes (marked Not run)
- Backend correctness of saved data and real social publishing
- Load / stress testing and penetration testing
- Native mobile apps

## Approach

- Test cases derived from the reference behaviour and the product's own copy; each executed on the beta and recorded Pass / Fail / Blocked / Not run
- Every defect reproduced at least twice before logging, with environment, steps, expected vs actual, logs and screenshots
- A network guard blocked every non-GET request during testing, so nothing was written by accident
- Failures (500, slow, offline, lost session) simulated only inside the test browser

## Environments

- Beta: app-beta.cloudreel.com, signed in as “Pavan's workspace” (Free plan) via Google; signed-out contexts for public and redirect tests
- Reference: cloud-reel-dashboard.vercel.app (mock data)
- Chrome 158, WebKit 27.2 (Safari engine), Firefox 159 on macOS; iPhone 15, Pixel 7 and iPad presets
- Test date: 24 Nov 2026

## Suites run

### Functional, negative & session

Formal functional, negative/boundary and session/navigation testing of every beta sidebar module plus sign-in, sign-up, forgot/reset password and pricing, executed with Playwright on Chrome 158 (desktop 1440x900, phone 390x844) under a strict read-only network guard. 134 test cases: 64 pass, 55 fail, 2 blocked, 13 not-run (steps that would write data). Navigation, back/forward, deep-link redirects (?next preserved, no open redirect), search handling of special/long input and most dialog Esc/double-click behaviour are solid. The headline failures are backend: Analytics, Post numbers and Plan events are broken by 500s and a double-encoded JSON response; and two client-side writes happen without user intent (Personalize dismissal PATCHes the brand board, the assistant opens a voice session on load). 28 defects logged (1 critical, 10 major, 13 minor, 4 trivial); 18 earlier "bug" findings re-confirmed, 2 could not be re-run under the rules.

*Environment:* Chrome 158.0.8127.38 via Playwright (headless, channel chrome) on macOS 26.6.2 (Darwin 25.6.0). Viewports 1440x900 desktop and 390x844 touch (phone). Executed 2026-11-24 against https://app-beta.cloudreel.com, signed in via beta_state.json (Google account, "Pavan's workspace", Free plan, 1,000 credits) and in fresh signed-out contexts. Each suite run twice (r1/r2). Reference: https://cloud-reel-dashboard.vercel.app + source.

### Cross-browser, devices & accessibility

Ran a 14-page x 10-config compatibility matrix on the beta (Chrome, WebKit/Safari incl. iPhone 15 and iPad presets, Firefox; 1440 down to 360 px) with automated overflow/overlap/console probes plus a review of every screenshot, and compared six pages against the reference in four configs. The beta is solid across engines: no horizontal scroll, no font/icon gaps, and no browser-specific console errors (only the server 404/500s that hit every browser). The one real compatibility bug is beta-only: at 720-799 px (tablet portrait or 200% zoom) the Posts "New post" / "Manage accounts" buttons can't be clicked. axe found 0 critical and 54 serious nodes on 15 pages, mostly grey-text contrast (fewer than the reference). Keyboard testing found no skip link, an unnamed close button and lost focus on the Studio Schedule dialog, a sort menu without arrow-key support, and a phone drawer that lets focus escape. Reduced motion is respected.

*Environment:* macOS (Darwin 25.6), headless Playwright. Chrome 158.0.8127.38 (stable channel), WebKit 27.2 (Playwright Safari engine), Firefox 159.0. Viewports: 1440x900, 1280x720, 768x1024, 390x844 (mobile+touch), 360x740 (mobile+touch, Pixel 7 UA), iPhone 15 preset (393x659 @3x), iPad (gen 7) preset (810x1080). Run 2026-11-24. Beta https://app-beta.cloudreel.com signed in as the shared QA session (Pavan's workspace, Free plan, 1,000 credits) via beta_state.json; /login and /signup signed out. Reference https://cloud-reel-dashboard.vercel.app (mock). axe-core 4.x tags wcag2a/aa + wcag21a/aa, desktop Chrome 1440x900. The auto-opening "Choose your plan" modal (SHA-01) was closed with its Close button before each measurement.

### Security, performance & resilience

Passive security/privacy review (headers, cookies, storage, bundles, auth gating), Lighthouse on 3 public pages x 2 presets for beta and reference, Playwright Web-Vitals on 7 signed-in pages (cold + repeat) vs the Vercel equivalents, client-side failure simulation (500 / 8 s delay / offline / session loss) on 5 pages, and SEO basics. Auth gating is solid: all 19 app routes redirect to /login, app APIs return 401 without the session, the session cookie is __Host-/Secure/HttpOnly, no secrets or source maps ship to the client, and no third-party trackers load. Hardening is thin: clickjacking protection is only on 4 routes, no HSTS/CSP/nosniff/Referrer/Permissions-Policy, and first-party analytics plus a 1-year device cookie start with no consent notice. Performance is good - beta beats the reference almost everywhere (Lighthouse 99-100, LCP < 1.4 s) except Plan (LCP ~3.1 s) and CLS > 0.1 caused by the auto-opening plan picker. Error handling is mostly decent (loading states, Try again), but raw 'internal error' text leaks into banners, Studio shows 'No recordings yet' when the load failed, and going offline drops users onto Chrome's dinosaur page.

*Environment:* macOS 26.6.2; Google Chrome 158.0.8127.38 via Playwright (headless) at 1440x900; Lighthouse 12.2.1 (headless Chrome, desktop + mobile presets); curl for headers. Beta https://app-beta.cloudreel.com signed in via beta_state.json (workspace owner, free plan); reference https://cloud-reel-dashboard.vercel.app (mock, cookie notice pre-accepted for runtime perf). Tested 2026-11-24. No logins, no writes; failures simulated only in the test browser.
