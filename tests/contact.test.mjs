import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
process.env.CONTACT_FORM_SECRET = "test-only-secret-never-used-in-production";
process.env.CONTACT_TO_EMAIL = "recipient@example.test";
process.env.CONTACT_FROM_EMAIL = "Portfolio <sender@example.test>";
process.env.RESEND_API_KEY = "test-key";
process.env.NEXT_PUBLIC_SITE_URL = "https://portfolio.example.test";
const { GET, POST } = await import("../app/api/contact/route.ts");
const originalFetch = globalThis.fetch;
let calls = [];
globalThis.fetch = async (url, init) => {
  calls.push({ url, init });
  return Response.json({ id: "mock-message-id" });
};
function token(age = 5000) {
  const value = `${Date.now() - age}.abc123`;
  return `${value}.${createHmac("sha256", process.env.CONTACT_FORM_SECRET).update(value).digest("hex")}`;
}
function request(
  overrides = {},
  origin = "https://portfolio.example.test",
  ip = "192.0.2.1",
) {
  return new Request("https://portfolio.example.test/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      origin,
      "x-forwarded-for": ip,
    },
    body: JSON.stringify({
      name: "Test Person",
      email: "test@example.test",
      company: "Test Company",
      message: "This is a local test of the inquiry form.",
      type: "General inquiry",
      website: "",
      token: token(),
      ...overrides,
    }),
  });
}
try {
  const initial = await GET();
  assert.equal(initial.status, 200);
  assert.ok((await initial.json()).token);
  assert.equal(initial.headers.get("cache-control"), "no-store");
  assert.equal(
    (await POST(request({}, "https://untrusted.example"))).status,
    403,
  );
  assert.equal((await POST(request({ email: "invalid" }))).status, 400);
  assert.equal((await POST(request({ token: "broken" }))).status, 403);
  assert.equal((await POST(request({ token: token(7200001) }))).status, 400);
  assert.equal((await POST(request({ token: token(0) }))).status, 400);
  assert.equal((await POST(request({ website: "spam.example" }))).status, 400);
  assert.equal(
    (await POST(request({ token: token().slice(0, -64) + "é".repeat(64) })))
      .status,
    403,
  );
  assert.equal(
    (await POST(request({ message: "x".repeat(21000) }))).status,
    413,
  );
  assert.equal(calls.length, 0);
  const success = await POST(request());
  assert.equal(success.status, 200);
  assert.deepEqual(await success.json(), { ok: true });
  const payload = JSON.parse(calls[0].init.body);
  assert.deepEqual(payload.to, ["recipient@example.test"]);
  assert.equal(payload.reply_to, "test@example.test");
  assert.equal(calls[0].url, "https://api.resend.com/emails");
  assert.ok(calls[0].init.headers["Idempotency-Key"]);
  globalThis.fetch = async () => new Response("{}", { status: 500 });
  assert.equal((await POST(request({}, undefined, "192.0.2.2"))).status, 502);
  delete process.env.RESEND_API_KEY;
  assert.equal((await POST(request({}, undefined, "192.0.2.3"))).status, 503);
  process.env.RESEND_API_KEY = "test-key";
  globalThis.fetch = async () => Response.json({ id: "mock" });
  for (let i = 0; i < 5; i++)
    assert.equal((await POST(request({}, undefined, "192.0.2.4"))).status, 200);
  assert.equal((await POST(request({}, undefined, "192.0.2.4"))).status, 429);
  console.log(
    "Contact checks passed: validation, origin, signed token, expiry, timing, honeypot, request limit, delivery payload, provider failure, missing configuration, rate limit. No emails sent.",
  );
} finally {
  globalThis.fetch = originalFetch;
}
