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
import { ParallaxImage } from "@/components/parallax";
import { HeroCalculator } from "@/components/tools/hero-calculator";
import { LeadForm } from "@/components/tools/lead-form";
import { ButtonLink, Container, Pill, SectionHeading } from "@/components/ui";
import {
  BANKS,
  DUBAI_GALLERY,
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

const SEGMENT_IMAGES = {
  salaried:
    "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800&auto=format&fit=crop",
  "self-employed":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  "non-resident":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
  buyout:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
} as const;

const VALUE_ICONS = [IconBank, IconShield, IconChart, IconCheck] as const;

const VALUE_GRADIENTS = [
  "from-royal-500/15 to-royal-600/5",
  "from-gold-400/15 to-gold-500/5",
  "from-royal-400/15 to-gold-400/5",
  "from-gold-300/15 to-royal-500/5",
] as const;

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

const RATE_GRADIENTS = [
  "from-royal-600 via-royal-500 to-royal-400",
  "from-navy-900 via-navy-800 to-navy-700",
  "from-gold-600 via-gold-500 to-gold-400",
] as const;

/* Staggered frames + per-tile drift speeds for the parallax gallery */
const GALLERY_CARDS = [
  { ...DUBAI_GALLERY[0], speed: 0.5, frame: "aspect-[3/4]" },
  { ...DUBAI_GALLERY[1], speed: 0.25, frame: "aspect-square md:mt-12" },
  { ...DUBAI_GALLERY[2], speed: 0.4, frame: "aspect-[4/5] sm:mt-0" },
  { ...DUBAI_GALLERY[3], speed: 0.35, frame: "aspect-[3/4] md:mt-8" },
  { ...DUBAI_GALLERY[4], speed: 0.55, frame: "aspect-[4/3] md:aspect-square md:-mt-6" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950">
        {/* Parallax skyline — bright enough to feel like Dubai, scrimmed for legibility */}
        <ParallaxImage
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop"
          alt="Dubai skyline at golden hour"
          priority
          speed={0.25}
          className="opacity-55"
        />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-navy-950/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/20 to-navy-950" />
          <div className="bg-grain absolute inset-0" />
          <div className="bg-dots absolute inset-0 opacity-30" />
          <div className="orb orb-royal absolute left-1/4 top-[-5%] h-[420px] w-[420px] opacity-30" />
          <div className="orb orb-gold absolute right-1/4 bottom-[-10%] h-[300px] w-[300px] opacity-20" />
        </div>

        <Container className="relative grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>
            <Pill dark>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
              Mortgage brokerage · GV8, DIFC, Dubai
            </Pill>
            <h1 className="font-display animate-fade-up mt-7 text-4xl leading-[1.06] font-semibold tracking-tight text-mist-50 text-balance sm:text-5xl lg:text-[4.5rem]">
              Dubai mortgages,{" "}
              <span className="text-gradient-royal">
                made clear.
              </span>
            </h1>
            <p className="animate-fade-up animate-fade-up-1 mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              We compare 15+ UAE banks to arrange your home, commercial or
              non-resident mortgage — with ex-banker advisors, honest numbers
              and zero guesswork. Serving clients across the globe.
            </p>
            <div className="animate-fade-up animate-fade-up-2 mt-9 flex flex-wrap items-center gap-3">
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
            <ul className="animate-fade-up animate-fade-up-3 mt-9 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-navy-300">
              {[
                "Pre-approval from 48 hours",
                "Ex-banker advisors",
                "No broker fee for clients",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-gold-400" />
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
      <section className="relative border-b border-navy-100/40 bg-white py-10">
        <Container>
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-navy-400">
            Arranging finance through the UAE&apos;s leading banks
          </p>
        </Container>
        <div className="marquee mt-7" aria-label="Partner banks">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center gap-x-12 pr-12"
              >
                {BANKS.map((bank) => (
                  <li
                    key={bank}
                    className="font-display text-base font-semibold whitespace-nowrap text-navy-300 transition-all duration-300 hover:text-navy-800 sm:text-lg"
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
      <section className="py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Start where you are"
              title="Which profile fits you?"
              lede="Every borrower path has different rules. We speak all four fluently — and know which banks favour each."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEGMENTS.map((seg, i) => {
              const Icon = SEGMENT_ICONS[seg.id];
              const image = SEGMENT_IMAGES[seg.id];
              return (
                <Reveal key={seg.id} delay={i * 80} className="h-full">
                  <Link
                    href="/rates"
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100/60 bg-white shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-premium"
                  >
                    {/* Image strip */}
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={image}
                        alt={seg.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
                      <span className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-navy-800 shadow-soft backdrop-blur-sm transition-all duration-300 group-hover:bg-royal-500 group-hover:text-white group-hover:shadow-glow">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-xl font-semibold text-navy-950">
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
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- Calculators ---------- */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="orb orb-royal absolute -top-20 -left-20 h-64 w-64 opacity-15" aria-hidden="true" />
        <Container className="relative">
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
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {CALCULATOR_CARDS.map((c, i) => (
              <Reveal key={c.href} delay={i * 80} className="h-full">
                <Link
                  href={c.href}
                  className="group gradient-border flex h-full flex-col rounded-2xl border border-navy-100/60 bg-gradient-to-b from-mist-50 to-white p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-premium"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-100 to-royal-50 text-royal-600 transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(77,86,240,0.25)]">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-semibold text-navy-950">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                    {c.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-royal-600">
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
      <section className="py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Why Hamsa"
              title="Advice you can audit"
              lede="Named after the swan — grace on the surface, serious work underneath."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {VALUE_PROPS.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              const gradient = VALUE_GRADIENTS[i];
              return (
                <Reveal key={v.title} delay={i * 70} className="h-full">
                  <div className="group flex h-full gap-5 rounded-2xl border border-navy-100/60 bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium">
                    <span className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-royal-600 ring-1 ring-navy-100/40 transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(77,86,240,0.2)]`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy-950">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-500">
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
      <section className="bg-white py-24 sm:py-28">
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
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {RATE_CARDS.map((r, i) => (
              <Reveal key={r.label} delay={i * 80} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_48px_-16px_rgba(4,8,31,0.4)]">
                  {/* Decorative */}
                  <div className={`absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br ${RATE_GRADIENTS[i]} opacity-20 blur-2xl`} aria-hidden="true" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                    {r.label}
                  </p>
                  <p className="font-display mt-4 text-5xl font-semibold text-white">
                    {r.rate}
                    <span className="ml-2 text-base font-medium text-navy-300">
                      {r.suffix}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-300">
                    {r.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Process condensed ---------- */}
      <section className="py-24 sm:py-28">
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
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.slice(0, 6).map((step, i) => (
              <Reveal key={step.title} delay={i * 60} className="h-full">
                <div className="group flex h-full gap-4 rounded-2xl border border-navy-100/60 bg-white p-5 transition-all duration-400 hover:-translate-y-1 hover:border-royal-200/60 hover:shadow-premium">
                  <span className="font-display text-3xl font-semibold text-gradient-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-950">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
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
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2400&auto=format&fit=crop"
          alt="Dubai Marina skyline at night"
          speed={0.2}
          className="opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="bg-grain absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="orb orb-gold absolute top-1/4 right-1/3 h-64 w-64 opacity-10" aria-hidden="true" />
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
          <dl className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DUBAI_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="glass rounded-2xl p-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-gradient-gold sm:text-4xl">
                    <CountUp
                      end={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  </dd>
                  <dd className="mt-3 text-sm font-semibold text-navy-200">
                    {s.label}
                  </dd>
                  <dd className="mt-1 text-xs text-navy-300">{s.note}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------- Dubai gallery (multi-speed parallax) ---------- */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="orb orb-royal absolute -top-24 right-[10%] h-72 w-72 opacity-10" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              align="center"
              kicker="Postcards from the city"
              title="Dubai, in motion"
              lede="The skyline our clients end up living in. Scroll slowly — the city moves at different speeds."
            />
          </Reveal>
        </Container>
        <div className="mx-auto mt-14 grid w-full max-w-6xl grid-cols-2 gap-4 px-5 sm:gap-5 sm:px-8 md:grid-cols-3">
          {GALLERY_CARDS.map((card, i) => (
            <Reveal
              key={card.src}
              delay={i * 90}
              className={i === GALLERY_CARDS.length - 1 ? "col-span-2 md:col-span-1" : undefined}
            >
              <figure
                className={`group relative overflow-hidden rounded-2xl shadow-card transition-shadow duration-500 hover:shadow-premium ${card.frame}`}
              >
                <ParallaxImage
                  src={card.src}
                  alt={card.alt}
                  speed={card.speed}
                  zoom={false}
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-navy-950/55 py-1.5 pl-2.5 pr-3.5 text-xs font-semibold text-mist-50 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  {card.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={GALLERY_CARDS.length * 90} className="col-span-2 md:col-span-1">
            <Link
              href="/why-dubai"
              className="btn-shimmer group flex h-full min-h-44 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-royal-600 via-royal-700 to-navy-900 p-6 shadow-lift transition-all duration-400 hover:-translate-y-1.5 hover:shadow-glow"
            >
              <p className="font-display text-xl leading-snug font-semibold text-white">
                Make one of these views{" "}
                <span className="text-gradient-gold">yours.</span>
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-300">
                Explore the Dubai market
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-24 sm:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              kicker="Straight answers"
              title="Questions everyone asks"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <Faq items={FAQS.slice(0, 5)} />
            </div>
          </Reveal>
          <p className="mt-8 text-center text-sm text-navy-500">
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
      <section id="get-started" className="scroll-mt-24 bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-28">
              <SectionHeading
                kicker="Get started"
                title="Pre-approval in as little as 48 hours"
                lede="Tell us where you stand. An advisor — a real ex-banker, not a call centre — replies with your best-fit banks and the exact documents needed."
              />
              <ul className="mt-9 space-y-4">
                {[
                  "Whole-of-market comparison across 15+ banks",
                  "A documented fee sheet before you commit",
                  "End-to-end handling through DLD transfer",
                  "English, Arabic, Hindi, Russian & French spoken",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-navy-700">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-9 rounded-2xl border border-navy-100/60 bg-gradient-to-br from-mist-50 to-mist-100 p-6 text-sm text-navy-600">
                <p className="font-bold text-navy-950">{site.legalName}</p>
                <p className="mt-1.5">{site.address}</p>
                <p className="mt-1.5">
                  {site.phoneDisplay} · {site.email}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-navy-100/60 bg-gradient-to-b from-mist-50 to-white p-6 shadow-premium sm:p-8">
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
