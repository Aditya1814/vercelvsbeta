# Segment: Educator / tutor

**Not ready.** Captions and translation work on the beta up to the paid Start step, with good composers and .srt/.vtt export on the project. The live side is where it breaks. Record and Go live were both refused with 'Can't record now / Can't go live now' because another session held the workspace's slot. Presenting PDF slides is marked 'not available yet' in the shipped studio code. There is no webinar/registration flow and no per-destination subtitles. Analytics, which would show poll and attendance results, is an error page. A tutor can caption and clip old recordings, but can't reliably record or teach a new lesson.

- Who: A teacher or tutor running lessons, lectures and courses (beta sign-up: 'Educator / Tutor · Lessons, lectures and courses'; reference onboarding: 'Course videos, tutorials, lectures and e-learning content'). Records lessons with slides or a shared screen, runs live classes, and serves students who speak other languages.
- Plan: Essential ($29/mo, 3,600 credits): accurate transcripts, 2 platforms at once, real analytics. Starts on Free (1,000 credits shown on beta).
- Success for them: A lesson recorded with slides or screen share in one sitting; a live class where students answer polls and ask questions; captions and translated subtitles students can download; the recording and short revision clips shared without re-uploading anything.

## Top blockers

- Record / Go live refused while any other session holds the time slot ('Can't record now … start that session from its card'); 409 on go-live-window
- Present (PDF slides) not available in the beta studio (code string: 'Presenting a PDF is not available yet'), so slide lessons need screen share
- No webinar/registration flow for a class (Webinars 404; Home 'Host a webinar' just opens Studio)
- No per-destination subtitle language in Go live; Analytics is an error state, so poll/Q&A/attendance results can't be reviewed
- Sidebar credits read '1,000 / NaN credits' on every page, so the cost of a run can't be judged against the allowance


## ED-J1 — Blocked (Core)

> When I prepare a lesson, I want to record myself with my slides or a shared screen, so I can give students a clean lesson video without a separate screen recorder.

On the beta, both Record and Go live were refused with a red toast because a 'Live' session (started 5:03 PM, window to 9:04 PM) holds the workspace's slot. The only ways out are Resume or Force-end, both of which write data. PDF slides are not available in the beta studio. Screen share exists in code but could not be reached.

**Success looks like**

- Recording starts in ≤ 4 screens from Studio
- Slides (PDF) or screen share can be shown on stage while recording
- The recording appears in Projects with my track ready to download

Related: LIVE-02, LIVE-03, SHA-02, CREATE-11, BUG-FUNC-06

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Find where to record a lesson (Home or Studio) (Home / Studio) | **Pass** Studio › Record; Home has 'Record an episode' guided plan | **Partial** No lesson/record card; Home 'Record an episode' is a plain link to /studio (SHA-02). Studio nav works. |
| 2 | Studio › Record (Studio) | **Pass** Opens 'Choose your video input' in the same tab | **Fail** Toast 'Can't record now. This time overlaps with "Session - 11/24/2026 05:03:26 PM" (5:04 PM – 9:04PM). To go live now, start that session from its card.' GET /api/gateway/studio/v1/events/go-live-window → 409. Reproduced 2/2 (Record, Go live). The copy says 'go live' after a Record click. |
| 3 | Pick camera / screen input and check devices (Studio lobby) | **Pass** Camera / RTMP / SRT / HLS / Recording / Custom, then device check | **Not run** Unreachable because of step 2. In an earlier run (LIVE-02) the same 3-step lobby worked and added a 'live until' hint. |
| 4 | Join studio and put slides or screen on stage (Studio room) | **Pass** Dock has Teleprompter, Share, Present (PDF), Q&A, Polls | **Not run** Joining creates a session (write). The shipped studio code contains 'Share your screen' and Teleprompter, but also the string 'Presenting a PDF is not available yet: slides need a shared media source.' (inferred from the JS bundle; not seen in the UI). |
| 5 | Record, stop and find the lesson in Projects (Studio / Projects) | **Pass** Recording listed; project opens on Overview | **Partial** Not recorded (write). An existing recording opens on the Recording tab with 'Server recording · Ready', a per-person track and Download. There is no Overview (CREATE-11), and Studio thumbnails say 'COMING SOON'. |

- Screenshot: [Beta · step 1 · Find where to record a lesson (Home or Studio)](../../images/img0311.webp)
- Screenshot: [Beta · step 2 · Studio › Record](../../images/img0312.webp)
- Screenshot: [Beta · step 3 · Pick camera / screen input and check devices](../../images/img0221.webp)
- Screenshot: [Beta · step 5 · Record, stop and find the lesson in Projects](../../images/img0023.webp)

## ED-J2 — Blocked (Core)

> When I teach a live class, I want students to join, answer polls and ask questions, so I can check understanding while I teach.

The beta has no webinar or registration flow. The Studio Schedule dialog can invite guests by email (as co-hosts, not an audience) and sends reminders only to the organiser. Go live was refused by the slot overlap. Polls and Q&A exist in code but couldn't be reached, and the Analytics page, which would show results, is an error.

**Success looks like**

- Class scheduled with a join/registration link students receive, plus reminders
- Poll launched and Q&A visible during the class
- Poll results and attendance available afterwards

Related: SHA-02, LIVE-05, PUB-23, PUB-24, BUG-FUNC-01, LIVE-22

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Home › 'Host a webinar' or 'Go live' card (Home) | **Pass** Guided plan: 'Host a webinar … registration page … polls and Q&A and live subtitles' (10 steps · 50 credits) | **Fail** Both cards are plain links to /studio; /projects?workflow=go-live shows the Video Library (SHA-02, LIVE-01, LIVE-05). |
| 2 | Schedule the class and invite students (Webinars / Studio) | **Pass** Webinars › Schedule: live webinar with registration, or on-demand from a recording | **Partial** Only Studio › Schedule: name, date/time, repeat weekly, 'Invite guests' (emailed link + calendar invite), Brand Kit, 'Remind me' (to the scheduler only). No registration page, seat limit or attendee reminders. Stopped before 'Schedule session'. |
| 3 | Go live: pick destinations (Studio lobby) | **Pass** Several accounts at once with per-account Details | **Fail** 'Can't go live now' overlap toast (409). Earlier run: a single YouTube account, 1 of 1 on Free. |
| 4 | In class: launch a poll, take Q&A (Studio room) | **Pass** Polls panel ('Live polls · Ask your audience a question · Launch poll') and Q&A | **Not run** Needs a live session (write). The beta studio bundle contains 'Launch poll' and a Q&A list, but neither was seen in the UI. |
| 5 | After class: poll results, Q&A and attendance (Analytics) | **Pass** Analytics › Webinars report: registered 10 / attended 8, Q&A (3), Polls (2) | **Fail** /analytics shows 'Could not load analytics · internal error' (GET social/overview → 500). No Webinars tab (PUB-23, BUG-FUNC-01, PUB-24). |

- Screenshot: [Beta · step 1 · Home › 'Host a webinar' or 'Go live' card](../../images/img0313.webp)
- Screenshot: [Beta · step 2 · Schedule the class and invite students](../../images/img0314.webp)
- Screenshot: [Beta · step 3 · Go live: pick destinations](../../images/img0315.webp)
- Screenshot: [Beta · step 5 · After class: poll results, Q&A and attendance](../../images/img0305.webp)

## ED-J3 — Not verified (Core)

> When a lesson is recorded, I want accurate captions and subtitles translated into my students' languages, so I can make it accessible to students in other languages.

The beta composer handles 'Also translate' with 16 languages, and the project Captions tab exports .srt/.vtt or burns them in. Start (spends credits) was not pressed. The plan shows a single step and no output choice, there's no time estimate, and the sidebar credit total reads NaN. Live classes can't get subtitles in each destination's language.

**Success looks like**

- Captions plus at least one translated subtitle track from one composer
- Downloadable .srt/.vtt as well as burned-in captions
- Cost and time known before Start

Related: CREATE-19, CREATE-22, LIVE-02

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Home › Caption a video (Workflows) | **Pass** /workflow?type=caption | **Pass** /projects?workflow=caption guided composer |
| 2 | Pick the lesson recording (Workflows) | **Pass** From my library › Family Drama — Full Episode | **Pass** From my library › 'Session - 11/17/2026'; the price appears after picking |
| 3 | Turn on 'Also translate' and choose languages (Workflows) | **Pass** 13 languages; sentence becomes 'also in Hindi'; 4 steps · 20 credits | **Pass** 16 languages incl. English, Gujarati, Punjabi; plan line 'Transcribe word by word · AI Captions · … · translated to Hindi' |
| 4 | Choose outputs (.srt / .vtt / burned in) (Workflows / Project) | **Pass** Output chip: burned into the video and .srt file | **Partial** No output choice in the composer (CREATE-22). Project › Captions tab offers 'Export .srt .vtt · Burn into video'. |
| 5 | Check cost/time, then Start (Workflows) | **Pass** '4 steps · 20 credits · about 10 minutes'; run completes 4/4 with 'Translate subtitles · Hindi' | **Not run** '1 step · about 2 credits', no time estimate (CREATE-19). The sidebar reads '1,000 / NaN credits' (3/3 pages). Start would spend credits. |
| 6 | Live class: subtitles in each destination's language (Go live › Pick where to stream) | **Pass** Details › Subtitles: Off / English / Hindi / … per account; 'No subtitles yet. Open Details on an account to add subtitles in its language.' | **Missing** Beta Details has Stream, Title, Privacy, Description, Made for kids only (earlier run; Go live currently blocked by overlap) |

- Screenshot: [Beta · step 1 · Home › Caption a video](../../images/img0316.webp)
- Screenshot: [Beta · step 2 · Pick the lesson recording](../../images/img0310.webp)
- Screenshot: [Beta · step 3 · Turn on 'Also translate' and choose languages](../../images/img0317.webp)
- Screenshot: [Beta · step 4 · Choose outputs (.srt / .vtt / burned in)](../../images/img0318.webp)
- Screenshot: [Beta · step 5 · Check cost/time, then Start](../../images/img0317.webp)
- Screenshot: [Beta · step 6 · Live class: subtitles in each destination's language](../../images/img0071.webp)

## ED-J4 — Not verified (Important)

> When a lesson is done, I want to share the recording with my students and cut short revision clips, so I can help them review key points before exams.

The beta 'Share' item is a social-posting composer, not a share-with-people dialog, and it says its visibility choices are 'not sent yet', so an unlisted share isn't possible. Download works as a workaround. The Create clips plan is visible, but Start (credits) was not pressed. Clips appear only after a manual analysis, and the flow ends at 'Open Plan to publish'.

**Success looks like**

- Recording shared privately (people or unlisted link) in ≤ 3 clicks
- Revision clips by topic in one workflow, with an optional 'anything specific?' prompt
- Clips reviewed before anything goes public

Related: CREATE-11, CREATE-14, CREATE-20, CREATE-21, PUB-01, PUB-09, BUG-FUNC-02

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open the lesson project (Projects) | **Pass** Opens on Overview; Remy found 12 moments | **Partial** Opens on the Recording tab; Clips tab needs 'Start Smart Clips Analysis' (CREATE-11, CREATE-14) |
| 2 | Share the recording with students (Projects) | **Pass** Card menu › Share: 'People with access … Permissions' | **Partial** Card menu › Share opens 'Share on social media'. It says 'Posting uses each platform's defaults for now — these choices are not sent yet', so YouTube Visibility can't be set to Unlisted. Download is the workaround. Stopped before publishing. |
| 3 | Home › Create clips, pick the lesson (Workflows) | **Pass** 7 steps · 75 credits · about 10 minutes; 'Anything specific?' prompt; Brand Kit | **Partial** 5 steps · about 5 credits; no 'Anything specific?' prompt or Brand Kit (CREATE-21); no time estimate |
| 4 | Start and review clips (Workflows) | **Pass** Run shows 7 steps and 'Review results' | **Not run** Start would spend credits |
| 5 | Send clips for approval / publish (Post / Plan) | **Pass** 'Send for my approval on YouTube and Instagram' | **Partial** Plan ends with 'Open Plan to publish' (CREATE-20). The Posts list fails with 500s (PUB-01). |

- Screenshot: [Beta · step 1 · Open the lesson project](../../images/img0083.webp)
- Screenshot: [Beta · step 2 · Share the recording with students](../../images/img0319.webp)
- Screenshot: [Beta · step 3 · Home › Create clips, pick the lesson](../../images/img0295.webp)
