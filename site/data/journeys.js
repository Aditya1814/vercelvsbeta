window.DATA=window.DATA||{};window.DATA["journeys"]={
 "lede": "Real screens from both sites for the key journeys: the reference flow on top, the beta below, with each beta step marked against the reference. Click any screen to see it full size. Scroll each lane sideways when it doesn't fit. These 7 journeys are picked from the all tested flows checklist, which lists every flow with its result.",
 "items": [
  {
   "title": "Go live from Home",
   "desc": "The headline live journey; the beta skips the guided plan. SHA-02",
   "refs": [
    "SHA-02"
   ],
   "lanes": [
    {
     "label": "Reference",
     "steps": [
      {
       "title": "Home",
       "hint": "Card: Go live",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0171.webp"
      },
      {
       "title": "Go-live plan",
       "hint": "“Go live now on YouTube from my camera, with a live transcript…”",
       "action": "Open the studio",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0172.webp"
      },
      {
       "title": "Pick where to stream",
       "hint": "Accounts · shape · title · privacy",
       "action": "Continue",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0173.webp"
      },
      {
       "title": "Device check",
       "hint": "Camera · mic · speaker",
       "action": "Join studio",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0174.webp"
      },
      {
       "title": "Live room",
       "hint": "Stream panel: Streaming to …",
       "action": "Go Live",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0175.webp"
      }
     ]
    },
    {
     "label": "Beta",
     "steps": [
      {
       "title": "Home",
       "hint": "Card: Go live",
       "action": "",
       "state": "same",
       "badge": "Same",
       "note": "",
       "img": "images/img0176.webp"
      },
      {
       "title": "Studio list",
       "hint": "Sessions list, no plan step",
       "action": "Go live",
       "state": "diff",
       "badge": "Differs",
       "note": "Plan step missing; opens a new browser tab",
       "img": "images/img0177.webp"
      },
      {
       "title": "Pick where to stream",
       "hint": "Accounts · details",
       "action": "Continue",
       "state": "same",
       "badge": "Same",
       "note": "Matches the reference",
       "img": "images/img0178.webp"
      },
      {
       "title": "Device check",
       "hint": "Camera · mic · speaker",
       "action": "Join studio",
       "state": "same",
       "badge": "Same",
       "note": "",
       "img": "images/img0179.webp"
      },
      {
       "title": "Live room",
       "hint": "",
       "action": "",
       "state": "unt",
       "badge": "Not tested",
       "note": "Not entered: would start a real session",
       "img": ""
      }
     ]
    }
   ]
  },
  {
   "title": "Create clips from a video",
   "desc": "The core AI job; the beta loses the assistant's briefing and hides the price. CREATE-11",
   "refs": [
    "CREATE-11"
   ],
   "lanes": [
    {
     "label": "Reference",
     "steps": [
      {
       "title": "Home",
       "hint": "Card: Create clips",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0171.webp"
      },
      {
       "title": "Clips plan",
       "hint": "Choices · Brand Kit · cost and time shown",
       "action": "Start",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0180.webp"
      },
      {
       "title": "Project overview",
       "hint": "“I found 12 moments. These 3 will do best as Shorts…”",
       "action": "Pick moments",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0181.webp"
      },
      {
       "title": "Plan posts",
       "hint": "Moments → posts",
       "action": "Send for approval",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0182.webp"
      }
     ]
    },
    {
     "label": "Beta",
     "steps": [
      {
       "title": "Home",
       "hint": "Card: Create clips",
       "action": "",
       "state": "same",
       "badge": "Same",
       "note": "",
       "img": "images/img0176.webp"
      },
      {
       "title": "Clips plan",
       "hint": "No Brand Kit step · ends “open Plan to post it”",
       "action": "Start workflow",
       "state": "diff",
       "badge": "Differs",
       "note": "Cost and time hidden until a video is picked; no approval step",
       "img": "images/img0183.webp"
      },
      {
       "title": "Project",
       "hint": "Opens on the raw Recording tab",
       "action": "",
       "state": "diff",
       "badge": "Differs",
       "note": "No assistant briefing or moments",
       "img": "images/img0184.webp"
      },
      {
       "title": "Clips tab",
       "hint": "Empty until analysis runs",
       "action": "Start Smart Clips Analysis",
       "state": "diff",
       "badge": "Differs",
       "note": "Clips need a manual start (not run: spends credits)",
       "img": "images/img0185.webp"
      }
     ]
    }
   ]
  },
  {
   "title": "Create a post",
   "desc": "Publishing is the payoff of every workflow. PUB-01 PUB-07",
   "refs": [
    "PUB-01",
    "PUB-07"
   ],
   "lanes": [
    {
     "label": "Reference",
     "steps": [
      {
       "title": "Posts",
       "hint": "Queue · Approvals · Published · Best time to post",
       "action": "New post",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0186.webp"
      },
      {
       "title": "Pick a video",
       "hint": "Library picker",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0187.webp"
      },
      {
       "title": "Where",
       "hint": "YouTube · Instagram · Facebook",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0188.webp"
      },
      {
       "title": "Details & send",
       "hint": "Thumbnail from timeline or AI · playlist · languages",
       "action": "Send for approval / Schedule",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0189.webp"
      }
     ]
    },
    {
     "label": "Beta",
     "steps": [
      {
       "title": "Posts",
       "hint": "Numbers fail (500) · posts listed twice",
       "action": "New post",
       "state": "bad",
       "badge": "Broken",
       "note": "Best time to post and views empty",
       "img": "images/img0190.webp"
      },
      {
       "title": "Pick a video",
       "hint": "Library picker",
       "action": "",
       "state": "same",
       "badge": "Same",
       "note": "",
       "img": "images/img0191.webp"
      },
      {
       "title": "Where",
       "hint": "8 platforms incl. unsupported ones",
       "action": "",
       "state": "diff",
       "badge": "Differs",
       "note": "TikTok, LinkedIn, X, Threads, Snapchat offered",
       "img": "images/img0192.webp"
      },
      {
       "title": "Details & send",
       "hint": "No timeline/AI thumbnail, playlist, languages or Send for approval",
       "action": "Schedule / Publish",
       "state": "diff",
       "badge": "Differs",
       "note": "Schedule/Publish not pressed: would publish",
       "img": "images/img0193.webp"
      }
     ]
    }
   ]
  },
  {
   "title": "Broadcast a video (Simulcast)",
   "desc": "Simulcast's main job is sending one video to many places. LIVE-22",
   "refs": [
    "LIVE-22"
   ],
   "lanes": [
    {
     "label": "Reference",
     "steps": [
      {
       "title": "Simulcast",
       "hint": "Channels list",
       "action": "Broadcast a video",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0194.webp"
      },
      {
       "title": "Video",
       "hint": "Pick a video",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0195.webp"
      },
      {
       "title": "Destinations",
       "hint": "Tick several · Ready / Not ready",
       "action": "Go live / Save as draft",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0196.webp"
      }
     ]
    },
    {
     "label": "Beta",
     "steps": [
      {
       "title": "Simulcast",
       "hint": "Channels list",
       "action": "Broadcast a video",
       "state": "same",
       "badge": "Same",
       "note": "",
       "img": "images/img0197.webp"
      },
      {
       "title": "Video",
       "hint": "Pick a video",
       "action": "",
       "state": "same",
       "badge": "Same",
       "note": "",
       "img": "images/img0198.webp"
      },
      {
       "title": "Destination",
       "hint": "Single radio choice",
       "action": "Go live",
       "state": "bad",
       "badge": "Broken",
       "note": "Only one destination, no readiness, no Save as draft (Go live not pressed)",
       "img": "images/img0199.webp"
      }
     ]
    }
   ]
  },
  {
   "title": "Add a phone (Encoders)",
   "desc": "Getting a phone camera into CloudReel. LIVE-08",
   "refs": [
    "LIVE-08"
   ],
   "lanes": [
    {
     "label": "Reference",
     "steps": [
      {
       "title": "Encoders",
       "hint": "Live now · needs attention · phones",
       "action": "Add a phone",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0200.webp"
      },
      {
       "title": "Whose phone?",
       "hint": "My phone (QR) or a teammate's (invite)",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0201.webp"
      },
      {
       "title": "Invite a teammate",
       "hint": "Email invite as Editor",
       "action": "Send invite",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0202.webp"
      },
      {
       "title": "Use in Studio",
       "hint": "Studio opens on the phone's SRT feed",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0203.webp"
      }
     ]
    },
    {
     "label": "Beta",
     "steps": [
      {
       "title": "Encoders",
       "hint": "Empty state; relays call fails (404)",
       "action": "Invite a user",
       "state": "bad",
       "badge": "Broken",
       "note": "Admin endpoint fails on every load; no header action",
       "img": "images/img0204.webp"
      },
      {
       "title": "Scan my phone (QR)",
       "hint": "",
       "action": "",
       "state": "miss",
       "badge": "Missing",
       "note": "No “my phone” path",
       "img": ""
      },
      {
       "title": "Invite a user",
       "hint": "Email invite",
       "action": "Send invitation",
       "state": "unt",
       "badge": "Not tested",
       "note": "Not sent",
       "img": "images/img0205.webp"
      }
     ]
    }
   ]
  },
  {
   "title": "Sign up and first visit",
   "desc": "First impression for every new user. SHA-01 SHA-03 SHA-04",
   "refs": [
    "SHA-01",
    "SHA-03",
    "SHA-04"
   ],
   "lanes": [
    {
     "label": "Reference",
     "steps": [
      {
       "title": "Choose profile",
       "hint": "Five profiles",
       "action": "Continue",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0206.webp"
      },
      {
       "title": "Account",
       "hint": "Google · Microsoft · GitHub · or email",
       "action": "Get started",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0207.webp"
      },
      {
       "title": "First visit",
       "hint": "Home briefing + product tour",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0208.webp"
      }
     ]
    },
    {
     "label": "Beta",
     "steps": [
      {
       "title": "Choose profile",
       "hint": "Same five profiles",
       "action": "Continue",
       "state": "same",
       "badge": "Same",
       "note": "",
       "img": "images/img0209.webp"
      },
      {
       "title": "Account",
       "hint": "Google or email · password rules · agree to Terms & Privacy",
       "action": "Create account",
       "state": "bad",
       "badge": "Broken",
       "note": "Terms are placeholder; Privacy has [BRACKETS]; Microsoft/GitHub gone; Create not pressed",
       "img": "images/img0210.webp"
      },
      {
       "title": "First visit",
       "hint": "“Choose your plan” checkout over Home",
       "action": "",
       "state": "diff",
       "badge": "Differs",
       "note": "Pops up on every new tab",
       "img": "images/img0211.webp"
      }
     ]
    }
   ]
  },
  {
   "title": "See how my content performed",
   "desc": "Analytics answers “is this working?”. PUB-23",
   "refs": [
    "PUB-23"
   ],
   "lanes": [
    {
     "label": "Reference",
     "steps": [
      {
       "title": "Analytics",
       "hint": "Summary · KPIs · chart · What worked",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0212.webp"
      },
      {
       "title": "Change section",
       "hint": "Overview · Live shows · Posts · Webinars · Share report",
       "action": "",
       "state": "",
       "badge": "",
       "note": "",
       "img": "images/img0213.webp"
      }
     ]
    },
    {
     "label": "Beta",
     "steps": [
      {
       "title": "Analytics",
       "hint": "“Could not load analytics · internal error”",
       "action": "Try again",
       "state": "bad",
       "badge": "Broken",
       "note": "GET /social/overview → 500",
       "img": "images/img0214.webp"
      },
      {
       "title": "Try again / export",
       "hint": "Same error again; Export CSV greyed; no Share report",
       "action": "",
       "state": "bad",
       "badge": "Broken",
       "note": "No screen: not reached",
       "img": ""
      }
     ]
    }
   ]
  }
 ]
};
