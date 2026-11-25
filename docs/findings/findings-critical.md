# Findings: critical severity

1 findings. Each compares the Vercel reference with the beta.

## PUB-23 — Analytics page is entirely an error state

- Severity: **critical** · Type: Bug · Module: Analytics

**Vercel reference:** Remy·Marketer summary ("Views are up 9% this week..."), November goal, KPIs (Views 248K, Watch time 3,410 h, Followers +1,284, Engagement 5.1%), "Views over time" chart with live-show markers, "What worked" top posts with "More like this", tabs Overview / Live shows / Posts / Webinars, Share report.

**Beta:** Only "Could not load analytics internal error Try again"; GET /api/gateway/video/social/overview?range=30d -> 500 ({"error":{"code":"internal","message":"internal error"}}); Try again repeats the 500; Export CSV is greyed.

**Impact:** The whole Insights module is unusable.

**Recommendation:** Fix /social/overview; when there is no data yet, show an empty state that explains what will appear once posts collect views.

- Screenshot: [Beta · beta_desk_analytics.png](../../images/img0001.webp)
- Screenshot: [Vercel · desk__analytics.png](../../images/img0002.webp)
