# Test cases: Privacy

1 cases · 0 pass · 1 fail

## TC-NF-015 — Verify that no third-party trackers load and a consent notice is shown before analytics

- Status: **fail** · Priority: P2 · Env: Chrome 158 (headless, Playwright) macOS 26.6, 1440x900, beta workspace (owner, free plan) · Defects: BUG-NF-04
- Preconditions: Fresh profile, signed out
- Steps: 1. Open 6 public pages → 2. Record hosts and analytics calls → 3. Look for consent UI
- Expected: Consent notice before non-essential analytics (reference shows one)
- Actual: No third-party hosts (only d13r6m3lbgowfe.cloudfront.net media when signed in); first-party POST /api/events + cr_did immediately, no notice
