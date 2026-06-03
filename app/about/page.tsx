import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Vani Estates — RERA Registered Real Estate Agents in Bangalore",
  description:
    "Vani Estates is a RERA registered real estate agency founded in 2010 by Amarnath R. 35+ years of trusted property dealing across Jayanagar, JP Nagar, Banashankari & Basavanagudi in South Bangalore.",
  openGraph: {
    title: "About Vani Estates — RERA Registered Real Estate Agents in Bangalore",
    description:
      "Founded in 2010 by Amarnath R. 35+ years of expertise, 500+ properties dealt, 4.9★ Google rating. Buying, selling, renting & NRI property management in South Bangalore.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-xs text-gray-600">
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">About</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-20">
        <p
          className="text-[11px] mb-4 font-sans-ui"
          style={{ color: "#C9A055", letterSpacing: 5, textTransform: "uppercase" }}
        >
          About Us
        </p>
        <h1
          className="font-serif-display max-w-3xl mb-8 leading-[1.05]"
          style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#F5EFE8", fontWeight: 300 }}
        >
          South Bangalore&apos;s{" "}
          <em className="font-normal not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            most trusted
          </em>{" "}
          property name — since 1990.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl font-sans-ui">
          Vani Estates is a RERA registered real estate agency built on three decades of
          local relationships. <span className="text-gray-200">Amarnath R</span> brings
          over 35 years of South Bangalore real estate experience to every deal — from
          first-time buyers in Jayanagar to NRI clients managing property from abroad.
        </p>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#050505] border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "35+", label: "Years Experience" },
              { num: "500+", label: "Properties Dealt" },
              { num: "4.9★", label: "Google Rating (16 reviews)" },
              { num: "RERA", label: "Registered Agent" },
            ].map((s) => (
              <div key={s.label} className="text-center py-6 border border-[#222]">
                <div className="text-3xl font-semibold text-[#C9A055] mb-2">{s.num}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Specialities */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl mb-5 font-serif-display" style={{ color: "#F5EFE8", fontWeight: 400 }}>Our Story</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Founded in 2010 by Amarnath R, Vani Estates was built on a simple
                principle — honest, transparent property advice that puts the client first.
                Over the years we have grown into one of the most trusted names for real
                estate in South Bangalore, dealing in more than 500 properties and earning a
                4.9★ rating from our clients on Google.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We know these neighbourhoods intimately — the localities, the builders, the
                pricing trends and the paperwork. Whether you are a first-time homebuyer, a
                seller looking for the right value, or an NRI who needs someone trustworthy to
                manage property back home, we guide you through every step.
              </p>
            </div>

            <div>
              <h2 className="text-3xl mb-5 font-serif-display" style={{ color: "#F5EFE8", fontWeight: 400 }}>Where We Specialise</h2>
              <div className="flex flex-wrap gap-2">
                {["Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi"].map((l) => (
                  <span
                    key={l}
                    className="bg-[#111] border border-[#222] px-4 py-2 text-sm text-gray-300"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-5 font-serif-display" style={{ color: "#F5EFE8", fontWeight: 400 }}>Our Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Property Buying", d: "Curated listings and end-to-end support for homebuyers and investors." },
                  { t: "Property Selling", d: "Right valuation and trusted buyers to sell your property faster." },
                  { t: "Renting", d: "Quality tenants and rental homes across South Bangalore." },
                  { t: "NRI Property Management", d: "Reliable, transparent management of property for clients abroad." },
                ].map((s) => (
                  <div key={s.t} className="bg-[#111] border border-[#222] p-5">
                    <h3 className="text-[#C9A055] font-medium text-sm mb-2">{s.t}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact card */}
          <div>
            <div className="bg-[#111] border border-[#222] p-6 sticky top-24">
              <h3 className="text-lg font-medium mb-4">Get in Touch</h3>
              <div className="flex flex-col gap-3 text-sm mb-6">
                <a href="tel:+919845012548" className="text-gray-300 hover:text-[#C9A055]">
                  +91 98450 12548
                </a>
                <a href="mailto:vaniestates@gmail.com" className="text-gray-300 hover:text-[#C9A055] break-all">
                  vaniestates@gmail.com
                </a>
                <span className="text-gray-500">Jayanagar, Bangalore 560041</span>
              </div>
              <a
                href="https://wa.me/919845012548"
                target="_blank"
                className="block w-full bg-[#25D366] text-white text-center font-semibold py-3 text-sm tracking-wider mb-3 hover:bg-[#1da851] transition"
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact/"
                className="block w-full border border-[#C9A055] text-[#C9A055] text-center font-semibold py-3 text-sm tracking-wider hover:bg-[#C9A055] hover:text-black transition"
              >
                Contact Page
              </Link>
              <div className="mt-6 pt-6 border-t border-[#222]">
                <p className="text-gray-600 text-xs">RERA: PRM/KA/RERA/1251/310/AG/250523/005790</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-6 font-serif-display leading-tight" style={{ color: "#F5EFE8", fontWeight: 400 }}>Let&apos;s find your <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>next address</em>.</h2>
          <p className="text-gray-500 mb-8">
            35+ years of local expertise, just a message away.
          </p>
          <a
            href="https://wa.me/919845012548"
            target="_blank"
            className="inline-block bg-[#C9A055] text-black font-semibold px-10 py-4 text-sm tracking-wider uppercase hover:bg-[#b8913e] transition"
          >
            Talk to Vani Estates
          </a>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Vani Estates",
            url: "https://www.vaniestates.com/about/",
            telephone: "+919845012548",
            email: "vaniestates@gmail.com",
            foundingDate: "2010",
            founder: { "@type": "Person", name: "Amarnath R" },
            areaServed: ["Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jayanagar",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560041",
              addressCountry: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "16",
            },
          }),
        }}
      />
    </div>
  );
}
