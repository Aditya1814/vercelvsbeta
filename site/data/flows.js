window.DATA=window.DATA||{};window.DATA["flows"]={
 "lede": "Every flow tested, walked end to end on the reference and as far as safely possible on the beta. “Stopped” means the next step would have written real data on the beta. For the most important journeys shown with real screens, see Key journeys, screen by screen.",
 "rows": [
  {
   "module": "App shell",
   "flow": "First load of Home in a new tab",
   "vercel": "Open / -> Home briefing visible",
   "beta": "Open / -> \"Choose your plan\" modal -> Close -> Home",
   "result": "partial",
   "note": "Uninvited plan modal on each new tab/session."
  },
  {
   "module": "App shell",
   "flow": "Search / command palette",
   "vercel": "⌘K -> type \"brand\" -> Brand Kits",
   "beta": "Search icon or ⌘K -> type \"brand\" -> Brand Kits + Ask Deep Search",
   "result": "pass",
   "note": "Beta richer; shows Ctrl K on Mac."
  },
  {
   "module": "App shell",
   "flow": "Check credits / plan from header",
   "vercel": "Click \"Essential\" chip -> credits popover -> Plan, usage & billing",
   "beta": "Click \"Upgrade\" -> full checkout modal; credits only in sidebar footer",
   "result": "partial",
   "note": "No balance popover in header."
  },
  {
   "module": "App shell",
   "flow": "Get help",
   "vercel": "Header (?) -> Remy help drawer (FAQs, Help Docs, Contact support)",
   "beta": "Account menu -> Help & Support",
   "result": "partial",
   "note": "Not tested further on beta (plan modal blocked the click in the extra run)."
  },
  {
   "module": "Getting started",
   "flow": "Open getting-started checklist",
   "vercel": "Sidebar tile -> 4 steps (clips, live, guest, post)",
   "beta": "Sidebar tile -> 4 steps (upload, Magic Clips, dub/write, export)",
   "result": "partial",
   "note": "No live/publish steps."
  },
  {
   "module": "Home",
   "flow": "Start \"Go live\" from Home",
   "vercel": "Card -> /workflow?type=go-live guided plan -> Open the studio",
   "beta": "Card -> /studio list",
   "result": "fail",
   "note": "Same for webinar, event, episode, debate."
  },
  {
   "module": "Home",
   "flow": "Start \"Create clips\" from Home",
   "vercel": "Card -> /workflow?type=create-clips plan",
   "beta": "Card -> /projects?workflow=create-clips plan \"Here is what I will do...\"",
   "result": "stopped",
   "note": "Stopped before choosing a video / running (would spend credits)."
  },
  {
   "module": "Home",
   "flow": "Briefing primary action",
   "vercel": "Reconnect Facebook / Something else",
   "beta": "\"Yes, find the clips\" not clicked; \"Something else\" opens inline composer with suggestions",
   "result": "stopped",
   "note": "Stopped before \"Yes, find the clips\" (would run AI job)."
  },
  {
   "module": "Assistant",
   "flow": "Ask the assistant from the floating launcher",
   "vercel": "Click crew pill -> panel with role chips -> send -> answer",
   "beta": "Click \"Ask Orbit\" pill -> panel with role chips",
   "result": "stopped",
   "note": "Stopped before sending (forbidden). Opening fires a voice-session POST."
  },
  {
   "module": "Assistant",
   "flow": "Full assistant page, pick a crew role, personalise",
   "vercel": "/co-creator -> Producer -> suggestions change; Personalize modal; send \"Find my best clip\" -> clip card",
   "beta": "/co-creator -> no crew roles; Personalize modal opens; Autopilot pill",
   "result": "stopped",
   "note": "No role selection on page; did not send or toggle Autopilot."
  },
  {
   "module": "Auth",
   "flow": "Sign up",
   "vercel": "/signup -> /onboarding profile -> name/email/password + Google/Microsoft/GitHub -> Get started -> Home + 8-step tour",
   "beta": "/signup -> profile -> ?step=2 name/email/password with rules + Terms consent + Google only",
   "result": "stopped",
   "note": "Stopped before \"Create account\" (would create an account). Terms link is placeholder."
  },
  {
   "module": "Auth",
   "flow": "Sign in page",
   "vercel": "Mock always signed in (redirects to /); source: Google/Microsoft/GitHub + email",
   "beta": "/login: Google + email/password, Forgot password, Sign up, Pricing/Terms/Privacy links",
   "result": "pass",
   "note": "Did not submit."
  },
  {
   "module": "Auth",
   "flow": "Forgot password",
   "vercel": "Email -> Send reset link",
   "beta": "Email -> Send reset link (disabled when empty)",
   "result": "stopped",
   "note": "Not submitted (would send email)."
  },
  {
   "module": "Pricing",
   "flow": "Choose a plan from public pricing (signed in)",
   "vercel": "Get Growth -> checkout",
   "beta": "Get started -> /signup",
   "result": "fail",
   "note": "Signed-in users sent to sign-up."
  },
  {
   "module": "Phone",
   "flow": "Open navigation on phone",
   "vercel": "Header hamburger -> drawer with X",
   "beta": "Floating bottom-left button -> drawer, no X, no section labels",
   "result": "partial",
   "note": ""
  },
  {
   "module": "Go live journey",
   "flow": "Home Go live card -> composer -> studio",
   "vercel": "Home card -> /workflow?type=go-live composer -> Open the studio -> device check -> Join studio -> Stream panel open -> Go Live",
   "beta": "Home card -> /studio list (no composer)",
   "result": "fail",
   "note": "Beta has no go-live composer; /projects?workflow=go-live ignores the parameter."
  },
  {
   "module": "Go live journey",
   "flow": "Studio Go live -> lobby -> live",
   "vercel": "Go live -> source step -> Pick where to stream (Details per account) -> device check -> Join studio -> Stream panel \"Go Live on 2\" -> 10s countdown -> LIVE on 2 destinations + recording",
   "beta": "Go live (opens new tab) -> source step -> Pick where to stream (1 YouTube account, Details) -> device check",
   "result": "stopped",
   "note": "Stopped before \"Join studio\" (would join/create a studio session). All requests except GET were blocked by a guard, and none were attempted up to that point. Live room, Stream panel and Go Live dialog not compared."
  },
  {
   "module": "Go live journey",
   "flow": "Go Live fallback dialog",
   "vercel": "Record -> Join -> Stream -> Go Live with nothing ticked -> \"Go Live\" dialog with destinations, private test switch, Record toggle, LIVE CHECK list -> Cancel/Go Live",
   "beta": "Not reachable without joining a session",
   "result": "stopped",
   "note": "Needs a joined studio session."
  },
  {
   "module": "Studio list",
   "flow": "Schedule a session",
   "vercel": "Schedule -> dialog -> Schedule session",
   "beta": "Schedule -> same dialog (no Canva thumbnail) -> Escape",
   "result": "stopped",
   "note": "Stopped before \"Schedule session\" (would write data)."
  },
  {
   "module": "Studio list",
   "flow": "Record",
   "vercel": "Record -> source step (same tab)",
   "beta": "Record -> GET go-live-window -> new tab with source step",
   "result": "stopped",
   "note": "Stopped before joining."
  },
  {
   "module": "Studio list",
   "flow": "Bulk select",
   "vercel": "Select all -> top bar Download / Export list / Stop / Delete",
   "beta": "Select all -> floating bottom bar Download (2) / Export list / Delete -> clear",
   "result": "pass",
   "note": "Delete not pressed."
  },
  {
   "module": "Studio list",
   "flow": "Search with no results",
   "vercel": "type -> \"No recordings match … Try a different search.\"",
   "beta": "same copy",
   "result": "pass",
   "note": ""
  },
  {
   "module": "Studio list",
   "flow": "Open a recording",
   "vercel": "click card -> drawer with Recorded/Length/People, Make AI Clips / Edit in Editor / Open in Library / Download",
   "beta": "same drawer and actions; video plays from CloudFront",
   "result": "pass",
   "note": "People shows \"-\" on the beta."
  },
  {
   "module": "Studio list",
   "flow": "Live tab",
   "vercel": "Live tab -> Live now (2) + sample feeds, Simulcast a channel / Go live",
   "beta": "Live tab -> \"Nothing is live right now\" empty state, Simulcast a channel / Go live",
   "result": "pass",
   "note": "Copy matches."
  },
  {
   "module": "Encoders",
   "flow": "Add a phone (QR)",
   "vercel": "Add a phone -> My phone (scan code) / A teammate's phone",
   "beta": "No such action",
   "result": "fail",
   "note": ""
  },
  {
   "module": "Encoders",
   "flow": "Invite a teammate",
   "vercel": "Invite a teammate -> email -> Send invite",
   "beta": "Invite a user (empty state only) -> email + Role -> Cancel",
   "result": "stopped",
   "note": "Stopped before \"Send invitation\" (sends email)."
  },
  {
   "module": "Encoders",
   "flow": "Phone panel, history, Use in Studio, Disconnect",
   "vercel": "click phone -> drawer (Disconnect, Remove phone); Stream history list; Use in Studio -> lobby with SRT source",
   "beta": "Streams tab empty (\"Nothing is streaming\"); no phones to open",
   "result": "stopped",
   "note": "Workspace has 0 devices; cannot compare."
  },
  {
   "module": "Custom Layouts",
   "flow": "New layout",
   "vercel": "New layout -> editor -> Save",
   "beta": "New layout -> same editor",
   "result": "stopped",
   "note": "Stopped before Save. Import a layout opens a file chooser; not used."
  },
  {
   "module": "Graphics",
   "flow": "New design / template",
   "vercel": "New design -> editor -> Save",
   "beta": "New template -> editor (different element set); Start from a template -> Templates dialog",
   "result": "stopped",
   "note": "Stopped before Save; the editor's preview websocket was blocked by the guard."
  },
  {
   "module": "Simulcast",
   "flow": "Broadcast a video",
   "vercel": "Broadcast a video -> pick video -> Next -> multi-select destinations, Once/Loop -> Save as draft / Schedule / Go live",
   "beta": "Broadcast a video -> pick video -> Next -> single destination radio, Now/Schedule for later, Once/Loop -> Go live",
   "result": "stopped",
   "note": "Stopped before \"Go live\"; closed with Cancel. Single destination only."
  },
  {
   "module": "Simulcast",
   "flow": "New channel",
   "vercel": "n/a (no New channel button)",
   "beta": "New channel -> name -> Create channel",
   "result": "stopped",
   "note": "Stopped before \"Create channel\"."
  },
  {
   "module": "Simulcast",
   "flow": "Open a simulcast",
   "vercel": "card -> /channels?channel=… Overview / Schedule / Settings",
   "beta": "card -> /simulcast?channel=… Overview / Analytics / Schedule / Playlists / Settings",
   "result": "pass",
   "note": "Activate not pressed."
  },
  {
   "module": "Webinars",
   "flow": "Schedule / start a webinar",
   "vercel": "/webinars -> Schedule -> live webinar or on-demand from recording",
   "beta": "/webinars 404; Home \"Host a webinar\" -> /studio",
   "result": "fail",
   "note": ""
  },
  {
   "module": "Multiviewer",
   "flow": "Monitor an event",
   "vercel": "/multiviewer -> pick event -> grid + preview/master",
   "beta": "404",
   "result": "fail",
   "note": ""
  },
  {
   "module": "Async recording requests",
   "flow": "New recording request",
   "vercel": "/studio-async-requests -> New recording request -> Create",
   "beta": "404",
   "result": "fail",
   "note": ""
  },
  {
   "module": "Projects",
   "flow": "Browse, filter, sort, search",
   "vercel": "Open Projects → sort/type/duration/status filters → search → clear",
   "beta": "Open /projects → close auto plan dialog → sort/media/source/duration → search (?q=) → favorites/archived/bin views",
   "result": "partial",
   "note": "Works; status filter missing, no Clear-search button, plan modal interrupts each load."
  },
  {
   "module": "Projects",
   "flow": "Create a folder",
   "vercel": "New Folder → name → Create",
   "beta": "New Folder → 'Create New Folder' dialog (name + colour) → Cancel",
   "result": "stopped",
   "note": "Stopped before Create (would write data)."
  },
  {
   "module": "Projects",
   "flow": "Card ⋯ menu and multi-select",
   "vercel": "⋯: Download, Share, Add to Favorites, Archive, Move to Folder, Rename, Clone, Delete; select → Move/Take live/Download/Delete/Publish",
   "beta": "⋯: Overview, Download, Share, Add to Favorites, Archive, Move to Folder, Clone, Rename, Delete; select → '1 item selected' Clear/Move/Download/Take Live/Publish/Delete",
   "result": "pass",
   "note": "Parity (beta adds Overview). Actions not executed."
  },
  {
   "module": "Projects",
   "flow": "New project ▸ Upload / tools",
   "vercel": "New Project ▸ Upload Video → Add Files page; AI Clips/Captions/Portrait/Writer → dedicated tool pages; Record → studio session; Schedule → scheduler",
   "beta": "New Project ▸ Upload Video → /projects?new=upload 'Add Files'; tool items → workflow composers; Record/Schedule not clicked",
   "result": "partial",
   "note": "Upload page matches. Tool items route to composers. Record/Schedule skipped (could create a session)."
  },
  {
   "module": "Projects",
   "flow": "Assets tab",
   "vercel": "Assets → filters All/Images/Videos/Audio, Upload Asset, item actions",
   "beta": "Assets → empty state 'Add your first assets', filters, sort, grid/list, Upload files",
   "result": "pass",
   "note": "No assets in workspace; upload not attempted."
  },
  {
   "module": "Project detail",
   "flow": "Open a project and view its tabs",
   "vercel": "View project → Overview (Remy picks moments) → Moments → Posts → Files",
   "beta": "Card → /projects?video=<id> → Recording → Clips (Start analysis) → Captions → Creations (post composer) → Downloads → Drafts",
   "result": "partial",
   "note": "No Overview/briefing. Clips need a manual analysis (not started). Post/Schedule not clicked."
  },
  {
   "module": "Workflows",
   "flow": "Create clips from a library video",
   "vercel": "Composer → From my library → pick → Start workflow → run page 7/7 → 'Review the clips'",
   "beta": "Composer → choose a video → From my library → pick → '5 steps · about 5 credits' → options open",
   "result": "stopped",
   "note": "Stopped before Start workflow (would run an AI job)."
  },
  {
   "module": "Workflows",
   "flow": "Caption / Go global / Podcast / Speaker / Vertical / Write composers",
   "vercel": "Each composer with price shown before picking",
   "beta": "Each composer → pick library video → read steps and price",
   "result": "stopped",
   "note": "All reached the Start button; speaker-clips Start disabled until a shape is picked. Stopped before Start."
  },
  {
   "module": "Editor",
   "flow": "Open the editor without a project",
   "vercel": "/pro-video-editor → Start a project + tour",
   "beta": "/editor → ?draft=local-… 'Start a project' with a browser-only banner",
   "result": "pass",
   "note": "No visible project created (Projects count unchanged)."
  },
  {
   "module": "Editor",
   "flow": "Open an existing project in the editor",
   "vercel": "Edit a library video → editor with Remy suggestions, Post/Download",
   "beta": "/editor?content=<id> → tour (Esc) → editor; AI Tools and Orbit panels opened",
   "result": "partial",
   "note": "Load issued PUT editor-project; opening panels issued POST eye-contact job and voice session. No Post button."
  },
  {
   "module": "Brand Kits",
   "flow": "Create a brand kit",
   "vercel": "Add new → plan gate (Growth)",
   "beta": "Add new → 'New brand kit' dialog → Escape",
   "result": "stopped",
   "note": "Stopped before Create (would write data)."
  },
  {
   "module": "Voice clones",
   "flow": "New voice clone",
   "vercel": "New voice clone → Your own / Someone else's voice",
   "beta": "New voice clone → Whose (others 'Coming soon') → Escape",
   "result": "stopped",
   "note": "Stopped before recording."
  },
  {
   "module": "Playground",
   "flow": "Generate an asset",
   "vercel": "Video/Image switch → template or prompt → generate → Your generations",
   "beta": "Image presets → open Image type menu → Escape",
   "result": "stopped",
   "note": "Stopped before Generate (spends credits). Video and templates absent."
  },
  {
   "module": "AI Twins",
   "flow": "Open AI Twins",
   "vercel": "Nav → AI Twins page",
   "beta": "/ai-twins → 404",
   "result": "fail",
   "note": "Module missing."
  },
  {
   "module": "Posts",
   "flow": "Browse Queue / Approvals / Published",
   "vercel": "Open Posts; Queue shows 2 upcoming with \"In 5h 59m\" + Publish now/Edit; Approvals shows 3 with Approve/Request changes/Reject; Published table with views",
   "beta": "Open Post; Queue empty state + 4 recent rows (duplicated); Approvals empty state with explanation; \"Posts\" tab table with — for views",
   "result": "partial",
   "note": "Tabs work; numbers fail (500s), rows duplicated, tab named \"Posts\"."
  },
  {
   "module": "Posts",
   "flow": "Create and schedule a post",
   "vercel": "New post -> pick video -> composer (per-platform settings, AI generate, thumbnail, title/description/tags, category) -> \"Schedule for Nov 24, 13:36\" -> \"Confirm Schedule\"",
   "beta": "New post -> pick video (\"test-clip\") -> composer (YouTube settings, AI generator, title/description/tags, category, preview + checks) -> footer Publish Now / Schedule",
   "result": "stopped",
   "note": "Stopped before Schedule/Publish Now (would write). Missing Send for approval, playlist, timeline/AI thumbnail, regional languages."
  },
  {
   "module": "Posts",
   "flow": "Manage accounts",
   "vercel": "Manage accounts -> 3 platforms, Reconnect for expired Facebook",
   "beta": "Manage accounts -> 9 platforms, 1/9 connected, Add account on unsupported platforms",
   "result": "stopped",
   "note": "Stopped before Add account/remove (would connect/disconnect). Unsupported platforms offered."
  },
  {
   "module": "Posts",
   "flow": "Open a published post",
   "vercel": "Click row -> detail with Posted to, Open project, View on platform",
   "beta": "Click row -> Post details with activity timeline, View on YouTube; numbers fail",
   "result": "partial",
   "note": "GET /social/posts/<id>/metrics 500."
  },
  {
   "module": "Plan",
   "flow": "Switch Month / Week / Day",
   "vercel": "All three views with events + posts and per-day counts",
   "beta": "All three views render; only posts, no events",
   "result": "partial",
   "note": "Studio events error banner on every view."
  },
  {
   "module": "Plan",
   "flow": "Create item from calendar",
   "vercel": "New -> Post / Live event; click day -> composer",
   "beta": "New -> Post / Live event; \"Schedule a post on Wed Nov 25\" -> video picker",
   "result": "stopped",
   "note": "Stopped at video picker / menu (next step would create)."
  },
  {
   "module": "Plan",
   "flow": "Drag to reschedule",
   "vercel": "Drag post onto Sat 28 -> toast \"Moved to Sat, Nov 28\"",
   "beta": "No draggable items and no hint; no future posts to try",
   "result": "fail",
   "note": "Not available (unverified with real future posts; moving would write anyway)."
  },
  {
   "module": "Plan",
   "flow": "Filter to Live events",
   "vercel": "Live events filter shows live shows (Live/Upcoming/Ended)",
   "beta": "Live events filter shows empty month, \"0 live events\"",
   "result": "fail",
   "note": "producerEventPlaylist 200 but UI reports failure."
  },
  {
   "module": "Analytics",
   "flow": "View performance and change range",
   "vercel": "Overview with KPIs/chart/What worked; 7d/30d/90d change numbers; Live shows tab; Share report",
   "beta": "Error card; ranges are radios but data never loads; Try again repeats 500",
   "result": "fail",
   "note": "GET /social/overview?range=30d -> 500."
  },
  {
   "module": "Settings",
   "flow": "Change password",
   "vercel": "Dialog with hint for Google users -> Save password",
   "beta": "Dialog: current/new/confirm -> Cancel",
   "result": "stopped",
   "note": "Stopped before Save password."
  },
  {
   "module": "Settings",
   "flow": "Set up 2FA",
   "vercel": "Dialog with QR + manual key DEMO-SECRET + 6-digit code -> Verify & enable",
   "beta": "Opening the dialog sends POST /api/auth/mfa/enroll",
   "result": "stopped",
   "note": "Enrollment POST blocked by our read-only guard, so the dialog showed \"Could not reach the server\" (caused by us, not a beta bug). Real behaviour unverified."
  },
  {
   "module": "Settings",
   "flow": "Invite a team member",
   "vercel": "Invite -> dialog (email, role) -> Send invite",
   "beta": "Inline \"Invite by email\" + Role (Editor) + Invite button",
   "result": "stopped",
   "note": "Stopped before Invite (would send email)."
  },
  {
   "module": "Settings",
   "flow": "Add a destination / source / stream profile",
   "vercel": "Add destination (YouTube/Facebook/Instagram/Twitch/RTMP), Add RTMP source (push/pull, stream key), Add Stream Profile (resolution, fps, bitrate, codecs)",
   "beta": "No Destinations/Sources/Stream Profiles tabs in Settings",
   "result": "fail",
   "note": "Missing in Settings (may be elsewhere: unverified)."
  },
  {
   "module": "Settings",
   "flow": "Connect a social account",
   "vercel": "Connected Accounts -> Add account / Reconnect + Publishing defaults",
   "beta": "Connected Accounts -> 4 platforms with Add account (page pre-requests OAuth start-tickets on load)",
   "result": "stopped",
   "note": "Stopped before Add account (OAuth)."
  },
  {
   "module": "Settings",
   "flow": "Review billing",
   "vercel": "Recap, plan, Compare/Cancel plan, top-up packs, payment method, invoices",
   "beta": "Journey recap, Free plan + Upgrade, Buy credits, Automatic recharge, usage",
   "result": "partial",
   "note": "No invoices/payment method/cancel; stopped before Upgrade/Buy credits."
  },
  {
   "module": "All",
   "flow": "Phone 390px pass",
   "vercel": "Posts/Plan/Analytics/Settings usable; side cards stack; Plan uses dots",
   "beta": "No page-level horizontal scroll; Post hides side cards; Plan icons overflow cells; Settings list->detail is good",
   "result": "partial",
   "note": "See responsive findings."
  }
 ]
};
