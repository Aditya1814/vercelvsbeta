# Findings: high severity

17 findings. Each compares the Vercel reference with the beta.

## SHA-01 — "Choose your plan" modal pops up uninvited on first page load of every tab/session, on every page

- Severity: **high** · Type: UX · Module: App shell

**Vercel reference:** No plan prompt on load; plan chip "Essential" in header opens a small credits popover only when clicked.

**Beta:** On a fresh tab, every route (Home, Studio, Projects, Orbit, even the 404 page) opens a full "Choose your plan" checkout modal over the content (40/42 desktop routes in crawl; gated by sessionStorage key cloudreel:plan-prompt-shown, so it returns in every new tab/session). On phone it covers the whole screen.

**Impact:** A Free user opening any link in a new tab is hit with a paywall before seeing the page they asked for, which reads as pushy and hides the Home briefing.

**Recommendation:** Show the plan prompt only on an explicit upgrade trigger (credit limit, gated feature, Upgrade button), or at most once per account, never on deep links.

- Screenshot: [Screenshot · b_home_modal.png](../../images/img0003.webp)
- Screenshot: [Screenshot · b_phone_home_modal.png](../../images/img0004.webp)
- Screenshot: [Beta · desk__co_creator.png](../../images/img0005.webp)

## SHA-03 — Sign-up requires agreeing to Terms of Service that are placeholder text

- Severity: **high** · Type: Bug · Module: Auth / legal

**Vercel reference:** /terms is a full 12-section Terms of Service.

**Beta:** Sign-up step 2 has a required checkbox "I agree to the Terms of Service and Privacy Policy" linking to /terms, which reads only: "Placeholder. Sign-up links here and requires agreement, so this route must resolve — replace with the reviewed legal copy before any external launch."

**Impact:** Users are asked to legally agree to nothing; anyone who clicks the link sees an internal dev note, which damages trust at the moment of sign-up.

**Recommendation:** Publish the reviewed Terms before inviting external users; until then do not expose the beta sign-up publicly.

- Screenshot: [Screenshot · bp_signup2.png](../../images/img0006.webp)
- Screenshot: [Beta · desk__terms.png](../../images/img0007.webp)

## SHA-04 — Privacy Policy is a visible draft with unfilled [BRACKETS]

- Severity: **high** · Type: Bug · Module: Auth / legal

**Vercel reference:** /privacy is a complete 12-section policy ("Last updated: January 2026").

**Beta:** Opens with "Draft for legal review. The parts in square brackets are to be completed..." and contains 11 placeholders, e.g. "[LEGAL ENTITY]", "[REGISTERED ADDRESS]", "[PRIVACY CONTACT EMAIL]", "[GRIEVANCE OFFICER NAME + CONTACT]", "[RETENTION: account data after deletion request]".

**Impact:** A privacy policy without a legal entity or contact is not a valid notice and looks unfinished to anyone evaluating the product.

**Recommendation:** Fill the bracketed fields and remove the draft banner before external launch.

- Screenshot: [Beta · desk__privacy.png](../../images/img0008.webp)
- Screenshot: [Screenshot · bp_phone_privacy.png](../../images/img0009.webp)

## SHA-02 — Live workflow cards (Go live, Host a webinar, Host an event, Record an episode, Record a debate) all dump the user on the generic /studio list

- Severity: **high** · Type: Journey · Module: Home

**Vercel reference:** Each card opens its own guided plan at /workflow?type=<id>, e.g. Go live: "Here is what I will do. Tap anything to change it. Go live now on YouTube from my camera, with a live transcript..." with an "Open the studio" CTA; Host an event pre-fills slot, sources, lower thirds, clips.

**Beta:** All five live cards are plain links to /studio, which shows "Studio Every session you've recorded or scheduled, in one place. Schedule Record Go live" and a recordings list. The video cards (Create clips, Caption, Reach new languages, Make a podcast, Spotlight, Make it vertical) do get the guided /projects?workflow=<id> plan. /projects?workflow=go-live just shows the Video Library. Also, /projects?workflow=go-live just shows the Projects list (no go-live composer exists on beta). (Merged with LIVE-01.)

**Impact:** Five of twelve outcome cards lose the "tell it once, it runs the steps" promise and the user has to work out webinar/event/debate setup alone.

**Recommendation:** Give the live cards the same guided workflow page as the video cards (go-live, webinar, host-event, record-episode, record-debate), ending in "Open the studio".

- Screenshot: [Screenshot · b_dest__studio.png](../../images/img0010.webp)
- Screenshot: [Screenshot · b_dest__projects_workflow_go_live.png](../../images/img0011.webp)
- Screenshot: [Screenshot · v_dest__workflow_type_go_live.png](../../images/img0012.webp)

## LIVE-22 — "Broadcast a video" can only go to one destination

- Severity: **high** · Type: Missing · Module: Simulcast

**Vercel reference:** Step 2 is "Destinations" with checkboxes for every account, each showing Ready / Not ready. The subtitle reads "to one or more platforms at once."

**Beta:** Step 2 is "Destination", a single radio choice ("pavan muddala · YouTube Live"). The subtitle reads "…to a streaming platform."

**Impact:** Simulcasting to several platforms at once, the point of the module, is not possible from this flow.

**Recommendation:** Allow multi-select destinations with readiness status, as in the reference.

- Screenshot: [Screenshot · b_sim_broadcast2.png](../../images/img0013.webp)
- Screenshot: [Screenshot · v_sim_broadcast2.png](../../images/img0014.webp)

## LIVE-05 — Webinars module does not exist; "Host a webinar" on Home just opens the Studio list

- Severity: **high** · Type: Missing · Module: Webinars

**Vercel reference:** /webinars: list of webinars, "Schedule" (live webinar with registration, or on-demand webinar from a recording), "Start webinar", copy registration link, View in Analytics, and a Remy follow-up card ("8 of 10 came… Send to all 10").

**Beta:** /webinars is a 404 "Page not found". Home shows a "Host a webinar" card that links to /studio, and the Studio Schedule dialog has no registration or webinar option.

**Impact:** A use case advertised on Home (registration, polls and Q&A, follow-up) cannot be done.

**Recommendation:** Ship the Webinars list and schedule flow, or remove the Host a webinar card until it exists.

- Screenshot: [Screenshot · v_web_list.png](../../images/img0015.webp)
- Screenshot: [Screenshot · v_web_schedule.png](../../images/img0016.webp)
- Screenshot: [Beta · desk__webinars.png](../../images/img0017.webp)

## CREATE-40 — AI Twins is missing (404, not in the nav)

- Severity: **high** · Type: Missing · Module: AI Twins

**Vercel reference:** Nav 'AI Twins' → 'Your AI Twin, a talking version of you.' with New twin / Record now, used by AI Influencer and AI Dub.

**Beta:** /ai-twins → '404 Page not found'. There is no nav item.

**Impact:** A module promised in the reference doesn't exist.

**Recommendation:** Build it, or remove it from the reference and any marketing until it's planned.

- Screenshot: [Beta · desk__ai_twins.png](../../images/img0017.webp)
- Screenshot: [Vercel · desk__ai_twins.png](../../images/img0018.webp)

## CREATE-28 — Merely opening an existing project in the editor writes to the server (PUT editor-project)

- Severity: **high** · Type: Bug · Module: Editor

**Vercel reference:** n/a (mock)

**Beta:** Loading /editor?content=01a1e8f5-… with no clicks sent 'PUT /api/gateway/video/content/01a1e8f5-76cb-7461-801d-fed66e1a6c5c/editor-project', and the header showed 'All changes saved'. The URL also gained '&t=1.9'.

**Impact:** Viewing a project changes its saved state (e.g. last-modified or the saved edit), which can overwrite another collaborator's edit or confuse version history.

**Recommendation:** Only persist the editor project after a real user edit, and never on load.

- Screenshot: [Screenshot · b_ed_main.png](../../images/img0019.webp)

## CREATE-35 — Playground is image-only: video generation, templates and generation history are missing

- Severity: **high** · Type: Missing · Module: Playground

**Vercel reference:** 'Image & video' (Early): a Video/Image switch, Video options (Auto · 8s · 16:9 · Sound on · ~10 credits), prompt ideas, 'Start from a template' (Video b-roll, Show intro, Show outro, Guest card, Digital insert, Opening hook, Explain a concept, Chapter transition), and a 'Your generations' tab.

**Beta:** 'Playground' with H2 'Create images': 8 image presets (Episode thumbnail … Show logo), a prompt box with Image type / Style / Size / Variants / Brand Kit. No video generation, no templates and no generations history (verified: there is no 'Your generations' control).

**Impact:** B-roll, intros and guest cards, the headline use of this module, can't be made, and past results can't be found.

**Recommendation:** Add video generation and templates, plus a generations history, and use the 'Image & video' name.

- Screenshot: [Screenshot · b_pg_main.png](../../images/img0020.webp)
- Screenshot: [Screenshot · v_pg_main.png](../../images/img0021.webp)
- Screenshot: [Screenshot · v_pg_gens.png](../../images/img0022.webp)

## CREATE-11 — There is no Overview / Remy briefing tab, and a project opens on raw recording files

- Severity: **high** · Type: Missing · Module: Project detail

**Vercel reference:** Opens on 'Overview': a Remy (Clipper) card says 'I found 12 moments. These 3 will do best as Shorts and Reels.' with picked clips, [Looks good] / [Something else], a step tracker (Pick moments → Plan posts → Live) and 'Also on my list: 2 unfinished edits · 3 downloads'.

**Beta:** Opens on 'Recording' (player, 'Server recording · Ready', Download/Edit/Dub, Tracks, a quality emoji survey). There is no next-step guidance beyond the generic '+ Create' menu.

**Impact:** Users land on a file view and must work out the next step themselves, which loses the guided record → clip → post journey.

**Recommendation:** Add the Overview tab with the assistant briefing, built on ProjectOverview/OrbitBriefing, as the default tab.

- Screenshot: [Screenshot · b_detail_main.png](../../images/img0023.webp)
- Screenshot: [Screenshot · v_detail_main.png](../../images/img0024.webp)

## PUB-17 — Plan cannot load live events: "Studio events could not be loaded: The Studio could not do that (200)."

- Severity: **high** · Type: Bug · Module: Plan

**Vercel reference:** Calendar mixes posts and live events ("ENDED Season Kickoff", "Morning Newsroom — Live GO LIVE", "3:30 PM Partner Sync"), counts "10 events · 9h 50m".

**Beta:** Yellow banner with the error; "0 live events". POST /api/studio/v2/ProducerEvent/producerEventPlaylist returns HTTP 200 but its body is a JSON-encoded string ("{\"Data\":[...]}") rather than an object, which is likely why the client treats it as a failure (inferred). Also GET .../social/post-metrics -> 500 on this page.

**Impact:** Plan is supposed to show live shows next to posts; it shows none.

**Recommendation:** Parse the double-encoded response (or fix the API to return an object) and only show the banner on a real failure.

- Screenshot: [Beta · beta_desk_plan_month.png](../../images/img0025.webp)
- Screenshot: [Vercel · vercel_desk_plan_after_drag.png](../../images/img0026.webp)

## PUB-34 — Podcast module missing (/podcast 404)

- Severity: **high** · Type: Missing · Module: Podcast

**Vercel reference:** Podcast hosting: show card (cover, title, category, language), links to Website/Apple Podcasts/YouTube/Facebook, stats (Episodes 3, Views 9,235, Last 30 days 7,451), Remy suggestion to turn a video into "Episode 4", tabs Episodes (sort, New episode, S1·E3 rows with views) / Analytics / Distribution / Settings, plus a Video hosting tab.

**Beta:** Route 404; no nav item.

**Impact:** Podcast distribution (RSS/Apple/Spotify) is a promised publish platform with no home.

**Recommendation:** Build Podcast (episodes + distribution first) or remove it from plans/marketing.

- Screenshot: [Vercel · desk__podcast.png](../../images/img0027.webp)

## PUB-01 — Posts page fires two 500s; Best Time to Post and all view counts fail

- Severity: **high** · Type: Bug · Module: Posts

**Vercel reference:** Best Time to Post card shows per-platform peak scores ("Instagram Peak now 91 ... Best: Friday · 7:00 PM IST"); views per post (12.5K, 8.2K) and "Total reach 24K".

**Beta:** GET /api/gateway/video/social/posts?range=all&sort=published&limit=200 -> 500 and GET /api/gateway/video/social/post-metrics?post_uuids=... -> 500, both body {"error":{"code":"internal","message":"internal error"}}. UI shows "Could not read your post numbers: internal error Try again"; Views/Total views/Engagements/ENG. RATE all show "—".

**Impact:** The two things that help a creator decide what to post next (timing and performance) are empty on every visit.

**Recommendation:** Fix the social posts/post-metrics endpoints (they 500 for this workspace with 4 YouTube posts) and add a monitor for them.

- Screenshot: [Beta · beta_desk_post_tab_Posts.png](../../images/img0028.webp)
- Screenshot: [Vercel · vercel_desk_post_tab_Published.png](../../images/img0029.webp)
- Screenshot: [Beta · desk__post.png](../../images/img0030.webp)

## PUB-07 — Manage accounts lists 9 platforms with live "Add account" buttons for ones that are "Not set up on this server yet"

- Severity: **high** · Type: Bug · Module: Posts

**Vercel reference:** Manage accounts shows only YouTube, Instagram, Facebook ("3/3 connected"), with a "Login expired ... Reconnect" state.

**Beta:** Dialog shows "1/9 connected" and offers "+ Add account" on TikTok, Threads, LinkedIn and X, each labelled "Not set up on this server yet"; Snapchat/Pinterest "Coming soon". The composer says "Not available to connect yet: Threads, TikTok, Snapchat, LinkedIn, X, Pinterest".

**Impact:** Users will click Add account on platforms that cannot work and hit a dead end; the product promises platforms it does not support.

**Recommendation:** Hide unsupported platforms (or show them disabled as "Coming soon") so only YouTube/Instagram/Facebook offer Add account.

- Screenshot: [Beta · beta_desk_post_manage.png](../../images/img0031.webp)
- Screenshot: [Beta · beta_desk_post_new2.png](../../images/img0032.webp)

## PUB-25 — Six Settings tabs from the reference are missing

- Severity: **high** · Type: Missing · Module: Settings

**Vercel reference:** Tabs: Account, Workspace & Team, Billing and plans, Destinations (social + RTMP, Reconnect, Schedule Live), Sources (RTMP/SRT push/pull, stream keys), Stream Profiles (CloudReel FullHD/HD/Vertical + custom), Connected Accounts, Notifications (inbox + what to notify me about), Preferences (upload processing, metadata language/style defaults, dark mode, brand kit), Storage (3.30 GB of 25 GB, by type, largest files).

**Beta:** Tabs: Account, Workspace & Team, Connected Accounts, Connected apps, Security, Billing and plans. No Destinations, Sources, Stream Profiles, Notifications, Preferences or Storage.

**Impact:** Live producers cannot manage RTMP destinations/ingest/encoding profiles, notification preferences or storage from Settings (may exist in Simulcast/Encoders: unverified).

**Recommendation:** Add the missing tabs, or link to where each lives (e.g., Destinations -> Simulcast) so Settings is a complete map.

- Screenshot: [Beta · beta_desk_settings_Account.png](../../images/img0033.webp)
- Screenshot: [Vercel · desk__settings.png](../../images/img0034.webp)

## PUB-26 — Billing lacks invoices, payment method and cancel plan

- Severity: **high** · Type: Missing · Module: Settings

**Vercel reference:** Billing: last-30-days recap (60 clips, 3 posts, 24K views, ~25 h saved), plan with "Compare plans" and "Cancel plan", credit usage, top-up packs (500/1,500/5,000), "Payment method ... Add card", Invoices with PDFs.

**Beta:** Billing: "Your CloudReel journey at a glance" (4 videos uploaded, 0 clips), Free plan + Upgrade, "Buy credits", "Automatic recharge", Recent usage, Usage (members, storage 81.2 MB, connected accounts). No invoices, payment method or cancel.

**Impact:** Paying users cannot get invoices or cancel themselves, a trust and support-load issue.

**Recommendation:** Add Invoices, Payment method and Cancel/Change plan (or a billing-portal link).

- Screenshot: [Beta · beta_desk_settings_Billing_and_plans.png](../../images/img0035.webp)

## X-08 — Email sign-in rejected the account that was given for testing

- Severity: **high** · Type: Bug · Module: Sign in

**Vercel reference:** Reference sign-in is a mock and accepts any account.

**Beta:** POST /api/auth/signin → 401 “We could not sign you in. Check your email and password.” for chandus@cloudreel.com with the password provided (typed by hand too). Google sign-in worked, landing in “Pavan's workspace”.

**Impact:** If this account was meant to work with a password, password sign-in or the account setup is broken; testers can't get in.

**Recommendation:** Check that account in the beta database (exists? Google-only? password set?) and make the error say when an account uses Google sign-in.

- Screenshot: [Screenshot · b_login.png](../../images/img0036.webp)
