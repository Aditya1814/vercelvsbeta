window.DATA=window.DATA||{};window.DATA["findings"]=[
 {
  "id": "PUB-23",
  "sev": "critical",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Analytics",
  "area": "publish-settings",
  "title": "Analytics page is entirely an error state",
  "vercel": "Remy·Marketer summary (\"Views are up 9% this week...\"), November goal, KPIs (Views 248K, Watch time 3,410 h, Followers +1,284, Engagement 5.1%), \"Views over time\" chart with live-show markers, \"What worked\" top posts with \"More like this\", tabs Overview / Live shows / Posts / Webinars, Share report.",
  "beta": "Only \"Could not load analytics internal error Try again\"; GET /api/gateway/video/social/overview?range=30d -> 500 ({\"error\":{\"code\":\"internal\",\"message\":\"internal error\"}}); Try again repeats the 500; Export CSV is greyed.",
  "impact": "The whole Insights module is unusable.",
  "rec": "Fix /social/overview; when there is no data yet, show an empty state that explains what will appear once posts collect views.",
  "shots": [
   {
    "img": "images/img0001.webp",
    "caption": "Beta · beta_desk_analytics.png"
   },
   {
    "img": "images/img0002.webp",
    "caption": "Vercel · desk__analytics.png"
   }
  ]
 },
 {
  "id": "SHA-01",
  "sev": "high",
  "type": "ux",
  "typeLabel": "UX",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "\"Choose your plan\" modal pops up uninvited on first page load of every tab/session, on every page",
  "vercel": "No plan prompt on load; plan chip \"Essential\" in header opens a small credits popover only when clicked.",
  "beta": "On a fresh tab, every route (Home, Studio, Projects, Orbit, even the 404 page) opens a full \"Choose your plan\" checkout modal over the content (40/42 desktop routes in crawl; gated by sessionStorage key cloudreel:plan-prompt-shown, so it returns in every new tab/session). On phone it covers the whole screen.",
  "impact": "A Free user opening any link in a new tab is hit with a paywall before seeing the page they asked for, which reads as pushy and hides the Home briefing.",
  "rec": "Show the plan prompt only on an explicit upgrade trigger (credit limit, gated feature, Upgrade button), or at most once per account, never on deep links.",
  "shots": [
   {
    "img": "images/img0003.webp",
    "caption": "Screenshot · b_home_modal.png"
   },
   {
    "img": "images/img0004.webp",
    "caption": "Screenshot · b_phone_home_modal.png"
   },
   {
    "img": "images/img0005.webp",
    "caption": "Beta · desk__co_creator.png"
   }
  ]
 },
 {
  "id": "SHA-03",
  "sev": "high",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Auth / legal",
  "area": "shell-home-auth",
  "title": "Sign-up requires agreeing to Terms of Service that are placeholder text",
  "vercel": "/terms is a full 12-section Terms of Service.",
  "beta": "Sign-up step 2 has a required checkbox \"I agree to the Terms of Service and Privacy Policy\" linking to /terms, which reads only: \"Placeholder. Sign-up links here and requires agreement, so this route must resolve — replace with the reviewed legal copy before any external launch.\"",
  "impact": "Users are asked to legally agree to nothing; anyone who clicks the link sees an internal dev note, which damages trust at the moment of sign-up.",
  "rec": "Publish the reviewed Terms before inviting external users; until then do not expose the beta sign-up publicly.",
  "shots": [
   {
    "img": "images/img0006.webp",
    "caption": "Screenshot · bp_signup2.png"
   },
   {
    "img": "images/img0007.webp",
    "caption": "Beta · desk__terms.png"
   }
  ]
 },
 {
  "id": "SHA-04",
  "sev": "high",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Auth / legal",
  "area": "shell-home-auth",
  "title": "Privacy Policy is a visible draft with unfilled [BRACKETS]",
  "vercel": "/privacy is a complete 12-section policy (\"Last updated: January 2026\").",
  "beta": "Opens with \"Draft for legal review. The parts in square brackets are to be completed...\" and contains 11 placeholders, e.g. \"[LEGAL ENTITY]\", \"[REGISTERED ADDRESS]\", \"[PRIVACY CONTACT EMAIL]\", \"[GRIEVANCE OFFICER NAME + CONTACT]\", \"[RETENTION: account data after deletion request]\".",
  "impact": "A privacy policy without a legal entity or contact is not a valid notice and looks unfinished to anyone evaluating the product.",
  "rec": "Fill the bracketed fields and remove the draft banner before external launch.",
  "shots": [
   {
    "img": "images/img0008.webp",
    "caption": "Beta · desk__privacy.png"
   },
   {
    "img": "images/img0009.webp",
    "caption": "Screenshot · bp_phone_privacy.png"
   }
  ]
 },
 {
  "id": "SHA-02",
  "sev": "high",
  "type": "journey",
  "typeLabel": "Journey",
  "module": "Home",
  "area": "shell-home-auth",
  "title": "Live workflow cards (Go live, Host a webinar, Host an event, Record an episode, Record a debate) all dump the user on the generic /studio list",
  "vercel": "Each card opens its own guided plan at /workflow?type=<id>, e.g. Go live: \"Here is what I will do. Tap anything to change it. Go live now on YouTube from my camera, with a live transcript...\" with an \"Open the studio\" CTA; Host an event pre-fills slot, sources, lower thirds, clips.",
  "beta": "All five live cards are plain links to /studio, which shows \"Studio Every session you've recorded or scheduled, in one place. Schedule Record Go live\" and a recordings list. The video cards (Create clips, Caption, Reach new languages, Make a podcast, Spotlight, Make it vertical) do get the guided /projects?workflow=<id> plan. /projects?workflow=go-live just shows the Video Library. Also, /projects?workflow=go-live just shows the Projects list (no go-live composer exists on beta). (Merged with LIVE-01.)",
  "impact": "Five of twelve outcome cards lose the \"tell it once, it runs the steps\" promise and the user has to work out webinar/event/debate setup alone.",
  "rec": "Give the live cards the same guided workflow page as the video cards (go-live, webinar, host-event, record-episode, record-debate), ending in \"Open the studio\".",
  "shots": [
   {
    "img": "images/img0010.webp",
    "caption": "Screenshot · b_dest__studio.png"
   },
   {
    "img": "images/img0011.webp",
    "caption": "Screenshot · b_dest__projects_workflow_go_live.png"
   },
   {
    "img": "images/img0012.webp",
    "caption": "Screenshot · v_dest__workflow_type_go_live.png"
   }
  ]
 },
 {
  "id": "LIVE-22",
  "sev": "high",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Simulcast",
  "area": "live",
  "title": "\"Broadcast a video\" can only go to one destination",
  "vercel": "Step 2 is \"Destinations\" with checkboxes for every account, each showing Ready / Not ready. The subtitle reads \"to one or more platforms at once.\"",
  "beta": "Step 2 is \"Destination\", a single radio choice (\"pavan muddala · YouTube Live\"). The subtitle reads \"…to a streaming platform.\"",
  "impact": "Simulcasting to several platforms at once, the point of the module, is not possible from this flow.",
  "rec": "Allow multi-select destinations with readiness status, as in the reference.",
  "shots": [
   {
    "img": "images/img0013.webp",
    "caption": "Screenshot · b_sim_broadcast2.png"
   },
   {
    "img": "images/img0014.webp",
    "caption": "Screenshot · v_sim_broadcast2.png"
   }
  ]
 },
 {
  "id": "LIVE-05",
  "sev": "high",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Webinars",
  "area": "live",
  "title": "Webinars module does not exist; \"Host a webinar\" on Home just opens the Studio list",
  "vercel": "/webinars: list of webinars, \"Schedule\" (live webinar with registration, or on-demand webinar from a recording), \"Start webinar\", copy registration link, View in Analytics, and a Remy follow-up card (\"8 of 10 came… Send to all 10\").",
  "beta": "/webinars is a 404 \"Page not found\". Home shows a \"Host a webinar\" card that links to /studio, and the Studio Schedule dialog has no registration or webinar option.",
  "impact": "A use case advertised on Home (registration, polls and Q&A, follow-up) cannot be done.",
  "rec": "Ship the Webinars list and schedule flow, or remove the Host a webinar card until it exists.",
  "shots": [
   {
    "img": "images/img0015.webp",
    "caption": "Screenshot · v_web_list.png"
   },
   {
    "img": "images/img0016.webp",
    "caption": "Screenshot · v_web_schedule.png"
   },
   {
    "img": "images/img0017.webp",
    "caption": "Beta · desk__webinars.png"
   }
  ]
 },
 {
  "id": "CREATE-40",
  "sev": "high",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "AI Twins",
  "area": "create",
  "title": "AI Twins is missing (404, not in the nav)",
  "vercel": "Nav 'AI Twins' → 'Your AI Twin, a talking version of you.' with New twin / Record now, used by AI Influencer and AI Dub.",
  "beta": "/ai-twins → '404 Page not found'. There is no nav item.",
  "impact": "A module promised in the reference doesn't exist.",
  "rec": "Build it, or remove it from the reference and any marketing until it's planned.",
  "shots": [
   {
    "img": "images/img0017.webp",
    "caption": "Beta · desk__ai_twins.png"
   },
   {
    "img": "images/img0018.webp",
    "caption": "Vercel · desk__ai_twins.png"
   }
  ]
 },
 {
  "id": "CREATE-28",
  "sev": "high",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Editor",
  "area": "create",
  "title": "Merely opening an existing project in the editor writes to the server (PUT editor-project)",
  "vercel": "n/a (mock)",
  "beta": "Loading /editor?content=01a1e8f5-… with no clicks sent 'PUT /api/gateway/video/content/01a1e8f5-76cb-7461-801d-fed66e1a6c5c/editor-project', and the header showed 'All changes saved'. The URL also gained '&t=1.9'.",
  "impact": "Viewing a project changes its saved state (e.g. last-modified or the saved edit), which can overwrite another collaborator's edit or confuse version history.",
  "rec": "Only persist the editor project after a real user edit, and never on load.",
  "shots": [
   {
    "img": "images/img0019.webp",
    "caption": "Screenshot · b_ed_main.png"
   }
  ]
 },
 {
  "id": "CREATE-35",
  "sev": "high",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Playground",
  "area": "create",
  "title": "Playground is image-only: video generation, templates and generation history are missing",
  "vercel": "'Image & video' (Early): a Video/Image switch, Video options (Auto · 8s · 16:9 · Sound on · ~10 credits), prompt ideas, 'Start from a template' (Video b-roll, Show intro, Show outro, Guest card, Digital insert, Opening hook, Explain a concept, Chapter transition), and a 'Your generations' tab.",
  "beta": "'Playground' with H2 'Create images': 8 image presets (Episode thumbnail … Show logo), a prompt box with Image type / Style / Size / Variants / Brand Kit. No video generation, no templates and no generations history (verified: there is no 'Your generations' control).",
  "impact": "B-roll, intros and guest cards, the headline use of this module, can't be made, and past results can't be found.",
  "rec": "Add video generation and templates, plus a generations history, and use the 'Image & video' name.",
  "shots": [
   {
    "img": "images/img0020.webp",
    "caption": "Screenshot · b_pg_main.png"
   },
   {
    "img": "images/img0021.webp",
    "caption": "Screenshot · v_pg_main.png"
   },
   {
    "img": "images/img0022.webp",
    "caption": "Screenshot · v_pg_gens.png"
   }
  ]
 },
 {
  "id": "CREATE-11",
  "sev": "high",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Project detail",
  "area": "create",
  "title": "There is no Overview / Remy briefing tab, and a project opens on raw recording files",
  "vercel": "Opens on 'Overview': a Remy (Clipper) card says 'I found 12 moments. These 3 will do best as Shorts and Reels.' with picked clips, [Looks good] / [Something else], a step tracker (Pick moments → Plan posts → Live) and 'Also on my list: 2 unfinished edits · 3 downloads'.",
  "beta": "Opens on 'Recording' (player, 'Server recording · Ready', Download/Edit/Dub, Tracks, a quality emoji survey). There is no next-step guidance beyond the generic '+ Create' menu.",
  "impact": "Users land on a file view and must work out the next step themselves, which loses the guided record → clip → post journey.",
  "rec": "Add the Overview tab with the assistant briefing, built on ProjectOverview/OrbitBriefing, as the default tab.",
  "shots": [
   {
    "img": "images/img0023.webp",
    "caption": "Screenshot · b_detail_main.png"
   },
   {
    "img": "images/img0024.webp",
    "caption": "Screenshot · v_detail_main.png"
   }
  ]
 },
 {
  "id": "PUB-17",
  "sev": "high",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Plan",
  "area": "publish-settings",
  "title": "Plan cannot load live events: \"Studio events could not be loaded: The Studio could not do that (200).\"",
  "vercel": "Calendar mixes posts and live events (\"ENDED Season Kickoff\", \"Morning Newsroom — Live GO LIVE\", \"3:30 PM Partner Sync\"), counts \"10 events · 9h 50m\".",
  "beta": "Yellow banner with the error; \"0 live events\". POST /api/studio/v2/ProducerEvent/producerEventPlaylist returns HTTP 200 but its body is a JSON-encoded string (\"{\\\"Data\\\":[...]}\") rather than an object, which is likely why the client treats it as a failure (inferred). Also GET .../social/post-metrics -> 500 on this page.",
  "impact": "Plan is supposed to show live shows next to posts; it shows none.",
  "rec": "Parse the double-encoded response (or fix the API to return an object) and only show the banner on a real failure.",
  "shots": [
   {
    "img": "images/img0025.webp",
    "caption": "Beta · beta_desk_plan_month.png"
   },
   {
    "img": "images/img0026.webp",
    "caption": "Vercel · vercel_desk_plan_after_drag.png"
   }
  ]
 },
 {
  "id": "PUB-34",
  "sev": "high",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Podcast",
  "area": "publish-settings",
  "title": "Podcast module missing (/podcast 404)",
  "vercel": "Podcast hosting: show card (cover, title, category, language), links to Website/Apple Podcasts/YouTube/Facebook, stats (Episodes 3, Views 9,235, Last 30 days 7,451), Remy suggestion to turn a video into \"Episode 4\", tabs Episodes (sort, New episode, S1·E3 rows with views) / Analytics / Distribution / Settings, plus a Video hosting tab.",
  "beta": "Route 404; no nav item.",
  "impact": "Podcast distribution (RSS/Apple/Spotify) is a promised publish platform with no home.",
  "rec": "Build Podcast (episodes + distribution first) or remove it from plans/marketing.",
  "shots": [
   {
    "img": "images/img0027.webp",
    "caption": "Vercel · desk__podcast.png"
   }
  ]
 },
 {
  "id": "PUB-01",
  "sev": "high",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Posts page fires two 500s; Best Time to Post and all view counts fail",
  "vercel": "Best Time to Post card shows per-platform peak scores (\"Instagram Peak now 91 ... Best: Friday · 7:00 PM IST\"); views per post (12.5K, 8.2K) and \"Total reach 24K\".",
  "beta": "GET /api/gateway/video/social/posts?range=all&sort=published&limit=200 -> 500 and GET /api/gateway/video/social/post-metrics?post_uuids=... -> 500, both body {\"error\":{\"code\":\"internal\",\"message\":\"internal error\"}}. UI shows \"Could not read your post numbers: internal error Try again\"; Views/Total views/Engagements/ENG. RATE all show \"—\".",
  "impact": "The two things that help a creator decide what to post next (timing and performance) are empty on every visit.",
  "rec": "Fix the social posts/post-metrics endpoints (they 500 for this workspace with 4 YouTube posts) and add a monitor for them.",
  "shots": [
   {
    "img": "images/img0028.webp",
    "caption": "Beta · beta_desk_post_tab_Posts.png"
   },
   {
    "img": "images/img0029.webp",
    "caption": "Vercel · vercel_desk_post_tab_Published.png"
   },
   {
    "img": "images/img0030.webp",
    "caption": "Beta · desk__post.png"
   }
  ]
 },
 {
  "id": "PUB-07",
  "sev": "high",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Manage accounts lists 9 platforms with live \"Add account\" buttons for ones that are \"Not set up on this server yet\"",
  "vercel": "Manage accounts shows only YouTube, Instagram, Facebook (\"3/3 connected\"), with a \"Login expired ... Reconnect\" state.",
  "beta": "Dialog shows \"1/9 connected\" and offers \"+ Add account\" on TikTok, Threads, LinkedIn and X, each labelled \"Not set up on this server yet\"; Snapchat/Pinterest \"Coming soon\". The composer says \"Not available to connect yet: Threads, TikTok, Snapchat, LinkedIn, X, Pinterest\".",
  "impact": "Users will click Add account on platforms that cannot work and hit a dead end; the product promises platforms it does not support.",
  "rec": "Hide unsupported platforms (or show them disabled as \"Coming soon\") so only YouTube/Instagram/Facebook offer Add account.",
  "shots": [
   {
    "img": "images/img0031.webp",
    "caption": "Beta · beta_desk_post_manage.png"
   },
   {
    "img": "images/img0032.webp",
    "caption": "Beta · beta_desk_post_new2.png"
   }
  ]
 },
 {
  "id": "PUB-25",
  "sev": "high",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Settings",
  "area": "publish-settings",
  "title": "Six Settings tabs from the reference are missing",
  "vercel": "Tabs: Account, Workspace & Team, Billing and plans, Destinations (social + RTMP, Reconnect, Schedule Live), Sources (RTMP/SRT push/pull, stream keys), Stream Profiles (CloudReel FullHD/HD/Vertical + custom), Connected Accounts, Notifications (inbox + what to notify me about), Preferences (upload processing, metadata language/style defaults, dark mode, brand kit), Storage (3.30 GB of 25 GB, by type, largest files).",
  "beta": "Tabs: Account, Workspace & Team, Connected Accounts, Connected apps, Security, Billing and plans. No Destinations, Sources, Stream Profiles, Notifications, Preferences or Storage.",
  "impact": "Live producers cannot manage RTMP destinations/ingest/encoding profiles, notification preferences or storage from Settings (may exist in Simulcast/Encoders: unverified).",
  "rec": "Add the missing tabs, or link to where each lives (e.g., Destinations -> Simulcast) so Settings is a complete map.",
  "shots": [
   {
    "img": "images/img0033.webp",
    "caption": "Beta · beta_desk_settings_Account.png"
   },
   {
    "img": "images/img0034.webp",
    "caption": "Vercel · desk__settings.png"
   }
  ]
 },
 {
  "id": "PUB-26",
  "sev": "high",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Settings",
  "area": "publish-settings",
  "title": "Billing lacks invoices, payment method and cancel plan",
  "vercel": "Billing: last-30-days recap (60 clips, 3 posts, 24K views, ~25 h saved), plan with \"Compare plans\" and \"Cancel plan\", credit usage, top-up packs (500/1,500/5,000), \"Payment method ... Add card\", Invoices with PDFs.",
  "beta": "Billing: \"Your CloudReel journey at a glance\" (4 videos uploaded, 0 clips), Free plan + Upgrade, \"Buy credits\", \"Automatic recharge\", Recent usage, Usage (members, storage 81.2 MB, connected accounts). No invoices, payment method or cancel.",
  "impact": "Paying users cannot get invoices or cancel themselves, a trust and support-load issue.",
  "rec": "Add Invoices, Payment method and Cancel/Change plan (or a billing-portal link).",
  "shots": [
   {
    "img": "images/img0035.webp",
    "caption": "Beta · beta_desk_settings_Billing_and_plans.png"
   }
  ]
 },
 {
  "id": "X-08",
  "sev": "high",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Sign in",
  "area": "cross-cutting",
  "title": "Email sign-in rejected the account that was given for testing",
  "vercel": "Reference sign-in is a mock and accepts any account.",
  "beta": "POST /api/auth/signin → 401 “We could not sign you in. Check your email and password.” for chandus@cloudreel.com with the password provided (typed by hand too). Google sign-in worked, landing in “Pavan's workspace”.",
  "impact": "If this account was meant to work with a password, password sign-in or the account setup is broken; testers can't get in.",
  "rec": "Check that account in the beta database (exists? Google-only? password set?) and make the error say when an account uses Google sign-in.",
  "shots": [
   {
    "img": "images/img0036.webp",
    "caption": "Screenshot · b_login.png"
   }
  ]
 },
 {
  "id": "SHA-11",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "No cookie notice on beta",
  "vercel": "First visit shows \"We use cookies to keep you signed in and remember preferences. Privacy Got it\".",
  "beta": "No cookie banner on login or in-app in a fresh browser, while the app queues product analytics (POST /api/events, localStorage cloudreel:analytics:*) and the privacy policy has a \"Product analytics\" and \"Cookies in the app\" section.",
  "impact": "Analytics without notice may be a compliance gap depending on market.",
  "rec": "Confirm with legal whether a notice/consent is needed; if so port the reference CookieConsentBanner.",
  "shots": [
   {
    "img": "images/img0037.webp",
    "caption": "Screenshot · v_cookie.png"
   },
   {
    "img": "images/img0036.webp",
    "caption": "Screenshot · bp_desk_login.png"
   }
  ]
 },
 {
  "id": "SHA-12",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "Sidebar lacks six modules the reference has",
  "vercel": "Sidebar: Home, Projects | Cloud Producer: Studio, Encoders, Webinars, Custom Layouts, Multiviewer, Graphics | Edit: Editor, Brand Kits, Image & video, AI Twins, Voice clones | Publish: Posts, Plan, Podcast, Newsletter, Website, Simulcast | Insights: Analytics.",
  "beta": "No Webinars, Multiviewer, AI Twins, Podcast, Newsletter, Website (routes 404). Projects moved from top level into EDIT; \"Posts\" renamed \"Post\"; \"Image & video\" renamed \"Playground\".",
  "impact": "Promised modules are absent and renamed items make reference docs/help confusing.",
  "rec": "Track the missing modules explicitly; align labels (\"Posts\", \"Image & video\") or update the reference.",
  "shots": [
   {
    "img": "images/img0038.webp",
    "caption": "Screenshot · v_sidebar_expanded.png"
   },
   {
    "img": "images/img0039.webp",
    "caption": "Screenshot · b_home.png"
   }
  ]
 },
 {
  "id": "SHA-15",
  "sev": "medium",
  "type": "ux",
  "typeLabel": "UX",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "Header has no Help button and no plan/credits chip",
  "vercel": "Header: plan chip \"Essential\" -> popover \"AI tools use credits; recording and editing don't. Credits left 2640 / 3600 · Plan, usage & billing\"; \"Help\" (?) -> /co-creator?panel=help with FAQs, Help Docs, Contact support.",
  "beta": "Header: Search, \"Upgrade\" (opens full checkout modal), bell, account. Credits are only in the sidebar footer; Help is only inside the account menu (\"Help & Support\").",
  "impact": "Users can't see their balance or get help in one click from any page.",
  "rec": "Add a credits chip with popover and a Help entry in the header.",
  "shots": [
   {
    "img": "images/img0040.webp",
    "caption": "Screenshot · v_hdr_plan.png"
   },
   {
    "img": "images/img0041.webp",
    "caption": "Screenshot · v_hdr_help.png"
   },
   {
    "img": "images/img0039.webp",
    "caption": "Screenshot · b_home.png"
   }
  ]
 },
 {
  "id": "SHA-33",
  "sev": "medium",
  "type": "journey",
  "typeLabel": "Journey",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "Reference route names 404 on beta with no redirects",
  "vercel": "Routes /recordings, /video-library, /publishing-hub, /schedule, /channels, /layout-builder, /gfx-studio, /pro-video-editor exist.",
  "beta": "All return the \"404 Page not found — There is nothing at this address. Back to home\" page; only /ai-writer, /long-to-shorts, /portrait-pro redirect.",
  "impact": "Links in docs, emails or bookmarks built from the reference break.",
  "rec": "Add redirects for the renamed routes (e.g. /video-library -> /projects).",
  "shots": [
   {
    "img": "images/img0042.webp",
    "caption": "Screenshot · b_404.png"
   }
  ]
 },
 {
  "id": "SHA-23",
  "sev": "medium",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Assistant",
  "area": "shell-home-auth",
  "title": "Assistant is still \"Orbit\" everywhere on beta, with mixed identity",
  "vercel": "Named Remy: tab \"Remy · CloudReel\", \"Remy · your producer\", launcher \"Ask Remy\", \"Remy can make mistakes\".",
  "beta": "Tab \"Orbit · CloudReel\", \"Orbit · Clipper\", \"Ask Orbit\", \"Message Orbit\". The /co-creator page uses a purple blob avatar while Home and the launcher use the Remy face illustration under the Orbit name.",
  "impact": "Two names and two avatars for one assistant blur trust and recognition.",
  "rec": "Rename to Remy across UI, titles and aria labels, and use one avatar.",
  "shots": [
   {
    "img": "images/img0043.webp",
    "caption": "Screenshot · b_orbit.png"
   },
   {
    "img": "images/img0039.webp",
    "caption": "Screenshot · b_home.png"
   },
   {
    "img": "images/img0044.webp",
    "caption": "Screenshot · v_cocreator.png"
   }
  ]
 },
 {
  "id": "SHA-24",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Assistant",
  "area": "shell-home-auth",
  "title": "Assistant page has no crew roles",
  "vercel": "/co-creator sidebar lists \"REMY'S CREW: Producer Runs your show, Editor Handles editing, Clipper Finds viral moments, Marketer Grows your reach\"; role chips above the composer switch persona, placeholder and suggestions.",
  "beta": "No crew list and no role chips on /co-creator (desktop or phone), although the floating panel and Home briefing do show roles (Producer/Editor/Clipper/Marketer).",
  "impact": "Users can't pick who they are talking to on the main assistant page, inconsistent with the panel.",
  "rec": "Add the crew list and role chips to the full page, sharing the panel's component.",
  "shots": [
   {
    "img": "images/img0043.webp",
    "caption": "Screenshot · b_orbit.png"
   },
   {
    "img": "images/img0045.webp",
    "caption": "Screenshot · b_launcher_open.png"
   },
   {
    "img": "images/img0044.webp",
    "caption": "Screenshot · v_cocreator.png"
   }
  ]
 },
 {
  "id": "SHA-26",
  "sev": "medium",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Assistant",
  "area": "shell-home-auth",
  "title": "Assistant suggestions use names that do not exist in the beta nav",
  "vercel": "Suggestions: \"Go live\", \"Find my best clip\", \"Make a vertical video\", \"Plan my week\".",
  "beta": "Suggestions include \"Take me to Portrait Pro\" and \"Open my Video Library\"; the nav calls these Projects and the Home card \"Make it vertical\". Composer placeholder \"Tell me what to open or do…\" frames Orbit as a navigator.",
  "impact": "Users hear names they can't find anywhere else.",
  "rec": "Use current names (\"Open Projects\", \"Make a video vertical\").",
  "shots": [
   {
    "img": "images/img0043.webp",
    "caption": "Screenshot · b_orbit.png"
   }
  ]
 },
 {
  "id": "SHA-29",
  "sev": "medium",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Assistant",
  "area": "shell-home-auth",
  "title": "Opening the floating assistant fires a voice-session POST without any mic action",
  "vercel": "Opening the launcher panel only shows the chat.",
  "beta": "Each click on the \"Ask Orbit\" crew pill sent POST /api/gateway/assistant/api/voice/session (blocked by our read-only guard) although the mic was never pressed.",
  "impact": "Possible unnecessary voice-session creation/cost and privacy concern.",
  "rec": "Create the voice session only when the user presses the mic.",
  "shots": [
   {
    "img": "images/img0045.webp",
    "caption": "Screenshot · b_launcher_open.png"
   }
  ]
 },
 {
  "id": "SHA-07",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Auth",
  "area": "shell-home-auth",
  "title": "Only Google SSO on login and sign-up; Microsoft and GitHub are gone",
  "vercel": "Login and sign-up offer \"Continue with Google\", \"Continue with Microsoft\", \"Continue with GitHub\".",
  "beta": "Only \"Continue with Google\" (beta privacy policy itself mentions Google or Microsoft sign-in).",
  "impact": "Users on Microsoft 365 / GitHub identities must create a password account.",
  "rec": "Add Microsoft (already referenced in the privacy policy) and decide on GitHub; keep the policy in sync with what is offered.",
  "shots": [
   {
    "img": "images/img0036.webp",
    "caption": "Beta · desk__login.png"
   },
   {
    "img": "images/img0006.webp",
    "caption": "Screenshot · bp_signup2.png"
   },
   {
    "img": "images/img0046.webp",
    "caption": "Screenshot · v_onb2.png"
   }
  ]
 },
 {
  "id": "SHA-18",
  "sev": "medium",
  "type": "journey",
  "typeLabel": "Journey",
  "module": "Getting started",
  "area": "shell-home-auth",
  "title": "Getting-started checklist is clips-only and uses a different feature name",
  "vercel": "Steps: Turn a video into clips, Record or go live, Invite a guest, Post to YouTube, Instagram or Facebook (covers live + publish).",
  "beta": "Steps: \"Upload your first video\", \"Create Magic Clips\" (\"Make clips\"), \"Dub or write with AI\", \"Export from the Editor\". No live or publishing step; \"Magic Clips\" appears nowhere else (Home says \"Create clips\").",
  "impact": "New users are never guided to the Live-first core job or to publishing.",
  "rec": "Align steps with the reference (clips, live, guest, publish) and use the Home card names.",
  "shots": [
   {
    "img": "images/img0047.webp",
    "caption": "Screenshot · b_getting_started.png"
   },
   {
    "img": "images/img0048.webp",
    "caption": "Screenshot · v_getting_started.png"
   }
  ]
 },
 {
  "id": "SHA-20",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Home",
  "area": "shell-home-auth",
  "title": "\"Turn an idea into a video\" card replaced by \"Turn an idea into an image\"",
  "vercel": "\"Turn an idea into a video — A script, an AI presenter, captions and your brand — no footage needed.\" -> /workflow?type=idea-video.",
  "beta": "\"Turn an idea into an image — A thumbnail, cover art or social image from an idea\" -> /playground (no guided plan).",
  "impact": "The no-footage video outcome is gone from Home.",
  "rec": "Restore the idea-to-video workflow when AI presenter exists, or keep the image card but give it a guided plan.",
  "shots": [
   {
    "img": "images/img0039.webp",
    "caption": "Screenshot · b_home.png"
   },
   {
    "img": "images/img0049.webp",
    "caption": "Vercel · desk__.png"
   }
  ]
 },
 {
  "id": "SHA-30",
  "sev": "medium",
  "type": "responsive",
  "typeLabel": "Phone",
  "module": "Phone",
  "area": "shell-home-auth",
  "title": "Phone menu button floats at bottom-left over content instead of sitting in the header",
  "vercel": "Hamburger \"Open menu\" top-left in the header; menu drawer has a close (X) and section labels.",
  "beta": "Header has Search, Upgrade, bell, account only; the menu is a floating round button at bottom-left overlapping Home cards. The drawer has no section labels and no visible close button.",
  "impact": "The menu is hard to find and covers content; users may not know how to close the drawer.",
  "rec": "Move the menu trigger into the header and add a close button and section labels.",
  "shots": [
   {
    "img": "images/img0050.webp",
    "caption": "Screenshot · b_phone_home.png"
   },
   {
    "img": "images/img0051.webp",
    "caption": "Screenshot · b_phone_menu.png"
   },
   {
    "img": "images/img0052.webp",
    "caption": "Vercel · phone__.png"
   }
  ]
 },
 {
  "id": "SHA-05",
  "sev": "medium",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Pricing",
  "area": "shell-home-auth",
  "title": "Public /pricing page copy is weaker and inconsistent with the in-app plan modal",
  "vercel": "H1 \"Simple, credit-based pricing\", subline \"Start on the free tier — no card required\", footer \"Free accounts start with 75 credits/month\", \"Most popular\" on Growth; Growth lists \"Go live on up to 5 destinations at once\" and \"Up to 3 live shows at once per workspace\".",
  "beta": "H1 just \"Pricing\" with subline \"One plan covers every unit.\" (unclear); no free-credit amount stated (app sidebar shows \"Free 1,000 / 1,000 credits\"); \"Popular\" badge on Essential while the in-app modal marks Growth \"Recommended\"; Growth live limits replaced by \"Connect all social platforms\"; no monthly/annual toggle, only a footnote \"Yearly billing saves 17%\".",
  "impact": "Visitors can't tell what Free includes or which plan is suggested, and the two beta pricing surfaces contradict each other.",
  "rec": "Reuse the in-app plan data/copy on /pricing: state the free credits, one consistent recommended plan, and the live limits.",
  "shots": [
   {
    "img": "images/img0053.webp",
    "caption": "Beta · desk__pricing.png"
   },
   {
    "img": "images/img0054.webp",
    "caption": "Screenshot · bp_pricing_loggedin.png"
   },
   {
    "img": "images/img0055.webp",
    "caption": "Vercel · desk__pricing.png"
   }
  ]
 },
 {
  "id": "SHA-06",
  "sev": "medium",
  "type": "journey",
  "typeLabel": "Journey",
  "module": "Pricing",
  "area": "shell-home-auth",
  "title": "Signed-in user on /pricing sees \"Get started\" buttons that go to /signup and a \"Sign out\" link but no way back to the app",
  "vercel": "Pricing header has \"Sign in\" / \"Get started\"; plan buttons \"Get Lite/Essential/Growth\".",
  "beta": "When signed in, header shows the email and \"Sign out\"; all three plan buttons are \"Get started\" -> /signup; only the logo leads back.",
  "impact": "A paying-intent user lands on sign-up instead of checkout, and the most prominent header action is signing out.",
  "rec": "When a session exists, show \"Back to app\" and route plan buttons to the in-app plan modal for that plan.",
  "shots": [
   {
    "img": "images/img0054.webp",
    "caption": "Screenshot · bp_pricing_loggedin.png"
   }
  ]
 },
 {
  "id": "LIVE-07",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Async recording requests",
  "area": "live",
  "title": "Async recording requests are missing",
  "vercel": "/studio-async-requests: \"Send a link — a guest records on their own time\", list of requests (\"Fan questions for episode 12 · Accepting submissions\"), \"New recording request\", \"View submissions\". Linked from the Add video page.",
  "beta": "/studio-async-requests is a 404 and there is no entry point.",
  "impact": "Guests who cannot join live cannot be collected asynchronously.",
  "rec": "Add the async request list and create flow, or drop it from the reference scope.",
  "shots": [
   {
    "img": "images/img0056.webp",
    "caption": "Screenshot · v_async_new.png"
   },
   {
    "img": "images/img0057.webp",
    "caption": "Beta · desk__studio_async_requests.png"
   }
  ]
 },
 {
  "id": "LIVE-08",
  "sev": "medium",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Encoders",
  "area": "live",
  "title": "Encoders calls an admin endpoint that returns 404 on every load",
  "vercel": "No failed requests.",
  "beta": "Every load of /encoders (desktop and phone) sends GET /api/gateway/encoder/v1/admin/relays, which returns 404 {\"error\":\"not_found\",\"message\":\"not found\"}, and logs the console error \"Failed to load resource: the server responded with a status of 404 ()\". /encoder/v1/devices returns 200 normally.",
  "impact": "A console error on a core page, and any relay info the UI expected is silently missing.",
  "rec": "Remove the call for non-admins, or deploy/route the relays endpoint and handle 404 quietly.",
  "shots": [
   {
    "img": "images/img0058.webp",
    "caption": "Beta · desk__encoders.png"
   },
   {
    "img": "images/img0059.webp",
    "caption": "Beta · beta_desk_encoders.png"
   }
  ]
 },
 {
  "id": "LIVE-09",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Encoders",
  "area": "live",
  "title": "No \"Add a phone\" (scan a QR code for my own phone) path",
  "vercel": "\"Add a phone\" dialog: \"My phone — Scan a code with your phone and sign in. Takes a minute.\" or \"A teammate's phone — Email them an invite.\"",
  "beta": "Only \"Invite a user\" (email + Role: Editor + \"Send invitation\"). The copy says a phone appears \"the first time they go live\", and nothing helps the user connect their own phone.",
  "impact": "A solo creator has no in-product way to connect the phone in their hand.",
  "rec": "Add the Add a phone dialog with a QR code and app link for \"My phone\", and keep the invite as the second option.",
  "shots": [
   {
    "img": "images/img0060.webp",
    "caption": "Screenshot · v_enc_addphone.png"
   },
   {
    "img": "images/img0061.webp",
    "caption": "Screenshot · b_enc_invite.png"
   }
  ]
 },
 {
  "id": "LIVE-10",
  "sev": "medium",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Encoders",
  "area": "live",
  "title": "No header action on Encoders; the only CTA is inside the empty state",
  "vercel": "The header always shows \"Invite a teammate\" and a primary \"Add a phone\", plus a \"8 phones · 4 online · 2 live\" summary.",
  "beta": "The header has only a title and description. The single \"Invite a user\" button sits inside the \"No phones yet\" card; on phone it is below the fold under four stat cards.",
  "impact": "Once phones exist, or on a small screen, there is no obvious way to add another.",
  "rec": "Put \"Add a phone\" (and Invite) in the page header like the reference.",
  "shots": [
   {
    "img": "images/img0059.webp",
    "caption": "Beta · beta_desk_encoders.png"
   },
   {
    "img": "images/img0062.webp",
    "caption": "Screenshot · b_phone_encoders.png"
   },
   {
    "img": "images/img0063.webp",
    "caption": "Vercel · desk__encoders.png"
   }
  ]
 },
 {
  "id": "LIVE-11",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Encoders",
  "area": "live",
  "title": "Live cards, filters, phone drawer, history, Use in Studio and Disconnect could not be compared",
  "vercel": "Live now cards (bitrate graph, connection, battery/temperature, \"+30 min\", Share, Use in Studio, Stop), filters All / Needs attention / Live / Online / Offline, search, a phone side panel (warnings, recent streams, Rename, Disconnect, Remove phone), Stream history with per-phone filter, and Use in Studio opening the lobby with the phone as an SRT source.",
  "beta": "The workspace has 0 devices, so only the empty state shows. Tabs are \"Devices\" and \"Streams\" (Streams has Active / Ended / All and \"Nothing is streaming\"). No filter chips or search are visible in the empty state.",
  "impact": "These are the core monitoring jobs; their presence and behaviour on the beta is unknown.",
  "rec": "Test with a connected phone and check each item against the reference list.",
  "shots": [
   {
    "img": "images/img0064.webp",
    "caption": "Screenshot · v_enc_drawer.png"
   },
   {
    "img": "images/img0065.webp",
    "caption": "Screenshot · v_enc_history.png"
   },
   {
    "img": "images/img0066.webp",
    "caption": "Screenshot · v_enc_useinstudio.png"
   }
  ]
 },
 {
  "id": "LIVE-12",
  "sev": "medium",
  "type": "responsive",
  "typeLabel": "Phone",
  "module": "Encoders",
  "area": "live",
  "title": "Phone: stat cards are cramped and push the empty state and CTA off screen",
  "vercel": "Phone shows a compact header with icon actions, and live cards right away.",
  "beta": "At 390px the four stat cards sit 2x2 with the description wrapping to 5 lines (\"phones / of / members / who can / broadcast here\"); the \"Invite a user\" CTA is below the fold; the floating menu button and assistant bubble cover the empty-state text.",
  "impact": "On a phone, the page looks like empty stats with no next step.",
  "rec": "Stack the stats as one compact row or summary line on phone and keep the primary action in the header.",
  "shots": [
   {
    "img": "images/img0062.webp",
    "caption": "Screenshot · b_phone_encoders.png"
   },
   {
    "img": "images/img0067.webp",
    "caption": "Vercel · phone__encoders.png"
   }
  ]
 },
 {
  "id": "LIVE-19",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Graphics",
  "area": "live",
  "title": "Graphics editor element set differs from the reference",
  "vercel": "Sources: Top Band, Lower Band, Ticker, Breaking News, Logo Band, Location, L-Band, Clock, Date, Headlines (rotating), Side Box, Full-screen Card, Countdown.",
  "beta": "Sources: Top Band, Lower Band, Ticker, Breaking News, Logo Band, L-Band, Date / Time, U-Band, J-Band, O-Band, Aston Band, Text, Image, Box / Frame. No Location, Headlines, Side Box, Full-screen Card or Countdown.",
  "impact": "Newsroom elements in the design (rotating headlines, countdowns, quote/number cards) cannot be built.",
  "rec": "Add the missing element types, or update the reference to the beta set.",
  "shots": [
   {
    "img": "images/img0068.webp",
    "caption": "Screenshot · b_gfx_new.png"
   },
   {
    "img": "images/img0069.webp",
    "caption": "Screenshot · v_gfx_new.png"
   }
  ]
 },
 {
  "id": "LIVE-06",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Multiviewer",
  "area": "live",
  "title": "Multiviewer is missing",
  "vercel": "/multiviewer: pick an event, Auto/2/3/4 grid, PREVIEW and MASTER monitors, \"Open in Studio\", \"10 sources · updated 5s ago\".",
  "beta": "/multiviewer is a 404 and there is no sidebar entry.",
  "impact": "Teams running multi-camera events have no single place to watch every source.",
  "rec": "Build Multiviewer, or confirm it is out of scope and keep it out of plan and marketing copy.",
  "shots": [
   {
    "img": "images/img0070.webp",
    "caption": "Screenshot · v_multiviewer.png"
   },
   {
    "img": "images/img0017.webp",
    "caption": "Beta · desk__multiviewer.png"
   }
  ]
 },
 {
  "id": "LIVE-23",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Simulcast",
  "area": "live",
  "title": "Broadcast dialog has no \"Save as draft\" and no readiness status",
  "vercel": "Footer: Back · Save as draft · Schedule · Go live. Each destination shows \"Ready\" or \"Not ready\".",
  "beta": "Footer: Back · Go live, with a \"Now / Schedule for later\" toggle above. Accounts show no health status, and a delete (trash) icon sits on the connected account inside the picker.",
  "impact": "Users cannot park a broadcast, cannot see a broken account before going live, and can delete an account by mistake mid-flow.",
  "rec": "Add Save as draft and per-destination status; move account deletion out of the picker.",
  "shots": [
   {
    "img": "images/img0013.webp",
    "caption": "Screenshot · b_sim_broadcast2.png"
   },
   {
    "img": "images/img0014.webp",
    "caption": "Screenshot · v_sim_broadcast2.png"
   }
  ]
 },
 {
  "id": "LIVE-24",
  "sev": "medium",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Simulcast",
  "area": "live",
  "title": "Broadcast offers TikTok LIVE and LinkedIn Live, which the reference does not",
  "vercel": "Add a destination options are YouTube, Facebook, Instagram, Twitch and Custom RTMP.",
  "beta": "The list adds \"Add TikTok LIVE\" and \"Add LinkedIn Live\". The studio \"Connect another\" row lists only YouTube, Facebook, Instagram, Twitch and Custom RTMP.",
  "impact": "Inconsistent platform promises between Simulcast and Studio, and possibly ones the backend cannot keep.",
  "rec": "Confirm TikTok and LinkedIn are supported end to end; if not, remove them; if so, add them to Studio too.",
  "shots": [
   {
    "img": "images/img0013.webp",
    "caption": "Screenshot · b_sim_broadcast2.png"
   },
   {
    "img": "images/img0071.webp",
    "caption": "Screenshot · b_gl_step2_details.png"
   }
  ]
 },
 {
  "id": "LIVE-03",
  "sev": "medium",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Studio list",
  "area": "live",
  "title": "\"Go live\" and \"Record\" open the studio in a new browser tab",
  "vercel": "Go live / Record open the lobby in the same tab (/studio-session?id=…&fresh=1&intent=go-live).",
  "beta": "Both buttons first call GET /api/gateway/studio/v1/events/go-live-window, then open a second tab at /studio?open=session&intent=go-live&sessionTab=1; the original tab stays on the list with no feedback.",
  "impact": "Two CloudReel tabs, and the back arrow in the lobby does not return to the list the user came from.",
  "rec": "Open the lobby in the same tab, or at least say in the original tab that the studio opened in a new tab.",
  "shots": [
   {
    "img": "images/img0072.webp",
    "caption": "Screenshot · b_newtab_Go_live.png"
   },
   {
    "img": "images/img0073.webp",
    "caption": "Screenshot · v_sl_1_source.png"
   }
  ]
 },
 {
  "id": "CREATE-41",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "AI Clips / AI Dub / Portrait Pro",
  "area": "create",
  "title": "Standalone tool pages are gone: /ai-clips and /ai-dub 404, and /portrait-pro has no job list",
  "vercel": "/ai-clips lists every video with its clip count ('Family Drama — Shorts 12 clips' …). /ai-dub has a Remy suggestion ('I'd dub it into Hindi and English') and upload/library pickers. /portrait-pro shows '1 job is waiting for review' with Open project / Download.",
  "beta": "/ai-clips and /ai-dub → '404 Page not found'. /portrait-pro and /long-to-shorts redirect to the Make it vertical / Create clips composers. /ai-writer → the Write composer. There is no cross-project view of clips, dubs or reframe jobs.",
  "impact": "Old links break, and users can't see all clips or pending reframe jobs in one place.",
  "rec": "Redirect /ai-clips and /ai-dub to the matching composers (as /portrait-pro already does), and add a cross-project 'clips / jobs waiting for review' view.",
  "shots": [
   {
    "img": "images/img0017.webp",
    "caption": "Beta · desk__ai_clips.png"
   },
   {
    "img": "images/img0017.webp",
    "caption": "Beta · desk__ai_dub.png"
   },
   {
    "img": "images/img0074.webp",
    "caption": "Vercel · desk__ai_clips.png"
   }
  ]
 },
 {
  "id": "CREATE-39",
  "sev": "medium",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Brand Kits",
  "area": "create",
  "title": "'Add new' brand kit opens a create form on the Free plan, while pricing says custom kits are a Growth feature",
  "vercel": "On a non-Growth plan, 'Add new' opens 'Compare plans … More than one brand kit needs the Growth plan.'",
  "beta": "On Free, 'Add new' opens the 'New brand kit' dialog ('Your default kit stays the same … Cancel / Create'). The auto-shown plan dialog lists 'Custom brand kit (logos, fonts & outros)' under Growth. Cancelled, so whether Create is blocked is unverified.",
  "impact": "Either users hit a wall after filling the form, or plan limits aren't enforced. Both are confusing.",
  "rec": "Check the plan before showing the form, and explain the limit the way the reference does.",
  "shots": [
   {
    "img": "images/img0075.webp",
    "caption": "Screenshot · b_bk_add.png"
   },
   {
    "img": "images/img0076.webp",
    "caption": "Screenshot · v_bk_add.png"
   }
  ]
 },
 {
  "id": "CREATE-29",
  "sev": "medium",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Editor",
  "area": "create",
  "title": "Opening the AI Tools and Orbit panels fires POST requests with no Run click",
  "vercel": "n/a",
  "beta": "Clicking the 'AI Tools' rail button sent 'POST /api/gateway/video/content/01a1e49e-…/jobs/eye-contact'. Clicking 'Orbit' sent 'POST /api/gateway/assistant/api/voice/session'. Credits stayed at 1,000 / 1,000 afterwards. Whether a job was created is unverified.",
  "impact": "Panel browsing may start jobs or voice sessions the user never asked for, which is a cost and trust risk.",
  "rec": "Make opening a panel read-only (use GET for status) and start jobs or voice sessions only on an explicit Run or mic action.",
  "shots": [
   {
    "img": "images/img0077.webp",
    "caption": "Screenshot · b_ed_aitools.png"
   },
   {
    "img": "images/img0078.webp",
    "caption": "Screenshot · b_ed_orbit.png"
   }
  ]
 },
 {
  "id": "CREATE-30",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Editor",
  "area": "create",
  "title": "The editor header has no Post button",
  "vercel": "Header: … Save Template · [Post] · [Download ▾].",
  "beta": "Header: … Save Template · Help · [Download ▾]. There is no way to post from the editor.",
  "impact": "Users must leave the editor and find Post or Creations to publish what they just edited.",
  "rec": "Add a Post action that opens the post composer for this edit.",
  "shots": [
   {
    "img": "images/img0079.webp",
    "caption": "Screenshot · b_ed_main2.png"
   },
   {
    "img": "images/img0080.webp",
    "caption": "Screenshot · v_ed_main.png"
   }
  ]
 },
 {
  "id": "CREATE-12",
  "sev": "medium",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Project detail",
  "area": "create",
  "title": "The tabs are split six ways with unclear names ('Creations' for posts)",
  "vercel": "4 tabs: Overview · Moments · Posts (11) · Files (3). Files holds the recording, speaker tracks, drafts and downloads.",
  "beta": "6 tabs: Recording · Clips · Captions · Creations · Downloads · Drafts, with no counts. Post composing lives under 'Creations'.",
  "impact": "'Creations' doesn't read as 'posts', and the missing counts hide where the work is.",
  "rec": "Align to the reference: Overview / Moments / Posts / Files, with counts. If Captions must stay, keep it as a sub-view.",
  "shots": [
   {
    "img": "images/img0081.webp",
    "caption": "Screenshot · b_detail_tab_Creations.png"
   },
   {
    "img": "images/img0082.webp",
    "caption": "Screenshot · v_detail_tab_Posts11.png"
   }
  ]
 },
 {
  "id": "CREATE-13",
  "sev": "medium",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Project detail",
  "area": "create",
  "title": "The clip feature has three names: 'Smart Clips', 'Magic Clips' and 'AI Clips'",
  "vercel": "'Moments' tab and 'AI Clips' (consistent).",
  "beta": "Detail Clips tab: 'Smart Clips Analysis … Start Smart Clips Analysis'. Workflow step: 'Find the best moments · Magic Clips'. New Project menu and editor: 'AI Clips'. Editor AI Tools: 'Magic clips'.",
  "impact": "Users can't tell whether these are the same feature or different paid features.",
  "rec": "Pick one name (the reference uses AI Clips / Moments) and use it everywhere.",
  "shots": [
   {
    "img": "images/img0083.webp",
    "caption": "Screenshot · b_detail_tab_Clips.png"
   },
   {
    "img": "images/img0084.webp",
    "caption": "Screenshot · b_wf_create-clips_picked.png"
   },
   {
    "img": "images/img0077.webp",
    "caption": "Screenshot · b_ed_aitools.png"
   }
  ]
 },
 {
  "id": "CREATE-14",
  "sev": "medium",
  "type": "journey",
  "typeLabel": "Journey",
  "module": "Project detail",
  "area": "create",
  "title": "Clips aren't there when the project opens; the user must start an analysis by hand",
  "vercel": "Moments are already found (12 clips scored and grouped by topic) in the Moments tab.",
  "beta": "The Clips tab shows only 'Smart Clips Analysis' with a [Start Smart Clips Analysis] button (stopped before clicking; it would run an AI job).",
  "impact": "It adds a manual step and a wait before the user can see any clips from their recording.",
  "rec": "Run clip analysis automatically after a recording or upload finishes (or ask in the Overview briefing).",
  "shots": [
   {
    "img": "images/img0083.webp",
    "caption": "Screenshot · b_detail_tab_Clips.png"
   },
   {
    "img": "images/img0085.webp",
    "caption": "Screenshot · v_detail_tab_Moments.png"
   }
  ]
 },
 {
  "id": "CREATE-16",
  "sev": "medium",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Project detail",
  "area": "create",
  "title": "The post composer lists 8 platforms, including TikTok, LinkedIn, X, Threads and Snapchat, which the reference doesn't support",
  "vercel": "Posts tab: YouTube ✓, Instagram !, Facebook ✓ ('2 of 3 posts ready'). The product supports YouTube/Instagram/Facebook (plus Twitch live and podcast RSS), with no TikTok, LinkedIn or X.",
  "beta": "Creations tab: YouTube ✓, Instagram !, TikTok !, LinkedIn !, Facebook !, X !, Threads !, Snapchat !, showing '1 of 8 posts ready'. The Create menu also says 'reframed for Reels, Shorts and TikTok', and the Make a podcast composer writes a 'LinkedIn post'.",
  "impact": "Users get '1 of 8 ready' progress against platforms they may not be able to connect, which hurts trust and contradicts the website and pricing.",
  "rec": "Limit the list to platforms that can actually be connected, or confirm they are supported and update the reference and website to match. Whether they can be connected on beta is unverified.",
  "shots": [
   {
    "img": "images/img0081.webp",
    "caption": "Screenshot · b_detail_tab_Creations.png"
   },
   {
    "img": "images/img0086.webp",
    "caption": "Screenshot · b_detail_createmenu.png"
   }
  ]
 },
 {
  "id": "CREATE-02",
  "sev": "medium",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Projects",
  "area": "create",
  "title": "The page heading says 'Video Library', but the nav item and the reference both say 'Projects'",
  "vercel": "H1 'Projects', and the nav item is 'Projects'.",
  "beta": "Nav item 'Projects', page H1 'Video Library', list heading 'Projects (4)'.",
  "impact": "Two names for the same place makes users unsure they landed where they clicked.",
  "rec": "Rename the H1 to 'Projects'.",
  "shots": [
   {
    "img": "images/img0087.webp",
    "caption": "Screenshot · b_proj_main.png"
   },
   {
    "img": "images/img0088.webp",
    "caption": "Vercel · desk__video_library.png"
   }
  ]
 },
 {
  "id": "CREATE-03",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Projects",
  "area": "create",
  "title": "Project cards don't show which workflow made them",
  "vercel": "Card meta: 'Uploaded 2h ago · Shorts' / '· Reframe' / '· Dub' / '· Captions' / '· Writer', with the type shown as coloured text.",
  "beta": "Card meta: 'Uploaded 6d ago · 51.7 MB'. There is no type label, so cards with the same auto name ('Session - 11/17/2026 · 17 Nov 2026' twice, 'test-clip' twice) can't be told apart.",
  "impact": "Users can't scan the library for the output they want, such as their dub or their shorts.",
  "rec": "Show the workflow/output type as meta text beside the date, as the reference does, and keep size in the detail view.",
  "shots": [
   {
    "img": "images/img0087.webp",
    "caption": "Screenshot · b_proj_main.png"
   },
   {
    "img": "images/img0088.webp",
    "caption": "Vercel · desk__video_library.png"
   }
  ]
 },
 {
  "id": "CREATE-04",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Projects",
  "area": "create",
  "title": "The status filter ('All videos': Not yet published / No captions yet / Failed analysis / Flagged content) is missing",
  "vercel": "The filter row has Newest · All types · All duration · Favorites · Archived · All videos ▾ (Not yet published, No captions yet, Failed analysis, Flagged content).",
  "beta": "The filter row has Newest · All media · Source · All duration · Favorites · Archived · Bin. There is no way to filter by publish, caption or analysis status.",
  "impact": "Users can't find what still needs work, such as videos that failed or aren't published yet.",
  "rec": "Add the status filter, backed by real job and publish status.",
  "shots": [
   {
    "img": "images/img0089.webp",
    "caption": "Screenshot · v_proj_f_Allvideos.png"
   },
   {
    "img": "images/img0087.webp",
    "caption": "Screenshot · b_proj_main.png"
   }
  ]
 },
 {
  "id": "CREATE-09",
  "sev": "medium",
  "type": "accessibility",
  "typeLabel": "Accessibility",
  "module": "Projects",
  "area": "create",
  "title": "On phone, the New Folder and New Project buttons are icons with no accessible name",
  "vercel": "Desktop labels: 'New Folder' / 'New Project'.",
  "beta": "At 390px both collapse to icon-only buttons (folder icon, '+ ▾'). Neither appears in the list of named controls, and the crawl counted 2 unnamed controls on /projects (phone).",
  "impact": "Screen-reader users on phone can't find the two main create actions.",
  "rec": "Add aria-label='New folder' / 'New project' to the icon-only variants.",
  "shots": [
   {
    "img": "images/img0090.webp",
    "caption": "Screenshot · b_ph_projects.png"
   },
   {
    "img": "images/img0091.webp",
    "caption": "Beta · phone__projects.png"
   }
  ]
 },
 {
  "id": "CREATE-37",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Voice clones",
  "area": "create",
  "title": "Can't clone someone else's voice ('Coming soon')",
  "vercel": "Create voice clone ▸ 'Someone else's voice · Growth · With a consent recording from them · You'll need: their consent recording, then 30 seconds to 2 minutes of them talking.' The page says 'Clone a co-host's voice with their consent recording.'",
  "beta": "The same dialog (with Whose / Recording / Finish steps) shows 'Someone else's voice … Coming soon. For now you can clone only your own voice.' The page copy changed to 'You read a short phrase aloud, so only you can clone your voice.' Stopped before any recording.",
  "impact": "Shows with co-hosts can't dub every speaker in their own voice, which the AI Dub copy ('each speaker's own voice') still promises.",
  "rec": "Ship consent-based co-host cloning, or remove 'each speaker's own voice' from Reach new languages until it ships.",
  "shots": [
   {
    "img": "images/img0092.webp",
    "caption": "Screenshot · b_vc_new.png"
   },
   {
    "img": "images/img0093.webp",
    "caption": "Screenshot · v_vc_new.png"
   },
   {
    "img": "images/img0094.webp",
    "caption": "Screenshot · b_wf_go-global_picked.png"
   }
  ]
 },
 {
  "id": "CREATE-19",
  "sev": "medium",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Workflows",
  "area": "create",
  "title": "Composers hide the cost and time until a video is picked, and never show a time estimate",
  "vercel": "Before picking a video: '7 steps · 75 credits · about 10 minutes' (create-clips), '3 steps · 15 credits', '6 steps · 125 credits', and so on.",
  "beta": "Before picking: '5 steps · priced once uploaded'. After picking: '5 steps · about 5 credits' (create-clips), '4 steps · about 224 credits' (go-global on a 1:28 video). No duration estimate at any point.",
  "impact": "Users can't judge cost or wait time before committing a video, and the price can jump (go-global went to 224 credits).",
  "rec": "Show an estimate per minute up front (e.g. 'about 3 credits/min') and an 'about N minutes' estimate once a video is chosen.",
  "shots": [
   {
    "img": "images/img0095.webp",
    "caption": "Screenshot · b_wf_create-clips.png"
   },
   {
    "img": "images/img0094.webp",
    "caption": "Screenshot · b_wf_go-global_picked.png"
   },
   {
    "img": "images/img0096.webp",
    "caption": "Screenshot · v_wf_create-clips.png"
   }
  ]
 },
 {
  "id": "CREATE-20",
  "sev": "medium",
  "type": "journey",
  "typeLabel": "Journey",
  "module": "Workflows",
  "area": "create",
  "title": "Workflows end with 'open Plan to post it' instead of 'send them for my approval'",
  "vercel": "Final clause: 'Then send them for my approval on YouTube and Instagram'. The Publish step is 'Post · YouTube, Instagram · Send for my approval'. After the run: 'Done. Clips … are ready. Review them now?'",
  "beta": "Final clause: 'Then open Plan to post it on YouTube and Instagram'. The last step is 'Open Plan to publish · Plan'.",
  "impact": "The hands-off approval loop the reference promises becomes a manual hand-off to another page.",
  "rec": "Add the approval step (drafts queued for approval on the chosen platforms), or say clearly that the user will schedule in Plan.",
  "shots": [
   {
    "img": "images/img0084.webp",
    "caption": "Screenshot · b_wf_create-clips_picked.png"
   },
   {
    "img": "images/img0097.webp",
    "caption": "Screenshot · v_walk_later.png"
   }
  ]
 },
 {
  "id": "CREATE-21",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Workflows",
  "area": "create",
  "title": "Create clips and Make it vertical drop the Brand Kit step and the 'Anything specific?' prompt",
  "vercel": "Create clips: '… add word-highlight captions and add my Brand Kit', with steps including 'Apply Brand Kit · Logo, Colours and fonts' (7 steps). It also has 'Anything specific? (optional)' and 'Length' fields. Make it vertical: '… with word-highlight captions and my Brand Kit'.",
  "beta": "Create clips: 5 steps (Transcribe, Find moments, Follow the speaker, Write titles, Open Plan) with no Brand Kit and no free-text 'anything specific' field. Make it vertical: 4 steps, no Brand Kit.",
  "impact": "Clips come out off-brand, and users can't steer which moments are picked.",
  "rec": "Add the Brand Kit option/step and the optional 'Anything specific?' prompt to these composers.",
  "shots": [
   {
    "img": "images/img0084.webp",
    "caption": "Screenshot · b_wf_create-clips_picked.png"
   },
   {
    "img": "images/img0098.webp",
    "caption": "Screenshot · b_wf_go-vertical_picked.png"
   },
   {
    "img": "images/img0096.webp",
    "caption": "Screenshot · v_wf_create-clips.png"
   }
  ]
 },
 {
  "id": "CREATE-22",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Workflows",
  "area": "create",
  "title": "Caption a video has no output choice (burned in and/or .srt) and only 1 step",
  "vercel": "'Caption your video … as burned into the video and .srt file.' (3 steps · 15 credits).",
  "beta": "'Caption … in word colour change style, in the original language only.' (1 step: 'Transcribe word by word'). There is no output-format choice. It adds 'Label each speaker'.",
  "impact": "Users don't know whether they'll get a burned-in video, a subtitle file, or both.",
  "rec": "Add the output chooser (Burned in / .srt / .vtt) and the matching steps.",
  "shots": [
   {
    "img": "images/img0099.webp",
    "caption": "Screenshot · b_wf_caption_picked.png"
   },
   {
    "img": "images/img0100.webp",
    "caption": "Screenshot · v_wf_caption.png"
   }
  ]
 },
 {
  "id": "CREATE-23",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Workflows",
  "area": "create",
  "title": "Make a podcast is missing audio cleanup, intro/outro music, chapters and audiograms",
  "vercel": "'… clean, levelled audio, intro and outro music and chapters. Write show notes, transcript and instagram caption, make 5 audiograms with word-highlight captions, then send it for my approval on YouTube.' (8 steps · 85 credits)",
  "beta": "'find the silences and filler words to cut, write show notes with chapters, summary and LinkedIn post and make up to 5 short clips. Then open Plan …' (5 steps). There is no audio levelling, no intro/outro music and no audiograms.",
  "impact": "The podcast output is missing the parts that make it publishable as an episode.",
  "rec": "Add audio levelling, intro/outro (from the Brand Kit) and audiogram steps, and replace the LinkedIn post with a supported platform.",
  "shots": [
   {
    "img": "images/img0101.webp",
    "caption": "Screenshot · b_wf_make-podcast_picked.png"
   },
   {
    "img": "images/img0102.webp",
    "caption": "Screenshot · v_wf_make-podcast.png"
   }
  ]
 },
 {
  "id": "CREATE-24",
  "sev": "medium",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Workflows",
  "area": "create",
  "title": "Spotlight each speaker starts with an unfilled 'pick a shape' blank, so Start stays disabled",
  "vercel": "'make 3 clips of each … as vertical clips locked on the speaker'. The shape defaults to vertical, and it finds 'every speaker'.",
  "beta": "'find 2 speakers and make 3 clips of each … as pick a shape clips locked on the speaker'. Under the steps: 'Pick a shape for the clips.' Start workflow is disabled after a video is picked (verified: enabled=false). The speaker count is fixed at 2.",
  "impact": "The sentence reads as broken and the main action looks dead until the user finds the blank.",
  "rec": "Default the shape to vertical 9:16 and the speaker count to auto-detect.",
  "shots": [
   {
    "img": "images/img0103.webp",
    "caption": "Screenshot · b_wf_speaker-clips_picked.png"
   },
   {
    "img": "images/img0104.webp",
    "caption": "Screenshot · v_wf_speaker-clips.png"
   }
  ]
 },
 {
  "id": "CREATE-25",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Workflows",
  "area": "create",
  "title": "The 'Turn an idea into a video' workflow is missing, and unknown workflow links silently show the library",
  "vercel": "The workflow set includes idea-video ('Turn an idea into a video'), alongside go-live, record-episode, webinar, host-event and record-debate. An unknown id shows 'Unknown workflow. Go home'.",
  "beta": "/projects?workflow=idea-video and /projects?workflow=nonsense both just render the Video Library with no message.",
  "impact": "Shared or old links fail silently, and a reference workflow is unavailable.",
  "rec": "Add idea-video, or show a 'This workflow isn't available' notice with a link Home.",
  "shots": [
   {
    "img": "images/img0105.webp",
    "caption": "Screenshot · b_up__projects_workflow_idea_video.png"
   }
  ]
 },
 {
  "id": "PUB-24",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Analytics",
  "area": "publish-settings",
  "title": "No Share report, no section tabs (Overview/Live shows/Posts/Webinars)",
  "vercel": "Header: \"Share report\", 7d/30d/90d; section tabs Overview, Live shows, Posts, Webinars.",
  "beta": "Header: Back, \"Export CSV\" (disabled), 7d/30d/90d. No Share report; section tabs not shown (could be hidden by the error state).",
  "impact": "No way to share results with a team or client.",
  "rec": "Add Share report and the section tabs once data loads.",
  "shots": [
   {
    "img": "images/img0001.webp",
    "caption": "Beta · beta_desk_analytics.png"
   }
  ]
 },
 {
  "id": "PUB-37",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Events & Logs",
  "area": "publish-settings",
  "title": "Events & Logs (activity/audit log) missing (/events-logs 404)",
  "vercel": "Totals (37 events, 9 today, 8 alerts, 2 security), search, Today/7 days/30 days/All, status filter (Success/Info/Warning/Error), category filters (Publishing, Library, AI Processing, Clips, Automation, Account, System, Security, Retention, Exports, Collaboration), timeline with actor and time, Export CSV, Refresh.",
  "beta": "Route 404. Partial substitutes: post detail \"Activity\" and Settings > Security device list.",
  "impact": "Teams cannot audit who published/deleted what or why a publish failed.",
  "rec": "Add at least a publishing + security log; reuse the post activity data.",
  "shots": [
   {
    "img": "images/img0106.webp",
    "caption": "Vercel · desk__events_logs.png"
   }
  ]
 },
 {
  "id": "PUB-35",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Newsletter",
  "area": "publish-settings",
  "title": "Newsletter module missing (/newsletter 404)",
  "vercel": "Newsletter \"Family Drama Weekly\": stats (2,429 subscribers, last 7 days 42, today 7, top country India, open rate 50.7%, \"Sample numbers until sending is connected\"), tabs Posts / Subscribers / Settings, sent issues with opens/clicks, \"Create post\".",
  "beta": "Route 404; no nav item.",
  "impact": "No way to reach an audience by email from CloudReel.",
  "rec": "Decide if Newsletter is in scope for launch; if yes build Posts + Subscribers.",
  "shots": [
   {
    "img": "images/img0107.webp",
    "caption": "Vercel · desk__newsletter.png"
   }
  ]
 },
 {
  "id": "PUB-18",
  "sev": "medium",
  "type": "performance",
  "typeLabel": "Speed",
  "module": "Plan",
  "area": "publish-settings",
  "title": "Plan takes 3.4-5.3 s to settle",
  "vercel": "~3.7 s on Vercel (mock, similar).",
  "beta": "Measured 3.4 s (crawl), 4.5 s, 5.1 s and 5.3 s to network idle; the page waits on POST /api/studio-session then 4 sequential producerEventPlaylist calls before rendering events.",
  "impact": "Calendar feels slow every time it is opened.",
  "rec": "Fetch posts and events in parallel and render posts first; cache the studio session.",
  "shots": [
   {
    "img": "images/img0108.webp",
    "caption": "Beta · desk__plan.png"
   }
  ]
 },
 {
  "id": "PUB-19",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Plan",
  "area": "publish-settings",
  "title": "No drag-to-reschedule on the calendar",
  "vercel": "Footer hint \"Drag a post onto another day to reschedule it. The time stays the same.\"; dragging a post to Sat Nov 28 shows toast \"Moved to Sat, Nov 28\".",
  "beta": "No drag hint; 0 elements with draggable=true. Could not test with real data because the workspace has no future scheduled posts (and moving one would write).",
  "impact": "Rescheduling means opening each post instead of a quick drag.",
  "rec": "Add drag-to-reschedule for scheduled (future) posts with an undo toast.",
  "shots": [
   {
    "img": "images/img0026.webp",
    "caption": "Vercel · vercel_desk_plan_after_drag.png"
   },
   {
    "img": "images/img0025.webp",
    "caption": "Beta · beta_desk_plan_month.png"
   }
  ]
 },
 {
  "id": "PUB-21",
  "sev": "medium",
  "type": "responsive",
  "typeLabel": "Phone",
  "module": "Plan",
  "area": "publish-settings",
  "title": "Phone month grid: platform icons spill out of day cells, 24px tap targets",
  "vercel": "Phone month uses small coloured dots per item plus the legend and drag hint.",
  "beta": "Full YouTube icons are stacked in 50px cells and overflow (an element ends at x=413 on a 390 viewport); day buttons are 24x24 px (52 controls under 32px).",
  "impact": "Items are hard to read and tap on a phone.",
  "rec": "Use dots (as the reference) or a list/agenda view on phone and make day cells at least 44px targets.",
  "shots": [
   {
    "img": "images/img0109.webp",
    "caption": "Beta · beta_phone_ph_plan.png"
   },
   {
    "img": "images/img0110.webp",
    "caption": "Vercel · vercel_phone_ph_plan.png"
   }
  ]
 },
 {
  "id": "PUB-02",
  "sev": "medium",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Post details dialog: numbers fail to load (500)",
  "vercel": "Post detail shows the post with \"Posted to\", caption, \"Open project\", \"View on platform\".",
  "beta": "Detail opens (good) but shows \"Could not load this post’s numbers: internal error\"; GET /api/gateway/video/social/posts/<uuid>/metrics?range=90d -> 500.",
  "impact": "User cannot see how a single post performed.",
  "rec": "Fix the per-post metrics endpoint and replace the raw \"internal error\" with a human message.",
  "shots": [
   {
    "img": "images/img0111.webp",
    "caption": "Beta · beta_desk_post_row.png"
   }
  ]
 },
 {
  "id": "PUB-03",
  "sev": "medium",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Raw backend text \"internal error\" shown to users",
  "vercel": "Errors are not shown in the reference (mock), states are written for people.",
  "beta": "Error copy is the raw server string: \"Could not read your post numbers: internal error\", \"Could not load analytics internal error\", \"Studio events could not be loaded: The Studio could not do that (200).\"",
  "impact": "Users get no idea what happened or what to do; \"(200)\" reads like a success code inside a failure.",
  "rec": "Map backend errors to plain messages (\"We couldn’t load your post stats. Try again in a minute.\") and log the detail instead.",
  "shots": [
   {
    "img": "images/img0001.webp",
    "caption": "Beta · beta_desk_analytics.png"
   },
   {
    "img": "images/img0025.webp",
    "caption": "Beta · beta_desk_plan_month.png"
   }
  ]
 },
 {
  "id": "PUB-04",
  "sev": "medium",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Each post is listed twice with identical labels (one per YouTube channel)",
  "vercel": "Recently published rows name the platform per row (\"Family Drama — Shorts YouTube · Nov 23\" / \"... Instagram · Nov 23\").",
  "beta": "Queue > Recently published shows \"Session - 11/17/2026 · 17 Nov 2026 YouTube · 17/11/2026\" twice and \"CloudReel beta test clip YouTube · 16/11/2026\" twice; the two connected YouTube accounts (Pavan M, pavan muddala) are not named on the rows. Same duplication on Plan calendar chips.",
  "impact": "Looks like a double-publish bug; user cannot tell which channel each row is.",
  "rec": "Show the account/channel name on each row (or group one video with its channel badges like the Posts tab table does).",
  "shots": [
   {
    "img": "images/img0112.webp",
    "caption": "Beta · beta_phone_ph_post.png"
   },
   {
    "img": "images/img0025.webp",
    "caption": "Beta · beta_desk_plan_month.png"
   }
  ]
 },
 {
  "id": "PUB-05",
  "sev": "medium",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Post counts disagree across the same page",
  "vercel": "\"This Month: Posts published 3\" matches \"Published 2\" videos across 2 platforms consistently with the rows.",
  "beta": "\"This Month: Posts published 4\" while the Posts tab says \"2 Videos published\" and \"Published 2\"; header pill \"1 platform live\".",
  "impact": "Conflicting numbers on one screen erode trust in the stats.",
  "rec": "Define one unit (post per channel vs video) and label each number accordingly (\"4 posts across 2 videos\").",
  "shots": [
   {
    "img": "images/img0028.webp",
    "caption": "Beta · beta_desk_post_tab_Posts.png"
   }
  ]
 },
 {
  "id": "PUB-06",
  "sev": "medium",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Naming: nav \"Post\", page \"Posts\", tab \"Posts\"",
  "vercel": "Nav \"Posts\", page \"Posts\", tabs \"Queue / Approvals / Published\".",
  "beta": "Sidebar says \"Post\", page H1 \"Posts\", and the third tab is also \"Posts\" (Vercel: \"Published\").",
  "impact": "A tab with the same name as its page does not say what it contains.",
  "rec": "Rename the tab to \"Published\" (it has Published/Scheduled/Failed/Sent for approval sub-tabs) and the nav item to \"Posts\".",
  "shots": [
   {
    "img": "images/img0028.webp",
    "caption": "Beta · beta_desk_post_tab_Posts.png"
   }
  ]
 },
 {
  "id": "PUB-08",
  "sev": "medium",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Connected-account count differs in four places",
  "vercel": "One count everywhere (\"3 platforms live\", \"3/3 connected\").",
  "beta": "Header \"1 platform live\"; Manage accounts \"1/9 connected\"; Settings > Connected Accounts \"1 / 4 connected\" (YouTube, Facebook, Instagram, Threads); Billing > Usage \"Connected accounts 2 connected\".",
  "impact": "Users cannot tell what is actually connected.",
  "rec": "Use one source of truth and one unit (platforms vs accounts) across header, dialog, Settings and Billing.",
  "shots": [
   {
    "img": "images/img0031.webp",
    "caption": "Beta · beta_desk_post_manage.png"
   },
   {
    "img": "images/img0113.webp",
    "caption": "Beta · beta_desk_settings_Connected_Accounts.png"
   },
   {
    "img": "images/img0035.webp",
    "caption": "Beta · beta_desk_settings_Billing_and_plans.png"
   }
  ]
 },
 {
  "id": "PUB-09",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Composer is missing several reference fields and \"Send for approval\"",
  "vercel": "Composer: YouTube Playlist + Visibility (Public/Unlisted/Private); Instagram Post type (Feed/Reel/Story), \"Also share to Facebook\", hide counts; Facebook Page + visibility; thumbnail Upload / AI / pick from timeline; 6 languages (English, Telugu, Hindi, Tamil, Kannada, Malayalam); 23 video categories; footer \"How to bulk publish? | Send for approval | Publish Now | Schedule for Nov 24, 13:36\" -> \"Confirm Schedule\".",
  "beta": "Composer (YouTube only connected): Visibility \"Public\", Notify subscribers, thumbnail \"Upload an image\" only (no AI / timeline pick), Language shows \"English\", no Playlist, no \"Send for approval\", footer \"Publish Now | Schedule\". Instagram/Facebook panels could not be compared (not connected).",
  "impact": "Owners who want a teammate to review before posting, or want a non-English caption or timeline thumbnail, cannot do it.",
  "rec": "Add Playlist, thumbnail-from-timeline, regional languages and a \"Send for approval\" action, or confirm these are intentionally dropped.",
  "shots": [
   {
    "img": "images/img0032.webp",
    "caption": "Beta · beta_desk_post_new2.png"
   },
   {
    "img": "images/img0114.webp",
    "caption": "Vercel · vercel_desk_post_new2.png"
   }
  ]
 },
 {
  "id": "PUB-14",
  "sev": "medium",
  "type": "responsive",
  "typeLabel": "Phone",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Phone: Best Time to Post, This Month and Quick Publish are hidden",
  "vercel": "On 390px the side cards stack below the list (Best Time to Post visible on scroll).",
  "beta": "\"Best Time to Post\" is in the DOM but not visible at 390px (isVisible=false after scrolling); the phone page ends after the post list.",
  "impact": "Phone users lose timing advice and the Quick Publish action.",
  "rec": "Stack the right-column cards under the list on small screens instead of hiding them.",
  "shots": [
   {
    "img": "images/img0112.webp",
    "caption": "Beta · beta_phone_ph_post.png"
   },
   {
    "img": "images/img0115.webp",
    "caption": "Vercel · vercel_phone_ph_post.png"
   }
  ]
 },
 {
  "id": "PUB-27",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Settings",
  "area": "publish-settings",
  "title": "Connected Accounts has no Publishing defaults",
  "vercel": "Below accounts: Publishing defaults — time zone, default posting time, default platforms, caption signature, \"Add hashtags automatically\", \"Send for approval first\".",
  "beta": "Only the account list (YouTube 2 accounts, Facebook, Instagram, Threads with Add account).",
  "impact": "Users re-enter the same settings on every post.",
  "rec": "Add the publishing defaults block.",
  "shots": [
   {
    "img": "images/img0113.webp",
    "caption": "Beta · beta_desk_settings_Connected_Accounts.png"
   }
  ]
 },
 {
  "id": "PUB-28",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Settings",
  "area": "publish-settings",
  "title": "Workspace & Team lacks channel requests and invite requests",
  "vercel": "Workspaces list (Add workspace, Rename), seats \"2 of 3 seats used\", Invite dialog, \"Channel requests\" (Request New Channel), \"Invite requests\" for people without an account (pending approval/resend).",
  "beta": "Workspace name + Save, members, inline \"Invite by email / Role / Invite\", roles table with custom roles.",
  "impact": "Teams that need extra channels or admin-approved invites have no path.",
  "rec": "Confirm whether channel/invite requests are in scope; if so add them.",
  "shots": [
   {
    "img": "images/img0116.webp",
    "caption": "Beta · beta_desk_settings_Workspace_Team.png"
   }
  ]
 },
 {
  "id": "PUB-40",
  "sev": "medium",
  "type": "ui",
  "typeLabel": "UI",
  "module": "Shell",
  "area": "publish-settings",
  "title": "At 1440x900 the sidebar hides Plan, Simulcast and Analytics behind the pinned footer",
  "vercel": "Collapsed rail lists Posts, Plan, Podcast, Newsletter, Website, Simulcast, Analytics.",
  "beta": "Sidebar shows \"PUBLISH > Post\" then the pinned Settings/credits footer; Plan (y=772), Simulcast (y=822) and Analytics (y=901) sit under it and need a sidebar scroll.",
  "impact": "Two of the modules in this area are not discoverable without scrolling the nav.",
  "rec": "Make the nav list scroll with a visible fade/indicator, or tighten spacing so all items fit at 900px.",
  "shots": [
   {
    "img": "images/img0001.webp",
    "caption": "Beta · beta_desk_analytics.png"
   }
  ]
 },
 {
  "id": "PUB-36",
  "sev": "medium",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Website",
  "area": "publish-settings",
  "title": "Website (creator site) builder missing (/website 404)",
  "vercel": "Site builder for familydrama.cloudreel.site: pages Home/Podcast/About, add Newsletter page, Design (theme/logo), Address, live preview (desktop/phone), \"View website\", \"Publish\"; site shows episodes, clips, upcoming lives, podcast links, newsletter sign-up.",
  "beta": "Route 404; no nav item.",
  "impact": "Creators have no public home for their content.",
  "rec": "Scope it after Podcast/Newsletter since the site aggregates them.",
  "shots": [
   {
    "img": "images/img0117.webp",
    "caption": "Vercel · desk__website.png"
   }
  ]
 },
 {
  "id": "SHA-13",
  "sev": "low",
  "type": "ux",
  "typeLabel": "UX",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "Sidebar tooltips lose the hints and the crown (paid-tier) explanation",
  "vercel": "Collapsed tooltip: \"Studio — Record or go live from your browser\"; crowned items say \"<Item> · Teams & broadcasters plan\".",
  "beta": "Collapsed tooltip only \"Studio\"; hovering a crowned item (Custom Layouts) in the expanded sidebar shows nothing, so the crown icon is unexplained.",
  "impact": "Users can't tell what a module does or why it carries a crown.",
  "rec": "Port the hint and plan label to the tooltip.",
  "shots": [
   {
    "img": "images/img0118.webp",
    "caption": "Screenshot · v_tooltip.png"
   },
   {
    "img": "images/img0119.webp",
    "caption": "Screenshot · b_tooltip.png"
   },
   {
    "img": "images/img0120.webp",
    "caption": "Screenshot · b_sidebar_hover_expanded.png"
   }
  ]
 },
 {
  "id": "SHA-14",
  "sev": "low",
  "type": "ui",
  "typeLabel": "UI",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "Two notification bells on desktop",
  "vercel": "One bell, in the header (with unread dot).",
  "beta": "Bell in the sidebar header next to the logo and another in the top bar.",
  "impact": "Redundant controls; unclear if they differ.",
  "rec": "Keep one (header).",
  "shots": [
   {
    "img": "images/img0039.webp",
    "caption": "Screenshot · b_home.png"
   }
  ]
 },
 {
  "id": "SHA-17",
  "sev": "low",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "Command palette footer shows \"Ctrl K\" on a Mac",
  "vercel": "Footer hint \"⌘ K\".",
  "beta": "Footer hint \"Ctrl K\" with navigator.platform = MacIntel.",
  "impact": "Wrong shortcut hint for Mac users.",
  "rec": "Detect platform and show ⌘ on macOS.",
  "shots": [
   {
    "img": "images/img0121.webp",
    "caption": "Screenshot · b_cmdk.png"
   }
  ]
 },
 {
  "id": "SHA-32",
  "sev": "low",
  "type": "ui",
  "typeLabel": "UI",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "Tab titles inconsistent",
  "vercel": "\"Home · CloudReel\", \"Remy · CloudReel\", \"Pricing — CloudReel\".",
  "beta": "Home tab is just \"CloudReel\"; Studio is \"CloudReel - Studio\"; others \"<Page> · CloudReel\"; login/signup/forgot all \"CloudReel\".",
  "impact": "Hard to tell tabs apart.",
  "rec": "Use \"<Page> · CloudReel\" everywhere including Home and auth pages.",
  "shots": []
 },
 {
  "id": "SHA-34",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "App shell",
  "area": "shell-home-auth",
  "title": "404 page is terser than the reference",
  "vercel": "\"This page doesn't exist — The link may be old, or the page has moved. Use the sidebar, or press ⌘K to search everything. Go to Home\".",
  "beta": "\"404 Page not found — There is nothing at this address. Back to home\" (and the plan modal opens over it on a new tab).",
  "impact": "Less help recovering.",
  "rec": "Mention search (⌘K) as the reference does.",
  "shots": [
   {
    "img": "images/img0042.webp",
    "caption": "Screenshot · b_404.png"
   },
   {
    "img": "images/img0122.webp",
    "caption": "Screenshot · v_404.png"
   }
  ]
 },
 {
  "id": "SHA-25",
  "sev": "low",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Assistant",
  "area": "shell-home-auth",
  "title": "Assistant sidebar lacks Notifications and Help & support; no \"Ideas to ask\"",
  "vercel": "Sidebar footer: \"Notifications\", \"Help & support\" (opens FAQs / Help Docs / Contact support drawer); composer has \"Ideas to ask\".",
  "beta": "Sidebar only has Home, New chat, Search chats, \"No chats yet — start one.\"; composer has Attach, mic, \"Find a sound\" instead.",
  "impact": "Help is harder to reach from the assistant.",
  "rec": "Add Help & support to the assistant sidebar.",
  "shots": [
   {
    "img": "images/img0043.webp",
    "caption": "Screenshot · b_orbit.png"
   },
   {
    "img": "images/img0123.webp",
    "caption": "Screenshot · v_cocreator_help.png"
   }
  ]
 },
 {
  "id": "SHA-27",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Assistant",
  "area": "shell-home-auth",
  "title": "Autopilot control contradicts its tooltip",
  "vercel": "No Autopilot control.",
  "beta": "Header pill reads \"Autopilot: on\" while its tooltip says \"Turn on Autopilot and Orbit does it while you watch.\"; on phone it is an unlabeled purple icon.",
  "impact": "Users can't tell whether autonomous actions are enabled — risky for an agent that acts.",
  "rec": "Make the tooltip state-aware (\"Autopilot is on — click to turn off\") and label it on phone.",
  "shots": [
   {
    "img": "images/img0043.webp",
    "caption": "Screenshot · b_orbit.png"
   },
   {
    "img": "images/img0124.webp",
    "caption": "Screenshot · b_orbit_autopilot_hover.png"
   },
   {
    "img": "images/img0125.webp",
    "caption": "Screenshot · b_phone_orbit.png"
   }
  ]
 },
 {
  "id": "SHA-28",
  "sev": "low",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Assistant",
  "area": "shell-home-auth",
  "title": "Personalize offers LinkedIn/X formats",
  "vercel": "Personalize > Workflows: Clips, Blog Post, SEO Article, Summary, Instagram Caption, Social Caption, Newsletter, Ad Copies, Email Headlines, Quotes, News Brief.",
  "beta": "Adds \"LinkedIn Article\", \"LinkedIn Post\", \"X Thread\" though publishing supports only YouTube/Instagram/Facebook.",
  "impact": "Suggests platform support that does not exist.",
  "rec": "Keep only formats for supported destinations, or label them as copy-only.",
  "shots": [
   {
    "img": "images/img0126.webp",
    "caption": "Screenshot · b_orbit_personalize.png"
   },
   {
    "img": "images/img0127.webp",
    "caption": "Screenshot · v_cocreator_personalize.png"
   }
  ]
 },
 {
  "id": "SHA-09",
  "sev": "low",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Auth",
  "area": "shell-home-auth",
  "title": "/onboarding is a 404 when signed in and bounces to login when signed out",
  "vercel": "/onboarding is the sign-up entry (profile picker) and /signup redirects to it.",
  "beta": "Signed in: \"404 Page not found\" inside the shell. Signed out: redirects to /login?next=%2Fonboarding, so after login the user lands on a 404.",
  "impact": "Any old link or email pointing at /onboarding dead-ends.",
  "rec": "Redirect /onboarding to /signup (signed out) or / (signed in).",
  "shots": [
   {
    "img": "images/img0128.webp",
    "caption": "Screenshot · bp_onboarding_loggedin.png"
   },
   {
    "img": "images/img0036.webp",
    "caption": "Screenshot · bp_onboarding.png"
   }
  ]
 },
 {
  "id": "SHA-10",
  "sev": "low",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Auth",
  "area": "shell-home-auth",
  "title": "Public pages log a 401 console error for /api/auth/me",
  "vercel": "No console errors on public pages.",
  "beta": "/pricing, /terms, /privacy, /reset-password: \"Failed to load resource: the server responded with a status of 401 ()\" for GET /api/auth/me (desk and phone).",
  "impact": "Noise in monitoring; masks real errors.",
  "rec": "Treat 401 on the optional session probe as \"signed out\" without a failing request (e.g. 200 with null user).",
  "shots": []
 },
 {
  "id": "SHA-19",
  "sev": "low",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Getting started",
  "area": "shell-home-auth",
  "title": "Post-sign-up product tour could not be confirmed on beta",
  "vercel": "Right after sign-up an 8-step sidebar tour starts (\"Step 1 of 8 Home — Start here: record, go live, or bring a video...\").",
  "beta": "\"Replay product tour\" exists in the account menu; replay could not be opened because the plan modal intercepted clicks, and first-run tour needs a real sign-up (forbidden).",
  "impact": "If missing, new users get no orientation.",
  "rec": "Verify the tour runs after sign-up.",
  "shots": [
   {
    "img": "images/img0129.webp",
    "caption": "Screenshot · v_onb_after.png"
   },
   {
    "img": "images/img0130.webp",
    "caption": "Screenshot · b_hdr_account.png"
   }
  ]
 },
 {
  "id": "SHA-21",
  "sev": "low",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Home",
  "area": "shell-home-auth",
  "title": "No \"Upcoming posts\" section or \"Also on my list\" row on Home",
  "vercel": "Home shows \"Also on my list: 1 failed post · 3 approvals · 12 clips to review...\" and an \"Upcoming posts\" rail with \"View all\".",
  "beta": "Neither appears; briefing says \"Nothing urgent today\". Probably hidden because this workspace has no scheduled posts.",
  "impact": "If the section is absent rather than empty-hidden, users lose their at-a-glance publishing view.",
  "rec": "Confirm the rail renders when posts are scheduled.",
  "shots": [
   {
    "img": "images/img0039.webp",
    "caption": "Screenshot · b_home.png"
   },
   {
    "img": "images/img0049.webp",
    "caption": "Vercel · desk__.png"
   }
  ]
 },
 {
  "id": "SHA-31",
  "sev": "low",
  "type": "accessibility",
  "typeLabel": "Accessibility",
  "module": "Phone",
  "area": "shell-home-auth",
  "title": "Small touch targets on phone Home",
  "vercel": "n/a (not measured)",
  "beta": "\"More actions\" on Continue working cards are 22x22 px; \"Continue editing\" and \"View all in Projects\" links are 16 px tall.",
  "impact": "Hard to tap accurately.",
  "rec": "Make targets at least 44x44 px.",
  "shots": [
   {
    "img": "images/img0050.webp",
    "caption": "Screenshot · b_phone_home.png"
   }
  ]
 },
 {
  "id": "LIVE-17",
  "sev": "low",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Custom Layouts",
  "area": "live",
  "title": "Empty Layouts page has no folders area or \"New folder\"",
  "vercel": "Header has \"New folder\", \"Import\", \"New layout\"; the body shows Folders (Interviews, Presentations, Shows, Graphics) and \"Not in a folder — Drag a layout onto a folder to move it\".",
  "beta": "With 0 layouts the page shows a feature explainer (\"Your layouts, placed exactly right.\") with New layout / Import a layout and a \"Folders\" feature card, but no New folder action. \"New layout\" opens the same editor as the reference (FOLDER / LAYOUT NAME, 16:9/9:16, Add Source, Arrange presets).",
  "impact": "Users cannot set up folders before their first layout; it is unknown whether folders appear later.",
  "rec": "Show \"New folder\" in the header as in the reference.",
  "shots": [
   {
    "img": "images/img0131.webp",
    "caption": "Beta · beta_desk_layouts.png"
   },
   {
    "img": "images/img0132.webp",
    "caption": "Vercel · desk__layout_builder.png"
   },
   {
    "img": "images/img0133.webp",
    "caption": "Screenshot · b_lay_new.png"
   }
  ]
 },
 {
  "id": "LIVE-20",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Graphics",
  "area": "live",
  "title": "\"Template\" and \"design\" both name the same object",
  "vercel": "Consistently \"design\": \"New design\", \"Untitled design\", \"1 design\".",
  "beta": "The page says \"New template\" / \"Start from a template\", the editor says \"Untitled design\", and the recycle bin says \"Deleted designs\".",
  "impact": "Mixed nouns make it unclear whether a template and a design are different things.",
  "rec": "Use one noun everywhere.",
  "shots": [
   {
    "img": "images/img0134.webp",
    "caption": "Beta · beta_desk_graphics.png"
   },
   {
    "img": "images/img0068.webp",
    "caption": "Screenshot · b_gfx_new.png"
   },
   {
    "img": "images/img0135.webp",
    "caption": "Screenshot · b_lay_bin.png"
   }
  ]
 },
 {
  "id": "LIVE-21",
  "sev": "low",
  "type": "ui",
  "typeLabel": "UI",
  "module": "Graphics",
  "area": "live",
  "title": "Assistant bubble overlaps editors and the studio lobby",
  "vercel": "Full-screen editors and the studio lobby hide the assistant bubble.",
  "beta": "The floating Orbit bubble covers the Graphics editor footer (\"Stage 1920 × 1080 · 0 e…\"), and on phone it covers the lobby's bottom source tab (\"Your stage\"). The lobby also lists \"Ask Orbit\".",
  "impact": "It hides status and controls in focused work surfaces.",
  "rec": "Hide the bubble in full-screen editors and the studio, or dock it away from footers.",
  "shots": [
   {
    "img": "images/img0068.webp",
    "caption": "Screenshot · b_gfx_new.png"
   },
   {
    "img": "images/img0136.webp",
    "caption": "Screenshot · b_phone_studio_open_session_intent_go_live_sessionTab_1.png"
   }
  ]
 },
 {
  "id": "LIVE-25",
  "sev": "low",
  "type": "ui",
  "typeLabel": "UI",
  "module": "Simulcast",
  "area": "live",
  "title": "Simulcast cards show the timezone and a status pill instead of status/type meta text",
  "vercel": "Card meta: \"Oct 1, 2026 · Preview · Broadcast\", with the status as coloured text; no pill on the thumbnail.",
  "beta": "Card meta: \"Asia/Calcutta · 17 Nov 2026\", with a blue \"Ready\" pill on the thumbnail and a plain purple placeholder instead of a video frame.",
  "impact": "Status is harder to scan and the card style differs from Studio and Projects.",
  "rec": "Use the shared meta-text pattern (date · status · type) and a video frame.",
  "shots": [
   {
    "img": "images/img0137.webp",
    "caption": "Beta · beta_desk_simulcast.png"
   },
   {
    "img": "images/img0138.webp",
    "caption": "Vercel · desk__channels.png"
   }
  ]
 },
 {
  "id": "LIVE-26",
  "sev": "low",
  "type": "ui",
  "typeLabel": "UI",
  "module": "Simulcast",
  "area": "live",
  "title": "Simulcast page sits inside an extra bordered panel, and the tab wraps on phone",
  "vercel": "Header (with the \"Teams & broadcasters\" badge) and grid sit directly on the page, like other modules.",
  "beta": "The whole header and grid are boxed in a bordered card; there is no plan badge; at 390px \"All Simulcasts\" wraps onto two lines inside its pill.",
  "impact": "It looks like a different app from Studio and Encoders.",
  "rec": "Use the standard page header and drop the wrapper panel; keep tab labels on one line.",
  "shots": [
   {
    "img": "images/img0137.webp",
    "caption": "Beta · beta_desk_simulcast.png"
   },
   {
    "img": "images/img0139.webp",
    "caption": "Screenshot · b_phone_simulcast.png"
   }
  ]
 },
 {
  "id": "LIVE-27",
  "sev": "low",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Simulcast",
  "area": "live",
  "title": "\"New channel\" and \"Broadcast a video\" are two creation paths with no explanation",
  "vercel": "Single primary action, \"Broadcast a video\".",
  "beta": "Both \"New channel\" (dialog: \"Channel name… Starts as a draft… Add playlists, a schedule and a destination from its page.\" -> Create channel) and \"Broadcast a video\".",
  "impact": "New users will not know which to pick.",
  "rec": "Explain the difference (one-off broadcast vs 24×7 channel) or fold New channel into the broadcast flow.",
  "shots": [
   {
    "img": "images/img0140.webp",
    "caption": "Screenshot · b_sim_New_channel.png"
   },
   {
    "img": "images/img0137.webp",
    "caption": "Beta · beta_desk_simulcast.png"
   }
  ]
 },
 {
  "id": "LIVE-04",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Studio list",
  "area": "live",
  "title": "Session names are not unique and the lobby does not show which session it is",
  "vercel": "Default names include date and time (\"Session - Nov 24, 2026 01:33:42 PM\"); lobby header reads \"Studio · Session - Nov 24, 2026 01:33:42 PM\".",
  "beta": "Two cards both called \"Session - 11/17/2026\"; lobby header reads only \"Studio · Session\" (the YouTube title field does get \"Session - 11/24/2026 01:38:20 PM\").",
  "impact": "People cannot tell recordings apart, or confirm which session they are joining.",
  "rec": "Name sessions with date and time, and show that name in the lobby header.",
  "shots": [
   {
    "img": "images/img0141.webp",
    "caption": "Beta · beta_desk_studio.png"
   },
   {
    "img": "images/img0071.webp",
    "caption": "Screenshot · b_gl_step2_details.png"
   }
  ]
 },
 {
  "id": "LIVE-14",
  "sev": "low",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Studio list",
  "area": "live",
  "title": "Upcoming section, Start now, Resume and the auto-record toggle could not be checked",
  "vercel": "Cards are split into \"UPCOMING · 3\" (Start now) and \"RECORDINGS\"; live or created sessions show Resume plus an auto-record toggle; the selection bar offers Stop (n) for live sessions.",
  "beta": "This workspace has only 2 ended recordings and no scheduled or live sessions, so none of these states render. The list does request GET /studio/v1/events.",
  "impact": "Scheduling then starting a session is a core Studio job that could not be confirmed.",
  "rec": "Verify with a scheduled session and a live session in a test workspace.",
  "shots": [
   {
    "img": "images/img0142.webp",
    "caption": "Screenshot · v_studio_selectall.png"
   },
   {
    "img": "images/img0143.webp",
    "caption": "Screenshot · b_studio_selectall.png"
   }
  ]
 },
 {
  "id": "LIVE-15",
  "sev": "low",
  "type": "ui",
  "typeLabel": "UI",
  "module": "Studio list",
  "area": "live",
  "title": "Bulk-selection bar moved to a floating bottom bar; the page has a stray back arrow",
  "vercel": "Selection bar replaces the toolbar at the top: \"10 recordings selected · Download · Export list · Stop (2) · Delete\". No back arrow on Studio.",
  "beta": "Floating bottom bar: \"2 recordings selected · Download (2) · Export list · Delete\". The header has a \"Back\" arrow on a top-level page.",
  "impact": "Small inconsistency with other list pages; the back arrow has no clear destination.",
  "rec": "Pick one selection-bar pattern for all lists and drop the back arrow on top-level pages.",
  "shots": [
   {
    "img": "images/img0143.webp",
    "caption": "Screenshot · b_studio_selectall.png"
   },
   {
    "img": "images/img0142.webp",
    "caption": "Screenshot · v_studio_selectall.png"
   }
  ]
 },
 {
  "id": "LIVE-16",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Studio list",
  "area": "live",
  "title": "Schedule dialog matches except the thumbnail source list",
  "vercel": "Schedule a session: name, description, date/time, stop date/time, timezone, thumbnail from Upload / Library / Canva, \"Repeat, guests and reminders\".",
  "beta": "Same dialog without the Canva option for the thumbnail.",
  "impact": "Minor gap for users who design thumbnails in Canva.",
  "rec": "Add Canva if it is planned; otherwise drop it from the reference.",
  "shots": [
   {
    "img": "images/img0144.webp",
    "caption": "Screenshot · b_studio_schedule.png"
   },
   {
    "img": "images/img0145.webp",
    "caption": "Screenshot · v_studio_schedule.png"
   }
  ]
 },
 {
  "id": "CREATE-31",
  "sev": "low",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Editor",
  "area": "create",
  "title": "No assistant suggestions panel on open; the assistant is behind the 'Orbit' rail button",
  "vercel": "On open, the right panel shows 'Editor · Remy's crew', with 'Suggested for this video' (Remove filler words, Trim silence, Noise reduction, Auto reframe) and Run buttons, plus a prompt box.",
  "beta": "The canvas opens without suggestions. Clicking 'Orbit' shows 'Here's what I can do for this video' (Trim silence, Add captions, Detect speakers). The assistant is still named 'Orbit' (the reference says Remy).",
  "impact": "Users are less likely to discover one-click fixes, and the assistant name differs from the rest of the product.",
  "rec": "Open the assistant suggestions by default on first open, and rename Orbit to Remy.",
  "shots": [
   {
    "img": "images/img0079.webp",
    "caption": "Screenshot · b_ed_main2.png"
   },
   {
    "img": "images/img0078.webp",
    "caption": "Screenshot · b_ed_orbit.png"
   },
   {
    "img": "images/img0080.webp",
    "caption": "Screenshot · v_ed_main.png"
   }
  ]
 },
 {
  "id": "CREATE-32",
  "sev": "low",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Editor",
  "area": "create",
  "title": "The bare /editor start page warns 'Saved in this browser only' before the user has done anything, and mints a new draft id on each visit",
  "vercel": "/pro-video-editor shows 'Start a project' with the library and a welcome tour.",
  "beta": "/editor redirects to /editor?draft=local-<random> with a new id on each visit (local-e2d3616f…, local-890ce1b9…), and shows the banner 'Saved in this browser only. This edit isn't in your CloudReel library …' above 'Start a project'. Projects still showed 'Projects (4)' afterwards, so nothing visible was created (verified).",
  "impact": "The warning is alarming and makes no sense before any edit exists, and stale local drafts can pile up.",
  "rec": "Show the banner only after the user starts editing without a library video, and reuse one empty draft.",
  "shots": [
   {
    "img": "images/img0146.webp",
    "caption": "Screenshot · b_ed_start.png"
   },
   {
    "img": "images/img0147.webp",
    "caption": "Screenshot · v_ed_start.png"
   }
  ]
 },
 {
  "id": "CREATE-33",
  "sev": "low",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Editor",
  "area": "create",
  "title": "The editor start page has 'Move to the Bin' buttons on library cards",
  "vercel": "Library cards on the start page only offer 'Edit'.",
  "beta": "Cards offer 'Open …' and 'Move … to the Bin' on a screen meant for picking a video.",
  "impact": "A destructive action on a picker invites accidental deletes.",
  "rec": "Remove Bin from the picker and keep it in Projects.",
  "shots": [
   {
    "img": "images/img0146.webp",
    "caption": "Screenshot · b_ed_start.png"
   }
  ]
 },
 {
  "id": "CREATE-36",
  "sev": "low",
  "type": "responsive",
  "typeLabel": "Phone",
  "module": "Playground",
  "area": "create",
  "title": "On phone, the Playground prompt card overlaps the preset tiles",
  "vercel": "n/a",
  "beta": "At 390px the floating prompt card covers the lower half of the first row of preset tiles, hiding their labels ('Episode thumbnail', 'Show cover art').",
  "impact": "Users can't read or tap the presets they're meant to start from.",
  "rec": "Let the prompt card flow below the grid, or dock it to the bottom with matching padding.",
  "shots": [
   {
    "img": "images/img0148.webp",
    "caption": "Screenshot · b_ph_playground.png"
   }
  ]
 },
 {
  "id": "CREATE-15",
  "sev": "low",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Project detail",
  "area": "create",
  "title": "The Recording tab has no summary and no per-speaker talk time",
  "vercel": "The Files tab shows 'SUMMARY …' and 'TALK TIME Speaker 1 · 61% / Speaker 2 · 39%', plus per-speaker tracks with Edit/Download.",
  "beta": "Shows 'Server recording · Ready 1m 28s Transcript' and a Tracks list. There is no summary or talk-time breakdown.",
  "impact": "Users lose a quick read of what the recording is about before they choose what to make.",
  "rec": "Show the summary and talk time when a transcript exists.",
  "shots": [
   {
    "img": "images/img0023.webp",
    "caption": "Screenshot · b_detail_main.png"
   },
   {
    "img": "images/img0149.webp",
    "caption": "Screenshot · v_detail_tab_Files3.png"
   }
  ]
 },
 {
  "id": "CREATE-17",
  "sev": "low",
  "type": "responsive",
  "typeLabel": "Phone",
  "module": "Project detail",
  "area": "create",
  "title": "On phone, the video player in the project detail is clipped at the card edges",
  "vercel": "n/a (the reference phone detail wasn't captured).",
  "beta": "At 390px the player's play button and the left end of the progress bar are cut off by the card edge. The Remy bubble overlaps the Tracks row.",
  "impact": "Playback controls are partly hidden on phone.",
  "rec": "Add inner padding or set overflow so the player fits inside the card at small widths.",
  "shots": [
   {
    "img": "images/img0150.webp",
    "caption": "Screenshot · b_detail_phone.png"
   }
  ]
 },
 {
  "id": "CREATE-18",
  "sev": "low",
  "type": "accessibility",
  "typeLabel": "Accessibility",
  "module": "Project detail",
  "area": "create",
  "title": "The Downloads and Drafts tabs add a second H1",
  "vercel": "n/a",
  "beta": "The headings read 'H1: Session - …' and also 'H1: Downloads' / 'H1: Drafts'.",
  "impact": "Screen-reader heading navigation gets two top-level headings.",
  "rec": "Make the tab titles H2.",
  "shots": [
   {
    "img": "images/img0151.webp",
    "caption": "Screenshot · b_detail_tab_Downloads.png"
   }
  ]
 },
 {
  "id": "CREATE-06",
  "sev": "low",
  "type": "ux",
  "typeLabel": "UX",
  "module": "Projects",
  "area": "create",
  "title": "The no-results search state has no 'Clear search' button",
  "vercel": "'No projects match “zzzqqq” / Try a different name.' plus a [Clear search] button.",
  "beta": "'Nothing matches that search / Try a different word, or clear the search to see everything.' The text says to clear the search, but there's no button for it.",
  "impact": "It's one more step to recover, and the result is stuck in the URL (?q=).",
  "rec": "Add a Clear search button to the empty state.",
  "shots": [
   {
    "img": "images/img0152.webp",
    "caption": "Screenshot · b_proj_search_none.png"
   },
   {
    "img": "images/img0153.webp",
    "caption": "Screenshot · v_proj_search_none.png"
   }
  ]
 },
 {
  "id": "CREATE-07",
  "sev": "low",
  "type": "ui",
  "typeLabel": "UI",
  "module": "Projects",
  "area": "create",
  "title": "The empty Folders section has no inline 'Create a new folder' tile",
  "vercel": "The Folders section always shows a '+ Create a new folder' tile.",
  "beta": "Shows the plain text 'No folders yet. Use New Folder to create one.' and points the user at the header button.",
  "impact": "Folder creation is less discoverable for new users.",
  "rec": "Show the same inline create tile in the empty state.",
  "shots": [
   {
    "img": "images/img0087.webp",
    "caption": "Screenshot · b_proj_main.png"
   },
   {
    "img": "images/img0154.webp",
    "caption": "Screenshot · v_proj_main.png"
   }
  ]
 },
 {
  "id": "CREATE-08",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Projects",
  "area": "create",
  "title": "Auto-generated project names repeat the date in two formats",
  "vercel": "Projects have readable names (e.g. 'Family Drama — Shorts').",
  "beta": "Recorded sessions are named 'Session - 11/17/2026 · 17 Nov 2026', with the same date twice, and two cards end up with identical names.",
  "impact": "Names are long, look redundant, and don't help tell projects apart.",
  "rec": "Generate one name per recording, with the date once and time or show to tell them apart (e.g. 'Session · 17 Nov 2026, 4:12 pm').",
  "shots": [
   {
    "img": "images/img0087.webp",
    "caption": "Screenshot · b_proj_main.png"
   }
  ]
 },
 {
  "id": "CREATE-10",
  "sev": "low",
  "type": "journey",
  "typeLabel": "Journey",
  "module": "Projects",
  "area": "create",
  "title": "New Project menu items open workflow composers instead of the dedicated tool pages",
  "vercel": "New Project ▸ AI Clips / AI Captions / Portrait Pro / AI Writer each open a dedicated start page with upload, library, link and 'works best on' tips. Record opens a studio session and 'Schedule for later' opens a scheduler.",
  "beta": "New Project ▸ AI Clips → /projects?workflow=create-clips, AI Captions → caption, Portrait Pro → go-vertical, AI Dub → go-global, AI Writer → write, Custom Edit → workflow=edit. Upload Video → 'Add Files' page (matches the reference). The menu also adds 'AI Dub', which the reference menu lacks. Record and Schedule were not clicked on beta (they could create a session).",
  "impact": "The labels don't match where they go ('Portrait Pro' opens 'Make it vertical'), but the journey is consistent.",
  "rec": "Rename the menu items to the workflow names (Create clips, Make it vertical, Reach new languages …) so the label matches the page.",
  "shots": [
   {
    "img": "images/img0155.webp",
    "caption": "Screenshot · b_proj_newproject.png"
   },
   {
    "img": "images/img0156.webp",
    "caption": "Screenshot · b_np_PortraitPro.png"
   },
   {
    "img": "images/img0157.webp",
    "caption": "Screenshot · v_np_PortraitPro.png"
   }
  ]
 },
 {
  "id": "CREATE-26",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Workflows",
  "area": "create",
  "title": "Copy differences: 'word colour change' vs 'word-highlight', and 'about 1 credits'",
  "vercel": "The caption style is called 'word-highlight' everywhere.",
  "beta": "The style is called 'word colour change'. Write from a video shows '1 step · about 1 credits' (plural with 1). Go-global says 'add subtitles in each' and loses the style choice.",
  "impact": "Small inconsistencies make the product feel unfinished.",
  "rec": "Use one style name and fix singular/plural for credits.",
  "shots": [
   {
    "img": "images/img0158.webp",
    "caption": "Screenshot · b_wf_write_picked.png"
   },
   {
    "img": "images/img0159.webp",
    "caption": "Screenshot · b_walk_create-clips_chip_wordcolourchangecaptions.png"
   }
  ]
 },
 {
  "id": "PUB-20",
  "sev": "low",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Plan",
  "area": "publish-settings",
  "title": "Week/Day views lack per-day summaries and legend",
  "vercel": "Week header \"9 events · 8h 50m Conference 1 Other 8 6 posts\", per-day \"3 scheduled\"; Day view \"7 scheduled · click a free time to add more\"; legend \"Posts: YouTube Instagram Facebook Live events: Live Upcoming Ended\"; \"Demo switches\" for states.",
  "beta": "Week/Day show only the time grid and \"0 live events · 0 posts\"; legend is just \"Platforms: YouTube\".",
  "impact": "Harder to scan a busy week.",
  "rec": "Add per-day counts and the posts/live-events legend.",
  "shots": [
   {
    "img": "images/img0160.webp",
    "caption": "Beta · beta_desk_plan_Week.png"
   },
   {
    "img": "images/img0161.webp",
    "caption": "Vercel · vercel_desk_plan_Week.png"
   }
  ]
 },
 {
  "id": "PUB-22",
  "sev": "low",
  "type": "ui",
  "typeLabel": "UI",
  "module": "Plan",
  "area": "publish-settings",
  "title": "\"New\" menu and future-day \"New post\" shortcuts match the reference",
  "vercel": "New -> \"Post: Schedule a video to social\" / \"Live event: A Studio session on the calendar\".",
  "beta": "Same menu; future days have \"Schedule a post on <day>\" buttons that open the video picker; past days are greyed.",
  "impact": "Parity.",
  "rec": "None.",
  "shots": [
   {
    "img": "images/img0162.webp",
    "caption": "Beta · beta_desk_plan_new.png"
   }
  ]
 },
 {
  "id": "PUB-12",
  "sev": "low",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Row \"More\" (⋮) menu opens nothing visible",
  "vercel": "Published rows have one action (open externally).",
  "beta": "Posts tab rows have \"More for <title>\" buttons; clicking one showed no menu in the screenshot.",
  "impact": "A dead control looks broken.",
  "rec": "Wire the menu (e.g., View details, Copy link, Duplicate) or remove it.",
  "shots": [
   {
    "img": "images/img0163.webp",
    "caption": "Beta · beta_desk_post_kebab.png"
   }
  ]
 },
 {
  "id": "PUB-13",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Mixed date formats",
  "vercel": "Dates as \"Nov 23, 2026\" / \"Yesterday\" / \"2d ago\".",
  "beta": "Rows \"17/11/2026\", detail \"Nov 16, 2026, 7:21 PM\", activity \"16 Nov, 19:21\", auto titles \"Session - 11/17/2026 · 17 Nov 2026\" (US and day-first dates in one title).",
  "impact": "Day/month ambiguity in a list of scheduled posts causes mistakes.",
  "rec": "Use one locale-aware format (e.g. \"Nov 17, 2026\") and fix the auto session title.",
  "shots": [
   {
    "img": "images/img0028.webp",
    "caption": "Beta · beta_desk_post_tab_Posts.png"
   }
  ]
 },
 {
  "id": "PUB-15",
  "sev": "low",
  "type": "responsive",
  "typeLabel": "Phone",
  "module": "Posts",
  "area": "publish-settings",
  "title": "Phone: Posts table hides Status/Views/Actions off to the right",
  "vercel": "Same clipping on Vercel (only CONTENT and DATE columns visible).",
  "beta": "Table is 793px wide inside a 340px card; Status, Views and Actions need a sideways scroll with no hint.",
  "impact": "Phone users miss whether a post failed.",
  "rec": "Use a card/list layout per row on phone with status visible.",
  "shots": [
   {
    "img": "images/img0164.webp",
    "caption": "Beta · beta_phone_ph_post_poststab.png"
   },
   {
    "img": "images/img0165.webp",
    "caption": "Vercel · vercel_phone_ph_post_published.png"
   }
  ]
 },
 {
  "id": "PUB-39",
  "sev": "low",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "Profile",
  "area": "publish-settings",
  "title": "Profile page missing (/profile 404); covered by Settings > Account",
  "vercel": "Profile: avatar with photo change, name, email, role badge \"Content Creator\", personal info form, \"Open settings\" link, change password, sign out, 2FA, delete account.",
  "beta": "Route 404; the same actions are in Settings > Account (no role badge; avatar photo upload not seen).",
  "impact": "Minor: links to /profile break; no visible avatar upload.",
  "rec": "Redirect /profile to /settings#account and add avatar upload there.",
  "shots": [
   {
    "img": "images/img0166.webp",
    "caption": "Vercel · desk__profile.png"
   },
   {
    "img": "images/img0033.webp",
    "caption": "Beta · beta_desk_settings_Account.png"
   }
  ]
 },
 {
  "id": "PUB-30",
  "sev": "low",
  "type": "accessibility",
  "typeLabel": "Accessibility",
  "module": "Settings",
  "area": "publish-settings",
  "title": "Settings page has no H1",
  "vercel": "H1 \"Settings\".",
  "beta": "First heading is H2 \"Account\"; \"Settings\" is plain text; one unnamed control on desktop.",
  "impact": "Screen-reader users lose the page landmark.",
  "rec": "Make \"Settings\" the H1.",
  "shots": [
   {
    "img": "images/img0033.webp",
    "caption": "Beta · desk__settings.png"
   }
  ]
 },
 {
  "id": "PUB-31",
  "sev": "low",
  "type": "copy",
  "typeLabel": "Copy",
  "module": "Settings",
  "area": "publish-settings",
  "title": "Change password dialog lacks the Google sign-up hint",
  "vercel": "\"Signed up with Google and never set one? Use \\\"Forgot password\\\" on the sign-in page.\"",
  "beta": "Fields only: Current password, New password, Confirm new password, Cancel, Save password.",
  "impact": "Google sign-up users are stuck at \"Current password\".",
  "rec": "Add the hint.",
  "shots": [
   {
    "img": "images/img0167.webp",
    "caption": "Beta · beta_desk_settings_dlg_Account_Change_password.png"
   },
   {
    "img": "images/img0168.webp",
    "caption": "Vercel · vercel_desk_settings_dlg_Account.png"
   }
  ]
 },
 {
  "id": "PUB-33",
  "sev": "low",
  "type": "responsive",
  "typeLabel": "Phone",
  "module": "Settings",
  "area": "publish-settings",
  "title": "Phone: roles table in Workspace & Team is cut off",
  "vercel": "n/a",
  "beta": "Roles table is 405px wide in a 390px viewport (clipped inside the card); \"Duplicate <role>\" buttons are 28x28.",
  "impact": "Viewer column hidden on phone.",
  "rec": "Stack the permission matrix per role on phone.",
  "shots": [
   {
    "img": "images/img0169.webp",
    "caption": "Beta · beta_phone_ph_settings_team.png"
   }
  ]
 },
 {
  "id": "PUB-38",
  "sev": "low",
  "type": "missing",
  "typeLabel": "Missing",
  "module": "What's new",
  "area": "publish-settings",
  "title": "What's new (changelog) missing (/changelog 404)",
  "vercel": "Dated release notes (e.g. Nov 8: Next up on Home, Channel health, Your last 30 days, Fairer plan changes; Nov 7: AI B-roll, Phone as a camera, Audience call-ins, Review links, Podcast page, Remy's crew).",
  "beta": "Route 404.",
  "impact": "Beta users have no way to learn what changed.",
  "rec": "Add a simple What's new page linked from the user menu.",
  "shots": [
   {
    "img": "images/img0170.webp",
    "caption": "Vercel · desk__changelog.png"
   }
  ]
 },
 {
  "id": "X-06",
  "sev": "low",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "App shell",
  "area": "cross-cutting",
  "title": "Unknown pages return HTTP 200 instead of 404",
  "vercel": "Shows a friendly 404 page (also HTTP 200 on the reference).",
  "beta": "Friendly “Page not found” page, but HTTP status 200.",
  "impact": "Search engines and link checkers treat dead links as real pages; monitoring can't spot broken links.",
  "rec": "Return status 404 from the not-found route (Next.js notFound()).",
  "shots": [
   {
    "img": "images/img0017.webp",
    "caption": "Beta · desk__nope_404_check.png"
   }
  ]
 },
 {
  "id": "X-10",
  "sev": "low",
  "type": "bug",
  "typeLabel": "Bug",
  "module": "Pricing / legal",
  "area": "cross-cutting",
  "title": "Public pages log a 401 console error",
  "vercel": "No console errors.",
  "beta": "Pricing, Terms and Privacy each call GET /api/auth/me while signed out → 401, logged as a console error.",
  "impact": "Noise in monitoring; hides real errors.",
  "rec": "Skip the session check on public pages, or treat 401 as “signed out” without logging an error.",
  "shots": [
   {
    "img": "images/img0053.webp",
    "caption": "Beta · desk__pricing.png"
   }
  ]
 }
];
