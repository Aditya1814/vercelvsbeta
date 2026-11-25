# Findings: medium severity (part 2 of 2)

63 findings. Each compares the Vercel reference with the beta.

## CREATE-16 — The post composer lists 8 platforms, including TikTok, LinkedIn, X, Threads and Snapchat, which the reference doesn't support

- Severity: **medium** · Type: Bug · Module: Project detail

**Vercel reference:** Posts tab: YouTube ✓, Instagram !, Facebook ✓ ('2 of 3 posts ready'). The product supports YouTube/Instagram/Facebook (plus Twitch live and podcast RSS), with no TikTok, LinkedIn or X.

**Beta:** Creations tab: YouTube ✓, Instagram !, TikTok !, LinkedIn !, Facebook !, X !, Threads !, Snapchat !, showing '1 of 8 posts ready'. The Create menu also says 'reframed for Reels, Shorts and TikTok', and the Make a podcast composer writes a 'LinkedIn post'.

**Impact:** Users get '1 of 8 ready' progress against platforms they may not be able to connect, which hurts trust and contradicts the website and pricing.

**Recommendation:** Limit the list to platforms that can actually be connected, or confirm they are supported and update the reference and website to match. Whether they can be connected on beta is unverified.

- Screenshot: [Screenshot · b_detail_tab_Creations.png](../../images/img0081.webp)
- Screenshot: [Screenshot · b_detail_createmenu.png](../../images/img0086.webp)

## CREATE-02 — The page heading says 'Video Library', but the nav item and the reference both say 'Projects'

- Severity: **medium** · Type: Copy · Module: Projects

**Vercel reference:** H1 'Projects', and the nav item is 'Projects'.

**Beta:** Nav item 'Projects', page H1 'Video Library', list heading 'Projects (4)'.

**Impact:** Two names for the same place makes users unsure they landed where they clicked.

**Recommendation:** Rename the H1 to 'Projects'.

- Screenshot: [Screenshot · b_proj_main.png](../../images/img0087.webp)
- Screenshot: [Vercel · desk__video_library.png](../../images/img0088.webp)

## CREATE-03 — Project cards don't show which workflow made them

- Severity: **medium** · Type: Missing · Module: Projects

**Vercel reference:** Card meta: 'Uploaded 2h ago · Shorts' / '· Reframe' / '· Dub' / '· Captions' / '· Writer', with the type shown as coloured text.

**Beta:** Card meta: 'Uploaded 6d ago · 51.7 MB'. There is no type label, so cards with the same auto name ('Session - 11/17/2026 · 17 Nov 2026' twice, 'test-clip' twice) can't be told apart.

**Impact:** Users can't scan the library for the output they want, such as their dub or their shorts.

**Recommendation:** Show the workflow/output type as meta text beside the date, as the reference does, and keep size in the detail view.

- Screenshot: [Screenshot · b_proj_main.png](../../images/img0087.webp)
- Screenshot: [Vercel · desk__video_library.png](../../images/img0088.webp)

## CREATE-04 — The status filter ('All videos': Not yet published / No captions yet / Failed analysis / Flagged content) is missing

- Severity: **medium** · Type: Missing · Module: Projects

**Vercel reference:** The filter row has Newest · All types · All duration · Favorites · Archived · All videos ▾ (Not yet published, No captions yet, Failed analysis, Flagged content).

**Beta:** The filter row has Newest · All media · Source · All duration · Favorites · Archived · Bin. There is no way to filter by publish, caption or analysis status.

**Impact:** Users can't find what still needs work, such as videos that failed or aren't published yet.

**Recommendation:** Add the status filter, backed by real job and publish status.

- Screenshot: [Screenshot · v_proj_f_Allvideos.png](../../images/img0089.webp)
- Screenshot: [Screenshot · b_proj_main.png](../../images/img0087.webp)

## CREATE-09 — On phone, the New Folder and New Project buttons are icons with no accessible name

- Severity: **medium** · Type: Accessibility · Module: Projects

**Vercel reference:** Desktop labels: 'New Folder' / 'New Project'.

**Beta:** At 390px both collapse to icon-only buttons (folder icon, '+ ▾'). Neither appears in the list of named controls, and the crawl counted 2 unnamed controls on /projects (phone).

**Impact:** Screen-reader users on phone can't find the two main create actions.

**Recommendation:** Add aria-label='New folder' / 'New project' to the icon-only variants.

- Screenshot: [Screenshot · b_ph_projects.png](../../images/img0090.webp)
- Screenshot: [Beta · phone__projects.png](../../images/img0091.webp)

## CREATE-37 — Can't clone someone else's voice ('Coming soon')

- Severity: **medium** · Type: Missing · Module: Voice clones

**Vercel reference:** Create voice clone ▸ 'Someone else's voice · Growth · With a consent recording from them · You'll need: their consent recording, then 30 seconds to 2 minutes of them talking.' The page says 'Clone a co-host's voice with their consent recording.'

**Beta:** The same dialog (with Whose / Recording / Finish steps) shows 'Someone else's voice … Coming soon. For now you can clone only your own voice.' The page copy changed to 'You read a short phrase aloud, so only you can clone your voice.' Stopped before any recording.

**Impact:** Shows with co-hosts can't dub every speaker in their own voice, which the AI Dub copy ('each speaker's own voice') still promises.

**Recommendation:** Ship consent-based co-host cloning, or remove 'each speaker's own voice' from Reach new languages until it ships.

- Screenshot: [Screenshot · b_vc_new.png](../../images/img0092.webp)
- Screenshot: [Screenshot · v_vc_new.png](../../images/img0093.webp)
- Screenshot: [Screenshot · b_wf_go-global_picked.png](../../images/img0094.webp)

## CREATE-19 — Composers hide the cost and time until a video is picked, and never show a time estimate

- Severity: **medium** · Type: UX · Module: Workflows

**Vercel reference:** Before picking a video: '7 steps · 75 credits · about 10 minutes' (create-clips), '3 steps · 15 credits', '6 steps · 125 credits', and so on.

**Beta:** Before picking: '5 steps · priced once uploaded'. After picking: '5 steps · about 5 credits' (create-clips), '4 steps · about 224 credits' (go-global on a 1:28 video). No duration estimate at any point.

**Impact:** Users can't judge cost or wait time before committing a video, and the price can jump (go-global went to 224 credits).

**Recommendation:** Show an estimate per minute up front (e.g. 'about 3 credits/min') and an 'about N minutes' estimate once a video is chosen.

- Screenshot: [Screenshot · b_wf_create-clips.png](../../images/img0095.webp)
- Screenshot: [Screenshot · b_wf_go-global_picked.png](../../images/img0094.webp)
- Screenshot: [Screenshot · v_wf_create-clips.png](../../images/img0096.webp)

## CREATE-20 — Workflows end with 'open Plan to post it' instead of 'send them for my approval'

- Severity: **medium** · Type: Journey · Module: Workflows

**Vercel reference:** Final clause: 'Then send them for my approval on YouTube and Instagram'. The Publish step is 'Post · YouTube, Instagram · Send for my approval'. After the run: 'Done. Clips … are ready. Review them now?'

**Beta:** Final clause: 'Then open Plan to post it on YouTube and Instagram'. The last step is 'Open Plan to publish · Plan'.

**Impact:** The hands-off approval loop the reference promises becomes a manual hand-off to another page.

**Recommendation:** Add the approval step (drafts queued for approval on the chosen platforms), or say clearly that the user will schedule in Plan.

- Screenshot: [Screenshot · b_wf_create-clips_picked.png](../../images/img0084.webp)
- Screenshot: [Screenshot · v_walk_later.png](../../images/img0097.webp)

## CREATE-21 — Create clips and Make it vertical drop the Brand Kit step and the 'Anything specific?' prompt

- Severity: **medium** · Type: Missing · Module: Workflows

**Vercel reference:** Create clips: '… add word-highlight captions and add my Brand Kit', with steps including 'Apply Brand Kit · Logo, Colours and fonts' (7 steps). It also has 'Anything specific? (optional)' and 'Length' fields. Make it vertical: '… with word-highlight captions and my Brand Kit'.

**Beta:** Create clips: 5 steps (Transcribe, Find moments, Follow the speaker, Write titles, Open Plan) with no Brand Kit and no free-text 'anything specific' field. Make it vertical: 4 steps, no Brand Kit.

**Impact:** Clips come out off-brand, and users can't steer which moments are picked.

**Recommendation:** Add the Brand Kit option/step and the optional 'Anything specific?' prompt to these composers.

- Screenshot: [Screenshot · b_wf_create-clips_picked.png](../../images/img0084.webp)
- Screenshot: [Screenshot · b_wf_go-vertical_picked.png](../../images/img0098.webp)
- Screenshot: [Screenshot · v_wf_create-clips.png](../../images/img0096.webp)

## CREATE-22 — Caption a video has no output choice (burned in and/or .srt) and only 1 step

- Severity: **medium** · Type: Missing · Module: Workflows

**Vercel reference:** 'Caption your video … as burned into the video and .srt file.' (3 steps · 15 credits).

**Beta:** 'Caption … in word colour change style, in the original language only.' (1 step: 'Transcribe word by word'). There is no output-format choice. It adds 'Label each speaker'.

**Impact:** Users don't know whether they'll get a burned-in video, a subtitle file, or both.

**Recommendation:** Add the output chooser (Burned in / .srt / .vtt) and the matching steps.

- Screenshot: [Screenshot · b_wf_caption_picked.png](../../images/img0099.webp)
- Screenshot: [Screenshot · v_wf_caption.png](../../images/img0100.webp)

## CREATE-23 — Make a podcast is missing audio cleanup, intro/outro music, chapters and audiograms

- Severity: **medium** · Type: Missing · Module: Workflows

**Vercel reference:** '… clean, levelled audio, intro and outro music and chapters. Write show notes, transcript and instagram caption, make 5 audiograms with word-highlight captions, then send it for my approval on YouTube.' (8 steps · 85 credits)

**Beta:** 'find the silences and filler words to cut, write show notes with chapters, summary and LinkedIn post and make up to 5 short clips. Then open Plan …' (5 steps). There is no audio levelling, no intro/outro music and no audiograms.

**Impact:** The podcast output is missing the parts that make it publishable as an episode.

**Recommendation:** Add audio levelling, intro/outro (from the Brand Kit) and audiogram steps, and replace the LinkedIn post with a supported platform.

- Screenshot: [Screenshot · b_wf_make-podcast_picked.png](../../images/img0101.webp)
- Screenshot: [Screenshot · v_wf_make-podcast.png](../../images/img0102.webp)

## CREATE-24 — Spotlight each speaker starts with an unfilled 'pick a shape' blank, so Start stays disabled

- Severity: **medium** · Type: Bug · Module: Workflows

**Vercel reference:** 'make 3 clips of each … as vertical clips locked on the speaker'. The shape defaults to vertical, and it finds 'every speaker'.

**Beta:** 'find 2 speakers and make 3 clips of each … as pick a shape clips locked on the speaker'. Under the steps: 'Pick a shape for the clips.' Start workflow is disabled after a video is picked (verified: enabled=false). The speaker count is fixed at 2.

**Impact:** The sentence reads as broken and the main action looks dead until the user finds the blank.

**Recommendation:** Default the shape to vertical 9:16 and the speaker count to auto-detect.

- Screenshot: [Screenshot · b_wf_speaker-clips_picked.png](../../images/img0103.webp)
- Screenshot: [Screenshot · v_wf_speaker-clips.png](../../images/img0104.webp)

## CREATE-25 — The 'Turn an idea into a video' workflow is missing, and unknown workflow links silently show the library

- Severity: **medium** · Type: Missing · Module: Workflows

**Vercel reference:** The workflow set includes idea-video ('Turn an idea into a video'), alongside go-live, record-episode, webinar, host-event and record-debate. An unknown id shows 'Unknown workflow. Go home'.

**Beta:** /projects?workflow=idea-video and /projects?workflow=nonsense both just render the Video Library with no message.

**Impact:** Shared or old links fail silently, and a reference workflow is unavailable.

**Recommendation:** Add idea-video, or show a 'This workflow isn't available' notice with a link Home.

- Screenshot: [Screenshot · b_up__projects_workflow_idea_video.png](../../images/img0105.webp)

## PUB-24 — No Share report, no section tabs (Overview/Live shows/Posts/Webinars)

- Severity: **medium** · Type: Missing · Module: Analytics

**Vercel reference:** Header: "Share report", 7d/30d/90d; section tabs Overview, Live shows, Posts, Webinars.

**Beta:** Header: Back, "Export CSV" (disabled), 7d/30d/90d. No Share report; section tabs not shown (could be hidden by the error state).

**Impact:** No way to share results with a team or client.

**Recommendation:** Add Share report and the section tabs once data loads.

- Screenshot: [Beta · beta_desk_analytics.png](../../images/img0001.webp)

## PUB-37 — Events & Logs (activity/audit log) missing (/events-logs 404)

- Severity: **medium** · Type: Missing · Module: Events & Logs

**Vercel reference:** Totals (37 events, 9 today, 8 alerts, 2 security), search, Today/7 days/30 days/All, status filter (Success/Info/Warning/Error), category filters (Publishing, Library, AI Processing, Clips, Automation, Account, System, Security, Retention, Exports, Collaboration), timeline with actor and time, Export CSV, Refresh.

**Beta:** Route 404. Partial substitutes: post detail "Activity" and Settings > Security device list.

**Impact:** Teams cannot audit who published/deleted what or why a publish failed.

**Recommendation:** Add at least a publishing + security log; reuse the post activity data.

- Screenshot: [Vercel · desk__events_logs.png](../../images/img0106.webp)

## PUB-35 — Newsletter module missing (/newsletter 404)

- Severity: **medium** · Type: Missing · Module: Newsletter

**Vercel reference:** Newsletter "Family Drama Weekly": stats (2,429 subscribers, last 7 days 42, today 7, top country India, open rate 50.7%, "Sample numbers until sending is connected"), tabs Posts / Subscribers / Settings, sent issues with opens/clicks, "Create post".

**Beta:** Route 404; no nav item.

**Impact:** No way to reach an audience by email from CloudReel.

**Recommendation:** Decide if Newsletter is in scope for launch; if yes build Posts + Subscribers.

- Screenshot: [Vercel · desk__newsletter.png](../../images/img0107.webp)

## PUB-18 — Plan takes 3.4-5.3 s to settle

- Severity: **medium** · Type: Speed · Module: Plan

**Vercel reference:** ~3.7 s on Vercel (mock, similar).

**Beta:** Measured 3.4 s (crawl), 4.5 s, 5.1 s and 5.3 s to network idle; the page waits on POST /api/studio-session then 4 sequential producerEventPlaylist calls before rendering events.

**Impact:** Calendar feels slow every time it is opened.

**Recommendation:** Fetch posts and events in parallel and render posts first; cache the studio session.

- Screenshot: [Beta · desk__plan.png](../../images/img0108.webp)

## PUB-19 — No drag-to-reschedule on the calendar

- Severity: **medium** · Type: Missing · Module: Plan

**Vercel reference:** Footer hint "Drag a post onto another day to reschedule it. The time stays the same."; dragging a post to Sat Nov 28 shows toast "Moved to Sat, Nov 28".

**Beta:** No drag hint; 0 elements with draggable=true. Could not test with real data because the workspace has no future scheduled posts (and moving one would write).

**Impact:** Rescheduling means opening each post instead of a quick drag.

**Recommendation:** Add drag-to-reschedule for scheduled (future) posts with an undo toast.

- Screenshot: [Vercel · vercel_desk_plan_after_drag.png](../../images/img0026.webp)
- Screenshot: [Beta · beta_desk_plan_month.png](../../images/img0025.webp)

## PUB-21 — Phone month grid: platform icons spill out of day cells, 24px tap targets

- Severity: **medium** · Type: Phone · Module: Plan

**Vercel reference:** Phone month uses small coloured dots per item plus the legend and drag hint.

**Beta:** Full YouTube icons are stacked in 50px cells and overflow (an element ends at x=413 on a 390 viewport); day buttons are 24x24 px (52 controls under 32px).

**Impact:** Items are hard to read and tap on a phone.

**Recommendation:** Use dots (as the reference) or a list/agenda view on phone and make day cells at least 44px targets.

- Screenshot: [Beta · beta_phone_ph_plan.png](../../images/img0109.webp)
- Screenshot: [Vercel · vercel_phone_ph_plan.png](../../images/img0110.webp)

## PUB-02 — Post details dialog: numbers fail to load (500)

- Severity: **medium** · Type: Bug · Module: Posts

**Vercel reference:** Post detail shows the post with "Posted to", caption, "Open project", "View on platform".

**Beta:** Detail opens (good) but shows "Could not load this post’s numbers: internal error"; GET /api/gateway/video/social/posts/<uuid>/metrics?range=90d -> 500.

**Impact:** User cannot see how a single post performed.

**Recommendation:** Fix the per-post metrics endpoint and replace the raw "internal error" with a human message.

- Screenshot: [Beta · beta_desk_post_row.png](../../images/img0111.webp)

## PUB-03 — Raw backend text "internal error" shown to users

- Severity: **medium** · Type: Copy · Module: Posts

**Vercel reference:** Errors are not shown in the reference (mock), states are written for people.

**Beta:** Error copy is the raw server string: "Could not read your post numbers: internal error", "Could not load analytics internal error", "Studio events could not be loaded: The Studio could not do that (200)."

**Impact:** Users get no idea what happened or what to do; "(200)" reads like a success code inside a failure.

**Recommendation:** Map backend errors to plain messages ("We couldn’t load your post stats. Try again in a minute.") and log the detail instead.

- Screenshot: [Beta · beta_desk_analytics.png](../../images/img0001.webp)
- Screenshot: [Beta · beta_desk_plan_month.png](../../images/img0025.webp)

## PUB-04 — Each post is listed twice with identical labels (one per YouTube channel)

- Severity: **medium** · Type: UX · Module: Posts

**Vercel reference:** Recently published rows name the platform per row ("Family Drama — Shorts YouTube · Nov 23" / "... Instagram · Nov 23").

**Beta:** Queue > Recently published shows "Session - 11/17/2026 · 17 Nov 2026 YouTube · 17/11/2026" twice and "CloudReel beta test clip YouTube · 16/11/2026" twice; the two connected YouTube accounts (Pavan M, pavan muddala) are not named on the rows. Same duplication on Plan calendar chips.

**Impact:** Looks like a double-publish bug; user cannot tell which channel each row is.

**Recommendation:** Show the account/channel name on each row (or group one video with its channel badges like the Posts tab table does).

- Screenshot: [Beta · beta_phone_ph_post.png](../../images/img0112.webp)
- Screenshot: [Beta · beta_desk_plan_month.png](../../images/img0025.webp)

## PUB-05 — Post counts disagree across the same page

- Severity: **medium** · Type: Bug · Module: Posts

**Vercel reference:** "This Month: Posts published 3" matches "Published 2" videos across 2 platforms consistently with the rows.

**Beta:** "This Month: Posts published 4" while the Posts tab says "2 Videos published" and "Published 2"; header pill "1 platform live".

**Impact:** Conflicting numbers on one screen erode trust in the stats.

**Recommendation:** Define one unit (post per channel vs video) and label each number accordingly ("4 posts across 2 videos").

- Screenshot: [Beta · beta_desk_post_tab_Posts.png](../../images/img0028.webp)

## PUB-06 — Naming: nav "Post", page "Posts", tab "Posts"

- Severity: **medium** · Type: Copy · Module: Posts

**Vercel reference:** Nav "Posts", page "Posts", tabs "Queue / Approvals / Published".

**Beta:** Sidebar says "Post", page H1 "Posts", and the third tab is also "Posts" (Vercel: "Published").

**Impact:** A tab with the same name as its page does not say what it contains.

**Recommendation:** Rename the tab to "Published" (it has Published/Scheduled/Failed/Sent for approval sub-tabs) and the nav item to "Posts".

- Screenshot: [Beta · beta_desk_post_tab_Posts.png](../../images/img0028.webp)

## PUB-08 — Connected-account count differs in four places

- Severity: **medium** · Type: Bug · Module: Posts

**Vercel reference:** One count everywhere ("3 platforms live", "3/3 connected").

**Beta:** Header "1 platform live"; Manage accounts "1/9 connected"; Settings > Connected Accounts "1 / 4 connected" (YouTube, Facebook, Instagram, Threads); Billing > Usage "Connected accounts 2 connected".

**Impact:** Users cannot tell what is actually connected.

**Recommendation:** Use one source of truth and one unit (platforms vs accounts) across header, dialog, Settings and Billing.

- Screenshot: [Beta · beta_desk_post_manage.png](../../images/img0031.webp)
- Screenshot: [Beta · beta_desk_settings_Connected_Accounts.png](../../images/img0113.webp)
- Screenshot: [Beta · beta_desk_settings_Billing_and_plans.png](../../images/img0035.webp)

## PUB-09 — Composer is missing several reference fields and "Send for approval"

- Severity: **medium** · Type: Missing · Module: Posts

**Vercel reference:** Composer: YouTube Playlist + Visibility (Public/Unlisted/Private); Instagram Post type (Feed/Reel/Story), "Also share to Facebook", hide counts; Facebook Page + visibility; thumbnail Upload / AI / pick from timeline; 6 languages (English, Telugu, Hindi, Tamil, Kannada, Malayalam); 23 video categories; footer "How to bulk publish? | Send for approval | Publish Now | Schedule for Nov 24, 13:36" -> "Confirm Schedule".

**Beta:** Composer (YouTube only connected): Visibility "Public", Notify subscribers, thumbnail "Upload an image" only (no AI / timeline pick), Language shows "English", no Playlist, no "Send for approval", footer "Publish Now | Schedule". Instagram/Facebook panels could not be compared (not connected).

**Impact:** Owners who want a teammate to review before posting, or want a non-English caption or timeline thumbnail, cannot do it.

**Recommendation:** Add Playlist, thumbnail-from-timeline, regional languages and a "Send for approval" action, or confirm these are intentionally dropped.

- Screenshot: [Beta · beta_desk_post_new2.png](../../images/img0032.webp)
- Screenshot: [Vercel · vercel_desk_post_new2.png](../../images/img0114.webp)

## PUB-14 — Phone: Best Time to Post, This Month and Quick Publish are hidden

- Severity: **medium** · Type: Phone · Module: Posts

**Vercel reference:** On 390px the side cards stack below the list (Best Time to Post visible on scroll).

**Beta:** "Best Time to Post" is in the DOM but not visible at 390px (isVisible=false after scrolling); the phone page ends after the post list.

**Impact:** Phone users lose timing advice and the Quick Publish action.

**Recommendation:** Stack the right-column cards under the list on small screens instead of hiding them.

- Screenshot: [Beta · beta_phone_ph_post.png](../../images/img0112.webp)
- Screenshot: [Vercel · vercel_phone_ph_post.png](../../images/img0115.webp)

## PUB-27 — Connected Accounts has no Publishing defaults

- Severity: **medium** · Type: Missing · Module: Settings

**Vercel reference:** Below accounts: Publishing defaults — time zone, default posting time, default platforms, caption signature, "Add hashtags automatically", "Send for approval first".

**Beta:** Only the account list (YouTube 2 accounts, Facebook, Instagram, Threads with Add account).

**Impact:** Users re-enter the same settings on every post.

**Recommendation:** Add the publishing defaults block.

- Screenshot: [Beta · beta_desk_settings_Connected_Accounts.png](../../images/img0113.webp)

## PUB-28 — Workspace & Team lacks channel requests and invite requests

- Severity: **medium** · Type: Missing · Module: Settings

**Vercel reference:** Workspaces list (Add workspace, Rename), seats "2 of 3 seats used", Invite dialog, "Channel requests" (Request New Channel), "Invite requests" for people without an account (pending approval/resend).

**Beta:** Workspace name + Save, members, inline "Invite by email / Role / Invite", roles table with custom roles.

**Impact:** Teams that need extra channels or admin-approved invites have no path.

**Recommendation:** Confirm whether channel/invite requests are in scope; if so add them.

- Screenshot: [Beta · beta_desk_settings_Workspace_Team.png](../../images/img0116.webp)

## PUB-40 — At 1440x900 the sidebar hides Plan, Simulcast and Analytics behind the pinned footer

- Severity: **medium** · Type: UI · Module: Shell

**Vercel reference:** Collapsed rail lists Posts, Plan, Podcast, Newsletter, Website, Simulcast, Analytics.

**Beta:** Sidebar shows "PUBLISH > Post" then the pinned Settings/credits footer; Plan (y=772), Simulcast (y=822) and Analytics (y=901) sit under it and need a sidebar scroll.

**Impact:** Two of the modules in this area are not discoverable without scrolling the nav.

**Recommendation:** Make the nav list scroll with a visible fade/indicator, or tighten spacing so all items fit at 900px.

- Screenshot: [Beta · beta_desk_analytics.png](../../images/img0001.webp)

## PUB-36 — Website (creator site) builder missing (/website 404)

- Severity: **medium** · Type: Missing · Module: Website

**Vercel reference:** Site builder for familydrama.cloudreel.site: pages Home/Podcast/About, add Newsletter page, Design (theme/logo), Address, live preview (desktop/phone), "View website", "Publish"; site shows episodes, clips, upcoming lives, podcast links, newsletter sign-up.

**Beta:** Route 404; no nav item.

**Impact:** Creators have no public home for their content.

**Recommendation:** Scope it after Podcast/Newsletter since the site aggregates them.

- Screenshot: [Vercel · desk__website.png](../../images/img0117.webp)
