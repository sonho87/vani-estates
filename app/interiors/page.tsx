import type { Metadata } from "next";
import Link from "next/link";
import { interiorServices, INTERIORS_UPDATED } from "@/lib/interiors";
import InteriorsForm from "./InteriorsForm";

const serif = { fontFamily: "var(--serif)" };
const sans = { fontFamily: "var(--sans)" };
const BASE = "https://www.vaniestates.com";

export const metadata: Metadata = {
  title: "Interior Designers in Bangalore | Home Interiors for New & Old Flats",
  description:
    "Interior design in Bangalore for new flats, old flat renovation, villas and offices. 2026 cost guide, free 3D design consult and site measure. WhatsApp 98450 12548.",
  alternates: { canonical: "/interiors/" },
  openGraph: {
    title: "Interior Designers in Bangalore | Vani Estates",
    description: "New flats, old flat renovation, villas and offices. Free design consult and an honest cost guide.",
  },
};

const costSummary = [
  ["1 BHK", "₹2.5 to 4 lakh", "₹4 to 7 lakh"],
  ["2 BHK", "₹3.5 to 6 lakh", "₹6 to 10 lakh"],
  ["3 BHK", "₹5 to 8 lakh", "₹9 to 15 lakh"],
  ["Villa (3 to 4 BHK)", "₹12 to 20 lakh", "₹20 to 40 lakh"],
];

const steps = [
  ["01", "Free consult", "Tell us about your home, budget and style on WhatsApp or a call. We set up a meeting with the designer."],
  ["02", "Site measure and 3D design", "Your home is measured and you see a 3D design of each room before anything is made."],
  ["03", "Clear itemised quote", "Room by room, item by item, so you know exactly what you pay for and can phase the work."],
  ["04", "Factory-made, installed on site", "Modular furniture is made in a factory to your measurements, then installed and finished on site."],
];

const faqs = [
  { q: "How much does interior design cost in Bangalore?", a: "In 2026 most homes cost about ₹3.5 to 6 lakh for a 2 BHK with kitchen, wardrobes and TV unit, ₹6 to 10 lakh for a full 2 BHK, and ₹9 to 15 lakh for a full 3 BHK. Premium finishes cost more. The quote is confirmed after a free site measurement." },
  { q: "Do you do interiors for old flats and resale homes?", a: "Yes. Renovation of older flats and houses is a large part of our work in South Bangalore, including rewiring, bathrooms, kitchens, flooring and storage." },
  { q: "Which areas do you cover?", a: "All of Bangalore. We are based in Jayanagar and work across South Bangalore, Sarjapur Road, Whitefield, Hebbal, North Bangalore and nearby areas." },
  { q: "Do I need to buy my home through Vani Estates?", a: "No. Anyone can book a free consult. If you did buy through us, we can plan the interiors alongside the purchase and home loan." },
  { q: "Who designs and builds the interiors?", a: "Design and execution are delivered by our interiors partner, Bonito Designs, with warranties on their terms. Vani Estates arranges the consult, stays your point of contact and passes on partner offers." },
  { q: "How long do home interiors take?", a: "Usually 45 to 75 days from design sign-off, depending on the size of the home and the scope of work." },
];

export default function InteriorsPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="px-6 py-16 md:py-20 border-b border-[#DDD8CE]" style={{ background: "#EDE8DF" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-wide mb-4">Home interiors · Bangalore</p>
            <h1 className="mb-6 leading-[1.05]" style={{ ...serif, fontSize: "clamp(36px, 5.5vw, 64px)", color: "#1A1410", fontWeight: 300 }}>
              Interior design for{" "}
              <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>new flats, old homes</em>{" "}
              and everything in between
            </h1>
            <p className="mb-4 text-[17px]" style={{ ...sans, color: "#5A4F40", lineHeight: 1.85 }}>
              Just got the keys to a new flat? Living in a 20-year-old home that needs a new kitchen and bathrooms?
              Furnishing a flat to rent out? We arrange the full job with our design partner: free consult,
              3D design, a clear quote and factory-made furniture, with one point of contact.
            </p>
            <p className="text-[15px]" style={{ ...sans, color: "#7A6F60", lineHeight: 1.8 }}>
              Vani Estates has helped families in South Bangalore buy, sell and look after homes since 1990.
              Interiors is the natural next step, and we bring the same honest advice to it.
            </p>
          </div>
          <InteriorsForm source="interiors-hub" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <section>
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">What are you working on?</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Interiors for every kind of property</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interiorServices.map((s: any) => (
              <Link key={s.slug} href={`/interiors/${s.slug}/`} className="bg-white border border-[#DDD8CE] p-6 hover:border-[#C9A055] transition block">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{s.short}</h3>
                <p className="text-[13px] mb-3" style={{ ...sans, color: "#7A6F60", lineHeight: 1.7 }}>{s.costRows[0][1]} onwards</p>
                <span className="text-[12px]" style={{ ...sans, color: "#C9A055", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>See costs →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="eyebrow mb-3">Cost guide</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>How much do interiors cost in Bangalore?</h2>
          </div>
          <div className="bg-white border border-[#DDD8CE] overflow-x-auto">
            <table className="w-full text-left" style={sans}>
              <thead>
                <tr className="border-b border-[#DDD8CE]" style={{ color: "#7A6F60", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase" }}>
                  <th className="px-5 py-4">Home</th>
                  <th className="px-5 py-4">Essentials (kitchen, wardrobes, TV unit)</th>
                  <th className="px-5 py-4">Full home</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD8CE]" style={{ color: "#1A1410", fontSize: 15 }}>
                {costSummary.map(([h, e, f]) => (
                  <tr key={h}>
                    <td className="px-5 py-4 font-semibold">{h}</td>
                    <td className="px-5 py-4">{e}</td>
                    <td className="px-5 py-4">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12px]" style={{ ...sans, color: "#7A6F60" }}>
            Indicative ranges as of {INTERIORS_UPDATED}. Premium finishes cost more. Read the full{" "}
            <Link href="/blog/interior-design-cost-in-bangalore-2026-1-bhk-2-bhk-3-bhk-price-guide/" className="text-[#C9A055] hover:underline">interior design cost guide</Link>.
          </p>
        </section>

        <section>
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">How it works</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>From empty flat to finished home</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(([n, t, d]) => (
              <div key={n} className="bg-white border border-[#DDD8CE] p-7">
                <div className="mb-3" style={{ ...serif, fontSize: 40, color: "#C9A055", fontWeight: 700, lineHeight: 1, opacity: 0.55 }}>{n}</div>
                <h3 className="text-lg mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{t}</h3>
                <p className="text-[13px]" style={{ ...sans, color: "#7A6F60", lineHeight: 1.7 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">One team, start to finish</div>
            <h2 className="mb-6 leading-tight" style={{ ...serif, fontSize: "clamp(30px, 4vw, 44px)", color: "#1A1410", fontWeight: 400 }}>
              Find it. Finance it. <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>Furnish it.</em>
            </h2>
            <p className="text-[15px]" style={{ ...sans, color: "#5A4F40", lineHeight: 1.85 }}>
              We help you <Link href="/properties/" className="text-[#C9A055] hover:underline">buy a home</Link> or a{" "}
              <Link href="/projects/" className="text-[#C9A055] hover:underline">new project</Link>, arrange the{" "}
              <Link href="/home-loans/" className="text-[#C9A055] hover:underline">home loan</Link>, plan the interiors, and later{" "}
              <Link href="/property-management/" className="text-[#C9A055] hover:underline">manage</Link> or{" "}
              <Link href="/sell-your-property/" className="text-[#C9A055] hover:underline">sell</Link> it. Owners abroad get photo and
              video updates at every stage.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["3D design first", "See every room before it is made"],
              ["Itemised quotes", "Room by room, no surprises"],
              ["Factory finish", "Modular units made to measure"],
              ["Warranties", "On partner terms, in writing"],
            ].map(([t, d]) => (
              <div key={t} className="bg-white border border-[#DDD8CE] p-6">
                <h3 className="text-lg mb-2" style={{ ...serif, color: "#C9A055", fontWeight: 600 }}>{t}</h3>
                <p className="text-[13px]" style={{ ...sans, color: "#7A6F60", lineHeight: 1.7 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">Common questions</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Frequently asked</h2>
          </div>
          <div className="divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
                <p className="text-[15px]" style={{ ...sans, color: "#5A4F40", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Guides</h2>
          <ul className="space-y-2 text-[15px]" style={sans}>
            <li><Link href="/blog/interior-design-cost-in-bangalore-2026-1-bhk-2-bhk-3-bhk-price-guide/" className="text-[#C9A055] hover:underline">Interior design cost in Bangalore 2026: 1, 2 and 3 BHK price guide</Link></li>
            <li><Link href="/blog/old-flat-renovation-bangalore-cost-checklist-what-to-fix-first/" className="text-[#C9A055] hover:underline">Old flat renovation in Bangalore: cost and what to fix first</Link></li>
            <li><Link href="/blog/new-flat-handover-checklist-bangalore-before-you-start-interiors/" className="text-[#C9A055] hover:underline">New flat handover checklist before you start interiors</Link></li>
          </ul>
        </section>

        <p className="text-center text-[11px]" style={{ ...sans, color: "#7A6F60" }}>
          Interior design and execution are delivered by our partner Bonito Designs. Designs, final pricing and warranties are as per their terms.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Home interior design in Bangalore",
              serviceType: "Interior design",
              url: `${BASE}/interiors/`,
              areaServed: { "@type": "City", name: "Bengaluru" },
              provider: { "@type": "RealEstateAgent", name: "Vani Estates", telephone: "+919845012548", url: BASE },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Interior design services",
                itemListElement: interiorServices.map((s: any) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: s.h1, url: `${BASE}/interiors/${s.slug}/` },
                })),
              },
            },
          ]),
        }}
      />
    </div>
  );
}
