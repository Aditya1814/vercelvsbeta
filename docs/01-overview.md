# Vercel reference vs. Beta: what's missing and what's broken

CloudReel · UI/UX comparison · 24 Nov 2026

Part 1 compares every page and main task flow of the beta with the designer's reference frontend (UI, UX, journeys, flows, site response). Part 2 is a senior-QA test report on the beta: test cases, defect log, cross-browser, accessibility, security, performance and a release recommendation.

- Reference · cloud-reel-dashboard.vercel.app: https://cloud-reel-dashboard.vercel.app/
- Beta · app-beta.cloudreel.com: https://app-beta.cloudreel.com/

## Numbers

- **1** Critical
- **17** High
- **63** Medium
- **47** Low
- **12** Modules missing on beta
- **65** Task flows compared

## What stands out

- Analytics is a full error page and Posts can't load its numbers: the beta's social endpoints return 500 (overview, posts, post-metrics). Plan can't load live events either.
- By user segment (Part 3): broadcaster, educator, podcaster, coach and marketer are not ready; content creators are partly ready. Missing modules (webinars, podcast hosting, async recordings, idea-to-video), per-destination subtitles and the Analytics/Posts 500s block the most jobs.
- 12 reference modules don't exist on the beta (Webinars, Multiviewer, Async recording, AI Twins, AI Clips, AI Dub, Podcast, Newsletter, Website, Events & Logs, What's new, Profile), yet Home still offers “Host a webinar”.
- The live journeys lost their guided setup: Go live, Host a webinar/event, Record an episode/debate all drop you on the plain Studio list instead of the “Here is what I will do” plan.
- A “Choose your plan” checkout modal opens uninvited on the first page of every new tab, on every page, and covers the whole phone screen.
- Sign-up requires agreeing to Terms that are developer placeholder text and a Privacy Policy with unfilled [BRACKETS].
- Projects lost the assistant's briefing (project opens on raw files), Playground is image-only, Simulcast broadcasts to one destination, and Settings is missing 6 reference tabs (Destinations, Sources, Stream profiles, Notifications, Preferences, Storage).
- The assistant is still called “Orbit” (renamed Remy in the reference) and has no crew roles on its own page.
- Bright spots: beta pages load faster (median LCP 560 ms vs 884 ms), the Studio Go-live lobby closely matches the reference, and several areas are richer (command palette, brand kits, editor, Bin, connected apps).

## Scope

- 52 reference routes and 42 beta routes, each at desktop and phone width.
- 128 findings across 38 modules; 65 task flows walked on both sites.
- Flow results: 10 pass, 14 partial, 12 fail, 29 stopped on purpose before a step that would write real data.
- The beta was tested read-only in a signed-in workspace: nothing was created, published, uploaded, deleted or sent.

## By area

### App shell, Home, assistant & sign-in

*App shell (sidebar, header, search, cookie notice, launcher, 404, titles), Getting started / tour, Home, Assistant (/co-creator), Auth (login, signup, forgot, onboarding), Pricing / Terms / Privacy, Phone*

The beta shell is close to the reference and in places better (command palette with recents/Deep Search, data-driven briefing, stronger sign-up validation). The biggest problems are an uninvited "Choose your plan" checkout modal on the first load of every tab, the five live Home cards dropping users on the generic Studio list instead of a guided plan, and placeholder Terms/draft Privacy that sign-up forces users to agree to. The assistant is still "Orbit", has no crew roles on its full page, and the phone menu floats over content. Toasts were not exercised (no safe trigger found).

4 high · 14 medium · 13 low

### Studio, live & encoders

*Studio list, Go live journey, Webinars, Multiviewer, Async recording requests, Encoders, Custom Layouts, Graphics, Simulcast*

The beta's Studio go-live lobby (source -> Pick where to stream -> device check) is close to the reference, and Layouts/Graphics editors exist with some extras. The biggest gaps: the Home Go live card goes to the Studio list with no composer; Webinars, Multiviewer and Async requests are missing (404); Simulcast "Broadcast a video" sends to only one destination; and Encoders has no Add-a-phone/QR path and logs a 404 on /encoder/v1/admin/relays on every load. Many Encoders and Studio states (live cards, phone panel, upcoming sessions) could not be compared because the beta workspace has no phones or scheduled sessions.

3 high · 12 medium · 10 low

### Projects, editor & creation tools

*Projects, Project detail, Workflows, Editor, Playground, Voice clones, Brand Kits, AI Twins, AI Clips / AI Dub / Portrait Pro*

Beta covers the core create surfaces (library, upload, workflow composers, editor, brand kits) and is ahead of the reference in places (Bin, richer brand kit, caption-style previews, a more capable editor with a phone layout). The biggest gaps are guidance and scope. Project detail has no Overview/assistant briefing, Playground is image-only, AI Twins and the standalone AI Clips/AI Dub pages are gone, and workflows hide cost up front and end with 'open Plan' instead of an approval step. Trust issues: a plan-upgrade dialog opens by itself on every page load, and the editor writes to the server (PUT editor-project, POST eye-contact job, POST voice session) just from opening the project or a panel. The session stayed valid throughout.

5 high · 20 medium · 12 low

### Posts, Plan, Analytics & Settings

*Posts, Plan, Analytics, Settings, Podcast, Newsletter, Website, Events & Logs, What's new, Profile*

The beta has the reference structure for Posts, Plan and Settings, but its data layer for this area is broken: /social/posts, /social/post-metrics, /social/posts/<id>/metrics and /social/overview all return 500 "internal error", so Analytics is a full error page and every view/engagement number on Posts is blank, while Plan shows no live events because a 200 response is treated as a failure. Settings has 6 of the reference tabs missing (Destinations, Sources, Stream Profiles, Notifications, Preferences, Storage) and Billing lacks invoices/cancel, and the six Vercel-only modules (Podcast, Newsletter, Website, Events & Logs, What's new, Profile) are 404. Beta is ahead on Connected apps (MCP), device sessions, custom roles, credit-cost labels and phone Settings navigation.

1 critical · 7 high · 18 medium · 10 low

## Method and limits

- Automated crawl of every route on both sites with a real Chrome browser at 1440×900 and 390×844 (touch), recording console errors, failed network requests, headings, controls, text, load timings and screenshots.
- Four area reviews walked the task flows interactively on both sites and compared them with the reference source code.
- The beta was used read-only in a signed-in workspace (“Pavan's workspace”, Free plan). Steps that would create, publish, upload, delete, invite, connect, spend credits or start live/recording were not taken, so those final steps are untested on the beta.
- One side effect on the beta: simply opening an existing project in the Editor auto-saved it (PUT …/editor-project, “All changes saved”), and opening its AI Tools panel sent POST …/jobs/eye-contact. No button was pressed; credits stayed at 1,000. See CREATE-28.
- The given login (chandus@cloudreel.com) was rejected by the beta with HTTP 401; testing used the account signed in through Google instead.
- Backend correctness (whether data is saved, posts really publish, etc.) is out of scope for this pass; failing API calls are reported where they surface in the UI or console.
- Timings come from one run per page and vary with the network; treat small differences as noise.
