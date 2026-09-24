"use client";
import { useEffect, useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const types = [
  "General inquiry",
  "Social media strategy",
  "Digital marketing",
  "Web design & digital presence",
  "Content & creative direction",
  "Arts & entertainment marketing",
];
export default function ContactForm() {
  const [type, setType] = useState("General inquiry");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [ready, setReady] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  async function prepare() {
    setReady(false);
    try {
      const response = await fetch("/api/contact", { cache: "no-store" });
      if (!response.ok) throw new Error();
      const data = (await response.json()) as { token: string };
      setToken(data.token);
      setReady(true);
    } catch {
      setState("error");
      setMessage(
        "The form could not load. Please check your connection and try again.",
      );
    }
  }
  useEffect(() => {
    void prepare();
  }, []);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading" || !ready) return;
    setState("loading");
    setMessage("");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
          website: data.get("website"),
          type,
          token,
        }),
      });
      const result = (await response.json()) as {
        error?: string;
        ok?: boolean;
      };
      if (!response.ok)
        throw new Error(
          result.error || "Your message could not be sent. Please try again.",
        );
      setState("success");
      setMessage("Thank you for reaching out. Your inquiry has been sent.");
      formRef.current?.reset();
      setType("General inquiry");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again.",
      );
    }
    setTimeout(() => statusRef.current?.focus(), 0);
  }
  if (state === "success")
    return (
      <div className="form-success" role="status" tabIndex={-1} ref={statusRef}>
        <span className="eyebrow">MESSAGE SENT</span>
        <h2>A good beginning.</h2>
        <p>{message}</p>
        <button
          className="text-link"
          onClick={() => {
            setState("idle");
            setMessage("");
            void prepare();
          }}
        >
          Send another inquiry <span>↗</span>
        </button>
      </div>
    );
  return (
    <form ref={formRef} onSubmit={submit} className="contact-form">
      <h2>General inquiries</h2>
      <p className="form-intro">
        Tell me a little about what you have in mind.
      </p>
      <div className="form-row">
        <label htmlFor="contact-name">
          Name <span>(required)</span>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label htmlFor="contact-email">
          Email <span>(required)</span>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label htmlFor="contact-company">
        Company / Organization <span>(optional)</span>
        <input
          id="contact-company"
          name="company"
          autoComplete="organization"
          maxLength={150}
        />
      </label>
      <label id="inquiry-label">Inquiry type</label>
      <Select value={type} onValueChange={setType}>
        <SelectTrigger
          className="inquiry-select"
          aria-labelledby="inquiry-label"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {types.map((t) => (
            <SelectItem value={t} key={t}>
              {t}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <label htmlFor="contact-message">
        Message <span>(required)</span>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={5}
          aria-describedby="message-hint"
        />
      </label>
      <p id="message-hint" className="field-hint">
        A few details about your project, goals, or timing. At least 20
        characters.
      </p>
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div
        className="form-status"
        role={state === "error" ? "alert" : "status"}
        ref={statusRef}
        tabIndex={-1}
      >
        {message}
      </div>
      {!ready && state === "error" && (
        <button
          type="button"
          className="text-link"
          onClick={() => void prepare()}
        >
          Reload form <span>↻</span>
        </button>
      )}
      <div className="form-submit">
        <button
          type="submit"
          className="submit-button"
          disabled={state === "loading" || !ready}
        >
          {state === "loading"
            ? "Sending…"
            : !ready
              ? "Preparing form…"
              : "Send inquiry"}
          <span aria-hidden="true">↗</span>
        </button>
        <p>Your details are used to respond to your inquiry.</p>
      </div>
    </form>
  );
}
