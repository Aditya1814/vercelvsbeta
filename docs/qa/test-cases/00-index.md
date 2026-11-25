# Test cases: index



# Test cases: index

216 test cases. Full steps are in `test-cases/<suite>.md`.

## Suites

| Suite | Total | Pass | Fail | Blocked | Not run | Pass rate |
|---|---|---|---|---|---|---|
| Accessibility | 13 | 7 | 6 | 0 | 0 | 54% |
| Analytics | 2 | 0 | 2 | 0 | 0 | 0% |
| App shell & navigation | 11 | 6 | 5 | 0 | 0 | 55% |
| Assistant (Orbit) | 4 | 2 | 2 | 0 | 0 | 50% |
| Authentication | 8 | 7 | 0 | 0 | 1 | 100% |
| Brand Kits, Voice clones, Playground | 5 | 4 | 1 | 0 | 0 | 80% |
| Cross-browser | 14 | 12 | 2 | 0 | 0 | 86% |
| Custom Layouts & Graphics | 3 | 0 | 2 | 0 | 1 | 0% |
| Defect re-verification | 20 | 0 | 18 | 2 | 0 | 0% |
| Encoders | 3 | 2 | 1 | 0 | 0 | 67% |
| Forgot / reset password | 5 | 3 | 1 | 0 | 1 | 75% |
| Header, dialogs & command palette | 6 | 4 | 2 | 0 | 0 | 67% |
| Performance | 13 | 7 | 6 | 0 | 0 | 54% |
| Plan | 5 | 4 | 1 | 0 | 0 | 80% |
| Post | 8 | 2 | 5 | 0 | 1 | 29% |
| Pricing | 3 | 2 | 0 | 0 | 1 | 100% |
| Privacy | 1 | 0 | 1 | 0 | 0 | 0% |
| Project detail | 5 | 1 | 2 | 0 | 2 | 33% |
| Projects | 13 | 8 | 2 | 0 | 3 | 80% |
| Resilience | 21 | 10 | 11 | 0 | 0 | 48% |
| SEO/Meta | 4 | 0 | 4 | 0 | 0 | 0% |
| Security | 16 | 8 | 6 | 1 | 1 | 57% |
| Settings | 5 | 1 | 2 | 0 | 2 | 33% |
| Sign-up | 11 | 9 | 2 | 0 | 0 | 82% |
| Simulcast | 4 | 2 | 2 | 0 | 0 | 50% |
| Studio | 5 | 1 | 3 | 0 | 1 | 25% |
| Workflows | 8 | 6 | 2 | 0 | 0 | 75% |

## All cases

| ID | Suite | Status | Pri | Test case | Defects |
|---|---|---|---|---|---|
| TC-FUNC-001 | Authentication | pass | P1 | Verify that the sign-in page renders Google SSO, email, password, Forgot password and Sign up | BUG-FUNC-17 |
| TC-FUNC-002 | Authentication | pass | P2 | Verify that submitting sign-in with empty fields is blocked with a field message |  |
| TC-FUNC-003 | Authentication | pass | P2 | Verify that malformed email addresses are rejected client-side on sign-in |  |
| TC-FUNC-004 | Authentication | pass | P1 | Verify that sign-in with a non-existent account shows a generic error and does not reveal whether the account exists |  |
| TC-FUNC-005 | Authentication | pass | P2 | Verify that the password visibility toggle shows and hides the password without losing the value |  |
| TC-FUNC-006 | Authentication | pass | P2 | Verify that a signed-in user opening /login is redirected into the app and honours ?next |  |
| TC-FUNC-007 | Authentication | pass | P1 | Verify that ?next on /login cannot redirect off-site (open redirect) |  |
| TC-FUNC-008 | Authentication | not-run | P2 | Verify that returning to the original page after signing in works end-to-end |  |
| TC-FUNC-009 | Sign-up | pass | P2 | Verify that step 1 requires a profile choice before Continue |  |
| TC-FUNC-010 | Sign-up | pass | P1 | Verify that Create account stays disabled while required fields are empty |  |
| TC-FUNC-011 | Sign-up | pass | P2 | Verify that a malformed email keeps Create account disabled |  |
| TC-FUNC-012 | Sign-up | pass | P1 | Verify that the live password rules match the stated policy (8+ chars, 3 of 4 classes) |  |
| TC-FUNC-013 | Sign-up | pass | P1 | Verify that Create account enables only with valid fields AND Terms consent |  |
| TC-FUNC-014 | Sign-up | fail | P2 | Verify that a whitespace-only Full name is rejected | BUG-FUNC-23 |
| TC-FUNC-015 | Sign-up | pass | P3 | Verify that a 300-character name is handled (limit or graceful acceptance) |  |
| TC-FUNC-016 | Sign-up | pass | P3 | Verify that emoji and RTL text are accepted in Full name |  |
| TC-FUNC-017 | Sign-up | pass | P2 | Verify that leading/trailing spaces in email are trimmed |  |
| TC-FUNC-018 | Sign-up | pass | P3 | Verify that Back returns to profile step and invalid ?profile values fall back to step 1 |  |
| TC-FUNC-019 | Sign-up | fail | P1 | Verify that the Terms and Privacy pages linked from sign-up are final legal copy | BUG-FUNC-28 |
| TC-FUNC-020 | Forgot / reset password | pass | P2 | Verify that Send reset link is disabled with an empty email |  |
| TC-FUNC-021 | Forgot / reset password | pass | P2 | Verify that malformed emails cannot be submitted on forgot password |  |
| TC-FUNC-022 | Forgot / reset password | not-run | P1 | Verify that a valid address triggers the reset email and a confirmation |  |
| TC-FUNC-023 | Forgot / reset password | pass | P3 | Verify that /reset-password without a token explains what to do |  |
| TC-FUNC-024 | Forgot / reset password | fail | P3 | Verify that an invalid/expired reset token is rejected before the user types a new password | BUG-FUNC-24 |
| TC-FUNC-025 | Pricing | pass | P2 | Verify that public /pricing lists plans with prices and working CTAs |  |
| TC-FUNC-026 | Pricing | pass | P2 | Verify that the in-app plan picker can be dismissed with Escape and Close | BUG-FUNC-06 |
| TC-FUNC-027 | Pricing | not-run | P2 | Verify that choosing a plan starts checkout |  |
| TC-FUNC-028 | App shell & navigation | fail | P1 | Verify that every sidebar module link opens its page with the right heading and active state | BUG-FUNC-26, BUG-FUNC-05, BUG-FUNC-02, BUG-FUNC-04, BUG-FUNC-01 |
| TC-FUNC-029 | App shell & navigation | fail | P2 | Verify that Plan, Simulcast and Analytics are clickable without scrolling at 1440x900 | BUG-FUNC-26 |
| TC-FUNC-030 | App shell & navigation | pass | P1 | Verify that browser Back/Forward walks through 5 visited modules correctly |  |
| TC-FUNC-031 | App shell & navigation | pass | P2 | Verify that Back from a project detail returns to the filtered library |  |
| TC-FUNC-032 | App shell & navigation | pass | P2 | Verify that the same page works in two tabs independently | BUG-FUNC-06 |
| TC-FUNC-033 | App shell & navigation | fail | P1 | Verify that the plan picker does not interrupt every new tab/session | BUG-FUNC-06 |
| TC-FUNC-034 | App shell & navigation | fail | P3 | Verify that unknown routes show a 404 page with HTTP 404 | BUG-FUNC-15 |
| TC-FUNC-035 | App shell & navigation | pass | P3 | Verify that trailing slashes resolve to the canonical route |  |
| TC-FUNC-036 | App shell & navigation | pass | P3 | Verify behaviour of uppercase paths | BUG-FUNC-15 |
| TC-FUNC-037 | App shell & navigation | fail | P3 | Verify that /onboarding works for new and signed-in users | BUG-FUNC-16 |
| TC-FUNC-038 | App shell & navigation | pass | P2 | Verify that the phone navigation drawer opens, closes with Esc and closes after navigating |  |
| TC-FUNC-039 | Header, dialogs & command palette | pass | P2 | Verify that Notifications, Account menu, Workspace switcher and Getting started open and close with Escape |  |
| TC-FUNC-040 | Header, dialogs & command palette | pass | P2 | Verify that double-clicking dialog/menu triggers does not open duplicate dialogs |  |
| TC-FUNC-041 | Header, dialogs & command palette | fail | P2 | Verify that the command palette opens with Cmd+K, closes with Esc and returns focus | BUG-FUNC-18, BUG-FUNC-22 |
| TC-FUNC-042 | Header, dialogs & command palette | pass | P2 | Verify that the command palette handles special characters, emoji, RTL and 500-char queries |  |
| TC-FUNC-043 | Header, dialogs & command palette | pass | P2 | Verify that a palette result navigates with Enter |  |
| TC-FUNC-044 | Header, dialogs & command palette | fail | P2 | Verify that opening the floating "Ask Orbit" launcher does not start a voice session | BUG-FUNC-08, BUG-FUNC-22 |
| TC-FUNC-045 | Projects | pass | P1 | Verify that Projects lists the workspace videos |  |
| TC-FUNC-046 | Projects | pass | P1 | Verify that search finds matching projects case-insensitively, trims spaces and syncs to the URL |  |
| TC-FUNC-047 | Projects | pass | P2 | Verify that search with no match shows an empty state |  |
| TC-FUNC-048 | Projects | pass | P2 | Verify that search treats special characters literally (%, _, quotes, HTML) |  |
| TC-FUNC-049 | Projects | pass | P3 | Verify that a 300-character search does not break the layout |  |
| TC-FUNC-050 | Projects | fail | P2 | Verify that Favorites / Archived / Bin views switch cleanly and survive refresh | BUG-FUNC-19 |
| TC-FUNC-051 | Projects | pass | P3 | Verify that Assets tab opens and persists |  |
| TC-FUNC-052 | Projects | pass | P3 | Verify that the sort menu opens and closes with Escape, returning focus |  |
| TC-FUNC-053 | Projects | fail | P2 | Verify that New Folder dialog validates the name and closes with Esc/Cancel | BUG-FUNC-22 |
| TC-FUNC-054 | Projects | not-run | P2 | Verify that creating a folder adds it to Folders |  |
| TC-FUNC-055 | Projects | pass | P2 | Verify that New Project and card More menus open and close with Escape |  |
| TC-FUNC-056 | Projects | not-run | P1 | Verify that rename / archive / delete / move / clone work from the card menu |  |
| TC-FUNC-057 | Projects | not-run | P1 | Verify that uploading a video creates a project |  |
| TC-FUNC-058 | Project detail | pass | P1 | Verify that opening a project shows its tabs and each tab is deep-linkable |  |
| TC-FUNC-059 | Project detail | fail | P2 | Verify that the Creations composer only offers supported platforms | BUG-FUNC-13 |
| TC-FUNC-060 | Project detail | fail | P2 | Verify that a deep link to a non-existent project shows a not-found message | BUG-FUNC-20 |
| TC-FUNC-061 | Project detail | not-run | P1 | Verify that Start Smart Clips analysis runs |  |
| TC-FUNC-062 | Project detail | not-run | P1 | Verify that the editor opens a project |  |
| TC-FUNC-063 | Workflows | pass | P1 | Verify that the "Create clips" composer becomes startable after picking a library video |  |
| TC-FUNC-064 | Workflows | pass | P1 | Verify that the "Caption a video" composer becomes startable after picking a library video |  |
| TC-FUNC-065 | Workflows | pass | P1 | Verify that the "Reach new languages" composer becomes startable after picking a library video |  |
| TC-FUNC-066 | Workflows | pass | P1 | Verify that the "Make a podcast" composer becomes startable after picking a library video |  |
| TC-FUNC-067 | Workflows | pass | P1 | Verify that the "Make it vertical" composer becomes startable after picking a library video |  |
| TC-FUNC-068 | Workflows | pass | P1 | Verify that the "Write from a video" composer becomes startable after picking a library video |  |
| TC-FUNC-069 | Workflows | fail | P1 | Verify that "Spotlight each speaker" becomes startable after picking a video | BUG-FUNC-09 |
| TC-FUNC-070 | Workflows | fail | P3 | Verify that an unknown workflow id shows a helpful message | BUG-FUNC-21 |
| TC-FUNC-071 | Studio | fail | P1 | Verify that Studio lists recordings and opens a recording drawer | BUG-FUNC-22 |
| TC-FUNC-072 | Studio | pass | P2 | Verify that Studio search handles matches, no results, special characters and long input |  |
| TC-FUNC-073 | Studio | fail | P3 | Verify that Studio Live tab and List view survive refresh | BUG-FUNC-27 |
| TC-FUNC-074 | Studio | fail | P2 | Verify that Schedule a session dialog opens and closes with Escape | BUG-FUNC-22 |
| TC-FUNC-075 | Studio | not-run | P1 | Verify that Go live / Record start a session |  |
| TC-FUNC-076 | Encoders | fail | P2 | Verify that Encoders loads without errors | BUG-FUNC-05 |
| TC-FUNC-077 | Encoders | pass | P3 | Verify that Devices/Streams tabs switch and persist on refresh |  |
| TC-FUNC-078 | Encoders | pass | P2 | Verify that Invite a user dialog opens and closes with Escape |  |
| TC-FUNC-079 | Custom Layouts & Graphics | fail | P3 | Verify that Custom Layouts loads and its Recycle bin opens/closes | BUG-FUNC-22 |
| TC-FUNC-080 | Custom Layouts & Graphics | fail | P3 | Verify that Graphics loads and "Start from a template" opens/closes | BUG-FUNC-22 |
| TC-FUNC-081 | Custom Layouts & Graphics | not-run | P2 | Verify that New layout / New template create a design |  |
| TC-FUNC-082 | Brand Kits, Voice clones, Playground | pass | P2 | Verify that Brand Kits lists kits and the kit options menu opens/closes |  |
| TC-FUNC-083 | Brand Kits, Voice clones, Playground | fail | P3 | Verify that "Add new" brand kit dialog opens and closes with Escape | BUG-FUNC-22 |
| TC-FUNC-084 | Brand Kits, Voice clones, Playground | pass | P3 | Verify that New voice clone dialog opens and closes |  |
| TC-FUNC-085 | Brand Kits, Voice clones, Playground | pass | P2 | Verify that the Playground prompt validates empty/blank input and caps length |  |
| TC-FUNC-086 | Brand Kits, Voice clones, Playground | pass | P3 | Verify that the Image type picker opens and closes with Escape |  |
| TC-FUNC-087 | Post | fail | P1 | Verify that the Post page loads posts and numbers without errors | BUG-FUNC-02 |
| TC-FUNC-088 | Post | fail | P2 | Verify that Post counts agree across the page | BUG-FUNC-10 |
| TC-FUNC-089 | Post | pass | P2 | Verify that Queue / Approvals / Posts tabs switch and persist on refresh |  |
| TC-FUNC-090 | Post | fail | P1 | Verify that clicking a published post opens its details with numbers | BUG-FUNC-03 |
| TC-FUNC-091 | Post | fail | P2 | Verify that the row More (⋮) button opens a menu | BUG-FUNC-14 |
| TC-FUNC-092 | Post | fail | P2 | Verify that Manage accounts only offers connectable platforms and a consistent count | BUG-FUNC-11, BUG-FUNC-12 |
| TC-FUNC-093 | Post | pass | P2 | Verify that New post opens the video picker and closes with Escape |  |
| TC-FUNC-094 | Post | not-run | P1 | Verify that publishing/scheduling a post works |  |
| TC-FUNC-095 | Plan | fail | P1 | Verify that Plan shows posts and live events for the month | BUG-FUNC-04, BUG-FUNC-02 |
| TC-FUNC-096 | Plan | pass | P2 | Verify that Month/Week/Day views switch and persist on refresh |  |
| TC-FUNC-097 | Plan | pass | P3 | Verify that Next month navigation persists on refresh |  |
| TC-FUNC-098 | Plan | pass | P3 | Verify that an invalid ?view value falls back gracefully |  |
| TC-FUNC-099 | Plan | pass | P3 | Verify that the New menu opens and closes with Escape |  |
| TC-FUNC-100 | Simulcast | pass | P1 | Verify that Simulcast lists channels and opens a channel page with tabs |  |
| TC-FUNC-101 | Simulcast | fail | P3 | Verify that Live / Scheduled / Drafts filters persist on refresh | BUG-FUNC-27 |
| TC-FUNC-102 | Simulcast | pass | P2 | Verify that New channel and Broadcast a video dialogs open and close with Escape |  |
| TC-FUNC-103 | Simulcast | fail | P3 | Verify that a non-existent channel id shows a not-found message | BUG-FUNC-20 |
| TC-FUNC-104 | Analytics | fail | P1 | Verify that Analytics loads the overview for the default range | BUG-FUNC-01 |
| TC-FUNC-105 | Analytics | fail | P1 | Verify that changing range and Try again recover | BUG-FUNC-01 |
| TC-FUNC-106 | Settings | pass | P2 | Verify that every Settings section opens and survives refresh |  |
| TC-FUNC-107 | Settings | fail | P2 | Verify that Display name cannot be saved empty | BUG-FUNC-25 |
| TC-FUNC-108 | Settings | fail | P2 | Verify that Change password dialog opens and closes with Escape | BUG-FUNC-22 |
| TC-FUNC-109 | Settings | not-run | P1 | Verify that 2FA set-up, sign out of other devices, delete account work |  |
| TC-FUNC-110 | Settings | not-run | P1 | Verify that Connect a social account starts OAuth |  |
| TC-FUNC-111 | Assistant (Orbit) | fail | P2 | Verify that the assistant page loads without starting a voice session | BUG-FUNC-08 |
| TC-FUNC-112 | Assistant (Orbit) | pass | P2 | Verify that Send is disabled for empty/blank messages and long input is accepted |  |
| TC-FUNC-113 | Assistant (Orbit) | pass | P3 | Verify that chat search shows a no-results state for special/long input |  |
| TC-FUNC-114 | Assistant (Orbit) | fail | P1 | Verify that closing Personalize without changes does not save anything | BUG-FUNC-07 |
| TC-FUNC-115 | Defect re-verification | fail | P1 | Re-verify PUB-23: Analytics overview 500 | BUG-FUNC-01 |
| TC-FUNC-116 | Defect re-verification | fail | P1 | Re-verify PUB-01: Post list + post-metrics 500 | BUG-FUNC-02 |
| TC-FUNC-117 | Defect re-verification | fail | P2 | Re-verify PUB-02: Post details metrics 500 | BUG-FUNC-03 |
| TC-FUNC-118 | Defect re-verification | fail | P1 | Re-verify PUB-17: Plan Studio events error | BUG-FUNC-04 |
| TC-FUNC-119 | Defect re-verification | fail | P2 | Re-verify LIVE-08: Encoders admin/relays 404 | BUG-FUNC-05 |
| TC-FUNC-120 | Defect re-verification | fail | P1 | Re-verify PUB-16: Plan picker auto-opens | BUG-FUNC-06 |
| TC-FUNC-121 | Defect re-verification | fail | P2 | Re-verify SHA-29: Voice-session POST on launcher | BUG-FUNC-08 |
| TC-FUNC-122 | Defect re-verification | fail | P2 | Re-verify CREATE-24: Spotlight each speaker blocked | BUG-FUNC-09 |
| TC-FUNC-123 | Defect re-verification | fail | P2 | Re-verify PUB-05: Post counts disagree | BUG-FUNC-10 |
| TC-FUNC-124 | Defect re-verification | fail | P2 | Re-verify PUB-07: Add account on unsupported platforms | BUG-FUNC-11 |
| TC-FUNC-125 | Defect re-verification | fail | P2 | Re-verify PUB-08: Connected-account counts differ | BUG-FUNC-12 |
| TC-FUNC-126 | Defect re-verification | fail | P2 | Re-verify CREATE-16: 8 platforms in composer | BUG-FUNC-13 |
| TC-FUNC-127 | Defect re-verification | fail | P2 | Re-verify PUB-12: Row More menu opens nothing | BUG-FUNC-14 |
| TC-FUNC-128 | Defect re-verification | fail | P2 | Re-verify X-06: Unknown pages HTTP 200 | BUG-FUNC-15 |
| TC-FUNC-129 | Defect re-verification | fail | P2 | Re-verify SHA-09: /onboarding 404 | BUG-FUNC-16 |
| TC-FUNC-130 | Defect re-verification | fail | P2 | Re-verify X-10 / SHA-10: /api/auth/me 401 console error on public pages | BUG-FUNC-17 |
| TC-FUNC-131 | Defect re-verification | fail | P2 | Re-verify SHA-17: Ctrl K on Mac | BUG-FUNC-18 |
| TC-FUNC-132 | Defect re-verification | fail | P1 | Re-verify SHA-03 / SHA-04: Placeholder Terms / draft Privacy | BUG-FUNC-28 |
| TC-FUNC-133 | Defect re-verification | blocked | P1 | Re-verify X-08: email sign-in rejects the test account |  |
| TC-FUNC-134 | Defect re-verification | blocked | P1 | Re-verify CREATE-28 / CREATE-29: Editor writes on open, AI Tools/Orbit panels POST |  |
| TC-COMPAT-001 | Cross-browser | pass | P1 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 1440 |  |
| TC-COMPAT-002 | Cross-browser | pass | P2 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 1280x720 |  |
| TC-COMPAT-003 | Cross-browser | fail | P2 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 768 | BUG-CA-01 |
| TC-COMPAT-004 | Cross-browser | pass | P1 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 390 | BUG-CA-10 |
| TC-COMPAT-005 | Cross-browser | pass | P2 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Chrome 360 Android | BUG-CA-09, BUG-CA-10 |
| TC-COMPAT-006 | Cross-browser | pass | P2 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Safari 1440 |  |
| TC-COMPAT-007 | Cross-browser | pass | P2 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Safari iPad |  |
| TC-COMPAT-008 | Cross-browser | pass | P1 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Safari iPhone 15 | BUG-CA-09, BUG-CA-10 |
| TC-COMPAT-009 | Cross-browser | pass | P2 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Firefox 1440 |  |
| TC-COMPAT-010 | Cross-browser | pass | P2 | Verify that the 14 key pages render without layout breaks, overflow, covered controls or missing fonts/icons in Firefox 390 | BUG-CA-10 |
| TC-COMPAT-011 | Cross-browser | pass | P2 | Verify that beta-only layout issues are told apart from issues shared with the reference |  |
| TC-COMPAT-012 | Cross-browser | pass | P1 | Verify that the phone navigation drawer opens, shows every section and closes in Chrome, Safari and Firefox |  |
| TC-COMPAT-013 | Cross-browser | pass | P2 | Verify that lower sidebar items (Plan, Simulcast, Analytics) are reachable on a short laptop (1280x720) |  |
| TC-COMPAT-014 | Cross-browser | fail | P1 | Verify that the Posts header actions are clickable on tablet portrait (768 px) in every engine | BUG-CA-01 |
| TC-COMPAT-015 | Accessibility | fail | P2 | Verify that 15 key beta pages have no WCAG 2.1 A/AA axe violations | BUG-CA-06, BUG-CA-07, BUG-CA-03 |
| TC-COMPAT-016 | Accessibility | pass | P3 | Verify that the beta is no worse than the reference on axe |  |
| TC-COMPAT-017 | Accessibility | fail | P2 | Verify keyboard / assistive behaviour: Skip link (first Tab on any page) | BUG-CA-02 |
| TC-COMPAT-018 | Accessibility | pass | P2 | Verify keyboard / assistive behaviour: Sidebar navigation by keyboard (Chrome 1440) |  |
| TC-COMPAT-019 | Accessibility | fail | P2 | Verify keyboard / assistive behaviour: Studio > Schedule dialog: open, tab, Esc | BUG-CA-03 |
| TC-COMPAT-020 | Accessibility | pass | P2 | Verify keyboard / assistive behaviour: Simulcast > Broadcast a video dialog: open, tab, Esc |  |
| TC-COMPAT-021 | Accessibility | pass | P2 | Verify keyboard / assistive behaviour: "Choose your plan" auto-modal by keyboard |  |
| TC-COMPAT-022 | Accessibility | pass | P2 | Verify keyboard / assistive behaviour: Projects search via keyboard |  |
| TC-COMPAT-023 | Accessibility | fail | P2 | Verify keyboard / assistive behaviour: Projects filters (Newest sort menu) via keyboard | BUG-CA-05 |
| TC-COMPAT-024 | Accessibility | pass | P2 | Verify keyboard / assistive behaviour: Sign-in form by keyboard (signed out) |  |
| TC-COMPAT-025 | Accessibility | fail | P2 | Verify keyboard / assistive behaviour: Phone nav drawer by keyboard (Chrome 390) | BUG-CA-08 |
| TC-COMPAT-026 | Accessibility | fail | P2 | Verify keyboard / assistive behaviour: 200% zoom (1440x900 -> 720x450 CSS px; 1280x720 -> 640x360) | BUG-CA-01 |
| TC-COMPAT-027 | Accessibility | pass | P2 | Verify keyboard / assistive behaviour: prefers-reduced-motion |  |
| TC-NF-001 | Security | fail | P1 | Verify that every HTML response sends X-Frame-Options/frame-ancestors | BUG-NF-01 |
| TC-NF-002 | Security | fail | P2 | Verify that HSTS is sent on all responses | BUG-NF-02 |
| TC-NF-003 | Security | fail | P2 | Verify that CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy are set | BUG-NF-03 |
| TC-NF-004 | Security | pass | P1 | Verify that the session cookie is Secure, HttpOnly and SameSite |  |
| TC-NF-005 | Security | fail | P3 | Verify that every other cookie has Secure flag | BUG-NF-05 |
| TC-NF-006 | Security | pass | P1 | Verify that all app routes redirect to /login when signed out |  |
| TC-NF-007 | Security | pass | P1 | Verify that app APIs refuse requests without a session |  |
| TC-NF-008 | Security | pass | P2 | Verify that signed-in HTML and API responses are not cacheable by shared caches |  |
| TC-NF-009 | Security | pass | P1 | Verify that no secrets/keys are present in client JS bundles or page source | BUG-NF-15 |
| TC-NF-010 | Security | pass | P3 | Verify that source maps are not publicly served |  |
| TC-NF-011 | Security | fail | P2 | Verify that browser storage holds no tokens and minimal PII | BUG-NF-06 |
| TC-NF-012 | Security | pass | P2 | Verify that console logs do not print user data or tokens |  |
| TC-NF-013 | Security | fail | P2 | Verify that user pages do not call admin/internal endpoints |  |
| TC-NF-014 | Security | pass | P2 | Verify that backend error bodies are not verbose | BUG-NF-08 |
| TC-NF-015 | Privacy | fail | P2 | Verify that no third-party trackers load and a consent notice is shown before analytics | BUG-NF-04 |
| TC-NF-016 | Security | not-run | P3 | Verify that a negative login with an invalid account is handled safely |  |
| TC-NF-017 | Security | blocked | P2 | Verify that ?next= on /login only redirects to same-origin paths |  |
| TC-NF-018 | Performance | pass | P2 | Verify that Lighthouse (desktop) /login meets budgets | BUG-NF-13 |
| TC-NF-019 | Performance | pass | P2 | Verify that Lighthouse (mobile) /login meets budgets | BUG-NF-13 |
| TC-NF-020 | Performance | pass | P2 | Verify that Lighthouse (desktop) /pricing meets budgets | BUG-NF-13 |
| TC-NF-021 | Performance | pass | P2 | Verify that Lighthouse (mobile) /pricing meets budgets | BUG-NF-13 |
| TC-NF-022 | Performance | pass | P2 | Verify that Lighthouse (desktop) /signup meets budgets | BUG-NF-13 |
| TC-NF-023 | Performance | pass | P2 | Verify that Lighthouse (mobile) /signup meets budgets | BUG-NF-13 |
| TC-NF-024 | Performance | fail | P2 | Verify that signed-in / meets Web Vitals budgets (cold + repeat) | BUG-NF-11 |
| TC-NF-025 | Performance | fail | P2 | Verify that signed-in /projects meets Web Vitals budgets (cold + repeat) | BUG-NF-11 |
| TC-NF-026 | Performance | fail | P2 | Verify that signed-in /studio meets Web Vitals budgets (cold + repeat) | BUG-NF-11 |
| TC-NF-027 | Performance | fail | P2 | Verify that signed-in /post meets Web Vitals budgets (cold + repeat) | BUG-NF-11 |
| TC-NF-028 | Performance | fail | P2 | Verify that signed-in /plan meets Web Vitals budgets (cold + repeat) | BUG-NF-11, BUG-NF-12 |
| TC-NF-029 | Performance | fail | P2 | Verify that signed-in /analytics meets Web Vitals budgets (cold + repeat) | BUG-NF-11 |
| TC-NF-030 | Performance | pass | P2 | Verify that signed-in /settings meets Web Vitals budgets (cold + repeat) |  |
| TC-NF-031 | Resilience | fail | P2 | Verify that /post handles API 500 | BUG-NF-08 |
| TC-NF-032 | Resilience | pass | P2 | Verify that /post handles an 8 s API delay |  |
| TC-NF-033 | Resilience | fail | P2 | Verify that /post handles going offline | BUG-NF-10 |
| TC-NF-034 | Resilience | pass | P2 | Verify that /post handles session cookie removed mid-session |  |
| TC-NF-035 | Resilience | fail | P2 | Verify that /analytics handles API 500 | BUG-NF-08 |
| TC-NF-036 | Resilience | pass | P2 | Verify that /analytics handles an 8 s API delay |  |
| TC-NF-037 | Resilience | fail | P2 | Verify that /analytics handles going offline | BUG-NF-10 |
| TC-NF-038 | Resilience | pass | P2 | Verify that /analytics handles session cookie removed mid-session |  |
| TC-NF-039 | Resilience | fail | P2 | Verify that /plan handles API 500 | BUG-NF-08 |
| TC-NF-040 | Resilience | pass | P2 | Verify that /plan handles an 8 s API delay |  |
| TC-NF-041 | Resilience | fail | P2 | Verify that /plan handles going offline | BUG-NF-10 |
| TC-NF-042 | Resilience | pass | P2 | Verify that /plan handles session cookie removed mid-session |  |
| TC-NF-043 | Resilience | fail | P2 | Verify that /projects handles API 500 | BUG-NF-08 |
| TC-NF-044 | Resilience | pass | P2 | Verify that /projects handles an 8 s API delay |  |
| TC-NF-045 | Resilience | fail | P2 | Verify that /projects handles going offline | BUG-NF-10 |
| TC-NF-046 | Resilience | pass | P2 | Verify that /projects handles session cookie removed mid-session |  |
| TC-NF-047 | Resilience | fail | P2 | Verify that /studio handles API 500 | BUG-NF-09 |
| TC-NF-048 | Resilience | pass | P2 | Verify that /studio handles an 8 s API delay |  |
| TC-NF-049 | Resilience | fail | P2 | Verify that /studio handles going offline | BUG-NF-10 |
| TC-NF-050 | Resilience | pass | P2 | Verify that /studio handles session cookie removed mid-session |  |
| TC-NF-051 | Resilience | fail | P3 | Verify that a billing outage does not block pages | BUG-NF-16 |
| TC-NF-052 | SEO/Meta | fail | P3 | Verify that public pages have lang, viewport, title and description | BUG-NF-14 |
| TC-NF-053 | SEO/Meta | fail | P3 | Verify that public pages have OG/Twitter tags and canonical | BUG-NF-14 |
| TC-NF-054 | SEO/Meta | fail | P3 | Verify that robots.txt and sitemap.xml are served | BUG-NF-13 |
| TC-NF-055 | SEO/Meta | fail | P3 | Verify that a favicon is served | BUG-NF-13 |
