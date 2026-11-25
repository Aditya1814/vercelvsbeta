# Findings index

All 128 findings (plus 15 "beta is better" notes). Details live in the `findings-<severity>*.md` files next to this one.

| ID | Severity | Type | Module | Title |
|---|---|---|---|---|
| PUB-23 | critical | Bug | Analytics | Analytics page is entirely an error state |
| SHA-01 | high | UX | App shell | "Choose your plan" modal pops up uninvited on first page load of every tab/session, on every page |
| SHA-03 | high | Bug | Auth / legal | Sign-up requires agreeing to Terms of Service that are placeholder text |
| SHA-04 | high | Bug | Auth / legal | Privacy Policy is a visible draft with unfilled [BRACKETS] |
| SHA-02 | high | Journey | Home | Live workflow cards (Go live, Host a webinar, Host an event, Record an episode, Record a debate) all dump the user on the generic /studio list |
| LIVE-22 | high | Missing | Simulcast | "Broadcast a video" can only go to one destination |
| LIVE-05 | high | Missing | Webinars | Webinars module does not exist; "Host a webinar" on Home just opens the Studio list |
| CREATE-40 | high | Missing | AI Twins | AI Twins is missing (404, not in the nav) |
| CREATE-28 | high | Bug | Editor | Merely opening an existing project in the editor writes to the server (PUT editor-project) |
| CREATE-35 | high | Missing | Playground | Playground is image-only: video generation, templates and generation history are missing |
| CREATE-11 | high | Missing | Project detail | There is no Overview / Remy briefing tab, and a project opens on raw recording files |
| PUB-17 | high | Bug | Plan | Plan cannot load live events: "Studio events could not be loaded: The Studio could not do that (200)." |
| PUB-34 | high | Missing | Podcast | Podcast module missing (/podcast 404) |
| PUB-01 | high | Bug | Posts | Posts page fires two 500s; Best Time to Post and all view counts fail |
| PUB-07 | high | Bug | Posts | Manage accounts lists 9 platforms with live "Add account" buttons for ones that are "Not set up on this server yet" |
| PUB-25 | high | Missing | Settings | Six Settings tabs from the reference are missing |
| PUB-26 | high | Missing | Settings | Billing lacks invoices, payment method and cancel plan |
| X-08 | high | Bug | Sign in | Email sign-in rejected the account that was given for testing |
| SHA-11 | medium | Missing | App shell | No cookie notice on beta |
| SHA-12 | medium | Missing | App shell | Sidebar lacks six modules the reference has |
| SHA-15 | medium | UX | App shell | Header has no Help button and no plan/credits chip |
| SHA-33 | medium | Journey | App shell | Reference route names 404 on beta with no redirects |
| SHA-23 | medium | Copy | Assistant | Assistant is still "Orbit" everywhere on beta, with mixed identity |
| SHA-24 | medium | Missing | Assistant | Assistant page has no crew roles |
| SHA-26 | medium | Copy | Assistant | Assistant suggestions use names that do not exist in the beta nav |
| SHA-29 | medium | Bug | Assistant | Opening the floating assistant fires a voice-session POST without any mic action |
| SHA-07 | medium | Missing | Auth | Only Google SSO on login and sign-up; Microsoft and GitHub are gone |
| SHA-18 | medium | Journey | Getting started | Getting-started checklist is clips-only and uses a different feature name |
| SHA-20 | medium | Missing | Home | "Turn an idea into a video" card replaced by "Turn an idea into an image" |
| SHA-30 | medium | Phone | Phone | Phone menu button floats at bottom-left over content instead of sitting in the header |
| SHA-05 | medium | Copy | Pricing | Public /pricing page copy is weaker and inconsistent with the in-app plan modal |
| SHA-06 | medium | Journey | Pricing | Signed-in user on /pricing sees "Get started" buttons that go to /signup and a "Sign out" link but no way back to the app |
| LIVE-07 | medium | Missing | Async recording requests | Async recording requests are missing |
| LIVE-08 | medium | Bug | Encoders | Encoders calls an admin endpoint that returns 404 on every load |
| LIVE-09 | medium | Missing | Encoders | No "Add a phone" (scan a QR code for my own phone) path |
| LIVE-10 | medium | UX | Encoders | No header action on Encoders; the only CTA is inside the empty state |
| LIVE-11 | medium | Missing | Encoders | Live cards, filters, phone drawer, history, Use in Studio and Disconnect could not be compared |
| LIVE-12 | medium | Phone | Encoders | Phone: stat cards are cramped and push the empty state and CTA off screen |
| LIVE-19 | medium | Missing | Graphics | Graphics editor element set differs from the reference |
| LIVE-06 | medium | Missing | Multiviewer | Multiviewer is missing |
| LIVE-23 | medium | Missing | Simulcast | Broadcast dialog has no "Save as draft" and no readiness status |
| LIVE-24 | medium | Copy | Simulcast | Broadcast offers TikTok LIVE and LinkedIn Live, which the reference does not |
| LIVE-03 | medium | UX | Studio list | "Go live" and "Record" open the studio in a new browser tab |
| CREATE-41 | medium | Missing | AI Clips / AI Dub / Portrait Pro | Standalone tool pages are gone: /ai-clips and /ai-dub 404, and /portrait-pro has no job list |
| CREATE-39 | medium | UX | Brand Kits | 'Add new' brand kit opens a create form on the Free plan, while pricing says custom kits are a Growth feature |
| CREATE-29 | medium | Bug | Editor | Opening the AI Tools and Orbit panels fires POST requests with no Run click |
| CREATE-30 | medium | Missing | Editor | The editor header has no Post button |
| CREATE-12 | medium | UX | Project detail | The tabs are split six ways with unclear names ('Creations' for posts) |
| CREATE-13 | medium | Copy | Project detail | The clip feature has three names: 'Smart Clips', 'Magic Clips' and 'AI Clips' |
| CREATE-14 | medium | Journey | Project detail | Clips aren't there when the project opens; the user must start an analysis by hand |
| CREATE-16 | medium | Bug | Project detail | The post composer lists 8 platforms, including TikTok, LinkedIn, X, Threads and Snapchat, which the reference doesn't support |
| CREATE-02 | medium | Copy | Projects | The page heading says 'Video Library', but the nav item and the reference both say 'Projects' |
| CREATE-03 | medium | Missing | Projects | Project cards don't show which workflow made them |
| CREATE-04 | medium | Missing | Projects | The status filter ('All videos': Not yet published / No captions yet / Failed analysis / Flagged content) is missing |
| CREATE-09 | medium | Accessibility | Projects | On phone, the New Folder and New Project buttons are icons with no accessible name |
| CREATE-37 | medium | Missing | Voice clones | Can't clone someone else's voice ('Coming soon') |
| CREATE-19 | medium | UX | Workflows | Composers hide the cost and time until a video is picked, and never show a time estimate |
| CREATE-20 | medium | Journey | Workflows | Workflows end with 'open Plan to post it' instead of 'send them for my approval' |
| CREATE-21 | medium | Missing | Workflows | Create clips and Make it vertical drop the Brand Kit step and the 'Anything specific?' prompt |
| CREATE-22 | medium | Missing | Workflows | Caption a video has no output choice (burned in and/or .srt) and only 1 step |
| CREATE-23 | medium | Missing | Workflows | Make a podcast is missing audio cleanup, intro/outro music, chapters and audiograms |
| CREATE-24 | medium | Bug | Workflows | Spotlight each speaker starts with an unfilled 'pick a shape' blank, so Start stays disabled |
| CREATE-25 | medium | Missing | Workflows | The 'Turn an idea into a video' workflow is missing, and unknown workflow links silently show the library |
| PUB-24 | medium | Missing | Analytics | No Share report, no section tabs (Overview/Live shows/Posts/Webinars) |
| PUB-37 | medium | Missing | Events & Logs | Events & Logs (activity/audit log) missing (/events-logs 404) |
| PUB-35 | medium | Missing | Newsletter | Newsletter module missing (/newsletter 404) |
| PUB-18 | medium | Speed | Plan | Plan takes 3.4-5.3 s to settle |
| PUB-19 | medium | Missing | Plan | No drag-to-reschedule on the calendar |
| PUB-21 | medium | Phone | Plan | Phone month grid: platform icons spill out of day cells, 24px tap targets |
| PUB-02 | medium | Bug | Posts | Post details dialog: numbers fail to load (500) |
| PUB-03 | medium | Copy | Posts | Raw backend text "internal error" shown to users |
| PUB-04 | medium | UX | Posts | Each post is listed twice with identical labels (one per YouTube channel) |
| PUB-05 | medium | Bug | Posts | Post counts disagree across the same page |
| PUB-06 | medium | Copy | Posts | Naming: nav "Post", page "Posts", tab "Posts" |
| PUB-08 | medium | Bug | Posts | Connected-account count differs in four places |
| PUB-09 | medium | Missing | Posts | Composer is missing several reference fields and "Send for approval" |
| PUB-14 | medium | Phone | Posts | Phone: Best Time to Post, This Month and Quick Publish are hidden |
| PUB-27 | medium | Missing | Settings | Connected Accounts has no Publishing defaults |
| PUB-28 | medium | Missing | Settings | Workspace & Team lacks channel requests and invite requests |
| PUB-40 | medium | UI | Shell | At 1440x900 the sidebar hides Plan, Simulcast and Analytics behind the pinned footer |
| PUB-36 | medium | Missing | Website | Website (creator site) builder missing (/website 404) |
| SHA-13 | low | UX | App shell | Sidebar tooltips lose the hints and the crown (paid-tier) explanation |
| SHA-14 | low | UI | App shell | Two notification bells on desktop |
| SHA-17 | low | Bug | App shell | Command palette footer shows "Ctrl K" on a Mac |
| SHA-32 | low | UI | App shell | Tab titles inconsistent |
| SHA-34 | low | Copy | App shell | 404 page is terser than the reference |
| SHA-25 | low | Missing | Assistant | Assistant sidebar lacks Notifications and Help & support; no "Ideas to ask" |
| SHA-27 | low | Copy | Assistant | Autopilot control contradicts its tooltip |
| SHA-28 | low | UX | Assistant | Personalize offers LinkedIn/X formats |
| SHA-09 | low | Bug | Auth | /onboarding is a 404 when signed in and bounces to login when signed out |
| SHA-10 | low | Bug | Auth | Public pages log a 401 console error for /api/auth/me |
| SHA-19 | low | Missing | Getting started | Post-sign-up product tour could not be confirmed on beta |
| SHA-21 | low | Missing | Home | No "Upcoming posts" section or "Also on my list" row on Home |
| SHA-31 | low | Accessibility | Phone | Small touch targets on phone Home |
| LIVE-17 | low | Missing | Custom Layouts | Empty Layouts page has no folders area or "New folder" |
| LIVE-20 | low | Copy | Graphics | "Template" and "design" both name the same object |
| LIVE-21 | low | UI | Graphics | Assistant bubble overlaps editors and the studio lobby |
| LIVE-25 | low | UI | Simulcast | Simulcast cards show the timezone and a status pill instead of status/type meta text |
| LIVE-26 | low | UI | Simulcast | Simulcast page sits inside an extra bordered panel, and the tab wraps on phone |
| LIVE-27 | low | UX | Simulcast | "New channel" and "Broadcast a video" are two creation paths with no explanation |
| LIVE-04 | low | Copy | Studio list | Session names are not unique and the lobby does not show which session it is |
| LIVE-14 | low | UX | Studio list | Upcoming section, Start now, Resume and the auto-record toggle could not be checked |
| LIVE-15 | low | UI | Studio list | Bulk-selection bar moved to a floating bottom bar; the page has a stray back arrow |
| LIVE-16 | low | Copy | Studio list | Schedule dialog matches except the thumbnail source list |
| CREATE-31 | low | UX | Editor | No assistant suggestions panel on open; the assistant is behind the 'Orbit' rail button |
| CREATE-32 | low | UX | Editor | The bare /editor start page warns 'Saved in this browser only' before the user has done anything, and mints a new draft id on each visit |
| CREATE-33 | low | UX | Editor | The editor start page has 'Move to the Bin' buttons on library cards |
| CREATE-36 | low | Phone | Playground | On phone, the Playground prompt card overlaps the preset tiles |
| CREATE-15 | low | Missing | Project detail | The Recording tab has no summary and no per-speaker talk time |
| CREATE-17 | low | Phone | Project detail | On phone, the video player in the project detail is clipped at the card edges |
| CREATE-18 | low | Accessibility | Project detail | The Downloads and Drafts tabs add a second H1 |
| CREATE-06 | low | UX | Projects | The no-results search state has no 'Clear search' button |
| CREATE-07 | low | UI | Projects | The empty Folders section has no inline 'Create a new folder' tile |
| CREATE-08 | low | Copy | Projects | Auto-generated project names repeat the date in two formats |
| CREATE-10 | low | Journey | Projects | New Project menu items open workflow composers instead of the dedicated tool pages |
| CREATE-26 | low | Copy | Workflows | Copy differences: 'word colour change' vs 'word-highlight', and 'about 1 credits' |
| PUB-20 | low | Missing | Plan | Week/Day views lack per-day summaries and legend |
| PUB-22 | low | UI | Plan | "New" menu and future-day "New post" shortcuts match the reference |
| PUB-12 | low | Bug | Posts | Row "More" (⋮) menu opens nothing visible |
| PUB-13 | low | Copy | Posts | Mixed date formats |
| PUB-15 | low | Phone | Posts | Phone: Posts table hides Status/Views/Actions off to the right |
| PUB-39 | low | Missing | Profile | Profile page missing (/profile 404); covered by Settings > Account |
| PUB-30 | low | Accessibility | Settings | Settings page has no H1 |
| PUB-31 | low | Copy | Settings | Change password dialog lacks the Google sign-up hint |
| PUB-33 | low | Phone | Settings | Phone: roles table in Workspace & Team is cut off |
| PUB-38 | low | Missing | What's new | What's new (changelog) missing (/changelog 404) |
| X-06 | low | Bug | App shell | Unknown pages return HTTP 200 instead of 404 |
| X-10 | low | Bug | Pricing / legal | Public pages log a 401 console error |
| SHA-16 | low | Beta better | App shell | Command palette is richer than the reference |
| SHA-08 | low | Beta better | Auth | Sign-up step 2 is stronger than the reference |
| SHA-22 | low | Beta better | Home | Home briefing is driven by real data |
| SHA-35 | low | Beta better | Notifications | Clear empty notifications state |
| LIVE-02 | low | Beta better | Go live journey | Studio "Go live" lobby matches the reference and adds an end-time hint |
| LIVE-18 | low | Beta better | Graphics | Recycle bin, Templates gallery and richer channel pages on the beta |
| CREATE-38 | low | Beta better | Brand Kits | The beta brand kit editor is richer than the reference |
| CREATE-34 | low | Beta better | Editor | The beta editor has more tools and works at phone width |
| CREATE-05 | low | Beta better | Projects | Beta adds a Bin view, a media-type filter, and better empty states for each view |
| CREATE-27 | low | Beta better | Workflows | Beta composers add an AI Writer workflow, caption-file input, rights note and style previews |
| PUB-10 | low | Beta better | Posts | Composer shows credit cost and YouTube thumbnail caveat |
| PUB-11 | low | Beta better | Posts | Post details include an activity timeline and "View on YouTube" |
| PUB-29 | low | Beta better | Settings | Beta adds Connected apps (MCP), Security sessions and custom roles |
| PUB-32 | low | Beta better | Settings | Phone Settings uses a list -> detail pattern |
| X-11 | low | Beta better | App shell | Beta pages load faster than the reference |
