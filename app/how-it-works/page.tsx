import type { Metadata } from "next";
import { IconCheck, IconDoc } from "@/components/icons";
import { ParallaxShowcase } from "@/components/parallax";
import { Reveal } from "@/components/reveal";
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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-100/40 bg-white">
        <div className="orb orb-royal absolute -top-24 right-1/3 h-56 w-56 opacity-10" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20">
          <SectionHeading
            kicker="How it works"
            title="From first call to keys in hand"
            lede="Nine steps, typically 4–6 weeks from offer to transfer. We run every step; you make the decisions."
          />
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24">
        <Container>
          <ol className="relative mx-auto max-w-3xl space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <li className="relative flex gap-6 pb-10 last:pb-0">
                  {i < PROCESS_STEPS.length - 1 && (
                    <span
                      className="glow-line absolute top-14 left-[27px] h-[calc(100%-3.5rem)] w-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-display relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-royal-400/30 bg-gradient-to-b from-mist-50 to-white text-lg font-semibold text-royal-600 shadow-[0_0_16px_rgba(77,86,240,0.15)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="rounded-2xl border border-navy-100/60 bg-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-0.5 hover:shadow-premium">
                    <h3 className="font-display text-xl font-semibold text-navy-950">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-navy-500">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Notes */}
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {PROCESS_NOTES.map((note) => (
              <Reveal key={note}>
                <p className="rounded-xl border border-royal-400/20 bg-gradient-to-r from-royal-50 to-mist-50 px-6 py-5 text-sm leading-relaxed text-navy-700">
                  <span className="font-bold text-royal-600">Good to know — </span>
                  {note}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ParallaxShowcase
        src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2400&auto=format&fit=crop"
        alt="Sheikh Zayed Road towers lit up in the evening"
        kicker="Nine steps, zero guesswork"
        line="From first call to DLD transfer — you always know what happens next."
      />

      {/* Documents */}
      <section className="border-y border-navy-100/40 bg-white py-20 sm:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
          <Reveal>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-950 to-navy-800 text-gold-400 shadow-lg">
              <IconDoc className="h-7 w-7" />
            </span>
          </Reveal>
          <Reveal delay={60}>
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                The document checklist
              </h2>
              <p className="mt-3 max-w-2xl text-navy-500">
                Bring these to your first conversation and pre-approval can move
                within 48 hours. Exact sets vary by bank — your advisor confirms
                yours.
              </p>
              <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {DOCUMENTS.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-navy-700">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href="/#get-started" variant="primary">
                  Start my pre-approval
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
