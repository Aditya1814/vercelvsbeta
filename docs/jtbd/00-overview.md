# Jobs to be done, by user segment

Can each kind of customer actually get their job done on the beta? 28 jobs across 6 segments, each written as “When I…, I want to…, so I can…”, walked step by step on the reference and on the beta (read-only: steps that would write real data are marked Not run).

> Test environment note. During this pass, recording and going live on the beta were refused because a session in the workspace had shown as “Live” since 17:03 IST and holds the slot until 21:04 (HTTP 409 “event_overlap”). Our test logs show no activity against the beta between 16:45 and 17:20, so it was most likely started by someone using the workspace. Some “Blocked” outcomes (recording a lesson, recording an episode, going live) are caused by that state, not only by product gaps: end that session and re-test those jobs. The product issue stands either way: one stale session silently blocks every new recording, and the message says “To go live now” even after pressing Record.

## Readiness by segment

| Segment | Verdict | Jobs | Done | Friction | Blocked | Not possible | Not verified | Main blockers |
|---|---|---|---|---|---|---|---|---|
| Content creator | Partly ready | 5 | – | – | 1 | 1 | 3 | Analytics page and all post view counts fail with 500 (BUG-FUNC-01, BUG-FUNC-02): no way to see what did best; Go live: the Home card drops the user on the Studio list (SHA-02/LIVE-01). Go live is refused while another session's window is open (409 event_overlap). Free allows only 1 destination and has no per-destination Subtitles |
| Educator / tutor | Not ready | 4 | – | – | 2 | – | 2 | Record / Go live refused while any other session holds the time slot ('Can't record now … start that session from its card'); 409 on go-live-window; Present (PDF slides) not available in the beta studio (code string: 'Presenting a PDF is not available yet'), so slide lessons need screen share |
| Podcaster | Not ready | 4 | – | 1 | 1 | 2 | – | No podcast hosting/distribution: /podcast is 404, so there's no RSS feed, Apple Podcasts or Spotify (PUB-34); 'Make a podcast' lacks noise removal/levelling, intro/outro music and an MP3 audio export (CREATE-23) |
| Coach / consultant | Not ready | 5 | – | 1 | 1 | 3 | – | No webinars: /webinars 404, no registration page, attendee reminders or attendance report (LIVE-05); No async recording requests: /studio-async-requests 404, no guest record link (LIVE-07) |
| Marketer / small business | Not ready | 5 | – | – | – | 2 | 3 | No idea → product-video path: the Home card is 'Turn an idea into an image', /projects?workflow=idea-video silently shows the library, and Playground makes images only (SHA-20, CREATE-25, CREATE-35); Reporting impossible: Analytics 'internal error' (500), views '—', Export CSV appears disabled, no Share report (BUG-FUNC-01/02, PUB-24) |
| Broadcaster / news channel / media team | Not ready | 5 | – | 1 | 1 | 1 | 2 | No subtitles per destination (or any subtitle setting) in Go live › Pick where to stream; no studio Subtitles plan or Live ended subtitle summary could be reached; Simulcast 'Broadcast a video' allows only one destination (LIVE-22): no multi-platform 24x7 channel |
