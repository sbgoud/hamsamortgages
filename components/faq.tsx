import { IconArrowRight } from "@/components/icons";
import type { ReactNode } from "react";

export function Faq({ items }: { items: readonly { q: string; a: ReactNode }[] }) {
  return (
    <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-navy-900 transition-colors hover:bg-mist-50 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-transform duration-300 group-open:rotate-90 group-open:border-royal-500 group-open:text-royal-600">
              <IconArrowRight className="h-3.5 w-3.5" />
            </span>
          </summary>
          <div className="px-6 pb-6 text-sm leading-relaxed text-navy-500">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
