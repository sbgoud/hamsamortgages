import type { Metadata } from "next";
import { CountUp } from "@/components/count-up";
import { IconCheck, IconShield } from "@/components/icons";
import { ParallaxImage } from "@/components/parallax";
import { Reveal } from "@/components/reveal";
import { VisaMatcher } from "@/components/tools/visa-matcher";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { DUBAI_STATS, VISA_TIERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why Invest in Dubai — Market, Visas & Investor Protection",
  description:
    "Dubai's record Q1 2026 market, 2-year property investor visa, 10-year Golden Visa (AED 2M+) and escrow protections — what global buyers need to know.",
};

const FUNDAMENTALS = [
  {
    title: "Record momentum",
    body: "AED 252 billion in transactions in Q1 2026 alone — up 31% year on year — with over 60,000 deals recorded.",
  },
  {
    title: "Global demand",
    body: "Foreign capital reached AED 148.35 billion, confirming Dubai's status as the world's most international property market.",
  },
  {
    title: "First-time buyer support",
    body: "Government initiatives continue to expand entry paths for first-time buyers, from financing caps to new supply.",
  },
  {
    title: "Digital-first transactions",
    body: "Dubai Land Department's digital services have cut transfer timelines and paperwork dramatically in recent years.",
  },
  {
    title: "Zero property tax",
    body: "No annual property tax and no capital gains tax on real estate — total ownership cost is famously lean.",
  },
  {
    title: "Currency stability",
    body: "The dirham's peg to the US dollar gives international investors a predictable store of value.",
  },
];

export default function WhyDubaiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop"
          alt="Dubai Marina at night"
          priority
          speed={0.25}
          className="opacity-50"
        />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/55 to-navy-950" />
          <div className="bg-grain absolute inset-0" />
        </div>
        <div className="orb orb-gold absolute top-1/3 left-1/4 h-64 w-64 opacity-15" aria-hidden="true" />
        <Container className="relative py-24 sm:py-28">
          <SectionHeading
            dark
            kicker="Why invest in Dubai"
            title="The world's most liquid property market, with residency attached"
            lede="Dubai pairs record transaction volumes with investor-friendly visas and some of the strongest buyer protections anywhere. Here's the honest picture."
          />
          <Reveal>
            <dl className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {DUBAI_STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-6">
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
              ))}
            </dl>
          </Reveal>
          <p className="mt-12 text-xs text-navy-300">
            Market figures: Q1 2026 Dubai Land Department data, as summarised by
            Hamsa Mortgage Brokers (July 2026 update).
          </p>
        </Container>
      </section>

      {/* Visa matcher */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Residency bridge"
              title="What does your budget qualify you for?"
              lede="Property purchase is one of the clearest routes to UAE residency. Move the slider — the visa tiers update live."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <VisaMatcher />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Visa detail */}
      <section className="border-y border-navy-100/40 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {VISA_TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div className="group rounded-2xl border border-navy-100/60 bg-gradient-to-b from-mist-50 to-white p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-premium">
                  <h3 className="font-display text-2xl font-semibold text-navy-950">
                    {tier.name}
                  </h3>
                  {tier.min > 0 && (
                    <p className="font-display mt-3 text-3xl font-semibold text-gradient-gold">
                      {tier.min.toLocaleString()} AED+
                    </p>
                  )}
                  <ul className="mt-5 space-y-3">
                    {tier.rules.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-navy-600">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Fundamentals */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Market fundamentals"
              title="Why the demand keeps compounding"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FUNDAMENTALS.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group rounded-2xl border border-navy-100/60 bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-premium">
                  <h3 className="font-semibold text-navy-950">{f.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-500">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Escrow */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div className="orb orb-royal absolute -top-16 right-1/4 h-48 w-48 opacity-15" aria-hidden="true" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <span className="flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500/20 to-gold-400/10 text-gold-400 ring-1 ring-white/10">
            <IconShield className="h-9 w-9" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
              Off-plan, protected by escrow
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-navy-200">
              Dubai&apos;s regulatory framework provides strong protection for
              off-plan buyers through regulated escrow accounts, ensuring that
              developers can access purchaser funds only as construction
              milestones are achieved. Combined with DLD project registration,
              your capital is supervised from contract to handover.
            </p>
            <div className="mt-8">
              <ButtonLink href="/#get-started" variant="accent">
                Discuss an investment plan
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
