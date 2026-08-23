import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { ParallaxShowcase } from "@/components/parallax";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { SERVICES } from "@/lib/data";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mortgage Services & Solutions",
  description:
    "Residential, non-resident, commercial & building, rent-income-only and buyout mortgages in Dubai — criteria, LTV limits and how we structure each file.",
};

const IMAGES: Record<string, { src: string; alt: string }> = {
  residential: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern villa with pool in Dubai",
  },
  "non-resident": {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
    alt: "Aircraft wing above the clouds",
  },
  commercial: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    alt: "Commercial office towers",
  },
  "rent-income-only": {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    alt: "Furnished apartment interior",
  },
  buyout: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    alt: "House model with keys on financial documents",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-100/40 bg-white">
        <div className="orb orb-royal absolute -top-20 right-1/4 h-48 w-48 opacity-10" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20">
          <SectionHeading
            kicker="Services & solutions"
            title="Every way we arrange finance"
            lede="Five specialised desks, one standard: you see the full criteria, the full cost and the full market before you decide anything."
          />
          <nav className="mt-10 flex flex-wrap gap-2.5" aria-label="Services">
            {SERVICES.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-navy-200/60 bg-gradient-to-b from-white to-mist-50 px-5 py-2.5 text-sm font-semibold text-navy-600 shadow-soft transition-all duration-300 hover:border-royal-400 hover:text-royal-700 hover:shadow-[0_4px_16px_-4px_rgba(0,15,159,0.15)]"
              >
                <span className="mr-2 text-xs font-bold text-royal-600">
                  0{i + 1}
                </span>
                {s.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {SERVICES.map((service, i) => {
        const img = IMAGES[service.id];
        const flip = i % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 border-b border-navy-100/40 ${i % 2 === 1 ? "bg-white" : "bg-mist-50"}`}
          >
            <Container className="grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-2">
              <Reveal className={flip ? "lg:order-2" : ""}>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
                  {service.kicker}
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-navy-950 text-balance sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-navy-500">
                  {service.blurb}
                </p>
                <ul className="mt-7 space-y-3.5">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-navy-700">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink href="/#get-started" variant="primary">
                    Check my eligibility
                    <IconArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappUrl(
                      `Hi Hamsa Mortgages, I'd like to ask about ${service.title}.`,
                    )}
                    variant="outline"
                  >
                    Ask on WhatsApp
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
                <div className="group relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-display absolute -top-4 left-6 rounded-full bg-gradient-to-r from-navy-950 to-navy-800 px-5 py-2.5 text-sm font-bold text-gold-400 shadow-lg">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}

      <ParallaxShowcase
        src="https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=2400&auto=format&fit=crop"
        alt="Aerial view over Palm Jumeirah and Atlantis"
        kicker="Wherever you're buying"
        line="One brokerage for every kind of Dubai property finance."
      />

      {/* CTA */}
      <section className="py-20">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
              Not sure which desk you need?
            </h2>
            <p className="mt-4 text-navy-500">
              Most files touch more than one — a non-resident buying a second unit
              off a rental portfolio, for example. Send us the outline and we&apos;ll
              map the structure.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <ButtonLink href="/rates" variant="primary">
                See eligibility rules
              </ButtonLink>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-navy-700 underline decoration-royal-400 underline-offset-4 hover:text-navy-950"
              >
                How the process works
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
