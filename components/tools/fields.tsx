"use client";

import type { ReactNode } from "react";

export function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  hint,
  dark = false,
  hideRange = false,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  hint?: string;
  dark?: boolean;
  hideRange?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label
          className={`text-sm font-semibold ${dark ? "text-navy-200" : "text-navy-700"}`}
        >
          {label}
        </label>
        <span
          className={`rounded-lg px-2.5 py-1 text-sm font-bold tabular-nums ${
            dark
              ? "bg-white/10 text-mist-50"
              : "border border-navy-100 bg-mist-50 text-navy-900"
          }`}
        >
          {display}
        </span>
      </div>
      {!hideRange && (
        <>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className={`mt-2.5 h-1.5 w-full cursor-pointer appearance-none rounded-full ${
              dark ? "bg-white/15" : "bg-navy-100"
            }`}
            aria-label={label}
          />
          <div
            className={`mt-1 flex justify-between text-[0.7rem] font-medium ${
              dark ? "text-navy-400" : "text-navy-400"
            }`}
          >
            {hint ? <span>{hint}</span> : <span />}
            <span>
              {min === 0 ? "" : formatShort(min)} – {formatShort(max)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function formatShort(v: number) {
  if (v >= 1_000_000) return `${v / 1_000_000}M`;
  if (v >= 1000) return `${v / 1000}K`;
  return `${v}`;
}

export function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label?: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      {label && (
        <span className="mb-2 block text-sm font-semibold text-navy-700">
          {label}
        </span>
      )}
      <div
        className="flex rounded-xl border border-navy-100 bg-mist-50 p-1"
        role="tablist"
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            role="tab"
            aria-selected={value === opt.value}
            onClick={() => onChange(opt.value)}
            className={`flex-1 rounded-lg px-2 py-2 text-[0.8rem] font-semibold transition-all ${
              value === opt.value
                ? "bg-navy-950 text-mist-50 shadow-sm"
                : "text-navy-500 hover:text-navy-900"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ResultTile({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 ${
        accent ? "bg-royal-500/15 ring-1 ring-royal-500/30" : "bg-white/5"
      }`}
    >
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy-300">
        {label}
      </p>
      <p
        className={`mt-1 text-2xl font-bold tabular-nums ${
          accent ? "text-royal-300" : "text-mist-50"
        }`}
      >
        {value}
      </p>
      {sub && <p className="mt-0.5 text-xs text-navy-400">{sub}</p>}
    </div>
  );
}

export function CostRow({
  label,
  value,
  note,
  strong = false,
}: {
  label: ReactNode;
  value: string;
  note?: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between gap-3 py-2 ${
        strong ? "border-t border-white/15 pt-3" : "border-b border-white/8"
      }`}
    >
      <span
        className={`text-sm ${strong ? "font-bold text-mist-50" : "text-navy-300"}`}
      >
        {label}
        {note && <span className="ml-1 text-xs text-navy-500">{note}</span>}
      </span>
      <span
        className={`shrink-0 tabular-nums ${
          strong
            ? "text-lg font-bold text-royal-300"
            : "text-sm font-semibold text-mist-50"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
