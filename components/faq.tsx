"use client";

import { useState } from "react";

type FaqItem = { readonly q: string; readonly a: string };

export function Faq({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition-all duration-400 ${
              isOpen
                ? "border-royal-200/60 bg-white shadow-premium"
                : "border-navy-100/60 bg-white/80 hover:border-royal-200/40 hover:shadow-soft"
            }`}
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-navy-950 transition-colors cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-400 ${
                  isOpen
                    ? "rotate-45 bg-royal-600 text-white"
                    : "bg-mist-100 text-navy-400"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-navy-500">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
