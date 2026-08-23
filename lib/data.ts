export const BANKS = [
  "Emirates NBD",
  "First Abu Dhabi Bank",
  "Dubai Islamic Bank",
  "ADCB",
  "Mashreq",
  "Emirates Islamic",
  "RAKBANK",
  "CBD",
  "HSBC",
  "Standard Chartered",
  "Abu Dhabi Islamic Bank",
  "Emirates NBD Securities",
  "Doha Bank",
  "Deyaar Finance",
  "Amlak Finance",
] as const;

export const SEGMENTS = [
  {
    id: "salaried",
    title: "Salaried",
    blurb:
      "Employed in the UAE with a monthly salary from AED 15,000. Most banks lend up to 20× your monthly income.",
    points: ["Minimum salary AED 15K", "Up to 80% LTV", "Tenure up to 25 years"],
  },
  {
    id: "self-employed",
    title: "Self-Employed",
    blurb:
      "Business owners and freelancers. Banks assess your last year's audited or banked profit — from AED 25,000/month.",
    points: ["Min. profit AED 25K/month", "Age up to 70", "2+ years trading"],
  },
  {
    id: "non-resident",
    title: "Non-Resident",
    blurb:
      "Investing from abroad. Select banks finance 50–60% LTV against a track record of income and balances.",
    points: ["50–60% LTV", "AED 25K/mo income proof", "Remote process"],
  },
  {
    id: "buyout",
    title: "Buyout & Refinance",
    blurb:
      "Shift your mortgage to a better rate, release equity, or restructure — even mid-tenure, with settlement rules on your side.",
    points: ["Rates from EIBOR + 1%", "Equity release up to 60%", "1% fee cap: AED 10K"],
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Whole-of-market access",
    body: "We compare the entire UAE lending market — 15+ banks and finance houses — and negotiate on your behalf, at no cost to you.",
  },
  {
    title: "Advisors who sat on the other side",
    body: "Our team is built from ex-bankers who approved mortgages for a living. They know every policy exception and every pitfall.",
  },
  {
    title: "Fees before feelings",
    body: "Every dirham of upfront cost — DLD, registration, trustee, valuation, processing — is disclosed before you commit. No surprises at transfer.",
  },
  {
    title: "End-to-end handling",
    body: "Pre-approval to DLD transfer, we run the paperwork, chase the bank and coordinate all parties. You sign; we sprint.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Initiation",
    body: "Talk to a Hamsa advisor. We map your income, profile and goal to the best available options across the market.",
  },
  {
    title: "Preparation",
    body: "We assemble your profile and income documents into bank-ready form — Emirates ID, salary certificate, six months of statements.",
  },
  {
    title: "Pre-approval",
    body: "Banks issue a pre-approval letter stating the offered amount, rate and any conditions to fulfil.",
  },
  {
    title: "Property hunt & offer",
    body: "With buying power confirmed, we help you bid on the right property — flagging flaws, gaps and conditions that protect your risk.",
  },
  {
    title: "SPA signing",
    body: "The Sale & Purchase Agreement is completed with the seller or developer, and documents are collected for the next steps.",
  },
  {
    title: "Valuation",
    body: "You pay the bank's valuation fee; the bank inspects the property and issues its report and final offer letter.",
  },
  {
    title: "Final offer & conditions",
    body: "Any conditions from your pre-approval are fulfilled — either before the final offer is issued or immediately after.",
  },
  {
    title: "Developer NOC",
    body: "The developer issues a No Objection Certificate confirming the property is clear to transfer.",
  },
  {
    title: "DLD transfer — keys in hand",
    body: "All parties meet at the trustee office, the Dubai Land Department transfers title, and you collect the keys.",
  },
] as const;

export const PROCESS_NOTES = [
  "If the seller has an existing mortgage on the property, their bank must first settle it — allow an extra 2–3 weeks before transfer.",
  "If the seller holds an Oqood (pre-title deed) with payments pending to the developer, the sequence changes slightly — we handle that path regularly.",
];

export const RATE_CARDS = [
  {
    label: "Fixed",
    rate: "3.75%",
    suffix: "p.a. onwards",
    detail:
      "Fixed for the first 3 years, then variable (bank margin + EIBOR). Predictable payments while you settle in.",
  },
  {
    label: "Variable",
    rate: "EIBOR + 1%",
    suffix: "onwards",
    detail:
      "3-month EIBOR plus bank margin from day one. Benefits immediately when the benchmark falls.",
  },
  {
    label: "Non-resident",
    rate: "50–60%",
    suffix: "LTV",
    detail:
      "Select lenders finance overseas buyers at 50–60% LTV — exceptional profiles can reach 70%.",
  },
] as const;

export const SETTLEMENT_RULES = [
  {
    title: "Partial settlement",
    body: "Repay 15–30% of the outstanding balance per year with zero penalty — the exact limit depends on the bank.",
  },
  {
    title: "Beyond the free limit",
    body: "Amounts above the annual free limit attract a 1% settlement fee, capped at AED 10,000.",
  },
  {
    title: "Full settlement",
    body: "Clearing the entire loan early costs 1% of the outstanding amount, capped at AED 10,000, over and above your free limit.",
  },
] as const;

export const ONE_TIME_FEES = [
  { item: "Bank pre-approval fee", amount: "AED 0 – 1,000 + VAT", note: "Depends on bank" },
  { item: "Valuation fee", amount: "AED 1,500 – 3,000 + VAT", note: "Paid to the bank" },
  { item: "Processing fee", amount: "0% – 1% of loan", note: "Depends on transaction type" },
  { item: "DLD mortgage registration", amount: "0.25% of loan + AED 290", note: "Dubai Land Department" },
  { item: "Trustee office fee", amount: "AED 4,200 per unit", note: "Fixed, per transfer" },
  { item: "DLD transfer fee (purchase)", amount: "4% of price + AED 580", note: "Buyer pays" },
] as const;

export const RECURRING_FEES = [
  { item: "Monthly installment", amount: "Principal + interest", note: "Monthly" },
  { item: "Life insurance", amount: "Varies by bank & age", note: "Monthly or annual" },
  { item: "Property insurance", amount: "Varies by property", note: "Monthly or annual" },
] as const;

export const ELIGIBILITY_RULES = [
  {
    category: "Salaried",
    requirement: "Minimum salary AED 15,000/month",
    detail: "Only two banks consider AED 10,000+, with limitations.",
  },
  {
    category: "Self-employed",
    requirement: "Minimum profit AED 25,000/month",
    detail: "Measured over the last year's business cycle.",
  },
  {
    category: "Non-resident",
    requirement: "AED 25,000/month minimum credit and balance",
    detail: "Evidenced across the last 6 months of statements.",
  },
  {
    category: "Rental income only",
    requirement: "2+ units generating AED 25,000/month total",
    detail: "Financing against rental streams rather than personal income.",
  },
] as const;

export const LTV_TABLE = {
  rows: [
    { scenario: "First property, value < AED 5M", expat: "80%", national: "85%" },
    { scenario: "First property, value > AED 5M", expat: "70%", national: "75%" },
    { scenario: "Second & consecutive properties", expat: "60%", national: "65%" },
    { scenario: "Non-resident", expat: "50–60%", national: "—" },
    { scenario: "Rental-income-only", expat: "50–60%", national: "—" },
  ],
} as const;

export const AGE_RULES = [
  { group: "Salaried & non-resident", range: "21 – 65 years" },
  { group: "Self-employed", range: "21 – 70 years" },
] as const;

export const DUBAI_STATS = [
  { value: 252, prefix: "AED ", suffix: "B", decimals: 0, label: "Q1 2026 real estate transactions", note: "+31% year on year" },
  { value: 148.35, prefix: "AED ", suffix: "B", decimals: 2, label: "Foreign capital invested", note: "Continued global demand" },
  { value: 60000, prefix: "", suffix: "+", decimals: 0, label: "Transactions in Q1 2026", note: "Record market activity" },
  { value: 173, prefix: "AED ", suffix: "B", decimals: 0, label: "Total real estate investment", note: "Local & international" },
] as const;

export const VISA_TIERS = [
  {
    name: "2-Year Property Investor Visa",
    min: 0,
    rules: [
      "Sole owners qualify with no minimum property value (previous AED 750K requirement removed).",
      "Joint owners need a minimum ownership share of AED 400,000 each.",
      "Renewable every 2 years while you retain the property.",
    ],
  },
  {
    name: "10-Year Golden Visa",
    min: 2_000_000,
    rules: [
      "Invest AED 2M+ in qualifying real estate.",
      "10-year renewable residency, no sponsor required.",
      "Covers spouse and children; supports multi-property portfolios.",
    ],
  },
] as const;

export const SERVICES = [
  {
    id: "residential",
    kicker: "For living & long-term holding",
    title: "Residential Mortgages",
    blurb:
      "First home or second property — we secure the maximum LTV you qualify for and the lowest fixed rate on the market.",
    points: [
      "Up to 80% LTV under AED 5M (85% for UAE nationals)",
      "70% LTV above AED 5M; 60% on second properties",
      "First-time-buyer guidance and pre-approval in 48 hours",
      "Conventional and Islamic home finance",
    ],
  },
  {
    id: "non-resident",
    kicker: "Invest from anywhere",
    title: "Non-Resident & Foreign Investor Mortgages",
    blurb:
      "Overseas buyers are welcome in Dubai. A short document set and a remote process — no UAE residency required.",
    points: [
      "50–60% LTV (exceptional profiles to 70%)",
      "Minimum income/credit of AED 25K per month, 6-month track record",
      "Passport, 6-month bank statements and proof of income",
      "Pairs with the 2-year investor visa or 10-year Golden Visa",
    ],
  },
  {
    id: "commercial",
    kicker: "Offices, retail & buildings",
    title: "Commercial & Building Finance",
    blurb:
      "Structured finance for income-producing commercial assets and multi-unit buildings, tailored to bank appetite.",
    points: [
      "Offices, retail units and mixed-use assets",
      "Building finance with no unit-count limit",
      "Multi-unit approvals negotiated per bank policy",
      "Business financing options up to 80–100%",
    ],
  },
  {
    id: "rent-income-only",
    kicker: "Lend against the rent roll",
    title: "Rent-Income-Only / Portfolio Financing",
    blurb:
      "Your portfolio's rental stream is the qualifier — no personal income needed. Built for landlords scaling up.",
    points: [
      "Minimum 2 units renting for AED 25K/month combined",
      "50–60% LTV against portfolio value",
      "No cap on unit count — subject to bank appetite",
      "Consolidate scattered portfolios under better terms",
    ],
  },
  {
    id: "buyout",
    kicker: "Better rate, or cash out",
    title: "Mortgage Buyout, Refinancing & Equity Release",
    blurb:
      "Every UAE bank allows mid-tenure shifts. We quantify the saving after all fees — and only move you when the maths wins.",
    points: [
      "Shift to a lower rate or shorter tenure anytime",
      "Penalty-free partial settlement of 15–30% per year",
      "Early-settlement fees capped at AED 10,000",
      "Release equity up to 60% LTV for other investments",
    ],
  },
] as const;

export const FAQS = [
  {
    q: "Can non-residents get a mortgage in Dubai?",
    a: "Yes. Select banks finance non-residents at 50–60% LTV (exceptional profiles up to 70%). You'll need six months of bank statements showing at least AED 25,000/month in credits and balances, proof of income, and your passport. The entire process can run remotely with a power of attorney for transfer day.",
  },
  {
    q: "How much do I need as a down payment?",
    a: "For residents: 20% on a first property under AED 5M, 30% above AED 5M, and 40% on second properties (UAE nationals get +5%). Non-residents should plan for 40–50%. On top of that, budget roughly 7–8% of the price for DLD, registration, trustee and valuation fees — our calculator shows the exact total cash needed.",
  },
  {
    q: "What salary do I need for a mortgage?",
    a: "Salaried applicants need a minimum of AED 15,000/month (two banks accept AED 10,000 with limitations). Self-employed applicants need AED 25,000/month average profit over the last business cycle. As a rule of thumb, banks lend up to 20× your monthly income, capped at 50% of it as the installment.",
  },
  {
    q: "How long does the process take?",
    a: "Pre-approval typically takes 48 hours to one week once your documents are complete. From offer to keys, a straightforward purchase completes in 4–6 weeks. If the seller has an existing mortgage that must be settled first, add 2–3 weeks.",
  },
  {
    q: "Can I pay off my mortgage early?",
    a: "Yes — every bank allows partial settlements of 15–30% of the outstanding balance per year free of charge. Beyond that, and for full early settlement, the fee is 1% of the amount, capped at AED 10,000.",
  },
  {
    q: "Fixed or variable rate — which is better?",
    a: "Fixed rates (from 3.75% for 3 years) give payment certainty; variable rates (from EIBOR + 1%) win when the benchmark falls. Most clients fix for the first years and reassess at the reset — we model both against your cash flow before you choose.",
  },
  {
    q: "What does a mortgage broker cost me?",
    a: "Nothing. We're paid by the bank you choose, and our advice is whole-of-market — the same rate you'd get walking into the bank yourself, plus structuring, negotiation and paperwork handling you wouldn't.",
  },
] as const;

/**
 * Vetted Dubai photography (Unsplash) for parallax showcases.
 * Every URL verified reachable and visually confirmed as Dubai.
 */
export const DUBAI_GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    alt: "Downtown Dubai skyline glowing at dusk",
    caption: "Downtown at dusk",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1200&auto=format&fit=crop",
    alt: "Burj Al Arab standing on the Arabian Gulf coastline",
    caption: "Burj Al Arab",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=1400&auto=format&fit=crop",
    alt: "Aerial view over Palm Jumeirah and Atlantis",
    caption: "Palm Jumeirah",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1200&auto=format&fit=crop",
    alt: "Sheikh Zayed Road towers lit up in the evening",
    caption: "Sheikh Zayed Road",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1400&auto=format&fit=crop",
    alt: "Dubai Marina skyscrapers reflected after dark",
    caption: "Marina nights",
    tall: false,
  },
] as const;

export const TEAM = [
  {
    role: "Head of Advisory",
    bio: "18 years in UAE retail banking credit teams before crossing to the broker side. Leads complex and private-client files.",
    languages: "English, Arabic",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    role: "Senior Advisor — Residents",
    bio: "Ex-mortgage underwriter. Specialises in salaried and self-employed approvals, and first-time buyers.",
    languages: "English, Hindi, Malayalam",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    role: "Non-Resident Desk Lead",
    bio: "A decade structuring finance for overseas investors across the UK, CIS and South Asia corridors.",
    languages: "English, Russian, French",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    role: "Commercial & Portfolio Finance",
    bio: "Handles building finance, rent-income-only structures and multi-unit commercial approvals.",
    languages: "English, Arabic, French",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
] as const;
