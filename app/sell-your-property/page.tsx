import type { Metadata } from "next";
import Link from "next/link";
import ValuationForm from "./ValuationForm";

const serif = { fontFamily: "var(--serif)" };
const sans = { fontFamily: "var(--sans)" };
const PATH = "/sell-your-property/";

export const metadata: Metadata = {
  title: "Sell or Manage Your Property in South Bangalore | Free Valuation",
  description:
    "Sell your flat, house or site in Jayanagar, JP Nagar or Basavanagudi, or have it managed while you live abroad. Free valuation from agents here since 1990.",
  alternates: { canonical: PATH },
};

const services = [
  ["Sell your property", "We price it from real recent sales, check your papers, bring verified buyers and handle the deal through to registration."],
  ["Rent and manage it", "We find a verified tenant, collect rent into your account, handle repairs and send you regular updates."],
  ["Look after a vacant home", "Regular visits, cleaning, bills, tax payments and photo reports, so a locked house stays safe and in good shape."],
];

const steps = [
  ["01", "Free valuation", "Send us the details. We give you a realistic price range, based on what similar homes nearby actually sold for."],
  ["02", "Papers check", "We review khata, EC and tax records early, so nothing delays the sale later."],
  ["03", "Verified buyers", "We show the property only to serious, checked buyers. You are not disturbed by time-wasters."],
  ["04", "Sale to registration", "Agreement, payments, TDS paperwork and registration are handled with you, or with your Power of Attorney holder if you are abroad."],
];

const faqs = [
  { q: "What does a valuation cost?", a: "Nothing. The valuation is free and you are under no obligation to list with us." },
  { q: "I live abroad. Can I sell without travelling to India?", a: "Yes. You can appoint a trusted person through a Power of Attorney signed at the Indian consulate. We coordinate the papers, the buyer and the registration, and work with your CA on TDS and sending the money abroad." },
  { q: "What do you charge to sell?", a: "A brokerage fee agreed in writing before we start, payable only when the sale is completed. There are no upfront charges." },
  { q: "Which areas do you cover?", a: "Jayanagar, JP Nagar, Basavanagudi, Banashankari and nearby parts of South Bangalore, where we have worked since 1990." },
  { q: "My house is locked and empty. Can you look after it?", a: "Yes. We visit regularly, arrange cleaning and repairs, pay bills and property tax, and send photo reports. If you later decide to rent or sell, we handle that too." },
];

const btn = { ...sans, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" as const, fontWeight: 700 };

export default function SellPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="border-b border-[#DDD8CE]" style={{ background: "#EDE8DF" }}>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-wide mb-4">For Property Owners & NRIs</p>
            <h1 className="mb-5 leading-[1.05]" style={{ ...serif, fontSize: "clamp(38px, 5.5vw, 66px)", color: "#1A1410", fontWeight: 300 }}>
              Sell or manage your property,{" "}
              <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>without the worry</em>
            </h1>
            <p className="mb-8" style={{ ...sans, color: "#7A6F60", fontSize: 16, lineHeight: 1.9 }}>
              Whether you live in Bangalore or abroad, we sell, rent out and look after homes in
              Jayanagar, JP Nagar, Basavanagudi and Banashankari. One trusted local team since 1990,
              rated 4.9 on Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`https://wa.me/919845012548?text=${encodeURIComponent("Hi Vani Estates, I'd like to discuss selling or managing my property.")}`} target="_blank" className="text-center bg-[#25D366] text-white px-9 py-4 hover:bg-[#1da851] transition" style={btn}>
                WhatsApp Us
              </a>
              <a href="tel:+919845012548" className="text-center border border-[#C9A055] text-[#C9A055] px-9 py-4 hover:bg-[#C9A055] hover:text-white transition" style={btn}>
                +91 98450 12548
              </a>
            </div>
          </div>
          <ValuationForm />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="mb-8" style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 400 }}>How we can help</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map(([t, d]) => (
            <div key={t} className="bg-white border border-[#DDD8CE] p-7">
              <h3 className="mb-2" style={{ ...serif, fontSize: 24, color: "#1A1410", fontWeight: 600 }}>{t}</h3>
              <p style={{ ...sans, color: "#7A6F60", fontSize: 15, lineHeight: 1.8 }}>{d}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-8" style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 400 }}>How selling works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map(([n, t, d]) => (
            <div key={n} className="bg-white border border-[#DDD8CE] p-6">
              <div className="mb-2" style={{ ...serif, fontSize: 30, color: "#C9A055" }}>{n}</div>
              <h3 className="mb-2" style={{ ...serif, fontSize: 21, color: "#1A1410", fontWeight: 600 }}>{t}</h3>
              <p style={{ ...sans, color: "#7A6F60", fontSize: 14, lineHeight: 1.75 }}>{d}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-center" style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 400 }}>Questions owners ask</h2>
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-[#DDD8CE] py-5">
              <h3 className="mb-2" style={{ ...serif, fontSize: 22, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
              <p style={{ ...sans, color: "#5A4F40", fontSize: 15, lineHeight: 1.8 }}>{f.a}</p>
            </div>
          ))}
          <p className="mt-8 text-center text-[14px]" style={{ ...sans, color: "#7A6F60", lineHeight: 1.8 }}>
            More for owners: <Link href="/property-management/" className="text-[#C9A055] hover:underline">property management</Link>,{" "}
            <Link href="/rent-out-your-property/" className="text-[#C9A055] hover:underline">renting out your home</Link> and{" "}
            <Link href="/nri/" className="text-[#C9A055] hover:underline">NRI services</Link>.
            <br />Vani Estates, #14, 9th Main Road, 3rd Block Jayanagar. RERA PRM/KA/RERA/1251/310/AG/250523/005790.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />
    </div>
  );
}
