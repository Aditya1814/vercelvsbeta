# Test cases: SEO/Meta

4 cases · 0 pass · 4 fail

## TC-NF-052 — Verify that public pages have lang, viewport, title and description

- Status: **fail** · Priority: P3 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-14
- Preconditions: Signed out
- Steps: 1. Inspect head of 6 public pages
- Expected: lang, viewport, unique title+description
- Actual: lang=en, viewport ok; generic description on all; title "CloudReel" on login/signup/forgot

## TC-NF-053 — Verify that public pages have OG/Twitter tags and canonical

- Status: **fail** · Priority: P3 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-14
- Preconditions: Signed out
- Steps: 1. Inspect head
- Expected: og:title/og:image, canonical
- Actual: None (reference also none)

## TC-NF-054 — Verify that robots.txt and sitemap.xml are served

- Status: **fail** · Priority: P3 · Env: curl · Defects: BUG-NF-13
- Preconditions: Signed out
- Steps: 1. GET /robots.txt, /sitemap.xml
- Expected: 200 text
- Actual: 307 -> /login

## TC-NF-055 — Verify that a favicon is served

- Status: **fail** · Priority: P3 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-13
- Preconditions: Signed out
- Steps: 1. Check <link rel=icon> and /favicon.ico
- Expected: Both work
- Actual: link rel=icon /icon.png works; /favicon.ico -> 307 /login; no apple-touch-icon
