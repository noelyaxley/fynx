"use client";

import { useState } from "react";
import { Button } from "./button";

type AudienceType = "homeowner" | "developer" | "broker" | "other";

interface EnquiryFormProps {
  defaultAudience?: AudienceType;
  compact?: boolean;
  source?: string;
}

const audiences: { value: AudienceType; label: string }[] = [
  { value: "homeowner", label: "Homeowner / Investor" },
  { value: "developer", label: "Property Developer" },
  { value: "broker", label: "Broker / Partner" },
  { value: "other", label: "Other" },
];

export function EnquiryForm({
  defaultAudience,
  compact = false,
  source = "website",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [audience, setAudience] = useState<AudienceType>(defaultAudience || "homeowner");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
      audience,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      source,
      page: typeof window !== "undefined" ? window.location.pathname : "",
      utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");

      // Track conversion
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as Record<string, unknown> & { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", {
          event_category: "form",
          event_label: audience,
          value: 1,
        });
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-fynx-gold/30 bg-fynx-gold/5 p-8 text-center">
        <div className="w-12 h-12 border-2 border-fynx-gold flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-fynx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold mb-2">We&apos;ll be in touch</h3>
        <p className="text-fynx-text-secondary text-sm">
          A FYNX specialist will review your enquiry and contact you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Audience selector */}
      {!defaultAudience && (
        <div>
          <label className="block text-xs font-display font-semibold uppercase tracking-wider text-fynx-text-muted mb-3">
            I am a
          </label>
          <div className="grid grid-cols-2 gap-2">
            {audiences.map((a) => (
              <button
                key={a.value}
                type="button"
                onClick={() => setAudience(a.value)}
                className={`px-3 py-2.5 text-sm border transition-colors ${
                  audience === a.value
                    ? "border-fynx-gold bg-fynx-gold/10 text-fynx-gold"
                    : "border-fynx-border text-fynx-text-secondary hover:border-fynx-border-light"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Name fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs font-display font-semibold uppercase tracking-wider text-fynx-text-muted mb-2">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full bg-fynx-surface border border-fynx-border px-4 py-3 text-sm text-fynx-text placeholder:text-fynx-text-muted focus:border-fynx-gold focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-display font-semibold uppercase tracking-wider text-fynx-text-muted mb-2">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full bg-fynx-surface border border-fynx-border px-4 py-3 text-sm text-fynx-text placeholder:text-fynx-text-muted focus:border-fynx-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-display font-semibold uppercase tracking-wider text-fynx-text-muted mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-fynx-surface border border-fynx-border px-4 py-3 text-sm text-fynx-text placeholder:text-fynx-text-muted focus:border-fynx-gold focus:outline-none transition-colors"
        />
      </div>

      {/* Phone */}
      {!compact && (
        <div>
          <label htmlFor="phone" className="block text-xs font-display font-semibold uppercase tracking-wider text-fynx-text-muted mb-2">
            Phone <span className="text-fynx-text-muted font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-fynx-surface border border-fynx-border px-4 py-3 text-sm text-fynx-text placeholder:text-fynx-text-muted focus:border-fynx-gold focus:outline-none transition-colors"
          />
        </div>
      )}

      {/* Message */}
      {!compact && (
        <div>
          <label htmlFor="message" className="block text-xs font-display font-semibold uppercase tracking-wider text-fynx-text-muted mb-2">
            Tell us about your project <span className="text-fynx-text-muted font-normal normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full bg-fynx-surface border border-fynx-border px-4 py-3 text-sm text-fynx-text placeholder:text-fynx-text-muted focus:border-fynx-gold focus:outline-none transition-colors resize-none"
          />
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting..." : "Talk to FYNX"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-fynx-error text-center">
          Something went wrong. Please try again or email hello@fynx.com.au
        </p>
      )}

      <p className="text-xs text-fynx-text-muted text-center">
        Your information is secure. We&apos;ll only use it to respond to your enquiry.
      </p>
    </form>
  );
}
