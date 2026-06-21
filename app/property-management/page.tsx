import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Property Management Services in Bangalore — NRI & Landlord Support",
  description:
    "End-to-end property management in South Bangalore for landlords and NRIs. Tenant sourcing, rent collection, maintenance, legal documentation and inspections. Understand landlord vs. property manager responsibilities. RERA registered — Vani Estates, Jayanagar.",
  alternates: { canonical: "/property-management/" },
  openGraph: {
    title: "Property Management Services in Bangalore — Vani Estates",
    description:
      "Trusted NRI & landlord property management in Jayanagar, JP Nagar, Banashankari & Basavanagudi. Tenant management, rent collection, maintenance and legal support.",
  },
};

const managerDuties = [
  ["Tenant sourcing & screening", "Advertising, shortlisting, background and reference checks, and finalising reliable tenants."],
  ["Rent agreement & documentation", "Drafting and registering the rental/lease agreement, police verification, and renewals."],
  ["Rent collection & remittance", "Monthly rent collection and transfer to your account — with statements (ideal for NRIs)."],
  ["Property inspections", "Periodic inspections with photo reports so you always know the condition of your property."],
  ["Maintenance & repairs", "Coordinating plumbers, electricians, painting and repairs with your prior approval on costs."],
  ["Bill & dues management", "Tracking property tax, water, electricity, and association maintenance dues."],
  ["Tenant relationship", "Being the single point of contact for tenant requests, complaints and emergencies."],
  ["Move-in / move-out", "Inventory checks, deposit handling, dues settlement, and handover at both ends of a tenancy."],
];

const landlordResponsibilities = [
  "Provide clear, marketable title and valid ownership documents.",
  "Keep property tax (Khata, BBMP) and any home-loan dues current.",
  "Fund major/structural repairs (waterproofing, structural, ageing fixtures).",
  "Authorise repair budgets above an agreed limit promptly.",
  "Maintain valid property insurance (recommended).",
  "Honour the deposit refund per the agreement at tenancy end.",
];

const managerResponsibilities = [
  "Source genuine, verified tenants and complete legal documentation.",
  "Collect rent on time and remit it with transparent statements.",
  "Handle day-to-day maintenance within the approved budget.",
  "Conduct inspections and report property condition honestly.",
  "Act as the tenant's point of contact and resolve issues fairly.",
  "Keep the landlord informed before incurring significant costs.",
];

const faqs = [
  {
    q: "Do you provide a written property management contract?",
    a: "Yes. We provide a clear written Property Management Agreement that lists the scope of services, the management fee, the responsibilities and liabilities of both the landlord and Vani Estates, the approval limits for repairs, and the term and termination terms. Contact us and we'll share the contract for your review.",
  },
  {
    q: "Is this suitable for NRIs?",
    a: "Absolutely — NRI property management is one of our core services. We handle everything on the ground in South Bangalore so you don't have to travel: tenant sourcing, rent collection and remittance to your account, inspections with photo reports, maintenance, and dues. You receive regular updates by WhatsApp and email.",
  },
  {
    q: "How is the management fee structured?",
    a: "Management fees are typically a percentage of the monthly rent, agreed upfront in the contract. The exact figure depends on the property type, location and the scope of services you need. We keep it transparent — no hidden charges.",
  },
  {
    q: "Who is liable if the tenant damages the property?",
    a: "Tenant-caused damage beyond normal wear and tear is recovered from the security deposit as per the rental agreement, which we draft to protect you. We document the property's condition at move-in and move-out to make this clear and fair.",
  },
  {
    q: "Which areas do you cover?",
    a: "Jayanagar, JP Nagar, Banashankari, Basavanagudi and surrounding South Bangalore localities — the neighbourhoods we've worked in for over 35 years.",
  },
];

export default function PropertyManagementPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      {/* Hero */}
      <section
        className="text-center px-6 py-24 border-b border-[#DDD8CE]"
        style={{ background: "#EDE8DF" }}
      >
        <p className="eyebrow eyebrow-wide mb-4">Our Services</p>
        <h1
          className="mb-5 leading-[1.05] mx-auto max-w-4xl"
          style={{ ...serif, fontSize: "clamp(40px, 6vw, 72px)", color: "#1A1410", fontWeight: 300 }}
        >
          Property{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            Management
          </em>{" "}
          in South Bangalore
        </h1>
        <p
          className="max-w-2xl mx-auto"
          style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 17, lineHeight: 1.9 }}
        >
          Whether you live in Bangalore or abroad, we look after your property as if it were our
          own — tenants, rent, maintenance and paperwork, all handled transparently.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent(
              "Hi Vani Estates — I'd like to know about your property management service and see the management contract."
            )}`}
            target="_blank"
            className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            Request the Contract
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
        {/* What we handle */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">What We Handle</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              End-to-end management
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managerDuties.map((d) => (
              <div key={d[0]} className="bg-white border border-[#DDD8CE] p-7">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                  {d[0]}
                </h3>
                <p className="text-sm" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.7 }}>
                  {d[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities split */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Roles & Responsibilities</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              Who is responsible for what
            </h2>
            <p className="max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
              A clear split of duties is the foundation of a good property management contract.
              Here&apos;s how responsibilities are typically shared — your final agreement is tailored
              to your property.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#DDD8CE] p-9">
              <h3 className="text-2xl mb-6" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                The Landlord
              </h3>
              <ul className="space-y-3">
                {landlordResponsibilities.map((r) => (
                  <li key={r} className="flex gap-3" style={{ fontFamily: "var(--sans)", color: "#5A4F40", fontSize: 14, lineHeight: 1.6 }}>
                    <span style={{ color: "#C9A055" }}>◆</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#DDD8CE] p-9">
              <h3 className="text-2xl mb-6" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                Vani Estates (Property Manager)
              </h3>
              <ul className="space-y-3">
                {managerResponsibilities.map((r) => (
                  <li key={r} className="flex gap-3" style={{ fontFamily: "var(--sans)", color: "#5A4F40", fontSize: 14, lineHeight: 1.6 }}>
                    <span style={{ color: "#C9A055" }}>◆</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-6" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 13, fontStyle: "italic" }}>
            This is a general guide, not legal advice. Exact terms, fees and liabilities are set out
            in the written agreement, customised to your property.
          </p>
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
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                  {f.q}
                </h3>
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center p-12 border border-[#DDD8CE]"
          style={{ background: "#FBF7F0" }}
        >
          <h2 className="text-3xl md:text-4xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Get your property management contract
          </h2>
          <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            Tell us about your property and we&apos;ll share the management agreement, fee structure
            and the full list of responsibilities for your review — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919845012548?text=${encodeURIComponent(
                "Hi Vani Estates — I'd like to know about your property management service and see the management contract."
              )}`}
              target="_blank"
              className="inline-block bg-[#25D366] text-white px-10 py-4 hover:bg-[#1da851] transition"
              style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact/"
              className="inline-block border border-[#C9A055] text-[#C9A055] px-10 py-4 hover:bg-[#C9A055] hover:text-white transition"
              style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
            >
              Contact Page
            </Link>
          </div>
          <p className="mt-6 text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
            RERA: PRM/KA/RERA/1251/310/AG/250523/005790
          </p>
        </div>
      </div>

      {/* FAQ schema for SEO rich results */}
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
            serviceType: "Property Management",
            provider: {
              "@type": "RealEstateAgent",
              name: "Vani Estates",
              telephone: "+919845012548",
              areaServed: "South Bangalore",
            },
            areaServed: ["Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi"],
            url: "https://www.vaniestates.com/property-management/",
          }),
        }}
      />
    </div>
  );
}
