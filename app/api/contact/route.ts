import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { z } from "zod";
export const runtime = "nodejs";
const buckets = new Map<string, { count: number; expires: number }>();
const localSecret = randomBytes(32).toString("hex");
const headers = { "Cache-Control": "no-store" };
const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(500).optional().default(""),
  type: z.enum([
    "General inquiry",
    "Social media strategy",
    "Digital marketing",
    "Web design & digital presence",
    "Content & creative direction",
    "Newsletters & CRM",
    "Arts & entertainment marketing",
  ]),
  token: z.string().max(300),
});
function secret() {
  return (
    process.env.CONTACT_FORM_SECRET ||
    (process.env.NODE_ENV !== "production" ? localSecret : "")
  );
}
function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}
function fail(error: string, status = 400) {
  return Response.json({ error }, { status, headers });
}
export async function GET() {
  if (!secret())
    return fail(
      "The inquiry form is temporarily unavailable. Please try again later.",
      503,
    );
  const value = `${Date.now()}.${randomBytes(16).toString("hex")}`;
  return Response.json({ token: `${value}.${sign(value)}` }, { headers });
}
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const trusted = process.env.NEXT_PUBLIC_SITE_URL;
  const requestOrigin = new URL(request.url).origin;
  if (
    !origin ||
    (origin !== requestOrigin &&
      (!trusted || origin !== new URL(trusted).origin))
  )
    return fail("Please submit your inquiry from this website.", 403);
  if (!secret())
    return fail(
      "The inquiry form is temporarily unavailable. Please try again later.",
      503,
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return fail("Unsupported request format.", 415);
  if (Number(request.headers.get("content-length") || 0) > 20000)
    return fail("Your message is too long.", 413);
  let parsed;
  try {
    const reader = request.body?.getReader();
    if (!reader) return fail("Please complete the form.");
    let size = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 20000) {
        await reader.cancel();
        return fail("Your message is too long.", 413);
      }
      chunks.push(value);
    }
    const body = Buffer.concat(chunks);
    parsed = schema.safeParse(JSON.parse(body.toString("utf8")));
  } catch {
    return fail("Please complete the form and try again.");
  }
  if (!parsed.success)
    return fail(
      "Please enter a valid name, email, and message of 20–5,000 characters.",
    );
  const data = parsed.data;
  const parts = data.token.split(".");
  if (parts.length !== 3)
    return fail("Your form session expired. Please reload the page.", 403);
  const [time, nonce, signature] = parts;
  const value = `${time}.${nonce}`;
  const expected = sign(value);
  if (
    !/^[a-f0-9]{64}$/.test(signature) ||
    !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  )
    return fail("Your form session expired. Please reload the page.", 403);
  const age = Date.now() - Number(time);
  if (!Number.isFinite(age) || age < 2500 || age > 7200000)
    return fail(
      age < 2500
        ? "Please take a moment before sending your inquiry."
        : "Your form session expired. Please reload the page.",
      400,
    );
  if (data.website)
    return fail("Your inquiry could not be accepted. Please try again.", 400);
  const now = Date.now();
  for (const [key, bucket] of buckets)
    if (bucket.expires < now) buckets.delete(key);
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  const key = createHmac("sha256", secret()).update(ip).digest("hex");
  const bucket = buckets.get(key) || { count: 0, expires: now + 900000 };
  if (bucket.count >= 5)
    return fail(
      "Please wait a few minutes before sending another inquiry.",
      429,
    );
  bucket.count++;
  if (buckets.size < 10000 || buckets.has(key)) buckets.set(key, bucket);
  else
    return fail("The inquiry service is busy. Please try again shortly.", 429);
  const apiKey = process.env.RESEND_API_KEY,
    to = process.env.CONTACT_TO_EMAIL,
    from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from)
    return fail(
      "The inquiry service is temporarily unavailable. Please try again later, or connect through Instagram or LinkedIn.",
      503,
    );
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": createHmac("sha256", secret())
          .update(
            data.token +
              JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message,
                type: data.type,
                company: data.company,
              }),
          )
          .digest("hex"),
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Portfolio inquiry: ${data.type}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nOrganization: ${data.company || "Not supplied"}\nInquiry: ${data.type}\n\n${data.message}`,
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok)
      return fail(
        "Your message could not be delivered. Please try again later.",
        502,
      );
    return Response.json({ ok: true }, { headers });
  } catch {
    return fail(
      "Your message could not be delivered. Please check your connection and try again.",
      502,
    );
  }
}
