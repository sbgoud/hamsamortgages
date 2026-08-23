import type { Metadata } from "next";
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
      <section className="border-b border-navy-100 bg-white">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            kicker="Tools"
            title="Mortgage calculators, minus the guesswork"
            lede="Built on December 2025 UAE Central Bank rules and real Dubai fee schedules. Every result is indicative — banks apply their own final criteria."
          />
        </Container>
        <div className="sticky top-18 z-30 border-t border-navy-100 bg-white/90 backdrop-blur-md">
          <Container>
            <nav className="flex gap-2 overflow-x-auto py-3" aria-label="Calculators">
              {TABS.map((t) => (
                <a
                  key={t.href}
                  href={t.href}
                  className="shrink-0 rounded-full border border-navy-200 px-4 py-2 text-sm font-semibold text-navy-600 transition-colors hover:border-royal-500 hover:bg-royal-50 hover:text-navy-950"
                >
                  {t.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      </section>

      <section id="installment" className="scroll-mt-36 py-14 sm:py-16">
        <Container>
          <SectionHeading
            kicker="01"
            title="Monthly installment & total cost"
            lede="The only calculator that shows your true cash-to-close: down payment by LTV rules, plus every Dubai fee at transfer."
          />
          <div className="mt-10">
            <MortgageCalculator />
          </div>
        </Container>
      </section>

      <section
        id="affordability"
        className="scroll-mt-36 border-y border-navy-100 bg-white py-14 sm:py-16"
      >
        <Container>
          <SectionHeading
            kicker="02"
            title="Borrowing capacity / affordability"
            lede="Banks cap installments at 50% of your income. We invert the formula to show your maximum loan, property price and upfront cash."
          />
          <div className="mt-10">
            <AffordabilityCalculator />
          </div>
        </Container>
      </section>

      <section id="buyout" className="scroll-mt-36 py-14 sm:py-16">
        <Container>
          <SectionHeading
            kicker="03"
            title="Mortgage buyout / refinance"
            lede="Shifting lenders is your right under UAE rules. See whether a better rate — or releasing equity — survives the switching costs."
          />
          <div className="mt-10">
            <BuyoutCalculator />
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-100 bg-mist-100 py-10">
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
