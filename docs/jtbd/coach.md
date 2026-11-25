# Segment: Coach / consultant

**Not ready.** The coach's signature jobs (registration webinars, async client recordings, replay follow-up) have no module on the beta: /webinars and /studio-async-requests are 404, and Home 'Host a webinar' just opens the Studio list. What's left is Studio scheduling with guest invites, and the strongest beta area, a detailed Brand Kit applied to Studio. Even those are undermined: starting a session was refused by the overlap check, and Analytics (attendance) is an error page.

- Who: A coach or consultant who sells through webinars and talks and works with clients one to one (beta sign-up: 'Coach / Consultant · Webinars, talks and client sessions'; reference onboarding: 'Webinars, client sessions, and async recordings').
- Plan: Growth ($49): custom brand kit (logos, fonts, outros) and several destinations at once. Essential if one kit is enough.
- Success for them: A branded webinar people register for and get reminded about. Clients send short video updates without a live call. Attendees and no-shows get the replay and a follow-up automatically. Every session looks like the coach's brand.

## Top blockers

- No webinars: /webinars 404, no registration page, attendee reminders or attendance report (LIVE-05)
- No async recording requests: /studio-async-requests 404, no guest record link (LIVE-07)
- No replay/follow-up to attendees (no email/newsletter tools; Analytics is an error state, PUB-23)
- Starting a session is refused while another session holds the slot ('Can't record now / Can't go live now')


## CO-J1 — Not possible (Core)

> When I plan a webinar, I want a registration page with confirmation and reminder emails, so I can fill seats and get people to actually show up.

The beta has no webinar or registration feature. The closest is Studio › Schedule, which emails named guests a join link and reminds only the organiser, so there's no public sign-up or attendee reminders.

**Success looks like**

- Registration page with custom questions and a seat limit, created from one flow
- Registrants get a confirmation and reminders (day/hour before)
- Shareable registration link in ≤ 1 click

Related: LIVE-05, SHA-02, PUB-23

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Home › Host a webinar (Home) | **Pass** Guided plan: 'Host a webinar when I am ready with a registration page with 1 extra question, polls and Q&A and live subtitles…' (10 steps · 50 credits) | **Fail** Card links to /studio (Studio list), with no webinar plan (SHA-02, LIVE-05) |
| 2 | Open Webinars and schedule (Webinars) | **Pass** /webinars › Schedule: 'Schedule a live webinar' or 'Create an on-demand webinar' | **Missing** /webinars → '404 Page not found' |
| 3 | Set up registration (questions, seats, confirmation + reminder emails) (Webinars) | **Pass** Composer: Registration page, Extra questions, Seats, 'Email a confirmation and reminder' | **Missing** Studio › Schedule has 'Invite guests' (each guest emailed a link + calendar invite) and 'Remind me' (1 day / 1 hour / 10 min, 'emailed to whoever scheduled the session'). No registration. Stopped before 'Schedule session'. |
| 4 | Create and copy the registration link (Webinars) | **Partial** 'Create webinar' adds it to the list with 'Copy registration link'. The /webinar/<id> page for the seeded sample shows 'Webinar not found' (mock limitation). | **Missing** No registration link concept |

- Screenshot: [Beta · step 1 · Home › Host a webinar](../../images/img0320.webp)
- Screenshot: [Beta · step 2 · Open Webinars and schedule](../../images/img0323.webp)
- Screenshot: [Beta · step 3 · Set up registration (questions, seats, confirmation + reminder emails)](../../images/img0314.webp)

## CO-J2 — Not possible (Core)

> When a client can't make a live call, I want to send them a link to record a video update on their own time, so I can coach them asynchronously without scheduling.

Async recording requests don't exist on the beta (404, no entry point). On the reference the whole job takes 3 steps.

**Success looks like**

- Request created with a title and instructions in ≤ 3 steps
- One guest link to copy and send
- Submissions listed on the request

Related: LIVE-07

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Async recording (Async Recording) | **Pass** 'Send a link — a guest records on their own time…' with a 'New recording request' list | **Missing** /studio-async-requests → 404; no nav or Studio entry (LIVE-07) |
| 2 | Create a request with title and instructions (Async Recording) | **Pass** Title + instructions → Create; listed as 'Accepting submissions' | **Missing** — |
| 3 | Copy the guest link and view submissions (Async Recording) | **Pass** 'Copy guest link'; 'No submissions yet — share the link above.' | **Missing** — |

- Screenshot: [Beta · step 1 · Open Async recording](../../images/img0329.webp)

## CO-J3 — Not possible (Core)

> When a webinar ends, I want attendees to get the replay and no-shows a 'sorry we missed you' message, so I can follow up while interest is high.

The beta has no attendee list, follow-up or email tools, and Analytics can't load. A coach would have to download the recording and email clients outside the product.

**Success looks like**

- Attendance known (attended vs no-show)
- Replay + follow-up sent to both groups from one prompt
- Recap/highlight clips available

Related: PUB-23, PUB-24, PUB-35, BUG-FUNC-01, LIVE-05

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | See who attended (Analytics / Webinars) | **Pass** Analytics › Webinars report: 'REGISTERED 10 · ATTENDED 8 · 80% attendance rate', registrant list | **Fail** /analytics: 'Could not load analytics · internal error' (500); no Webinars tab (PUB-23, BUG-FUNC-01) |
| 2 | Send replay + follow-up (Webinars (Remy)) | **Pass** Remy: 'People who came get the replay and a thank-you. The 2 who missed it get … sorry we missed you' › 'Send to all 10' → 'Follow-up sent'. The page notes 'Sample: email isn't connected yet'. | **Missing** No follow-up, recap email or newsletter (Newsletter 404, PUB-35) |
| 3 | Get the replay file to share (Projects) | **Pass** Project card › Share (people with access) / Download | **Partial** Card menu › Download works. 'Share' is 'Share on social media', whose settings note 'these choices are not sent yet'. Stopped before any post. |

- Screenshot: [Beta · step 1 · See who attended](../../images/img0305.webp)
- Screenshot: [Beta · step 3 · Get the replay file to share](../../images/img0319.webp)

## CO-J4 — Done with friction (Important)

> When I run any session, I want my logo, colours, fonts and intro/outro applied automatically, so I can look consistent and professional to clients.

This is the beta's strongest coach area. The Brand Kit editor is richer than the reference (logo, palette, accent colour used by Studio, heading/body/lower-third fonts, intros/outros per shape, live overlays), and Studio › Schedule has 'Use my Brand Kit'. Uploads weren't run (writes), applying it on stage couldn't be checked because sessions are blocked, and 'Add new' offers a second kit on Free while pricing says custom kits are Growth.

**Success looks like**

- One Brand Kit holding logo, colours, fonts, lower-third font and intro/outro
- Kit applied to Studio sessions without manual setup
- Plan limits on brand kits are clear

Related: CREATE-38, CREATE-39, LIVE-19

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Brand Kits (Brand Kits) | **Pass** 'Your brand kit … Add new · My Brand Kit (Default)' | **Pass** 'Your brand kits … Add new · Default Brand' |
| 2 | Set logo, colours, fonts, intro/outro (Brand Kits) | **Pass** Kit editor | **Pass** Logo, Brand Palette, Accent Color ('Studio's live room uses it'), Heading/Body fonts, Lower-Third font, Custom Intros/Outros per shape, Overlay Template ('All changes saved'). Uploads not run (CREATE-38 beta-better). |
| 3 | Apply the kit to a scheduled session (Studio) | **Pass** Workflow 'Apply my Brand Kit' + Brand panel in the room | **Partial** Schedule dialog has 'Use my Brand Kit'. Stopped before 'Schedule session'. |
| 4 | See the brand on stage (Studio room) | **Pass** Brand panel in the room | **Not run** Session start refused by overlap ('Can't record now'), and joining writes anyway |

- Screenshot: [Beta · step 1 · Open Brand Kits](../../images/img0330.webp)
- Screenshot: [Beta · step 2 · Set logo, colours, fonts, intro/outro](../../images/img0331.webp)
- Screenshot: [Beta · step 3 · Apply the kit to a scheduled session](../../images/img0314.webp)
- Screenshot: [Beta · step 4 · See the brand on stage](../../images/img0312.webp)

## CO-J5 — Blocked (Important)

> When I have a 1:1 client session, I want to invite the client, record it and send them the recording privately, so I can give them something to revisit between sessions.

Inviting via Studio › Schedule exists, but recording was refused by the slot overlap, and there's no private share: 'Share' only posts to social. Downloading and emailing the file is the only route.

**Success looks like**

- Client invited by email with a join link and calendar invite
- Session recorded
- Recording shared privately with the client (not posted publicly)

Related: LIVE-03, PUB-09

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Schedule and invite the client (Studio) | **Pass** Schedule dialog / workflow guest emails | **Pass** Studio › Schedule › 'Invite guests': 'Each guest is emailed their own link and a calendar invite when you save.' Stopped before save. |
| 2 | Start and record the session (Studio) | **Pass** Record → lobby → Join | **Fail** 'Can't record now' overlap toast (409), 2/2 |
| 3 | Share the recording privately (Projects) | **Pass** Card › Share: 'People with access … Permissions' | **Partial** Only 'Share on social media' (choices 'not sent yet'); Download as a workaround |

- Screenshot: [Beta · step 1 · Schedule and invite the client](../../images/img0314.webp)
- Screenshot: [Beta · step 2 · Start and record the session](../../images/img0312.webp)
- Screenshot: [Beta · step 3 · Share the recording privately](../../images/img0319.webp)
