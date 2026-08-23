import type { Metadata } from "next";
import { Faq } from "@/components/faq";
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

export default function RatesPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-white">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="Rates & eligibility"
            title="The rules, on the table"
            lede="Everything banks use to decide — LTV caps, income minimums, ages, tenures, rates and every fee. Updated December 2025."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {RATE_CARDS.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-navy-100 bg-mist-50 p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
                  {r.label}
                </p>
                <p className="font-display mt-3 text-4xl font-semibold text-navy-950">
                  {r.rate}
                  <span className="ml-1.5 text-base font-medium text-navy-400">
                    {r.suffix}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-navy-400">
            How UAE rates work: mortgages are either fixed for an initial period
            (typically 1–3 years) before switching to a variable rate of bank
            margin + EIBOR, or variable from day one. Installments are monthly
            (a few lenders offer quarterly), front-loading interest exactly like
            an amortising loan anywhere else.
          </p>
        </Container>
      </section>

      {/* Eligibility criteria */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Who qualifies"
            title="Income categories & minimums"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {ELIGIBILITY_RULES.map((r) => (
              <div
                key={r.category}
                className="rounded-2xl border border-navy-100 bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {r.category}
                </h3>
                <p className="mt-2 text-sm font-bold text-royal-600">
                  {r.requirement}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* LTV table */}
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white lg:col-span-2">
              <h3 className="border-b border-navy-100 px-6 py-4 font-semibold text-navy-950">
                Maximum loan-to-value by scenario
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-navy-100 bg-mist-50 text-left text-xs font-bold uppercase tracking-wider text-navy-500">
                      <th className="px-6 py-3">Scenario</th>
                      <th className="px-6 py-3">Expats</th>
                      <th className="px-6 py-3">UAE Nationals</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LTV_TABLE.rows.map((row) => (
                      <tr
                        key={row.scenario}
                        className="border-b border-navy-50 last:border-0"
                      >
                        <td className="px-6 py-3.5 font-medium text-navy-800">
                          {row.scenario}
                        </td>
                        <td className="px-6 py-3.5 font-bold text-royal-600 tabular-nums">
                          {row.expat}
                        </td>
                        <td className="px-6 py-3.5 font-bold text-navy-700 tabular-nums">
                          {row.national}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="px-6 py-4 text-xs leading-relaxed text-navy-400">
                Bonus LTV applies to UAE nationals only (not GCC nationals). To
                maximise LTV on a new purchase, any existing UAE mortgage should
                sit below 60% LTV of current market value per bank valuation.
                Units per borrower: residential and commercial typically 2–4 by
                bank policy; rental-only and building finance are uncapped,
                subject to bank appetite.
              </p>
            </div>

            {/* Age & tenure */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <h3 className="font-semibold text-navy-950">Age limits</h3>
                <ul className="mt-3 space-y-2.5">
                  {AGE_RULES.map((a) => (
                    <li key={a.group} className="flex justify-between gap-3 text-sm">
                      <span className="text-navy-500">{a.group}</span>
                      <span className="font-bold text-navy-900">{a.range}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <h3 className="font-semibold text-navy-950">Tenure</h3>
                <p className="font-display mt-2 text-3xl font-semibold text-navy-950">
                  3 – 25 <span className="text-base font-medium text-navy-400">years</span>
                </p>
                <p className="mt-2 text-sm text-navy-500">
                  Must complete within the age limits above at maturity.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Settlement rules */}
      <section className="border-y border-navy-100 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Flexibility"
            title="Early settlement, without the trap"
            lede="UAE mortgages are portable between banks at any time, and the settlement rules are regulated — know them before you sign."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SETTLEMENT_RULES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-navy-100 bg-mist-50 p-6"
              >
                <h3 className="font-semibold text-navy-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fees */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Fee transparency"
            title="Every dirham, before you commit"
            lede="Upfront cost surprises are the industry's dirty secret. Not here."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white">
              <h3 className="border-b border-navy-100 px-6 py-4 font-semibold text-navy-950">
                One-time charges
              </h3>
              <ul className="divide-y divide-navy-50">
                {ONE_TIME_FEES.map((f) => (
                  <li
                    key={f.item}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-6 py-4"
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
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white">
              <h3 className="border-b border-navy-100 px-6 py-4 font-semibold text-navy-950">
                Recurring charges
              </h3>
              <ul className="divide-y divide-navy-50">
                {RECURRING_FEES.map((f) => (
                  <li
                    key={f.item}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-6 py-4"
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
          </div>
        </Container>
      </section>

      {/* Screener */}
      <section className="border-y border-navy-100 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            align="center"
            kicker="60-second check"
            title="Run the eligibility screener"
            lede="Four steps to your indicative LTV, maximum loan and best-fit banks."
          />
          <div className="mt-10">
            <EligibilityScreener />
          </div>
        </Container>
      </section>

      {/* Full FAQ */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading align="center" kicker="FAQ" title="Everything else" />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </Container>
      </section>
    </>
  );
}
