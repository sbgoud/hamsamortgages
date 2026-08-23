"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { IconMenu, IconX, IconWhatsApp } from "@/components/icons";
import { DEFAULT_WA_MESSAGE, whatsappUrl } from "@/lib/site";

const NAV = [
  { href: "/calculators", label: "Calculators" },
  { href: "/services", label: "Services" },
  { href: "/why-dubai", label: "Why Dubai" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/rates", label: "Rates & Eligibility" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-navy-100/40 bg-white/70 shadow-[0_1px_24px_rgba(4,8,31,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Hamsa Mortgages — home" className="transition-transform duration-300 hover:scale-105">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[0.83rem] font-semibold transition-all duration-300 ${
                  active
                    ? "text-royal-600"
                    : "text-navy-600 hover:text-royal-700"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-royal-500 to-royal-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-navy-200/60 bg-white/80 px-4 py-2 text-[0.83rem] font-semibold text-navy-800 backdrop-blur-sm transition-all duration-300 hover:border-[#1faa53]/40 hover:text-[#189546] hover:shadow-[0_4px_16px_-4px_rgba(31,170,83,0.2)]"
          >
            <IconWhatsApp className="h-4 w-4 text-[#1faa53]" />
            WhatsApp
          </a>
          <Link
            href="/#get-started"
            className="btn-shimmer rounded-full bg-gradient-to-r from-royal-500 via-royal-600 to-royal-700 px-5 py-2.5 text-[0.83rem] font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-[0_16px_48px_-8px_rgba(0,15,159,0.6)] hover:brightness-110"
          >
            Get pre-approved
          </Link>
        </div>

        <button
          className="rounded-xl p-2 text-navy-800 transition-colors hover:bg-navy-950/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="border-t border-navy-100/40 bg-white/90 px-5 pt-2 pb-6 backdrop-blur-xl"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                pathname === item.href
                  ? "bg-royal-50 text-royal-600"
                  : "text-navy-800 hover:bg-royal-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#get-started"
            onClick={() => setOpen(false)}
            className="btn-shimmer mt-3 block rounded-xl bg-gradient-to-r from-royal-500 via-royal-600 to-royal-700 px-4 py-3.5 text-center text-base font-bold text-white shadow-glow"
          >
            Get pre-approved
          </Link>
          <a
            href={whatsappUrl(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-navy-200/60 bg-white px-4 py-3.5 text-base font-semibold text-navy-800"
          >
            <IconWhatsApp className="h-5 w-5 text-[#1faa53]" />
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
