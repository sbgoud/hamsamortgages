"use client";

import { useMemo, useState } from "react";
import { SliderField } from "@/components/tools/fields";
import { IconArrowRight } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { aed, emi } from "@/lib/mortgage";

export function HeroCalculator() {
  const [loan, setLoan] = useState(1_600_000);
  const [tenure, setTenure] = useState(25);
  const [rate, setRate] = useState(3.75);

  const monthly = useMemo(() => emi(loan, rate, tenure), [loan, rate, tenure]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-300">
          Quick payment check
        </p>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-bold text-navy-200">
          From 3.75% fixed
        </span>
      </div>

      <div className="mt-5 space-y-5">
        <SliderField
          dark
          label="Loan amount"
          value={loan}
          min={200_000}
          max={15_000_000}
          step={50_000}
          onChange={setLoan}
          display={aed(loan)}
        />
        <SliderField
          dark
          label="Tenure"
          value={tenure}
          min={5}
          max={25}
          step={1}
          onChange={setTenure}
          display={`${tenure} yrs`}
        />
        <SliderField
          dark
          label="Rate"
          value={rate}
          min={1.5}
          max={9}
          step={0.05}
          onChange={setRate}
          display={`${rate.toFixed(2)}%`}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-5">
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-navy-300">
            Estimated monthly
          </p>
          <p className="font-display text-4xl font-semibold text-mist-50 tabular-nums">
            {aed(monthly)}
          </p>
        </div>
        <ButtonLink href="/calculators#installment" variant="accent" size="sm">
          Full cost breakdown
          <IconArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </div>
  );
}
