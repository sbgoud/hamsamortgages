import Link from "next/link";
import { Logo } from "@/components/logo";
import { IconMail, IconPhone, IconPin, IconWhatsApp } from "@/components/icons";
import {
  DEFAULT_WA_MESSAGE,
  site,
  whatsappUrl,
} from "@/lib/site";

const columns = [
  {
    title: "Calculators",
    links: [
      { href: "/calculators#installment", label: "Monthly Installment & Costs" },
      { href: "/calculators#affordability", label: "Borrowing Capacity" },
      { href: "/calculators#buyout", label: "Buyout / Refinance" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#residential", label: "Residential Mortgages" },
      { href: "/services#non-resident", label: "Non-Resident Mortgages" },
      { href: "/services#commercial", label: "Commercial & Building" },
      { href: "/services#rent-income-only", label: "Rent-Income-Only" },
      { href: "/services#buyout", label: "Buyout & Equity Release" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/rates", label: "Rates & Eligibility" },
      { href: "/why-dubai", label: "Why Invest in Dubai" },
      { href: "/about", label: "About & Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-400">
            Dubai-based mortgage brokerage arranging finance across 15+ UAE
            banks for residents, non-residents and investors worldwide.
          </p>
          <address className="mt-6 space-y-2.5 text-sm not-italic">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-navy-300 transition-colors hover:text-royal-300"
            >
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-royal-400" />
              {site.address}
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2.5 transition-colors hover:text-royal-300"
            >
              <IconPhone className="h-4 w-4 shrink-0 text-royal-400" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2.5 transition-colors hover:text-royal-300"
            >
              <IconMail className="h-4 w-4 shrink-0 text-royal-400" />
              {site.email}
            </a>
          </address>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-royal-300">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-navy-400 transition-colors hover:text-mist-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-navy-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 py-6 text-xs text-navy-500 sm:flex-row sm:items-center sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Rates and criteria
            are indicative (December 2025) and subject to bank approval.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mist-50"
            >
              LinkedIn
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mist-50"
            >
              Instagram
            </a>
            <a
              href={whatsappUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#4bc06f] transition-colors hover:text-mist-50"
            >
              <IconWhatsApp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
