window.DATA=window.DATA||{};window.DATA["top"]={
 "lede": "Critical and high severity, most important first. Full detail in “All findings”.",
 "rows": [
  {
   "sev": "critical",
   "module": "Analytics",
   "title": "Analytics page is entirely an error state",
   "id": "PUB-23",
   "fix": "Fix /social/overview; when there is no data yet, show an empty state that explains what will appear once posts collect views."
  },
  {
   "sev": "high",
   "module": "App shell",
   "title": "\"Choose your plan\" modal pops up uninvited on first page load of every tab/session, on every page",
   "id": "SHA-01",
   "fix": "Show the plan prompt only on an explicit upgrade trigger (credit limit, gated feature, Upgrade button), or at most once per account, never on deep links."
  },
  {
   "sev": "high",
   "module": "Auth / legal",
   "title": "Sign-up requires agreeing to Terms of Service that are placeholder text",
   "id": "SHA-03",
   "fix": "Publish the reviewed Terms before inviting external users; until then do not expose the beta sign-up publicly."
  },
  {
   "sev": "high",
   "module": "Auth / legal",
   "title": "Privacy Policy is a visible draft with unfilled [BRACKETS]",
   "id": "SHA-04",
   "fix": "Fill the bracketed fields and remove the draft banner before external launch."
  },
  {
   "sev": "high",
   "module": "Home",
   "title": "Live workflow cards (Go live, Host a webinar, Host an event, Record an episode, Record a debate) all dump the user on the generic /studio list",
   "id": "SHA-02",
   "fix": "Give the live cards the same guided workflow page as the video cards (go-live, webinar, host-event, record-episode, record-debate), ending in \"Open the studio\"."
  },
  {
   "sev": "high",
   "module": "Simulcast",
   "title": "\"Broadcast a video\" can only go to one destination",
   "id": "LIVE-22",
   "fix": "Allow multi-select destinations with readiness status, as in the reference."
  },
  {
   "sev": "high",
   "module": "Webinars",
   "title": "Webinars module does not exist; \"Host a webinar\" on Home just opens the Studio list",
   "id": "LIVE-05",
   "fix": "Ship the Webinars list and schedule flow, or remove the Host a webinar card until it exists."
  },
  {
   "sev": "high",
   "module": "AI Twins",
   "title": "AI Twins is missing (404, not in the nav)",
   "id": "CREATE-40",
   "fix": "Build it, or remove it from the reference and any marketing until it's planned."
  },
  {
   "sev": "high",
   "module": "Editor",
   "title": "Merely opening an existing project in the editor writes to the server (PUT editor-project)",
   "id": "CREATE-28",
   "fix": "Only persist the editor project after a real user edit, and never on load."
  },
  {
   "sev": "high",
   "module": "Playground",
   "title": "Playground is image-only: video generation, templates and generation history are missing",
   "id": "CREATE-35",
   "fix": "Add video generation and templates, plus a generations history, and use the 'Image & video' name."
  },
  {
   "sev": "high",
   "module": "Project detail",
   "title": "There is no Overview / Remy briefing tab, and a project opens on raw recording files",
   "id": "CREATE-11",
   "fix": "Add the Overview tab with the assistant briefing, built on ProjectOverview/OrbitBriefing, as the default tab."
  },
  {
   "sev": "high",
   "module": "Plan",
   "title": "Plan cannot load live events: \"Studio events could not be loaded: The Studio could not do that (200).\"",
   "id": "PUB-17",
   "fix": "Parse the double-encoded response (or fix the API to return an object) and only show the banner on a real failure."
  }
 ]
};
