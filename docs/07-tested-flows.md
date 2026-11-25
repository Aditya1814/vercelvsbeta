# All tested flows (checklist)

Every flow tested, walked end to end on the reference and as far as safely possible on the beta. “Stopped” means the next step would have written real data on the beta. For the most important journeys shown with real screens, see Key journeys, screen by screen.

## App shell — First load of Home in a new tab

- Result: **partial**
- Vercel: Open / -> Home briefing visible
- Beta: Open / -> "Choose your plan" modal -> Close -> Home
- Note: Uninvited plan modal on each new tab/session.

## App shell — Search / command palette

- Result: **pass**
- Vercel: ⌘K -> type "brand" -> Brand Kits
- Beta: Search icon or ⌘K -> type "brand" -> Brand Kits + Ask Deep Search
- Note: Beta richer; shows Ctrl K on Mac.

## App shell — Check credits / plan from header

- Result: **partial**
- Vercel: Click "Essential" chip -> credits popover -> Plan, usage & billing
- Beta: Click "Upgrade" -> full checkout modal; credits only in sidebar footer
- Note: No balance popover in header.

## App shell — Get help

- Result: **partial**
- Vercel: Header (?) -> Remy help drawer (FAQs, Help Docs, Contact support)
- Beta: Account menu -> Help & Support
- Note: Not tested further on beta (plan modal blocked the click in the extra run).

## Getting started — Open getting-started checklist

- Result: **partial**
- Vercel: Sidebar tile -> 4 steps (clips, live, guest, post)
- Beta: Sidebar tile -> 4 steps (upload, Magic Clips, dub/write, export)
- Note: No live/publish steps.

## Home — Start "Go live" from Home

- Result: **fail**
- Vercel: Card -> /workflow?type=go-live guided plan -> Open the studio
- Beta: Card -> /studio list
- Note: Same for webinar, event, episode, debate.

## Home — Start "Create clips" from Home

- Result: **stopped**
- Vercel: Card -> /workflow?type=create-clips plan
- Beta: Card -> /projects?workflow=create-clips plan "Here is what I will do..."
- Note: Stopped before choosing a video / running (would spend credits).

## Home — Briefing primary action

- Result: **stopped**
- Vercel: Reconnect Facebook / Something else
- Beta: "Yes, find the clips" not clicked; "Something else" opens inline composer with suggestions
- Note: Stopped before "Yes, find the clips" (would run AI job).

## Assistant — Ask the assistant from the floating launcher

- Result: **stopped**
- Vercel: Click crew pill -> panel with role chips -> send -> answer
- Beta: Click "Ask Orbit" pill -> panel with role chips
- Note: Stopped before sending (forbidden). Opening fires a voice-session POST.

## Assistant — Full assistant page, pick a crew role, personalise

- Result: **stopped**
- Vercel: /co-creator -> Producer -> suggestions change; Personalize modal; send "Find my best clip" -> clip card
- Beta: /co-creator -> no crew roles; Personalize modal opens; Autopilot pill
- Note: No role selection on page; did not send or toggle Autopilot.

## Auth — Sign up

- Result: **stopped**
- Vercel: /signup -> /onboarding profile -> name/email/password + Google/Microsoft/GitHub -> Get started -> Home + 8-step tour
- Beta: /signup -> profile -> ?step=2 name/email/password with rules + Terms consent + Google only
- Note: Stopped before "Create account" (would create an account). Terms link is placeholder.

## Auth — Sign in page

- Result: **pass**
- Vercel: Mock always signed in (redirects to /); source: Google/Microsoft/GitHub + email
- Beta: /login: Google + email/password, Forgot password, Sign up, Pricing/Terms/Privacy links
- Note: Did not submit.

## Auth — Forgot password

- Result: **stopped**
- Vercel: Email -> Send reset link
- Beta: Email -> Send reset link (disabled when empty)
- Note: Not submitted (would send email).

## Pricing — Choose a plan from public pricing (signed in)

- Result: **fail**
- Vercel: Get Growth -> checkout
- Beta: Get started -> /signup
- Note: Signed-in users sent to sign-up.

## Phone — Open navigation on phone

- Result: **partial**
- Vercel: Header hamburger -> drawer with X
- Beta: Floating bottom-left button -> drawer, no X, no section labels
- Note: 

## Go live journey — Home Go live card -> composer -> studio

- Result: **fail**
- Vercel: Home card -> /workflow?type=go-live composer -> Open the studio -> device check -> Join studio -> Stream panel open -> Go Live
- Beta: Home card -> /studio list (no composer)
- Note: Beta has no go-live composer; /projects?workflow=go-live ignores the parameter.

## Go live journey — Studio Go live -> lobby -> live

- Result: **stopped**
- Vercel: Go live -> source step -> Pick where to stream (Details per account) -> device check -> Join studio -> Stream panel "Go Live on 2" -> 10s countdown -> LIVE on 2 destinations + recording
- Beta: Go live (opens new tab) -> source step -> Pick where to stream (1 YouTube account, Details) -> device check
- Note: Stopped before "Join studio" (would join/create a studio session). All requests except GET were blocked by a guard, and none were attempted up to that point. Live room, Stream panel and Go Live dialog not compared.

## Go live journey — Go Live fallback dialog

- Result: **stopped**
- Vercel: Record -> Join -> Stream -> Go Live with nothing ticked -> "Go Live" dialog with destinations, private test switch, Record toggle, LIVE CHECK list -> Cancel/Go Live
- Beta: Not reachable without joining a session
- Note: Needs a joined studio session.

## Studio list — Schedule a session

- Result: **stopped**
- Vercel: Schedule -> dialog -> Schedule session
- Beta: Schedule -> same dialog (no Canva thumbnail) -> Escape
- Note: Stopped before "Schedule session" (would write data).

## Studio list — Record

- Result: **stopped**
- Vercel: Record -> source step (same tab)
- Beta: Record -> GET go-live-window -> new tab with source step
- Note: Stopped before joining.

## Studio list — Bulk select

- Result: **pass**
- Vercel: Select all -> top bar Download / Export list / Stop / Delete
- Beta: Select all -> floating bottom bar Download (2) / Export list / Delete -> clear
- Note: Delete not pressed.

## Studio list — Search with no results

- Result: **pass**
- Vercel: type -> "No recordings match … Try a different search."
- Beta: same copy
- Note: 

## Studio list — Open a recording

- Result: **pass**
- Vercel: click card -> drawer with Recorded/Length/People, Make AI Clips / Edit in Editor / Open in Library / Download
- Beta: same drawer and actions; video plays from CloudFront
- Note: People shows "-" on the beta.

## Studio list — Live tab

- Result: **pass**
- Vercel: Live tab -> Live now (2) + sample feeds, Simulcast a channel / Go live
- Beta: Live tab -> "Nothing is live right now" empty state, Simulcast a channel / Go live
- Note: Copy matches.

## Encoders — Add a phone (QR)

- Result: **fail**
- Vercel: Add a phone -> My phone (scan code) / A teammate's phone
- Beta: No such action
- Note: 

## Encoders — Invite a teammate

- Result: **stopped**
- Vercel: Invite a teammate -> email -> Send invite
- Beta: Invite a user (empty state only) -> email + Role -> Cancel
- Note: Stopped before "Send invitation" (sends email).

## Encoders — Phone panel, history, Use in Studio, Disconnect

- Result: **stopped**
- Vercel: click phone -> drawer (Disconnect, Remove phone); Stream history list; Use in Studio -> lobby with SRT source
- Beta: Streams tab empty ("Nothing is streaming"); no phones to open
- Note: Workspace has 0 devices; cannot compare.

## Custom Layouts — New layout

- Result: **stopped**
- Vercel: New layout -> editor -> Save
- Beta: New layout -> same editor
- Note: Stopped before Save. Import a layout opens a file chooser; not used.

## Graphics — New design / template

- Result: **stopped**
- Vercel: New design -> editor -> Save
- Beta: New template -> editor (different element set); Start from a template -> Templates dialog
- Note: Stopped before Save; the editor's preview websocket was blocked by the guard.

## Simulcast — Broadcast a video

- Result: **stopped**
- Vercel: Broadcast a video -> pick video -> Next -> multi-select destinations, Once/Loop -> Save as draft / Schedule / Go live
- Beta: Broadcast a video -> pick video -> Next -> single destination radio, Now/Schedule for later, Once/Loop -> Go live
- Note: Stopped before "Go live"; closed with Cancel. Single destination only.

## Simulcast — New channel

- Result: **stopped**
- Vercel: n/a (no New channel button)
- Beta: New channel -> name -> Create channel
- Note: Stopped before "Create channel".

## Simulcast — Open a simulcast

- Result: **pass**
- Vercel: card -> /channels?channel=… Overview / Schedule / Settings
- Beta: card -> /simulcast?channel=… Overview / Analytics / Schedule / Playlists / Settings
- Note: Activate not pressed.

## Webinars — Schedule / start a webinar

- Result: **fail**
- Vercel: /webinars -> Schedule -> live webinar or on-demand from recording
- Beta: /webinars 404; Home "Host a webinar" -> /studio
- Note: 

## Multiviewer — Monitor an event

- Result: **fail**
- Vercel: /multiviewer -> pick event -> grid + preview/master
- Beta: 404
- Note: 

## Async recording requests — New recording request

- Result: **fail**
- Vercel: /studio-async-requests -> New recording request -> Create
- Beta: 404
- Note: 

## Projects — Browse, filter, sort, search

- Result: **partial**
- Vercel: Open Projects → sort/type/duration/status filters → search → clear
- Beta: Open /projects → close auto plan dialog → sort/media/source/duration → search (?q=) → favorites/archived/bin views
- Note: Works; status filter missing, no Clear-search button, plan modal interrupts each load.

## Projects — Create a folder

- Result: **stopped**
- Vercel: New Folder → name → Create
- Beta: New Folder → 'Create New Folder' dialog (name + colour) → Cancel
- Note: Stopped before Create (would write data).

## Projects — Card ⋯ menu and multi-select

- Result: **pass**
- Vercel: ⋯: Download, Share, Add to Favorites, Archive, Move to Folder, Rename, Clone, Delete; select → Move/Take live/Download/Delete/Publish
- Beta: ⋯: Overview, Download, Share, Add to Favorites, Archive, Move to Folder, Clone, Rename, Delete; select → '1 item selected' Clear/Move/Download/Take Live/Publish/Delete
- Note: Parity (beta adds Overview). Actions not executed.

## Projects — New project ▸ Upload / tools

- Result: **partial**
- Vercel: New Project ▸ Upload Video → Add Files page; AI Clips/Captions/Portrait/Writer → dedicated tool pages; Record → studio session; Schedule → scheduler
- Beta: New Project ▸ Upload Video → /projects?new=upload 'Add Files'; tool items → workflow composers; Record/Schedule not clicked
- Note: Upload page matches. Tool items route to composers. Record/Schedule skipped (could create a session).

## Projects — Assets tab

- Result: **pass**
- Vercel: Assets → filters All/Images/Videos/Audio, Upload Asset, item actions
- Beta: Assets → empty state 'Add your first assets', filters, sort, grid/list, Upload files
- Note: No assets in workspace; upload not attempted.

## Project detail — Open a project and view its tabs

- Result: **partial**
- Vercel: View project → Overview (Remy picks moments) → Moments → Posts → Files
- Beta: Card → /projects?video=<id> → Recording → Clips (Start analysis) → Captions → Creations (post composer) → Downloads → Drafts
- Note: No Overview/briefing. Clips need a manual analysis (not started). Post/Schedule not clicked.

## Workflows — Create clips from a library video

- Result: **stopped**
- Vercel: Composer → From my library → pick → Start workflow → run page 7/7 → 'Review the clips'
- Beta: Composer → choose a video → From my library → pick → '5 steps · about 5 credits' → options open
- Note: Stopped before Start workflow (would run an AI job).

## Workflows — Caption / Go global / Podcast / Speaker / Vertical / Write composers

- Result: **stopped**
- Vercel: Each composer with price shown before picking
- Beta: Each composer → pick library video → read steps and price
- Note: All reached the Start button; speaker-clips Start disabled until a shape is picked. Stopped before Start.

## Editor — Open the editor without a project

- Result: **pass**
- Vercel: /pro-video-editor → Start a project + tour
- Beta: /editor → ?draft=local-… 'Start a project' with a browser-only banner
- Note: No visible project created (Projects count unchanged).

## Editor — Open an existing project in the editor

- Result: **partial**
- Vercel: Edit a library video → editor with Remy suggestions, Post/Download
- Beta: /editor?content=<id> → tour (Esc) → editor; AI Tools and Orbit panels opened
- Note: Load issued PUT editor-project; opening panels issued POST eye-contact job and voice session. No Post button.

## Brand Kits — Create a brand kit

- Result: **stopped**
- Vercel: Add new → plan gate (Growth)
- Beta: Add new → 'New brand kit' dialog → Escape
- Note: Stopped before Create (would write data).

## Voice clones — New voice clone

- Result: **stopped**
- Vercel: New voice clone → Your own / Someone else's voice
- Beta: New voice clone → Whose (others 'Coming soon') → Escape
- Note: Stopped before recording.

## Playground — Generate an asset

- Result: **stopped**
- Vercel: Video/Image switch → template or prompt → generate → Your generations
- Beta: Image presets → open Image type menu → Escape
- Note: Stopped before Generate (spends credits). Video and templates absent.

## AI Twins — Open AI Twins

- Result: **fail**
- Vercel: Nav → AI Twins page
- Beta: /ai-twins → 404
- Note: Module missing.

## Posts — Browse Queue / Approvals / Published

- Result: **partial**
- Vercel: Open Posts; Queue shows 2 upcoming with "In 5h 59m" + Publish now/Edit; Approvals shows 3 with Approve/Request changes/Reject; Published table with views
- Beta: Open Post; Queue empty state + 4 recent rows (duplicated); Approvals empty state with explanation; "Posts" tab table with — for views
- Note: Tabs work; numbers fail (500s), rows duplicated, tab named "Posts".

## Posts — Create and schedule a post

- Result: **stopped**
- Vercel: New post -> pick video -> composer (per-platform settings, AI generate, thumbnail, title/description/tags, category) -> "Schedule for Nov 24, 13:36" -> "Confirm Schedule"
- Beta: New post -> pick video ("test-clip") -> composer (YouTube settings, AI generator, title/description/tags, category, preview + checks) -> footer Publish Now / Schedule
- Note: Stopped before Schedule/Publish Now (would write). Missing Send for approval, playlist, timeline/AI thumbnail, regional languages.

## Posts — Manage accounts

- Result: **stopped**
- Vercel: Manage accounts -> 3 platforms, Reconnect for expired Facebook
- Beta: Manage accounts -> 9 platforms, 1/9 connected, Add account on unsupported platforms
- Note: Stopped before Add account/remove (would connect/disconnect). Unsupported platforms offered.

## Posts — Open a published post

- Result: **partial**
- Vercel: Click row -> detail with Posted to, Open project, View on platform
- Beta: Click row -> Post details with activity timeline, View on YouTube; numbers fail
- Note: GET /social/posts/<id>/metrics 500.

## Plan — Switch Month / Week / Day

- Result: **partial**
- Vercel: All three views with events + posts and per-day counts
- Beta: All three views render; only posts, no events
- Note: Studio events error banner on every view.

## Plan — Create item from calendar

- Result: **stopped**
- Vercel: New -> Post / Live event; click day -> composer
- Beta: New -> Post / Live event; "Schedule a post on Wed Nov 25" -> video picker
- Note: Stopped at video picker / menu (next step would create).

## Plan — Drag to reschedule

- Result: **fail**
- Vercel: Drag post onto Sat 28 -> toast "Moved to Sat, Nov 28"
- Beta: No draggable items and no hint; no future posts to try
- Note: Not available (unverified with real future posts; moving would write anyway).

## Plan — Filter to Live events

- Result: **fail**
- Vercel: Live events filter shows live shows (Live/Upcoming/Ended)
- Beta: Live events filter shows empty month, "0 live events"
- Note: producerEventPlaylist 200 but UI reports failure.

## Analytics — View performance and change range

- Result: **fail**
- Vercel: Overview with KPIs/chart/What worked; 7d/30d/90d change numbers; Live shows tab; Share report
- Beta: Error card; ranges are radios but data never loads; Try again repeats 500
- Note: GET /social/overview?range=30d -> 500.

## Settings — Change password

- Result: **stopped**
- Vercel: Dialog with hint for Google users -> Save password
- Beta: Dialog: current/new/confirm -> Cancel
- Note: Stopped before Save password.

## Settings — Set up 2FA

- Result: **stopped**
- Vercel: Dialog with QR + manual key DEMO-SECRET + 6-digit code -> Verify & enable
- Beta: Opening the dialog sends POST /api/auth/mfa/enroll
- Note: Enrollment POST blocked by our read-only guard, so the dialog showed "Could not reach the server" (caused by us, not a beta bug). Real behaviour unverified.

## Settings — Invite a team member

- Result: **stopped**
- Vercel: Invite -> dialog (email, role) -> Send invite
- Beta: Inline "Invite by email" + Role (Editor) + Invite button
- Note: Stopped before Invite (would send email).

## Settings — Add a destination / source / stream profile

- Result: **fail**
- Vercel: Add destination (YouTube/Facebook/Instagram/Twitch/RTMP), Add RTMP source (push/pull, stream key), Add Stream Profile (resolution, fps, bitrate, codecs)
- Beta: No Destinations/Sources/Stream Profiles tabs in Settings
- Note: Missing in Settings (may be elsewhere: unverified).

## Settings — Connect a social account

- Result: **stopped**
- Vercel: Connected Accounts -> Add account / Reconnect + Publishing defaults
- Beta: Connected Accounts -> 4 platforms with Add account (page pre-requests OAuth start-tickets on load)
- Note: Stopped before Add account (OAuth).

## Settings — Review billing

- Result: **partial**
- Vercel: Recap, plan, Compare/Cancel plan, top-up packs, payment method, invoices
- Beta: Journey recap, Free plan + Upgrade, Buy credits, Automatic recharge, usage
- Note: No invoices/payment method/cancel; stopped before Upgrade/Buy credits.

## All — Phone 390px pass

- Result: **partial**
- Vercel: Posts/Plan/Analytics/Settings usable; side cards stack; Plan uses dots
- Beta: No page-level horizontal scroll; Post hides side cards; Plan icons overflow cells; Settings list->detail is good
- Note: See responsive findings.
