window.DATA=window.DATA||{};window.DATA["jtbd"]={
 "intro": "Can each kind of customer actually get their job done on the beta? 28 jobs across 6 segments, each written as “When I…, I want to…, so I can…”, walked step by step on the reference and on the beta (read-only: steps that would write real data are marked Not run).",
 "note": "Test environment note. During this pass, recording and going live on the beta were refused because a session in the workspace had shown as “Live” since 17:03 IST and holds the slot until 21:04 (HTTP 409 “event_overlap”). Our test logs show no activity against the beta between 16:45 and 17:20, so it was most likely started by someone using the workspace. Some “Blocked” outcomes (recording a lesson, recording an episode, going live) are caused by that state, not only by product gaps: end that session and re-test those jobs. The product issue stands either way: one stale session silently blocks every new recording, and the message says “To go live now” even after pressing Record.",
 "matrix": {
  "head": [
   "Segment",
   "Verdict",
   "Jobs",
   "Done",
   "Friction",
   "Blocked",
   "Not possible",
   "Not verified",
   "Main blockers"
  ],
  "rows": [
   [
    "Content creator",
    "Partly ready",
    "5",
    "–",
    "–",
    "1",
    "1",
    "3",
    "Analytics page and all post view counts fail with 500 (BUG-FUNC-01, BUG-FUNC-02): no way to see what did best; Go live: the Home card drops the user on the Studio list (SHA-02/LIVE-01). Go live is refused while another session's window is open (409 event_overlap). Free allows only 1 destination and has no per-destination Subtitles"
   ],
   [
    "Educator / tutor",
    "Not ready",
    "4",
    "–",
    "–",
    "2",
    "–",
    "2",
    "Record / Go live refused while any other session holds the time slot ('Can't record now … start that session from its card'); 409 on go-live-window; Present (PDF slides) not available in the beta studio (code string: 'Presenting a PDF is not available yet'), so slide lessons need screen share"
   ],
   [
    "Podcaster",
    "Not ready",
    "4",
    "–",
    "1",
    "1",
    "2",
    "–",
    "No podcast hosting/distribution: /podcast is 404, so there's no RSS feed, Apple Podcasts or Spotify (PUB-34); 'Make a podcast' lacks noise removal/levelling, intro/outro music and an MP3 audio export (CREATE-23)"
   ],
   [
    "Coach / consultant",
    "Not ready",
    "5",
    "–",
    "1",
    "1",
    "3",
    "–",
    "No webinars: /webinars 404, no registration page, attendee reminders or attendance report (LIVE-05); No async recording requests: /studio-async-requests 404, no guest record link (LIVE-07)"
   ],
   [
    "Marketer / small business",
    "Not ready",
    "5",
    "–",
    "–",
    "–",
    "2",
    "3",
    "No idea → product-video path: the Home card is 'Turn an idea into an image', /projects?workflow=idea-video silently shows the library, and Playground makes images only (SHA-20, CREATE-25, CREATE-35); Reporting impossible: Analytics 'internal error' (500), views '—', Export CSV appears disabled, no Share report (BUG-FUNC-01/02, PUB-24)"
   ],
   [
    "Broadcaster / news channel / media team",
    "Not ready",
    "5",
    "–",
    "1",
    "1",
    "1",
    "2",
    "No subtitles per destination (or any subtitle setting) in Go live › Pick where to stream; no studio Subtitles plan or Live ended subtitle summary could be reached; Simulcast 'Broadcast a video' allows only one destination (LIVE-22): no multi-platform 24x7 channel"
   ]
  ]
 },
 "segments": [
  {
   "id": "content-creator",
   "name": "Content creator",
   "verdict": "Partly ready",
   "summary": "A creator can get from Home to a priced Create clips plan in 3 steps and can post a single video to YouTube, so the main clip job is probably doable. But in this workspace the beta blocks or breaks the rest of the loop: Go live from Home skips the composer and is blocked by another session's 4-hour live window, Free allows one destination and has no per-destination subtitles, and Analytics and every view count return 500. Planning a week means scheduling clips one at a time: no 'spread over a week', no best times, no drag to reschedule.",
   "who": "Solo creator publishing to YouTube (long-form + Shorts) and Instagram Reels, sometimes live. Matches the sign-up profile 'Content Creator: YouTube, shorts and social video' (beta /signup step 1) and 'Solo creators, Reels, Shorts, and social-first content' (reference /onboarding).",
   "plan": "Starts on Free (1,000 credits, 1 live destination: '1 of 1 on your Free plan'). Moves to Lite ($12) or Essential ($29, 3,600 credits, 2 live destinations) once they stream to YouTube and Instagram together.",
   "success": "One long video becomes a week of captioned vertical clips on YouTube and Instagram with little effort, live shows reach both platforms at once, and they can see which posts did best so they can make more like them.",
   "blockers": [
    "Analytics page and all post view counts fail with 500 (BUG-FUNC-01, BUG-FUNC-02): no way to see what did best",
    "Go live: the Home card drops the user on the Studio list (SHA-02/LIVE-01). Go live is refused while another session's window is open (409 event_overlap). Free allows only 1 destination and has no per-destination Subtitles",
    "Workflows end with 'open Plan to post' (CREATE-20). There is no 'Spread over one week', 'Schedule at best times' or 'Send for my approval', so a week of clips means scheduling each one by hand",
    "Clips on an existing project need a manual 'Start Smart Clips Analysis' (CREATE-14). Create clips has no Brand Kit step and offers only a vertical shape (CREATE-21)",
    "Sidebar shows '1,000 / NaN credits' (new in this pass, 3/3 loads), so the remaining balance can't be read at a glance"
   ],
   "jobs": [
    {
     "id": "CC-J1",
     "segment": "Content creator",
     "segmentId": "content-creator",
     "priority": "Core",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When I finish a long video, I want to turn it into captioned Shorts/Reels and post them to YouTube and Instagram, so I can grow my channels without editing each clip by hand.",
     "note": "The beta reaches a priced plan in 3 steps, the same count as the reference. Start workflow, review and post were skipped because they spend credits or publish. Expected result is done-with-friction: no Brand Kit step, vertical-only shape, and the run ends with 'open Plan to post' instead of approval/scheduling.",
     "success": [
      "From Home to clips queued for YouTube + Instagram in ≤ 6 screens",
      "Cost and time shown before starting",
      "Clips come out 9:16 with captions and my branding, and I review them before they post"
     ],
     "refs": [
      "CREATE-13",
      "CREATE-14",
      "CREATE-19",
      "CREATE-20",
      "CREATE-21",
      "BUG-FUNC-13",
      "PUB-07",
      "BUG-FUNC-06",
      "SHA-18"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Home and pick the 'Create clips' card",
       "where": "Home",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens /workflow?type=create-clips composer."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Card opens /projects?workflow=create-clips with the same sentence-style composer."
       }
      },
      {
       "n": "2",
       "step": "Choose the long video (From my library)",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Library picker with 6 demo videos."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Picker offers From my library / Upload a file / Paste a link. 4 videos listed."
       }
      },
      {
       "n": "3",
       "step": "Read the plan and price",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'7 steps · 75 credits · about 10 minutes' shown before a video is picked."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "'5 steps · about 5 credits' appears only after a video is picked ('priced once uploaded' before). No time estimate (CREATE-19)."
       }
      },
      {
       "n": "4",
       "step": "Set shape, captions and branding",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Shapes toggle Vertical 9:16 / Portrait 4:5 / Square 1:1 / Wide 16:9. Word-highlight captions. 'add my Brand Kit' step with logo, colours and fonts."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Shape token offers only 'vertical and following the speaker' or 'centre-cropped'. 5 caption styles. No Brand Kit step (CREATE-21)."
       }
      },
      {
       "n": "5",
       "step": "Choose how the clips get posted",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Publish chip: YouTube/Instagram/Facebook. Send for my approval / Schedule at best times / Save as drafts / Spread over one or two weeks."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "'open Plan to post… Nothing posts until you post it.' Platform list also has TikTok, LinkedIn and X, which can't be connected (BUG-FUNC-13, PUB-07). No scheduling or approval options (CREATE-20)."
       }
      },
      {
       "n": "6",
       "step": "Start the workflow and watch progress",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Run page counts 7/7 steps and ends with 'All done. Your drafts are ready to review.' plus Review results."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Stopped before 'Start workflow' (would run an AI job and spend credits)."
       }
      },
      {
       "n": "7",
       "step": "Review the clips",
       "where": "Project detail",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Project opens on Clips (12) with score, 'Preview on: Reels/Shorts', Edit and Share."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Not reached. On an existing project the Clips tab shows only 'Start Smart Clips Analysis', so clips aren't there until you run it by hand (CREATE-14, CREATE-13 naming)."
       }
      },
      {
       "n": "8",
       "step": "Post the clips to YouTube and Instagram",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Clips go to Posts › Approvals, where you Approve / Request changes / Reject or 'Approve all 3'."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "The Creations tab has a composer per platform with Schedule / Post now. Only YouTube is connected here, and Instagram shows '!'. Stopped before Schedule/Post now."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0293.webp",
       "caption": "Beta · step 1 · Open Home and pick the 'Create clips' card"
      },
      {
       "img": "images/img0294.webp",
       "caption": "Beta · step 2 · Choose the long video (From my library)"
      },
      {
       "img": "images/img0295.webp",
       "caption": "Beta · step 3 · Read the plan and price"
      },
      {
       "img": "images/img0296.webp",
       "caption": "Beta · step 4 · Set shape, captions and branding"
      },
      {
       "img": "images/img0297.webp",
       "caption": "Beta · step 5 · Choose how the clips get posted"
      },
      {
       "img": "images/img0083.webp",
       "caption": "Beta · step 7 · Review the clips"
      },
      {
       "img": "images/img0081.webp",
       "caption": "Beta · step 8 · Post the clips to YouTube and Instagram"
      }
     ]
    },
    {
     "id": "CC-J2",
     "segment": "Content creator",
     "segmentId": "content-creator",
     "priority": "Core",
     "outcome": "blocked",
     "outcomeLabel": "Blocked",
     "statement": "When I go live, I want to stream to YouTube and Instagram at once and get clips afterwards, so I can reach both audiences and keep posting after the show.",
     "note": "In this workspace Go live is refused because a session from 5:04–9:04 PM is still 'Live'. Even without that, a Free creator gets 1 destination, Instagram needs a new connection, and there are no per-destination subtitles. The reference goes Home → composer → lobby → studio → Go Live on 2 destinations → 'Live ended' summary.",
     "success": [
      "One Go Live sends to YouTube and Instagram together",
      "≤ 5 screens from Home to on air",
      "Clips and the recording are ready afterwards without extra setup"
     ],
     "refs": [
      "SHA-02",
      "LIVE-02",
      "LIVE-03",
      "LIVE-22",
      "CREATE-14",
      "SHA-01"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Home and pick the 'Go live' card",
       "where": "Home",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Composer: 'Go live now on YouTube from my camera, with a live transcript, clips… Afterwards, turn it into vertical clips and send them for my approval', 8 steps · 60 credits, Open the studio."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Card lands on the Studio list with no composer, so clip and subtitle choices are lost (SHA-02, LIVE-01)."
       }
      },
      {
       "n": "2",
       "step": "Press Go live",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens the device-check lobby."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "Error toast: 'Can't go live now. This time overlaps with \"Session - 11/24/2026 05:03:26 PM\" (Nov 24, 2026, 5:04 PM – 9:04PM). To go live now, start that session from its card.' (GET /studio/v1/events/go-live-window → 409 event_overlap). Its Resume button would join that session, so we stopped."
       }
      },
      {
       "n": "3",
       "step": "Pick where to stream (YouTube + Instagram)",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Go Live dialog: 'DESTINATIONS · 2/2 on Essential', per-destination Stream/Title/Privacy and a Subtitles language list (English, Hindi, Telugu…)."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "From the earlier pass today (13:38): 'Pick where to stream' with 1 YouTube account and '1 of 1 on your Free plan'. Instagram appears only as 'Connect another' (OAuth). No Subtitles field."
       }
      },
      {
       "n": "4",
       "step": "Device check and join the studio",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Camera, mic, speaker test, then Join studio."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Device check screen exists (earlier pass). Stopped before 'Join studio' (would create or join a session). Go live / Record open a new tab (LIVE-03)."
       }
      },
      {
       "n": "5",
       "step": "Go live on both, then end",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "LIVE on 2 destinations with recording. 'End Live?' confirm, then a 'Live ended' summary listing each destination as Streamed."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Would start a real stream."
       }
      },
      {
       "n": "6",
       "step": "Get clips from the show",
       "where": "Project detail",
       "ref": {
        "res": "Partial",
        "code": "jw",
        "text": "Summary says the recording goes to the library. Clips come from the workflow's 'afterwards' step, which the summary does not link to."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Recordings show up in Projects, but clips need a manual 'Start Smart Clips Analysis' (CREATE-14)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0298.webp",
       "caption": "Beta · step 1 · Open Home and pick the 'Go live' card"
      },
      {
       "img": "images/img0299.webp",
       "caption": "Beta · step 2 · Press Go live"
      },
      {
       "img": "images/img0071.webp",
       "caption": "Beta · step 3 · Pick where to stream (YouTube + Instagram)"
      },
      {
       "img": "images/img0221.webp",
       "caption": "Beta · step 4 · Device check and join the studio"
      }
     ]
    },
    {
     "id": "CC-J3",
     "segment": "Content creator",
     "segmentId": "content-creator",
     "priority": "Important",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When I have a batch of clips, I want to plan and schedule a week of posts in one sitting, so I can post consistently without logging in every day.",
     "note": "One post can be set up from Plan in 4 screens, about the same as the reference. 'Confirm schedule' was skipped (would write). There is no bulk spread, best-time data fails with 500, and there's no drag to reschedule, so a week means doing it 7 times.",
     "success": [
      "7 posts scheduled across the week in ≤ 10 minutes (bulk spread or ≤ 4 steps per post)",
      "All of them visible on the calendar and movable",
      "Best posting times suggested"
     ],
     "refs": [
      "BUG-FUNC-04",
      "PUB-17",
      "PUB-19",
      "PUB-22",
      "PUB-09",
      "CREATE-20",
      "BUG-FUNC-02",
      "PUB-14"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Plan (calendar)",
       "where": "Plan",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Month calendar with posts and live events, plus the hint 'Drag a post onto another day to reschedule it.'"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Calendar shows 4 published posts. The 'Studio events could not be loaded' banner in our run came from our read-only guard blocking a POST, but the real beta shows the same banner (BUG-FUNC-04)."
       }
      },
      {
       "n": "2",
       "step": "New › Post",
       "where": "Plan",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Menu: Post / Live event."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Same menu, plus 'New post' shortcuts on future days (PUB-22)."
       }
      },
      {
       "n": "3",
       "step": "Pick the clip",
       "where": "Plan",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Select a video to schedule' list."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "'Select a video to post' list with 4 videos."
       }
      },
      {
       "n": "4",
       "step": "Write the post and set the time",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Composer with YouTube/Instagram/Facebook settings and Send for approval / Publish Now / Schedule."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Composer with 'Publish at' and 'Confirm schedule' and AI text at '1 credit'. Only YouTube is connected. No Send for approval (PUB-09)."
       }
      },
      {
       "n": "5",
       "step": "Confirm the schedule",
       "where": "Plan",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Post appears on the calendar."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Stopped before 'Confirm schedule' (would write data)."
       }
      },
      {
       "n": "6",
       "step": "Spread the whole batch over the week",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Create clips publish chip: 'Spread over one week' / 'Spread over two weeks' / 'Schedule at best times'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No bulk or spread option. Workflows only 'open Plan to post', and the calendar has no drag to reschedule (PUB-19)."
       }
      },
      {
       "n": "7",
       "step": "Check best times to post",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Best Time to Post card, e.g. 'Instagram Peak now 91… Best: Friday · 7:00 PM IST'."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "'Could not read your post numbers: internal error' (500 on /social/posts and /social/post-metrics, BUG-FUNC-02)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0300.webp",
       "caption": "Beta · step 1 · Open Plan (calendar)"
      },
      {
       "img": "images/img0301.webp",
       "caption": "Beta · step 2 · New › Post"
      },
      {
       "img": "images/img0302.webp",
       "caption": "Beta · step 3 · Pick the clip"
      },
      {
       "img": "images/img0303.webp",
       "caption": "Beta · step 4 · Write the post and set the time"
      },
      {
       "img": "images/img0304.webp",
       "caption": "Beta · step 7 · Check best times to post"
      }
     ]
    },
    {
     "id": "CC-J4",
     "segment": "Content creator",
     "segmentId": "content-creator",
     "priority": "Important",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When my posts have been out for a few days, I want to see which ones did best and make more like them, so I can double down on what works.",
     "note": "Every source of numbers on the beta errors (Analytics 500, post metrics 500, views '—'), and there is no 'More like this' action. The reference does it in 2 clicks: Analytics › More like this opens Create clips prefilled with that video.",
     "success": [
      "Top posts ranked by views or engagement within 2 clicks",
      "One click from a top post to a prefilled 'make more like this'",
      "Numbers per platform (YouTube vs Instagram)"
     ],
     "refs": [
      "PUB-23",
      "BUG-FUNC-01",
      "PUB-01",
      "BUG-FUNC-02",
      "BUG-FUNC-03",
      "PUB-24",
      "BUG-NF-08"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Analytics",
       "where": "Analytics",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Remy summary ('Views are up 18%… best post was \"Family Drama — Shorts\"'), KPIs, chart and a 'What worked' list."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "'Could not load analytics: internal error' (GET /social/overview?range=30d → 500)."
       }
      },
      {
       "n": "2",
       "step": "Change range or retry",
       "where": "Analytics",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "7d / 30d / 90d update the data."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "Range buttons and Try again repeat the 500 (BUG-FUNC-01)."
       }
      },
      {
       "n": "3",
       "step": "Fall back to Post › Posts tab view counts",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Published rows show views (12.5K, 8.2K, 3.1K)."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "VIEWS and ENG. RATE show '—'. Best Time to Post: 'internal error' (BUG-FUNC-02, PUB-01)."
       }
      },
      {
       "n": "4",
       "step": "'More like this' on a top post",
       "where": "Analytics",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens /workflow?type=create-clips prefilled with that video."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No such action on the beta."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0305.webp",
       "caption": "Beta · step 1 · Open Analytics"
      },
      {
       "img": "images/img0306.webp",
       "caption": "Beta · step 3 · Fall back to Post › Posts tab view counts"
      }
     ]
    },
    {
     "id": "CC-J5",
     "segment": "Content creator",
     "segmentId": "content-creator",
     "priority": "Important",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When I post for a Telugu or Hindi audience, I want to caption my video in that language, so viewers can follow with the sound off.",
     "note": "The beta composer covers the language part well: Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati and Punjabi, plus 'Also translate'. It runs in 1 step for about 2 credits. Start was skipped (credits). There is no burned-in/.srt output choice. Dubbing ('Reach new languages') is priced at about 224 credits for Hindi + Telugu.",
     "success": [
      "Regional spoken language can be picked (or auto-detected)",
      "Captions come out burned in and as an .srt file",
      "Cost shown before starting; ≤ 5 screens"
     ],
     "refs": [
      "CREATE-22",
      "CREATE-26",
      "CREATE-19",
      "CREATE-28"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Home and pick 'Caption a video'",
       "where": "Home",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens the caption composer."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens /projects?workflow=caption."
       }
      },
      {
       "n": "2",
       "step": "Choose the video",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Library picker."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Library picker."
       }
      },
      {
       "n": "3",
       "step": "Set the spoken and caption language",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Spoken language: Auto-detect plus a list. 'in the original language only' can be changed to translate."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Spoken language list: Auto-detect, Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, English and others. 'Also translate' toggle."
       }
      },
      {
       "n": "4",
       "step": "Choose the output (burned in and/or .srt)",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'as burned into the video and .srt file'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No output choice. The plan is the single step 'Transcribe word by word · AI Captions' (CREATE-22)."
       }
      },
      {
       "n": "5",
       "step": "See the price and start",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'3 steps · 15 credits · about 10 minutes' → run → Review results."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "'1 step · about 2 credits' shown. Stopped before 'Start workflow' (spends credits)."
       }
      },
      {
       "n": "6",
       "step": "Review and style the captions",
       "where": "Project detail",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Captions panel: Hindi transcript, 11 styles, Use Brand Kit, position, size and font, Export."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Not reached. Editing would mean opening /editor, which auto-saves on open (CREATE-28), so it was avoided."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0307.webp",
       "caption": "Beta · step 1 · Open Home and pick 'Caption a video'"
      },
      {
       "img": "images/img0308.webp",
       "caption": "Beta · step 2 · Choose the video"
      },
      {
       "img": "images/img0309.webp",
       "caption": "Beta · step 3 · Set the spoken and caption language"
      },
      {
       "img": "images/img0310.webp",
       "caption": "Beta · step 4 · Choose the output (burned in and/or .srt)"
      }
     ]
    }
   ]
  },
  {
   "id": "educator",
   "name": "Educator / tutor",
   "verdict": "Not ready",
   "summary": "Captions and translation work on the beta up to the paid Start step, with good composers and .srt/.vtt export on the project. The live side is where it breaks. Record and Go live were both refused with 'Can't record now / Can't go live now' because another session held the workspace's slot. Presenting PDF slides is marked 'not available yet' in the shipped studio code. There is no webinar/registration flow and no per-destination subtitles. Analytics, which would show poll and attendance results, is an error page. A tutor can caption and clip old recordings, but can't reliably record or teach a new lesson.",
   "who": "A teacher or tutor running lessons, lectures and courses (beta sign-up: 'Educator / Tutor · Lessons, lectures and courses'; reference onboarding: 'Course videos, tutorials, lectures and e-learning content'). Records lessons with slides or a shared screen, runs live classes, and serves students who speak other languages.",
   "plan": "Essential ($29/mo, 3,600 credits): accurate transcripts, 2 platforms at once, real analytics. Starts on Free (1,000 credits shown on beta).",
   "success": "A lesson recorded with slides or screen share in one sitting; a live class where students answer polls and ask questions; captions and translated subtitles students can download; the recording and short revision clips shared without re-uploading anything.",
   "blockers": [
    "Record / Go live refused while any other session holds the time slot ('Can't record now … start that session from its card'); 409 on go-live-window",
    "Present (PDF slides) not available in the beta studio (code string: 'Presenting a PDF is not available yet'), so slide lessons need screen share",
    "No webinar/registration flow for a class (Webinars 404; Home 'Host a webinar' just opens Studio)",
    "No per-destination subtitle language in Go live; Analytics is an error state, so poll/Q&A/attendance results can't be reviewed",
    "Sidebar credits read '1,000 / NaN credits' on every page, so the cost of a run can't be judged against the allowance"
   ],
   "jobs": [
    {
     "id": "ED-J1",
     "segment": "Educator / tutor",
     "segmentId": "educator",
     "priority": "Core",
     "outcome": "blocked",
     "outcomeLabel": "Blocked",
     "statement": "When I prepare a lesson, I want to record myself with my slides or a shared screen, so I can give students a clean lesson video without a separate screen recorder.",
     "note": "On the beta, both Record and Go live were refused with a red toast because a 'Live' session (started 5:03 PM, window to 9:04 PM) holds the workspace's slot. The only ways out are Resume or Force-end, both of which write data. PDF slides are not available in the beta studio. Screen share exists in code but could not be reached.",
     "success": [
      "Recording starts in ≤ 4 screens from Studio",
      "Slides (PDF) or screen share can be shown on stage while recording",
      "The recording appears in Projects with my track ready to download"
     ],
     "refs": [
      "LIVE-02",
      "LIVE-03",
      "SHA-02",
      "CREATE-11",
      "BUG-FUNC-06"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Find where to record a lesson (Home or Studio)",
       "where": "Home / Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Studio › Record; Home has 'Record an episode' guided plan"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "No lesson/record card; Home 'Record an episode' is a plain link to /studio (SHA-02). Studio nav works."
       }
      },
      {
       "n": "2",
       "step": "Studio › Record",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens 'Choose your video input' in the same tab"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "Toast 'Can't record now. This time overlaps with \"Session - 11/24/2026 05:03:26 PM\" (5:04 PM – 9:04PM). To go live now, start that session from its card.' GET /api/gateway/studio/v1/events/go-live-window → 409. Reproduced 2/2 (Record, Go live). The copy says 'go live' after a Record click."
       }
      },
      {
       "n": "3",
       "step": "Pick camera / screen input and check devices",
       "where": "Studio lobby",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Camera / RTMP / SRT / HLS / Recording / Custom, then device check"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Unreachable because of step 2. In an earlier run (LIVE-02) the same 3-step lobby worked and added a 'live until' hint."
       }
      },
      {
       "n": "4",
       "step": "Join studio and put slides or screen on stage",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Dock has Teleprompter, Share, Present (PDF), Q&A, Polls"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Joining creates a session (write). The shipped studio code contains 'Share your screen' and Teleprompter, but also the string 'Presenting a PDF is not available yet: slides need a shared media source.' (inferred from the JS bundle; not seen in the UI)."
       }
      },
      {
       "n": "5",
       "step": "Record, stop and find the lesson in Projects",
       "where": "Studio / Projects",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Recording listed; project opens on Overview"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Not recorded (write). An existing recording opens on the Recording tab with 'Server recording · Ready', a per-person track and Download. There is no Overview (CREATE-11), and Studio thumbnails say 'COMING SOON'."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0311.webp",
       "caption": "Beta · step 1 · Find where to record a lesson (Home or Studio)"
      },
      {
       "img": "images/img0312.webp",
       "caption": "Beta · step 2 · Studio › Record"
      },
      {
       "img": "images/img0221.webp",
       "caption": "Beta · step 3 · Pick camera / screen input and check devices"
      },
      {
       "img": "images/img0023.webp",
       "caption": "Beta · step 5 · Record, stop and find the lesson in Projects"
      }
     ]
    },
    {
     "id": "ED-J2",
     "segment": "Educator / tutor",
     "segmentId": "educator",
     "priority": "Core",
     "outcome": "blocked",
     "outcomeLabel": "Blocked",
     "statement": "When I teach a live class, I want students to join, answer polls and ask questions, so I can check understanding while I teach.",
     "note": "The beta has no webinar or registration flow. The Studio Schedule dialog can invite guests by email (as co-hosts, not an audience) and sends reminders only to the organiser. Go live was refused by the slot overlap. Polls and Q&A exist in code but couldn't be reached, and the Analytics page, which would show results, is an error.",
     "success": [
      "Class scheduled with a join/registration link students receive, plus reminders",
      "Poll launched and Q&A visible during the class",
      "Poll results and attendance available afterwards"
     ],
     "refs": [
      "SHA-02",
      "LIVE-05",
      "PUB-23",
      "PUB-24",
      "BUG-FUNC-01",
      "LIVE-22"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Home › 'Host a webinar' or 'Go live' card",
       "where": "Home",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Guided plan: 'Host a webinar … registration page … polls and Q&A and live subtitles' (10 steps · 50 credits)"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "Both cards are plain links to /studio; /projects?workflow=go-live shows the Video Library (SHA-02, LIVE-01, LIVE-05)."
       }
      },
      {
       "n": "2",
       "step": "Schedule the class and invite students",
       "where": "Webinars / Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Webinars › Schedule: live webinar with registration, or on-demand from a recording"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Only Studio › Schedule: name, date/time, repeat weekly, 'Invite guests' (emailed link + calendar invite), Brand Kit, 'Remind me' (to the scheduler only). No registration page, seat limit or attendee reminders. Stopped before 'Schedule session'."
       }
      },
      {
       "n": "3",
       "step": "Go live: pick destinations",
       "where": "Studio lobby",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Several accounts at once with per-account Details"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "'Can't go live now' overlap toast (409). Earlier run: a single YouTube account, 1 of 1 on Free."
       }
      },
      {
       "n": "4",
       "step": "In class: launch a poll, take Q&A",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Polls panel ('Live polls · Ask your audience a question · Launch poll') and Q&A"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Needs a live session (write). The beta studio bundle contains 'Launch poll' and a Q&A list, but neither was seen in the UI."
       }
      },
      {
       "n": "5",
       "step": "After class: poll results, Q&A and attendance",
       "where": "Analytics",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Analytics › Webinars report: registered 10 / attended 8, Q&A (3), Polls (2)"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "/analytics shows 'Could not load analytics · internal error' (GET social/overview → 500). No Webinars tab (PUB-23, BUG-FUNC-01, PUB-24)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0313.webp",
       "caption": "Beta · step 1 · Home › 'Host a webinar' or 'Go live' card"
      },
      {
       "img": "images/img0314.webp",
       "caption": "Beta · step 2 · Schedule the class and invite students"
      },
      {
       "img": "images/img0315.webp",
       "caption": "Beta · step 3 · Go live: pick destinations"
      },
      {
       "img": "images/img0305.webp",
       "caption": "Beta · step 5 · After class: poll results, Q&A and attendance"
      }
     ]
    },
    {
     "id": "ED-J3",
     "segment": "Educator / tutor",
     "segmentId": "educator",
     "priority": "Core",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When a lesson is recorded, I want accurate captions and subtitles translated into my students' languages, so I can make it accessible to students in other languages.",
     "note": "The beta composer handles 'Also translate' with 16 languages, and the project Captions tab exports .srt/.vtt or burns them in. Start (spends credits) was not pressed. The plan shows a single step and no output choice, there's no time estimate, and the sidebar credit total reads NaN. Live classes can't get subtitles in each destination's language.",
     "success": [
      "Captions plus at least one translated subtitle track from one composer",
      "Downloadable .srt/.vtt as well as burned-in captions",
      "Cost and time known before Start"
     ],
     "refs": [
      "CREATE-19",
      "CREATE-22",
      "LIVE-02"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Home › Caption a video",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "/workflow?type=caption"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "/projects?workflow=caption guided composer"
       }
      },
      {
       "n": "2",
       "step": "Pick the lesson recording",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "From my library › Family Drama — Full Episode"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "From my library › 'Session - 11/17/2026'; the price appears after picking"
       }
      },
      {
       "n": "3",
       "step": "Turn on 'Also translate' and choose languages",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "13 languages; sentence becomes 'also in Hindi'; 4 steps · 20 credits"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "16 languages incl. English, Gujarati, Punjabi; plan line 'Transcribe word by word · AI Captions · … · translated to Hindi'"
       }
      },
      {
       "n": "4",
       "step": "Choose outputs (.srt / .vtt / burned in)",
       "where": "Workflows / Project",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Output chip: burned into the video and .srt file"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "No output choice in the composer (CREATE-22). Project › Captions tab offers 'Export .srt .vtt · Burn into video'."
       }
      },
      {
       "n": "5",
       "step": "Check cost/time, then Start",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'4 steps · 20 credits · about 10 minutes'; run completes 4/4 with 'Translate subtitles · Hindi'"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "'1 step · about 2 credits', no time estimate (CREATE-19). The sidebar reads '1,000 / NaN credits' (3/3 pages). Start would spend credits."
       }
      },
      {
       "n": "6",
       "step": "Live class: subtitles in each destination's language",
       "where": "Go live › Pick where to stream",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Details › Subtitles: Off / English / Hindi / … per account; 'No subtitles yet. Open Details on an account to add subtitles in its language.'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Beta Details has Stream, Title, Privacy, Description, Made for kids only (earlier run; Go live currently blocked by overlap)"
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0316.webp",
       "caption": "Beta · step 1 · Home › Caption a video"
      },
      {
       "img": "images/img0310.webp",
       "caption": "Beta · step 2 · Pick the lesson recording"
      },
      {
       "img": "images/img0317.webp",
       "caption": "Beta · step 3 · Turn on 'Also translate' and choose languages"
      },
      {
       "img": "images/img0318.webp",
       "caption": "Beta · step 4 · Choose outputs (.srt / .vtt / burned in)"
      },
      {
       "img": "images/img0317.webp",
       "caption": "Beta · step 5 · Check cost/time, then Start"
      },
      {
       "img": "images/img0071.webp",
       "caption": "Beta · step 6 · Live class: subtitles in each destination's language"
      }
     ]
    },
    {
     "id": "ED-J4",
     "segment": "Educator / tutor",
     "segmentId": "educator",
     "priority": "Important",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When a lesson is done, I want to share the recording with my students and cut short revision clips, so I can help them review key points before exams.",
     "note": "The beta 'Share' item is a social-posting composer, not a share-with-people dialog, and it says its visibility choices are 'not sent yet', so an unlisted share isn't possible. Download works as a workaround. The Create clips plan is visible, but Start (credits) was not pressed. Clips appear only after a manual analysis, and the flow ends at 'Open Plan to publish'.",
     "success": [
      "Recording shared privately (people or unlisted link) in ≤ 3 clicks",
      "Revision clips by topic in one workflow, with an optional 'anything specific?' prompt",
      "Clips reviewed before anything goes public"
     ],
     "refs": [
      "CREATE-11",
      "CREATE-14",
      "CREATE-20",
      "CREATE-21",
      "PUB-01",
      "PUB-09",
      "BUG-FUNC-02"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open the lesson project",
       "where": "Projects",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens on Overview; Remy found 12 moments"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Opens on the Recording tab; Clips tab needs 'Start Smart Clips Analysis' (CREATE-11, CREATE-14)"
       }
      },
      {
       "n": "2",
       "step": "Share the recording with students",
       "where": "Projects",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Card menu › Share: 'People with access … Permissions'"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Card menu › Share opens 'Share on social media'. It says 'Posting uses each platform's defaults for now — these choices are not sent yet', so YouTube Visibility can't be set to Unlisted. Download is the workaround. Stopped before publishing."
       }
      },
      {
       "n": "3",
       "step": "Home › Create clips, pick the lesson",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "7 steps · 75 credits · about 10 minutes; 'Anything specific?' prompt; Brand Kit"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "5 steps · about 5 credits; no 'Anything specific?' prompt or Brand Kit (CREATE-21); no time estimate"
       }
      },
      {
       "n": "4",
       "step": "Start and review clips",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Run shows 7 steps and 'Review results'"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Start would spend credits"
       }
      },
      {
       "n": "5",
       "step": "Send clips for approval / publish",
       "where": "Post / Plan",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Send for my approval on YouTube and Instagram'"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Plan ends with 'Open Plan to publish' (CREATE-20). The Posts list fails with 500s (PUB-01)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0083.webp",
       "caption": "Beta · step 1 · Open the lesson project"
      },
      {
       "img": "images/img0319.webp",
       "caption": "Beta · step 2 · Share the recording with students"
      },
      {
       "img": "images/img0295.webp",
       "caption": "Beta · step 3 · Home › Create clips, pick the lesson"
      }
     ]
    }
   ]
  },
  {
   "id": "podcaster",
   "name": "Podcaster",
   "verdict": "Not ready",
   "summary": "The beta covers the middle of the job well: per-person tracks on recordings, a 'Make a podcast' composer with show notes and chapters, and a speaker-clips composer. Both ends are missing or broken. Recording a new episode was refused by the session-overlap check. 'Make a podcast' has no loudness levelling, no intro/outro and no audio (MP3) export. There's no Podcast hosting, RSS, Apple or Spotify at all (/podcast 404), and Posts fails with 500s. A podcaster can't get an episode onto podcast apps from the beta.",
   "who": "An independent video podcaster recording interviews with remote guests (beta sign-up: 'Podcaster · Video podcasts and interviews'; reference onboarding: 'Interviews, episodes, show notes and clips').",
   "plan": "Lite ($12) to Essential ($29). Essential for accurate transcripts and auto-publish connections; Growth only if they want custom intros/outros under the Brand Kit rules.",
   "success": "A remote episode recorded with each person on their own track. A levelled audio + video episode with intro/outro and show notes. The episode out on RSS/Apple/Spotify and YouTube. A handful of speaker clips or audiograms for social, with little hand work.",
   "blockers": [
    "No podcast hosting/distribution: /podcast is 404, so there's no RSS feed, Apple Podcasts or Spotify (PUB-34)",
    "'Make a podcast' lacks noise removal/levelling, intro/outro music and an MP3 audio export (CREATE-23)",
    "New recordings refused while another session holds the slot ('Can't record now'); Home 'Record an episode' skips the guided plan",
    "No audiograms; 'Spotlight each speaker' starts with an unfilled 'pick a shape' blank (Start disabled until set)",
    "Posts list and metrics return 500 (PUB-01), so publishing the YouTube episode can't be confirmed"
   ],
   "jobs": [
    {
     "id": "PC-J1",
     "segment": "Podcaster",
     "segmentId": "podcaster",
     "priority": "Core",
     "outcome": "blocked",
     "outcomeLabel": "Blocked",
     "statement": "When I book a guest, I want to record a remote episode where each person is captured in high quality on their own track, so I can edit a professional-sounding show.",
     "note": "Past recordings on the beta do show per-person tracks, so the capture side exists. Starting a new recording was refused with 'Can't record now' (409 overlap with a 'Live' session), and Home's 'Record an episode' skips the guided setup and guest invites.",
     "success": [
      "Guest gets a join link in ≤ 2 steps from the episode setup",
      "Each person recorded on a separate track",
      "Recording lands in Projects ready to edit"
     ],
     "refs": [
      "SHA-02",
      "LIVE-03"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Home › Record an episode",
       "where": "Home / Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Guided plan: guests, live transcript, mark moments, Brand Kit; 9 steps · 90 credits; 'Open the studio'"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "Card is a plain link to /studio, with no plan, guest field or clip/caption follow-ups (SHA-02)"
       }
      },
      {
       "n": "2",
       "step": "Invite the guest",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Guest emails in the composer, plus People panel / invite in the room"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Only via Studio › Schedule › 'Invite guests' (emailed link + calendar invite). Stopped before 'Schedule session'. The in-room invite was not reachable."
       }
      },
      {
       "n": "3",
       "step": "Start the recording session",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Record → input → device check → Join studio (same tab)"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "'Can't record now. This time overlaps with \"Session - 11/24/2026 05:03:26 PM\"…' (409 go-live-window), reproduced 2/2"
       }
      },
      {
       "n": "4",
       "step": "Record each person on their own track",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Record each person in high quality'"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Joining or recording writes data. An existing project shows 'Tracks · 1 person · 1 track · Host Camera', so separate tracks are recorded."
       }
      },
      {
       "n": "5",
       "step": "Find the episode in Projects",
       "where": "Projects",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Listed with speakers"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Existing recording opens with 'Server recording · Ready 1m 28s', per-part Download, Transcript, Export all"
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0320.webp",
       "caption": "Beta · step 1 · Home › Record an episode"
      },
      {
       "img": "images/img0314.webp",
       "caption": "Beta · step 2 · Invite the guest"
      },
      {
       "img": "images/img0312.webp",
       "caption": "Beta · step 3 · Start the recording session"
      }
     ]
    },
    {
     "id": "PC-J2",
     "segment": "Podcaster",
     "segmentId": "podcaster",
     "priority": "Core",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When the recording is done, I want it turned into a finished episode with clean, levelled audio, my intro/outro, chapters and show notes, so I can release audio and video versions without a separate editor.",
     "note": "The beta 'Make a podcast' only finds silences and filler words, writes show notes with chapters, and makes up to 5 short clips. It has no levelling, no intro/outro and no audio export. The Brand Kit holds video intros/outros, but this workflow doesn't use them.",
     "success": [
      "Noise removal + loudness levelling applied",
      "Intro/outro from my Brand Kit added",
      "MP3 audio episode + video, chapters and show notes produced from one workflow"
     ],
     "refs": [
      "CREATE-23",
      "CREATE-19",
      "CREATE-38"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Home › Make a podcast",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "/workflow?type=make-podcast"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "/projects?workflow=make-podcast"
       }
      },
      {
       "n": "2",
       "step": "Pick the recording",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Use Family Drama — Full Episode …'"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "'Turn Session - 11/17/2026 … into a podcast episode'"
       }
      },
      {
       "n": "3",
       "step": "Clean and level the audio",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'clean, levelled audio' (AI Audio · Noise removal · loudness levelling)"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Only 'Find silences and filler words · Audio Intelligence' (CREATE-23)"
       }
      },
      {
       "n": "4",
       "step": "Add intro and outro",
       "where": "Workflows / Brand Kit",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'intro and outro music' from Brand Kit"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Not in the workflow. Brand Kit has 'Custom Intros / Outros' (MP4 per shape), but the podcast plan doesn't apply them."
       }
      },
      {
       "n": "5",
       "step": "Chapters and show notes",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Chapters + 'Show notes, Transcript, Instagram caption'"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "'Write posts · AI Writer · Show notes with chapters, Summary and LinkedIn post'"
       }
      },
      {
       "n": "6",
       "step": "Export the audio episode (MP3)",
       "where": "Workflows / Project",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Export audio episode · MP3'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No audio export step; the project offers Download/Export all of the recording (format not verified)"
       }
      },
      {
       "n": "7",
       "step": "See cost/time and Start",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'8 steps · 85 credits · about 10 minutes'; run reaches 'Open the project'"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "'5 steps · about 5 credits', no time estimate. Start spends credits."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0321.webp",
       "caption": "Beta · step 1 · Home › Make a podcast"
      },
      {
       "img": "images/img0322.webp",
       "caption": "Beta · step 2 · Pick the recording"
      },
      {
       "img": "images/img0322.webp",
       "caption": "Beta · step 3 · Clean and level the audio"
      },
      {
       "img": "images/img0322.webp",
       "caption": "Beta · step 4 · Add intro and outro"
      },
      {
       "img": "images/img0322.webp",
       "caption": "Beta · step 7 · See cost/time and Start"
      }
     ]
    },
    {
     "id": "PC-J3",
     "segment": "Podcaster",
     "segmentId": "podcaster",
     "priority": "Core",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When an episode is ready, I want to publish it to my podcast feed (RSS, Apple Podcasts, Spotify) and to YouTube, so I can reach listeners wherever they listen.",
     "note": "The beta has no podcast hosting, feed or directory listing, so only the YouTube half exists. The Post composer opens and YouTube is connected, but the Posts list and metrics fail with 500s. The publish itself wasn't run.",
     "success": [
      "Episode added to an RSS feed that Apple/Spotify read",
      "Listing status for Apple and Spotify visible",
      "Video episode posted to YouTube in the same session"
     ],
     "refs": [
      "PUB-34",
      "PUB-01",
      "PUB-07",
      "PUB-09",
      "BUG-FUNC-02",
      "BUG-FUNC-11"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Podcast hosting",
       "where": "Podcast",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Show card, Apple/YouTube/Facebook links, Episodes list, 'New episode'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "/podcast → '404 Page not found'; no nav item (PUB-34)"
       }
      },
      {
       "n": "2",
       "step": "Add the episode to the RSS feed",
       "where": "Podcast › Distribution",
       "ref": {
        "res": "Partial",
        "code": "jw",
        "text": "'Your RSS feed · 2 episodes · Copy · Download .xml'; banner 'Needs backend: the feed and episode audio aren't hosted yet'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No feed anywhere"
       }
      },
      {
       "n": "3",
       "step": "List on Apple Podcasts / Spotify",
       "where": "Podcast › Distribution",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Apple 'Live · Listed'; Spotify 3-step submit checklist"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Manage accounts lists TikTok, Snapchat, Facebook, Instagram, Threads, LinkedIn, X, YouTube, Pinterest, with no podcast directories"
       }
      },
      {
       "n": "4",
       "step": "Post the video episode to YouTube",
       "where": "Post",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Posts composer with Playlist/Visibility; 'Send for approval'"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "New post › 'Select a video to post' lists recordings; YouTube connected. The page shows 'Could not read your post numbers: internal error' (500 on posts + post-metrics, PUB-01). Stopped before Publish/Schedule."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0323.webp",
       "caption": "Beta · step 1 · Open Podcast hosting"
      },
      {
       "img": "images/img0323.webp",
       "caption": "Beta · step 2 · Add the episode to the RSS feed"
      },
      {
       "img": "images/img0324.webp",
       "caption": "Beta · step 3 · List on Apple Podcasts / Spotify"
      },
      {
       "img": "images/img0325.webp",
       "caption": "Beta · step 4 · Post the video episode to YouTube"
      }
     ]
    },
    {
     "id": "PC-J4",
     "segment": "Podcaster",
     "segmentId": "podcaster",
     "priority": "Important",
     "outcome": "done-with-friction",
     "outcomeLabel": "Done with friction",
     "statement": "When an episode goes out, I want speaker clips and audiograms for social, so I can promote the episode and give each guest something to share.",
     "note": "'Spotlight each speaker' works on the beta once the user notices and fills the 'pick a shape' blank. Start then enables (checked; the run itself was not started because it spends credits). There are no audiograms, and the flow ends with 'open Plan to post' instead of approval.",
     "success": [
      "Clips grouped by speaker, framed on whoever is talking",
      "Audiograms (audio-first clips with captions) for audio-only promotion",
      "Clips go to approval/schedule, not straight to public"
     ],
     "refs": [
      "BUG-FUNC-09",
      "CREATE-24",
      "CREATE-23",
      "CREATE-20",
      "CREATE-13"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Home › Spotlight each speaker",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "/workflow?type=speaker-clips"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "/projects?workflow=speaker-clips"
       }
      },
      {
       "n": "2",
       "step": "Pick the episode",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Library pick"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Library pick; '5 steps · about 5 credits'"
       }
      },
      {
       "n": "3",
       "step": "Choose clip shape",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Vertical 9:16 by default"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Sentence reads 'as pick a shape clips'; Start disabled with 'Pick a shape for the clips.' Choosing 'Vertical 9:16' in the chip menu enables Start (BUG-FUNC-09 has a workaround)."
       }
      },
      {
       "n": "4",
       "step": "Make audiograms",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Make a podcast: '5 audiograms · AI Clips + Portrait Pro · Word highlight'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Only 'Short clips to promote it · Magic Clips · up to 5' (CREATE-23)"
       }
      },
      {
       "n": "5",
       "step": "Start and send for approval",
       "where": "Workflows / Post",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Run: 9 steps, 'Publish · Post · YouTube, Instagram · Send for my approval'"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Start spends credits. Plan ends 'Open Plan to publish'; Instagram not connected (CREATE-20)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0326.webp",
       "caption": "Beta · step 1 · Home › Spotlight each speaker"
      },
      {
       "img": "images/img0327.webp",
       "caption": "Beta · step 2 · Pick the episode"
      },
      {
       "img": "images/img0328.webp",
       "caption": "Beta · step 3 · Choose clip shape"
      },
      {
       "img": "images/img0322.webp",
       "caption": "Beta · step 4 · Make audiograms"
      }
     ]
    }
   ]
  },
  {
   "id": "coach",
   "name": "Coach / consultant",
   "verdict": "Not ready",
   "summary": "The coach's signature jobs (registration webinars, async client recordings, replay follow-up) have no module on the beta: /webinars and /studio-async-requests are 404, and Home 'Host a webinar' just opens the Studio list. What's left is Studio scheduling with guest invites, and the strongest beta area, a detailed Brand Kit applied to Studio. Even those are undermined: starting a session was refused by the overlap check, and Analytics (attendance) is an error page.",
   "who": "A coach or consultant who sells through webinars and talks and works with clients one to one (beta sign-up: 'Coach / Consultant · Webinars, talks and client sessions'; reference onboarding: 'Webinars, client sessions, and async recordings').",
   "plan": "Growth ($49): custom brand kit (logos, fonts, outros) and several destinations at once. Essential if one kit is enough.",
   "success": "A branded webinar people register for and get reminded about. Clients send short video updates without a live call. Attendees and no-shows get the replay and a follow-up automatically. Every session looks like the coach's brand.",
   "blockers": [
    "No webinars: /webinars 404, no registration page, attendee reminders or attendance report (LIVE-05)",
    "No async recording requests: /studio-async-requests 404, no guest record link (LIVE-07)",
    "No replay/follow-up to attendees (no email/newsletter tools; Analytics is an error state, PUB-23)",
    "Starting a session is refused while another session holds the slot ('Can't record now / Can't go live now')"
   ],
   "jobs": [
    {
     "id": "CO-J1",
     "segment": "Coach / consultant",
     "segmentId": "coach",
     "priority": "Core",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When I plan a webinar, I want a registration page with confirmation and reminder emails, so I can fill seats and get people to actually show up.",
     "note": "The beta has no webinar or registration feature. The closest is Studio › Schedule, which emails named guests a join link and reminds only the organiser, so there's no public sign-up or attendee reminders.",
     "success": [
      "Registration page with custom questions and a seat limit, created from one flow",
      "Registrants get a confirmation and reminders (day/hour before)",
      "Shareable registration link in ≤ 1 click"
     ],
     "refs": [
      "LIVE-05",
      "SHA-02",
      "PUB-23"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Home › Host a webinar",
       "where": "Home",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Guided plan: 'Host a webinar when I am ready with a registration page with 1 extra question, polls and Q&A and live subtitles…' (10 steps · 50 credits)"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "Card links to /studio (Studio list), with no webinar plan (SHA-02, LIVE-05)"
       }
      },
      {
       "n": "2",
       "step": "Open Webinars and schedule",
       "where": "Webinars",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "/webinars › Schedule: 'Schedule a live webinar' or 'Create an on-demand webinar'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "/webinars → '404 Page not found'"
       }
      },
      {
       "n": "3",
       "step": "Set up registration (questions, seats, confirmation + reminder emails)",
       "where": "Webinars",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Composer: Registration page, Extra questions, Seats, 'Email a confirmation and reminder'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Studio › Schedule has 'Invite guests' (each guest emailed a link + calendar invite) and 'Remind me' (1 day / 1 hour / 10 min, 'emailed to whoever scheduled the session'). No registration. Stopped before 'Schedule session'."
       }
      },
      {
       "n": "4",
       "step": "Create and copy the registration link",
       "where": "Webinars",
       "ref": {
        "res": "Partial",
        "code": "jw",
        "text": "'Create webinar' adds it to the list with 'Copy registration link'. The /webinar/<id> page for the seeded sample shows 'Webinar not found' (mock limitation)."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No registration link concept"
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0320.webp",
       "caption": "Beta · step 1 · Home › Host a webinar"
      },
      {
       "img": "images/img0323.webp",
       "caption": "Beta · step 2 · Open Webinars and schedule"
      },
      {
       "img": "images/img0314.webp",
       "caption": "Beta · step 3 · Set up registration (questions, seats, confirmation + reminder emails)"
      }
     ]
    },
    {
     "id": "CO-J2",
     "segment": "Coach / consultant",
     "segmentId": "coach",
     "priority": "Core",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When a client can't make a live call, I want to send them a link to record a video update on their own time, so I can coach them asynchronously without scheduling.",
     "note": "Async recording requests don't exist on the beta (404, no entry point). On the reference the whole job takes 3 steps.",
     "success": [
      "Request created with a title and instructions in ≤ 3 steps",
      "One guest link to copy and send",
      "Submissions listed on the request"
     ],
     "refs": [
      "LIVE-07"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Async recording",
       "where": "Async Recording",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Send a link — a guest records on their own time…' with a 'New recording request' list"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "/studio-async-requests → 404; no nav or Studio entry (LIVE-07)"
       }
      },
      {
       "n": "2",
       "step": "Create a request with title and instructions",
       "where": "Async Recording",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Title + instructions → Create; listed as 'Accepting submissions'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "—"
       }
      },
      {
       "n": "3",
       "step": "Copy the guest link and view submissions",
       "where": "Async Recording",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Copy guest link'; 'No submissions yet — share the link above.'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "—"
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0329.webp",
       "caption": "Beta · step 1 · Open Async recording"
      }
     ]
    },
    {
     "id": "CO-J3",
     "segment": "Coach / consultant",
     "segmentId": "coach",
     "priority": "Core",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When a webinar ends, I want attendees to get the replay and no-shows a 'sorry we missed you' message, so I can follow up while interest is high.",
     "note": "The beta has no attendee list, follow-up or email tools, and Analytics can't load. A coach would have to download the recording and email clients outside the product.",
     "success": [
      "Attendance known (attended vs no-show)",
      "Replay + follow-up sent to both groups from one prompt",
      "Recap/highlight clips available"
     ],
     "refs": [
      "PUB-23",
      "PUB-24",
      "PUB-35",
      "BUG-FUNC-01",
      "LIVE-05"
     ],
     "steps": [
      {
       "n": "1",
       "step": "See who attended",
       "where": "Analytics / Webinars",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Analytics › Webinars report: 'REGISTERED 10 · ATTENDED 8 · 80% attendance rate', registrant list"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "/analytics: 'Could not load analytics · internal error' (500); no Webinars tab (PUB-23, BUG-FUNC-01)"
       }
      },
      {
       "n": "2",
       "step": "Send replay + follow-up",
       "where": "Webinars (Remy)",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Remy: 'People who came get the replay and a thank-you. The 2 who missed it get … sorry we missed you' › 'Send to all 10' → 'Follow-up sent'. The page notes 'Sample: email isn't connected yet'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No follow-up, recap email or newsletter (Newsletter 404, PUB-35)"
       }
      },
      {
       "n": "3",
       "step": "Get the replay file to share",
       "where": "Projects",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Project card › Share (people with access) / Download"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Card menu › Download works. 'Share' is 'Share on social media', whose settings note 'these choices are not sent yet'. Stopped before any post."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0305.webp",
       "caption": "Beta · step 1 · See who attended"
      },
      {
       "img": "images/img0319.webp",
       "caption": "Beta · step 3 · Get the replay file to share"
      }
     ]
    },
    {
     "id": "CO-J4",
     "segment": "Coach / consultant",
     "segmentId": "coach",
     "priority": "Important",
     "outcome": "done-with-friction",
     "outcomeLabel": "Done with friction",
     "statement": "When I run any session, I want my logo, colours, fonts and intro/outro applied automatically, so I can look consistent and professional to clients.",
     "note": "This is the beta's strongest coach area. The Brand Kit editor is richer than the reference (logo, palette, accent colour used by Studio, heading/body/lower-third fonts, intros/outros per shape, live overlays), and Studio › Schedule has 'Use my Brand Kit'. Uploads weren't run (writes), applying it on stage couldn't be checked because sessions are blocked, and 'Add new' offers a second kit on Free while pricing says custom kits are Growth.",
     "success": [
      "One Brand Kit holding logo, colours, fonts, lower-third font and intro/outro",
      "Kit applied to Studio sessions without manual setup",
      "Plan limits on brand kits are clear"
     ],
     "refs": [
      "CREATE-38",
      "CREATE-39",
      "LIVE-19"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Brand Kits",
       "where": "Brand Kits",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Your brand kit … Add new · My Brand Kit (Default)'"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "'Your brand kits … Add new · Default Brand'"
       }
      },
      {
       "n": "2",
       "step": "Set logo, colours, fonts, intro/outro",
       "where": "Brand Kits",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Kit editor"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Logo, Brand Palette, Accent Color ('Studio's live room uses it'), Heading/Body fonts, Lower-Third font, Custom Intros/Outros per shape, Overlay Template ('All changes saved'). Uploads not run (CREATE-38 beta-better)."
       }
      },
      {
       "n": "3",
       "step": "Apply the kit to a scheduled session",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Workflow 'Apply my Brand Kit' + Brand panel in the room"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Schedule dialog has 'Use my Brand Kit'. Stopped before 'Schedule session'."
       }
      },
      {
       "n": "4",
       "step": "See the brand on stage",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Brand panel in the room"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Session start refused by overlap ('Can't record now'), and joining writes anyway"
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0330.webp",
       "caption": "Beta · step 1 · Open Brand Kits"
      },
      {
       "img": "images/img0331.webp",
       "caption": "Beta · step 2 · Set logo, colours, fonts, intro/outro"
      },
      {
       "img": "images/img0314.webp",
       "caption": "Beta · step 3 · Apply the kit to a scheduled session"
      },
      {
       "img": "images/img0312.webp",
       "caption": "Beta · step 4 · See the brand on stage"
      }
     ]
    },
    {
     "id": "CO-J5",
     "segment": "Coach / consultant",
     "segmentId": "coach",
     "priority": "Important",
     "outcome": "blocked",
     "outcomeLabel": "Blocked",
     "statement": "When I have a 1:1 client session, I want to invite the client, record it and send them the recording privately, so I can give them something to revisit between sessions.",
     "note": "Inviting via Studio › Schedule exists, but recording was refused by the slot overlap, and there's no private share: 'Share' only posts to social. Downloading and emailing the file is the only route.",
     "success": [
      "Client invited by email with a join link and calendar invite",
      "Session recorded",
      "Recording shared privately with the client (not posted publicly)"
     ],
     "refs": [
      "LIVE-03",
      "PUB-09"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Schedule and invite the client",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Schedule dialog / workflow guest emails"
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Studio › Schedule › 'Invite guests': 'Each guest is emailed their own link and a calendar invite when you save.' Stopped before save."
       }
      },
      {
       "n": "2",
       "step": "Start and record the session",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Record → lobby → Join"
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "'Can't record now' overlap toast (409), 2/2"
       }
      },
      {
       "n": "3",
       "step": "Share the recording privately",
       "where": "Projects",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Card › Share: 'People with access … Permissions'"
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Only 'Share on social media' (choices 'not sent yet'); Download as a workaround"
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0314.webp",
       "caption": "Beta · step 1 · Schedule and invite the client"
      },
      {
       "img": "images/img0312.webp",
       "caption": "Beta · step 2 · Start and record the session"
      },
      {
       "img": "images/img0319.webp",
       "caption": "Beta · step 3 · Share the recording privately"
      }
     ]
    }
   ]
  },
  {
   "id": "marketer",
   "name": "Marketer / small business",
   "verdict": "Not ready",
   "summary": "Two of the marketer's five jobs can't be done on the beta. 'Turn an idea into a video' is gone (Home offers an image, and Playground is image-only), and reporting fails (Analytics and post metrics return 500, and Export CSV is greyed out). The other three can be started but stall. Brand Kit is rich yet isn't applied by the repurposing workflows. AI Writer works as a composer but has no ad-copy type. Approval exists only as a role-based queue: an owner has no 'Send for approval' button, and we couldn't check the editor path.",
   "who": "In-house marketer or small-business owner making product demos, short ads and reviews for social. Matches the sign-up profile 'Marketer / Small Business: Product demos, ads and reviews' (beta /signup step 1) and 'Promo clips, social posts, and multi-platform publishing' (reference /onboarding). Often works with a manager or client who approves posts.",
   "plan": "Paid: Essential ($29/mo, 3,600 credits) for volume, more destinations and custom Brand Kits. The public pricing page treats custom kits as a paid feature (CREATE-39).",
   "success": "Turns an idea or one video into on-brand assets in every platform's shape, writes the copy, gets sign-off before anything goes out, and can show the results to their boss.",
   "blockers": [
    "No idea → product-video path: the Home card is 'Turn an idea into an image', /projects?workflow=idea-video silently shows the library, and Playground makes images only (SHA-20, CREATE-25, CREATE-35)",
    "Reporting impossible: Analytics 'internal error' (500), views '—', Export CSV appears disabled, no Share report (BUG-FUNC-01/02, PUB-24)",
    "Brand Kit isn't a step in Make it vertical or Create clips (only in Spotlight each speaker), so repurposed outputs come out off-brand (CREATE-21)",
    "No 'Send for approval' in the post composer. Approval relies on roles and wasn't verified (PUB-09)",
    "Composers and the writer offer TikTok, LinkedIn and X, which the account can't connect ('Not available to connect yet'): channels and copy you can't use (PUB-07, BUG-FUNC-13, SHA-28)"
   ],
   "jobs": [
    {
     "id": "MK-J1",
     "segment": "Marketer / small business",
     "segmentId": "marketer",
     "priority": "Core",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When we launch a product, I want to make a short product video from a script or idea, so I can have a demo or ad without filming anything.",
     "note": "The beta has no idea-to-video path: the Home card makes an image, the idea-video workflow link falls back to the library, and Playground generates images only. Even the reference has friction here. Its composer opens the idea field automatically and clicking the token closes it, and Start hands off to /ai-influencer, which says it 'doesn't apply' the chosen shape, captions or Brand Kit.",
     "success": [
      "Idea or script in, finished vertical video with presenter, captions and brand out",
      "Cost known up front",
      "≤ 5 screens from Home"
     ],
     "refs": [
      "SHA-20",
      "CREATE-25",
      "CREATE-35",
      "CREATE-40",
      "BUG-FUNC-21"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Home and pick 'Turn an idea into a video'",
       "where": "Home",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Card opens /workflow?type=idea-video."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Card is 'Turn an idea into an image: A thumbnail, cover art or social image from an idea — no footage needed.' and opens /playground (SHA-20)."
       }
      },
      {
       "n": "2",
       "step": "Type the idea or script",
       "where": "Workflows",
       "ref": {
        "res": "Partial",
        "code": "jw",
        "text": "Idea field opens on load (placeholder 'e.g. 5 pricing mistakes every new bakery makes'). Tapping the 'your idea' token closes it, and typing in 'Or tell me what to change…' answered 'I did not catch that'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No idea-video workflow. /projects?workflow=idea-video silently shows the Video Library (CREATE-25, BUG-FUNC-21)."
       }
      },
      {
       "n": "3",
       "step": "Choose length, shape, presenter, language and brand",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'60-second vertical video presented by Maya in English, with word-highlight captions and my Brand Kit', 6 steps · 60 credits · about 10 minutes."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Not available."
       }
      },
      {
       "n": "4",
       "step": "Start and generate the video",
       "where": "AI presenter",
       "ref": {
        "res": "Partial",
        "code": "jw",
        "text": "Start goes to /ai-influencer: 'Your workflow chose vertical shape, captions, your Brand Kit, publishing. This page makes the presenter video and doesn't apply those yet.' The script has to be generated again there."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "AI Twins / presenter module is 404 (CREATE-40)."
       }
      },
      {
       "n": "5",
       "step": "Fallback: Playground",
       "where": "Playground",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Image & video generation with templates."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Image only: 'Create images… Uses about 20 credits · you have 1,000' (CREATE-35). Brand Kit picker present. Generate not pressed."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0332.webp",
       "caption": "Beta · step 1 · Open Home and pick 'Turn an idea into a video'"
      },
      {
       "img": "images/img0333.webp",
       "caption": "Beta · step 2 · Type the idea or script"
      },
      {
       "img": "images/img0332.webp",
       "caption": "Beta · step 5 · Fallback: Playground"
      }
     ]
    },
    {
     "id": "MK-J2",
     "segment": "Marketer / small business",
     "segmentId": "marketer",
     "priority": "Core",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When I have one good product video, I want to repurpose it for every platform in the right shapes with on-brand captions and graphics, so I can publish everywhere without re-editing.",
     "note": "Brand Kit setup is better on the beta, and Make it vertical keeps the 9:16 / 4:5 / 1:1 toggles. But no repurposing workflow applies the Brand Kit, Create clips is vertical-only, and publishing ends with 'open Plan'. Start was skipped (credits). Expected result: done-with-friction, since brand would be added by hand in the editor.",
     "success": [
      "One run gives 9:16, 4:5/1:1 (and 16:9) versions",
      "Brand Kit logo, colours and fonts applied automatically",
      "Each version is set to go to its platform"
     ],
     "refs": [
      "CREATE-21",
      "CREATE-38",
      "CREATE-39",
      "CREATE-20",
      "PUB-07",
      "CREATE-28"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Set up the Brand Kit",
       "where": "Brand Kits",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Logo, overlay, sticker, accent colour, palette and fonts."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Richer than the reference: logo, palette, accent, heading/body fonts with live preview, lower-third font, and intros/outros per shape (16:9 / 9:16 / 1:1). Autosaves. This workspace's Default Brand is still empty (CREATE-38)."
       }
      },
      {
       "n": "2",
       "step": "Open Home and pick 'Make it vertical'",
       "where": "Home",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Composer opens."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens /projects?workflow=go-vertical."
       }
      },
      {
       "n": "3",
       "step": "Choose the source video",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Library picker."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Library picker."
       }
      },
      {
       "n": "4",
       "step": "Pick the shapes and what to make",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Toggles: Vertical 9:16 / Portrait 4:5 / Square 1:1. Create clips also has Wide 16:9."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Same 3 toggles. 'The whole video / Short clips from it / The video and short clips'. Create clips itself offers only vertical."
       }
      },
      {
       "n": "5",
       "step": "Apply the Brand Kit",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Sentence: 'with word-highlight captions and my Brand Kit'. Plan step 'Apply Brand Kit · Logo, Colours and fonts'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No Brand Kit token or step. The plan is Reframe → Captions → Titles → 'Open Plan to publish' (CREATE-21)."
       }
      },
      {
       "n": "6",
       "step": "Send each version to its platform",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Publish: YouTube / Instagram / Facebook with Send for my approval, Schedule at best times or Spread over a week."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "'open Plan to post… Nothing posts until you post it.' The list shows YouTube, Instagram, TikTok, LinkedIn, X and Facebook, though TikTok, LinkedIn and X can't be connected (PUB-07)."
       }
      },
      {
       "n": "7",
       "step": "Start and review",
       "where": "Workflows",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "6 steps · 45 credits → run → Review results."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "'4 steps · about 4 credits'. Stopped before Start workflow (spends credits)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0334.webp",
       "caption": "Beta · step 1 · Set up the Brand Kit"
      },
      {
       "img": "images/img0335.webp",
       "caption": "Beta · step 2 · Open Home and pick 'Make it vertical'"
      },
      {
       "img": "images/img0336.webp",
       "caption": "Beta · step 3 · Choose the source video"
      },
      {
       "img": "images/img0337.webp",
       "caption": "Beta · step 4 · Pick the shapes and what to make"
      },
      {
       "img": "images/img0338.webp",
       "caption": "Beta · step 5 · Apply the Brand Kit"
      },
      {
       "img": "images/img0339.webp",
       "caption": "Beta · step 6 · Send each version to its platform"
      }
     ]
    },
    {
     "id": "MK-J3",
     "segment": "Marketer / small business",
     "segmentId": "marketer",
     "priority": "Important",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When a video is ready to post, I want AI Writer to draft the captions and ad copy for each platform, so I can publish quickly in our voice.",
     "note": "The beta 'Write from a video' composer gets to a priced Start in 3 steps (/ai-writer redirects there) and has regional output languages. It has no ad-copy type and offers LinkedIn post / X thread, which can't be published. Generate was skipped (1 credit). The composer's 'Generate with AI · 1 credit' is the in-context alternative.",
     "success": [
      "Pick a video, choose copy types (social caption, ad copy) and a language",
      "Cost shown before generating",
      "Copy lands in the post composer, editable"
     ],
     "refs": [
      "CREATE-27",
      "CREATE-26",
      "SHA-28",
      "PUB-07",
      "PUB-10"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open AI Writer",
       "where": "AI Writer",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Home 'New: AI Writer' opens a dialog: Upload Video / Caption-SRT file / From your library."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "/ai-writer redirects to /projects?workflow=write, 'Write from a video' (CREATE-27)."
       }
      },
      {
       "n": "2",
       "step": "Choose the source video",
       "where": "AI Writer",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Choose a video to write from' list."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Library picker. Video or caption file (.srt/.vtt/.txt) accepted."
       }
      },
      {
       "n": "3",
       "step": "Choose what to write",
       "where": "AI Writer",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Summary, SEO Article, Blog Post, Newsletter, Social Caption, Ad Copies, Email Headlines, Quotes, News Brief."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Summary, Show notes with chapters, LinkedIn post, Newsletter, X thread, Instagram caption, SEO article, Quotes. No ad copy. LinkedIn/X can't be published from the beta (SHA-28, PUB-07)."
       }
      },
      {
       "n": "4",
       "step": "Choose the output language",
       "where": "AI Writer",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "English, Hindi, Telugu, Tamil, Kannada, Malayalam, Punjabi, Bengali, Marathi and more."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, English, Spanish… Price '1 step · about 1 credits' (copy issue CREATE-26)."
       }
      },
      {
       "n": "5",
       "step": "Generate",
       "where": "AI Writer",
       "ref": {
        "res": "Partial",
        "code": "jw",
        "text": "'Generate Content' closes the dialog. Where the output landed wasn't shown in our run (unverified)."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Stopped before 'Start writing' (spends credits)."
       }
      },
      {
       "n": "6",
       "step": "Use the copy in the post",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Composer 'Personalized Content Generator' and 'Generate with AI'."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Composer has 'Generate with AI · 1 credit' for title, description and tags, with the cost shown (PUB-10). Not pressed."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0340.webp",
       "caption": "Beta · step 1 · Open AI Writer"
      },
      {
       "img": "images/img0341.webp",
       "caption": "Beta · step 2 · Choose the source video"
      },
      {
       "img": "images/img0342.webp",
       "caption": "Beta · step 3 · Choose what to write"
      },
      {
       "img": "images/img0343.webp",
       "caption": "Beta · step 6 · Use the copy in the post"
      }
     ]
    },
    {
     "id": "MK-J4",
     "segment": "Marketer / small business",
     "segmentId": "marketer",
     "priority": "Core",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When I prepare a campaign, I want to schedule the posts and get my manager's approval before they go out, so nothing off-brand or wrong gets published.",
     "note": "The owner account we used has no 'Send for approval' control: the footer offers only Publish Now / Schedule. The Approvals tab says editor-written posts wait there, but that path needs a second (editor) account and real writes, so it couldn't be checked. The reference does it in 4 steps: New post → pick → compose → Send for approval, then Approve in the Approvals tab.",
     "success": [
      "Posts can be sent for approval from the composer",
      "The approver sees a queue with Approve / Request changes / Reject",
      "Approved posts go out on their scheduled dates"
     ],
     "refs": [
      "PUB-09",
      "PUB-19",
      "PUB-28",
      "PUB-07",
      "BUG-FUNC-11",
      "CREATE-20"
     ],
     "steps": [
      {
       "n": "1",
       "step": "New post and pick the video",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Select a video to schedule' list."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "'Select a video to post' list."
       }
      },
      {
       "n": "2",
       "step": "Compose per-platform copy",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "YouTube (playlist, visibility), Instagram (Feed/Reel/Story), Facebook (page) settings. AI generator. Timeline/AI thumbnail."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Only YouTube is connected here. 'Not available to connect yet: Threads, TikTok, Snapchat, LinkedIn, X, Pinterest'. No playlist and no timeline/AI thumbnail (PUB-09)."
       }
      },
      {
       "n": "3",
       "step": "Send for approval",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Footer: 'Send for approval' / 'Publish Now' / 'Schedule for …'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Footer has only 'Publish Now' and 'Schedule' for this owner account (PUB-09)."
       }
      },
      {
       "n": "4",
       "step": "Approver reviews the queue",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Approvals: '3 posts waiting for your review', with Approve / Request changes / Reject per post and 'Approve all 3'."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Approvals tab: '0 awaiting your review… When an editor writes a post, it waits here for you or another owner or admin to approve it before it goes out.' Approve controls not seen (queue empty)."
       }
      },
      {
       "n": "5",
       "step": "Schedule the campaign across dates",
       "where": "Plan",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Schedule per post, drag on the calendar to move, 'Spread over one week' in workflows."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Schedule exists but wasn't pressed (would write). One post at a time, no drag to reschedule (PUB-19)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0344.webp",
       "caption": "Beta · step 1 · New post and pick the video"
      },
      {
       "img": "images/img0343.webp",
       "caption": "Beta · step 2 · Compose per-platform copy"
      },
      {
       "img": "images/img0345.webp",
       "caption": "Beta · step 3 · Send for approval"
      },
      {
       "img": "images/img0346.webp",
       "caption": "Beta · step 4 · Approver reviews the queue"
      }
     ]
    },
    {
     "id": "MK-J5",
     "segment": "Marketer / small business",
     "segmentId": "marketer",
     "priority": "Important",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When the campaign has run, I want a report of views and engagement per platform that I can share, so I can show my manager what worked.",
     "note": "No numbers load anywhere on the beta (500s), so there's nothing to report. The new Export CSV button is greyed out while the page is in its error state. The reference gives KPIs, a chart, 'What worked', and Share report with Copy a link / Download as CSV / Email me every Monday.",
     "success": [
      "Campaign totals and per-post numbers per platform",
      "Share link or CSV in ≤ 2 clicks",
      "Numbers match between Posts and Analytics"
     ],
     "refs": [
      "PUB-23",
      "PUB-24",
      "BUG-FUNC-01",
      "BUG-FUNC-02",
      "BUG-FUNC-03",
      "BUG-FUNC-10",
      "BUG-NF-08"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Analytics",
       "where": "Analytics",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Views 248K, Watch time, Followers, Engagement, chart by platform."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "'Could not load analytics: internal error' (500 /social/overview, BUG-FUNC-01)."
       }
      },
      {
       "n": "2",
       "step": "Share or export the report",
       "where": "Analytics",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Share report → Copy a link to this report / Download as CSV / Email me every Monday."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "Only an 'Export CSV' button, shown greyed out in the error state. No share link or scheduled email (PUB-24; Export CSV is new since that finding)."
       }
      },
      {
       "n": "3",
       "step": "Check per-post numbers",
       "where": "Posts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Published list and post details show views and engagement."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "VIEWS / ENG. RATE '—'. Post details numbers fail with 500 (BUG-FUNC-02, BUG-FUNC-03). Published counts disagree (BUG-FUNC-10)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0305.webp",
       "caption": "Beta · step 1 · Open Analytics"
      }
     ]
    }
   ]
  },
  {
   "id": "broadcaster",
   "name": "Broadcaster / news channel / media team",
   "verdict": "Not ready",
   "summary": "The beta has the broadcaster's building blocks (Go live lobby to the device check, Custom Layouts and Graphics editors, Simulcast with loop/schedule, roles + Approvals queue), but the jobs that set a news channel apart are missing: no per-destination subtitles in Go live, Simulcast goes to one destination only, no Multiviewer, no audit log, no QR 'Add a phone'. The live room itself (producer mode, teleprompter, going live, Live ended summary) couldn't be verified read-only, and in this workspace a new Go live was blocked by an overlapping session still marked Live.",
   "who": "A regional news channel or media team (e.g. Telugu + Hindi YouTube channels, a Facebook page, Instagram) with a producer, anchors, field reporters on phones and a social desk. Neither sign-up profile list names them: beta /signup step 1 and reference /onboarding both offer only Content Creator, Educator / Tutor, Podcaster, Coach / Consultant, Marketer / Small Business. The reference marks Custom Layouts, Multiviewer, Graphics and Simulcast as 'Teams & broadcasters plan'.",
   "plan": "Teams & broadcasters (Talk to us) on the reference; nearest self-serve tier is Growth ('Go live on up to 5 destinations at once' in the reference pricing). The beta has no Teams & broadcasters plan, and its plan picker/pricing (Lite / Essential / Growth) never states destinations per show or live shows at once.",
   "success": "One studio production goes out to every regional channel at once with subtitles in each channel's language, run from a control room with graphics and field phones, with a 24x7 loop on recorded content and team approvals/audit so nothing goes out wrong.",
   "blockers": [
    "No subtitles per destination (or any subtitle setting) in Go live › Pick where to stream; no studio Subtitles plan or Live ended subtitle summary could be reached",
    "Simulcast 'Broadcast a video' allows only one destination (LIVE-22): no multi-platform 24x7 channel",
    "Multiviewer (LIVE-06) and Events & Logs audit log (PUB-37) are 404",
    "Go live blocked by an overlapping session: Join studio disabled ('This time overlaps with \"Session - 11/24/2026 05:03:26 PM\"… start that session from its card'); a stale or forgotten Live session stops the next show, and the only way out is Resume on that card",
    "Plan limits for broadcasters are invisible: no Teams & broadcasters plan, and the plan picker/pricing never say how many destinations or simultaneous live shows each tier allows (lobby only says '1 of 1 on your Free plan')",
    "Field phones: no 'Add a phone' QR path; Encoders calls an admin endpoint that 404s on every load (LIVE-09, BUG-FUNC-05)"
   ],
   "jobs": [
    {
     "id": "BR-J1",
     "segment": "Broadcaster / news channel / media team",
     "segmentId": "broadcaster",
     "priority": "Core",
     "outcome": "not-possible",
     "outcomeLabel": "Not possible",
     "statement": "When we cover a story live, I want to stream one show to several regional channels at once (e.g. YouTube Telugu + YouTube Hindi + a Facebook page) with subtitles in each channel's own language, so I can reach every language audience from one production without running separate streams.",
     "note": "The beta has no subtitle option anywhere in Go live (Details has only Stream, Title, Privacy, Description, Made for kids), so the language part of the job cannot be done. Multi-destination could not be proven either: the workspace has 1 YouTube account on Free (\"1 of 1 on your Free plan\") and Join studio was disabled by an overlapping session still marked Live.",
     "success": [
      "The show goes out to 2+ destinations at the same time, and the plan limit is shown before going live",
      "Each destination gets subtitles in its own language, with the cost known up front",
      "After the show, a per-destination result (streamed/failed) and the subtitle files are shown",
      "At most 8 screens from Studio to on air"
     ],
     "refs": [
      "LIVE-02",
      "LIVE-03",
      "SHA-02",
      "LIVE-24"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Start Go live from Studio (or Home)",
       "where": "Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Studio > Go live opens the lobby in the same tab; Home 'Go live' opens a go-live composer first."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Studio > Go live works but opens a second browser tab; the Home 'Go live' card skips the composer and just lands on the Studio list (LIVE-01, LIVE-03, SHA-02)."
       }
      },
      {
       "n": "2",
       "step": "Pick the source ('How is your video coming in?')",
       "where": "Studio lobby",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Camera / RTMP / SRT / HLS / Recording / Custom mix."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Same options and copy (camera, RTMP, SRT, HLS, recording, custom mix)."
       }
      },
      {
       "n": "3",
       "step": "Pick where to stream: tick several regional channels",
       "where": "Studio lobby",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Accounts grouped per platform ('YouTube 3 channels · 1 selected', 'Facebook 2 pages'), 'Select all', per-account 16:9/9:16 shape, 'Needs reconnecting' state, '2 of 2 on your Essential plan · Continue with 2'."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Lists the one connected YouTube account and says '1 of 1 on your Free plan'. No per-account shape switch, no grouping. The Details 'Stream' dropdown dumps ~80 old YouTube broadcasts (test names, Telugu/Hindi titles) with no dates or search. Picking 2+ destinations could not be tried with this workspace."
       }
      },
      {
       "n": "4",
       "step": "Set subtitles per destination (Telugu for one channel, Hindi for another)",
       "where": "Studio lobby",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Details > 'Subtitles · Spoken language is detected automatically', 56 languages (Indian languages first), '+ Add a second language · two lines, news-style'. A summary appears: 'Subtitles in Telugu, Hindi · Tech Talks Studio · Telugu (captions) · Studio Page · Hindi (captions) · No extra video outputs · about 4 credits/min while live (sample)', plus 'Improve accuracy · languages people may speak'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No Subtitles field, no language list, no summary or cost line in Go live. Page text has no 'subtitle' or 'caption' at all."
       }
      },
      {
       "n": "5",
       "step": "Check devices and join the studio",
       "where": "Studio lobby",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "1080p / 20fps preview, Join studio."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "720p / 25fps. Join studio is disabled: 'This time overlaps with \"Session - 11/24/2026 05:03:26 PM\" (5:04 PM – 9:04 PM). To go live now, start that session from its card.' (GET /studio/v1/events/go-live-window -> 409 event_overlap). Starting a new show is blocked while another session holds the slot; joining would also write data, so it was not pressed in any case."
       }
      },
      {
       "n": "6",
       "step": "Watch and control subtitles in the studio (Subtitles panel)",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Live subtitles · Per destination, and on the video': a row per language with live sample line and Pause, a glossary for names/places, recording subtitle files, on-video captions, HLS player tracks, and style/size/position."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "The studio room can't be reached without joining a session (would write data). There is no subtitle setting before the room, so a per-destination panel is unlikely (inferred)."
       }
      },
      {
       "n": "7",
       "step": "Go Live on all destinations, see each one live, End Live",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Go Live on 2', countdown, 'Do a private test first'; while live each destination shows 'Live · 0:05' with its own End, plus 'End Live · Stops every destination at once' and a confirmation."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Would start a real stream (forbidden)."
       }
      },
      {
       "n": "8",
       "step": "Read the 'Live ended' summary",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Live ended · You were live for 0:08 · DESTINATIONS Tech Talks Studio Streamed · Studio Page Streamed · SUBTITLES Telugu for Tech Talks Studio: added to the replay as caption tracks. Hindi for Studio Page: shown as captions while live. Subtitle files in every language are saved with the recording in Projects.'"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Needs a finished live show."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0347.webp",
       "caption": "Beta · step 1 · Start Go live from Studio (or Home)"
      },
      {
       "img": "images/img0348.webp",
       "caption": "Beta · step 2 · Pick the source ('How is your video coming in?')"
      },
      {
       "img": "images/img0349.webp",
       "caption": "Beta · step 3 · Pick where to stream: tick several regional channels"
      },
      {
       "img": "images/img0349.webp",
       "caption": "Beta · step 4 · Set subtitles per destination (Telugu for one channel, Hindi for another)"
      },
      {
       "img": "images/img0350.webp",
       "caption": "Beta · step 5 · Check devices and join the studio"
      }
     ]
    },
    {
     "id": "BR-J2",
     "segment": "Broadcaster / news channel / media team",
     "segmentId": "broadcaster",
     "priority": "Core",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When we run a bulletin, I want to produce it from one control room (producer view, prepared layouts, lower thirds/tickers, teleprompter rundown, multiviewer), so I can switch shots and graphics on air without extra hardware.",
     "note": "Layout and graphics editors exist on the beta (graphics with a different element set), but the live room where they are used can't be reached read-only, and Multiviewer is a 404.",
     "success": [
      "Layouts and graphics templates made before the show can be used in the live room",
      "The anchor reads a rundown on a teleprompter that the producer controls",
      "All sources can be monitored at once (multiviewer, preview/program)"
     ],
     "refs": [
      "LIVE-06",
      "LIVE-17",
      "LIVE-19",
      "LIVE-20",
      "SHA-12"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Build the show's layouts in Custom Layouts",
       "where": "Custom Layouts",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Folders per show, New folder / Import / New layout, editor with 16:9/9:16 and source presets."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Page loads with the 'Teams & broadcasters' chip; New layout opens the same editor, but there is no New folder action (LIVE-17). Save not pressed."
       }
      },
      {
       "n": "2",
       "step": "Prepare lower thirds, ticker, breaking-news band, clock/logo in Graphics",
       "where": "Graphics",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Elements include Breaking News, Ticker, Clock, Location, rotating Headlines, Side Box, Full-screen Card, Countdown."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Editor and templates exist ('Lower thirds and bands', 'Clock and logo', 'On air from Studio'), but Location, Headlines, Side Box, Full-screen Card and Countdown are missing (LIVE-19). The preview websocket was blocked by the read-only guard; Save not pressed."
       }
      },
      {
       "n": "3",
       "step": "Open the studio in Producer mode",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Top bar has a CASUAL / PRODUCER mode switch, a 'Healthy' connection pill and an IPAD (remote control) entry."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Needs Join studio (writes data, and is currently blocked by the overlapping session, see BR-J1)."
       }
      },
      {
       "n": "4",
       "step": "Load a rundown on the teleprompter for the anchor",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Teleprompter · 'SEND TO Me / Anchor', scroll speed, RUNDOWNS 'Evening News — 9 PM (4)' with Opening / Headline 1 / Headline 2 / Break."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Studio room not reachable read-only."
       }
      },
      {
       "n": "5",
       "step": "Switch layouts and put graphics/banners on air",
       "where": "Studio room",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Layouts and Banners panels in the room; Graphics put on air from Studio."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Studio room not reachable read-only."
       }
      },
      {
       "n": "6",
       "step": "Monitor every source on a multiviewer",
       "where": "Multiviewer",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "/multiviewer: pick an event, Auto/2/3/4 grid, PREVIEW and MASTER monitors, '10 sources · updated just now'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "/multiviewer is '404 Page not found' and there is no sidebar entry (LIVE-06)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0351.webp",
       "caption": "Beta · step 1 · Build the show's layouts in Custom Layouts"
      },
      {
       "img": "images/img0352.webp",
       "caption": "Beta · step 2 · Prepare lower thirds, ticker, breaking-news band, clock/logo in Graphics"
      },
      {
       "img": "images/img0350.webp",
       "caption": "Beta · step 3 · Open the studio in Producer mode"
      },
      {
       "img": "images/img0323.webp",
       "caption": "Beta · step 6 · Monitor every source on a multiviewer"
      }
     ]
    },
    {
     "id": "BR-J3",
     "segment": "Broadcaster / news channel / media team",
     "segmentId": "broadcaster",
     "priority": "Important",
     "outcome": "not-verified",
     "outcomeLabel": "Not verified",
     "statement": "When a reporter is in the field, I want to bring their phone in as a live source and cut to it from the studio, so I can cover breaking news without an OB van.",
     "note": "The beta can only add phones by emailing an invite (not sent), has no 'Add a phone' QR path, and with 0 devices no health card or 'Use in Studio' could be seen. The Studio source step does offer SRT/RTMP pull, a possible workaround.",
     "success": [
      "A reporter's phone is connected in ≤ 3 steps (QR code or invite)",
      "Phone health (bitrate, battery, delay) is visible before cutting to it",
      "'Use in Studio' brings the phone into the live room as a source"
     ],
     "refs": [
      "LIVE-09",
      "LIVE-10",
      "LIVE-11",
      "LIVE-12",
      "BUG-FUNC-05",
      "BUG-CA-10"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Encoders and see the phone fleet",
       "where": "Encoders",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'8 phones · 4 online · 2 live', Live now cards, filters All / Needs attention / Live / Online / Offline, search."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Empty state ('No phones yet'), Devices / Streams tabs, stat cards incl. 'Needs attention 0'. Every load calls GET /api/gateway/encoder/v1/admin/relays -> 404 (BUG-FUNC-05)."
       }
      },
      {
       "n": "2",
       "step": "Connect my own phone by scanning a code",
       "where": "Encoders",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Add a phone' > 'My phone — Scan a code with your phone and sign in. Takes a minute.'"
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No Add a phone action; the only action is 'Invite a user' (LIVE-09)."
       }
      },
      {
       "n": "3",
       "step": "Invite a field reporter's phone",
       "where": "Encoders",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Invite a teammate' > email > Send invite."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "'Invite a user' (email + Role) would send an email; stopped before 'Send invitation'."
       }
      },
      {
       "n": "4",
       "step": "Check the phone's bitrate, battery and delay before going to it",
       "where": "Encoders",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Live card: 'Bitrate 5.6 of 6.0 Mbps', bonded 'Wi-Fi 18 Mbps / Jio 5G 24 Mbps', battery/temperature, '3 watching · 1.8 s delay', time limit, warning 'Battery at 14%. Plug it in, or the stream stops when it dies.'"
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "No devices in the workspace, so live cards can't render (LIVE-11)."
       }
      },
      {
       "n": "5",
       "step": "'Use in Studio' to bring the phone into the show",
       "where": "Encoders > Studio",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Opens the lobby with 'Source: SRT', 'Waiting for your encoder…', ingest details, feed audio + 'Add my microphone'."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "No phone to use. The Studio source step offers 'SRT · Pull a low-latency srt:// feed' as a manual route (verified on screen, not used)."
       }
      },
      {
       "n": "6",
       "step": "Cut to the field phone live from the room",
       "where": "Studio room",
       "ref": {
        "res": "Partial",
        "code": "jw",
        "text": "Not walked in the room on the reference (opening the phone source was confirmed; switching in the room not exercised)."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Studio room not reachable read-only."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0353.webp",
       "caption": "Beta · step 1 · Open Encoders and see the phone fleet"
      },
      {
       "img": "images/img0353.webp",
       "caption": "Beta · step 3 · Invite a field reporter's phone"
      },
      {
       "img": "images/img0348.webp",
       "caption": "Beta · step 5 · 'Use in Studio' to bring the phone into the show"
      }
     ]
    },
    {
     "id": "BR-J4",
     "segment": "Broadcaster / news channel / media team",
     "segmentId": "broadcaster",
     "priority": "Important",
     "outcome": "blocked",
     "outcomeLabel": "Blocked",
     "statement": "When we run a 24x7 or scheduled channel from recorded content, I want to loop or schedule a video out to several platforms at once, so I can keep every channel on air without a person in the studio.",
     "note": "The beta's 'Broadcast a video' lets you pick only ONE destination (radio buttons), so a multi-platform 24x7 channel needs a separate broadcast per platform (workaround unverified). Loop and schedule exist; Save as draft and readiness status don't.",
     "success": [
      "One broadcast goes to 2+ destinations at once",
      "Loop and schedule are both available, and each destination shows Ready/Not ready before start",
      "A draft can be saved and started later"
     ],
     "refs": [
      "LIVE-22",
      "LIVE-23",
      "LIVE-24",
      "LIVE-25",
      "LIVE-27",
      "BUG-FUNC-27"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Open Simulcast",
       "where": "Simulcast",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Push a video out live, once or on a loop, to one or more platforms at once.' Teams & broadcasters chip, Remy nudge, cards with Activate/Deactivate."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "Page loads with one 'test-clip' simulcast; subtitle says '…to a streaming platform' (singular). Two creation paths, 'New channel' and 'Broadcast a video', with no explanation (LIVE-27)."
       }
      },
      {
       "n": "2",
       "step": "Pick the recorded video",
       "where": "Simulcast",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Step 1 'Video' list."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Step 1 lists the library videos (two sessions, two test-clips)."
       }
      },
      {
       "n": "3",
       "step": "Pick destinations (several platforms)",
       "where": "Simulcast",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Step 2 'Destinations' with checkboxes for every account, each 'Ready' / 'Not ready' (LIVE-22 evidence)."
       },
       "beta": {
        "res": "Fail",
        "code": "jf",
        "text": "Step 2 'Destination' is a single radio choice ('pavan muddala · YouTube Live'); also offers 'Add TikTok LIVE' / 'Add LinkedIn Live' that the reference doesn't (LIVE-22, LIVE-24). A trash icon sits on the connected account inside the picker."
       }
      },
      {
       "n": "4",
       "step": "Choose Loop and a start time",
       "where": "Simulcast",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Once / Loop, Schedule."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "'Start: Now / Schedule for later', 'Playback: Once / Loop' with explanation."
       }
      },
      {
       "n": "5",
       "step": "Save as draft or check readiness",
       "where": "Simulcast",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Footer 'Back · Save as draft · Schedule · Go live'."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "Footer is 'Back · Go live' only; no draft and no per-destination readiness (LIVE-23)."
       }
      },
      {
       "n": "6",
       "step": "Start the broadcast and leave it running",
       "where": "Simulcast",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Go live / Activate; card shows Live and Deactivate."
       },
       "beta": {
        "res": "Not run",
        "code": "jn",
        "text": "Would start a real stream; closed with Cancel/Escape."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0354.webp",
       "caption": "Beta · step 1 · Open Simulcast"
      },
      {
       "img": "images/img0355.webp",
       "caption": "Beta · step 2 · Pick the recorded video"
      },
      {
       "img": "images/img0356.webp",
       "caption": "Beta · step 3 · Pick destinations (several platforms)"
      },
      {
       "img": "images/img0356.webp",
       "caption": "Beta · step 4 · Choose Loop and a start time"
      },
      {
       "img": "images/img0356.webp",
       "caption": "Beta · step 5 · Save as draft or check readiness"
      }
     ]
    },
    {
     "id": "BR-J5",
     "segment": "Broadcaster / news channel / media team",
     "segmentId": "broadcaster",
     "priority": "Important",
     "outcome": "done-with-friction",
     "outcomeLabel": "Done with friction",
     "statement": "When several people work on the channel, I want roles, an approval step before anything is posted, and a log of who did what, so I can stop mistakes going out under our brand and trace them when they do.",
     "note": "Roles are stronger on the beta (Owner/Admin/Editor/Viewer + up to 20 custom roles) and there is an Approvals queue, but the editor-side 'send for approval' path couldn't be verified as the owner sees no such button, and there is no audit log (/events-logs 404). Seats, channel requests and invite requests are also absent.",
     "success": [
      "Invite people with a role whose permissions are spelled out (incl. 'Approve posts')",
      "An editor's post waits in an Approvals queue until an owner/admin approves it",
      "An activity/audit log shows actor, action and time, and can be filtered/exported"
     ],
     "refs": [
      "PUB-09",
      "PUB-28",
      "PUB-29",
      "PUB-37",
      "BUG-FUNC-02",
      "PUB-33"
     ],
     "steps": [
      {
       "n": "1",
       "step": "Invite teammates with a role",
       "where": "Settings > Workspace & Team",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Team members 2 of 3 seats used', Invite dialog, Invite requests for people without an account (pending approval / resend)."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Inline 'Invite by email · Role Editor · Invite'; no seat count, no invite requests (PUB-28). Invite not pressed (sends email)."
       }
      },
      {
       "n": "2",
       "step": "Check what each role can do",
       "where": "Settings > Workspace & Team",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Matrix Owner / Editor / Viewer incl. 'Approve posts'."
       },
       "beta": {
        "res": "Pass",
        "code": "jp",
        "text": "Matrix Owner / Admin / Editor / Viewer incl. 'Approve posts', role descriptions ('Editor · Upload, edit, generate and draft posts for approval'), 'Create role · 0 of 20 roles of your own used' (beta-better, PUB-29)."
       }
      },
      {
       "n": "3",
       "step": "Editor writes a post and sends it for approval",
       "where": "Post composer",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Composer footer 'Send for approval | Publish Now | Schedule'."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "As owner the composer has Publish Now / Schedule only, no 'Send for approval' (PUB-09). Whether an Editor gets an approval path couldn't be checked (no second account). Composer opens on 'Select a video to post'."
       }
      },
      {
       "n": "4",
       "step": "Approver reviews the queue",
       "where": "Post > Approvals",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Approvals 3' tab with pending items."
       },
       "beta": {
        "res": "Partial",
        "code": "jw",
        "text": "'Approvals' tab: '0 awaiting your review · Nothing is waiting for approval · When an editor writes a post, it waits here for you or another owner or admin to approve it before it goes out.' Approve/Reject could not be seen with an empty queue. The same page shows 'Could not read your post numbers: internal error' (BUG-FUNC-02)."
       }
      },
      {
       "n": "5",
       "step": "See an audit log of who did what",
       "where": "Events & Logs",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "Events & Logs: totals, Today/7/30 days, status and category filters (incl. Security, Collaboration), actor + time per event, Export CSV."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "/events-logs is '404 Page not found'; only post-detail Activity and Settings > Security devices exist (PUB-37)."
       }
      },
      {
       "n": "6",
       "step": "Ask for an extra channel / workspace for a new regional feed",
       "where": "Settings > Workspace & Team",
       "ref": {
        "res": "Pass",
        "code": "jp",
        "text": "'Channel requests · Request New Channel' reviewed by a CloudReel admin; Workspaces list with Add workspace."
       },
       "beta": {
        "res": "Missing",
        "code": "jm",
        "text": "No channel requests and no workspace list; Growth plan says 'Multiple workspaces' (PUB-28)."
       }
      }
     ],
     "shots": [
      {
       "img": "images/img0357.webp",
       "caption": "Beta · step 1 · Invite teammates with a role"
      },
      {
       "img": "images/img0357.webp",
       "caption": "Beta · step 2 · Check what each role can do"
      },
      {
       "img": "images/img0358.webp",
       "caption": "Beta · step 3 · Editor writes a post and sends it for approval"
      },
      {
       "img": "images/img0359.webp",
       "caption": "Beta · step 4 · Approver reviews the queue"
      },
      {
       "img": "images/img0323.webp",
       "caption": "Beta · step 5 · See an audit log of who did what"
      },
      {
       "img": "images/img0357.webp",
       "caption": "Beta · step 6 · Ask for an extra channel / workspace for a new regional feed"
      }
     ]
    }
   ]
  }
 ]
};
