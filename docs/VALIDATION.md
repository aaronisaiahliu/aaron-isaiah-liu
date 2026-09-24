# Validation record

- All 16 content routes rendered in browser at 390 × 844, 820 × 1180, and 1440 × 1000. No horizontal page overflow or clipped main headings/paragraphs was detected. The offscreen honeypot is intentionally excluded from visual content.
- Visual inspection covered the homepage, About, Services, Clients, Work, Gallery, Contact, and representative client/project stories. Mobile 401 typography spacing was adjusted during review.
- Mobile menu opens, navigates, and closes.
- Gallery opens, next/previous navigation works, arrow keys advance, Escape closes, focus returns to the initiating image.
- Contact UI retains input and announces the honest unavailable-delivery state when email credentials are absent.
- Contact API contract checks use mocked delivery only; validation, origin, token signature/expiry, minimum completion time, honeypot, body-size cap, throttling, provider failure, and provider payload checks passed.
- Native Next.js production build and Sites Worker build completed. TypeScript passed.

No live delivery test was possible without a Resend key and verified sender. Core Web Vitals have not been measured on real production traffic. The server-instance rate limiter should be complemented with a shared hosting/WAF rule before public traffic.
