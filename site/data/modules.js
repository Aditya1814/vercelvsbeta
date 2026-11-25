window.DATA=window.DATA||{};window.DATA["modules"]={
 "lede": "One row per module, from what was tested on the beta. “Partly working” means the page works but a core part is broken, missing or different. Final steps that would write real data (publish, go live, create) were not run, so they're called out as untested.",
 "counts": [
  "5 working",
  "16 partly working",
  "2 broken",
  "10 missing"
 ],
 "rows": [
  {
   "group": "Getting in",
   "module": "Sign in",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Google sign-in works and lands in the workspace. Sign-in page, Forgot password page and error messages show correctly.",
   "broken": "Email + password sign-in rejected the test account (HTTP 401). Only Google SSO: Microsoft and GitHub are gone.",
   "refs": [
    "X-08"
   ]
  },
  {
   "group": "Getting in",
   "module": "Sign up",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Profile step, then account step with strong password rules and consent; email domains without a mail server are rejected.",
   "broken": "Agreeing to Terms and Privacy that are unfinished (placeholder / [BRACKETS]). Final “Create account” untested (would create an account).",
   "refs": [
    "SHA-03",
    "SHA-04"
   ]
  },
  {
   "group": "Getting in",
   "module": "Pricing (public)",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Plans and prices render.",
   "broken": "Signed-in users get “Get started” buttons that send them to sign-up; copy differs from the in-app plan modal; free credits not stated.",
   "refs": [
    "SHA-05"
   ]
  },
  {
   "group": "Everywhere",
   "module": "App shell & navigation",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Sidebar, workspace switcher, notifications and the command palette (richer than the reference) work; pages load fast.",
   "broken": "“Choose your plan” checkout pops up on the first page of every new tab; 6 modules missing from the nav; no Help or credits chip in the header; at 1440×900 the sidebar hides Plan, Simulcast and Analytics; on phone the menu button floats bottom-left.",
   "refs": [
    "SHA-01"
   ]
  },
  {
   "group": "Everywhere",
   "module": "Home",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Briefing uses real workspace data; video workflow cards open guided plans.",
   "broken": "Live cards (Go live, webinar, event, episode, debate) drop you on the Studio list; “Turn an idea into a video” became an image tool; no Upcoming posts row.",
   "refs": [
    "SHA-02"
   ]
  },
  {
   "group": "Everywhere",
   "module": "Assistant (Orbit)",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Chat page and floating launcher open; suggestions shown.",
   "broken": "Still named Orbit (reference: Remy); no crew roles on its page; opening it sends a voice-session request without the mic being pressed. Sending a message untested (read-only).",
   "refs": []
  },
  {
   "group": "Live",
   "module": "Studio list",
   "status": "working",
   "statusLabel": "Working",
   "works": "List, search, bulk select, open a recording and the Schedule dialog all work.",
   "broken": "Go live and Record open a new browser tab. Upcoming / Start now / Resume not checkable (no sessions).",
   "refs": []
  },
  {
   "group": "Live",
   "module": "Go live (studio lobby)",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Lobby matches the reference: source step, “Pick where to stream” with per-account details, device check.",
   "broken": "No guided Go-live plan from Home. Joining and going live untested (would start a real session).",
   "refs": []
  },
  {
   "group": "Live",
   "module": "Encoders",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Page loads; Invite a user dialog opens.",
   "broken": "Admin relays call fails (404) on every load; no “Add my phone” QR path; the only action sits inside the empty state. Live cards, history, Use in Studio, Disconnect couldn't be compared (no devices).",
   "refs": [
    "LIVE-08"
   ]
  },
  {
   "group": "Live",
   "module": "Simulcast",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "List and simulcast detail work; extra Analytics and Playlists tabs.",
   "broken": "“Broadcast a video” sends to one destination only; no Save as draft or readiness status; offers TikTok and LinkedIn which aren't supported elsewhere.",
   "refs": [
    "LIVE-22"
   ]
  },
  {
   "group": "Live",
   "module": "Custom Layouts",
   "status": "working",
   "statusLabel": "Working",
   "works": "List and layout editor open; recycle bin.",
   "broken": "Empty page has no folders area. Save untested.",
   "refs": []
  },
  {
   "group": "Live",
   "module": "Graphics",
   "status": "working",
   "statusLabel": "Working",
   "works": "Templates gallery and design editor open; recycle bin.",
   "broken": "Element set differs from the reference. Save untested.",
   "refs": []
  },
  {
   "group": "Live",
   "module": "Webinars",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "—",
   "broken": "Module doesn't exist (404), but Home still offers “Host a webinar”.",
   "refs": [
    "LIVE-05"
   ]
  },
  {
   "group": "Live",
   "module": "Multiviewer",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "—",
   "broken": "Module doesn't exist (404).",
   "refs": []
  },
  {
   "group": "Live",
   "module": "Async recording requests",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "—",
   "broken": "Module doesn't exist (404).",
   "refs": []
  },
  {
   "group": "Create",
   "module": "Projects (library)",
   "status": "working",
   "statusLabel": "Working",
   "works": "Browse, filter, sort, search, card menus, multi-select, upload page and Bin work.",
   "broken": "Heading says “Video Library”; status filter (not published / no captions / failed) missing; cards don't show which workflow made them.",
   "refs": []
  },
  {
   "group": "Create",
   "module": "Project detail",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Tabs (recording, clips, captions, posts) open.",
   "broken": "No Overview / assistant briefing; clips only appear after starting “Smart Clips Analysis” by hand; the clip feature has three names.",
   "refs": [
    "CREATE-11"
   ]
  },
  {
   "group": "Create",
   "module": "Workflow composers",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Create clips, Caption, Go global, Make a podcast, Go vertical and Write all open and reach Start.",
   "broken": "Cost and time hidden until a video is picked; Brand Kit step, caption output choice and podcast audio steps missing; Spotlight each speaker starts with a blank so Start stays disabled. Running a job untested (spends credits).",
   "refs": []
  },
  {
   "group": "Create",
   "module": "Editor",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Opens with more tools than the reference, undo/redo, works on phone.",
   "broken": "Opening a project writes to the server (auto-save) and the AI Tools panel sends a job request with no click; no Post button.",
   "refs": [
    "CREATE-28"
   ]
  },
  {
   "group": "Create",
   "module": "Brand Kits",
   "status": "working",
   "statusLabel": "Working",
   "works": "List and a richer kit editor (intros/outros per shape).",
   "broken": "Create untested; Free plan can open the create form though pricing says custom kits are paid.",
   "refs": []
  },
  {
   "group": "Create",
   "module": "Voice clones",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Own-voice cloning flow opens.",
   "broken": "Cloning someone else's voice is “Coming soon”. Recording untested.",
   "refs": []
  },
  {
   "group": "Create",
   "module": "Playground",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Image generation UI works up to Generate.",
   "broken": "No video generation, templates or generation history.",
   "refs": [
    "CREATE-35"
   ]
  },
  {
   "group": "Create",
   "module": "AI Twins",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "—",
   "broken": "Module doesn't exist (404).",
   "refs": [
    "CREATE-40"
   ]
  },
  {
   "group": "Create",
   "module": "AI Clips / AI Dub pages",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "Jobs are reachable as Projects workflows instead.",
   "broken": "Standalone pages 404; Portrait Pro has no job list.",
   "refs": [
    "CREATE-41"
   ]
  },
  {
   "group": "Publish",
   "module": "Posts",
   "status": "broken",
   "statusLabel": "Broken",
   "works": "Tabs and the New post composer open; post details show an activity timeline.",
   "broken": "Posts list and metrics fail (500) so Best time to post and every view count are empty; each post listed twice; Manage accounts offers 9 platforms incl. ones “not set up on this server”; no Send for approval. Scheduling/publishing untested.",
   "refs": [
    "PUB-01",
    "PUB-07"
   ]
  },
  {
   "group": "Publish",
   "module": "Plan",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Month / Week / Day views and the New menu work.",
   "broken": "Live events fail to load (error banner on every view); 3.4–5.3 s to settle; no drag to reschedule.",
   "refs": [
    "PUB-17",
    "PUB-18"
   ]
  },
  {
   "group": "Publish",
   "module": "Podcast",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "—",
   "broken": "Module doesn't exist (404), though podcast distribution is a promised publish target.",
   "refs": [
    "PUB-34"
   ]
  },
  {
   "group": "Publish",
   "module": "Newsletter",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "—",
   "broken": "Module doesn't exist (404).",
   "refs": [
    "PUB-35"
   ]
  },
  {
   "group": "Publish",
   "module": "Website",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "—",
   "broken": "Creator site builder doesn't exist (404).",
   "refs": [
    "PUB-36"
   ]
  },
  {
   "group": "Insights",
   "module": "Analytics",
   "status": "broken",
   "statusLabel": "Broken",
   "works": "—",
   "broken": "Whole page is “Could not load analytics · internal error” (500); Try again repeats it; Export disabled.",
   "refs": [
    "PUB-23"
   ]
  },
  {
   "group": "Insights",
   "module": "Events & Logs",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "—",
   "broken": "Activity / audit log doesn't exist (404).",
   "refs": [
    "PUB-37"
   ]
  },
  {
   "group": "Account",
   "module": "Settings",
   "status": "partial",
   "statusLabel": "Partly working",
   "works": "Account, security sessions, workspace & team with custom roles, billing overview, connected accounts and connected apps (MCP) work.",
   "broken": "Destinations, Sources, Stream profiles, Notifications, Preferences and Storage tabs missing; billing has no invoices, payment method or cancel plan.",
   "refs": [
    "PUB-25",
    "PUB-26"
   ]
  },
  {
   "group": "Account",
   "module": "What's new / Profile",
   "status": "missing",
   "statusLabel": "Missing",
   "works": "Profile details live in Settings › Account.",
   "broken": "Both pages 404.",
   "refs": [
    "PUB-38",
    "PUB-39"
   ]
  }
 ]
};
