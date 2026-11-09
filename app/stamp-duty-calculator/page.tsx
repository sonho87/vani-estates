import type { Metadata } from "next";
import Link from "next/link";
import StampDutyCalc from "./StampDutyCalc";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Stamp Duty in Bangalore 2026: Calculator, Rates & Examples",
  description:
    "Karnataka stamp duty and registration charges 2026: 2%, 3% and 5% slabs, cess, surcharge and 1% registration, with worked examples for ₹40 lakh to ₹2 crore homes.",
  alternates: { canonical: "/stamp-duty-calculator/" },
  openGraph: {
    title: "Stamp Duty & Registration Calculator — Karnataka / Bangalore",
    description:
      "Estimate stamp duty + registration charges on a Bangalore property purchase in seconds.",
  },
};

const faqs = [
  { q: "What is the stamp duty in Bangalore in 2026?", a: "In Karnataka, stamp duty is 2% for property up to ₹20 lakh, 3% from ₹20 to 45 lakh and 5% above ₹45 lakh. A 10% cess and a 2% surcharge (on the duty) are added in Bangalore city, plus 1% registration. For most homes the total comes to about 6.6% of the value." },
  { q: "How much stamp duty do I pay on a ₹1 crore flat in Bangalore?", a: "About ₹6.6 lakh in total: ₹5 lakh stamp duty, ₹50,000 cess, ₹10,000 surcharge and ₹1 lakh registration. Duty is charged on the higher of the sale price and the guidance value." },
  { q: "Is stamp duty charged on guidance value or the sale price?", a: "On whichever is higher. In established areas like Jayanagar and JP Nagar the market price is usually above guidance value, so duty is worked out on the agreed price." },
  { q: "Do women get a stamp duty concession in Karnataka?", a: "Karnataka does not currently offer a general stamp duty concession for women buyers, unlike some other states. Check the latest notification before registration, as rules can change." },
  { q: "Can I get a tax deduction on stamp duty?", a: "Yes. Stamp duty and registration paid on a residential property can be claimed under Section 80C of the Income Tax Act, within the overall ₹1.5 lakh limit, in the year you pay it, if you use the old tax regime." },
];

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

        {/* Worked examples */}
        <div className="mt-14">
          <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Stamp duty examples for Bangalore homes</h2>
          <div className="overflow-x-auto bg-white border border-[#DDD8CE]">
            <table className="w-full text-sm" style={{ fontFamily: "var(--sans)", color: "#1A1410" }}>
              <thead><tr className="text-left" style={{ background: "#EDE8DF" }}>
                {["Property value", "Stamp duty", "Cess + surcharge", "Registration", "Total"].map((h) => <th key={h} className="p-3 font-semibold">{h}</th>)}
              </tr></thead>
              <tbody>
                {[["₹40 lakh", "₹1,20,000 (3%)", "₹14,400", "₹40,000", "₹1,74,400"],
                  ["₹75 lakh", "₹3,75,000 (5%)", "₹45,000", "₹75,000", "₹4,95,000"],
                  ["₹1 crore", "₹5,00,000 (5%)", "₹60,000", "₹1,00,000", "₹6,60,000"],
                  ["₹2 crore", "₹10,00,000 (5%)", "₹1,20,000", "₹2,00,000", "₹13,20,000"]].map((r) => (
                  <tr key={r[0]} className="border-t border-[#DDD8CE]">{r.map((c, i) => <td key={i} className={"p-3" + (i === 4 ? " font-semibold" : "")}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
            Bangalore city rates (2% surcharge). Duty is charged on the higher of the sale price and guidance value. See our guide to <Link href="/blog/guidance-value-bangalore-2026-how-to-check-kaveri-why-it-matters/" className="text-[#C9A055] hover:underline">checking guidance value on Kaveri</Link>.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Stamp duty questions</h2>
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-[#DDD8CE] py-4">
              <h3 className="mb-1" style={{ ...serif, fontSize: 20, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
              <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>{f.a}</p>
            </div>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

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
