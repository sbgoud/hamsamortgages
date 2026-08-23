import type { Metadata } from "next";
import Image from "next/image";
import { CountUp } from "@/components/count-up";
import { IconCheck, IconShield } from "@/components/icons";
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
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop"
          alt="Dubai Marina at night"
          fill
          preload
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/70 to-navy-950" />
        <Container className="relative py-20 sm:py-24">
          <SectionHeading
            dark
            kicker="Why invest in Dubai"
            title="The world's most liquid property market, with residency attached"
            lede="Dubai pairs record transaction volumes with investor-friendly visas and some of the strongest buyer protections anywhere. Here's the honest picture."
          />
          <Reveal>
            <dl className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {DUBAI_STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-royal-500/60 pl-5">
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
              ))}
            </dl>
          </Reveal>
          <p className="mt-10 text-xs text-navy-400">
            Market figures: Q1 2026 Dubai Land Department data, as summarised by
            Hamsa Mortgage Brokers (December 2025 update).
          </p>
        </Container>
      </section>

      {/* Visa matcher */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Residency bridge"
            title="What does your budget qualify you for?"
            lede="Property purchase is one of the clearest routes to UAE residency. Move the slider — the visa tiers update live."
          />
          <div className="mt-10">
            <VisaMatcher />
          </div>
        </Container>
      </section>

      {/* Visa detail */}
      <section className="border-y border-navy-100 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {VISA_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-navy-100 bg-mist-50 p-7"
              >
                <h3 className="font-display text-2xl font-semibold text-navy-950">
                  {tier.name}
                </h3>
                {tier.min > 0 && (
                  <p className="font-display mt-2 text-3xl font-semibold text-royal-600">
                    {tier.min.toLocaleString()} AED+
                  </p>
                )}
                <ul className="mt-4 space-y-2.5">
                  {tier.rules.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-navy-600">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fundamentals */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Market fundamentals"
            title="Why the demand keeps compounding"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FUNDAMENTALS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-navy-100 bg-white p-6"
              >
                <h3 className="font-semibold text-navy-950">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Escrow */}
      <section className="bg-navy-950 py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-royal-500/15 text-royal-300 ring-1 ring-royal-500/30">
            <IconShield className="h-8 w-8" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
              Off-plan, protected by escrow
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-navy-200">
              Dubai&apos;s regulatory framework provides strong protection for
              off-plan buyers through regulated escrow accounts, ensuring that
              developers can access purchaser funds only as construction
              milestones are achieved. Combined with DLD project registration,
              your capital is supervised from contract to handover.
            </p>
            <div className="mt-7">
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
