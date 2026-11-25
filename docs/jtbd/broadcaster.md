# Segment: Broadcaster / news channel / media team

**Not ready.** The beta has the broadcaster's building blocks (Go live lobby to the device check, Custom Layouts and Graphics editors, Simulcast with loop/schedule, roles + Approvals queue), but the jobs that set a news channel apart are missing: no per-destination subtitles in Go live, Simulcast goes to one destination only, no Multiviewer, no audit log, no QR 'Add a phone'. The live room itself (producer mode, teleprompter, going live, Live ended summary) couldn't be verified read-only, and in this workspace a new Go live was blocked by an overlapping session still marked Live.

- Who: A regional news channel or media team (e.g. Telugu + Hindi YouTube channels, a Facebook page, Instagram) with a producer, anchors, field reporters on phones and a social desk. Neither sign-up profile list names them: beta /signup step 1 and reference /onboarding both offer only Content Creator, Educator / Tutor, Podcaster, Coach / Consultant, Marketer / Small Business. The reference marks Custom Layouts, Multiviewer, Graphics and Simulcast as 'Teams & broadcasters plan'.
- Plan: Teams & broadcasters (Talk to us) on the reference; nearest self-serve tier is Growth ('Go live on up to 5 destinations at once' in the reference pricing). The beta has no Teams & broadcasters plan, and its plan picker/pricing (Lite / Essential / Growth) never states destinations per show or live shows at once.
- Success for them: One studio production goes out to every regional channel at once with subtitles in each channel's language, run from a control room with graphics and field phones, with a 24x7 loop on recorded content and team approvals/audit so nothing goes out wrong.

## Top blockers

- No subtitles per destination (or any subtitle setting) in Go live › Pick where to stream; no studio Subtitles plan or Live ended subtitle summary could be reached
- Simulcast 'Broadcast a video' allows only one destination (LIVE-22): no multi-platform 24x7 channel
- Multiviewer (LIVE-06) and Events & Logs audit log (PUB-37) are 404
- Go live blocked by an overlapping session: Join studio disabled ('This time overlaps with "Session - 11/24/2026 05:03:26 PM"… start that session from its card'); a stale or forgotten Live session stops the next show, and the only way out is Resume on that card
- Plan limits for broadcasters are invisible: no Teams & broadcasters plan, and the plan picker/pricing never say how many destinations or simultaneous live shows each tier allows (lobby only says '1 of 1 on your Free plan')
- Field phones: no 'Add a phone' QR path; Encoders calls an admin endpoint that 404s on every load (LIVE-09, BUG-FUNC-05)


## BR-J1 — Not possible (Core)

> When we cover a story live, I want to stream one show to several regional channels at once (e.g. YouTube Telugu + YouTube Hindi + a Facebook page) with subtitles in each channel's own language, so I can reach every language audience from one production without running separate streams.

The beta has no subtitle option anywhere in Go live (Details has only Stream, Title, Privacy, Description, Made for kids), so the language part of the job cannot be done. Multi-destination could not be proven either: the workspace has 1 YouTube account on Free ("1 of 1 on your Free plan") and Join studio was disabled by an overlapping session still marked Live.

**Success looks like**

- The show goes out to 2+ destinations at the same time, and the plan limit is shown before going live
- Each destination gets subtitles in its own language, with the cost known up front
- After the show, a per-destination result (streamed/failed) and the subtitle files are shown
- At most 8 screens from Studio to on air

Related: LIVE-02, LIVE-03, SHA-02, LIVE-24

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Start Go live from Studio (or Home) (Studio) | **Pass** Studio > Go live opens the lobby in the same tab; Home 'Go live' opens a go-live composer first. | **Partial** Studio > Go live works but opens a second browser tab; the Home 'Go live' card skips the composer and just lands on the Studio list (LIVE-01, LIVE-03, SHA-02). |
| 2 | Pick the source ('How is your video coming in?') (Studio lobby) | **Pass** Camera / RTMP / SRT / HLS / Recording / Custom mix. | **Pass** Same options and copy (camera, RTMP, SRT, HLS, recording, custom mix). |
| 3 | Pick where to stream: tick several regional channels (Studio lobby) | **Pass** Accounts grouped per platform ('YouTube 3 channels · 1 selected', 'Facebook 2 pages'), 'Select all', per-account 16:9/9:16 shape, 'Needs reconnecting' state, '2 of 2 on your Essential plan · Continue with 2'. | **Partial** Lists the one connected YouTube account and says '1 of 1 on your Free plan'. No per-account shape switch, no grouping. The Details 'Stream' dropdown dumps ~80 old YouTube broadcasts (test names, Telugu/Hindi titles) with no dates or search. Picking 2+ destinations could not be tried with this workspace. |
| 4 | Set subtitles per destination (Telugu for one channel, Hindi for another) (Studio lobby) | **Pass** Details > 'Subtitles · Spoken language is detected automatically', 56 languages (Indian languages first), '+ Add a second language · two lines, news-style'. A summary appears: 'Subtitles in Telugu, Hindi · Tech Talks Studio · Telugu (captions) · Studio Page · Hindi (captions) · No extra video outputs · about 4 credits/min while live (sample)', plus 'Improve accuracy · languages people may speak'. | **Missing** No Subtitles field, no language list, no summary or cost line in Go live. Page text has no 'subtitle' or 'caption' at all. |
| 5 | Check devices and join the studio (Studio lobby) | **Pass** 1080p / 20fps preview, Join studio. | **Fail** 720p / 25fps. Join studio is disabled: 'This time overlaps with "Session - 11/24/2026 05:03:26 PM" (5:04 PM – 9:04 PM). To go live now, start that session from its card.' (GET /studio/v1/events/go-live-window -> 409 event_overlap). Starting a new show is blocked while another session holds the slot; joining would also write data, so it was not pressed in any case. |
| 6 | Watch and control subtitles in the studio (Subtitles panel) (Studio room) | **Pass** 'Live subtitles · Per destination, and on the video': a row per language with live sample line and Pause, a glossary for names/places, recording subtitle files, on-video captions, HLS player tracks, and style/size/position. | **Not run** The studio room can't be reached without joining a session (would write data). There is no subtitle setting before the room, so a per-destination panel is unlikely (inferred). |
| 7 | Go Live on all destinations, see each one live, End Live (Studio room) | **Pass** 'Go Live on 2', countdown, 'Do a private test first'; while live each destination shows 'Live · 0:05' with its own End, plus 'End Live · Stops every destination at once' and a confirmation. | **Not run** Would start a real stream (forbidden). |
| 8 | Read the 'Live ended' summary (Studio room) | **Pass** 'Live ended · You were live for 0:08 · DESTINATIONS Tech Talks Studio Streamed · Studio Page Streamed · SUBTITLES Telugu for Tech Talks Studio: added to the replay as caption tracks. Hindi for Studio Page: shown as captions while live. Subtitle files in every language are saved with the recording in Projects.' | **Not run** Needs a finished live show. |

- Screenshot: [Beta · step 1 · Start Go live from Studio (or Home)](../../images/img0347.webp)
- Screenshot: [Beta · step 2 · Pick the source ('How is your video coming in?')](../../images/img0348.webp)
- Screenshot: [Beta · step 3 · Pick where to stream: tick several regional channels](../../images/img0349.webp)
- Screenshot: [Beta · step 4 · Set subtitles per destination (Telugu for one channel, Hindi for another)](../../images/img0349.webp)
- Screenshot: [Beta · step 5 · Check devices and join the studio](../../images/img0350.webp)

## BR-J2 — Not verified (Core)

> When we run a bulletin, I want to produce it from one control room (producer view, prepared layouts, lower thirds/tickers, teleprompter rundown, multiviewer), so I can switch shots and graphics on air without extra hardware.

Layout and graphics editors exist on the beta (graphics with a different element set), but the live room where they are used can't be reached read-only, and Multiviewer is a 404.

**Success looks like**

- Layouts and graphics templates made before the show can be used in the live room
- The anchor reads a rundown on a teleprompter that the producer controls
- All sources can be monitored at once (multiviewer, preview/program)

Related: LIVE-06, LIVE-17, LIVE-19, LIVE-20, SHA-12

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Build the show's layouts in Custom Layouts (Custom Layouts) | **Pass** Folders per show, New folder / Import / New layout, editor with 16:9/9:16 and source presets. | **Partial** Page loads with the 'Teams & broadcasters' chip; New layout opens the same editor, but there is no New folder action (LIVE-17). Save not pressed. |
| 2 | Prepare lower thirds, ticker, breaking-news band, clock/logo in Graphics (Graphics) | **Pass** Elements include Breaking News, Ticker, Clock, Location, rotating Headlines, Side Box, Full-screen Card, Countdown. | **Partial** Editor and templates exist ('Lower thirds and bands', 'Clock and logo', 'On air from Studio'), but Location, Headlines, Side Box, Full-screen Card and Countdown are missing (LIVE-19). The preview websocket was blocked by the read-only guard; Save not pressed. |
| 3 | Open the studio in Producer mode (Studio room) | **Pass** Top bar has a CASUAL / PRODUCER mode switch, a 'Healthy' connection pill and an IPAD (remote control) entry. | **Not run** Needs Join studio (writes data, and is currently blocked by the overlapping session, see BR-J1). |
| 4 | Load a rundown on the teleprompter for the anchor (Studio room) | **Pass** Teleprompter · 'SEND TO Me / Anchor', scroll speed, RUNDOWNS 'Evening News — 9 PM (4)' with Opening / Headline 1 / Headline 2 / Break. | **Not run** Studio room not reachable read-only. |
| 5 | Switch layouts and put graphics/banners on air (Studio room) | **Pass** Layouts and Banners panels in the room; Graphics put on air from Studio. | **Not run** Studio room not reachable read-only. |
| 6 | Monitor every source on a multiviewer (Multiviewer) | **Pass** /multiviewer: pick an event, Auto/2/3/4 grid, PREVIEW and MASTER monitors, '10 sources · updated just now'. | **Missing** /multiviewer is '404 Page not found' and there is no sidebar entry (LIVE-06). |

- Screenshot: [Beta · step 1 · Build the show's layouts in Custom Layouts](../../images/img0351.webp)
- Screenshot: [Beta · step 2 · Prepare lower thirds, ticker, breaking-news band, clock/logo in Graphics](../../images/img0352.webp)
- Screenshot: [Beta · step 3 · Open the studio in Producer mode](../../images/img0350.webp)
- Screenshot: [Beta · step 6 · Monitor every source on a multiviewer](../../images/img0323.webp)

## BR-J3 — Not verified (Important)

> When a reporter is in the field, I want to bring their phone in as a live source and cut to it from the studio, so I can cover breaking news without an OB van.

The beta can only add phones by emailing an invite (not sent), has no 'Add a phone' QR path, and with 0 devices no health card or 'Use in Studio' could be seen. The Studio source step does offer SRT/RTMP pull, a possible workaround.

**Success looks like**

- A reporter's phone is connected in ≤ 3 steps (QR code or invite)
- Phone health (bitrate, battery, delay) is visible before cutting to it
- 'Use in Studio' brings the phone into the live room as a source

Related: LIVE-09, LIVE-10, LIVE-11, LIVE-12, BUG-FUNC-05, BUG-CA-10

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Encoders and see the phone fleet (Encoders) | **Pass** '8 phones · 4 online · 2 live', Live now cards, filters All / Needs attention / Live / Online / Offline, search. | **Partial** Empty state ('No phones yet'), Devices / Streams tabs, stat cards incl. 'Needs attention 0'. Every load calls GET /api/gateway/encoder/v1/admin/relays -> 404 (BUG-FUNC-05). |
| 2 | Connect my own phone by scanning a code (Encoders) | **Pass** 'Add a phone' > 'My phone — Scan a code with your phone and sign in. Takes a minute.' | **Missing** No Add a phone action; the only action is 'Invite a user' (LIVE-09). |
| 3 | Invite a field reporter's phone (Encoders) | **Pass** 'Invite a teammate' > email > Send invite. | **Not run** 'Invite a user' (email + Role) would send an email; stopped before 'Send invitation'. |
| 4 | Check the phone's bitrate, battery and delay before going to it (Encoders) | **Pass** Live card: 'Bitrate 5.6 of 6.0 Mbps', bonded 'Wi-Fi 18 Mbps / Jio 5G 24 Mbps', battery/temperature, '3 watching · 1.8 s delay', time limit, warning 'Battery at 14%. Plug it in, or the stream stops when it dies.' | **Not run** No devices in the workspace, so live cards can't render (LIVE-11). |
| 5 | 'Use in Studio' to bring the phone into the show (Encoders > Studio) | **Pass** Opens the lobby with 'Source: SRT', 'Waiting for your encoder…', ingest details, feed audio + 'Add my microphone'. | **Not run** No phone to use. The Studio source step offers 'SRT · Pull a low-latency srt:// feed' as a manual route (verified on screen, not used). |
| 6 | Cut to the field phone live from the room (Studio room) | **Partial** Not walked in the room on the reference (opening the phone source was confirmed; switching in the room not exercised). | **Not run** Studio room not reachable read-only. |

- Screenshot: [Beta · step 1 · Open Encoders and see the phone fleet](../../images/img0353.webp)
- Screenshot: [Beta · step 3 · Invite a field reporter's phone](../../images/img0353.webp)
- Screenshot: [Beta · step 5 · 'Use in Studio' to bring the phone into the show](../../images/img0348.webp)

## BR-J4 — Blocked (Important)

> When we run a 24x7 or scheduled channel from recorded content, I want to loop or schedule a video out to several platforms at once, so I can keep every channel on air without a person in the studio.

The beta's 'Broadcast a video' lets you pick only ONE destination (radio buttons), so a multi-platform 24x7 channel needs a separate broadcast per platform (workaround unverified). Loop and schedule exist; Save as draft and readiness status don't.

**Success looks like**

- One broadcast goes to 2+ destinations at once
- Loop and schedule are both available, and each destination shows Ready/Not ready before start
- A draft can be saved and started later

Related: LIVE-22, LIVE-23, LIVE-24, LIVE-25, LIVE-27, BUG-FUNC-27

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Simulcast (Simulcast) | **Pass** 'Push a video out live, once or on a loop, to one or more platforms at once.' Teams & broadcasters chip, Remy nudge, cards with Activate/Deactivate. | **Partial** Page loads with one 'test-clip' simulcast; subtitle says '…to a streaming platform' (singular). Two creation paths, 'New channel' and 'Broadcast a video', with no explanation (LIVE-27). |
| 2 | Pick the recorded video (Simulcast) | **Pass** Step 1 'Video' list. | **Pass** Step 1 lists the library videos (two sessions, two test-clips). |
| 3 | Pick destinations (several platforms) (Simulcast) | **Pass** Step 2 'Destinations' with checkboxes for every account, each 'Ready' / 'Not ready' (LIVE-22 evidence). | **Fail** Step 2 'Destination' is a single radio choice ('pavan muddala · YouTube Live'); also offers 'Add TikTok LIVE' / 'Add LinkedIn Live' that the reference doesn't (LIVE-22, LIVE-24). A trash icon sits on the connected account inside the picker. |
| 4 | Choose Loop and a start time (Simulcast) | **Pass** Once / Loop, Schedule. | **Pass** 'Start: Now / Schedule for later', 'Playback: Once / Loop' with explanation. |
| 5 | Save as draft or check readiness (Simulcast) | **Pass** Footer 'Back · Save as draft · Schedule · Go live'. | **Missing** Footer is 'Back · Go live' only; no draft and no per-destination readiness (LIVE-23). |
| 6 | Start the broadcast and leave it running (Simulcast) | **Pass** Go live / Activate; card shows Live and Deactivate. | **Not run** Would start a real stream; closed with Cancel/Escape. |

- Screenshot: [Beta · step 1 · Open Simulcast](../../images/img0354.webp)
- Screenshot: [Beta · step 2 · Pick the recorded video](../../images/img0355.webp)
- Screenshot: [Beta · step 3 · Pick destinations (several platforms)](../../images/img0356.webp)
- Screenshot: [Beta · step 4 · Choose Loop and a start time](../../images/img0356.webp)
- Screenshot: [Beta · step 5 · Save as draft or check readiness](../../images/img0356.webp)

## BR-J5 — Done with friction (Important)

> When several people work on the channel, I want roles, an approval step before anything is posted, and a log of who did what, so I can stop mistakes going out under our brand and trace them when they do.

Roles are stronger on the beta (Owner/Admin/Editor/Viewer + up to 20 custom roles) and there is an Approvals queue, but the editor-side 'send for approval' path couldn't be verified as the owner sees no such button, and there is no audit log (/events-logs 404). Seats, channel requests and invite requests are also absent.

**Success looks like**

- Invite people with a role whose permissions are spelled out (incl. 'Approve posts')
- An editor's post waits in an Approvals queue until an owner/admin approves it
- An activity/audit log shows actor, action and time, and can be filtered/exported

Related: PUB-09, PUB-28, PUB-29, PUB-37, BUG-FUNC-02, PUB-33

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Invite teammates with a role (Settings > Workspace & Team) | **Pass** 'Team members 2 of 3 seats used', Invite dialog, Invite requests for people without an account (pending approval / resend). | **Pass** Inline 'Invite by email · Role Editor · Invite'; no seat count, no invite requests (PUB-28). Invite not pressed (sends email). |
| 2 | Check what each role can do (Settings > Workspace & Team) | **Pass** Matrix Owner / Editor / Viewer incl. 'Approve posts'. | **Pass** Matrix Owner / Admin / Editor / Viewer incl. 'Approve posts', role descriptions ('Editor · Upload, edit, generate and draft posts for approval'), 'Create role · 0 of 20 roles of your own used' (beta-better, PUB-29). |
| 3 | Editor writes a post and sends it for approval (Post composer) | **Pass** Composer footer 'Send for approval \| Publish Now \| Schedule'. | **Partial** As owner the composer has Publish Now / Schedule only, no 'Send for approval' (PUB-09). Whether an Editor gets an approval path couldn't be checked (no second account). Composer opens on 'Select a video to post'. |
| 4 | Approver reviews the queue (Post > Approvals) | **Pass** 'Approvals 3' tab with pending items. | **Partial** 'Approvals' tab: '0 awaiting your review · Nothing is waiting for approval · When an editor writes a post, it waits here for you or another owner or admin to approve it before it goes out.' Approve/Reject could not be seen with an empty queue. The same page shows 'Could not read your post numbers: internal error' (BUG-FUNC-02). |
| 5 | See an audit log of who did what (Events & Logs) | **Pass** Events & Logs: totals, Today/7/30 days, status and category filters (incl. Security, Collaboration), actor + time per event, Export CSV. | **Missing** /events-logs is '404 Page not found'; only post-detail Activity and Settings > Security devices exist (PUB-37). |
| 6 | Ask for an extra channel / workspace for a new regional feed (Settings > Workspace & Team) | **Pass** 'Channel requests · Request New Channel' reviewed by a CloudReel admin; Workspaces list with Add workspace. | **Missing** No channel requests and no workspace list; Growth plan says 'Multiple workspaces' (PUB-28). |

- Screenshot: [Beta · step 1 · Invite teammates with a role](../../images/img0357.webp)
- Screenshot: [Beta · step 2 · Check what each role can do](../../images/img0357.webp)
- Screenshot: [Beta · step 3 · Editor writes a post and sends it for approval](../../images/img0358.webp)
- Screenshot: [Beta · step 4 · Approver reviews the queue](../../images/img0359.webp)
- Screenshot: [Beta · step 5 · See an audit log of who did what](../../images/img0323.webp)
- Screenshot: [Beta · step 6 · Ask for an extra channel / workspace for a new regional feed](../../images/img0357.webp)
