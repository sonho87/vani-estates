import { blogs } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Property Guides & Resources — Buying, Selling, Renting & NRI in Bangalore",
  description:
    "Free, honest guides for buying, selling, renting, investing and NRI property in Bangalore — legal, home loans, Vastu, agreements, due diligence and more. From Vani Estates, RERA registered, 35+ years in South Bangalore.",
  alternates: { canonical: "/guides/" },
  openGraph: {
    title: "Property Guides & Resources — Vani Estates",
    description:
      "Everything you need to buy, sell, rent or invest in Bangalore property — clear guides from a 35-year RERA agent.",
  },
};

// Curated intent-based groupings. Each entry maps a display group to the
// blog categories + specific service pages that belong in it.
const services = [
  { label: "New Projects (branded builders)", href: "/projects/" },
  { label: "NRI Property Services", href: "/nri/" },
  { label: "Property Management", href: "/property-management/" },
  { label: "Rent Out Your Property", href: "/rent-out-your-property/" },
  { label: "Browse Properties", href: "/properties/" },
];

const groups: { title: string; blurb: string; categories: string[] }[] = [
  {
    title: "Buying a Home",
    blurb: "Guides for homebuyers and first-time buyers in South Bangalore.",
    categories: ["Buyer's Guide", "Buyer Guide"],
  },
  {
    title: "Selling Your Property",
    blurb: "Price it right, get your papers ready, and sell faster.",
    categories: ["Seller Guide"],
  },
  {
    title: "Renting & Landlords",
    blurb: "For owners letting out and tenants renting in Bangalore.",
    categories: ["Property Management"],
  },
  {
    title: "Legal & Documents",
    blurb: "Agreements, verification, registration and due diligence.",
    categories: ["Legal Guide"],
  },
  {
    title: "NRI & Investment",
    blurb: "Buying, managing and investing from India or abroad.",
    categories: ["NRI Guide", "Investment Guide"],
  },
  {
    title: "Localities & Market",
    blurb: "Area guides, market trends and neighbourhood insights.",
    categories: ["Area Guide", "Locality Guide", "Market Insights", "Market Trends", "Market News", "Comparison Guide", "Lifestyle Guide"],
  },
  {
    title: "Project Spotlights",
    blurb: "Honest reviews of branded new projects we represent.",
    categories: ["Project Spotlight", "Luxury Real Estate"],
  },
];

export default function GuidesPage() {
  const byCat = (cats: string[]) =>
    [...blogs]
      .filter((b: any) => cats.includes(b.category))
      .sort((a: any, b: any) => b.id - a.id);

  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="eyebrow eyebrow-wide mb-4">Guides &amp; Resources</p>
        <h1 className="mb-4 leading-[1.05]" style={{ ...serif, fontSize: "clamp(40px, 6vw, 64px)", color: "#1A1410", fontWeight: 300 }}>
          Everything you need to{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>buy, sell &amp; rent</em>
        </h1>
        <p className="mb-12 max-w-3xl" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
          Free, honest guidance on Bangalore property — legal, home loans, Vastu, agreements, NRI,
          investment and more. Written by a RERA-registered agent with 35+ years in South Bangalore.
          Free consultation and free site visits to new projects — just ask.
        </p>

        {/* Services */}
        <div className="mb-14">
          <div className="text-[11px] mb-3" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 2, textTransform: "uppercase" }}>
            Our Services
          </div>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs px-4 py-2 border border-[#DDD8CE] bg-white hover:border-[#C9A055] hover:text-[#C9A055] transition"
                style={{ fontFamily: "var(--sans)", color: "#5A4F40", fontWeight: 500, letterSpacing: 0.5 }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Guide groups */}
        <div className="space-y-14">
          {groups.map((g) => {
            const items = byCat(g.categories);
            if (items.length === 0) return null;
            return (
              <div key={g.title}>
                <div className="mb-5">
                  <h2 className="text-2xl md:text-3xl" style={{ ...serif, color: "#1A1410", fontWeight: 500 }}>{g.title}</h2>
                  <p className="text-sm mt-1" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>{g.blurb}</p>
                </div>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                  {items.map((b: any) => (
                    <li key={b.id} className="border-b border-[#DDD8CE]">
                      <Link
                        href={`/blog/${b.slug}/`}
                        className="block py-3 group flex items-start justify-between gap-4"
                      >
                        <span
                          className="text-[15px] group-hover:text-[#C9A055] transition"
                          style={{ fontFamily: "var(--sans)", color: "#1A1410", lineHeight: 1.4 }}
                        >
                          {b.title}
                        </span>
                        <span style={{ color: "#C9A055" }}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-10 border border-[#DDD8CE] bg-white">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Prefer to just ask a human?
          </h2>
          <p className="max-w-xl mx-auto mb-6" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            35 years of straight answers on Bangalore property — free consultation, no obligation.
          </p>
          <a
            href="https://wa.me/919845012548?text=Hi%20Vani%20Estates%20%E2%80%94%20I%20have%20a%20property%20question."
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
