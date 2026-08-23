"use client";

import { useMemo, useState } from "react";
import { IconArrowRight, IconCheck, IconWhatsApp } from "@/components/icons";
import { SegmentedControl, SliderField } from "@/components/tools/fields";
import {
  aed,
  loanFromEmi,
  maxLtv,
  type PropertyPosition,
  type Residency,
} from "@/lib/mortgage";
import { whatsappUrl } from "@/lib/site";

type IncomeType = "salaried" | "self-employed" | "rental";

interface Answers {
  residency: Residency;
  incomeType: IncomeType;
  income: number;
  price: number;
  position: PropertyPosition;
  name: string;
  phone: string;
}

const INCOME_MIN: Record<IncomeType, number> = {
  salaried: 15_000,
  "self-employed": 25_000,
  rental: 25_000,
};

const INCOME_LABEL: Record<IncomeType, string> = {
  salaried: "Monthly salary",
  "self-employed": "Avg. monthly profit (last year)",
  rental: "Total monthly rental income",
};

export function EligibilityScreener() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    residency: "resident",
    incomeType: "salaried",
    income: 25_000,
    price: 2_000_000,
    position: "first",
    name: "",
    phone: "",
  });

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) =>
    setAnswers((a) => ({ ...a, [key]: value }));

  const assessment = useMemo(() => {
    const ltv = maxLtv(answers.residency, answers.position, answers.price);
    const maxLoan = loanFromEmi(answers.income * 0.5, 3.75, 25);
    const notes: string[] = [];
    if (answers.income > 0 && answers.income < INCOME_MIN[answers.incomeType]) {
      notes.push(
        `Most banks require AED ${INCOME_MIN[answers.incomeType].toLocaleString()}/month for ${answers.incomeType} applicants — a couple of banks can flex with limitations.`,
      );
    }
    if (answers.residency === "non-resident") {
      notes.push(
        "Non-residents finance at 50–60% LTV with AED 25K/month minimum credit and balance over 6 months.",
      );
    }
    if (answers.position === "second") {
      notes.push("Second and consecutive properties are capped at 60% LTV (65% for UAE nationals).");
    }
    if (answers.residency === "national") {
      notes.push("As a UAE national, your LTV capacity is +5% above standard expat limits.");
    }
    return { ltv, maxLoan, notes };
  }, [answers]);

  const waMessage = `Hi Hamsa Mortgages, I ran your eligibility screener:
• Residency: ${answers.residency}
• Income: ${answers.incomeType}, AED ${answers.income.toLocaleString()}/mo
• Property: AED ${answers.price.toLocaleString()} (${answers.position})
• Indicative LTV: ${Math.round(assessment.ltv * 100)}%
Name: ${answers.name || "—"}
Phone: ${answers.phone || "—"}`;

  const canNext = step < 3 || (answers.name.trim().length > 1 && answers.phone.trim().length >= 7);

  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lg">
      {/* Progress */}
      <div className="flex items-center gap-3 border-b border-navy-100 px-6 py-4 sm:px-8">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-1 items-center gap-3">
            <div
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                i <= step ? "bg-royal-500" : "bg-navy-100"
              }`}
            />
          </div>
        ))}
        <span className="text-xs font-bold text-navy-400 tabular-nums">
          {step + 1}/4
        </span>
      </div>

      <div className="p-6 sm:p-8">
        {step === 0 && (
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-semibold text-navy-950">
              Where do you reside?
            </h3>
            <SegmentedControl
              value={answers.residency}
              onChange={(v) => set("residency", v)}
              options={[
                { value: "national", label: "UAE National" },
                { value: "resident", label: "UAE Resident" },
                { value: "non-resident", label: "Non-Resident" },
              ]}
            />
            <p className="text-sm text-navy-500">
              UAE nationals get up to 5% more financing power. Non-residents
              qualify with 6 months of statements showing AED 25K+/month.
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-semibold text-navy-950">
              How do you earn?
            </h3>
            <SegmentedControl
              value={answers.incomeType}
              onChange={(v) => set("incomeType", v)}
              options={[
                { value: "salaried", label: "Salaried" },
                { value: "self-employed", label: "Self-Employed" },
                { value: "rental", label: "Rental Income" },
              ]}
            />
            <SliderField
              label={INCOME_LABEL[answers.incomeType]}
              value={answers.income}
              min={5_000}
              max={250_000}
              step={1_000}
              onChange={(v) => set("income", v)}
              display={aed(answers.income)}
              hint={`Min AED ${INCOME_MIN[answers.incomeType].toLocaleString()}`}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-semibold text-navy-950">
              The property you have in mind
            </h3>
            <SliderField
              label="Property value"
              value={answers.price}
              min={300_000}
              max={20_000_000}
              step={50_000}
              onChange={(v) => set("price", v)}
              display={aed(answers.price)}
            />
            <SegmentedControl
              label="Position"
              value={answers.position}
              onChange={(v) => set("position", v)}
              options={[
                { value: "first", label: "First property" },
                { value: "second", label: "Second +" },
              ]}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-semibold text-navy-950">
              Unlock your indicative pre-approval
            </h3>
            <p className="text-sm text-navy-500">
              We&apos;ll send your result and the best-matching bank offers. No
              spam — one advisor, one conversation.
            </p>
            <input
              value={answers.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Full name"
              className="w-full rounded-xl border border-navy-200 bg-mist-50 px-4 py-3 text-sm font-medium outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
              autoComplete="name"
            />
            <input
              value={answers.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="Phone / WhatsApp (e.g. +971 50 ...)"
              className="w-full rounded-xl border border-navy-200 bg-mist-50 px-4 py-3 text-sm font-medium outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20"
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
        )}

        {/* Live result preview from step 2 onward */}
        {step >= 2 && (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl bg-mist-100 px-5 py-4">
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy-500">
                Indicative LTV
              </p>
              <p className="text-xl font-bold text-navy-950 tabular-nums">
                {Math.round(assessment.ltv * 100)}%
              </p>
            </div>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy-500">
                Est. max loan
              </p>
              <p className="text-xl font-bold text-navy-950 tabular-nums">
                {aed(assessment.maxLoan)}
              </p>
            </div>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy-500">
                Finance up to
              </p>
              <p className="text-xl font-bold text-navy-950 tabular-nums">
                {aed(answers.price * assessment.ltv)}
              </p>
            </div>
          </div>
        )}

        {assessment.notes.length > 0 && step >= 2 && (
          <ul className="mt-4 space-y-1.5">
            {assessment.notes.map((n) => (
              <li key={n} className="flex gap-2 text-xs leading-relaxed text-navy-500">
                <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal-600" />
                {n}
              </li>
            ))}
          </ul>
        )}

        {/* Nav */}
        <div className="mt-7 flex items-center justify-between gap-3">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="rounded-full px-4 py-2 text-sm font-semibold text-navy-500 transition-colors hover:text-navy-900 disabled:opacity-0"
          >
            Back
          </button>
          {step < 3 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-mist-50 transition-colors hover:bg-navy-800"
            >
              Continue
              <IconArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <a
              href={whatsappUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!canNext}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                canNext
                  ? "bg-[#1faa53] text-white hover:bg-[#189546]"
                  : "pointer-events-none bg-navy-200 text-navy-400"
              }`}
            >
              <IconWhatsApp className="h-4 w-4" />
              Get my result on WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
