import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "NRI Property Services in Bangalore — Buy, Manage & Sell From Abroad",
  description:
    "Complete NRI real estate services in Bangalore: buy branded apartments remotely, Power of Attorney guidance, NRE/NRO payments, TDS, rental management and resale. RERA registered, 35+ years in South Bangalore. WhatsApp video tours for US, UK, Gulf & Singapore clients.",
  alternates: { canonical: "/nri/" },
  openGraph: {
    title: "NRI Property Services in Bangalore — Vani Estates",
    description:
      "Buy, manage and sell Bangalore property from anywhere in the world. One trusted local partner for the full journey. RERA registered since 1990.",
  },
};

const steps = [
  {
    n: "01",
    t: "Tell us your goal",
    d: "Investment for capital gains, a future home, or rental income — share your budget and preferred corridors on WhatsApp. We reply within 12 hours with a shortlist, whatever your time zone.",
  },
  {
    n: "02",
    t: "Video tours & honest numbers",
    d: "Live WhatsApp/Zoom video walkthroughs of shortlisted properties and projects. We share real price sheets, payment plans and our honest view — including reasons not to buy something.",
  },
  {
    n: "03",
    t: "Legal due diligence",
    d: "Title, Encumbrance Certificate, Khata, approvals, RERA registration — verified before you commit a rupee. We coordinate with your lawyer or bring in ours.",
  },
  {
    n: "04",
    t: "PoA, payment & registration",
    d: "We guide your Power of Attorney (consulate attestation → Karnataka adjudication), payments via NRE/NRO channels, home loan coordination, and registration — without you flying down.",
  },
  {
    n: "05",
    t: "After the purchase — we stay",
    d: "Tenants, rent collection to your NRO account, maintenance, tax dues, photo-report inspections. And when you're ready to exit, we handle the resale. One partner, the full loop.",
  },
];

const faqs = [
  {
    q: "Can I buy property in Bangalore without travelling to India?",
    a: "Yes. With a registered Power of Attorney executed at the Indian Embassy or Consulate in your country (then adjudicated in Karnataka), a trusted person in India can sign and register on your behalf. We guide the exact PoA wording and coordinate the registration end-to-end. Many of our NRI clients complete their entire purchase remotely with video walkthroughs at every step.",
  },
  {
    q: "How do I pay from abroad?",
    a: "All payments must be in Indian Rupees through normal banking channels — your NRE, NRO or FCNR account, or direct inward remittance. We help you sequence payments against construction milestones (for under-construction projects) or the registration schedule (for ready properties). Always confirm specifics with your bank and CA.",
  },
  {
    q: "What can NRIs buy — and what's off-limits?",
    a: "NRIs and OCI cardholders can freely buy residential and commercial property with no limit on count. Agricultural land, plantation property and farmhouses are not permitted under FEMA regulations.",
  },
  {
    q: "What taxes should I plan for?",
    a: "Stamp duty and registration (~6% combined in Karnataka) apply as for residents. If you rent the property out, your tenant must deduct TDS (typically 30% plus surcharge) before paying rent to an NRI. Capital gains tax applies on sale, with indexation for long-term holdings. Rules change — we'll connect you with a chartered accountant for current rates.",
  },
  {
    q: "Can I take the money back out when I sell?",
    a: "Yes — sale proceeds can be repatriated (up to USD 1 million per financial year from your NRO account, and for up to two residential properties, subject to conditions) with Form 15CA/15CB certified by a CA. We plan the paperwork from the day you buy so the exit is smooth.",
  },
  {
    q: "Why work with Vani Estates instead of a portal?",
    a: "Portals sell your phone number to five agents; we are the agent. RERA registered (PRM/KA/RERA/1251/310/AG/250523/005790), 35+ years in South Bangalore, 4.9★ on Google, one accountable person — Amarnath R — whose office you (or your parents) can walk into in Jayanagar. And we stay after the sale: tenants, maintenance, and eventual resale.",
  },
];

export default function NRIPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      {/* Hero */}
      <section
        className="text-center px-6 py-24 border-b border-[#DDD8CE]"
        style={{ background: "#EDE8DF" }}
      >
        <p className="eyebrow eyebrow-wide mb-4">For Non-Resident Indians</p>
        <h1
          className="mb-5 leading-[1.05] mx-auto max-w-4xl"
          style={{ ...serif, fontSize: "clamp(40px, 6vw, 76px)", color: "#1A1410", fontWeight: 300 }}
        >
          Invest in Bangalore from{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            anywhere in the world
          </em>
        </h1>
        <p
          className="max-w-2xl mx-auto mb-9"
          style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 17, lineHeight: 1.9 }}
        >
          Branded apartments, verified paperwork, honest numbers — and a 35-year local name your
          family already knows. We work with clients across the US, UK, Gulf and Singapore, on
          your time zone, over WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent(
              "Hi Vani Estates — I'm an NRI interested in Bangalore property. I'd like to book a video call."
            )}`}
            target="_blank"
            className="inline-block bg-[#25D366] text-white px-10 py-4 hover:bg-[#1da851] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            Book a Video Call
          </a>
          <Link
            href="/projects/"
            className="inline-block border border-[#C9A055] text-[#C9A055] px-10 py-4 hover:bg-[#C9A055] hover:text-white transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            See New Projects
          </Link>
        </div>
        <p className="mt-6 text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
          RERA: PRM/KA/RERA/1251/310/AG/250523/005790 · Since 1990 · 4.9★ on Google
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* The 5-step process */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">How It Works</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              Buying from abroad, step by step
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="bg-white border border-[#DDD8CE] p-7">
                <div
                  className="mb-3"
                  style={{ ...serif, fontSize: 40, color: "#C9A055", fontWeight: 700, lineHeight: 1, opacity: 0.55 }}
                >
                  {s.n}
                </div>
                <h3 className="text-lg mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                  {s.t}
                </h3>
                <p className="text-[13px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.7 }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The full loop */}
        <div className="mb-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="eyebrow mb-4">The Full Loop</div>
            <h2
              className="mb-6 leading-tight"
              style={{ ...serif, fontSize: "clamp(30px, 4vw, 44px)", color: "#1A1410", fontWeight: 400 }}
            >
              Buy it. Rent it. Maintain it.{" "}
              <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
                Exit it.
              </em>{" "}
              One partner.
            </h2>
            <div
              className="space-y-5 text-[15px]"
              style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}
            >
              <p>
                The hardest part of NRI ownership isn&apos;t the purchase — it&apos;s the ten years
                after. A portal disappears the moment your cheque clears. We don&apos;t.
              </p>
              <p>
                After you buy, our{" "}
                <Link href="/property-management/" className="text-[#C9A055] hover:underline">
                  property management
                </Link>{" "}
                team finds tenants, collects rent into your NRO account with clean statements,
                handles TDS compliance, inspects with photo reports, and keeps every due paid. And
                when the market is right, we sell it for you and plan the repatriation paperwork.
              </p>
              <p>
                That&apos;s one accountable relationship across the entire life of your investment —
                which is exactly what owning property from 8,000 miles away requires.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Buy", "Shortlists, video tours, due diligence, PoA & registration", "/projects/"],
              ["Rent", "Tenant sourcing, agreements, police verification", "/property-management/"],
              ["Maintain", "Rent to NRO, inspections, repairs, dues & statements", "/property-management/"],
              ["Exit", "Resale at the right time + repatriation planning", "/contact/"],
            ].map(([t, d, href]) => (
              <Link
                key={t as string}
                href={href as string}
                className="bg-white border border-[#DDD8CE] p-7 hover:border-[#C9A055]/60 transition"
              >
                <h3 className="text-2xl mb-2" style={{ ...serif, color: "#C9A055", fontWeight: 600 }}>
                  {t}
                </h3>
                <p className="text-[13px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.7 }}>
                  {d}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust rail */}
        <div className="mb-24 bg-white border border-[#DDD8CE] p-10 grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <img
            src="/amarnath.jpg"
            alt="Amarnath R — Founder, Vani Estates"
            className="w-36 h-36 rounded-full object-cover mx-auto"
            style={{ border: "3px solid rgba(201,160,85,0.45)" }}
          />
          <div>
            <h2 className="text-3xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 500 }}>
              A name your family in Jayanagar already knows
            </h2>
            <p
              className="text-[15px] mb-5"
              style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}
            >
              Vani Estates was founded by <strong style={{ color: "#1A1410" }}>Amarnath R</strong> in
              1990. For NRI clients, that means something no portal can offer: a physical office at
              #14, 9th Main Road, 3rd Block Jayanagar that your parents can walk into, a RERA
              registration you can verify, and a reputation built over 35 years in the same
              neighbourhood. When you invest from abroad, you&apos;re not trusting a listing —
              you&apos;re trusting a person.
            </p>
            <div className="flex flex-wrap gap-6 text-[13px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
              <span><strong style={{ color: "#C9A055" }}>35+</strong> years</span>
              <span><strong style={{ color: "#C9A055" }}>4.9★</strong> Google rating</span>
              <span><strong style={{ color: "#C9A055" }}>RERA</strong> registered</span>
              <span><strong style={{ color: "#C9A055" }}>500+</strong> properties dealt</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">NRI Questions, Answered</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              Frequently asked
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                  {f.q}
                </h3>
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-center mt-6 text-sm"
            style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontStyle: "italic" }}
          >
            General guidance, not legal or tax advice. FEMA, TDS and repatriation rules change —
            we&apos;ll connect you with a chartered accountant for your specific situation.
          </p>
        </div>

        {/* Deep-dive guides */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">Go Deeper</div>
            <h2 className="text-3xl md:text-4xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              Our NRI guides
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                t: "NRI Guide to Buying Property in Bangalore (2026)",
                d: "RERA, taxes, Power of Attorney, home loans and repatriation — the complete playbook.",
                href: "/blog/nri-guide-to-buying-property-in-bangalore-2026-rera-taxes-power-of-attorney-home-loans/",
              },
              {
                t: "Managing Your Bangalore Home From Abroad",
                d: "Renting out, TDS on NRI rent, NRO accounts, maintenance — everything after the purchase.",
                href: "/blog/property-management-for-nris-rent-out-maintain-bangalore-home-from-abroad-2026/",
              },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group bg-white border border-[#DDD8CE] p-7 hover:border-[#C9A055]/60 transition"
              >
                <h3
                  className="text-xl mb-2 group-hover:text-[#C9A055] transition"
                  style={{ ...serif, color: "#1A1410", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {g.t}
                </h3>
                <p className="text-[13px] mb-3" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.7 }}>
                  {g.d}
                </p>
                <span className="text-xs text-[#C9A055]" style={{ fontFamily: "var(--sans)", letterSpacing: 1.5 }}>
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center p-12 border border-[#DDD8CE]" style={{ background: "#FBF7F0" }}>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Start with a 20-minute video call
          </h2>
          <p
            className="max-w-xl mx-auto mb-8"
            style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}
          >
            Tell us your budget and goal. We&apos;ll show you what&apos;s genuinely worth your money
            in Bangalore right now — including the reasons to wait, if that&apos;s our honest view.
            Evenings and weekends work for US &amp; UK time zones.
          </p>
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent(
              "Hi Vani Estates — I'm an NRI interested in Bangalore property. I'd like to book a video call. My time zone is: "
            )}`}
            target="_blank"
            className="inline-block bg-[#25D366] text-white px-12 py-4 hover:bg-[#1da851] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            WhatsApp Us Now
          </a>
        </div>
      </div>

      {/* Schema: FAQ + Service */}
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
            serviceType: "NRI Real Estate Services",
            provider: {
              "@type": "RealEstateAgent",
              name: "Vani Estates",
              telephone: "+919845012548",
              areaServed: "Bangalore",
            },
            audience: { "@type": "Audience", audienceType: "Non-Resident Indians" },
            url: "https://www.vaniestates.com/nri/",
          }),
        }}
      />
    </div>
  );
}
