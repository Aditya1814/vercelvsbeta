# Module status: what works on the beta

One row per module, from what was tested on the beta. “Partly working” means the page works but a core part is broken, missing or different. Final steps that would write real data (publish, go live, create) were not run, so they're called out as untested.

5 working · 16 partly working · 2 broken · 10 missing


## Getting in

### Sign in — Partly working

- Works today: Google sign-in works and lands in the workspace. Sign-in page, Forgot password page and error messages show correctly.
- Doesn't work / missing: Email + password sign-in rejected the test account (HTTP 401). Only Google SSO: Microsoft and GitHub are gone.
- Findings: X-08

### Sign up — Partly working

- Works today: Profile step, then account step with strong password rules and consent; email domains without a mail server are rejected.
- Doesn't work / missing: Agreeing to Terms and Privacy that are unfinished (placeholder / [BRACKETS]). Final “Create account” untested (would create an account).
- Findings: SHA-03, SHA-04

### Pricing (public) — Partly working

- Works today: Plans and prices render.
- Doesn't work / missing: Signed-in users get “Get started” buttons that send them to sign-up; copy differs from the in-app plan modal; free credits not stated.
- Findings: SHA-05

## Everywhere

### App shell & navigation — Partly working

- Works today: Sidebar, workspace switcher, notifications and the command palette (richer than the reference) work; pages load fast.
- Doesn't work / missing: “Choose your plan” checkout pops up on the first page of every new tab; 6 modules missing from the nav; no Help or credits chip in the header; at 1440×900 the sidebar hides Plan, Simulcast and Analytics; on phone the menu button floats bottom-left.
- Findings: SHA-01

### Home — Partly working

- Works today: Briefing uses real workspace data; video workflow cards open guided plans.
- Doesn't work / missing: Live cards (Go live, webinar, event, episode, debate) drop you on the Studio list; “Turn an idea into a video” became an image tool; no Upcoming posts row.
- Findings: SHA-02

### Assistant (Orbit) — Partly working

- Works today: Chat page and floating launcher open; suggestions shown.
- Doesn't work / missing: Still named Orbit (reference: Remy); no crew roles on its page; opening it sends a voice-session request without the mic being pressed. Sending a message untested (read-only).
- Findings: –

## Live

### Studio list — Working

- Works today: List, search, bulk select, open a recording and the Schedule dialog all work.
- Doesn't work / missing: Go live and Record open a new browser tab. Upcoming / Start now / Resume not checkable (no sessions).
- Findings: –

### Go live (studio lobby) — Partly working

- Works today: Lobby matches the reference: source step, “Pick where to stream” with per-account details, device check.
- Doesn't work / missing: No guided Go-live plan from Home. Joining and going live untested (would start a real session).
- Findings: –

### Encoders — Partly working

- Works today: Page loads; Invite a user dialog opens.
- Doesn't work / missing: Admin relays call fails (404) on every load; no “Add my phone” QR path; the only action sits inside the empty state. Live cards, history, Use in Studio, Disconnect couldn't be compared (no devices).
- Findings: LIVE-08

### Simulcast — Partly working

- Works today: List and simulcast detail work; extra Analytics and Playlists tabs.
- Doesn't work / missing: “Broadcast a video” sends to one destination only; no Save as draft or readiness status; offers TikTok and LinkedIn which aren't supported elsewhere.
- Findings: LIVE-22

### Custom Layouts — Working

- Works today: List and layout editor open; recycle bin.
- Doesn't work / missing: Empty page has no folders area. Save untested.
- Findings: –

### Graphics — Working

- Works today: Templates gallery and design editor open; recycle bin.
- Doesn't work / missing: Element set differs from the reference. Save untested.
- Findings: –

### Webinars — Missing

- Works today: —
- Doesn't work / missing: Module doesn't exist (404), but Home still offers “Host a webinar”.
- Findings: LIVE-05

### Multiviewer — Missing

- Works today: —
- Doesn't work / missing: Module doesn't exist (404).
- Findings: –

### Async recording requests — Missing

- Works today: —
- Doesn't work / missing: Module doesn't exist (404).
- Findings: –

## Create

### Projects (library) — Working

- Works today: Browse, filter, sort, search, card menus, multi-select, upload page and Bin work.
- Doesn't work / missing: Heading says “Video Library”; status filter (not published / no captions / failed) missing; cards don't show which workflow made them.
- Findings: –

### Project detail — Partly working

- Works today: Tabs (recording, clips, captions, posts) open.
- Doesn't work / missing: No Overview / assistant briefing; clips only appear after starting “Smart Clips Analysis” by hand; the clip feature has three names.
- Findings: CREATE-11

### Workflow composers — Partly working

- Works today: Create clips, Caption, Go global, Make a podcast, Go vertical and Write all open and reach Start.
- Doesn't work / missing: Cost and time hidden until a video is picked; Brand Kit step, caption output choice and podcast audio steps missing; Spotlight each speaker starts with a blank so Start stays disabled. Running a job untested (spends credits).
- Findings: –

### Editor — Partly working

- Works today: Opens with more tools than the reference, undo/redo, works on phone.
- Doesn't work / missing: Opening a project writes to the server (auto-save) and the AI Tools panel sends a job request with no click; no Post button.
- Findings: CREATE-28

### Brand Kits — Working

- Works today: List and a richer kit editor (intros/outros per shape).
- Doesn't work / missing: Create untested; Free plan can open the create form though pricing says custom kits are paid.
- Findings: –

### Voice clones — Partly working

- Works today: Own-voice cloning flow opens.
- Doesn't work / missing: Cloning someone else's voice is “Coming soon”. Recording untested.
- Findings: –

### Playground — Partly working

- Works today: Image generation UI works up to Generate.
- Doesn't work / missing: No video generation, templates or generation history.
- Findings: CREATE-35

### AI Twins — Missing

- Works today: —
- Doesn't work / missing: Module doesn't exist (404).
- Findings: CREATE-40

### AI Clips / AI Dub pages — Missing

- Works today: Jobs are reachable as Projects workflows instead.
- Doesn't work / missing: Standalone pages 404; Portrait Pro has no job list.
- Findings: CREATE-41

## Publish

### Posts — Broken

- Works today: Tabs and the New post composer open; post details show an activity timeline.
- Doesn't work / missing: Posts list and metrics fail (500) so Best time to post and every view count are empty; each post listed twice; Manage accounts offers 9 platforms incl. ones “not set up on this server”; no Send for approval. Scheduling/publishing untested.
- Findings: PUB-01, PUB-07

### Plan — Partly working

- Works today: Month / Week / Day views and the New menu work.
- Doesn't work / missing: Live events fail to load (error banner on every view); 3.4–5.3 s to settle; no drag to reschedule.
- Findings: PUB-17, PUB-18

### Podcast — Missing

- Works today: —
- Doesn't work / missing: Module doesn't exist (404), though podcast distribution is a promised publish target.
- Findings: PUB-34

### Newsletter — Missing

- Works today: —
- Doesn't work / missing: Module doesn't exist (404).
- Findings: PUB-35

### Website — Missing

- Works today: —
- Doesn't work / missing: Creator site builder doesn't exist (404).
- Findings: PUB-36

## Insights

### Analytics — Broken

- Works today: —
- Doesn't work / missing: Whole page is “Could not load analytics · internal error” (500); Try again repeats it; Export disabled.
- Findings: PUB-23

### Events & Logs — Missing

- Works today: —
- Doesn't work / missing: Activity / audit log doesn't exist (404).
- Findings: PUB-37

## Account

### Settings — Partly working

- Works today: Account, security sessions, workspace & team with custom roles, billing overview, connected accounts and connected apps (MCP) work.
- Doesn't work / missing: Destinations, Sources, Stream profiles, Notifications, Preferences and Storage tabs missing; billing has no invoices, payment method or cancel plan.
- Findings: PUB-25, PUB-26

### What's new / Profile — Missing

- Works today: Profile details live in Settings › Account.
- Doesn't work / missing: Both pages 404.
- Findings: PUB-38, PUB-39
