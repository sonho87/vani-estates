import { getLocality } from "@/lib/localities";
import { properties, blogs } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import QualifyNote from "./QualifyNote";

const serif = { fontFamily: "var(--serif)" };

export function localityMetadata(slug: string): Metadata {
  const l = getLocality(slug) as any;
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDesc,
    alternates: { canonical: `/real-estate-agents-in-${l.slug}/` },
    openGraph: { title: l.metaTitle, description: l.metaDesc },
  };
}

export default function LocalityAgentsPage({ slug }: { slug: string }) {
  const l = getLocality(slug) as any;
  if (!l) return null;

  const listings = properties.filter((p: any) =>
    l.matchLocalities.some((m: string) => p.locality.includes(m))
  );
  const guides = blogs
    .filter((b: any) => b.slug.includes(l.blogSlugKeyword))
    .sort((a: any, b: any) => b.id - a.id)
    .slice(0, 6);

  return (
    <div style={{ background: "#F5F0E8" }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        <nav className="text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#5A4F40" }}>Real Estate Agents in {l.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="px-6 pt-8 pb-14 border-b border-[#DDD8CE]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow eyebrow-wide mb-4">Trusted Brokers &amp; Consultants · Since 1990</p>
          <h1 className="mb-5 leading-[1.05]" style={{ ...serif, fontSize: "clamp(36px, 5.5vw, 64px)", color: "#1A1410", fontWeight: 300 }}>
            {l.h1a}{" "}
            <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>{l.h1b}</em>
          </h1>
          <p className="mb-8" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 16, lineHeight: 1.9 }}>
            {l.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919845012548?text=${encodeURIComponent(`Hi Vani Estates — I'm looking for a property agent in ${l.name}. My requirement: `)}`}
              target="_blank"
              className="inline-block bg-[#25D366] text-white px-9 py-4 hover:bg-[#1da851] transition"
              style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919845012548"
              className="inline-block border border-[#C9A055] text-[#C9A055] px-9 py-4 hover:bg-[#C9A055] hover:text-white transition"
              style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
            >
              +91 98450 12548
            </a>
          </div>
          <p className="mt-6 text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
            RERA: PRM/KA/RERA/1251/310/AG/250523/005790 · 4.9★ on Google · Free consultation &amp; site visits
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto mb-14">
          <QualifyNote />
        </div>

        {/* Why us here */}
        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="eyebrow mb-4">Why Vani Estates in {l.name}</div>
            <h2 className="mb-6 leading-tight" style={{ ...serif, fontSize: "clamp(28px, 3.5vw, 40px)", color: "#1A1410", fontWeight: 400 }}>
              Not just an agent —{" "}
              <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>a neighbour</em>
            </h2>
            <ul className="space-y-3">
              {l.whyUs.map((w: string) => (
                <li key={w} className="flex gap-3" style={{ fontFamily: "var(--sans)", color: "#5A4F40", fontSize: 15, lineHeight: 1.7 }}>
                  <span style={{ color: "#C9A055" }}>◆</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-[#DDD8CE] p-8">
            <div className="eyebrow mb-3">Local Knowledge</div>
            <h3 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              The {l.name} market, honestly
            </h3>
            <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
              {l.localKnowledge}
            </p>
          </div>
        </div>

        {/* Current listings in locality */}
        <div className="mb-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              Current listings in {l.name}
            </h2>
            <Link href="/properties/" className="text-[#C9A055] hover:text-[#b8913e] transition" style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 1 }}>
              View all properties →
            </Link>
          </div>
          {listings.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((p: any) => (
                <Link
                  href={`/properties/${p.slug}/`}
                  key={p.id}
                  className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition overflow-hidden"
                >
                  <div className="h-48 bg-[#EDE8DF] overflow-hidden relative">
                    {p.heroImage && (
                      <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                    )}
                    <span className="absolute top-3 right-3 bg-white/90 text-[#5A4F40] text-[10px] px-3 py-1" style={{ fontFamily: "var(--sans)", letterSpacing: 2, textTransform: "uppercase" }}>
                      {p.status === "Rent" ? "For Rent" : "For Sale"}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg mb-1 line-clamp-2 group-hover:text-[#C9A055] transition" style={{ ...serif, color: "#1A1410", fontWeight: 600, lineHeight: 1.2 }}>
                      {p.title}
                    </h3>
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#EDE8DF]">
                      <span style={{ ...serif, color: "#C9A055", fontWeight: 600, fontSize: 18 }}>{formatPrice(p.price, p.status)}</span>
                      <span className="text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>{p.area} sq.ft · {p.bhk} BHK</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#DDD8CE] p-12 text-center">
              <div className="mb-2" style={{ ...serif, fontSize: 24, color: "#1A1410", fontWeight: 500 }}>
                Fresh {l.name} inventory moves fast
              </div>
              <p className="mb-5" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 14, lineHeight: 1.7 }}>
                Much of what we sell in {l.name} never reaches the website — tell us your requirement
                and we&apos;ll share matching options directly on WhatsApp.
              </p>
              <a
                href={`https://wa.me/919845012548?text=${encodeURIComponent(`Hi Vani Estates — I'm looking for property in ${l.name}. My requirement: `)}`}
                target="_blank"
                className="inline-block bg-[#C9A055] text-white px-8 py-3 hover:bg-[#b8913e] transition"
                style={{ fontFamily: "var(--sans)", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}
              >
                Tell us what you need
              </a>
            </div>
          )}
        </div>

        {/* Services strip */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Everything we do in {l.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["Buy & Sell", "Resale homes, honest valuations, full paperwork", "/properties/"],
              ["New Projects", "Branded builders with honest investment analysis", "/projects/"],
              ["Rentals & Management", "Verified tenants + fully managed tenancies", "/rent-out-your-property/"],
              ["NRI Services", "Buy, manage & sell from abroad", "/nri/"],
              ["Home Loans", "One application across 150+ banks", "/home-loans/"],
              ["Interiors", "Design your new home with our partner", "/interiors/"],
            ].map(([t, d, href]) => (
              <Link key={t as string} href={href as string} className="bg-white border border-[#DDD8CE] p-6 hover:border-[#C9A055]/60 transition block">
                <h3 className="text-lg mb-1" style={{ ...serif, color: "#C9A055", fontWeight: 600 }}>{t}</h3>
                <p className="text-[12px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.6 }}>{d}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Local guides */}
        {guides.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
              Our {l.name} guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.map((b: any) => (
                <Link key={b.id} href={`/blog/${b.slug}/`} className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition p-6">
                  <h3 className="text-lg mb-2 line-clamp-2 group-hover:text-[#C9A055] transition" style={{ ...serif, color: "#1A1410", fontWeight: 600, lineHeight: 1.3 }}>
                    {b.title}
                  </h3>
                  <span className="text-xs text-[#C9A055]" style={{ fontFamily: "var(--sans)", letterSpacing: 1.5 }}>Read →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8 text-center" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Common questions
          </h2>
          <div className="max-w-3xl mx-auto divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
            {l.faqs.map((f: any) => (
              <div key={f.q} className="py-6">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-10 border border-[#DDD8CE] bg-white">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Talk to {l.name}&apos;s most experienced agents
          </h2>
          <p className="max-w-xl mx-auto mb-6" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            35 years, RERA registered, 4.9★ rated — and free consultation with free site visits.
            Walk into our Jayanagar office or start on WhatsApp.
          </p>
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent(`Hi Vani Estates — I need help with property in ${l.name}.`)}`}
            target="_blank"
            className="inline-block bg-[#25D366] text-white px-10 py-4 hover:bg-[#1da851] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            WhatsApp Us Now
          </a>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: `Vani Estates — Real Estate Agents in ${l.name}`,
            url: `https://www.vaniestates.com/real-estate-agents-in-${l.slug}/`,
            telephone: "+919845012548",
            foundingDate: "1990",
            areaServed: { "@type": "Place", name: `${l.name}, Bangalore` },
            address: {
              "@type": "PostalAddress",
              streetAddress: "#14, 9th Main Road, 3rd Block Jayanagar",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560011",
              addressCountry: "IN",
            },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "16" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: l.faqs.map((f: any) => ({
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
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vaniestates.com/" },
              { "@type": "ListItem", position: 2, name: `Real Estate Agents in ${l.name}`, item: `https://www.vaniestates.com/real-estate-agents-in-${l.slug}/` },
            ],
          }),
        }}
      />
    </div>
  );
}
