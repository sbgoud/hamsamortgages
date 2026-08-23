import type { Metadata } from "next";
import Image from "next/image";
import {
  IconCheck,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "@/components/icons";
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
      <section className="border-b border-navy-100 bg-white">
        <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeading
            kicker="About Hamsa"
            title="The swan: calm on the surface, powerful underneath"
            lede="Hamsa — the swan — glides through water while paddling furiously below. That's our model of good brokerage: a calm, clear experience for you, relentless work behind the scenes. Based in GV8, DIFC, we arrange mortgages for residents and global investors across the UAE's full banking market."
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
              alt="Advisors reviewing mortgage documents with a client"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-navy-100 bg-white p-7"
              >
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-500">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-y border-navy-100 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="The advisory team"
            title="People who signed credit approvals"
            lede="Multilingual, ex-bank, and measured on your outcome — not bank commissions."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <article
                key={member.role}
                className="group overflow-hidden rounded-2xl border border-navy-100 bg-mist-50"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.role}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-navy-950">
                    {member.role}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                    {member.bio}
                  </p>
                  <p className="mt-3 text-xs font-bold tracking-wide text-royal-600 uppercase">
                    {member.languages}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                kicker="Contact"
                title="Talk to an advisor"
                lede="Call, message or walk in — Gate Village is a five-minute walk from DIFC Metro."
              />
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-colors hover:border-royal-400"
                  >
                    <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-royal-600" />
                    <span>
                      <span className="block text-sm font-bold text-navy-950">
                        {site.address}
                      </span>
                      <span className="mt-0.5 block text-sm text-navy-500 group-hover:text-royal-600">
                        Open in Maps →
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-colors hover:border-royal-400"
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
                    className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-colors hover:border-royal-400"
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
                    className="flex items-center gap-4 rounded-2xl border border-[#1faa53]/30 bg-[#1faa53]/5 p-5 transition-colors hover:border-[#1faa53]"
                  >
                    <IconWhatsApp className="h-5 w-5 shrink-0 text-[#1faa53]" />
                    <span className="text-sm font-bold text-navy-950">
                      WhatsApp — fastest response
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="mt-8 space-y-2.5">
                {[
                  "Sun–Thu 9:00–18:00 GST",
                  "Remote onboarding for overseas clients",
                  "English, Arabic, Hindi, Russian & French",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-navy-600">
                    <IconCheck className="h-4 w-4 shrink-0 text-royal-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-mist-50 p-6 shadow-lg sm:p-8">
              <h3 className="font-display text-xl font-semibold text-navy-950">
                Request a callback
              </h3>
              <p className="mt-1 mb-6 text-sm text-navy-500">
                One advisor, one conversation — within one business day.
              </p>
              <LeadForm compact />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
