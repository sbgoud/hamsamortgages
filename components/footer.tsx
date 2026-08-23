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
    <footer className="relative overflow-hidden bg-navy-950 text-navy-300">
      {/* Decorative grid texture */}
      <div className="bg-grid-fine absolute inset-0" aria-hidden="true" />
      {/* Decorative orbs */}
      <div className="orb orb-royal absolute -top-32 -right-32 h-64 w-64 opacity-20" aria-hidden="true" />
      <div className="orb orb-gold absolute -bottom-24 left-1/4 h-48 w-48 opacity-10" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-200">
            Dubai-based mortgage brokerage arranging finance across 15+ UAE
            banks for residents, non-residents and investors worldwide.
          </p>
          <address className="mt-8 space-y-3 text-sm not-italic">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-navy-300 transition-all duration-300 hover:text-royal-300"
            >
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              {site.address}
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 transition-all duration-300 hover:text-royal-300"
            >
              <IconPhone className="h-4 w-4 shrink-0 text-gold-400" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 transition-all duration-300 hover:text-royal-300"
            >
              <IconMail className="h-4 w-4 shrink-0 text-gold-400" />
              {site.email}
            </a>
          </address>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-navy-200 transition-all duration-300 hover:translate-x-1 hover:text-mist-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="relative border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-xs text-navy-300 sm:flex-row sm:items-center sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Rates and criteria
            are indicative (December 2025) and subject to bank approval.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-mist-50"
            >
              LinkedIn
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-mist-50"
            >
              Instagram
            </a>
            <a
              href={whatsappUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#4bc06f] transition-all duration-300 hover:text-mist-50"
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
