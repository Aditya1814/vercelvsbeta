window.DATA=window.DATA||{};window.DATA["areas"]=[
 {
  "title": "App shell, Home, assistant & sign-in",
  "modules": "App shell (sidebar, header, search, cookie notice, launcher, 404, titles), Getting started / tour, Home, Assistant (/co-creator), Auth (login, signup, forgot, onboarding), Pricing / Terms / Privacy, Phone",
  "text": "The beta shell is close to the reference and in places better (command palette with recents/Deep Search, data-driven briefing, stronger sign-up validation). The biggest problems are an uninvited \"Choose your plan\" checkout modal on the first load of every tab, the five live Home cards dropping users on the generic Studio list instead of a guided plan, and placeholder Terms/draft Privacy that sign-up forces users to agree to. The assistant is still \"Orbit\", has no crew roles on its full page, and the phone menu floats over content. Toasts were not exercised (no safe trigger found).",
  "counts": [
   "4 high",
   "14 medium",
   "13 low"
  ]
 },
 {
  "title": "Studio, live & encoders",
  "modules": "Studio list, Go live journey, Webinars, Multiviewer, Async recording requests, Encoders, Custom Layouts, Graphics, Simulcast",
  "text": "The beta's Studio go-live lobby (source -> Pick where to stream -> device check) is close to the reference, and Layouts/Graphics editors exist with some extras. The biggest gaps: the Home Go live card goes to the Studio list with no composer; Webinars, Multiviewer and Async requests are missing (404); Simulcast \"Broadcast a video\" sends to only one destination; and Encoders has no Add-a-phone/QR path and logs a 404 on /encoder/v1/admin/relays on every load. Many Encoders and Studio states (live cards, phone panel, upcoming sessions) could not be compared because the beta workspace has no phones or scheduled sessions.",
  "counts": [
   "3 high",
   "12 medium",
   "10 low"
  ]
 },
 {
  "title": "Projects, editor & creation tools",
  "modules": "Projects, Project detail, Workflows, Editor, Playground, Voice clones, Brand Kits, AI Twins, AI Clips / AI Dub / Portrait Pro",
  "text": "Beta covers the core create surfaces (library, upload, workflow composers, editor, brand kits) and is ahead of the reference in places (Bin, richer brand kit, caption-style previews, a more capable editor with a phone layout). The biggest gaps are guidance and scope. Project detail has no Overview/assistant briefing, Playground is image-only, AI Twins and the standalone AI Clips/AI Dub pages are gone, and workflows hide cost up front and end with 'open Plan' instead of an approval step. Trust issues: a plan-upgrade dialog opens by itself on every page load, and the editor writes to the server (PUT editor-project, POST eye-contact job, POST voice session) just from opening the project or a panel. The session stayed valid throughout.",
  "counts": [
   "5 high",
   "20 medium",
   "12 low"
  ]
 },
 {
  "title": "Posts, Plan, Analytics & Settings",
  "modules": "Posts, Plan, Analytics, Settings, Podcast, Newsletter, Website, Events & Logs, What's new, Profile",
  "text": "The beta has the reference structure for Posts, Plan and Settings, but its data layer for this area is broken: /social/posts, /social/post-metrics, /social/posts/<id>/metrics and /social/overview all return 500 \"internal error\", so Analytics is a full error page and every view/engagement number on Posts is blank, while Plan shows no live events because a 200 response is treated as a failure. Settings has 6 of the reference tabs missing (Destinations, Sources, Stream Profiles, Notifications, Preferences, Storage) and Billing lacks invoices/cancel, and the six Vercel-only modules (Podcast, Newsletter, Website, Events & Logs, What's new, Profile) are 404. Beta is ahead on Connected apps (MCP), device sessions, custom roles, credit-cost labels and phone Settings navigation.",
  "counts": [
   "1 critical",
   "7 high",
   "18 medium",
   "10 low"
  ]
 }
];
