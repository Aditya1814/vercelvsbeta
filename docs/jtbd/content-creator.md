# Segment: Content creator

**Partly ready.** A creator can get from Home to a priced Create clips plan in 3 steps and can post a single video to YouTube, so the main clip job is probably doable. But in this workspace the beta blocks or breaks the rest of the loop: Go live from Home skips the composer and is blocked by another session's 4-hour live window, Free allows one destination and has no per-destination subtitles, and Analytics and every view count return 500. Planning a week means scheduling clips one at a time: no 'spread over a week', no best times, no drag to reschedule.

- Who: Solo creator publishing to YouTube (long-form + Shorts) and Instagram Reels, sometimes live. Matches the sign-up profile 'Content Creator: YouTube, shorts and social video' (beta /signup step 1) and 'Solo creators, Reels, Shorts, and social-first content' (reference /onboarding).
- Plan: Starts on Free (1,000 credits, 1 live destination: '1 of 1 on your Free plan'). Moves to Lite ($12) or Essential ($29, 3,600 credits, 2 live destinations) once they stream to YouTube and Instagram together.
- Success for them: One long video becomes a week of captioned vertical clips on YouTube and Instagram with little effort, live shows reach both platforms at once, and they can see which posts did best so they can make more like them.

## Top blockers

- Analytics page and all post view counts fail with 500 (BUG-FUNC-01, BUG-FUNC-02): no way to see what did best
- Go live: the Home card drops the user on the Studio list (SHA-02/LIVE-01). Go live is refused while another session's window is open (409 event_overlap). Free allows only 1 destination and has no per-destination Subtitles
- Workflows end with 'open Plan to post' (CREATE-20). There is no 'Spread over one week', 'Schedule at best times' or 'Send for my approval', so a week of clips means scheduling each one by hand
- Clips on an existing project need a manual 'Start Smart Clips Analysis' (CREATE-14). Create clips has no Brand Kit step and offers only a vertical shape (CREATE-21)
- Sidebar shows '1,000 / NaN credits' (new in this pass, 3/3 loads), so the remaining balance can't be read at a glance


## CC-J1 — Not verified (Core)

> When I finish a long video, I want to turn it into captioned Shorts/Reels and post them to YouTube and Instagram, so I can grow my channels without editing each clip by hand.

The beta reaches a priced plan in 3 steps, the same count as the reference. Start workflow, review and post were skipped because they spend credits or publish. Expected result is done-with-friction: no Brand Kit step, vertical-only shape, and the run ends with 'open Plan to post' instead of approval/scheduling.

**Success looks like**

- From Home to clips queued for YouTube + Instagram in ≤ 6 screens
- Cost and time shown before starting
- Clips come out 9:16 with captions and my branding, and I review them before they post

Related: CREATE-13, CREATE-14, CREATE-19, CREATE-20, CREATE-21, BUG-FUNC-13, PUB-07, BUG-FUNC-06, SHA-18

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Home and pick the 'Create clips' card (Home) | **Pass** Opens /workflow?type=create-clips composer. | **Pass** Card opens /projects?workflow=create-clips with the same sentence-style composer. |
| 2 | Choose the long video (From my library) (Workflows) | **Pass** Library picker with 6 demo videos. | **Pass** Picker offers From my library / Upload a file / Paste a link. 4 videos listed. |
| 3 | Read the plan and price (Workflows) | **Pass** '7 steps · 75 credits · about 10 minutes' shown before a video is picked. | **Partial** '5 steps · about 5 credits' appears only after a video is picked ('priced once uploaded' before). No time estimate (CREATE-19). |
| 4 | Set shape, captions and branding (Workflows) | **Pass** Shapes toggle Vertical 9:16 / Portrait 4:5 / Square 1:1 / Wide 16:9. Word-highlight captions. 'add my Brand Kit' step with logo, colours and fonts. | **Partial** Shape token offers only 'vertical and following the speaker' or 'centre-cropped'. 5 caption styles. No Brand Kit step (CREATE-21). |
| 5 | Choose how the clips get posted (Workflows) | **Pass** Publish chip: YouTube/Instagram/Facebook. Send for my approval / Schedule at best times / Save as drafts / Spread over one or two weeks. | **Partial** 'open Plan to post… Nothing posts until you post it.' Platform list also has TikTok, LinkedIn and X, which can't be connected (BUG-FUNC-13, PUB-07). No scheduling or approval options (CREATE-20). |
| 6 | Start the workflow and watch progress (Workflows) | **Pass** Run page counts 7/7 steps and ends with 'All done. Your drafts are ready to review.' plus Review results. | **Not run** Stopped before 'Start workflow' (would run an AI job and spend credits). |
| 7 | Review the clips (Project detail) | **Pass** Project opens on Clips (12) with score, 'Preview on: Reels/Shorts', Edit and Share. | **Not run** Not reached. On an existing project the Clips tab shows only 'Start Smart Clips Analysis', so clips aren't there until you run it by hand (CREATE-14, CREATE-13 naming). |
| 8 | Post the clips to YouTube and Instagram (Posts) | **Pass** Clips go to Posts › Approvals, where you Approve / Request changes / Reject or 'Approve all 3'. | **Not run** The Creations tab has a composer per platform with Schedule / Post now. Only YouTube is connected here, and Instagram shows '!'. Stopped before Schedule/Post now. |

- Screenshot: [Beta · step 1 · Open Home and pick the 'Create clips' card](../../images/img0293.webp)
- Screenshot: [Beta · step 2 · Choose the long video (From my library)](../../images/img0294.webp)
- Screenshot: [Beta · step 3 · Read the plan and price](../../images/img0295.webp)
- Screenshot: [Beta · step 4 · Set shape, captions and branding](../../images/img0296.webp)
- Screenshot: [Beta · step 5 · Choose how the clips get posted](../../images/img0297.webp)
- Screenshot: [Beta · step 7 · Review the clips](../../images/img0083.webp)
- Screenshot: [Beta · step 8 · Post the clips to YouTube and Instagram](../../images/img0081.webp)

## CC-J2 — Blocked (Core)

> When I go live, I want to stream to YouTube and Instagram at once and get clips afterwards, so I can reach both audiences and keep posting after the show.

In this workspace Go live is refused because a session from 5:04–9:04 PM is still 'Live'. Even without that, a Free creator gets 1 destination, Instagram needs a new connection, and there are no per-destination subtitles. The reference goes Home → composer → lobby → studio → Go Live on 2 destinations → 'Live ended' summary.

**Success looks like**

- One Go Live sends to YouTube and Instagram together
- ≤ 5 screens from Home to on air
- Clips and the recording are ready afterwards without extra setup

Related: SHA-02, LIVE-02, LIVE-03, LIVE-22, CREATE-14, SHA-01

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Home and pick the 'Go live' card (Home) | **Pass** Composer: 'Go live now on YouTube from my camera, with a live transcript, clips… Afterwards, turn it into vertical clips and send them for my approval', 8 steps · 60 credits, Open the studio. | **Partial** Card lands on the Studio list with no composer, so clip and subtitle choices are lost (SHA-02, LIVE-01). |
| 2 | Press Go live (Studio) | **Pass** Opens the device-check lobby. | **Fail** Error toast: 'Can't go live now. This time overlaps with "Session - 11/24/2026 05:03:26 PM" (Nov 24, 2026, 5:04 PM – 9:04PM). To go live now, start that session from its card.' (GET /studio/v1/events/go-live-window → 409 event_overlap). Its Resume button would join that session, so we stopped. |
| 3 | Pick where to stream (YouTube + Instagram) (Studio) | **Pass** Go Live dialog: 'DESTINATIONS · 2/2 on Essential', per-destination Stream/Title/Privacy and a Subtitles language list (English, Hindi, Telugu…). | **Partial** From the earlier pass today (13:38): 'Pick where to stream' with 1 YouTube account and '1 of 1 on your Free plan'. Instagram appears only as 'Connect another' (OAuth). No Subtitles field. |
| 4 | Device check and join the studio (Studio) | **Pass** Camera, mic, speaker test, then Join studio. | **Not run** Device check screen exists (earlier pass). Stopped before 'Join studio' (would create or join a session). Go live / Record open a new tab (LIVE-03). |
| 5 | Go live on both, then end (Studio) | **Pass** LIVE on 2 destinations with recording. 'End Live?' confirm, then a 'Live ended' summary listing each destination as Streamed. | **Not run** Would start a real stream. |
| 6 | Get clips from the show (Project detail) | **Partial** Summary says the recording goes to the library. Clips come from the workflow's 'afterwards' step, which the summary does not link to. | **Not run** Recordings show up in Projects, but clips need a manual 'Start Smart Clips Analysis' (CREATE-14). |

- Screenshot: [Beta · step 1 · Open Home and pick the 'Go live' card](../../images/img0298.webp)
- Screenshot: [Beta · step 2 · Press Go live](../../images/img0299.webp)
- Screenshot: [Beta · step 3 · Pick where to stream (YouTube + Instagram)](../../images/img0071.webp)
- Screenshot: [Beta · step 4 · Device check and join the studio](../../images/img0221.webp)

## CC-J3 — Not verified (Important)

> When I have a batch of clips, I want to plan and schedule a week of posts in one sitting, so I can post consistently without logging in every day.

One post can be set up from Plan in 4 screens, about the same as the reference. 'Confirm schedule' was skipped (would write). There is no bulk spread, best-time data fails with 500, and there's no drag to reschedule, so a week means doing it 7 times.

**Success looks like**

- 7 posts scheduled across the week in ≤ 10 minutes (bulk spread or ≤ 4 steps per post)
- All of them visible on the calendar and movable
- Best posting times suggested

Related: BUG-FUNC-04, PUB-17, PUB-19, PUB-22, PUB-09, CREATE-20, BUG-FUNC-02, PUB-14

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Plan (calendar) (Plan) | **Pass** Month calendar with posts and live events, plus the hint 'Drag a post onto another day to reschedule it.' | **Partial** Calendar shows 4 published posts. The 'Studio events could not be loaded' banner in our run came from our read-only guard blocking a POST, but the real beta shows the same banner (BUG-FUNC-04). |
| 2 | New › Post (Plan) | **Pass** Menu: Post / Live event. | **Pass** Same menu, plus 'New post' shortcuts on future days (PUB-22). |
| 3 | Pick the clip (Plan) | **Pass** 'Select a video to schedule' list. | **Pass** 'Select a video to post' list with 4 videos. |
| 4 | Write the post and set the time (Posts) | **Pass** Composer with YouTube/Instagram/Facebook settings and Send for approval / Publish Now / Schedule. | **Partial** Composer with 'Publish at' and 'Confirm schedule' and AI text at '1 credit'. Only YouTube is connected. No Send for approval (PUB-09). |
| 5 | Confirm the schedule (Plan) | **Pass** Post appears on the calendar. | **Not run** Stopped before 'Confirm schedule' (would write data). |
| 6 | Spread the whole batch over the week (Workflows) | **Pass** Create clips publish chip: 'Spread over one week' / 'Spread over two weeks' / 'Schedule at best times'. | **Missing** No bulk or spread option. Workflows only 'open Plan to post', and the calendar has no drag to reschedule (PUB-19). |
| 7 | Check best times to post (Posts) | **Pass** Best Time to Post card, e.g. 'Instagram Peak now 91… Best: Friday · 7:00 PM IST'. | **Fail** 'Could not read your post numbers: internal error' (500 on /social/posts and /social/post-metrics, BUG-FUNC-02). |

- Screenshot: [Beta · step 1 · Open Plan (calendar)](../../images/img0300.webp)
- Screenshot: [Beta · step 2 · New › Post](../../images/img0301.webp)
- Screenshot: [Beta · step 3 · Pick the clip](../../images/img0302.webp)
- Screenshot: [Beta · step 4 · Write the post and set the time](../../images/img0303.webp)
- Screenshot: [Beta · step 7 · Check best times to post](../../images/img0304.webp)

## CC-J4 — Not possible (Important)

> When my posts have been out for a few days, I want to see which ones did best and make more like them, so I can double down on what works.

Every source of numbers on the beta errors (Analytics 500, post metrics 500, views '—'), and there is no 'More like this' action. The reference does it in 2 clicks: Analytics › More like this opens Create clips prefilled with that video.

**Success looks like**

- Top posts ranked by views or engagement within 2 clicks
- One click from a top post to a prefilled 'make more like this'
- Numbers per platform (YouTube vs Instagram)

Related: PUB-23, BUG-FUNC-01, PUB-01, BUG-FUNC-02, BUG-FUNC-03, PUB-24, BUG-NF-08

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Analytics (Analytics) | **Pass** Remy summary ('Views are up 18%… best post was "Family Drama — Shorts"'), KPIs, chart and a 'What worked' list. | **Fail** 'Could not load analytics: internal error' (GET /social/overview?range=30d → 500). |
| 2 | Change range or retry (Analytics) | **Pass** 7d / 30d / 90d update the data. | **Fail** Range buttons and Try again repeat the 500 (BUG-FUNC-01). |
| 3 | Fall back to Post › Posts tab view counts (Posts) | **Pass** Published rows show views (12.5K, 8.2K, 3.1K). | **Fail** VIEWS and ENG. RATE show '—'. Best Time to Post: 'internal error' (BUG-FUNC-02, PUB-01). |
| 4 | 'More like this' on a top post (Analytics) | **Pass** Opens /workflow?type=create-clips prefilled with that video. | **Missing** No such action on the beta. |

- Screenshot: [Beta · step 1 · Open Analytics](../../images/img0305.webp)
- Screenshot: [Beta · step 3 · Fall back to Post › Posts tab view counts](../../images/img0306.webp)

## CC-J5 — Not verified (Important)

> When I post for a Telugu or Hindi audience, I want to caption my video in that language, so viewers can follow with the sound off.

The beta composer covers the language part well: Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati and Punjabi, plus 'Also translate'. It runs in 1 step for about 2 credits. Start was skipped (credits). There is no burned-in/.srt output choice. Dubbing ('Reach new languages') is priced at about 224 credits for Hindi + Telugu.

**Success looks like**

- Regional spoken language can be picked (or auto-detected)
- Captions come out burned in and as an .srt file
- Cost shown before starting; ≤ 5 screens

Related: CREATE-22, CREATE-26, CREATE-19, CREATE-28

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Home and pick 'Caption a video' (Home) | **Pass** Opens the caption composer. | **Pass** Opens /projects?workflow=caption. |
| 2 | Choose the video (Workflows) | **Pass** Library picker. | **Pass** Library picker. |
| 3 | Set the spoken and caption language (Workflows) | **Pass** Spoken language: Auto-detect plus a list. 'in the original language only' can be changed to translate. | **Pass** Spoken language list: Auto-detect, Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, English and others. 'Also translate' toggle. |
| 4 | Choose the output (burned in and/or .srt) (Workflows) | **Pass** 'as burned into the video and .srt file'. | **Missing** No output choice. The plan is the single step 'Transcribe word by word · AI Captions' (CREATE-22). |
| 5 | See the price and start (Workflows) | **Pass** '3 steps · 15 credits · about 10 minutes' → run → Review results. | **Not run** '1 step · about 2 credits' shown. Stopped before 'Start workflow' (spends credits). |
| 6 | Review and style the captions (Project detail) | **Pass** Captions panel: Hindi transcript, 11 styles, Use Brand Kit, position, size and font, Export. | **Not run** Not reached. Editing would mean opening /editor, which auto-saves on open (CREATE-28), so it was avoided. |

- Screenshot: [Beta · step 1 · Open Home and pick 'Caption a video'](../../images/img0307.webp)
- Screenshot: [Beta · step 2 · Choose the video](../../images/img0308.webp)
- Screenshot: [Beta · step 3 · Set the spoken and caption language](../../images/img0309.webp)
- Screenshot: [Beta · step 4 · Choose the output (burned in and/or .srt)](../../images/img0310.webp)
