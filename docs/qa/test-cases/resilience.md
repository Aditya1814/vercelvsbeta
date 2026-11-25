# Test cases: Resilience

21 cases · 10 pass · 11 fail

## TC-NF-031 — Verify that /post handles API 500

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-08
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Red banners 'Could not load your connected accounts: internal error' + 'Could not load posts: internal error', each with 'Try again'; This Month shows dashes; sidebar navigation still works. Raw backend text 'internal error'.

## TC-NF-032 — Verify that /post handles an 8 s API delay

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: 'Loading posts…' indicator at 2 s, content after the 8 s delay; nothing broken.

## TC-NF-033 — Verify that /post handles going offline

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-10
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Clicking 'Post' in the sidebar while offline replaces the app with Chrome's 'No internet' (ERR_INTERNET_DISCONNECTED) page; no in-app offline notice. Recovers by itself when back online (browser auto-reload).

## TC-NF-034 — Verify that /post handles session cookie removed mid-session

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Next sidebar navigation goes to /login?next=<page>; reload also goes to login. Already-rendered data stays visible until the next navigation.

## TC-NF-035 — Verify that /analytics handles API 500

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-08
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: 'Could not load analytics' / 'internal error' / 'Try again' - whole page is an error state; nav works.

## TC-NF-036 — Verify that /analytics handles an 8 s API delay

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: 'Loading analytics…' at 2 s, then result (real backend currently returns 500, so ends in the same error state as PUB-23).

## TC-NF-037 — Verify that /analytics handles going offline

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-10
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Chrome 'No internet' page on in-app navigation; recovers on reconnect.

## TC-NF-038 — Verify that /analytics handles session cookie removed mid-session

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Redirect to /login?next=… on next navigation.

## TC-NF-039 — Verify that /plan handles API 500

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-08
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: 'Could not load scheduled posts: internal error' + 'Studio events could not be loaded: Could not open the Studio. Try again shortly.' with Try again / Refresh; calendar grid still renders.

## TC-NF-040 — Verify that /plan handles an 8 s API delay

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: 'Loading scheduled posts…' at 2 s; content after delay.

## TC-NF-041 — Verify that /plan handles going offline

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-10
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Chrome 'No internet' page; on reconnect Plan reloads but shows the existing real error 'Studio events could not be loaded: The Studio could not do that (200).'

## TC-NF-042 — Verify that /plan handles session cookie removed mid-session

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Redirect to /login?next=… on next navigation.

## TC-NF-043 — Verify that /projects handles API 500

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-08
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: 'Could not load your library' / 'internal error' / 'Retry', next to header 'Projects (0)' and 'No folders yet. Use New Folder to create one.' (misleading empty counts).

## TC-NF-044 — Verify that /projects handles an 8 s API delay

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Skeleton cards at 2 s, real projects after the delay.

## TC-NF-045 — Verify that /projects handles going offline

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-10
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Chrome 'No internet' page; recovers on reconnect.

## TC-NF-046 — Verify that /projects handles session cookie removed mid-session

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Redirect to /login?next=… ; in-flight library calls get 401 and are handled silently.

## TC-NF-047 — Verify that /studio handles API 500

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-09
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Banner 'Something went wrong on our side. Try again.' (no Try again button) AND the empty state 'No recordings yet - Schedule a session or start recording.' at the same time.

## TC-NF-048 — Verify that /studio handles an 8 s API delay

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Skeleton cards at 2 s, content after delay.

## TC-NF-049 — Verify that /studio handles going offline

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-10
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Chrome 'No internet' page; recovers on reconnect.

## TC-NF-050 — Verify that /studio handles session cookie removed mid-session

- Status: **pass** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan)
- Preconditions: Signed in; failure simulated client-side (page.route / setOffline / clearCookies)
- Steps: 1. Apply scenario → 2. Observe page, error text, retry, rest of page/nav → 3. Restore and observe recovery
- Expected: Clear loading state, friendly error with retry, rest of app usable, auto-recovery
- Actual: Redirect to /login?next=… on next navigation.

## TC-NF-051 — Verify that a billing outage does not block pages

- Status: **fail** · Priority: P3 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-16
- Preconditions: Signed in, billing GETs 500
- Steps: 1. Open pages in new tabs
- Expected: No unrequested modal
- Actual: Plan picker opens with billing error on every page
