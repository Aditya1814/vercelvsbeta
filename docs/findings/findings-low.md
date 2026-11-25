# Findings: low severity (part 1 of 2)

47 findings. Each compares the Vercel reference with the beta.

## SHA-13 — Sidebar tooltips lose the hints and the crown (paid-tier) explanation

- Severity: **low** · Type: UX · Module: App shell

**Vercel reference:** Collapsed tooltip: "Studio — Record or go live from your browser"; crowned items say "<Item> · Teams & broadcasters plan".

**Beta:** Collapsed tooltip only "Studio"; hovering a crowned item (Custom Layouts) in the expanded sidebar shows nothing, so the crown icon is unexplained.

**Impact:** Users can't tell what a module does or why it carries a crown.

**Recommendation:** Port the hint and plan label to the tooltip.

- Screenshot: [Screenshot · v_tooltip.png](../../images/img0118.webp)
- Screenshot: [Screenshot · b_tooltip.png](../../images/img0119.webp)
- Screenshot: [Screenshot · b_sidebar_hover_expanded.png](../../images/img0120.webp)

## SHA-14 — Two notification bells on desktop

- Severity: **low** · Type: UI · Module: App shell

**Vercel reference:** One bell, in the header (with unread dot).

**Beta:** Bell in the sidebar header next to the logo and another in the top bar.

**Impact:** Redundant controls; unclear if they differ.

**Recommendation:** Keep one (header).

- Screenshot: [Screenshot · b_home.png](../../images/img0039.webp)

## SHA-17 — Command palette footer shows "Ctrl K" on a Mac

- Severity: **low** · Type: Bug · Module: App shell

**Vercel reference:** Footer hint "⌘ K".

**Beta:** Footer hint "Ctrl K" with navigator.platform = MacIntel.

**Impact:** Wrong shortcut hint for Mac users.

**Recommendation:** Detect platform and show ⌘ on macOS.

- Screenshot: [Screenshot · b_cmdk.png](../../images/img0121.webp)

## SHA-32 — Tab titles inconsistent

- Severity: **low** · Type: UI · Module: App shell

**Vercel reference:** "Home · CloudReel", "Remy · CloudReel", "Pricing — CloudReel".

**Beta:** Home tab is just "CloudReel"; Studio is "CloudReel - Studio"; others "<Page> · CloudReel"; login/signup/forgot all "CloudReel".

**Impact:** Hard to tell tabs apart.

**Recommendation:** Use "<Page> · CloudReel" everywhere including Home and auth pages.


## SHA-34 — 404 page is terser than the reference

- Severity: **low** · Type: Copy · Module: App shell

**Vercel reference:** "This page doesn't exist — The link may be old, or the page has moved. Use the sidebar, or press ⌘K to search everything. Go to Home".

**Beta:** "404 Page not found — There is nothing at this address. Back to home" (and the plan modal opens over it on a new tab).

**Impact:** Less help recovering.

**Recommendation:** Mention search (⌘K) as the reference does.

- Screenshot: [Screenshot · b_404.png](../../images/img0042.webp)
- Screenshot: [Screenshot · v_404.png](../../images/img0122.webp)

## SHA-25 — Assistant sidebar lacks Notifications and Help & support; no "Ideas to ask"

- Severity: **low** · Type: Missing · Module: Assistant

**Vercel reference:** Sidebar footer: "Notifications", "Help & support" (opens FAQs / Help Docs / Contact support drawer); composer has "Ideas to ask".

**Beta:** Sidebar only has Home, New chat, Search chats, "No chats yet — start one."; composer has Attach, mic, "Find a sound" instead.

**Impact:** Help is harder to reach from the assistant.

**Recommendation:** Add Help & support to the assistant sidebar.

- Screenshot: [Screenshot · b_orbit.png](../../images/img0043.webp)
- Screenshot: [Screenshot · v_cocreator_help.png](../../images/img0123.webp)

## SHA-27 — Autopilot control contradicts its tooltip

- Severity: **low** · Type: Copy · Module: Assistant

**Vercel reference:** No Autopilot control.

**Beta:** Header pill reads "Autopilot: on" while its tooltip says "Turn on Autopilot and Orbit does it while you watch."; on phone it is an unlabeled purple icon.

**Impact:** Users can't tell whether autonomous actions are enabled — risky for an agent that acts.

**Recommendation:** Make the tooltip state-aware ("Autopilot is on — click to turn off") and label it on phone.

- Screenshot: [Screenshot · b_orbit.png](../../images/img0043.webp)
- Screenshot: [Screenshot · b_orbit_autopilot_hover.png](../../images/img0124.webp)
- Screenshot: [Screenshot · b_phone_orbit.png](../../images/img0125.webp)

## SHA-28 — Personalize offers LinkedIn/X formats

- Severity: **low** · Type: UX · Module: Assistant

**Vercel reference:** Personalize > Workflows: Clips, Blog Post, SEO Article, Summary, Instagram Caption, Social Caption, Newsletter, Ad Copies, Email Headlines, Quotes, News Brief.

**Beta:** Adds "LinkedIn Article", "LinkedIn Post", "X Thread" though publishing supports only YouTube/Instagram/Facebook.

**Impact:** Suggests platform support that does not exist.

**Recommendation:** Keep only formats for supported destinations, or label them as copy-only.

- Screenshot: [Screenshot · b_orbit_personalize.png](../../images/img0126.webp)
- Screenshot: [Screenshot · v_cocreator_personalize.png](../../images/img0127.webp)

## SHA-09 — /onboarding is a 404 when signed in and bounces to login when signed out

- Severity: **low** · Type: Bug · Module: Auth

**Vercel reference:** /onboarding is the sign-up entry (profile picker) and /signup redirects to it.

**Beta:** Signed in: "404 Page not found" inside the shell. Signed out: redirects to /login?next=%2Fonboarding, so after login the user lands on a 404.

**Impact:** Any old link or email pointing at /onboarding dead-ends.

**Recommendation:** Redirect /onboarding to /signup (signed out) or / (signed in).

- Screenshot: [Screenshot · bp_onboarding_loggedin.png](../../images/img0128.webp)
- Screenshot: [Screenshot · bp_onboarding.png](../../images/img0036.webp)

## SHA-10 — Public pages log a 401 console error for /api/auth/me

- Severity: **low** · Type: Bug · Module: Auth

**Vercel reference:** No console errors on public pages.

**Beta:** /pricing, /terms, /privacy, /reset-password: "Failed to load resource: the server responded with a status of 401 ()" for GET /api/auth/me (desk and phone).

**Impact:** Noise in monitoring; masks real errors.

**Recommendation:** Treat 401 on the optional session probe as "signed out" without a failing request (e.g. 200 with null user).


## SHA-19 — Post-sign-up product tour could not be confirmed on beta

- Severity: **low** · Type: Missing · Module: Getting started

**Vercel reference:** Right after sign-up an 8-step sidebar tour starts ("Step 1 of 8 Home — Start here: record, go live, or bring a video...").

**Beta:** "Replay product tour" exists in the account menu; replay could not be opened because the plan modal intercepted clicks, and first-run tour needs a real sign-up (forbidden).

**Impact:** If missing, new users get no orientation.

**Recommendation:** Verify the tour runs after sign-up.

- Screenshot: [Screenshot · v_onb_after.png](../../images/img0129.webp)
- Screenshot: [Screenshot · b_hdr_account.png](../../images/img0130.webp)

## SHA-21 — No "Upcoming posts" section or "Also on my list" row on Home

- Severity: **low** · Type: Missing · Module: Home

**Vercel reference:** Home shows "Also on my list: 1 failed post · 3 approvals · 12 clips to review..." and an "Upcoming posts" rail with "View all".

**Beta:** Neither appears; briefing says "Nothing urgent today". Probably hidden because this workspace has no scheduled posts.

**Impact:** If the section is absent rather than empty-hidden, users lose their at-a-glance publishing view.

**Recommendation:** Confirm the rail renders when posts are scheduled.

- Screenshot: [Screenshot · b_home.png](../../images/img0039.webp)
- Screenshot: [Vercel · desk__.png](../../images/img0049.webp)

## SHA-31 — Small touch targets on phone Home

- Severity: **low** · Type: Accessibility · Module: Phone

**Vercel reference:** n/a (not measured)

**Beta:** "More actions" on Continue working cards are 22x22 px; "Continue editing" and "View all in Projects" links are 16 px tall.

**Impact:** Hard to tap accurately.

**Recommendation:** Make targets at least 44x44 px.

- Screenshot: [Screenshot · b_phone_home.png](../../images/img0050.webp)

## LIVE-17 — Empty Layouts page has no folders area or "New folder"

- Severity: **low** · Type: Missing · Module: Custom Layouts

**Vercel reference:** Header has "New folder", "Import", "New layout"; the body shows Folders (Interviews, Presentations, Shows, Graphics) and "Not in a folder — Drag a layout onto a folder to move it".

**Beta:** With 0 layouts the page shows a feature explainer ("Your layouts, placed exactly right.") with New layout / Import a layout and a "Folders" feature card, but no New folder action. "New layout" opens the same editor as the reference (FOLDER / LAYOUT NAME, 16:9/9:16, Add Source, Arrange presets).

**Impact:** Users cannot set up folders before their first layout; it is unknown whether folders appear later.

**Recommendation:** Show "New folder" in the header as in the reference.

- Screenshot: [Beta · beta_desk_layouts.png](../../images/img0131.webp)
- Screenshot: [Vercel · desk__layout_builder.png](../../images/img0132.webp)
- Screenshot: [Screenshot · b_lay_new.png](../../images/img0133.webp)

## LIVE-20 — "Template" and "design" both name the same object

- Severity: **low** · Type: Copy · Module: Graphics

**Vercel reference:** Consistently "design": "New design", "Untitled design", "1 design".

**Beta:** The page says "New template" / "Start from a template", the editor says "Untitled design", and the recycle bin says "Deleted designs".

**Impact:** Mixed nouns make it unclear whether a template and a design are different things.

**Recommendation:** Use one noun everywhere.

- Screenshot: [Beta · beta_desk_graphics.png](../../images/img0134.webp)
- Screenshot: [Screenshot · b_gfx_new.png](../../images/img0068.webp)
- Screenshot: [Screenshot · b_lay_bin.png](../../images/img0135.webp)

## LIVE-21 — Assistant bubble overlaps editors and the studio lobby

- Severity: **low** · Type: UI · Module: Graphics

**Vercel reference:** Full-screen editors and the studio lobby hide the assistant bubble.

**Beta:** The floating Orbit bubble covers the Graphics editor footer ("Stage 1920 × 1080 · 0 e…"), and on phone it covers the lobby's bottom source tab ("Your stage"). The lobby also lists "Ask Orbit".

**Impact:** It hides status and controls in focused work surfaces.

**Recommendation:** Hide the bubble in full-screen editors and the studio, or dock it away from footers.

- Screenshot: [Screenshot · b_gfx_new.png](../../images/img0068.webp)
- Screenshot: [Screenshot · b_phone_studio_open_session_intent_go_live_sessionTab_1.png](../../images/img0136.webp)

## LIVE-25 — Simulcast cards show the timezone and a status pill instead of status/type meta text

- Severity: **low** · Type: UI · Module: Simulcast

**Vercel reference:** Card meta: "Oct 1, 2026 · Preview · Broadcast", with the status as coloured text; no pill on the thumbnail.

**Beta:** Card meta: "Asia/Calcutta · 17 Nov 2026", with a blue "Ready" pill on the thumbnail and a plain purple placeholder instead of a video frame.

**Impact:** Status is harder to scan and the card style differs from Studio and Projects.

**Recommendation:** Use the shared meta-text pattern (date · status · type) and a video frame.

- Screenshot: [Beta · beta_desk_simulcast.png](../../images/img0137.webp)
- Screenshot: [Vercel · desk__channels.png](../../images/img0138.webp)

## LIVE-26 — Simulcast page sits inside an extra bordered panel, and the tab wraps on phone

- Severity: **low** · Type: UI · Module: Simulcast

**Vercel reference:** Header (with the "Teams & broadcasters" badge) and grid sit directly on the page, like other modules.

**Beta:** The whole header and grid are boxed in a bordered card; there is no plan badge; at 390px "All Simulcasts" wraps onto two lines inside its pill.

**Impact:** It looks like a different app from Studio and Encoders.

**Recommendation:** Use the standard page header and drop the wrapper panel; keep tab labels on one line.

- Screenshot: [Beta · beta_desk_simulcast.png](../../images/img0137.webp)
- Screenshot: [Screenshot · b_phone_simulcast.png](../../images/img0139.webp)

## LIVE-27 — "New channel" and "Broadcast a video" are two creation paths with no explanation

- Severity: **low** · Type: UX · Module: Simulcast

**Vercel reference:** Single primary action, "Broadcast a video".

**Beta:** Both "New channel" (dialog: "Channel name… Starts as a draft… Add playlists, a schedule and a destination from its page." -> Create channel) and "Broadcast a video".

**Impact:** New users will not know which to pick.

**Recommendation:** Explain the difference (one-off broadcast vs 24×7 channel) or fold New channel into the broadcast flow.

- Screenshot: [Screenshot · b_sim_New_channel.png](../../images/img0140.webp)
- Screenshot: [Beta · beta_desk_simulcast.png](../../images/img0137.webp)

## LIVE-04 — Session names are not unique and the lobby does not show which session it is

- Severity: **low** · Type: Copy · Module: Studio list

**Vercel reference:** Default names include date and time ("Session - Nov 24, 2026 01:33:42 PM"); lobby header reads "Studio · Session - Nov 24, 2026 01:33:42 PM".

**Beta:** Two cards both called "Session - 11/17/2026"; lobby header reads only "Studio · Session" (the YouTube title field does get "Session - 11/24/2026 01:38:20 PM").

**Impact:** People cannot tell recordings apart, or confirm which session they are joining.

**Recommendation:** Name sessions with date and time, and show that name in the lobby header.

- Screenshot: [Beta · beta_desk_studio.png](../../images/img0141.webp)
- Screenshot: [Screenshot · b_gl_step2_details.png](../../images/img0071.webp)

## LIVE-14 — Upcoming section, Start now, Resume and the auto-record toggle could not be checked

- Severity: **low** · Type: UX · Module: Studio list

**Vercel reference:** Cards are split into "UPCOMING · 3" (Start now) and "RECORDINGS"; live or created sessions show Resume plus an auto-record toggle; the selection bar offers Stop (n) for live sessions.

**Beta:** This workspace has only 2 ended recordings and no scheduled or live sessions, so none of these states render. The list does request GET /studio/v1/events.

**Impact:** Scheduling then starting a session is a core Studio job that could not be confirmed.

**Recommendation:** Verify with a scheduled session and a live session in a test workspace.

- Screenshot: [Screenshot · v_studio_selectall.png](../../images/img0142.webp)
- Screenshot: [Screenshot · b_studio_selectall.png](../../images/img0143.webp)

## LIVE-15 — Bulk-selection bar moved to a floating bottom bar; the page has a stray back arrow

- Severity: **low** · Type: UI · Module: Studio list

**Vercel reference:** Selection bar replaces the toolbar at the top: "10 recordings selected · Download · Export list · Stop (2) · Delete". No back arrow on Studio.

**Beta:** Floating bottom bar: "2 recordings selected · Download (2) · Export list · Delete". The header has a "Back" arrow on a top-level page.

**Impact:** Small inconsistency with other list pages; the back arrow has no clear destination.

**Recommendation:** Pick one selection-bar pattern for all lists and drop the back arrow on top-level pages.

- Screenshot: [Screenshot · b_studio_selectall.png](../../images/img0143.webp)
- Screenshot: [Screenshot · v_studio_selectall.png](../../images/img0142.webp)

## LIVE-16 — Schedule dialog matches except the thumbnail source list

- Severity: **low** · Type: Copy · Module: Studio list

**Vercel reference:** Schedule a session: name, description, date/time, stop date/time, timezone, thumbnail from Upload / Library / Canva, "Repeat, guests and reminders".

**Beta:** Same dialog without the Canva option for the thumbnail.

**Impact:** Minor gap for users who design thumbnails in Canva.

**Recommendation:** Add Canva if it is planned; otherwise drop it from the reference.

- Screenshot: [Screenshot · b_studio_schedule.png](../../images/img0144.webp)
- Screenshot: [Screenshot · v_studio_schedule.png](../../images/img0145.webp)

## CREATE-31 — No assistant suggestions panel on open; the assistant is behind the 'Orbit' rail button

- Severity: **low** · Type: UX · Module: Editor

**Vercel reference:** On open, the right panel shows 'Editor · Remy's crew', with 'Suggested for this video' (Remove filler words, Trim silence, Noise reduction, Auto reframe) and Run buttons, plus a prompt box.

**Beta:** The canvas opens without suggestions. Clicking 'Orbit' shows 'Here's what I can do for this video' (Trim silence, Add captions, Detect speakers). The assistant is still named 'Orbit' (the reference says Remy).

**Impact:** Users are less likely to discover one-click fixes, and the assistant name differs from the rest of the product.

**Recommendation:** Open the assistant suggestions by default on first open, and rename Orbit to Remy.

- Screenshot: [Screenshot · b_ed_main2.png](../../images/img0079.webp)
- Screenshot: [Screenshot · b_ed_orbit.png](../../images/img0078.webp)
- Screenshot: [Screenshot · v_ed_main.png](../../images/img0080.webp)

## CREATE-32 — The bare /editor start page warns 'Saved in this browser only' before the user has done anything, and mints a new draft id on each visit

- Severity: **low** · Type: UX · Module: Editor

**Vercel reference:** /pro-video-editor shows 'Start a project' with the library and a welcome tour.

**Beta:** /editor redirects to /editor?draft=local-<random> with a new id on each visit (local-e2d3616f…, local-890ce1b9…), and shows the banner 'Saved in this browser only. This edit isn't in your CloudReel library …' above 'Start a project'. Projects still showed 'Projects (4)' afterwards, so nothing visible was created (verified).

**Impact:** The warning is alarming and makes no sense before any edit exists, and stale local drafts can pile up.

**Recommendation:** Show the banner only after the user starts editing without a library video, and reuse one empty draft.

- Screenshot: [Screenshot · b_ed_start.png](../../images/img0146.webp)
- Screenshot: [Screenshot · v_ed_start.png](../../images/img0147.webp)

## CREATE-33 — The editor start page has 'Move to the Bin' buttons on library cards

- Severity: **low** · Type: UX · Module: Editor

**Vercel reference:** Library cards on the start page only offer 'Edit'.

**Beta:** Cards offer 'Open …' and 'Move … to the Bin' on a screen meant for picking a video.

**Impact:** A destructive action on a picker invites accidental deletes.

**Recommendation:** Remove Bin from the picker and keep it in Projects.

- Screenshot: [Screenshot · b_ed_start.png](../../images/img0146.webp)

## CREATE-36 — On phone, the Playground prompt card overlaps the preset tiles

- Severity: **low** · Type: Phone · Module: Playground

**Vercel reference:** n/a

**Beta:** At 390px the floating prompt card covers the lower half of the first row of preset tiles, hiding their labels ('Episode thumbnail', 'Show cover art').

**Impact:** Users can't read or tap the presets they're meant to start from.

**Recommendation:** Let the prompt card flow below the grid, or dock it to the bottom with matching padding.

- Screenshot: [Screenshot · b_ph_playground.png](../../images/img0148.webp)

## CREATE-15 — The Recording tab has no summary and no per-speaker talk time

- Severity: **low** · Type: Missing · Module: Project detail

**Vercel reference:** The Files tab shows 'SUMMARY …' and 'TALK TIME Speaker 1 · 61% / Speaker 2 · 39%', plus per-speaker tracks with Edit/Download.

**Beta:** Shows 'Server recording · Ready 1m 28s Transcript' and a Tracks list. There is no summary or talk-time breakdown.

**Impact:** Users lose a quick read of what the recording is about before they choose what to make.

**Recommendation:** Show the summary and talk time when a transcript exists.

- Screenshot: [Screenshot · b_detail_main.png](../../images/img0023.webp)
- Screenshot: [Screenshot · v_detail_tab_Files3.png](../../images/img0149.webp)

## CREATE-17 — On phone, the video player in the project detail is clipped at the card edges

- Severity: **low** · Type: Phone · Module: Project detail

**Vercel reference:** n/a (the reference phone detail wasn't captured).

**Beta:** At 390px the player's play button and the left end of the progress bar are cut off by the card edge. The Remy bubble overlaps the Tracks row.

**Impact:** Playback controls are partly hidden on phone.

**Recommendation:** Add inner padding or set overflow so the player fits inside the card at small widths.

- Screenshot: [Screenshot · b_detail_phone.png](../../images/img0150.webp)

## CREATE-18 — The Downloads and Drafts tabs add a second H1

- Severity: **low** · Type: Accessibility · Module: Project detail

**Vercel reference:** n/a

**Beta:** The headings read 'H1: Session - …' and also 'H1: Downloads' / 'H1: Drafts'.

**Impact:** Screen-reader heading navigation gets two top-level headings.

**Recommendation:** Make the tab titles H2.

- Screenshot: [Screenshot · b_detail_tab_Downloads.png](../../images/img0151.webp)

## CREATE-06 — The no-results search state has no 'Clear search' button

- Severity: **low** · Type: UX · Module: Projects

**Vercel reference:** 'No projects match “zzzqqq” / Try a different name.' plus a [Clear search] button.

**Beta:** 'Nothing matches that search / Try a different word, or clear the search to see everything.' The text says to clear the search, but there's no button for it.

**Impact:** It's one more step to recover, and the result is stuck in the URL (?q=).

**Recommendation:** Add a Clear search button to the empty state.

- Screenshot: [Screenshot · b_proj_search_none.png](../../images/img0152.webp)
- Screenshot: [Screenshot · v_proj_search_none.png](../../images/img0153.webp)

## CREATE-07 — The empty Folders section has no inline 'Create a new folder' tile

- Severity: **low** · Type: UI · Module: Projects

**Vercel reference:** The Folders section always shows a '+ Create a new folder' tile.

**Beta:** Shows the plain text 'No folders yet. Use New Folder to create one.' and points the user at the header button.

**Impact:** Folder creation is less discoverable for new users.

**Recommendation:** Show the same inline create tile in the empty state.

- Screenshot: [Screenshot · b_proj_main.png](../../images/img0087.webp)
- Screenshot: [Screenshot · v_proj_main.png](../../images/img0154.webp)

## CREATE-08 — Auto-generated project names repeat the date in two formats

- Severity: **low** · Type: Copy · Module: Projects

**Vercel reference:** Projects have readable names (e.g. 'Family Drama — Shorts').

**Beta:** Recorded sessions are named 'Session - 11/17/2026 · 17 Nov 2026', with the same date twice, and two cards end up with identical names.

**Impact:** Names are long, look redundant, and don't help tell projects apart.

**Recommendation:** Generate one name per recording, with the date once and time or show to tell them apart (e.g. 'Session · 17 Nov 2026, 4:12 pm').

- Screenshot: [Screenshot · b_proj_main.png](../../images/img0087.webp)

## CREATE-10 — New Project menu items open workflow composers instead of the dedicated tool pages

- Severity: **low** · Type: Journey · Module: Projects

**Vercel reference:** New Project ▸ AI Clips / AI Captions / Portrait Pro / AI Writer each open a dedicated start page with upload, library, link and 'works best on' tips. Record opens a studio session and 'Schedule for later' opens a scheduler.

**Beta:** New Project ▸ AI Clips → /projects?workflow=create-clips, AI Captions → caption, Portrait Pro → go-vertical, AI Dub → go-global, AI Writer → write, Custom Edit → workflow=edit. Upload Video → 'Add Files' page (matches the reference). The menu also adds 'AI Dub', which the reference menu lacks. Record and Schedule were not clicked on beta (they could create a session).

**Impact:** The labels don't match where they go ('Portrait Pro' opens 'Make it vertical'), but the journey is consistent.

**Recommendation:** Rename the menu items to the workflow names (Create clips, Make it vertical, Reach new languages …) so the label matches the page.

- Screenshot: [Screenshot · b_proj_newproject.png](../../images/img0155.webp)
- Screenshot: [Screenshot · b_np_PortraitPro.png](../../images/img0156.webp)
- Screenshot: [Screenshot · v_np_PortraitPro.png](../../images/img0157.webp)

## CREATE-26 — Copy differences: 'word colour change' vs 'word-highlight', and 'about 1 credits'

- Severity: **low** · Type: Copy · Module: Workflows

**Vercel reference:** The caption style is called 'word-highlight' everywhere.

**Beta:** The style is called 'word colour change'. Write from a video shows '1 step · about 1 credits' (plural with 1). Go-global says 'add subtitles in each' and loses the style choice.

**Impact:** Small inconsistencies make the product feel unfinished.

**Recommendation:** Use one style name and fix singular/plural for credits.

- Screenshot: [Screenshot · b_wf_write_picked.png](../../images/img0158.webp)
- Screenshot: [Screenshot · b_walk_create-clips_chip_wordcolourchangecaptions.png](../../images/img0159.webp)

## PUB-20 — Week/Day views lack per-day summaries and legend

- Severity: **low** · Type: Missing · Module: Plan

**Vercel reference:** Week header "9 events · 8h 50m Conference 1 Other 8 6 posts", per-day "3 scheduled"; Day view "7 scheduled · click a free time to add more"; legend "Posts: YouTube Instagram Facebook Live events: Live Upcoming Ended"; "Demo switches" for states.

**Beta:** Week/Day show only the time grid and "0 live events · 0 posts"; legend is just "Platforms: YouTube".

**Impact:** Harder to scan a busy week.

**Recommendation:** Add per-day counts and the posts/live-events legend.

- Screenshot: [Beta · beta_desk_plan_Week.png](../../images/img0160.webp)
- Screenshot: [Vercel · vercel_desk_plan_Week.png](../../images/img0161.webp)

## PUB-22 — "New" menu and future-day "New post" shortcuts match the reference

- Severity: **low** · Type: UI · Module: Plan

**Vercel reference:** New -> "Post: Schedule a video to social" / "Live event: A Studio session on the calendar".

**Beta:** Same menu; future days have "Schedule a post on <day>" buttons that open the video picker; past days are greyed.

**Impact:** Parity.

**Recommendation:** None.

- Screenshot: [Beta · beta_desk_plan_new.png](../../images/img0162.webp)

## PUB-12 — Row "More" (⋮) menu opens nothing visible

- Severity: **low** · Type: Bug · Module: Posts

**Vercel reference:** Published rows have one action (open externally).

**Beta:** Posts tab rows have "More for <title>" buttons; clicking one showed no menu in the screenshot.

**Impact:** A dead control looks broken.

**Recommendation:** Wire the menu (e.g., View details, Copy link, Duplicate) or remove it.

- Screenshot: [Beta · beta_desk_post_kebab.png](../../images/img0163.webp)

## PUB-13 — Mixed date formats

- Severity: **low** · Type: Copy · Module: Posts

**Vercel reference:** Dates as "Nov 23, 2026" / "Yesterday" / "2d ago".

**Beta:** Rows "17/11/2026", detail "Nov 16, 2026, 7:21 PM", activity "16 Nov, 19:21", auto titles "Session - 11/17/2026 · 17 Nov 2026" (US and day-first dates in one title).

**Impact:** Day/month ambiguity in a list of scheduled posts causes mistakes.

**Recommendation:** Use one locale-aware format (e.g. "Nov 17, 2026") and fix the auto session title.

- Screenshot: [Beta · beta_desk_post_tab_Posts.png](../../images/img0028.webp)

## PUB-15 — Phone: Posts table hides Status/Views/Actions off to the right

- Severity: **low** · Type: Phone · Module: Posts

**Vercel reference:** Same clipping on Vercel (only CONTENT and DATE columns visible).

**Beta:** Table is 793px wide inside a 340px card; Status, Views and Actions need a sideways scroll with no hint.

**Impact:** Phone users miss whether a post failed.

**Recommendation:** Use a card/list layout per row on phone with status visible.

- Screenshot: [Beta · beta_phone_ph_post_poststab.png](../../images/img0164.webp)
- Screenshot: [Vercel · vercel_phone_ph_post_published.png](../../images/img0165.webp)
