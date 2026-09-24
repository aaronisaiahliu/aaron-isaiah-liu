# Validation record

- All 15 content routes rendered in browser at 390 × 844, 820 × 1180, and 1440 × 1000. No horizontal page overflow or clipped main headings/paragraphs was detected. The offscreen honeypot is intentionally excluded from visual content.
- Visual inspection covered the homepage, About, Services, Clients, Work, Gallery, Contact, and representative client/project stories. Mobile 401 typography spacing was adjusted during review.
- Mobile menu opens, navigates, and closes.
- Gallery opens, next/previous navigation works, arrow keys advance, Escape closes, focus returns to the initiating image.
- Contact UI retains input and announces the honest unavailable-delivery state when email credentials are absent.
- Contact API contract checks use mocked delivery only; validation, origin, token signature/expiry, minimum completion time, honeypot, body-size cap, throttling, provider failure, and provider payload checks passed.
- Native Next.js production build and Sites Worker build completed. TypeScript passed.

No live delivery test was possible without a Resend key and verified sender. Core Web Vitals have not been measured on real production traffic. The server-instance rate limiter should be complemented with a shared hosting/WAF rule before public traffic.

## Refinement verification — September 2026

- All 15 routes rechecked at 390 × 844, 820 × 1180 and 1440 × 1000; no horizontal overflow.
- Visual review: Portrait 1 within retained hero geometry, full studio compositions, supplied logos on appropriate backgrounds, balanced two-project Work page, and secondary Gallery titles.
- Mobile menu opens/closes on navigation. Gallery opens, next control advances, Escape closes. Browser back/forward restores the correct page.
- Route entry animation: 320ms opacity with 4px translation, keyed to pathname without link interception. Reduced-motion CSS disables the animation.
- Native Next production build and authored TypeScript checks pass.
- No source or asset upload and no deployment performed in this refinement pass.


## Second refinement — September 24, 2026

- All 17 content routes checked at 390 × 844, 820 × 1180, and 1440 × 1000: 51 checks, no horizontal overflow or missing main headings.
- Verified home pairing (Sumi Jo / Xian Zhang), identical primary service labels, removed portrait label, eight client profiles, redesigned Classic Divinity feature and three intentional Coming Soon categories.
- Both scroll anchors resolve to their visible targets with smooth scrolling. Group lightbox captions show one person per line; Quinn’s lightbox remains 280 × 360px.
- Visually checked seamless Hudson green, natural event-photo ratios and photographer credits, new organization identities, desktop/tablet/mobile Work and Gallery layouts.
- Loaded CSS contains reduced-motion overrides for scrolling, route animations, hover transitions and transforms; fine-pointer media queries scope new hover movement.
- No localhost application warnings/errors captured during route review. Third-party browser-extension errors were excluded.
- Native Next production build and Sites build passed. Changes remain local; no publishing or deployment performed.

## Global link palette correction — September 24, 2026

- Shared hover and focus tokens now reference existing `--ink` (#172328); the old saturated-blue accent aliases this same token.
- Global link/visited/active colors inherit their theme context, with paper-colored links/focus on dark hero and CTA surfaces for contrast.
- Audited rendered link colors and resolved hover tokens on all 17 routes: only existing ink, deep teal and paper tones; no blue/purple states defined in authored link styles or utilities.
- Browser check confirmed the hovered navigation link is rgb(23, 35, 40) and retains its -2px movement. Keyboard focus on footer Instagram uses a solid 2px ink outline.

## Targeted presentation refinement — September 24, 2026

- Removed the competition artwork’s pale container background; computed border/padding are zero and box-shadow is none, on both shared Clients surfaces.
- Work now uses Hudson’s official logo in the left visual block, with metadata, description and link in the right column. Matched green and logo proportions retained.
- Homepage name strip now links to Jasmine Choi, Opera Italiana is in the Air and Hudson Zhang Studio.
- Decorative hero/archive teaser images use 1.012× hover scale on fine pointers only when reduced motion is not requested. Browser verified the hero responds on hover, remains non-clickable and retains the default cursor.
- Twelve affected-route checks across 390, 820 and 1440px viewports found no overflow. TypeScript passed. Changes remain local.

## Final logo / typography audit — September 24, 2026

- Verified matching SHA-256 hashes for source and served PNG. Exact requested alt text appears on both logo images.
- Audited all 17 pages at 320, 390, 820 and 1440px: logo presence, heading/body font families, heading clipping and horizontal overflow.
- Two narrow-phone heading fits were adjusted; all 17 routes then passed at 320px. Larger-width checks passed unchanged.
- Desktop and mobile header screenshots reviewed; full wordmark, subtitle and underline remain visible. Mobile menu opens and closes beneath the full-width identity.
- Reviewed mobile footer on a compatible light surface; copyright and social links remain text. Hero name remains a two-line editorial treatment.
- Shared serif/sans tokens cover headings, body, labels, captions, navigation and UI. Selective italics and restrained 400-weight heading hierarchy retained. Deep ink hover colors and reduced-motion behavior remain intact.
- Native Next build and TypeScript checks passed. No deployment performed.

## Page-transition flash regression — September 24, 2026

- Reproduced with temporary animation-event logging across Home, About, Services, Clients, Work, Gallery, and Contact. Native `page-arrive` ended, then removal of `data-page-transition` restarted the live wrapper's CSS `page-arrive`; measured wrapper opacity dropped from 1 to approximately 0.28.
- Removed the competing wrapper animation, route-key remount, and animation-enabling cleanup attribute. The stable live wrapper rests at opacity 1 / transform none; native snapshots retain the 140ms exit and 300ms / 4px entrance. Unsupported browsers use a single route-commit Web Animation. Reduced motion remains immediate.
- Removed the independent 800ms hero entrance to avoid capturing an intermediate hero state. Persistent warm paper backgrounds now cover html, body, main, and the route wrapper. Existing system fonts require no asynchronous font swap; existing image dimensions and containers remain reserved.
- Development and local built Vinext preview: repeated primary navigation, all 8 client pages and both project pages in the built preview, logo-to-Home, mobile menu selection, and Back/Forward. Audit events showed only snapshot animations and stable live opacity 1, with no restarted wrapper animation. Diagnostic logging removed afterward.
- Native Next.js production build and local preview: all 7 primary pages, project and client navigation, mobile menu selection, Back/Forward, stable resting styles, normal top-of-page scroll, and no site console warnings/errors.
- The alternate Vinext production preview emitted a framework RSC prefetch setup warning (`ee is not a function`), separate from transitions; navigation and transition audits passed. Native Next.js production did not emit it. No framework dependencies changed in this fix.
- Local only; nothing deployed.
