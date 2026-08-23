import type { Metadata } from "next";
import { IconCheck, IconDoc } from "@/components/icons";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { PROCESS_NOTES, PROCESS_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "How It Works — The Dubai Mortgage Journey",
  description:
    "The complete 9-step UAE mortgage process: pre-approval, SPA, valuation, final offer, developer NOC and DLD transfer — with honest timelines.",
};

const DOCUMENTS = [
  "Passport & visa copy",
  "Emirates ID",
  "Salary certificate addressed to the bank",
  "6 months of bank statements",
  "Last 6 months of payslips",
  "Existing loan / credit card statements",
  "Self-employed: trade licence & 12-month accounts",
  "Non-resident: 6 months international statements",
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-white">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="How it works"
            title="From first call to keys in hand"
            lede="Nine steps, typically 4–6 weeks from offer to transfer. We run every step; you make the decisions."
          />
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <Container>
          <ol className="relative mx-auto max-w-3xl space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    className="absolute top-14 left-[27px] h-[calc(100%-3.5rem)] w-px bg-navy-200"
                    aria-hidden="true"
                  />
                )}
                <span className="font-display z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-royal-500/50 bg-mist-50 text-lg font-semibold text-royal-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_1px_2px_rgba(4,8,31,0.04)]">
                  <h3 className="font-display text-xl font-semibold text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Notes */}
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {PROCESS_NOTES.map((note) => (
              <p
                key={note}
                className="rounded-xl border border-royal-500/30 bg-royal-50 px-5 py-4 text-sm leading-relaxed text-navy-700"
              >
                <span className="font-bold text-royal-600">Good to know — </span>
                {note}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Documents */}
      <section className="border-y border-navy-100 bg-white py-16 sm:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-royal-300">
            <IconDoc className="h-6 w-6" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
              The document checklist
            </h2>
            <p className="mt-2 max-w-2xl text-navy-500">
              Bring these to your first conversation and pre-approval can move
              within 48 hours. Exact sets vary by bank — your advisor confirms
              yours.
            </p>
            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {DOCUMENTS.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-navy-700">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink href="/#get-started" variant="primary">
                Start my pre-approval
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
