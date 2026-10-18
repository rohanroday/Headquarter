"use client";

import { useState, type FormEvent } from "react";
import { budgets, projectTypes, site, whatsappLink } from "@/lib/site";
import { Mail, WhatsApp } from "./Icons";

type Fields = { name: string; phone: string; email: string; organisation: string; message: string };
type Errors = Partial<Record<keyof Fields | "types", string>>;

const empty: Fields = { name: "", phone: "", email: "", organisation: "", message: "" };

// No backend needed: the brief is handed to WhatsApp or the visitor's email app,
// so an enquiry can never silently fail the way a sleeping API does.
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [types, setTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<"whatsapp" | "email" | null>(null);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const toggleType = (t: string) => {
    setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));
    setErrors((er) => ({ ...er, types: undefined }));
  };

  const validate = () => {
    const er: Errors = {};
    if (!fields.name.trim()) er.name = "Please tell us your name.";
    if (!/^[+\d][\d\s-]{7,}$/.test(fields.phone.trim())) er.phone = "Add a phone / WhatsApp number we can reach.";
    if (fields.email && !/^\S+@\S+\.\S+$/.test(fields.email)) er.email = "That email doesn't look right.";
    if (!types.length) er.types = "Pick at least one.";
    if (fields.message.trim().length < 10) er.message = "A line or two about the project helps us reply faster.";
    setErrors(er);
    const first = (["name", "phone", "email", "types", "message"] as const).find((k) => er[k]);
    if (first) document.getElementById(first === "types" ? "type-0" : first)?.focus();
    return !first;
  };

  const compose = () =>
    [
      `Hi Headquarter! New project enquiry from the website.`,
      ``,
      `Name: ${fields.name}`,
      fields.organisation ? `Organisation: ${fields.organisation}` : null,
      `Phone: ${fields.phone}`,
      fields.email ? `Email: ${fields.email}` : null,
      `Looking for: ${types.join(", ")}`,
      budget ? `Budget: ${budget}` : null,
      ``,
      fields.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

  const send = (channel: "whatsapp" | "email") => (e?: FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    const text = compose();
    if (channel === "whatsapp") {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    } else {
      const subject = `Project enquiry — ${fields.organisation || fields.name}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
    setSent(channel);
  };

  if (sent) {
    return (
      <div className="flex min-h-[28rem] flex-col items-start justify-center rounded-3xl border border-line bg-ink p-8" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-hq text-2xl text-night">✓</span>
        <p className="mt-6 font-display text-3xl font-bold">Almost there!</p>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">
          Your brief is ready in {sent === "whatsapp" ? "WhatsApp" : "your email app"} — just hit send. We usually reply within
          one working day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(null);
            setFields(empty);
            setTypes([]);
            setBudget("");
          }}
          className="mt-8 text-sm font-semibold text-hq underline underline-offset-4"
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  const input =
    "mt-2 w-full rounded-xl border bg-ink px-4 py-3.5 text-cream placeholder:text-muted/60 outline-none transition-colors focus:border-hq";
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-sm text-hq-light">
        {errors[k]}
      </p>
    ) : null;
  const field = (k: keyof Fields, label: string, opts: { type?: string; required?: boolean; placeholder?: string; autoComplete?: string }) => (
    <div>
      <label htmlFor={k} className="text-sm font-medium text-cream/85">
        {label} {opts.required && <span className="text-hq">*</span>}
      </label>
      <input
        id={k}
        name={k}
        type={opts.type ?? "text"}
        value={fields[k]}
        onChange={set(k)}
        placeholder={opts.placeholder}
        autoComplete={opts.autoComplete}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${k}-error` : undefined}
        className={`${input} ${errors[k] ? "border-hq-light" : "border-line"}`}
      />
      {err(k)}
    </div>
  );

  return (
    <form onSubmit={send("whatsapp")} noValidate className="rounded-3xl border border-line bg-ink p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Your name", { required: true, autoComplete: "name", placeholder: "Pema Lepcha" })}
        {field("phone", "Phone / WhatsApp", { required: true, type: "tel", autoComplete: "tel", placeholder: "+91 98xxx xxxxx" })}
        {field("email", "Email", { type: "email", autoComplete: "email", placeholder: "you@company.com" })}
        {field("organisation", "Brand / organisation", { autoComplete: "organization", placeholder: "Optional" })}
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-medium text-cream/85">
          What do you need? <span className="text-hq">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {projectTypes.map((t, i) => {
            const on = types.includes(t);
            return (
              <button
                key={t}
                id={`type-${i}`}
                type="button"
                aria-pressed={on}
                onClick={() => toggleType(t)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  on ? "border-hq bg-hq font-semibold text-night" : "border-line text-cream/80 hover:border-cream/50"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
        {err("types")}
      </fieldset>

      <fieldset className="mt-7">
        <legend className="text-sm font-medium text-cream/85">Budget (optional)</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={budget === b}
              onClick={() => setBudget(budget === b ? "" : b)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                budget === b ? "border-cream bg-cream font-semibold text-ink" : "border-line text-cream/80 hover:border-cream/50"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-7">
        <label htmlFor="message" className="text-sm font-medium text-cream/85">
          Tell us about the project <span className="text-hq">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={set("message")}
          placeholder="What are you launching, when, and who should it reach?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${input} resize-y ${errors.message ? "border-hq-light" : "border-line"}`}
        />
        {err("message")}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-hq px-6 py-4 font-semibold text-night transition-colors hover:bg-hq-light"
        >
          <WhatsApp /> Send on WhatsApp
        </button>
        <button
          type="button"
          onClick={send("email")}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-6 py-4 font-semibold transition-colors hover:border-cream"
        >
          <Mail /> Send by email
        </button>
      </div>
    </form>
  );
}
