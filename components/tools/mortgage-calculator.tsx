"use client";

import { useMemo, useState } from "react";
import {
  CostRow,
  ResultTile,
  SegmentedControl,
  SliderField,
} from "@/components/tools/fields";
import {
  aed,
  emi,
  maxLtv,
  purchaseCosts,
  type PropertyPosition,
  type Residency,
} from "@/lib/mortgage";

export function MortgageCalculator() {
  const [price, setPrice] = useState(2_000_000);
  const [residency, setResidency] = useState<Residency>("resident");
  const [position, setPosition] = useState<PropertyPosition>("first");
  const [tenure, setTenure] = useState(25);
  const [rate, setRate] = useState(3.75);
  const [processingPct, setProcessingPct] = useState(0.5);

  const result = useMemo(() => {
    const ltv = maxLtv(residency, position, price);
    const costs = purchaseCosts(price, ltv, 1, processingPct / 100);
    const monthly = emi(costs.loanAmount, rate, tenure);
    const totalPaid = monthly * tenure * 12;
    return {
      ltv,
      costs,
      monthly,
      totalInterest: Math.max(0, totalPaid - costs.loanAmount),
      capped:
        position === "second" ||
        (residency !== "non-resident" && price >= 5_000_000) ||
        residency === "non-resident",
    };
  }, [price, residency, position, tenure, rate, processingPct]);

  const ltvNote =
    residency === "non-resident"
      ? "Non-residents typically finance 50–60% LTV."
      : position === "second"
        ? "Second and consecutive properties are capped at 60% LTV."
        : price >= 5_000_000
          ? "Properties above AED 5M are capped at 70% LTV."
          : "First properties under AED 5M qualify for up to 80% LTV.";

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      {/* Inputs */}
      <div className="space-y-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
        <SliderField
          label="Property price"
          value={price}
          min={300_000}
          max={20_000_000}
          step={50_000}
          onChange={setPrice}
          display={aed(price)}
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
          label="Interest rate"
          value={rate}
          min={1.5}
          max={9}
          step={0.05}
          onChange={setRate}
          display={`${rate.toFixed(2)}%`}
          hint="Fixed rates from 3.75%"
        />
        <SliderField
          label="Bank processing fee"
          value={processingPct}
          min={0}
          max={1}
          step={0.05}
          onChange={setProcessingPct}
          display={`${processingPct.toFixed(2)}% of loan`}
          hint="0–1% typical"
        />
      </div>

      {/* Results */}
      <div className="rounded-2xl bg-navy-950 p-6 shadow-lg sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-300">
            Estimated monthly installment
          </p>
          <span className="rounded-full bg-royal-500/15 px-3 py-1 text-xs font-bold text-royal-300 ring-1 ring-royal-500/30">
            {Math.round(result.ltv * 100)}% LTV
          </span>
        </div>
        <p className="font-display mt-2 text-5xl font-semibold text-mist-50 tabular-nums">
          {aed(result.monthly)}
        </p>
        <p className="mt-1.5 text-sm text-navy-400">
          {aed(result.costs.loanAmount)} loan · {tenure} years ·{" "}
          {rate.toFixed(2)}% p.a. · total interest {aed(result.totalInterest)}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <ResultTile
            label="Down payment"
            value={aed(result.costs.downPayment)}
            sub={`${Math.round((1 - result.ltv) * 100)}% of price`}
          />
          <ResultTile
            label="Total cash needed"
            value={aed(result.costs.totalCash)}
            sub="At DLD transfer"
            accent
          />
        </div>

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-300">
            Upfront costs at transfer
          </p>
          <div className="mt-2">
            <CostRow label="Down payment" value={aed(result.costs.downPayment)} />
            <CostRow
              label="Dubai Land Department (4% + AED 580)"
              value={aed(result.costs.dld)}
            />
            <CostRow
              label="Mortgage registration (0.25% + AED 290)"
              value={aed(result.costs.registration)}
            />
            <CostRow label="Trustee office (fixed)" value={aed(result.costs.trustee)} />
            <CostRow
              label="Valuation (AED 2,500 + VAT)"
              value={aed(result.costs.valuation)}
            />
            <CostRow
              label={`Processing (${processingPct.toFixed(2)}% of loan)`}
              value={aed(result.costs.processing)}
            />
            <CostRow label="Total cash outlay" value={aed(result.costs.totalCash)} strong />
          </div>
        </div>

        <p className="mt-5 rounded-xl bg-white/5 p-3.5 text-xs leading-relaxed text-navy-400">
          {ltvNote} Indicative only — banks apply their own criteria, and life
          and property insurance are additional.
        </p>
      </div>
    </div>
  );
}
