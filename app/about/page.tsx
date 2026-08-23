import type { Metadata } from "next";
import Image from "next/image";
import {
  IconCheck,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/tools/lead-form";
import { Container, SectionHeading } from "@/components/ui";
import { TEAM } from "@/lib/data";
import {
  DEFAULT_WA_MESSAGE,
  site,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us & Contact — Ex-Banker Advisors in DIFC",
  description:
    "Hamsa Mortgages is a Dubai mortgage brokerage in DIFC built by ex-bankers. Meet the advisory team and reach us — GV8, DIFC, Dubai.",
};

const VALUES = [
  {
    title: "Ex-bankers, on your side",
    body: "Our advisors spent their careers inside bank credit teams. They know which policy exceptions exist — and how to earn them.",
  },
  {
    title: "Whole-of-market, always",
    body: "We place files across 15+ banks and finance houses, conventional and Islamic. The recommendation wins on numbers, not relationships.",
  },
  {
    title: "Global clients, one standard",
    body: "From DIFC professionals to overseas investors in London, Moscow and Mumbai — the same documented advice, in your language.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-100/40 bg-white">
        <div className="orb orb-gold absolute -top-16 right-1/3 h-48 w-48 opacity-10" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeading
            kicker="About Hamsa"
            title="The swan: calm on the surface, powerful underneath"
            lede="Hamsa — the swan — glides through water while paddling furiously below. That's our model of good brokerage: a calm, clear experience for you, relentless work behind the scenes. Based in GV8, DIFC, we arrange mortgages for residents and global investors across the UAE's full banking market."
          />
          <Reveal delay={100}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
                alt="Advisors reviewing mortgage documents with a client"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="group rounded-2xl border border-navy-100/60 bg-white p-8 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium">
                  <h3 className="font-display text-lg font-semibold text-navy-950">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-y border-navy-100/40 bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="The advisory team"
              title="People who signed credit approvals"
              lede="Multilingual, ex-bank, and measured on your outcome — not bank commissions."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.role} delay={i * 80}>
                <article className="group overflow-hidden rounded-2xl border border-navy-100/60 bg-gradient-to-b from-mist-50 to-white transition-all duration-400 hover:-translate-y-2 hover:shadow-premium">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-navy-950">
                      {member.role}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {member.bio}
                    </p>
                    <p className="mt-3 text-xs font-bold tracking-wide text-gold-500 uppercase">
                      {member.languages}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-28">
              <SectionHeading
                kicker="Contact"
                title="Talk to an advisor"
                lede="Call, message or walk in — Gate Village is a five-minute walk from DIFC Metro."
              />
              <ul className="mt-9 space-y-4">
                <li>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-2xl border border-navy-100/60 bg-white p-5 transition-all duration-300 hover:border-royal-400/60 hover:shadow-soft"
                  >
                    <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-royal-600" />
                    <span>
                      <span className="block text-sm font-bold text-navy-950">
                        {site.address}
                      </span>
                      <span className="mt-1 block text-sm text-navy-500 transition-colors group-hover:text-royal-600">
                        Open in Maps →
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-4 rounded-2xl border border-navy-100/60 bg-white p-5 transition-all duration-300 hover:border-royal-400/60 hover:shadow-soft"
                  >
                    <IconPhone className="h-5 w-5 shrink-0 text-royal-600" />
                    <span className="text-sm font-bold text-navy-950">
                      {site.phoneDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-navy-100/60 bg-white p-5 transition-all duration-300 hover:border-royal-400/60 hover:shadow-soft"
                  >
                    <IconMail className="h-5 w-5 shrink-0 text-royal-600" />
                    <span className="text-sm font-bold text-navy-950">
                      {site.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl(DEFAULT_WA_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-[#1faa53]/20 bg-[#1faa53]/5 p-5 transition-all duration-300 hover:border-[#1faa53]/50 hover:shadow-[0_4px_16px_-4px_rgba(31,170,83,0.2)]"
                  >
                    <IconWhatsApp className="h-5 w-5 shrink-0 text-[#1faa53]" />
                    <span className="text-sm font-bold text-navy-950">
                      WhatsApp — fastest response
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="mt-9 space-y-3">
                {[
                  "Sun–Thu 9:00–18:00 GST",
                  "Remote onboarding for overseas clients",
                  "English, Arabic, Hindi, Russian & French",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-navy-600">
                    <IconCheck className="h-4 w-4 shrink-0 text-gold-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-navy-100/60 bg-gradient-to-b from-mist-50 to-white p-6 shadow-premium sm:p-8">
                <h3 className="font-display text-xl font-semibold text-navy-950">
                  Request a callback
                </h3>
                <p className="mt-2 mb-7 text-sm text-navy-500">
                  One advisor, one conversation — within one business day.
                </p>
                <LeadForm compact />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
