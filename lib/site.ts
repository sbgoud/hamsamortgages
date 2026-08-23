export const site = {
  name: "Hamsa Mortgages",
  legalName: "Hamsa Mortgage Brokers",
  tagline: "Dubai mortgages, made clear",
  description:
    "Dubai-based mortgage brokerage arranging home, commercial and non-resident mortgages across 15+ UAE banks. Ex-banker advisors, transparent fees, pre-approval in as little as 48 hours.",
  url: "https://hamsamortgages.ae",
  // TODO: replace with the real phone numbers before launch
  phoneDisplay: "+971 50 000 0000",
  phoneHref: "tel:+971500000000",
  whatsappNumber: "971500000000",
  email: "hello@hamsamortgages.ae",
  address: "GV8, Gate Village, DIFC, Dubai, UAE",
  addressShort: "GV8, DIFC, Dubai",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gate+Village+8+DIFC+Dubai",
  socials: {
    linkedin: "https://www.linkedin.com/company/hamsamortgages",
    instagram: "https://www.instagram.com/hamsamortgages",
  },
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WA_MESSAGE =
  "Hi Hamsa Mortgages, I'd like to discuss my mortgage options in Dubai.";
