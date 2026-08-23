"use client";

import { useState } from "react";
import { IconArrowRight, IconMail, IconWhatsApp } from "@/components/icons";
import { site, whatsappUrl } from "@/lib/site";

const PROFILES = [
  "Salaried — buying a home",
  "Self-employed — buying a home",
  "Non-resident investor",
  "Buyout / refinancing",
  "Equity release",
  "Commercial / building finance",
  "Rent-income-only financing",
] as const;

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    profile: PROFILES[0] as string,
    notes: "",
  });
  const [touched, setTouched] = useState(false);

  const valid =
    form.name.trim().length > 1 && form.phone.trim().length >= 7;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    const message = `Hi Hamsa Mortgages, I'd like to get pre-approved.
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "—"}
Profile: ${form.profile}
${form.notes ? `Notes: ${form.notes}` : ""}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-xl border border-navy-200 bg-mist-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20";

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-500">
            Full name *
          </label>
          <input
            id="lead-name"
            className={inputCls}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-500">
            Phone / WhatsApp *
          </label>
          <input
            id="lead-phone"
            className={inputCls}
            placeholder="+971 50 000 0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="lead-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-500">
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            className={inputCls}
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="lead-profile" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-500">
            I am a…
          </label>
          <select
            id="lead-profile"
            className={inputCls}
            value={form.profile}
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
          >
            {PROFILES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="lead-notes" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-500">
            Anything we should know?
          </label>
          <textarea
            id="lead-notes"
            rows={3}
            className={inputCls}
            placeholder="Target property, budget, timeline…"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>
      )}

      {touched && !valid && (
        <p className="text-xs font-semibold text-red-600">
          Please add your name and a phone number so an advisor can reach you.
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1faa53] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#189546] hover:shadow-md"
      >
        <IconWhatsApp className="h-5 w-5" />
        Get pre-approved — reply within 1 business day
        <IconArrowRight className="h-4 w-4" />
      </button>

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-navy-400">
        <IconMail className="h-3.5 w-3.5" />
        Prefer email?{" "}
        <a
          href={`mailto:${site.email}?subject=Mortgage%20enquiry`}
          className="font-semibold text-navy-700 underline decoration-royal-400 underline-offset-2 hover:text-navy-950"
        >
          {site.email}
        </a>
        <span className="mx-1">·</span>
        Opens WhatsApp with your details pre-filled.
      </p>
    </form>
  );
}
