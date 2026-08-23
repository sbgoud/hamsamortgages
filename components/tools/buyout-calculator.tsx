"use client";

import { useMemo, useState } from "react";
import {
  CostRow,
  ResultTile,
  SliderField,
} from "@/components/tools/fields";
import { FEES, aed, emi } from "@/lib/mortgage";

export function BuyoutCalculator() {
  const [balance, setBalance] = useState(1_500_000);
  const [currentRate, setCurrentRate] = useState(5.5);
  const [remainingYears, setRemainingYears] = useState(15);
  const [newRate, setNewRate] = useState(3.75);
  const [newYears, setNewYears] = useState(15);
  const [equity, setEquity] = useState(0);
  const [settlementFee, setSettlementFee] = useState(10_000);

  const result = useMemo(() => {
    const oldEmi = emi(balance, currentRate, remainingYears);
    const newLoan = balance + equity;
    const newEmi = emi(newLoan, newRate, newYears);
    const monthlySaving = oldEmi - newEmi;
    const costs = {
      processing: newLoan * 0.01,
      registration: newLoan * FEES.registrationPct + FEES.registrationAdmin,
      trustee: FEES.trusteePerUnit,
      valuation: FEES.valuation,
      settlement: settlementFee,
    };
    const totalCost = Object.values(costs).reduce((a, b) => a + b, 0);
    const lifetimeSaving =
      oldEmi * remainingYears * 12 - newEmi * newYears * 12 - totalCost;
    const breakEven =
      monthlySaving > 0 ? Math.ceil(totalCost / monthlySaving) : Infinity;
    return {
      oldEmi,
      newEmi,
      newLoan,
      monthlySaving,
      costs,
      totalCost,
      lifetimeSaving,
      breakEven,
    };
  }, [balance, currentRate, remainingYears, newRate, newYears, equity, settlementFee]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
        <SliderField
          label="Outstanding loan balance"
          value={balance}
          min={100_000}
          max={15_000_000}
          step={50_000}
          onChange={setBalance}
          display={aed(balance)}
        />
        <SliderField
          label="Current rate"
          value={currentRate}
          min={1.5}
          max={9}
          step={0.05}
          onChange={setCurrentRate}
          display={`${currentRate.toFixed(2)}%`}
        />
        <SliderField
          label="Remaining tenure"
          value={remainingYears}
          min={1}
          max={25}
          step={1}
          onChange={setRemainingYears}
          display={`${remainingYears} years`}
        />
        <SliderField
          label="New offered rate"
          value={newRate}
          min={1.5}
          max={9}
          step={0.05}
          onChange={setNewRate}
          display={`${newRate.toFixed(2)}%`}
          hint="Variable from EIBOR + 1%"
        />
        <SliderField
          label="New tenure"
          value={newYears}
          min={1}
          max={25}
          step={1}
          onChange={setNewYears}
          display={`${newYears} years`}
        />
        <SliderField
          label="Equity to release"
          value={equity}
          min={0}
          max={5_000_000}
          step={50_000}
          onChange={setEquity}
          display={aed(equity)}
          hint="Cash out up to 60% LTV"
        />
        <SliderField
          label="Early settlement fee (current bank)"
          value={settlementFee}
          min={0}
          max={10_000}
          step={500}
          onChange={setSettlementFee}
          display={aed(settlementFee)}
          hint="Capped at AED 10,000"
        />
      </div>

      <div className="rounded-2xl bg-navy-950 p-6 shadow-lg sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-300">
          New installment vs current
        </p>
        <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-2">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-wider text-navy-400">
              Current
            </p>
            <p className="text-2xl font-semibold text-navy-300 line-through decoration-navy-600 tabular-nums">
              {aed(result.oldEmi)}
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-wider text-royal-300">
              New
            </p>
            <p className="font-display text-5xl font-semibold text-mist-50 tabular-nums">
              {aed(result.newEmi)}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <ResultTile
            label="Monthly saving"
            value={result.monthlySaving > 0 ? aed(result.monthlySaving) : "—"}
            sub={
              result.monthlySaving > 0
                ? `${Math.round((result.monthlySaving / result.oldEmi) * 100)}% lower`
                : "No saving at these rates"
            }
            accent={result.monthlySaving > 0}
          />
          <ResultTile
            label="Break-even"
            value={
              Number.isFinite(result.breakEven)
                ? `${result.breakEven} months`
                : "—"
            }
            sub="To recover buyout costs"
          />
        </div>

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-300">
            One-time buyout costs
          </p>
          <div className="mt-2">
            <CostRow
              label="Bank processing (1% of new loan)"
              value={aed(result.costs.processing)}
            />
            <CostRow
              label="DLD mortgage registration (0.25% + AED 290)"
              value={aed(result.costs.registration)}
            />
            <CostRow label="Trustee office" value={aed(result.costs.trustee)} />
            <CostRow label="Valuation" value={aed(result.costs.valuation)} />
            <CostRow
              label="Early settlement fee"
              value={aed(result.costs.settlement)}
            />
            <CostRow label="Total cost to switch" value={aed(result.totalCost)} strong />
          </div>
        </div>

        <div
          className={`mt-5 rounded-xl p-4 ${
            result.lifetimeSaving > 0
              ? "bg-[#1faa53]/10 ring-1 ring-[#1faa53]/30"
              : "bg-white/5"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-navy-300">
            Net position over the new tenure
          </p>
          <p
            className={`mt-1 text-2xl font-bold tabular-nums ${
              result.lifetimeSaving > 0 ? "text-[#5fd489]" : "text-mist-50"
            }`}
          >
            {result.lifetimeSaving > 0
              ? `${aed(result.lifetimeSaving)} saved`
              : result.lifetimeSaving < 0
                ? `${aed(Math.abs(result.lifetimeSaving))} worse off`
                : "Break-even"}
          </p>
          <p className="mt-1 text-xs text-navy-400">
            Total payments difference minus switching costs. We only recommend a
            buyout when the numbers clearly win.
          </p>
        </div>
      </div>
    </div>
  );
}
