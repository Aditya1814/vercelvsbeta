# Segment: Podcaster

**Not ready.** The beta covers the middle of the job well: per-person tracks on recordings, a 'Make a podcast' composer with show notes and chapters, and a speaker-clips composer. Both ends are missing or broken. Recording a new episode was refused by the session-overlap check. 'Make a podcast' has no loudness levelling, no intro/outro and no audio (MP3) export. There's no Podcast hosting, RSS, Apple or Spotify at all (/podcast 404), and Posts fails with 500s. A podcaster can't get an episode onto podcast apps from the beta.

- Who: An independent video podcaster recording interviews with remote guests (beta sign-up: 'Podcaster · Video podcasts and interviews'; reference onboarding: 'Interviews, episodes, show notes and clips').
- Plan: Lite ($12) to Essential ($29). Essential for accurate transcripts and auto-publish connections; Growth only if they want custom intros/outros under the Brand Kit rules.
- Success for them: A remote episode recorded with each person on their own track. A levelled audio + video episode with intro/outro and show notes. The episode out on RSS/Apple/Spotify and YouTube. A handful of speaker clips or audiograms for social, with little hand work.

## Top blockers

- No podcast hosting/distribution: /podcast is 404, so there's no RSS feed, Apple Podcasts or Spotify (PUB-34)
- 'Make a podcast' lacks noise removal/levelling, intro/outro music and an MP3 audio export (CREATE-23)
- New recordings refused while another session holds the slot ('Can't record now'); Home 'Record an episode' skips the guided plan
- No audiograms; 'Spotlight each speaker' starts with an unfilled 'pick a shape' blank (Start disabled until set)
- Posts list and metrics return 500 (PUB-01), so publishing the YouTube episode can't be confirmed


## PC-J1 — Blocked (Core)

> When I book a guest, I want to record a remote episode where each person is captured in high quality on their own track, so I can edit a professional-sounding show.

Past recordings on the beta do show per-person tracks, so the capture side exists. Starting a new recording was refused with 'Can't record now' (409 overlap with a 'Live' session), and Home's 'Record an episode' skips the guided setup and guest invites.

**Success looks like**

- Guest gets a join link in ≤ 2 steps from the episode setup
- Each person recorded on a separate track
- Recording lands in Projects ready to edit

Related: SHA-02, LIVE-03

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Home › Record an episode (Home / Workflows) | **Pass** Guided plan: guests, live transcript, mark moments, Brand Kit; 9 steps · 90 credits; 'Open the studio' | **Fail** Card is a plain link to /studio, with no plan, guest field or clip/caption follow-ups (SHA-02) |
| 2 | Invite the guest (Studio) | **Pass** Guest emails in the composer, plus People panel / invite in the room | **Partial** Only via Studio › Schedule › 'Invite guests' (emailed link + calendar invite). Stopped before 'Schedule session'. The in-room invite was not reachable. |
| 3 | Start the recording session (Studio) | **Pass** Record → input → device check → Join studio (same tab) | **Fail** 'Can't record now. This time overlaps with "Session - 11/24/2026 05:03:26 PM"…' (409 go-live-window), reproduced 2/2 |
| 4 | Record each person on their own track (Studio room) | **Pass** 'Record each person in high quality' | **Not run** Joining or recording writes data. An existing project shows 'Tracks · 1 person · 1 track · Host Camera', so separate tracks are recorded. |
| 5 | Find the episode in Projects (Projects) | **Pass** Listed with speakers | **Pass** Existing recording opens with 'Server recording · Ready 1m 28s', per-part Download, Transcript, Export all |

- Screenshot: [Beta · step 1 · Home › Record an episode](../../images/img0320.webp)
- Screenshot: [Beta · step 2 · Invite the guest](../../images/img0314.webp)
- Screenshot: [Beta · step 3 · Start the recording session](../../images/img0312.webp)

## PC-J2 — Not possible (Core)

> When the recording is done, I want it turned into a finished episode with clean, levelled audio, my intro/outro, chapters and show notes, so I can release audio and video versions without a separate editor.

The beta 'Make a podcast' only finds silences and filler words, writes show notes with chapters, and makes up to 5 short clips. It has no levelling, no intro/outro and no audio export. The Brand Kit holds video intros/outros, but this workflow doesn't use them.

**Success looks like**

- Noise removal + loudness levelling applied
- Intro/outro from my Brand Kit added
- MP3 audio episode + video, chapters and show notes produced from one workflow

Related: CREATE-23, CREATE-19, CREATE-38

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Home › Make a podcast (Workflows) | **Pass** /workflow?type=make-podcast | **Pass** /projects?workflow=make-podcast |
| 2 | Pick the recording (Workflows) | **Pass** 'Use Family Drama — Full Episode …' | **Pass** 'Turn Session - 11/17/2026 … into a podcast episode' |
| 3 | Clean and level the audio (Workflows) | **Pass** 'clean, levelled audio' (AI Audio · Noise removal · loudness levelling) | **Missing** Only 'Find silences and filler words · Audio Intelligence' (CREATE-23) |
| 4 | Add intro and outro (Workflows / Brand Kit) | **Pass** 'intro and outro music' from Brand Kit | **Missing** Not in the workflow. Brand Kit has 'Custom Intros / Outros' (MP4 per shape), but the podcast plan doesn't apply them. |
| 5 | Chapters and show notes (Workflows) | **Pass** Chapters + 'Show notes, Transcript, Instagram caption' | **Pass** 'Write posts · AI Writer · Show notes with chapters, Summary and LinkedIn post' |
| 6 | Export the audio episode (MP3) (Workflows / Project) | **Pass** 'Export audio episode · MP3' | **Missing** No audio export step; the project offers Download/Export all of the recording (format not verified) |
| 7 | See cost/time and Start (Workflows) | **Pass** '8 steps · 85 credits · about 10 minutes'; run reaches 'Open the project' | **Not run** '5 steps · about 5 credits', no time estimate. Start spends credits. |

- Screenshot: [Beta · step 1 · Home › Make a podcast](../../images/img0321.webp)
- Screenshot: [Beta · step 2 · Pick the recording](../../images/img0322.webp)
- Screenshot: [Beta · step 3 · Clean and level the audio](../../images/img0322.webp)
- Screenshot: [Beta · step 4 · Add intro and outro](../../images/img0322.webp)
- Screenshot: [Beta · step 7 · See cost/time and Start](../../images/img0322.webp)

## PC-J3 — Not possible (Core)

> When an episode is ready, I want to publish it to my podcast feed (RSS, Apple Podcasts, Spotify) and to YouTube, so I can reach listeners wherever they listen.

The beta has no podcast hosting, feed or directory listing, so only the YouTube half exists. The Post composer opens and YouTube is connected, but the Posts list and metrics fail with 500s. The publish itself wasn't run.

**Success looks like**

- Episode added to an RSS feed that Apple/Spotify read
- Listing status for Apple and Spotify visible
- Video episode posted to YouTube in the same session

Related: PUB-34, PUB-01, PUB-07, PUB-09, BUG-FUNC-02, BUG-FUNC-11

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Podcast hosting (Podcast) | **Pass** Show card, Apple/YouTube/Facebook links, Episodes list, 'New episode' | **Missing** /podcast → '404 Page not found'; no nav item (PUB-34) |
| 2 | Add the episode to the RSS feed (Podcast › Distribution) | **Partial** 'Your RSS feed · 2 episodes · Copy · Download .xml'; banner 'Needs backend: the feed and episode audio aren't hosted yet' | **Missing** No feed anywhere |
| 3 | List on Apple Podcasts / Spotify (Podcast › Distribution) | **Pass** Apple 'Live · Listed'; Spotify 3-step submit checklist | **Missing** Manage accounts lists TikTok, Snapchat, Facebook, Instagram, Threads, LinkedIn, X, YouTube, Pinterest, with no podcast directories |
| 4 | Post the video episode to YouTube (Post) | **Pass** Posts composer with Playlist/Visibility; 'Send for approval' | **Partial** New post › 'Select a video to post' lists recordings; YouTube connected. The page shows 'Could not read your post numbers: internal error' (500 on posts + post-metrics, PUB-01). Stopped before Publish/Schedule. |

- Screenshot: [Beta · step 1 · Open Podcast hosting](../../images/img0323.webp)
- Screenshot: [Beta · step 2 · Add the episode to the RSS feed](../../images/img0323.webp)
- Screenshot: [Beta · step 3 · List on Apple Podcasts / Spotify](../../images/img0324.webp)
- Screenshot: [Beta · step 4 · Post the video episode to YouTube](../../images/img0325.webp)

## PC-J4 — Done with friction (Important)

> When an episode goes out, I want speaker clips and audiograms for social, so I can promote the episode and give each guest something to share.

'Spotlight each speaker' works on the beta once the user notices and fills the 'pick a shape' blank. Start then enables (checked; the run itself was not started because it spends credits). There are no audiograms, and the flow ends with 'open Plan to post' instead of approval.

**Success looks like**

- Clips grouped by speaker, framed on whoever is talking
- Audiograms (audio-first clips with captions) for audio-only promotion
- Clips go to approval/schedule, not straight to public

Related: BUG-FUNC-09, CREATE-24, CREATE-23, CREATE-20, CREATE-13

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Home › Spotlight each speaker (Workflows) | **Pass** /workflow?type=speaker-clips | **Pass** /projects?workflow=speaker-clips |
| 2 | Pick the episode (Workflows) | **Pass** Library pick | **Pass** Library pick; '5 steps · about 5 credits' |
| 3 | Choose clip shape (Workflows) | **Pass** Vertical 9:16 by default | **Partial** Sentence reads 'as pick a shape clips'; Start disabled with 'Pick a shape for the clips.' Choosing 'Vertical 9:16' in the chip menu enables Start (BUG-FUNC-09 has a workaround). |
| 4 | Make audiograms (Workflows) | **Pass** Make a podcast: '5 audiograms · AI Clips + Portrait Pro · Word highlight' | **Missing** Only 'Short clips to promote it · Magic Clips · up to 5' (CREATE-23) |
| 5 | Start and send for approval (Workflows / Post) | **Pass** Run: 9 steps, 'Publish · Post · YouTube, Instagram · Send for my approval' | **Not run** Start spends credits. Plan ends 'Open Plan to publish'; Instagram not connected (CREATE-20). |

- Screenshot: [Beta · step 1 · Home › Spotlight each speaker](../../images/img0326.webp)
- Screenshot: [Beta · step 2 · Pick the episode](../../images/img0327.webp)
- Screenshot: [Beta · step 3 · Choose clip shape](../../images/img0328.webp)
- Screenshot: [Beta · step 4 · Make audiograms](../../images/img0322.webp)
