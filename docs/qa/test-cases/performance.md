# Test cases: Performance

13 cases · 7 pass · 6 fail

## TC-NF-018 — Verify that Lighthouse (desktop) /login meets budgets

- Status: **pass** · Priority: P2 · Env: Lighthouse 12.2.1 headless Chrome, desktop preset · Defects: BUG-NF-13
- Preconditions: Signed out
- Steps: 1. lighthouse /login --desktop
- Expected: Perf>=90, LCP<=2.5s, CLS<=0.1, TBT<=200ms
- Actual: Perf 100, A11y 92, BP 100, SEO 92, LCP 430ms, CLS 0, TBT 0ms

## TC-NF-019 — Verify that Lighthouse (mobile) /login meets budgets

- Status: **pass** · Priority: P2 · Env: Lighthouse 12.2.1 headless Chrome, mobile preset · Defects: BUG-NF-13
- Preconditions: Signed out
- Steps: 1. lighthouse /login --mobile
- Expected: Perf>=90, LCP<=2.5s, CLS<=0.1, TBT<=200ms
- Actual: Perf 99, A11y 92, BP 100, SEO 92, LCP 1968ms, CLS 0, TBT 28ms

## TC-NF-020 — Verify that Lighthouse (desktop) /pricing meets budgets

- Status: **pass** · Priority: P2 · Env: Lighthouse 12.2.1 headless Chrome, desktop preset · Defects: BUG-NF-13
- Preconditions: Signed out
- Steps: 1. lighthouse /pricing --desktop
- Expected: Perf>=90, LCP<=2.5s, CLS<=0.1, TBT<=200ms
- Actual: Perf 100, A11y 100, BP 96, SEO 92, LCP 450ms, CLS 0, TBT 0ms

## TC-NF-021 — Verify that Lighthouse (mobile) /pricing meets budgets

- Status: **pass** · Priority: P2 · Env: Lighthouse 12.2.1 headless Chrome, mobile preset · Defects: BUG-NF-13
- Preconditions: Signed out
- Steps: 1. lighthouse /pricing --mobile
- Expected: Perf>=90, LCP<=2.5s, CLS<=0.1, TBT<=200ms
- Actual: Perf 100, A11y 100, BP 96, SEO 92, LCP 1081ms, CLS 0, TBT 4ms

## TC-NF-022 — Verify that Lighthouse (desktop) /signup meets budgets

- Status: **pass** · Priority: P2 · Env: Lighthouse 12.2.1 headless Chrome, desktop preset · Defects: BUG-NF-13
- Preconditions: Signed out
- Steps: 1. lighthouse /signup --desktop
- Expected: Perf>=90, LCP<=2.5s, CLS<=0.1, TBT<=200ms
- Actual: Perf 100, A11y 96, BP 100, SEO 92, LCP 342ms, CLS 0, TBT 0ms

## TC-NF-023 — Verify that Lighthouse (mobile) /signup meets budgets

- Status: **pass** · Priority: P2 · Env: Lighthouse 12.2.1 headless Chrome, mobile preset · Defects: BUG-NF-13
- Preconditions: Signed out
- Steps: 1. lighthouse /signup --mobile
- Expected: Perf>=90, LCP<=2.5s, CLS<=0.1, TBT<=200ms
- Actual: Perf 99, A11y 96, BP 100, SEO 92, LCP 2054ms, CLS 0, TBT 13ms

## TC-NF-024 — Verify that signed-in / meets Web Vitals budgets (cold + repeat)

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-11
- Preconditions: Signed in
- Steps: 1. Open page in Chrome with PerformanceObserver (LCP/CLS/longtask) + CDP network → 2. Re-open in same context for repeat visit
- Expected: LCP<=2.5s, CLS<=0.1, TBT<=200ms, JS<=1MB
- Actual: LCP 1360ms, CLS 0.15, TBT~0ms, 87 req / 1896KB, JS 257KB; repeat idle 956ms

## TC-NF-025 — Verify that signed-in /projects meets Web Vitals budgets (cold + repeat)

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-11
- Preconditions: Signed in
- Steps: 1. Open page in Chrome with PerformanceObserver (LCP/CLS/longtask) + CDP network → 2. Re-open in same context for repeat visit
- Expected: LCP<=2.5s, CLS<=0.1, TBT<=200ms, JS<=1MB
- Actual: LCP 592ms, CLS 0.172, TBT~0ms, 81 req / 341KB, JS 260KB; repeat idle 1213ms

## TC-NF-026 — Verify that signed-in /studio meets Web Vitals budgets (cold + repeat)

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-11
- Preconditions: Signed in
- Steps: 1. Open page in Chrome with PerformanceObserver (LCP/CLS/longtask) + CDP network → 2. Re-open in same context for repeat visit
- Expected: LCP<=2.5s, CLS<=0.1, TBT<=200ms, JS<=1MB
- Actual: LCP 636ms, CLS 0.118, TBT~0ms, 75 req / 248KB, JS 165KB; repeat idle 1057ms

## TC-NF-027 — Verify that signed-in /post meets Web Vitals budgets (cold + repeat)

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-11
- Preconditions: Signed in
- Steps: 1. Open page in Chrome with PerformanceObserver (LCP/CLS/longtask) + CDP network → 2. Re-open in same context for repeat visit
- Expected: LCP<=2.5s, CLS<=0.1, TBT<=200ms, JS<=1MB
- Actual: LCP 604ms, CLS 0.148, TBT~0ms, 80 req / 238KB, JS 172KB; repeat idle 1063ms

## TC-NF-028 — Verify that signed-in /plan meets Web Vitals budgets (cold + repeat)

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-11, BUG-NF-12
- Preconditions: Signed in
- Steps: 1. Open page in Chrome with PerformanceObserver (LCP/CLS/longtask) + CDP network → 2. Re-open in same context for repeat visit
- Expected: LCP<=2.5s, CLS<=0.1, TBT<=200ms, JS<=1MB
- Actual: LCP 3136ms, CLS 0.167, TBT~0ms, 77 req / 62KB, JS 0KB; repeat idle 3418ms

## TC-NF-029 — Verify that signed-in /analytics meets Web Vitals budgets (cold + repeat)

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-11
- Preconditions: Signed in
- Steps: 1. Open page in Chrome with PerformanceObserver (LCP/CLS/longtask) + CDP network → 2. Re-open in same context for repeat visit
- Expected: LCP<=2.5s, CLS<=0.1, TBT<=200ms, JS<=1MB
- Actual: LCP 428ms, CLS 0.108, TBT~0ms, 67 req / 98KB, JS 47KB; repeat idle 994ms

## TC-NF-030 — Verify that signed-in /settings meets Web Vitals budgets (cold + repeat)

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in
- Steps: 1. Open page in Chrome with PerformanceObserver (LCP/CLS/longtask) + CDP network → 2. Re-open in same context for repeat visit
- Expected: LCP<=2.5s, CLS<=0.1, TBT<=200ms, JS<=1MB
- Actual: LCP 556ms, CLS 0.02, TBT~0ms, 73 req / 138KB, JS 81KB; repeat idle 1070ms
