window.DATA=window.DATA||{};window.DATA["overview"]={
 "eyebrow": "CloudReel · UI/UX comparison · 24 Nov 2026",
 "title": "Vercel reference vs. Beta: what's missing and what's broken",
 "intro": "Part 1 compares every page and main task flow of the beta with the designer's reference frontend (UI, UX, journeys, flows, site response). Part 2 is a senior-QA test report on the beta: test cases, defect log, cross-browser, accessibility, security, performance and a release recommendation.",
 "urls": [
  {
   "label": "Reference · cloud-reel-dashboard.vercel.app",
   "href": "https://cloud-reel-dashboard.vercel.app/"
  },
  {
   "label": "Beta · app-beta.cloudreel.com",
   "href": "https://app-beta.cloudreel.com/"
  }
 ],
 "kpis": [
  {
   "value": "1",
   "label": "Critical"
  },
  {
   "value": "17",
   "label": "High"
  },
  {
   "value": "63",
   "label": "Medium"
  },
  {
   "value": "47",
   "label": "Low"
  },
  {
   "value": "12",
   "label": "Modules missing on beta"
  },
  {
   "value": "65",
   "label": "Task flows compared"
  }
 ],
 "panels": [
  {
   "title": "What stands out",
   "items": [
    "Analytics is a full error page and Posts can't load its numbers: the beta's social endpoints return 500 (overview, posts, post-metrics). Plan can't load live events either.",
    "By user segment (Part 3): broadcaster, educator, podcaster, coach and marketer are not ready; content creators are partly ready. Missing modules (webinars, podcast hosting, async recordings, idea-to-video), per-destination subtitles and the Analytics/Posts 500s block the most jobs.",
    "12 reference modules don't exist on the beta (Webinars, Multiviewer, Async recording, AI Twins, AI Clips, AI Dub, Podcast, Newsletter, Website, Events & Logs, What's new, Profile), yet Home still offers “Host a webinar”.",
    "The live journeys lost their guided setup: Go live, Host a webinar/event, Record an episode/debate all drop you on the plain Studio list instead of the “Here is what I will do” plan.",
    "A “Choose your plan” checkout modal opens uninvited on the first page of every new tab, on every page, and covers the whole phone screen.",
    "Sign-up requires agreeing to Terms that are developer placeholder text and a Privacy Policy with unfilled [BRACKETS].",
    "Projects lost the assistant's briefing (project opens on raw files), Playground is image-only, Simulcast broadcasts to one destination, and Settings is missing 6 reference tabs (Destinations, Sources, Stream profiles, Notifications, Preferences, Storage).",
    "The assistant is still called “Orbit” (renamed Remy in the reference) and has no crew roles on its own page.",
    "Bright spots: beta pages load faster (median LCP 560 ms vs 884 ms), the Studio Go-live lobby closely matches the reference, and several areas are richer (command palette, brand kits, editor, Bin, connected apps)."
   ]
  },
  {
   "title": "Scope",
   "items": [
    "52 reference routes and 42 beta routes, each at desktop and phone width.",
    "128 findings across 38 modules; 65 task flows walked on both sites.",
    "Flow results: 10 pass, 14 partial, 12 fail, 29 stopped on purpose before a step that would write real data.",
    "The beta was tested read-only in a signed-in workspace: nothing was created, published, uploaded, deleted or sent."
   ]
  }
 ],
 "method": [
  "Automated crawl of every route on both sites with a real Chrome browser at 1440×900 and 390×844 (touch), recording console errors, failed network requests, headings, controls, text, load timings and screenshots.",
  "Four area reviews walked the task flows interactively on both sites and compared them with the reference source code.",
  "The beta was used read-only in a signed-in workspace (“Pavan's workspace”, Free plan). Steps that would create, publish, upload, delete, invite, connect, spend credits or start live/recording were not taken, so those final steps are untested on the beta.",
  "One side effect on the beta: simply opening an existing project in the Editor auto-saved it (PUT …/editor-project, “All changes saved”), and opening its AI Tools panel sent POST …/jobs/eye-contact. No button was pressed; credits stayed at 1,000. See CREATE-28.",
  "The given login (chandus@cloudreel.com) was rejected by the beta with HTTP 401; testing used the account signed in through Google instead.",
  "Backend correctness (whether data is saved, posts really publish, etc.) is out of scope for this pass; failing API calls are reported where they surface in the UI or console.",
  "Timings come from one run per page and vary with the network; treat small differences as noise."
 ],
 "footer": "Generated for the CloudReel team · 128 findings · reference: cloud-reel-dashboard.vercel.app · beta: app-beta.cloudreel.com"
};
