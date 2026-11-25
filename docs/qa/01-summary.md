# QA test report: summary and release recommendation

A senior-QA pass on the beta: formal test cases, negative and edge-case testing, sessions and navigation, cross-browser and device coverage, accessibility (WCAG 2.1 AA), security hygiene, performance and error handling. Part 1 above compares the beta with the reference; this part says whether the beta works, how reliably, and what blocks a wider release.

## Verdict

**Recommendation: No-Go for a wider or public release. OK to continue the closed beta while the 8 P1 defects are fixed.**

108 of 199 executed test cases pass (54%). 52 defects are open: 1 critical and 16 major. Analytics doesn't work, Posts can't show its numbers and Plan can't load live events (backend errors). Sign-up asks people to accept placeholder legal pages. The assistant writes to the workspace when its Personalize dialog is only closed. A plan checkout pops up on every new tab, and most pages can be framed by other sites. Navigation, sign-in protection, search, cross-browser layout and speed are solid. Re-test after the P1 fixes and again before inviting outside users.

## Numbers

- **216** Test cases
- **199** Executed
- **108** Passed
- **91** Failed
- **3** Blocked
- **14** Not run (write-protected)
- **54%** Pass rate (executed)
- **52** Defects logged

## Defects by severity and priority

| Severity \ Priority | P1 | P2 | P3 | Total |
|---|---|---|---|---|
| blocker | – | – | – | 0 |
| critical | 1 | – | – | 1 |
| major | 7 | 9 | – | 16 |
| minor | – | 11 | 18 | 29 |
| trivial | – | – | 6 | 6 |

## Defects by module

| Module | Blocker | Critical | Major | Minor | Trivial | Total |
|---|---|---|---|---|---|---|
| Analytics | – | 1 | – | – | – | 1 |
| App shell | – | – | 2 | 1 | 1 | 4 |
| Platform / HTTP headers | – | – | 2 | 1 | – | 3 |
| Post | – | – | 2 | 2 | – | 4 |
| Assistant (Orbit) | – | – | 1 | – | – | 1 |
| Assistant (Orbit) / Brand Kits | – | – | 1 | – | – | 1 |
| Plan | – | – | 1 | 1 | – | 2 |
| Post / Plan | – | – | 1 | – | – | 1 |
| Posts (/post) | – | – | 1 | – | – | 1 |
| Public pages / Analytics | – | – | 1 | – | – | 1 |
| Sign-up / Legal | – | – | 1 | – | – | 1 |
| Studio | – | – | 1 | – | – | 1 |
| Studio > Schedule | – | – | 1 | – | – | 1 |
| Workflows | – | – | 1 | 1 | – | 2 |
| App shell (cross-module) | – | – | – | 1 | – | 1 |
| App shell / mobile drawer | – | – | – | 1 | – | 1 |
| App shell / sidebar | – | – | – | 1 | – | 1 |
| Auth / Pricing / Legal | – | – | – | – | 1 | 1 |
| Auth / onboarding | – | – | – | 1 | – | 1 |
| Cross-cutting (design tokens) | – | – | – | 1 | – | 1 |
| Encoders | – | – | – | 1 | – | 1 |
| Encoders (/encoders) phone | – | – | – | – | 1 | 1 |
| Forgot / reset password | – | – | – | – | 1 | 1 |
| Plan (/plan) phone | – | – | – | 1 | – | 1 |
| Platform / Build config | – | – | – | 1 | – | 1 |
| Platform / Cookies | – | – | – | 1 | – | 1 |
| Post / Settings | – | – | – | 1 | – | 1 |
| Posts / Analytics / Plan / Projects | – | – | – | 1 | – | 1 |
| Project detail | – | – | – | 1 | – | 1 |
| Project detail / Simulcast | – | – | – | 1 | – | 1 |
| Projects | – | – | – | 1 | – | 1 |
| Projects (/projects) filters | – | – | – | 1 | – | 1 |
| Projects, Simulcast broadcast picker | – | – | – | 1 | – | 1 |
| Public pages / SEO | – | – | – | 1 | 1 | 2 |
| Settings | – | – | – | 1 | – | 1 |
| Shell / Navigation | – | – | – | 1 | – | 1 |
| Shell / Plan picker | – | – | – | 2 | – | 2 |
| Shell / Session | – | – | – | 1 | – | 1 |
| Sign-up | – | – | – | 1 | – | 1 |
| Studio / Simulcast | – | – | – | – | 1 | 1 |

## Exit criteria

| Criterion | Status | Note |
|---|---|---|
| No open blocker or critical defects | fail | 1 critical open: Analytics never loads (BUG-FUNC-01). |
| All P1 defects fixed and re-tested | fail | 8 P1 open: Analytics, Posts and Plan backend errors, auto-opening plan modal, Personalize PATCH on close, placeholder legal pages, Posts buttons at tablet width, framing protection. |
| Pass rate of executed test cases ≥ 90% | fail | 54% (108 pass / 91 fail). |
| Core journeys complete end to end (sign up, create clips, go live, post) | blocked | Final write steps weren't run on the shared beta workspace; needs a dedicated QA workspace with test social accounts. |
| No 5xx or console errors on core pages | fail | 500s on Analytics, Posts, Post metrics; Plan events unreadable; Encoders admin 404. |
| Works in Chrome, Safari and Firefox at desktop, tablet and phone | pass | 132 of 140 cells pass; 1 fail (Posts at 720–799 px), 7 minor. |
| No critical WCAG 2.1 AA issues; serious issues triaged | fail | Beta: 0 critical on scans but 54 serious (contrast, nested controls); Schedule dialog close button unnamed; no skip link. |
| Security baseline: HSTS, frame protection, secure cookies, auth on every route | fail | Auth and session cookie pass; HSTS and frame protection missing on most pages. |
| Core pages meet performance budget (LCP ≤ 2.5 s, CLS ≤ 0.1) | fail | LCP fine except Plan (~3.1 s); CLS 0.11–0.17 on 6 of 7 pages (auto-opening plan modal). |
| Legal and consent ready for outside users | fail | Terms placeholder, Privacy draft, no consent notice before analytics. |
