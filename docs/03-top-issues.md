# Top issues to fix first

Critical and high severity, most important first. Full detail in “All findings”.

| Severity | Module | ID | Issue | Fix |
|---|---|---|---|---|
| critical | Analytics | PUB-23 | Analytics page is entirely an error state | Fix /social/overview; when there is no data yet, show an empty state that explains what will appear once posts collect views. |
| high | App shell | SHA-01 | "Choose your plan" modal pops up uninvited on first page load of every tab/session, on every page | Show the plan prompt only on an explicit upgrade trigger (credit limit, gated feature, Upgrade button), or at most once per account, never on deep links. |
| high | Auth / legal | SHA-03 | Sign-up requires agreeing to Terms of Service that are placeholder text | Publish the reviewed Terms before inviting external users; until then do not expose the beta sign-up publicly. |
| high | Auth / legal | SHA-04 | Privacy Policy is a visible draft with unfilled [BRACKETS] | Fill the bracketed fields and remove the draft banner before external launch. |
| high | Home | SHA-02 | Live workflow cards (Go live, Host a webinar, Host an event, Record an episode, Record a debate) all dump the user on the generic /studio list | Give the live cards the same guided workflow page as the video cards (go-live, webinar, host-event, record-episode, record-debate), ending in "Open the studio". |
| high | Simulcast | LIVE-22 | "Broadcast a video" can only go to one destination | Allow multi-select destinations with readiness status, as in the reference. |
| high | Webinars | LIVE-05 | Webinars module does not exist; "Host a webinar" on Home just opens the Studio list | Ship the Webinars list and schedule flow, or remove the Host a webinar card until it exists. |
| high | AI Twins | CREATE-40 | AI Twins is missing (404, not in the nav) | Build it, or remove it from the reference and any marketing until it's planned. |
| high | Editor | CREATE-28 | Merely opening an existing project in the editor writes to the server (PUT editor-project) | Only persist the editor project after a real user edit, and never on load. |
| high | Playground | CREATE-35 | Playground is image-only: video generation, templates and generation history are missing | Add video generation and templates, plus a generations history, and use the 'Image & video' name. |
| high | Project detail | CREATE-11 | There is no Overview / Remy briefing tab, and a project opens on raw recording files | Add the Overview tab with the assistant briefing, built on ProjectOverview/OrbitBriefing, as the default tab. |
| high | Plan | PUB-17 | Plan cannot load live events: "Studio events could not be loaded: The Studio could not do that (200)." | Parse the double-encoded response (or fix the API to return an object) and only show the banner on a real failure. |
