export type Residency = "national" | "resident" | "non-resident";
export type PropertyPosition = "first" | "second";

/** Monthly installment for an amortizing loan. */
export function emi(principal: number, annualRatePct: number, years: number) {
  const n = Math.round(years * 12);
  if (n <= 0 || principal <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / n;
  const f = Math.pow(1 + r, n);
  return (principal * r * f) / (f - 1);
}

/** Largest loan supported by a given monthly installment (inverse of emi). */
export function loanFromEmi(
  monthlyPayment: number,
  annualRatePct: number,
  years: number,
) {
  const n = Math.round(years * 12);
  if (n <= 0 || monthlyPayment <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return monthlyPayment * n;
  const f = Math.pow(1 + r, n);
  return (monthlyPayment * (f - 1)) / (r * f);
}

/**
 * Central Bank LTV rules for individuals (Dec 2025 market summary).
 * Non-residents are typically 50–60%; we use a conservative default.
 */
export function maxLtv(
  residency: Residency,
  position: PropertyPosition,
  price: number,
) {
  if (residency === "non-resident") return 0.55;
  const bonus = residency === "national" ? 0.05 : 0;
  if (position === "second") return 0.6 + bonus;
  return (price < 5_000_000 ? 0.8 : 0.7) + bonus;
}

export const FEES = {
  dldPct: 0.04,
  dldAdmin: 580,
  registrationPct: 0.0025,
  registrationAdmin: 290,
  trusteePerUnit: 4200,
  valuation: 2625, // AED 2,500 + 5% VAT (banks charge AED 1,500–3,000 + VAT)
  processingPctDefault: 0.005,
} as const;

export interface PurchaseCosts {
  downPayment: number;
  loanAmount: number;
  dld: number;
  registration: number;
  trustee: number;
  valuation: number;
  processing: number;
  totalCash: number;
}

export function purchaseCosts(
  price: number,
  ltv: number,
  units = 1,
  processingPct: number = FEES.processingPctDefault,
): PurchaseCosts {
  const downPayment = price * (1 - ltv);
  const loanAmount = price * ltv;
  const dld = price * FEES.dldPct + FEES.dldAdmin;
  const registration = loanAmount * FEES.registrationPct + FEES.registrationAdmin;
  const trustee = FEES.trusteePerUnit * Math.max(1, units);
  const processing = loanAmount * processingPct;
  const totalCash =
    downPayment + dld + registration + trustee + FEES.valuation + processing;
  return {
    downPayment,
    loanAmount,
    dld,
    registration,
    trustee,
    valuation: FEES.valuation,
    processing,
    totalCash,
  };
}

export const AED = new Intl.NumberFormat("en-AE", {
  style: "currency",
  currency: "AED",
  maximumFractionDigits: 0,
});

export const num = new Intl.NumberFormat("en-AE", {
  maximumFractionDigits: 0,
});

export function aed(value: number) {
  return AED.format(Math.round(value));
}

export function pct(value: number, digits = 2) {
  return `${(value * 100).toFixed(digits)}%`;
}
