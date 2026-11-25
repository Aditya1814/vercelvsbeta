# Cross-browser and devices

Beta pages in Chrome, Safari (WebKit) and Firefox at desktop, short-laptop, tablet and phone sizes. Hover a cell for its note.

| Page | Chrome 1440 | Chrome 1280x720 | Chrome 768 | Chrome 390 | Chrome 360 Android | Safari 1440 | Safari iPad | Safari iPhone 15 | Firefox 1440 | Firefox 390 |
|---|---|---|---|---|---|---|---|---|---|---|
| / | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /studio | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /encoders | pass | pass | pass | minor | minor | pass | pass | minor | pass | minor |
| /projects | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /projects?workflow=create-clips | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /post | pass | pass | fail | pass | pass | pass | pass | pass | pass | pass |
| /plan | pass | pass | pass | pass | minor | pass | pass | minor | pass | pass |
| /simulcast | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /analytics | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /settings | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /co-creator | pass | pass | pass | minor | pass | pass | pass | pass | pass | pass |
| /login | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /signup | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| /pricing | pass | pass | pass | pass | pass | pass | pass | pass | pass | pass |

## Notes for cells that are not a plain pass

- `/encoders` · Chrome 390: minor: KPI card captions wrap one word per line ("phones / of / members / who / can / broadcast / here") (BUG-CA-10); qa/compat-a11y/shots/beta_Chrome_390/_encoders.jpg
- `/encoders` · Chrome 360 Android: minor: KPI card captions wrap one word per line ("phones / of / members / who / can / broadcast / here") (BUG-CA-10); qa/compat-a11y/shots/beta_Chrome_360_Android/_encoders.jpg
- `/encoders` · Safari iPhone 15: minor: KPI card captions wrap one word per line ("phones / of / members / who / can / broadcast / here") (BUG-CA-10); qa/compat-a11y/shots/beta_Safari_iPhone_15/_encoders.jpg
- `/encoders` · Firefox 390: minor: KPI card captions wrap one word per line ("phones / of / members / who / can / broadcast / here") (BUG-CA-10); qa/compat-a11y/shots/beta_Firefox_390/_encoders.jpg
- `/post` · Chrome 768: fail: "Manage accounts" / "New post" header buttons unclickable, covered by the tab-row container (BUG-CA-01); qa/compat-a11y/shots/beta_Chrome_768/_post.jpg
- `/plan` · Chrome 360 Android: minor: floating menu button + crew bubble cover calendar day cells (BUG-CA-09); qa/compat-a11y/shots/beta_Chrome_360_Android/_plan.jpg
- `/plan` · Safari iPhone 15: minor: floating menu button + crew bubble cover calendar day cells (BUG-CA-09); qa/compat-a11y/shots/beta_Safari_iPhone_15/_plan.jpg
- `/co-creator` · Chrome 390: minor: 13.2 s to settle, 502 on /api/gateway/subscription/v1/billing/plans (seen once, not reproduced in 9 other configs); qa/compat-a11y/shots/beta_Chrome_390/_co_creator.jpg
