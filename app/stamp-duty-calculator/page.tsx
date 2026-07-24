import type { Metadata } from "next";
import Link from "next/link";
import StampDutyCalc from "./StampDutyCalc";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Stamp Duty & Registration Calculator — Karnataka / Bangalore (2026)",
  description:
    "Free Karnataka stamp duty and registration charges calculator for buying property in Bangalore. Estimate stamp duty, cess, surcharge and registration on your flat or plot in seconds.",
  alternates: { canonical: "/stamp-duty-calculator/" },
  openGraph: {
    title: "Stamp Duty & Registration Calculator — Karnataka / Bangalore",
    description:
      "Estimate stamp duty + registration charges on a Bangalore property purchase in seconds.",
  },
};

export default function StampDutyCalculatorPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="eyebrow eyebrow-wide mb-4">Free Tool</p>
        <h1 className="mb-4 leading-[1.05]" style={{ ...serif, fontSize: "clamp(36px, 5vw, 56px)", color: "#1A1410", fontWeight: 300 }}>
          Stamp Duty &amp;{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>Registration</em>{" "}
          Calculator
        </h1>
        <p className="mb-10 max-w-2xl" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
          Buying property in Bangalore? Stamp duty and registration are a real cost on top of the
          price — usually 6–7% in Karnataka. Estimate yours in seconds.
        </p>

        <StampDutyCalc />

        {/* Explainer */}
        <div className="mt-14 space-y-7 text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>How stamp duty works in Karnataka</h2>
            <p>
              Stamp duty is a state tax you pay to register a property in your name. In Karnataka it&apos;s
              tiered by property value: <strong>2%</strong> up to ₹20 lakh, <strong>3%</strong> for ₹20–45
              lakh, and <strong>5%</strong> above ₹45 lakh — plus a cess and surcharge, and a separate
              <strong> 1% registration</strong> charge. For most city purchases the all-in figure lands
              around 6.6–6.7% of the property value.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Guidance value matters</h2>
            <p>
              Duty is charged on the higher of your purchase price or the government&apos;s
              <strong> guidance value</strong> for that area — so the exact figure can differ from a
              simple percentage. We confirm the precise number for your specific property.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Budget for the full cost of buying</h2>
            <p>
              Beyond stamp duty and registration, plan for your down payment (typically 20%), and
              interiors and moving. Our{" "}
              <Link href="/blog/home-loan-guide-homebuyers-bangalore-eligibility-documents-process-nri-2026/" className="text-[#C9A055] hover:underline">home loan guide</Link>{" "}
              and{" "}
              <Link href="/blog/first-time-home-buyers-guide-south-bangalore-2026-budget-home-loan-documents-registration/" className="text-[#C9A055] hover:underline">first-time buyer&apos;s guide</Link>{" "}
              walk through the whole budget. Use the <strong>EMI Calc</strong> button (bottom of every page) to size the loan.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center p-10 border border-[#DDD8CE] bg-white">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Want the exact number for your property?
          </h2>
          <p className="max-w-xl mx-auto mb-6" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            Tell us the property and we&apos;ll confirm the precise stamp duty, registration and total
            cost — free, no obligation.
          </p>
          <a
            href="https://wa.me/919845012548?text=Hi%20Vani%20Estates%20%E2%80%94%20please%20help%20me%20calculate%20the%20exact%20stamp%20duty%20%26%20registration%20for%20a%20property."
            target="_blank"
            className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}
