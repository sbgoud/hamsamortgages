"use client";

import { useState } from "react";
import { SliderField } from "@/components/tools/fields";
import { IconCheck } from "@/components/icons";
import { VISA_TIERS } from "@/lib/data";
import { aed } from "@/lib/mortgage";

export function VisaMatcher() {
  const [price, setPrice] = useState(1_500_000);

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <SliderField
        label="Property purchase price"
        value={price}
        min={300_000}
        max={10_000_000}
        step={50_000}
        onChange={setPrice}
        display={aed(price)}
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {VISA_TIERS.map((tier) => {
          const eligible = price >= tier.min;
          return (
            <div
              key={tier.name}
              className={`rounded-xl border p-5 transition-all ${
                eligible
                  ? "border-royal-500 bg-royal-50 ring-1 ring-royal-500/40"
                  : "border-navy-100 bg-mist-50 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-display text-lg font-semibold text-navy-950">
                  {tier.name}
                </h4>
                {eligible ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#1faa53]/10 px-2.5 py-1 text-[0.7rem] font-bold text-[#157a3b]">
                    <IconCheck className="h-3 w-3" />
                    Qualifies
                  </span>
                ) : (
                  <span className="rounded-full bg-navy-100 px-2.5 py-1 text-[0.7rem] font-bold text-navy-400">
                    {tier.min > 0 ? `From ${aed(tier.min)}` : "Joint owners only"}
                  </span>
                )}
              </div>
              <ul className="mt-3 space-y-1.5">
                {tier.rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex gap-2 text-xs leading-relaxed text-navy-600"
                  >
                    <IconCheck className="mt-0.5 h-3 w-3 shrink-0 text-royal-600" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-xs leading-relaxed text-navy-400">
        Residency rules per current UAE regulations (December 2025). Title deed
        and DLD registration are required; we connect you with the typing and
        Amer service partners who file the visa.
      </p>
    </div>
  );
}
