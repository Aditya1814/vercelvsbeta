# Segment: Marketer / small business

**Not ready.** Two of the marketer's five jobs can't be done on the beta. 'Turn an idea into a video' is gone (Home offers an image, and Playground is image-only), and reporting fails (Analytics and post metrics return 500, and Export CSV is greyed out). The other three can be started but stall. Brand Kit is rich yet isn't applied by the repurposing workflows. AI Writer works as a composer but has no ad-copy type. Approval exists only as a role-based queue: an owner has no 'Send for approval' button, and we couldn't check the editor path.

- Who: In-house marketer or small-business owner making product demos, short ads and reviews for social. Matches the sign-up profile 'Marketer / Small Business: Product demos, ads and reviews' (beta /signup step 1) and 'Promo clips, social posts, and multi-platform publishing' (reference /onboarding). Often works with a manager or client who approves posts.
- Plan: Paid: Essential ($29/mo, 3,600 credits) for volume, more destinations and custom Brand Kits. The public pricing page treats custom kits as a paid feature (CREATE-39).
- Success for them: Turns an idea or one video into on-brand assets in every platform's shape, writes the copy, gets sign-off before anything goes out, and can show the results to their boss.

## Top blockers

- No idea → product-video path: the Home card is 'Turn an idea into an image', /projects?workflow=idea-video silently shows the library, and Playground makes images only (SHA-20, CREATE-25, CREATE-35)
- Reporting impossible: Analytics 'internal error' (500), views '—', Export CSV appears disabled, no Share report (BUG-FUNC-01/02, PUB-24)
- Brand Kit isn't a step in Make it vertical or Create clips (only in Spotlight each speaker), so repurposed outputs come out off-brand (CREATE-21)
- No 'Send for approval' in the post composer. Approval relies on roles and wasn't verified (PUB-09)
- Composers and the writer offer TikTok, LinkedIn and X, which the account can't connect ('Not available to connect yet'): channels and copy you can't use (PUB-07, BUG-FUNC-13, SHA-28)


## MK-J1 — Not possible (Core)

> When we launch a product, I want to make a short product video from a script or idea, so I can have a demo or ad without filming anything.

The beta has no idea-to-video path: the Home card makes an image, the idea-video workflow link falls back to the library, and Playground generates images only. Even the reference has friction here. Its composer opens the idea field automatically and clicking the token closes it, and Start hands off to /ai-influencer, which says it 'doesn't apply' the chosen shape, captions or Brand Kit.

**Success looks like**

- Idea or script in, finished vertical video with presenter, captions and brand out
- Cost known up front
- ≤ 5 screens from Home

Related: SHA-20, CREATE-25, CREATE-35, CREATE-40, BUG-FUNC-21

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Home and pick 'Turn an idea into a video' (Home) | **Pass** Card opens /workflow?type=idea-video. | **Missing** Card is 'Turn an idea into an image: A thumbnail, cover art or social image from an idea — no footage needed.' and opens /playground (SHA-20). |
| 2 | Type the idea or script (Workflows) | **Partial** Idea field opens on load (placeholder 'e.g. 5 pricing mistakes every new bakery makes'). Tapping the 'your idea' token closes it, and typing in 'Or tell me what to change…' answered 'I did not catch that'. | **Missing** No idea-video workflow. /projects?workflow=idea-video silently shows the Video Library (CREATE-25, BUG-FUNC-21). |
| 3 | Choose length, shape, presenter, language and brand (Workflows) | **Pass** '60-second vertical video presented by Maya in English, with word-highlight captions and my Brand Kit', 6 steps · 60 credits · about 10 minutes. | **Missing** Not available. |
| 4 | Start and generate the video (AI presenter) | **Partial** Start goes to /ai-influencer: 'Your workflow chose vertical shape, captions, your Brand Kit, publishing. This page makes the presenter video and doesn't apply those yet.' The script has to be generated again there. | **Missing** AI Twins / presenter module is 404 (CREATE-40). |
| 5 | Fallback: Playground (Playground) | **Pass** Image & video generation with templates. | **Partial** Image only: 'Create images… Uses about 20 credits · you have 1,000' (CREATE-35). Brand Kit picker present. Generate not pressed. |

- Screenshot: [Beta · step 1 · Open Home and pick 'Turn an idea into a video'](../../images/img0332.webp)
- Screenshot: [Beta · step 2 · Type the idea or script](../../images/img0333.webp)
- Screenshot: [Beta · step 5 · Fallback: Playground](../../images/img0332.webp)

## MK-J2 — Not verified (Core)

> When I have one good product video, I want to repurpose it for every platform in the right shapes with on-brand captions and graphics, so I can publish everywhere without re-editing.

Brand Kit setup is better on the beta, and Make it vertical keeps the 9:16 / 4:5 / 1:1 toggles. But no repurposing workflow applies the Brand Kit, Create clips is vertical-only, and publishing ends with 'open Plan'. Start was skipped (credits). Expected result: done-with-friction, since brand would be added by hand in the editor.

**Success looks like**

- One run gives 9:16, 4:5/1:1 (and 16:9) versions
- Brand Kit logo, colours and fonts applied automatically
- Each version is set to go to its platform

Related: CREATE-21, CREATE-38, CREATE-39, CREATE-20, PUB-07, CREATE-28

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Set up the Brand Kit (Brand Kits) | **Pass** Logo, overlay, sticker, accent colour, palette and fonts. | **Pass** Richer than the reference: logo, palette, accent, heading/body fonts with live preview, lower-third font, and intros/outros per shape (16:9 / 9:16 / 1:1). Autosaves. This workspace's Default Brand is still empty (CREATE-38). |
| 2 | Open Home and pick 'Make it vertical' (Home) | **Pass** Composer opens. | **Pass** Opens /projects?workflow=go-vertical. |
| 3 | Choose the source video (Workflows) | **Pass** Library picker. | **Pass** Library picker. |
| 4 | Pick the shapes and what to make (Workflows) | **Pass** Toggles: Vertical 9:16 / Portrait 4:5 / Square 1:1. Create clips also has Wide 16:9. | **Pass** Same 3 toggles. 'The whole video / Short clips from it / The video and short clips'. Create clips itself offers only vertical. |
| 5 | Apply the Brand Kit (Workflows) | **Pass** Sentence: 'with word-highlight captions and my Brand Kit'. Plan step 'Apply Brand Kit · Logo, Colours and fonts'. | **Missing** No Brand Kit token or step. The plan is Reframe → Captions → Titles → 'Open Plan to publish' (CREATE-21). |
| 6 | Send each version to its platform (Workflows) | **Pass** Publish: YouTube / Instagram / Facebook with Send for my approval, Schedule at best times or Spread over a week. | **Partial** 'open Plan to post… Nothing posts until you post it.' The list shows YouTube, Instagram, TikTok, LinkedIn, X and Facebook, though TikTok, LinkedIn and X can't be connected (PUB-07). |
| 7 | Start and review (Workflows) | **Pass** 6 steps · 45 credits → run → Review results. | **Not run** '4 steps · about 4 credits'. Stopped before Start workflow (spends credits). |

- Screenshot: [Beta · step 1 · Set up the Brand Kit](../../images/img0334.webp)
- Screenshot: [Beta · step 2 · Open Home and pick 'Make it vertical'](../../images/img0335.webp)
- Screenshot: [Beta · step 3 · Choose the source video](../../images/img0336.webp)
- Screenshot: [Beta · step 4 · Pick the shapes and what to make](../../images/img0337.webp)
- Screenshot: [Beta · step 5 · Apply the Brand Kit](../../images/img0338.webp)
- Screenshot: [Beta · step 6 · Send each version to its platform](../../images/img0339.webp)

## MK-J3 — Not verified (Important)

> When a video is ready to post, I want AI Writer to draft the captions and ad copy for each platform, so I can publish quickly in our voice.

The beta 'Write from a video' composer gets to a priced Start in 3 steps (/ai-writer redirects there) and has regional output languages. It has no ad-copy type and offers LinkedIn post / X thread, which can't be published. Generate was skipped (1 credit). The composer's 'Generate with AI · 1 credit' is the in-context alternative.

**Success looks like**

- Pick a video, choose copy types (social caption, ad copy) and a language
- Cost shown before generating
- Copy lands in the post composer, editable

Related: CREATE-27, CREATE-26, SHA-28, PUB-07, PUB-10

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open AI Writer (AI Writer) | **Pass** Home 'New: AI Writer' opens a dialog: Upload Video / Caption-SRT file / From your library. | **Pass** /ai-writer redirects to /projects?workflow=write, 'Write from a video' (CREATE-27). |
| 2 | Choose the source video (AI Writer) | **Pass** 'Choose a video to write from' list. | **Pass** Library picker. Video or caption file (.srt/.vtt/.txt) accepted. |
| 3 | Choose what to write (AI Writer) | **Pass** Summary, SEO Article, Blog Post, Newsletter, Social Caption, Ad Copies, Email Headlines, Quotes, News Brief. | **Partial** Summary, Show notes with chapters, LinkedIn post, Newsletter, X thread, Instagram caption, SEO article, Quotes. No ad copy. LinkedIn/X can't be published from the beta (SHA-28, PUB-07). |
| 4 | Choose the output language (AI Writer) | **Pass** English, Hindi, Telugu, Tamil, Kannada, Malayalam, Punjabi, Bengali, Marathi and more. | **Pass** Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, English, Spanish… Price '1 step · about 1 credits' (copy issue CREATE-26). |
| 5 | Generate (AI Writer) | **Partial** 'Generate Content' closes the dialog. Where the output landed wasn't shown in our run (unverified). | **Not run** Stopped before 'Start writing' (spends credits). |
| 6 | Use the copy in the post (Posts) | **Pass** Composer 'Personalized Content Generator' and 'Generate with AI'. | **Pass** Composer has 'Generate with AI · 1 credit' for title, description and tags, with the cost shown (PUB-10). Not pressed. |

- Screenshot: [Beta · step 1 · Open AI Writer](../../images/img0340.webp)
- Screenshot: [Beta · step 2 · Choose the source video](../../images/img0341.webp)
- Screenshot: [Beta · step 3 · Choose what to write](../../images/img0342.webp)
- Screenshot: [Beta · step 6 · Use the copy in the post](../../images/img0343.webp)

## MK-J4 — Not verified (Core)

> When I prepare a campaign, I want to schedule the posts and get my manager's approval before they go out, so nothing off-brand or wrong gets published.

The owner account we used has no 'Send for approval' control: the footer offers only Publish Now / Schedule. The Approvals tab says editor-written posts wait there, but that path needs a second (editor) account and real writes, so it couldn't be checked. The reference does it in 4 steps: New post → pick → compose → Send for approval, then Approve in the Approvals tab.

**Success looks like**

- Posts can be sent for approval from the composer
- The approver sees a queue with Approve / Request changes / Reject
- Approved posts go out on their scheduled dates

Related: PUB-09, PUB-19, PUB-28, PUB-07, BUG-FUNC-11, CREATE-20

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | New post and pick the video (Posts) | **Pass** 'Select a video to schedule' list. | **Pass** 'Select a video to post' list. |
| 2 | Compose per-platform copy (Posts) | **Pass** YouTube (playlist, visibility), Instagram (Feed/Reel/Story), Facebook (page) settings. AI generator. Timeline/AI thumbnail. | **Partial** Only YouTube is connected here. 'Not available to connect yet: Threads, TikTok, Snapchat, LinkedIn, X, Pinterest'. No playlist and no timeline/AI thumbnail (PUB-09). |
| 3 | Send for approval (Posts) | **Pass** Footer: 'Send for approval' / 'Publish Now' / 'Schedule for …'. | **Missing** Footer has only 'Publish Now' and 'Schedule' for this owner account (PUB-09). |
| 4 | Approver reviews the queue (Posts) | **Pass** Approvals: '3 posts waiting for your review', with Approve / Request changes / Reject per post and 'Approve all 3'. | **Partial** Approvals tab: '0 awaiting your review… When an editor writes a post, it waits here for you or another owner or admin to approve it before it goes out.' Approve controls not seen (queue empty). |
| 5 | Schedule the campaign across dates (Plan) | **Pass** Schedule per post, drag on the calendar to move, 'Spread over one week' in workflows. | **Not run** Schedule exists but wasn't pressed (would write). One post at a time, no drag to reschedule (PUB-19). |

- Screenshot: [Beta · step 1 · New post and pick the video](../../images/img0344.webp)
- Screenshot: [Beta · step 2 · Compose per-platform copy](../../images/img0343.webp)
- Screenshot: [Beta · step 3 · Send for approval](../../images/img0345.webp)
- Screenshot: [Beta · step 4 · Approver reviews the queue](../../images/img0346.webp)

## MK-J5 — Not possible (Important)

> When the campaign has run, I want a report of views and engagement per platform that I can share, so I can show my manager what worked.

No numbers load anywhere on the beta (500s), so there's nothing to report. The new Export CSV button is greyed out while the page is in its error state. The reference gives KPIs, a chart, 'What worked', and Share report with Copy a link / Download as CSV / Email me every Monday.

**Success looks like**

- Campaign totals and per-post numbers per platform
- Share link or CSV in ≤ 2 clicks
- Numbers match between Posts and Analytics

Related: PUB-23, PUB-24, BUG-FUNC-01, BUG-FUNC-02, BUG-FUNC-03, BUG-FUNC-10, BUG-NF-08

| # | Step | Reference | Beta |
|---|---|---|---|
| 1 | Open Analytics (Analytics) | **Pass** Views 248K, Watch time, Followers, Engagement, chart by platform. | **Fail** 'Could not load analytics: internal error' (500 /social/overview, BUG-FUNC-01). |
| 2 | Share or export the report (Analytics) | **Pass** Share report → Copy a link to this report / Download as CSV / Email me every Monday. | **Fail** Only an 'Export CSV' button, shown greyed out in the error state. No share link or scheduled email (PUB-24; Export CSV is new since that finding). |
| 3 | Check per-post numbers (Posts) | **Pass** Published list and post details show views and engagement. | **Fail** VIEWS / ENG. RATE '—'. Post details numbers fail with 500 (BUG-FUNC-02, BUG-FUNC-03). Published counts disagree (BUG-FUNC-10). |

- Screenshot: [Beta · step 1 · Open Analytics](../../images/img0305.webp)
