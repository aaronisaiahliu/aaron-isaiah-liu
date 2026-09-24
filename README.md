# Aaron Isaiah Liu — portfolio

An editorial portfolio with 16 content routes: Home, About, Services, Clients, six client profiles, Work, three project stories, Gallery, and Contact. Built with Next.js App Router APIs, TypeScript, React, and Tailwind CSS. The Sites preview uses Vinext; a native Next.js build and Vercel configuration are also included.

## Run locally

```sh
npm ci
npm run dev
```

Sites development: http://localhost:5173. For native Next.js, use `npm run dev:next` (port 3000). `npm run build:next` creates the Vercel-compatible Next build. `npm run typecheck` checks TypeScript.

## Inquiry delivery — requires configuration

The form posts to `/api/contact`. The recipient is exclusively server-side. The local ignored `.env.local` already contains the requested destination. In hosting settings, configure:

- `CONTACT_TO_EMAIL`: intended recipient
- `CONTACT_FROM_EMAIL`: a sender on a domain verified with Resend
- `RESEND_API_KEY`: a Resend send-only API key
- `CONTACT_FORM_SECRET`: cryptographically random shared secret (32 bytes or more)
- `NEXT_PUBLIC_SITE_URL`: final origin, without trailing slash, for canonical, sitemap, and social metadata

No email service credentials were supplied. Until configured, submission returns an honest unavailable state rather than claiming delivery. Instagram and LinkedIn remain available. Never put the recipient or API key in any `NEXT_PUBLIC_` variable, component prop, or public file.

Protection includes server-side schema validation, same-origin enforcement, bounded request size, HMAC-signed expiring form tokens, a minimum completion time, honeypot, hashed-IP throttling, provider idempotency keys, and no logging of inquiry content. The five-per-15-minute limiter is per server instance; production deployments should additionally configure a shared hosting/WAF rate-limit rule for `POST /api/contact` to enforce limits across instances. No submissions are stored in this project. The email provider processes delivery data.

Run the local contact contract checks (delivery is mocked; no messages are sent):

```sh
node --experimental-strip-types tests/contact.test.mjs
```

## Vercel

Import this `portfolio` directory as the project root. `vercel.json` selects Next.js and `npm run build:next`. Set the environment values above before publishing. Update `NEXT_PUBLIC_SITE_URL` when attaching a final domain and rebuild.

## Content

- `content/site.ts`: clients, project stories, services
- `content/images.json`: dimensions, captions, clean-name grouping
- `asset-manifest.json`: original filenames / asset mapping
- `docs/CONTENT-SOURCES.md`: biography sources and image provenance
- `app/globals.css`: shared design system and responsive composition

Supplied original images are untouched in the parent workspace. Public files are optimized derivatives. The gallery distinguishes personal archive photographs from direct client relationships. External image candidates were researched but not deployed.

## Design and accessibility

Ink, ivory, and blue-gray; large editorial serif typography with restrained sans-serif labels. Asymmetric client pairs, typographic case studies, responsive gallery sequences. Semantic navigation and forms, keyboard-accessible lightbox with focus restoration, visible focus, accessible form statuses, and reduced-motion support. No trackers or mailing-list enrollment.
