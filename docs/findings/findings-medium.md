# Findings: medium severity (part 1 of 2)

63 findings. Each compares the Vercel reference with the beta.

## SHA-11 — No cookie notice on beta

- Severity: **medium** · Type: Missing · Module: App shell

**Vercel reference:** First visit shows "We use cookies to keep you signed in and remember preferences. Privacy Got it".

**Beta:** No cookie banner on login or in-app in a fresh browser, while the app queues product analytics (POST /api/events, localStorage cloudreel:analytics:*) and the privacy policy has a "Product analytics" and "Cookies in the app" section.

**Impact:** Analytics without notice may be a compliance gap depending on market.

**Recommendation:** Confirm with legal whether a notice/consent is needed; if so port the reference CookieConsentBanner.

- Screenshot: [Screenshot · v_cookie.png](../../images/img0037.webp)
- Screenshot: [Screenshot · bp_desk_login.png](../../images/img0036.webp)

## SHA-12 — Sidebar lacks six modules the reference has

- Severity: **medium** · Type: Missing · Module: App shell

**Vercel reference:** Sidebar: Home, Projects | Cloud Producer: Studio, Encoders, Webinars, Custom Layouts, Multiviewer, Graphics | Edit: Editor, Brand Kits, Image & video, AI Twins, Voice clones | Publish: Posts, Plan, Podcast, Newsletter, Website, Simulcast | Insights: Analytics.

**Beta:** No Webinars, Multiviewer, AI Twins, Podcast, Newsletter, Website (routes 404). Projects moved from top level into EDIT; "Posts" renamed "Post"; "Image & video" renamed "Playground".

**Impact:** Promised modules are absent and renamed items make reference docs/help confusing.

**Recommendation:** Track the missing modules explicitly; align labels ("Posts", "Image & video") or update the reference.

- Screenshot: [Screenshot · v_sidebar_expanded.png](../../images/img0038.webp)
- Screenshot: [Screenshot · b_home.png](../../images/img0039.webp)

## SHA-15 — Header has no Help button and no plan/credits chip

- Severity: **medium** · Type: UX · Module: App shell

**Vercel reference:** Header: plan chip "Essential" -> popover "AI tools use credits; recording and editing don't. Credits left 2640 / 3600 · Plan, usage & billing"; "Help" (?) -> /co-creator?panel=help with FAQs, Help Docs, Contact support.

**Beta:** Header: Search, "Upgrade" (opens full checkout modal), bell, account. Credits are only in the sidebar footer; Help is only inside the account menu ("Help & Support").

**Impact:** Users can't see their balance or get help in one click from any page.

**Recommendation:** Add a credits chip with popover and a Help entry in the header.

- Screenshot: [Screenshot · v_hdr_plan.png](../../images/img0040.webp)
- Screenshot: [Screenshot · v_hdr_help.png](../../images/img0041.webp)
- Screenshot: [Screenshot · b_home.png](../../images/img0039.webp)

## SHA-33 — Reference route names 404 on beta with no redirects

- Severity: **medium** · Type: Journey · Module: App shell

**Vercel reference:** Routes /recordings, /video-library, /publishing-hub, /schedule, /channels, /layout-builder, /gfx-studio, /pro-video-editor exist.

**Beta:** All return the "404 Page not found — There is nothing at this address. Back to home" page; only /ai-writer, /long-to-shorts, /portrait-pro redirect.

**Impact:** Links in docs, emails or bookmarks built from the reference break.

**Recommendation:** Add redirects for the renamed routes (e.g. /video-library -> /projects).

- Screenshot: [Screenshot · b_404.png](../../images/img0042.webp)

## SHA-23 — Assistant is still "Orbit" everywhere on beta, with mixed identity

- Severity: **medium** · Type: Copy · Module: Assistant

**Vercel reference:** Named Remy: tab "Remy · CloudReel", "Remy · your producer", launcher "Ask Remy", "Remy can make mistakes".

**Beta:** Tab "Orbit · CloudReel", "Orbit · Clipper", "Ask Orbit", "Message Orbit". The /co-creator page uses a purple blob avatar while Home and the launcher use the Remy face illustration under the Orbit name.

**Impact:** Two names and two avatars for one assistant blur trust and recognition.

**Recommendation:** Rename to Remy across UI, titles and aria labels, and use one avatar.

- Screenshot: [Screenshot · b_orbit.png](../../images/img0043.webp)
- Screenshot: [Screenshot · b_home.png](../../images/img0039.webp)
- Screenshot: [Screenshot · v_cocreator.png](../../images/img0044.webp)

## SHA-24 — Assistant page has no crew roles

- Severity: **medium** · Type: Missing · Module: Assistant

**Vercel reference:** /co-creator sidebar lists "REMY'S CREW: Producer Runs your show, Editor Handles editing, Clipper Finds viral moments, Marketer Grows your reach"; role chips above the composer switch persona, placeholder and suggestions.

**Beta:** No crew list and no role chips on /co-creator (desktop or phone), although the floating panel and Home briefing do show roles (Producer/Editor/Clipper/Marketer).

**Impact:** Users can't pick who they are talking to on the main assistant page, inconsistent with the panel.

**Recommendation:** Add the crew list and role chips to the full page, sharing the panel's component.

- Screenshot: [Screenshot · b_orbit.png](../../images/img0043.webp)
- Screenshot: [Screenshot · b_launcher_open.png](../../images/img0045.webp)
- Screenshot: [Screenshot · v_cocreator.png](../../images/img0044.webp)

## SHA-26 — Assistant suggestions use names that do not exist in the beta nav

- Severity: **medium** · Type: Copy · Module: Assistant

**Vercel reference:** Suggestions: "Go live", "Find my best clip", "Make a vertical video", "Plan my week".

**Beta:** Suggestions include "Take me to Portrait Pro" and "Open my Video Library"; the nav calls these Projects and the Home card "Make it vertical". Composer placeholder "Tell me what to open or do…" frames Orbit as a navigator.

**Impact:** Users hear names they can't find anywhere else.

**Recommendation:** Use current names ("Open Projects", "Make a video vertical").

- Screenshot: [Screenshot · b_orbit.png](../../images/img0043.webp)

## SHA-29 — Opening the floating assistant fires a voice-session POST without any mic action

- Severity: **medium** · Type: Bug · Module: Assistant

**Vercel reference:** Opening the launcher panel only shows the chat.

**Beta:** Each click on the "Ask Orbit" crew pill sent POST /api/gateway/assistant/api/voice/session (blocked by our read-only guard) although the mic was never pressed.

**Impact:** Possible unnecessary voice-session creation/cost and privacy concern.

**Recommendation:** Create the voice session only when the user presses the mic.

- Screenshot: [Screenshot · b_launcher_open.png](../../images/img0045.webp)

## SHA-07 — Only Google SSO on login and sign-up; Microsoft and GitHub are gone

- Severity: **medium** · Type: Missing · Module: Auth

**Vercel reference:** Login and sign-up offer "Continue with Google", "Continue with Microsoft", "Continue with GitHub".

**Beta:** Only "Continue with Google" (beta privacy policy itself mentions Google or Microsoft sign-in).

**Impact:** Users on Microsoft 365 / GitHub identities must create a password account.

**Recommendation:** Add Microsoft (already referenced in the privacy policy) and decide on GitHub; keep the policy in sync with what is offered.

- Screenshot: [Beta · desk__login.png](../../images/img0036.webp)
- Screenshot: [Screenshot · bp_signup2.png](../../images/img0006.webp)
- Screenshot: [Screenshot · v_onb2.png](../../images/img0046.webp)

## SHA-18 — Getting-started checklist is clips-only and uses a different feature name

- Severity: **medium** · Type: Journey · Module: Getting started

**Vercel reference:** Steps: Turn a video into clips, Record or go live, Invite a guest, Post to YouTube, Instagram or Facebook (covers live + publish).

**Beta:** Steps: "Upload your first video", "Create Magic Clips" ("Make clips"), "Dub or write with AI", "Export from the Editor". No live or publishing step; "Magic Clips" appears nowhere else (Home says "Create clips").

**Impact:** New users are never guided to the Live-first core job or to publishing.

**Recommendation:** Align steps with the reference (clips, live, guest, publish) and use the Home card names.

- Screenshot: [Screenshot · b_getting_started.png](../../images/img0047.webp)
- Screenshot: [Screenshot · v_getting_started.png](../../images/img0048.webp)

## SHA-20 — "Turn an idea into a video" card replaced by "Turn an idea into an image"

- Severity: **medium** · Type: Missing · Module: Home

**Vercel reference:** "Turn an idea into a video — A script, an AI presenter, captions and your brand — no footage needed." -> /workflow?type=idea-video.

**Beta:** "Turn an idea into an image — A thumbnail, cover art or social image from an idea" -> /playground (no guided plan).

**Impact:** The no-footage video outcome is gone from Home.

**Recommendation:** Restore the idea-to-video workflow when AI presenter exists, or keep the image card but give it a guided plan.

- Screenshot: [Screenshot · b_home.png](../../images/img0039.webp)
- Screenshot: [Vercel · desk__.png](../../images/img0049.webp)

## SHA-30 — Phone menu button floats at bottom-left over content instead of sitting in the header

- Severity: **medium** · Type: Phone · Module: Phone

**Vercel reference:** Hamburger "Open menu" top-left in the header; menu drawer has a close (X) and section labels.

**Beta:** Header has Search, Upgrade, bell, account only; the menu is a floating round button at bottom-left overlapping Home cards. The drawer has no section labels and no visible close button.

**Impact:** The menu is hard to find and covers content; users may not know how to close the drawer.

**Recommendation:** Move the menu trigger into the header and add a close button and section labels.

- Screenshot: [Screenshot · b_phone_home.png](../../images/img0050.webp)
- Screenshot: [Screenshot · b_phone_menu.png](../../images/img0051.webp)
- Screenshot: [Vercel · phone__.png](../../images/img0052.webp)

## SHA-05 — Public /pricing page copy is weaker and inconsistent with the in-app plan modal

- Severity: **medium** · Type: Copy · Module: Pricing

**Vercel reference:** H1 "Simple, credit-based pricing", subline "Start on the free tier — no card required", footer "Free accounts start with 75 credits/month", "Most popular" on Growth; Growth lists "Go live on up to 5 destinations at once" and "Up to 3 live shows at once per workspace".

**Beta:** H1 just "Pricing" with subline "One plan covers every unit." (unclear); no free-credit amount stated (app sidebar shows "Free 1,000 / 1,000 credits"); "Popular" badge on Essential while the in-app modal marks Growth "Recommended"; Growth live limits replaced by "Connect all social platforms"; no monthly/annual toggle, only a footnote "Yearly billing saves 17%".

**Impact:** Visitors can't tell what Free includes or which plan is suggested, and the two beta pricing surfaces contradict each other.

**Recommendation:** Reuse the in-app plan data/copy on /pricing: state the free credits, one consistent recommended plan, and the live limits.

- Screenshot: [Beta · desk__pricing.png](../../images/img0053.webp)
- Screenshot: [Screenshot · bp_pricing_loggedin.png](../../images/img0054.webp)
- Screenshot: [Vercel · desk__pricing.png](../../images/img0055.webp)

## SHA-06 — Signed-in user on /pricing sees "Get started" buttons that go to /signup and a "Sign out" link but no way back to the app

- Severity: **medium** · Type: Journey · Module: Pricing

**Vercel reference:** Pricing header has "Sign in" / "Get started"; plan buttons "Get Lite/Essential/Growth".

**Beta:** When signed in, header shows the email and "Sign out"; all three plan buttons are "Get started" -> /signup; only the logo leads back.

**Impact:** A paying-intent user lands on sign-up instead of checkout, and the most prominent header action is signing out.

**Recommendation:** When a session exists, show "Back to app" and route plan buttons to the in-app plan modal for that plan.

- Screenshot: [Screenshot · bp_pricing_loggedin.png](../../images/img0054.webp)

## LIVE-07 — Async recording requests are missing

- Severity: **medium** · Type: Missing · Module: Async recording requests

**Vercel reference:** /studio-async-requests: "Send a link — a guest records on their own time", list of requests ("Fan questions for episode 12 · Accepting submissions"), "New recording request", "View submissions". Linked from the Add video page.

**Beta:** /studio-async-requests is a 404 and there is no entry point.

**Impact:** Guests who cannot join live cannot be collected asynchronously.

**Recommendation:** Add the async request list and create flow, or drop it from the reference scope.

- Screenshot: [Screenshot · v_async_new.png](../../images/img0056.webp)
- Screenshot: [Beta · desk__studio_async_requests.png](../../images/img0057.webp)

## LIVE-08 — Encoders calls an admin endpoint that returns 404 on every load

- Severity: **medium** · Type: Bug · Module: Encoders

**Vercel reference:** No failed requests.

**Beta:** Every load of /encoders (desktop and phone) sends GET /api/gateway/encoder/v1/admin/relays, which returns 404 {"error":"not_found","message":"not found"}, and logs the console error "Failed to load resource: the server responded with a status of 404 ()". /encoder/v1/devices returns 200 normally.

**Impact:** A console error on a core page, and any relay info the UI expected is silently missing.

**Recommendation:** Remove the call for non-admins, or deploy/route the relays endpoint and handle 404 quietly.

- Screenshot: [Beta · desk__encoders.png](../../images/img0058.webp)
- Screenshot: [Beta · beta_desk_encoders.png](../../images/img0059.webp)

## LIVE-09 — No "Add a phone" (scan a QR code for my own phone) path

- Severity: **medium** · Type: Missing · Module: Encoders

**Vercel reference:** "Add a phone" dialog: "My phone — Scan a code with your phone and sign in. Takes a minute." or "A teammate's phone — Email them an invite."

**Beta:** Only "Invite a user" (email + Role: Editor + "Send invitation"). The copy says a phone appears "the first time they go live", and nothing helps the user connect their own phone.

**Impact:** A solo creator has no in-product way to connect the phone in their hand.

**Recommendation:** Add the Add a phone dialog with a QR code and app link for "My phone", and keep the invite as the second option.

- Screenshot: [Screenshot · v_enc_addphone.png](../../images/img0060.webp)
- Screenshot: [Screenshot · b_enc_invite.png](../../images/img0061.webp)

## LIVE-10 — No header action on Encoders; the only CTA is inside the empty state

- Severity: **medium** · Type: UX · Module: Encoders

**Vercel reference:** The header always shows "Invite a teammate" and a primary "Add a phone", plus a "8 phones · 4 online · 2 live" summary.

**Beta:** The header has only a title and description. The single "Invite a user" button sits inside the "No phones yet" card; on phone it is below the fold under four stat cards.

**Impact:** Once phones exist, or on a small screen, there is no obvious way to add another.

**Recommendation:** Put "Add a phone" (and Invite) in the page header like the reference.

- Screenshot: [Beta · beta_desk_encoders.png](../../images/img0059.webp)
- Screenshot: [Screenshot · b_phone_encoders.png](../../images/img0062.webp)
- Screenshot: [Vercel · desk__encoders.png](../../images/img0063.webp)

## LIVE-11 — Live cards, filters, phone drawer, history, Use in Studio and Disconnect could not be compared

- Severity: **medium** · Type: Missing · Module: Encoders

**Vercel reference:** Live now cards (bitrate graph, connection, battery/temperature, "+30 min", Share, Use in Studio, Stop), filters All / Needs attention / Live / Online / Offline, search, a phone side panel (warnings, recent streams, Rename, Disconnect, Remove phone), Stream history with per-phone filter, and Use in Studio opening the lobby with the phone as an SRT source.

**Beta:** The workspace has 0 devices, so only the empty state shows. Tabs are "Devices" and "Streams" (Streams has Active / Ended / All and "Nothing is streaming"). No filter chips or search are visible in the empty state.

**Impact:** These are the core monitoring jobs; their presence and behaviour on the beta is unknown.

**Recommendation:** Test with a connected phone and check each item against the reference list.

- Screenshot: [Screenshot · v_enc_drawer.png](../../images/img0064.webp)
- Screenshot: [Screenshot · v_enc_history.png](../../images/img0065.webp)
- Screenshot: [Screenshot · v_enc_useinstudio.png](../../images/img0066.webp)

## LIVE-12 — Phone: stat cards are cramped and push the empty state and CTA off screen

- Severity: **medium** · Type: Phone · Module: Encoders

**Vercel reference:** Phone shows a compact header with icon actions, and live cards right away.

**Beta:** At 390px the four stat cards sit 2x2 with the description wrapping to 5 lines ("phones / of / members / who can / broadcast here"); the "Invite a user" CTA is below the fold; the floating menu button and assistant bubble cover the empty-state text.

**Impact:** On a phone, the page looks like empty stats with no next step.

**Recommendation:** Stack the stats as one compact row or summary line on phone and keep the primary action in the header.

- Screenshot: [Screenshot · b_phone_encoders.png](../../images/img0062.webp)
- Screenshot: [Vercel · phone__encoders.png](../../images/img0067.webp)

## LIVE-19 — Graphics editor element set differs from the reference

- Severity: **medium** · Type: Missing · Module: Graphics

**Vercel reference:** Sources: Top Band, Lower Band, Ticker, Breaking News, Logo Band, Location, L-Band, Clock, Date, Headlines (rotating), Side Box, Full-screen Card, Countdown.

**Beta:** Sources: Top Band, Lower Band, Ticker, Breaking News, Logo Band, L-Band, Date / Time, U-Band, J-Band, O-Band, Aston Band, Text, Image, Box / Frame. No Location, Headlines, Side Box, Full-screen Card or Countdown.

**Impact:** Newsroom elements in the design (rotating headlines, countdowns, quote/number cards) cannot be built.

**Recommendation:** Add the missing element types, or update the reference to the beta set.

- Screenshot: [Screenshot · b_gfx_new.png](../../images/img0068.webp)
- Screenshot: [Screenshot · v_gfx_new.png](../../images/img0069.webp)

## LIVE-06 — Multiviewer is missing

- Severity: **medium** · Type: Missing · Module: Multiviewer

**Vercel reference:** /multiviewer: pick an event, Auto/2/3/4 grid, PREVIEW and MASTER monitors, "Open in Studio", "10 sources · updated 5s ago".

**Beta:** /multiviewer is a 404 and there is no sidebar entry.

**Impact:** Teams running multi-camera events have no single place to watch every source.

**Recommendation:** Build Multiviewer, or confirm it is out of scope and keep it out of plan and marketing copy.

- Screenshot: [Screenshot · v_multiviewer.png](../../images/img0070.webp)
- Screenshot: [Beta · desk__multiviewer.png](../../images/img0017.webp)

## LIVE-23 — Broadcast dialog has no "Save as draft" and no readiness status

- Severity: **medium** · Type: Missing · Module: Simulcast

**Vercel reference:** Footer: Back · Save as draft · Schedule · Go live. Each destination shows "Ready" or "Not ready".

**Beta:** Footer: Back · Go live, with a "Now / Schedule for later" toggle above. Accounts show no health status, and a delete (trash) icon sits on the connected account inside the picker.

**Impact:** Users cannot park a broadcast, cannot see a broken account before going live, and can delete an account by mistake mid-flow.

**Recommendation:** Add Save as draft and per-destination status; move account deletion out of the picker.

- Screenshot: [Screenshot · b_sim_broadcast2.png](../../images/img0013.webp)
- Screenshot: [Screenshot · v_sim_broadcast2.png](../../images/img0014.webp)

## LIVE-24 — Broadcast offers TikTok LIVE and LinkedIn Live, which the reference does not

- Severity: **medium** · Type: Copy · Module: Simulcast

**Vercel reference:** Add a destination options are YouTube, Facebook, Instagram, Twitch and Custom RTMP.

**Beta:** The list adds "Add TikTok LIVE" and "Add LinkedIn Live". The studio "Connect another" row lists only YouTube, Facebook, Instagram, Twitch and Custom RTMP.

**Impact:** Inconsistent platform promises between Simulcast and Studio, and possibly ones the backend cannot keep.

**Recommendation:** Confirm TikTok and LinkedIn are supported end to end; if not, remove them; if so, add them to Studio too.

- Screenshot: [Screenshot · b_sim_broadcast2.png](../../images/img0013.webp)
- Screenshot: [Screenshot · b_gl_step2_details.png](../../images/img0071.webp)

## LIVE-03 — "Go live" and "Record" open the studio in a new browser tab

- Severity: **medium** · Type: UX · Module: Studio list

**Vercel reference:** Go live / Record open the lobby in the same tab (/studio-session?id=…&fresh=1&intent=go-live).

**Beta:** Both buttons first call GET /api/gateway/studio/v1/events/go-live-window, then open a second tab at /studio?open=session&intent=go-live&sessionTab=1; the original tab stays on the list with no feedback.

**Impact:** Two CloudReel tabs, and the back arrow in the lobby does not return to the list the user came from.

**Recommendation:** Open the lobby in the same tab, or at least say in the original tab that the studio opened in a new tab.

- Screenshot: [Screenshot · b_newtab_Go_live.png](../../images/img0072.webp)
- Screenshot: [Screenshot · v_sl_1_source.png](../../images/img0073.webp)

## CREATE-41 — Standalone tool pages are gone: /ai-clips and /ai-dub 404, and /portrait-pro has no job list

- Severity: **medium** · Type: Missing · Module: AI Clips / AI Dub / Portrait Pro

**Vercel reference:** /ai-clips lists every video with its clip count ('Family Drama — Shorts 12 clips' …). /ai-dub has a Remy suggestion ('I'd dub it into Hindi and English') and upload/library pickers. /portrait-pro shows '1 job is waiting for review' with Open project / Download.

**Beta:** /ai-clips and /ai-dub → '404 Page not found'. /portrait-pro and /long-to-shorts redirect to the Make it vertical / Create clips composers. /ai-writer → the Write composer. There is no cross-project view of clips, dubs or reframe jobs.

**Impact:** Old links break, and users can't see all clips or pending reframe jobs in one place.

**Recommendation:** Redirect /ai-clips and /ai-dub to the matching composers (as /portrait-pro already does), and add a cross-project 'clips / jobs waiting for review' view.

- Screenshot: [Beta · desk__ai_clips.png](../../images/img0017.webp)
- Screenshot: [Beta · desk__ai_dub.png](../../images/img0017.webp)
- Screenshot: [Vercel · desk__ai_clips.png](../../images/img0074.webp)

## CREATE-39 — 'Add new' brand kit opens a create form on the Free plan, while pricing says custom kits are a Growth feature

- Severity: **medium** · Type: UX · Module: Brand Kits

**Vercel reference:** On a non-Growth plan, 'Add new' opens 'Compare plans … More than one brand kit needs the Growth plan.'

**Beta:** On Free, 'Add new' opens the 'New brand kit' dialog ('Your default kit stays the same … Cancel / Create'). The auto-shown plan dialog lists 'Custom brand kit (logos, fonts & outros)' under Growth. Cancelled, so whether Create is blocked is unverified.

**Impact:** Either users hit a wall after filling the form, or plan limits aren't enforced. Both are confusing.

**Recommendation:** Check the plan before showing the form, and explain the limit the way the reference does.

- Screenshot: [Screenshot · b_bk_add.png](../../images/img0075.webp)
- Screenshot: [Screenshot · v_bk_add.png](../../images/img0076.webp)

## CREATE-29 — Opening the AI Tools and Orbit panels fires POST requests with no Run click

- Severity: **medium** · Type: Bug · Module: Editor

**Vercel reference:** n/a

**Beta:** Clicking the 'AI Tools' rail button sent 'POST /api/gateway/video/content/01a1e49e-…/jobs/eye-contact'. Clicking 'Orbit' sent 'POST /api/gateway/assistant/api/voice/session'. Credits stayed at 1,000 / 1,000 afterwards. Whether a job was created is unverified.

**Impact:** Panel browsing may start jobs or voice sessions the user never asked for, which is a cost and trust risk.

**Recommendation:** Make opening a panel read-only (use GET for status) and start jobs or voice sessions only on an explicit Run or mic action.

- Screenshot: [Screenshot · b_ed_aitools.png](../../images/img0077.webp)
- Screenshot: [Screenshot · b_ed_orbit.png](../../images/img0078.webp)

## CREATE-30 — The editor header has no Post button

- Severity: **medium** · Type: Missing · Module: Editor

**Vercel reference:** Header: … Save Template · [Post] · [Download ▾].

**Beta:** Header: … Save Template · Help · [Download ▾]. There is no way to post from the editor.

**Impact:** Users must leave the editor and find Post or Creations to publish what they just edited.

**Recommendation:** Add a Post action that opens the post composer for this edit.

- Screenshot: [Screenshot · b_ed_main2.png](../../images/img0079.webp)
- Screenshot: [Screenshot · v_ed_main.png](../../images/img0080.webp)

## CREATE-12 — The tabs are split six ways with unclear names ('Creations' for posts)

- Severity: **medium** · Type: UX · Module: Project detail

**Vercel reference:** 4 tabs: Overview · Moments · Posts (11) · Files (3). Files holds the recording, speaker tracks, drafts and downloads.

**Beta:** 6 tabs: Recording · Clips · Captions · Creations · Downloads · Drafts, with no counts. Post composing lives under 'Creations'.

**Impact:** 'Creations' doesn't read as 'posts', and the missing counts hide where the work is.

**Recommendation:** Align to the reference: Overview / Moments / Posts / Files, with counts. If Captions must stay, keep it as a sub-view.

- Screenshot: [Screenshot · b_detail_tab_Creations.png](../../images/img0081.webp)
- Screenshot: [Screenshot · v_detail_tab_Posts11.png](../../images/img0082.webp)

## CREATE-13 — The clip feature has three names: 'Smart Clips', 'Magic Clips' and 'AI Clips'

- Severity: **medium** · Type: Copy · Module: Project detail

**Vercel reference:** 'Moments' tab and 'AI Clips' (consistent).

**Beta:** Detail Clips tab: 'Smart Clips Analysis … Start Smart Clips Analysis'. Workflow step: 'Find the best moments · Magic Clips'. New Project menu and editor: 'AI Clips'. Editor AI Tools: 'Magic clips'.

**Impact:** Users can't tell whether these are the same feature or different paid features.

**Recommendation:** Pick one name (the reference uses AI Clips / Moments) and use it everywhere.

- Screenshot: [Screenshot · b_detail_tab_Clips.png](../../images/img0083.webp)
- Screenshot: [Screenshot · b_wf_create-clips_picked.png](../../images/img0084.webp)
- Screenshot: [Screenshot · b_ed_aitools.png](../../images/img0077.webp)

## CREATE-14 — Clips aren't there when the project opens; the user must start an analysis by hand

- Severity: **medium** · Type: Journey · Module: Project detail

**Vercel reference:** Moments are already found (12 clips scored and grouped by topic) in the Moments tab.

**Beta:** The Clips tab shows only 'Smart Clips Analysis' with a [Start Smart Clips Analysis] button (stopped before clicking; it would run an AI job).

**Impact:** It adds a manual step and a wait before the user can see any clips from their recording.

**Recommendation:** Run clip analysis automatically after a recording or upload finishes (or ask in the Overview briefing).

- Screenshot: [Screenshot · b_detail_tab_Clips.png](../../images/img0083.webp)
- Screenshot: [Screenshot · v_detail_tab_Moments.png](../../images/img0085.webp)
