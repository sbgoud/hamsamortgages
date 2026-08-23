import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { MortgageCalculator } from "@/components/tools/mortgage-calculator";
import { AffordabilityCalculator } from "@/components/tools/affordability-calculator";
import { BuyoutCalculator } from "@/components/tools/buyout-calculator";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mortgage Calculators — EMI, Affordability & Buyout",
  description:
    "Free UAE mortgage calculators: monthly installment with full upfront cash breakdown, borrowing capacity under the 50% debt-burden rule, and buyout/refinance savings.",
};

const TABS = [
  { href: "#installment", label: "Installment & Costs" },
  { href: "#affordability", label: "Borrowing Capacity" },
  { href: "#buyout", label: "Buyout / Refinance" },
];

export default function CalculatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-100/40 bg-white">
        <div className="orb orb-royal absolute -top-20 left-1/4 h-48 w-48 opacity-10" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20">
          <SectionHeading
            kicker="Tools"
            title="Mortgage calculators, minus the guesswork"
            lede="Built on December 2025 UAE Central Bank rules and real Dubai fee schedules. Every result is indicative — banks apply their own final criteria."
          />
        </Container>
        {/* Sticky tabs */}
        <div className="sticky top-18 z-30 border-t border-navy-100/40 bg-white/80 backdrop-blur-xl">
          <Container>
            <nav className="flex gap-2 overflow-x-auto py-3.5" aria-label="Calculators">
              {TABS.map((t) => (
                <a
                  key={t.href}
                  href={t.href}
                  className="shrink-0 rounded-full border border-navy-200/60 bg-gradient-to-b from-white to-mist-50 px-5 py-2.5 text-sm font-semibold text-navy-600 shadow-soft transition-all duration-300 hover:border-royal-400 hover:text-royal-700 hover:shadow-[0_4px_16px_-4px_rgba(0,15,159,0.15)]"
                >
                  {t.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      </section>

      {/* Installment */}
      <section id="installment" className="scroll-mt-36 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="01"
              title="Monthly installment & total cost"
              lede="The only calculator that shows your true cash-to-close: down payment by LTV rules, plus every Dubai fee at transfer."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12">
              <MortgageCalculator />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Affordability */}
      <section
        id="affordability"
        className="scroll-mt-36 border-y border-navy-100/40 bg-white py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <SectionHeading
              kicker="02"
              title="Borrowing capacity / affordability"
              lede="Banks cap installments at 50% of your income. We invert the formula to show your maximum loan, property price and upfront cash."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12">
              <AffordabilityCalculator />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Buyout */}
      <section id="buyout" className="scroll-mt-36 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="03"
              title="Mortgage buyout / refinance"
              lede="Shifting lenders is your right under UAE rules. See whether a better rate — or releasing equity — survives the switching costs."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12">
              <BuyoutCalculator />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-navy-100/40 bg-gradient-to-b from-mist-100 to-mist-50 py-12">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-navy-500">
            Calculators use standard amortisation and published Dubai fee
            schedules (DLD 4% + AED 580; registration 0.25% + AED 290; trustee
            AED 4,200 per unit; valuation AED 1,500–3,000 + VAT; processing
            0–1%). Insurance, bank-specific fees and VAT variations may apply.
            Results are indicative, not an offer of finance.
          </p>
        </Container>
      </section>
    </>
  );
}
