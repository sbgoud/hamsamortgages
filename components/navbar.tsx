"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";import { Logo } from "@/components/logo";
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
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-navy-100 bg-mist-50/90 shadow-[0_1px_12px_rgba(4,8,31,0.06)] backdrop-blur-md"
          : "border-transparent bg-mist-50/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Hamsa Mortgages — home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[0.83rem] font-semibold transition-colors ${
                  active
                    ? "bg-royal-600 text-white shadow-soft"
                    : "text-navy-600 hover:bg-royal-50 hover:text-royal-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 bg-white px-4 py-2 text-[0.83rem] font-semibold text-navy-800 transition-colors hover:border-[#1faa53] hover:text-[#189546]"
          >
            <IconWhatsApp className="h-4 w-4 text-[#1faa53]" />
            WhatsApp
          </a>
          <Link
            href="/#get-started"
            className="rounded-full bg-gradient-to-r from-royal-500 via-royal-600 to-royal-700 px-5 py-2.5 text-[0.83rem] font-semibold text-white shadow-glow transition-all hover:brightness-110"
          >
            Get pre-approved
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-navy-800 hover:bg-navy-950/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-navy-100 bg-mist-50 px-5 pt-2 pb-6 lg:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                pathname === item.href
                  ? "bg-royal-600 text-white"
                  : "text-navy-800 hover:bg-royal-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#get-started"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-xl bg-gradient-to-r from-royal-500 via-royal-600 to-royal-700 px-4 py-3.5 text-center text-base font-bold text-white shadow-glow"
          >
            Get pre-approved
          </Link>
          <a
            href={whatsappUrl(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-base font-semibold text-navy-800"
          >
            <IconWhatsApp className="h-5 w-5 text-[#1faa53]" />
            Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
