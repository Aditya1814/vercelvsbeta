# CloudReel: Vercel reference vs Beta — report index

CloudReel · UI/UX comparison · 24 Nov 2026

The original 13 MB HTML report was split into the small files below. Screenshots are in `images/`.
Regenerate with `python3 tools/extract.py`. Fix-tracking state lives in `tracking/status.json` (written by the tracker website).

| File | Size | What's inside |
|---|---|---|
| [docs/01-overview.md](docs/01-overview.md) | 7 KB | Summary, headline numbers, area summaries, method and limits |
| [docs/02-module-status.md](docs/02-module-status.md) | 8 KB | One entry per module: working / partly / broken / missing |
| [docs/03-top-issues.md](docs/03-top-issues.md) | 2 KB | Critical and high severity issues, most important first |
| [docs/04-module-coverage.md](docs/04-module-coverage.md) | 1 KB | Which reference modules/routes exist on the beta |
| [docs/05-site-response.md](docs/05-site-response.md) | 1 KB | LCP / TTFB per page and failing API calls |
| [docs/06-key-journeys.md](docs/06-key-journeys.md) | 6 KB | 7 key journeys compared step by step (reference vs beta) |
| [docs/07-tested-flows.md](docs/07-tested-flows.md) | 17 KB | 65 task flows with pass / partial / fail / stopped result |
| [docs/findings/00-index.md](docs/findings/00-index.md) | 15 KB | One-line index of every finding (ID, severity, module, title) |
| [docs/findings/beta-better.md](docs/findings/beta-better.md) | 10 KB | 15 places the beta beats the reference (keep these) |
| [docs/findings/findings-critical.md](docs/findings/findings-critical.md) | 1 KB | 1 critical-severity findings (PUB-23 … PUB-23) |
| [docs/findings/findings-high.md](docs/findings/findings-high.md) | 16 KB | 17 high-severity findings (SHA-01 … X-08) |
| [docs/findings/findings-low-2.md](docs/findings/findings-low-2.md) | 3 KB | 47 low-severity findings (SHA-13 … X-10) (part 2/2) |
| [docs/findings/findings-low.md](docs/findings/findings-low.md) | 27 KB | 47 low-severity findings (SHA-13 … X-10) (part 1/2) |
| [docs/findings/findings-medium-2.md](docs/findings/findings-medium-2.md) | 25 KB | 63 medium-severity findings (SHA-11 … PUB-36) (part 2/2) |
| [docs/findings/findings-medium.md](docs/findings/findings-medium.md) | 26 KB | 63 medium-severity findings (SHA-11 … PUB-36) (part 1/2) |
| [docs/jtbd/00-overview.md](docs/jtbd/00-overview.md) | 3 KB | Segment readiness matrix and test-environment note |
| [docs/jtbd/broadcaster.md](docs/jtbd/broadcaster.md) | 19 KB | Broadcaster / news channel / media team — Not ready, 5 jobs |
| [docs/jtbd/coach.md](docs/jtbd/coach.md) | 9 KB | Coach / consultant — Not ready, 5 jobs |
| [docs/jtbd/content-creator.md](docs/jtbd/content-creator.md) | 15 KB | Content creator — Partly ready, 5 jobs |
| [docs/jtbd/educator.md](docs/jtbd/educator.md) | 12 KB | Educator / tutor — Not ready, 4 jobs |
| [docs/jtbd/marketer.md](docs/jtbd/marketer.md) | 14 KB | Marketer / small business — Not ready, 5 jobs |
| [docs/jtbd/podcaster.md](docs/jtbd/podcaster.md) | 10 KB | Podcaster — Not ready, 4 jobs |
| [docs/qa/01-summary.md](docs/qa/01-summary.md) | 5 KB | Release recommendation (No-Go), QA numbers, exit criteria |
| [docs/qa/02-test-plan.md](docs/qa/02-test-plan.md) | 6 KB | Scope, approach, and what each test suite covered |
| [docs/qa/03-cross-browser.md](docs/qa/03-cross-browser.md) | 3 KB | Browser × viewport compatibility matrix |
| [docs/qa/04-accessibility.md](docs/qa/04-accessibility.md) | 6 KB | axe-core scan counts per page and keyboard walkthroughs |
| [docs/qa/05-security-performance.md](docs/qa/05-security-performance.md) | 14 KB | Security headers, cookies, Lighthouse, page performance, error handling |
| [docs/qa/defects-00-index.md](docs/qa/defects-00-index.md) | 7 KB | One-line index of all 52 defects |
| [docs/qa/defects-p1.md](docs/qa/defects-p1.md) | 10 KB | 8 P1 defects, ticket-ready (steps, expected/actual, logs) |
| [docs/qa/defects-p2.md](docs/qa/defects-p2.md) | 22 KB | 20 P2 defects, ticket-ready (steps, expected/actual, logs) |
| [docs/qa/defects-p3.md](docs/qa/defects-p3.md) | 23 KB | 24 P3 defects, ticket-ready (steps, expected/actual, logs) |
| [docs/qa/test-cases/00-index.md](docs/qa/test-cases/00-index.md) | 27 KB | Suite totals and a one-line index of all 216 test cases |
| [docs/qa/test-cases/accessibility.md](docs/qa/test-cases/accessibility.md) | 11 KB | 13 test cases for Accessibility |
| [docs/qa/test-cases/analytics.md](docs/qa/test-cases/analytics.md) | 1 KB | 2 test cases for Analytics |
| [docs/qa/test-cases/app-shell-navigation.md](docs/qa/test-cases/app-shell-navigation.md) | 6 KB | 11 test cases for App shell & navigation |
| [docs/qa/test-cases/assistant-orbit.md](docs/qa/test-cases/assistant-orbit.md) | 1 KB | 4 test cases for Assistant (Orbit) |
| [docs/qa/test-cases/authentication.md](docs/qa/test-cases/authentication.md) | 5 KB | 8 test cases for Authentication |
| [docs/qa/test-cases/brand-kits-voice-clones-playground.md](docs/qa/test-cases/brand-kits-voice-clones-playground.md) | 2 KB | 5 test cases for Brand Kits, Voice clones, Playground |
| [docs/qa/test-cases/cross-browser.md](docs/qa/test-cases/cross-browser.md) | 16 KB | 14 test cases for Cross-browser |
| [docs/qa/test-cases/custom-layouts-graphics.md](docs/qa/test-cases/custom-layouts-graphics.md) | 1 KB | 3 test cases for Custom Layouts & Graphics |
| [docs/qa/test-cases/defect-re-verification.md](docs/qa/test-cases/defect-re-verification.md) | 7 KB | 20 test cases for Defect re-verification |
| [docs/qa/test-cases/encoders.md](docs/qa/test-cases/encoders.md) | 1 KB | 3 test cases for Encoders |
| [docs/qa/test-cases/forgot-reset-password.md](docs/qa/test-cases/forgot-reset-password.md) | 2 KB | 5 test cases for Forgot / reset password |
| [docs/qa/test-cases/header-dialogs-command-palette.md](docs/qa/test-cases/header-dialogs-command-palette.md) | 3 KB | 6 test cases for Header, dialogs & command palette |
| [docs/qa/test-cases/performance.md](docs/qa/test-cases/performance.md) | 5 KB | 13 test cases for Performance |
| [docs/qa/test-cases/plan.md](docs/qa/test-cases/plan.md) | 2 KB | 5 test cases for Plan |
| [docs/qa/test-cases/post.md](docs/qa/test-cases/post.md) | 3 KB | 8 test cases for Post |
| [docs/qa/test-cases/pricing.md](docs/qa/test-cases/pricing.md) | 1 KB | 3 test cases for Pricing |
| [docs/qa/test-cases/privacy.md](docs/qa/test-cases/privacy.md) | 1 KB | 1 test cases for Privacy |
| [docs/qa/test-cases/project-detail.md](docs/qa/test-cases/project-detail.md) | 2 KB | 5 test cases for Project detail |
| [docs/qa/test-cases/projects.md](docs/qa/test-cases/projects.md) | 6 KB | 13 test cases for Projects |
| [docs/qa/test-cases/resilience.md](docs/qa/test-cases/resilience.md) | 12 KB | 21 test cases for Resilience |
| [docs/qa/test-cases/security.md](docs/qa/test-cases/security.md) | 6 KB | 16 test cases for Security |
| [docs/qa/test-cases/seo-meta.md](docs/qa/test-cases/seo-meta.md) | 1 KB | 4 test cases for SEO/Meta |
| [docs/qa/test-cases/settings.md](docs/qa/test-cases/settings.md) | 2 KB | 5 test cases for Settings |
| [docs/qa/test-cases/sign-up.md](docs/qa/test-cases/sign-up.md) | 5 KB | 11 test cases for Sign-up |
| [docs/qa/test-cases/simulcast.md](docs/qa/test-cases/simulcast.md) | 1 KB | 4 test cases for Simulcast |
| [docs/qa/test-cases/studio.md](docs/qa/test-cases/studio.md) | 2 KB | 5 test cases for Studio |
| [docs/qa/test-cases/workflows.md](docs/qa/test-cases/workflows.md) | 4 KB | 8 test cases for Workflows |
