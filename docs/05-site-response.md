# Site response

Measured per page on a desktop connection. LCP is when the main content appears (lower is better, over 2,500 ms is slow). TTFB is the server's first byte. The last column lists the beta's failing API calls on that page.

| Module | Vercel LCP (ms) | Beta LCP (ms) | Vercel TTFB | Beta TTFB | Beta LCP phone | Beta failing requests |
|---|---|---|---|---|---|---|
| Home | 2120 | 1096 | 124 | 70 | 1240 | None |
| Studio | 768 | 576 | 23 | 44 | 548 | None |
| Encoders | 644 | 528 | 24 | 41 | 508 | 404 GET /api/gateway/encoder/v1/admin/relays |
| Custom Layouts | 604 | 576 | 22 | 37 | 632 | None |
| Graphics | 660 | 612 | 63 | 41 | 496 | None |
| Projects | 1508 | 604 | 26 | 43 | 656 | None |
| Editor | 1596 | 568 | 29 | 80 | 520 | None |
| Brand Kits | 580 | 560 | 23 | 40 | 516 | None |
| Voice clones | 912 | 548 | 24 | 51 | 500 | None |
| Playground | 884 | 480 | 24 | 39 | 468 | None |
| Posts | 1072 | 544 | 24 | 40 | 528 | 500 GET /api/gateway/video/social/posts?range=all&sort=published&limit=200; 500 GET /api/gateway/video/social/post-metrics?post_uuids=34e09034-d6ec-4897-8d85-ac31194d0b5d%2C94ad07e4-4ccc-4cf5-9505-99134855e761%2C9f1fb7b8-5d6 |
| Plan | 900 | 2960 | 27 | 39 | 3084 | 500 GET /api/gateway/video/social/post-metrics?post_uuids=34e09034-d6ec-4897-8d85-ac31194d0b5d%2C94ad07e4-4ccc-4cf5-9505-99134855e761%2C9f1fb7b8-5d6 |
| Simulcast | 904 | 536 | 20 | 45 | 528 | None |
| Analytics | 780 | 248 | 20 | 42 | 228 | 500 GET /api/gateway/video/social/overview?range=30d |
| Assistant | 1416 | 868 | 21 | 37 | 216 | None |
| Settings | 580 | 496 | 28 | 40 | 632 | None |
| Pricing | 740 | 384 | 24 | 32 | 380 | None |
