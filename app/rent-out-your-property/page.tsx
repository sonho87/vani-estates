import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Rent Out Your Property in Bangalore — Fully Managed, Hassle-Free",
  description:
    "Rent out your Bangalore flat without the hassle — verified tenants, agreements, rent collection and maintenance, fully managed. Ideal for busy owners and NRIs.",
  alternates: { canonical: "/rent-out-your-property/" },
  openGraph: {
    title: "Rent Out Your Property in Bangalore — Fully Managed by Vani Estates",
    description:
      "Save your time, not just your brokerage. We find verified tenants and manage everything — rent, agreements, maintenance. Perfect for busy owners and NRIs.",
  },
};

const steps = [
  ["01", "Tell us about your property", "Share the flat's location, size and expected rent on WhatsApp. We'll benchmark the right rent so it doesn't sit vacant."],
  ["02", "We find & screen tenants", "Advertising, shortlisting, background and reference checks — only genuine, verified tenants reach your doorstep."],
  ["03", "Agreement & handover", "A registered rental agreement, police verification, security deposit and a documented condition report at move-in."],
  ["04", "We manage it for you", "Rent collection to your account, maintenance coordination, inspections with photo reports, and dues tracked — every month."],
];

const faqs = [
  {
    q: "Why use Vani Estates when NoBroker is free?",
    a: "NoBroker helps you save one month's brokerage — and then you spend the next eleven months chasing rent, screening tenants, drafting agreements and fixing taps yourself. We're not just a broker who finds a tenant and vanishes; we manage the whole tenancy so your property runs itself. For busy professionals and NRIs, the time and peace of mind are worth far more than the brokerage saved.",
  },
  {
    q: "Do you handle NRI-owned properties?",
    a: "Yes — this is one of our core services. We manage flats for owners across the US, UK, Gulf and Singapore: tenant sourcing, rent collected to your NRO account with statements, TDS handled correctly, inspections with photo reports, and maintenance. You get updates on WhatsApp and never have to fly down.",
  },
  {
    q: "What does it cost?",
    a: "Tenant-finding and property management fees are agreed upfront in a simple written agreement — transparent, with no hidden charges. The exact fee depends on the property and the scope of management you want. Message us and we'll share the plan.",
  },
  {
    q: "Which areas do you cover?",
    a: "Jayanagar, JP Nagar, Banashankari, Basavanagudi and surrounding South Bangalore — the neighbourhoods we've worked in for over 35 years, so we know the right rent and the right tenants.",
  },
];

export default function RentOutPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      {/* Hero */}
      <section className="text-center px-6 py-24 border-b border-[#DDD8CE]" style={{ background: "#EDE8DF" }}>
        <p className="eyebrow eyebrow-wide mb-4">For Property Owners</p>
        <h1 className="mb-5 leading-[1.05] mx-auto max-w-4xl" style={{ ...serif, fontSize: "clamp(40px, 6vw, 74px)", color: "#1A1410", fontWeight: 300 }}>
          Rent out your flat.{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>Skip the hassle.</em>
        </h1>
        <p className="max-w-2xl mx-auto mb-9" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 17, lineHeight: 1.9 }}>
          We find verified tenants and manage the whole tenancy — rent, agreements, maintenance —
          so your Bangalore property runs itself. Perfect for busy owners and NRIs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent("Hi Vani Estates — I'd like to rent out my property. Here are the details: ")}`}
            target="_blank"
            className="inline-block bg-[#25D366] text-white px-10 py-4 hover:bg-[#1da851] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            List My Property
          </a>
          <a
            href="tel:+919845012548"
            className="inline-block border border-[#C9A055] text-[#C9A055] px-10 py-4 hover:bg-[#C9A055] hover:text-white transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            +91 98450 12548
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* The honest comparison */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">The Honest Comparison</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              Save your time, not just your brokerage
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-[#DDD8CE] p-9">
              <h3 className="text-xl mb-4" style={{ ...serif, color: "#7A6F60", fontWeight: 600 }}>
                Doing it yourself / free listing sites
              </h3>
              <ul className="space-y-3">
                {[
                  "Save one month's brokerage",
                  "…then field dozens of unverified enquiries",
                  "Screen tenants and take the risk yourself",
                  "Draft the agreement and chase police verification",
                  "Chase rent every month; handle every complaint",
                  "Fix leaks and repairs from wherever you are",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 14, lineHeight: 1.6 }}>
                    <span style={{ color: i === 0 ? "#2E7D32" : "#B4A08A" }}>{i === 0 ? "✓" : "•"}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-[#C9A055] p-9">
              <h3 className="text-xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                With Vani Estates
              </h3>
              <ul className="space-y-3">
                {[
                  "We find verified, screened tenants",
                  "Registered agreement + police verification handled",
                  "Rent collected to your account, with statements",
                  "Maintenance & repairs coordinated for you",
                  "Photo-report inspections — you always know the condition",
                  "Ideal if you're busy, or living abroad",
                ].map((t) => (
                  <li key={t} className="flex gap-3" style={{ fontFamily: "var(--sans)", color: "#5A4F40", fontSize: 14, lineHeight: 1.6 }}>
                    <span style={{ color: "#C9A055" }}>◆</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-6 max-w-2xl mx-auto text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>
            The free route saves you one month&apos;s brokerage — then costs you eleven months of
            chasing rent, screening tenants and fixing taps. We manage all of it, so your flat is an
            income asset, not a second job.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">How It Works</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              From vacant to earning, handled
            </h2>
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

        {/* NRI callout */}
        <div className="mb-24 border border-[#C9A055]/40 p-9 md:p-12 text-center" style={{ background: "#FBF7F0" }}>
          <div className="eyebrow mb-3">For NRI Owners</div>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Own a Bangalore flat but live abroad?
          </h2>
          <p className="max-w-2xl mx-auto mb-8" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
            This is exactly what we do best. We rent out and fully manage properties for NRI owners —
            tenants, rent to your NRO account, TDS compliance, inspections and maintenance — with
            regular WhatsApp updates. You never have to fly down.
          </p>
          <Link
            href="/nri/"
            className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            NRI Services
          </Link>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Common Questions</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              Frequently asked
            </h2>
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
            Let&apos;s get your flat earning
          </h2>
          <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            Tell us about your property and we&apos;ll benchmark the rent, find a verified tenant, and
            manage the tenancy end to end. Read more about our{" "}
            <Link href="/property-management/" className="text-[#C9A055] hover:underline">property management service</Link>.
          </p>
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent("Hi Vani Estates — I'd like to rent out my property. Here are the details: ")}`}
            target="_blank"
            className="inline-block bg-[#25D366] text-white px-12 py-4 hover:bg-[#1da851] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            WhatsApp Us
          </a>
          <p className="mt-6 text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
            RERA: PRM/KA/RERA/1251/310/AG/250523/005790
          </p>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Property Rental & Management",
            provider: { "@type": "RealEstateAgent", name: "Vani Estates", telephone: "+919845012548" },
            areaServed: ["Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi"],
            url: "https://www.vaniestates.com/rent-out-your-property/",
          }),
        }}
      />
    </div>
  );
}
