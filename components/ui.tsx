import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  lede,
  align = "left",
  dark = false,
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {kicker && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${
            dark
              ? "border border-white/15 bg-white/5 text-royal-300"
              : "border border-royal-100 bg-royal-50 text-royal-700"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              dark ? "bg-royal-300" : "bg-royal-600"
            }`}
          />
          {kicker}
        </span>
      )}
      <h2
        className={`font-display mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-[2.6rem] sm:leading-[1.15] ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-navy-200" : "text-navy-500"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-500";

const variants = {
  primary:
    "bg-royal-600 text-white shadow-soft hover:bg-royal-500 hover:shadow-glow px-6 py-3",
  accent:
    "bg-gradient-to-r from-royal-500 via-royal-600 to-royal-700 text-white shadow-glow hover:brightness-110 px-6 py-3",
  outline:
    "border border-navy-200 bg-white text-navy-900 hover:border-royal-400 hover:text-royal-700 hover:shadow-soft px-6 py-3",
  "outline-dark":
    "border border-white/20 text-white hover:border-royal-300 hover:text-royal-200 hover:bg-white/5 px-6 py-3",
  whatsapp:
    "bg-[#1faa53] text-white hover:bg-[#189546] shadow-soft hover:shadow-lift px-6 py-3",
} as const;

const sizes = {
  md: "",
  sm: "px-4 py-2 text-[0.8rem]",
  lg: "px-7 py-3.5 text-base",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const isExternal =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `${buttonBase} ${variants[variant]} ${sizes[size]} ${className ?? ""}`;
  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-card ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function Pill({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold ${
        dark
          ? "border border-white/15 bg-white/5 text-navy-200 backdrop-blur-sm"
          : "border border-navy-100 bg-white text-navy-600 shadow-soft"
      }`}
    >
      {children}
    </span>
  );
}
