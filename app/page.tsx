import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { Faq } from "@/components/faq";
import {
  IconArrowRight,
  IconBank,
  IconCalculator,
  IconCheck,
  IconChart,
  IconDoc,
  IconGlobe,
  IconRefresh,
  IconShield,
  IconUsers,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Globe } from "@/components/three/globe";
import { HeroCalculator } from "@/components/tools/hero-calculator";
import { LeadForm } from "@/components/tools/lead-form";
import { ButtonLink, Container, Pill, SectionHeading } from "@/components/ui";
import {
  BANKS,
  DUBAI_STATS,
  FAQS,
  PROCESS_STEPS,
  RATE_CARDS,
  SEGMENTS,
  VALUE_PROPS,
} from "@/lib/data";
import { site, whatsappUrl, DEFAULT_WA_MESSAGE } from "@/lib/site";

const SEGMENT_ICONS = {
  salaried: IconUsers,
  "self-employed": IconDoc,
  "non-resident": IconGlobe,
  buyout: IconRefresh,
} as const;

const VALUE_ICONS = [IconBank, IconShield, IconChart, IconCheck] as const;

const CALCULATOR_CARDS = [
  {
    href: "/calculators#installment",
    icon: IconCalculator,
    title: "Monthly Installment & Costs",
    body: "EMI plus the full cash needed at transfer — down payment, DLD, registration, trustee, valuation, processing.",
  },
  {
    href: "/calculators#affordability",
    icon: IconChart,
    title: "Borrowing Capacity",
    body: "What the banks will actually lend you, using the UAE's 50% debt-burden rule against your income.",
  },
  {
    href: "/calculators#buyout",
    icon: IconRefresh,
    title: "Buyout / Refinance",
    body: "Compare your current loan against a new offer — savings, switching costs and break-even, in one view.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="bg-dots absolute inset-0 opacity-50" />
          <div className="absolute inset-0 opacity-60 sm:opacity-75 lg:opacity-90">
            <Globe />
          </div>
          <div className="absolute left-1/2 top-[-10%] h-[380px] w-[min(90vw,760px)] -translate-x-1/2 rounded-full bg-royal-500/10 blur-[130px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950" />
        </div>

        <Container className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <Pill dark>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-royal-400" />
              Mortgage brokerage · GV8, DIFC, Dubai
            </Pill>
            <h1 className="font-display animate-fade-up mt-6 text-4xl leading-[1.06] font-semibold tracking-tight text-mist-50 text-balance sm:text-5xl lg:text-[4.2rem]">
              Dubai mortgages,{" "}
              <span className="bg-gradient-to-r from-royal-200 via-royal-400 to-royal-300 bg-clip-text text-transparent">
                made clear.
              </span>
            </h1>
            <p className="animate-fade-up animate-fade-up-1 mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
              We compare 15+ UAE banks to arrange your home, commercial or
              non-resident mortgage — with ex-banker advisors, honest numbers
              and zero guesswork. Serving clients across the globe.
            </p>
            <div className="animate-fade-up animate-fade-up-2 mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#get-started" variant="accent" size="lg">
                Get pre-approved
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappUrl(DEFAULT_WA_MESSAGE)}
                variant="whatsapp"
                size="lg"
              >
                WhatsApp an advisor
              </ButtonLink>
            </div>
            <ul className="animate-fade-up animate-fade-up-3 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-300">
              {[
                "Pre-approval from 48 hours",
                "Ex-banker advisors",
                "No broker fee for clients",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-royal-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-up animate-fade-up-2">
            <HeroCalculator />
          </div>
        </Container>
      </section>

      {/* ---------- Bank marquee ---------- */}
      <section className="border-b border-navy-100 bg-white py-9">
        <Container>
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-navy-400">
            Arranging finance through the UAE&apos;s leading banks
          </p>
        </Container>
        <div className="marquee mt-6" aria-label="Partner banks">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center gap-x-10 pr-10"
              >
                {BANKS.map((bank) => (
                  <li
                    key={bank}
                    className="font-display text-base font-semibold whitespace-nowrap text-navy-300 transition-colors hover:text-navy-800 sm:text-lg"
                  >
                    {bank}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Segments ---------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Start where you are"
              title="Which profile fits you?"
              lede="Every borrower path has different rules. We speak all four fluently — and know which banks favour each."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEGMENTS.map((seg, i) => {
              const Icon = SEGMENT_ICONS[seg.id];
              return (
                <Reveal key={seg.id} delay={i * 80} className="h-full">
                  <Link
                    href="/rates"
                    className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_1px_2px_rgba(4,8,31,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-royal-400 hover:shadow-[0_18px_40px_-18px_rgba(4,8,31,0.25)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist-100 text-navy-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-royal-500 group-hover:text-navy-950">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-4 text-xl font-semibold text-navy-950">
                      {seg.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                      {seg.blurb}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {seg.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-xs font-semibold text-navy-600"
                        >
                          <IconCheck className="h-3.5 w-3.5 text-royal-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-royal-600">
                      See criteria
                      <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- Calculators ---------- */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                kicker="Instant answers"
                title="Run your numbers first"
                lede="Most brokers hide the maths until you're committed. We put it on the homepage — every fee, every dirham."
              />
              <ButtonLink href="/calculators" variant="outline">
                All calculators
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CALCULATOR_CARDS.map((c, i) => (
              <Reveal key={c.href} delay={i * 80} className="h-full">
                <Link
                  href={c.href}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-mist-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-royal-400 hover:bg-royal-50 hover:shadow-[0_18px_40px_-18px_rgba(4,8,31,0.25)]"
                >
                  <c.icon className="h-7 w-7 text-royal-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                  <h3 className="font-display mt-4 text-lg font-semibold text-navy-950">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                    {c.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-royal-600">
                    Open calculator
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Value props ---------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Why Hamsa"
              title="Advice you can audit"
              lede="Named after the swan — grace on the surface, serious work underneath."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {VALUE_PROPS.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <Reveal key={v.title} delay={i * 70} className="h-full">
                  <div className="flex h-full gap-5 rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-royal-300 hover:shadow-[0_18px_40px_-18px_rgba(4,8,31,0.2)]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-royal-300">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy-950">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- Rates snapshot ---------- */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                kicker="December 2025 market"
                title="Where rates stand"
                lede="Indicative starting points — your final rate depends on profile, property and bank."
              />
              <ButtonLink href="/rates" variant="outline">
                Full rates & eligibility
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {RATE_CARDS.map((r, i) => (
              <Reveal key={r.label} delay={i * 80} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-mist-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-royal-400 hover:shadow-[0_18px_40px_-18px_rgba(4,8,31,0.25)]">
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-royal-600 via-royal-400 to-royal-200 transition-transform duration-500 group-hover:scale-x-100" />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
                    {r.label}
                  </p>
                  <p className="font-display mt-3 text-4xl font-semibold text-navy-950">
                    {r.rate}
                    <span className="ml-1.5 text-base font-medium text-navy-400">
                      {r.suffix}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500">
                    {r.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Process condensed ---------- */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                kicker="The path"
                title="Nine steps, one guide"
                lede="From first call to DLD transfer — here's the honest timeline."
              />
              <ButtonLink href="/how-it-works" variant="outline">
                The full journey
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.slice(0, 6).map((step, i) => (
              <Reveal key={step.title} delay={i * 60} className="h-full">
                <div className="flex h-full gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-royal-300">
                  <span className="font-display text-2xl font-semibold text-royal-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-500">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Why Dubai stats ---------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop"
          alt="Dubai Marina skyline"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/60" />
        <Container className="relative">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                dark
                kicker="Why Dubai"
                title="The world is buying here"
                lede="Q1 2026 was Dubai real estate's strongest quarter on record — and residency rules just got friendlier."
              />
              <ButtonLink href="/why-dubai" variant="outline-dark">
                Market & visa guide
                <IconArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DUBAI_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="border-l-2 border-royal-500/60 pl-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-mist-50 sm:text-4xl">
                    <CountUp
                      end={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  </dd>
                  <dd className="mt-2 text-sm font-semibold text-navy-200">
                    {s.label}
                  </dd>
                  <dd className="mt-0.5 text-xs text-navy-400">{s.note}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              kicker="Straight answers"
              title="Questions everyone asks"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10">
              <Faq items={FAQS.slice(0, 5)} />
            </div>
          </Reveal>
          <p className="mt-6 text-center text-sm text-navy-500">
            More questions?{" "}
            <Link
              href="/rates#faq"
              className="font-semibold text-royal-600 underline decoration-royal-300 underline-offset-4 hover:text-navy-950"
            >
              See the full FAQ
            </Link>{" "}
            or just message us.
          </p>
        </Container>
      </section>

      {/* ---------- Lead capture ---------- */}
      <section id="get-started" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-28">
              <SectionHeading
                kicker="Get started"
                title="Pre-approval in as little as 48 hours"
                lede="Tell us where you stand. An advisor — a real ex-banker, not a call centre — replies with your best-fit banks and the exact documents needed."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "Whole-of-market comparison across 15+ banks",
                  "A documented fee sheet before you commit",
                  "End-to-end handling through DLD transfer",
                  "English, Arabic, Hindi, Russian & French spoken",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-navy-700">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-mist-300 bg-mist-100 p-5 text-sm text-navy-600">
                <p className="font-bold text-navy-950">{site.legalName}</p>
                <p className="mt-1">{site.address}</p>
                <p className="mt-1">
                  {site.phoneDisplay} · {site.email}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-navy-100 bg-mist-50 p-6 shadow-lg sm:p-8">
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
