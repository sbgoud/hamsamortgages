import type { Metadata } from "next";
import { Faq } from "@/components/faq";
import { ParallaxShowcase } from "@/components/parallax";
import { Reveal } from "@/components/reveal";
import { EligibilityScreener } from "@/components/tools/eligibility-screener";
import { Container, SectionHeading } from "@/components/ui";
import {
  AGE_RULES,
  ELIGIBILITY_RULES,
  FAQS,
  LTV_TABLE,
  ONE_TIME_FEES,
  RATE_CARDS,
  RECURRING_FEES,
  SETTLEMENT_RULES,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Rates & Eligibility — EIBOR, Fixed Rates & Criteria",
  description:
    "Live UAE mortgage rate landscape (fixed from 3.75%, variable from EIBOR + 1%), Central Bank LTV rules, income criteria and full fee transparency.",
};

const RATE_GRADIENTS = [
  "from-royal-600 via-royal-500 to-royal-400",
  "from-navy-900 via-navy-800 to-navy-700",
  "from-gold-600 via-gold-500 to-gold-400",
] as const;

export default function RatesPage() {
  return (
    <>
      {/* Hero / Rate cards */}
      <section className="relative overflow-hidden border-b border-navy-100/40 bg-white">
        <div className="orb orb-royal absolute -top-24 left-1/3 h-56 w-56 opacity-8" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20">
          <SectionHeading
            kicker="Rates & eligibility"
            title="The rules, on the table"
            lede="Everything banks use to decide — LTV caps, income minimums, ages, tenures, rates and every fee. Updated December 2025."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {RATE_CARDS.map((r, i) => (
              <Reveal key={r.label} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_48px_-16px_rgba(4,8,31,0.4)]">
                  <div className={`absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br ${RATE_GRADIENTS[i]} opacity-20 blur-2xl`} aria-hidden="true" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                    {r.label}
                  </p>
                  <p className="font-display mt-4 text-5xl font-semibold text-white">
                    {r.rate}
                    <span className="ml-2 text-base font-medium text-navy-300">
                      {r.suffix}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-300">
                    {r.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-navy-400">
            How UAE rates work: mortgages are either fixed for an initial period
            (typically 1–3 years) before switching to a variable rate of bank
            margin + EIBOR, or variable from day one. Installments are monthly
            (a few lenders offer quarterly), front-loading interest exactly like
            an amortising loan anywhere else.
          </p>
        </Container>
      </section>

      {/* Eligibility criteria */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Who qualifies"
              title="Income categories & minimums"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {ELIGIBILITY_RULES.map((r, i) => (
              <Reveal key={r.category} delay={i * 60}>
                <div className="rounded-2xl border border-navy-100/60 bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-premium">
                  <h3 className="font-display text-lg font-semibold text-navy-950">
                    {r.category}
                  </h3>
                  <p className="mt-2.5 text-sm font-bold text-royal-600">
                    {r.requirement}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {r.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {/* LTV table */}
            <Reveal className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-navy-100/60 bg-white shadow-soft">
                <h3 className="border-b border-navy-100/40 bg-gradient-to-r from-mist-50 to-white px-6 py-5 font-semibold text-navy-950">
                  Maximum loan-to-value by scenario
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-navy-100/40 bg-mist-50 text-left text-xs font-bold uppercase tracking-wider text-navy-500">
                        <th className="px-6 py-3.5">Scenario</th>
                        <th className="px-6 py-3.5">Expats</th>
                        <th className="px-6 py-3.5">UAE Nationals</th>
                      </tr>
                    </thead>
                    <tbody>
                      {LTV_TABLE.rows.map((row, i) => (
                        <tr
                          key={row.scenario}
                          className={`border-b border-navy-50/60 last:border-0 transition-colors hover:bg-royal-50/30 ${i % 2 === 1 ? "bg-mist-50/50" : ""}`}
                        >
                          <td className="px-6 py-4 font-medium text-navy-800">
                            {row.scenario}
                          </td>
                          <td className="px-6 py-4 font-bold text-royal-600 tabular-nums">
                            {row.expat}
                          </td>
                          <td className="px-6 py-4 font-bold text-navy-700 tabular-nums">
                            {row.national}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="px-6 py-5 text-xs leading-relaxed text-navy-400">
                  Bonus LTV applies to UAE nationals only (not GCC nationals). To
                  maximise LTV on a new purchase, any existing UAE mortgage should
                  sit below 60% LTV of current market value per bank valuation.
                  Units per borrower: residential and commercial typically 2–4 by
                  bank policy; rental-only and building finance are uncapped,
                  subject to bank appetite.
                </p>
              </div>
            </Reveal>

            {/* Age & tenure */}
            <div className="space-y-6">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-navy-100/60 bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-premium">
                  <h3 className="font-semibold text-navy-950">Age limits</h3>
                  <ul className="mt-4 space-y-3">
                    {AGE_RULES.map((a) => (
                      <li key={a.group} className="flex justify-between gap-3 text-sm">
                        <span className="text-navy-500">{a.group}</span>
                        <span className="font-bold text-navy-900">{a.range}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-2xl border border-navy-100/60 bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-premium">
                  <h3 className="font-semibold text-navy-950">Tenure</h3>
                  <p className="font-display mt-3 text-3xl font-semibold text-gradient-gold">
                    3 – 25 <span className="text-base font-medium text-navy-400">years</span>
                  </p>
                  <p className="mt-3 text-sm text-navy-500">
                    Must complete within the age limits above at maturity.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Settlement rules */}
      <section className="border-y border-navy-100/40 bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Flexibility"
              title="Early settlement, without the trap"
              lede="UAE mortgages are portable between banks at any time, and the settlement rules are regulated — know them before you sign."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SETTLEMENT_RULES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="rounded-2xl border border-navy-100/60 bg-gradient-to-b from-mist-50 to-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-premium">
                  <h3 className="font-semibold text-navy-950">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-500">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Fees */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Fee transparency"
              title="Every dirham, before you commit"
              lede="Upfront cost surprises are the industry's dirty secret. Not here."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-navy-100/60 bg-white shadow-soft">
                <h3 className="border-b border-navy-100/40 bg-gradient-to-r from-mist-50 to-white px-6 py-5 font-semibold text-navy-950">
                  One-time charges
                </h3>
                <ul className="divide-y divide-navy-50/60">
                  {ONE_TIME_FEES.map((f) => (
                    <li
                      key={f.item}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-6 py-4.5 transition-colors hover:bg-royal-50/20"
                    >
                      <div>
                        <p className="text-sm font-semibold text-navy-900">{f.item}</p>
                        <p className="text-xs text-navy-400">{f.note}</p>
                      </div>
                      <p className="text-sm font-bold text-royal-600 tabular-nums">
                        {f.amount}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-2xl border border-navy-100/60 bg-white shadow-soft">
                <h3 className="border-b border-navy-100/40 bg-gradient-to-r from-mist-50 to-white px-6 py-5 font-semibold text-navy-950">
                  Recurring charges
                </h3>
                <ul className="divide-y divide-navy-50/60">
                  {RECURRING_FEES.map((f) => (
                    <li
                      key={f.item}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-6 py-4.5 transition-colors hover:bg-royal-50/20"
                    >
                      <div>
                        <p className="text-sm font-semibold text-navy-900">{f.item}</p>
                        <p className="text-xs text-navy-400">{f.note}</p>
                      </div>
                      <p className="text-sm font-bold text-navy-700">{f.amount}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ParallaxShowcase
        src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2400&auto=format&fit=crop"
        alt="Burj Al Arab standing on the Arabian Gulf coastline"
        kicker="Transparency first"
        line="Every rate, every rule, every dirham — before you commit."
      />

      {/* Screener */}
      <section className="border-y border-navy-100/40 bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              kicker="60-second check"
              title="Run the eligibility screener"
              lede="Four steps to your indicative LTV, maximum loan and best-fit banks."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <EligibilityScreener />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Full FAQ */}
      <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading align="center" kicker="FAQ" title="Everything else" />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12">
              <Faq items={FAQS} />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
