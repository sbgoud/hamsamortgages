"use client";

import { useMemo, useState } from "react";
import {
  ResultTile,
  SegmentedControl,
  SliderField,
} from "@/components/tools/fields";
import { IconCheck, IconArrowRight } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import {
  aed,
  loanFromEmi,
  maxLtv,
  purchaseCosts,
  type PropertyPosition,
  type Residency,
} from "@/lib/mortgage";

export function AffordabilityCalculator() {
  const [income, setIncome] = useState(30_000);
  const [obligations, setObligations] = useState(0);
  const [tenure, setTenure] = useState(25);
  const [rate, setRate] = useState(3.75);
  const [residency, setResidency] = useState<Residency>("resident");
  const [position, setPosition] = useState<PropertyPosition>("first");

  const result = useMemo(() => {
    const maxEmi = Math.max(0, income - obligations) * 0.5; // UAE DBR cap: 50%
    const maxLoan = loanFromEmi(maxEmi, rate, tenure);
    const ltv = maxLtv(residency, position, Number.MAX_SAFE_INTEGER);
    const maxPrice = maxLoan / ltv;
    const costs = purchaseCosts(maxPrice, ltv);
    return {
      maxEmi,
      maxLoan,
      ltv,
      maxPrice,
      upfront: costs.totalCash,
      multiple: income > 0 ? maxLoan / income : 0,
    };
  }, [income, obligations, tenure, rate, residency, position]);

  const belowMinimum =
    (residency !== "non-resident" && income > 0 && income < 15_000) ||
    (residency === "non-resident" && income > 0 && income < 25_000);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
        <SliderField
          label="Combined monthly income"
          value={income}
          min={5_000}
          max={250_000}
          step={1_000}
          onChange={setIncome}
          display={aed(income)}
        />
        <SliderField
          label="Existing monthly obligations"
          value={obligations}
          min={0}
          max={100_000}
          step={500}
          onChange={setObligations}
          display={aed(obligations)}
          hint="Loans, car finance, credit cards"
        />
        <SegmentedControl
          label="Residency status"
          value={residency}
          onChange={setResidency}
          options={[
            { value: "national", label: "UAE National" },
            { value: "resident", label: "UAE Resident" },
            { value: "non-resident", label: "Non-Resident" },
          ]}
        />
        <SegmentedControl
          label="Property position"
          value={position}
          onChange={setPosition}
          options={[
            { value: "first", label: "First property" },
            { value: "second", label: "Second +" },
          ]}
        />
        <SliderField
          label="Tenure"
          value={tenure}
          min={5}
          max={25}
          step={1}
          onChange={setTenure}
          display={`${tenure} years`}
        />
        <SliderField
          label="Assumed interest rate"
          value={rate}
          min={1.5}
          max={9}
          step={0.05}
          onChange={setRate}
          display={`${rate.toFixed(2)}%`}
        />
      </div>

      <div className="rounded-2xl bg-navy-950 p-6 shadow-lg sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-300">
          Indicative borrowing capacity
        </p>
        <p className="font-display mt-2 text-5xl font-semibold text-mist-50 tabular-nums">
          {result.maxLoan > 0 ? aed(result.maxLoan) : "—"}
        </p>
        <p className="mt-1.5 text-sm text-navy-400">
          Based on the UAE Central Bank 50% debt-burden cap ·{" "}
          {Math.round(result.ltv * 100)}% LTV assumed
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <ResultTile
            label="Max property price"
            value={aed(result.maxPrice)}
            sub={`Loan covers ${Math.round(result.ltv * 100)}%`}
          />
          <ResultTile
            label="Max monthly installment"
            value={aed(result.maxEmi)}
            sub="50% of net income"
          />
          <ResultTile
            label="Upfront cash needed"
            value={result.maxPrice > 0 ? aed(result.upfront) : "—"}
            sub="Down payment + all fees"
          />
          <ResultTile
            label="Income multiple"
            value={result.multiple > 0 ? `${result.multiple.toFixed(1)}×` : "—"}
            sub="Loan vs annual income"
          />
        </div>

        {belowMinimum && (
          <p className="mt-5 rounded-xl border border-royal-500/30 bg-royal-500/10 p-3.5 text-xs leading-relaxed text-royal-200">
            Heads up: most banks require AED 15,000/month salary (residents) or
            AED 25,000/month (non-residents, self-employed). Below that, options
            narrow to two banks with limitations — we can still talk.
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink href="/#get-started" variant="accent" size="sm">
            Unlock max pre-approval
            <IconArrowRight className="h-4 w-4" />
          </ButtonLink>
          <span className="inline-flex items-center gap-1.5 text-xs text-navy-400">
            <IconCheck className="h-3.5 w-3.5 text-[#4bc06f]" />
            15+ banks compared
          </span>
        </div>
      </div>
    </div>
  );
}
