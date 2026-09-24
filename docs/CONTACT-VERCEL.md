# Contact form on Vercel

## Diagnosis (24 September 2026)

The live `GET /api/contact` and an empty same-origin `POST /api/contact` both returned HTTP 503 with the application's "inquiry form is temporarily unavailable" JSON response. The route exists and runs on Vercel. In the deployed implementation this response during initialization means `CONTACT_FORM_SECRET` is missing or empty. Development uses a temporary random secret, masking that missing production setting. The browser previously replaced this server error with a connection message and left its disabled submit button labelled "Preparing form…".

The source is Next.js App Router. Local Sites preview uses Vinext/Vite; Vercel must use the native Next.js build selected by `vercel.json`: framework Next.js, build `npm run build:next`, install `npm ci`. Use the directory containing this package and `vercel.json` as the project root. Do not deploy `dist/client` as a static Vite site. `app/api/contact/route.ts` provides both GET and POST using the Node.js runtime.

## Required production configuration

Set these in Vercel → Project → Settings → Environment Variables, scoped to Production. Configure Preview separately if preview deployments need working email.

| Name | Value |
| --- | --- |
| CONTACT_FORM_SECRET | A cryptographically random secret of at least 32 bytes; keep stable across function instances. |
| RESEND_API_KEY | A valid Resend API key permitted to send from the chosen domain. |
| CONTACT_FROM_EMAIL | An address on a domain verified in Resend, optionally `Portfolio <inquiries@your-verified-domain>`. Do not use the recipient's Gmail address as the sender. |
| CONTACT_TO_EMAIL | The private recipient address specified by the owner. |
| NEXT_PUBLIC_SITE_URL | `https://aaron-isaiah-liu.vercel.app` (update if a custom domain becomes canonical). |

The intended recipient is `aaronisaiahliu@gmail.com`; set it only in server configuration, never in browser code or visible page content. Keep CONTACT_* and RESEND_API_KEY unprefixed. Only NEXT_PUBLIC_SITE_URL is public. No VITE_ variables, CAPTCHA, or Turnstile keys are used. Resend's test sender is restricted; a verified sending domain is needed for unrestricted production delivery.

Redeploy after saving environment variables. Existing deployments do not acquire newly saved values. Deploy the updated source as well to receive the improved error handling.

## Behavior and verification

- GET issues a signed anti-spam token. Production readiness now also checks email configuration, with missing variable names logged server-side only.
- POST accepts the request's own origin or the configured canonical origin, validates input, honeypot, signed token, timing, and an instance-local rate limit, then calls Resend. There is no localhost-only production allowlist.
- The provider receives the server-configured recipient and sender; the visitor's email is used as reply-to. Neither recipient nor credentials are returned to the browser.
- Initialization failures stop the loading label and offer Reload form. Requests have timeouts; submission failures preserve entries. Success is shown only after the backend reports successful provider acceptance.
- The in-memory rate limiter is per serverless instance, not a globally shared production rate limit.
- After redeploy: check GET returns 200 with a token; submit one identifiable test inquiry from desktop and verify inbox delivery; check mobile form behavior and success state. Provider acceptance alone does not prove inbox delivery.
- A successful live submission and inbox delivery remain unverified until the production variables are configured and the updated deployment is available.

References: https://nextjs.org/docs/app/guides/environment-variables ; https://resend.com/docs/api-reference/emails/send-email ; https://vercel.com/docs/environment-variables
