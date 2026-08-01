import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Home Interiors in Bangalore — Design Your New Home with Vani Estates × Bonito Designs",
  description:
    "Home interiors in Bangalore with our partner Bonito Designs — personalised, celebrity-inspired designs with exclusive offers for Vani Estates clients.",
  alternates: { canonical: "/interiors/" },
  openGraph: {
    title: "Home Interiors in Bangalore — Vani Estates × Bonito Designs",
    description:
      "Personalised, celebrity-inspired interiors with exclusive offers. One team from finding your home to furnishing it.",
  },
};

const steps = [
  ["01", "Book a free design consult", "Tell us about your new home and your style. We connect you with our design partner and set up a personalised consultation."],
  ["02", "Personalised 3D design", "See your home before it's built — personalised, celebrity-inspired designs tailored to your space, taste and budget."],
  ["03", "Transparent quote & offers", "A clear, itemised quote — with the exclusive offers available to Vani Estates clients."],
  ["04", "Execution & handover", "Professional execution with warranties, so you move into a finished home — not a project."],
];

const faqs = [
  {
    q: "Who designs the interiors?",
    a: "Interiors are delivered by our design partner, Bonito Designs — a well-known home interiors brand. Vani Estates coordinates the introduction and the exclusive offers, so you get one trusted point of contact from buying your home to furnishing it.",
  },
  {
    q: "Do I have to buy my home through you to get interiors?",
    a: "No — we're happy to help with interiors whether or not you bought the property through us. But if you did buy through Vani Estates, it's a seamless, single-team experience from purchase to move-in.",
  },
  {
    q: "What kind of designs are available?",
    a: "Personalised, made-to-your-space designs across styles — from minimal and modern to premium, celebrity-inspired homes — for full-home interiors or specific spaces like modular kitchens and wardrobes.",
  },
  {
    q: "Are there offers for Vani Estates clients?",
    a: "Yes — as a partner, we can extend exclusive offers to our clients. Message us and we'll share what's currently available.",
  },
];

export default function InteriorsPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="text-center px-6 py-24 border-b border-[#DDD8CE]" style={{ background: "#EDE8DF" }}>
        <p className="eyebrow eyebrow-wide mb-4">Interiors · with Bonito Designs</p>
        <h1 className="mb-5 leading-[1.05] mx-auto max-w-4xl" style={{ ...serif, fontSize: "clamp(38px, 6vw, 72px)", color: "#1A1410", fontWeight: 300 }}>
          Now design the{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>home you just bought</em>
        </h1>
        <p className="max-w-2xl mx-auto mb-9" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 17, lineHeight: 1.9 }}>
          In partnership with <strong style={{ color: "#1A1410" }}>Bonito Designs</strong>, we bring you
          personalised, celebrity-inspired home interiors — with exclusive offers for Vani Estates
          clients. One team, from finding your home to furnishing it.
        </p>
        <a
          href={`https://wa.me/919845012548?text=${encodeURIComponent("Hi Vani Estates — I'd like a free interiors design consultation (Bonito Designs). Here are my details: ")}`}
          target="_blank"
          className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
          style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
        >
          Book a Free Design Consult
        </a>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* The end-to-end pitch */}
        <div className="mb-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="eyebrow mb-4">One Team, Start to Finish</div>
            <h2 className="mb-6 leading-tight" style={{ ...serif, fontSize: "clamp(30px, 4vw, 44px)", color: "#1A1410", fontWeight: 400 }}>
              Find it. Finance it.{" "}
              <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>Furnish it.</em>
            </h2>
            <div className="space-y-5 text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
              <p>
                Buying a home is only half the journey — turning it into a place you love is the other
                half. Most buyers then start from scratch, chasing designers and contractors.
              </p>
              <p>
                With Vani Estates, it&apos;s one seamless experience: we help you{" "}
                <Link href="/properties/" className="text-[#C9A055] hover:underline">buy</Link> or pick a{" "}
                <Link href="/projects/" className="text-[#C9A055] hover:underline">new project</Link>,
                arrange your{" "}
                <Link href="/home-loans/" className="text-[#C9A055] hover:underline">home loan</Link>, and
                then design the interiors through our partner Bonito Designs — with exclusive offers.
                You move into a finished home, not a to-do list.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Personalised", "Made to your space, taste and budget"],
              ["Celebrity-inspired", "Premium, aspirational design language"],
              ["Exclusive offers", "Special pricing for Vani Estates clients"],
              ["Warranties", "Professional execution, backed and finished"],
            ].map(([t, d]) => (
              <div key={t} className="bg-white border border-[#DDD8CE] p-6">
                <h3 className="text-lg mb-2" style={{ ...serif, color: "#C9A055", fontWeight: 600 }}>{t}</h3>
                <p className="text-[13px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.7 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">How It Works</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>From empty flat to dream home</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(([n, t, d]) => (
              <div key={n} className="bg-white border border-[#DDD8CE] p-7">
                <div className="mb-3" style={{ ...serif, fontSize: 40, color: "#C9A055", fontWeight: 700, lineHeight: 1, opacity: 0.55 }}>{n}</div>
                <h3 className="text-lg mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{t}</h3>
                <p className="text-[13px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.7 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Common Questions</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Frequently asked</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 border border-[#DDD8CE] bg-white">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Planning your new home interiors?
          </h2>
          <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            Get a free design consultation with our partner Bonito Designs and see what&apos;s possible
            for your space — with offers only Vani Estates clients get.
          </p>
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent("Hi Vani Estates — I'd like a free interiors design consultation (Bonito Designs).")}`}
            target="_blank"
            className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            WhatsApp Us
          </a>
          <p className="mt-6 text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
            Interior design services delivered by our partner Bonito Designs; designs, pricing and
            warranties per their terms.
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Home Interior Design",
            provider: { "@type": "RealEstateAgent", name: "Vani Estates", telephone: "+919845012548" },
            areaServed: "Bangalore",
            url: "https://www.vaniestates.com/interiors/",
          }),
        }}
      />
    </div>
  );
}
