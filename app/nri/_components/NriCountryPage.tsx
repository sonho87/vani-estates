import { nriCountries, getNriCountry } from "@/lib/nri-countries";
import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

// Metadata factory used by each static /nri/from-<slug>/ route.
export function countryMetadata(slug: string): Metadata {
  const c = getNriCountry(slug) as any;
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: { canonical: `/nri/from-${c.slug}/` },
    openGraph: { title: c.metaTitle, description: c.metaDesc },
  };
}

export default function NriCountryPage({ slug }: { slug: string }) {
  const c = getNriCountry(slug) as any;
  if (!c) return null;

  const others = nriCountries.filter((x: any) => x.slug !== c.slug);

  return (
    <div style={{ background: "#F5F0E8" }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        <nav className="text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/nri/" className="hover:text-[#C9A055]">NRI Services</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#5A4F40" }}>From {c.country}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="text-center px-6 pt-10 pb-16 border-b border-[#DDD8CE]">
        <div className="text-4xl mb-4">{c.flag}</div>
        <h1 className="mb-5 leading-[1.05] mx-auto max-w-4xl" style={{ ...serif, fontSize: "clamp(36px, 5.5vw, 64px)", color: "#1A1410", fontWeight: 300 }}>
          {c.heroLine.split(" from ")[0]} from{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            {c.heroLine.split(" from ")[1]}
          </em>
        </h1>
        <p className="max-w-2xl mx-auto mb-8" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 16, lineHeight: 1.9 }}>
          {c.lead}
        </p>
        <a
          href={`https://wa.me/919845012548?text=${encodeURIComponent(`Hi Vani Estates — I'm a ${c.demonym} NRI interested in Bangalore property. I'd like to book a video call.`)}`}
          target="_blank"
          className="inline-block bg-[#25D366] text-white px-10 py-4 hover:bg-[#1da851] transition"
          style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
        >
          Book a Video Call
        </a>
        <p className="mt-5 text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
          RERA: PRM/KA/RERA/1251/310/AG/250523/005790 · Since 1990 · 4.9★ on Google
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Country-specific sections */}
        <div className="space-y-10 mb-16">
          {c.sections.map((s: any) => (
            <div key={s.title}>
              <h2 className="text-2xl md:text-3xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                {s.title}
              </h2>
              <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* What you can buy */}
        <div className="mb-16 border border-[#C9A055]/40 p-8" style={{ background: "#FBF7F0" }}>
          <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
            What {c.demonym} NRIs buy with us
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Branded new projects", "Sobha, Prestige & more — invest early, exit at possession or hold", "/projects/"],
              ["Resale flats & homes", "Established South Bangalore — Jayanagar, JP Nagar, Banashankari", "/properties/"],
              ["Home loans (NRI)", "Arranged across 150+ banks, coordinated with your PoA", "/home-loans/"],
              ["Full management after", "Tenants, rent to NRO, maintenance, inspections — handled", "/property-management/"],
            ].map(([t, d, href]) => (
              <Link key={t as string} href={href as string} className="bg-white border border-[#DDD8CE] p-5 hover:border-[#C9A055]/60 transition block">
                <h3 className="text-lg mb-1" style={{ ...serif, color: "#C9A055", fontWeight: 600 }}>{t}</h3>
                <p className="text-[12px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.6 }}>{d}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Common questions
          </h2>
          <div className="divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
            {c.faqs.map((f: any) => (
              <div key={f.q} className="py-6">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-center" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontStyle: "italic" }}>
            General guidance, not legal or tax advice — rules change; we&apos;ll connect you with a CA
            for your specific situation. See the full{" "}
            <Link href="/nri/" className="text-[#C9A055] hover:underline">NRI services page</Link> and our{" "}
            <Link href="/blog/nri-guide-to-buying-property-in-bangalore-2026-rera-taxes-power-of-attorney-home-loans/" className="text-[#C9A055] hover:underline">
              complete NRI buying guide
            </Link>.
          </p>
        </div>

        {/* Other countries */}
        <div className="mb-16 text-center">
          <div className="text-[11px] mb-3" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 2, textTransform: "uppercase" }}>
            Buying from elsewhere?
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {others.map((o: any) => (
              <Link
                key={o.slug}
                href={`/nri/from-${o.slug}/`}
                className="text-xs px-4 py-2 border border-[#DDD8CE] bg-white hover:border-[#C9A055] hover:text-[#C9A055] transition"
                style={{ fontFamily: "var(--sans)", color: "#5A4F40", fontWeight: 500 }}
              >
                {o.flag} From {o.country}
              </Link>
            ))}
            <Link
              href="/nri/"
              className="text-xs px-4 py-2 border border-[#C9A055] text-[#C9A055] hover:bg-[#C9A055] hover:text-white transition"
              style={{ fontFamily: "var(--sans)", fontWeight: 600 }}
            >
              All NRI services →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-10 border border-[#DDD8CE] bg-white">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Start with a 20-minute video call
          </h2>
          <p className="max-w-xl mx-auto mb-6" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            On your time zone. Honest answers, a clear shortlist, and the full picture of costs —
            free, no obligation.
          </p>
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent(`Hi Vani Estates — I'm a ${c.demonym} NRI interested in Bangalore property. My time zone is ${c.country}. I'd like to book a video call.`)}`}
            target="_blank"
            className="inline-block bg-[#25D366] text-white px-10 py-4 hover:bg-[#1da851] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f: any) => ({
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
            serviceType: `NRI Real Estate Services for ${c.demonym} Indians`,
            provider: { "@type": "RealEstateAgent", name: "Vani Estates", telephone: "+919845012548" },
            areaServed: "Bangalore",
            audience: { "@type": "Audience", audienceType: `Non-Resident Indians in ${c.country}` },
            url: `https://www.vaniestates.com/nri/from-${c.slug}/`,
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
              { "@type": "ListItem", position: 2, name: "NRI Services", item: "https://www.vaniestates.com/nri/" },
              { "@type": "ListItem", position: 3, name: `From ${c.country}`, item: `https://www.vaniestates.com/nri/from-${c.slug}/` },
            ],
          }),
        }}
      />
    </div>
  );
}
