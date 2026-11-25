# Findings: low severity (part 2 of 2)

47 findings. Each compares the Vercel reference with the beta.

## PUB-39 — Profile page missing (/profile 404); covered by Settings > Account

- Severity: **low** · Type: Missing · Module: Profile

**Vercel reference:** Profile: avatar with photo change, name, email, role badge "Content Creator", personal info form, "Open settings" link, change password, sign out, 2FA, delete account.

**Beta:** Route 404; the same actions are in Settings > Account (no role badge; avatar photo upload not seen).

**Impact:** Minor: links to /profile break; no visible avatar upload.

**Recommendation:** Redirect /profile to /settings#account and add avatar upload there.

- Screenshot: [Vercel · desk__profile.png](../../images/img0166.webp)
- Screenshot: [Beta · beta_desk_settings_Account.png](../../images/img0033.webp)

## PUB-30 — Settings page has no H1

- Severity: **low** · Type: Accessibility · Module: Settings

**Vercel reference:** H1 "Settings".

**Beta:** First heading is H2 "Account"; "Settings" is plain text; one unnamed control on desktop.

**Impact:** Screen-reader users lose the page landmark.

**Recommendation:** Make "Settings" the H1.

- Screenshot: [Beta · desk__settings.png](../../images/img0033.webp)

## PUB-31 — Change password dialog lacks the Google sign-up hint

- Severity: **low** · Type: Copy · Module: Settings

**Vercel reference:** "Signed up with Google and never set one? Use \"Forgot password\" on the sign-in page."

**Beta:** Fields only: Current password, New password, Confirm new password, Cancel, Save password.

**Impact:** Google sign-up users are stuck at "Current password".

**Recommendation:** Add the hint.

- Screenshot: [Beta · beta_desk_settings_dlg_Account_Change_password.png](../../images/img0167.webp)
- Screenshot: [Vercel · vercel_desk_settings_dlg_Account.png](../../images/img0168.webp)

## PUB-33 — Phone: roles table in Workspace & Team is cut off

- Severity: **low** · Type: Phone · Module: Settings

**Vercel reference:** n/a

**Beta:** Roles table is 405px wide in a 390px viewport (clipped inside the card); "Duplicate <role>" buttons are 28x28.

**Impact:** Viewer column hidden on phone.

**Recommendation:** Stack the permission matrix per role on phone.

- Screenshot: [Beta · beta_phone_ph_settings_team.png](../../images/img0169.webp)

## PUB-38 — What's new (changelog) missing (/changelog 404)

- Severity: **low** · Type: Missing · Module: What's new

**Vercel reference:** Dated release notes (e.g. Nov 8: Next up on Home, Channel health, Your last 30 days, Fairer plan changes; Nov 7: AI B-roll, Phone as a camera, Audience call-ins, Review links, Podcast page, Remy's crew).

**Beta:** Route 404.

**Impact:** Beta users have no way to learn what changed.

**Recommendation:** Add a simple What's new page linked from the user menu.

- Screenshot: [Vercel · desk__changelog.png](../../images/img0170.webp)

## X-06 — Unknown pages return HTTP 200 instead of 404

- Severity: **low** · Type: Bug · Module: App shell

**Vercel reference:** Shows a friendly 404 page (also HTTP 200 on the reference).

**Beta:** Friendly “Page not found” page, but HTTP status 200.

**Impact:** Search engines and link checkers treat dead links as real pages; monitoring can't spot broken links.

**Recommendation:** Return status 404 from the not-found route (Next.js notFound()).

- Screenshot: [Beta · desk__nope_404_check.png](../../images/img0017.webp)

## X-10 — Public pages log a 401 console error

- Severity: **low** · Type: Bug · Module: Pricing / legal

**Vercel reference:** No console errors.

**Beta:** Pricing, Terms and Privacy each call GET /api/auth/me while signed out → 401, logged as a console error.

**Impact:** Noise in monitoring; hides real errors.

**Recommendation:** Skip the session check on public pages, or treat 401 as “signed out” without logging an error.

- Screenshot: [Beta · desk__pricing.png](../../images/img0053.webp)
