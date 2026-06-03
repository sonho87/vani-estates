import Link from "next/link";
import { properties, blogs, testimonials } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const serif = { fontFamily: "'Cormorant Garamond', serif" };

export default function Home() {
  const featured = properties.filter((p: any) => p.featured).slice(0, 6);
  const latestBlogs = blogs.slice(-4).reverse();

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #080810 0%, #0f0a05 50%, #080810 100%)",
        }}
      >
        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 50%, rgba(201,160,85,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,160,85,0.05) 0%, transparent 50%)",
          }}
        />
        {/* Vertical gold line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(201,160,85,0.10), transparent)",
          }}
        />

        <div className="relative text-center max-w-4xl w-full">
          <p
            className="text-[11px] mb-6"
            style={{
              color: "#C9A055",
              letterSpacing: 5,
              textTransform: "uppercase",
              fontFamily: "Jost, sans-serif",
            }}
          >
            Jayanagar&apos;s Most Trusted — Since 1990
          </p>

          <h1
            className="leading-none mb-3"
            style={{
              ...serif,
              color: "#F5EFE8",
              fontWeight: 300,
              fontSize: "clamp(52px, 8vw, 96px)",
              letterSpacing: -1,
            }}
          >
            Luxury Lives Here
          </h1>

          <div
            className="italic mb-8"
            style={{
              ...serif,
              color: "#C9A055",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 48px)",
            }}
          >
            in South Bangalore
          </div>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-12"
            style={{
              color: "#8a8078",
              lineHeight: 1.8,
              fontFamily: "Jost, sans-serif",
            }}
          >
            Discover premium apartments, villas, plots and commercial spaces across
            Jayanagar, JP Nagar, Banashankari and Basavanagudi — handpicked by
            consultants who&apos;ve worked these streets for 35 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties/"
              className="bg-[#C9A055] text-black font-semibold px-10 py-4 hover:bg-[#e6b86a] transition"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Browse Properties
            </Link>
            <a
              href="https://wa.me/919845012548"
              target="_blank"
              className="border border-[#C9A055] text-[#C9A055] font-semibold px-10 py-4 hover:bg-[#C9A055] hover:text-black transition"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Talk to a Consultant
            </a>
          </div>

          <div className="flex gap-6 justify-center mt-10 flex-wrap">
            {["Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi"].map((l) => (
              <Link
                key={l}
                href="/properties/"
                className="text-xs text-gray-500 hover:text-[#C9A055] transition"
                style={{ fontFamily: "Jost, sans-serif", letterSpacing: 1 }}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <div
            className="text-[10px] text-gray-500"
            style={{ fontFamily: "Jost, sans-serif", letterSpacing: 3, textTransform: "uppercase" }}
          >
            Scroll
          </div>
          <div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, #C9A05560, transparent)" }}
          />
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────────────── */}
      <section className="bg-[#0c0c0c] border-y border-[#222]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "500+", label: "Properties Dealt" },
            { num: "35+", label: "Years of Trust" },
            { num: "4.9★", label: "Google Rating" },
            { num: "RERA", label: "Registered Agent" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-10 text-center ${i < 3 ? "md:border-r border-[#222]" : ""} ${i < 2 ? "border-b md:border-b-0 border-[#222]" : ""}`}
            >
              <div
                className="text-4xl md:text-5xl leading-none"
                style={{ ...serif, color: "#C9A055", fontWeight: 700 }}
              >
                {s.num}
              </div>
              <div
                className="text-[11px] text-gray-500 mt-2"
                style={{ fontFamily: "Jost, sans-serif", letterSpacing: 2, textTransform: "uppercase" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PROPERTIES ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <div
                className="text-[11px] mb-3"
                style={{
                  color: "#C9A055",
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Handpicked for You
              </div>
              <h2
                className="text-4xl md:text-5xl leading-tight"
                style={{ ...serif, color: "#F5EFE8", fontWeight: 400 }}
              >
                Featured Properties
              </h2>
            </div>
            <Link
              href="/properties/"
              className="text-[#C9A055] hover:text-[#e6b86a] transition"
              style={{ fontFamily: "Jost, sans-serif", fontSize: 13, letterSpacing: 1 }}
            >
              View all listings →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p: any) => (
              <Link
                href={`/properties/${p.slug}/`}
                key={p.id}
                className="group bg-[#111] border border-[#222] hover:border-[#C9A055]/40 transition overflow-hidden"
              >
                <div className="h-56 bg-[#1a1a1a] overflow-hidden relative">
                  {p.heroImage && (
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  )}
                  {p.badge && (
                    <span
                      className="absolute top-3 left-3 bg-[#C9A055] text-black text-xs font-semibold px-3 py-1"
                      style={{ fontFamily: "Jost, sans-serif", letterSpacing: 1 }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <span
                    className="absolute top-3 right-3 bg-black/70 text-gray-300 text-[10px] px-3 py-1"
                    style={{ fontFamily: "Jost, sans-serif", letterSpacing: 2, textTransform: "uppercase" }}
                  >
                    {p.status === "Rent" ? "For Rent" : "For Sale"}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl mb-2 line-clamp-2 group-hover:text-[#C9A055] transition"
                    style={{ ...serif, color: "#F5EFE8", fontWeight: 500, lineHeight: 1.2 }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-xs text-gray-500 mb-4"
                    style={{ fontFamily: "Jost, sans-serif", letterSpacing: 1 }}
                  >
                    {p.locality}, {p.city}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#1f1f1f]">
                    <span
                      className="text-[#C9A055]"
                      style={{ ...serif, fontWeight: 600, fontSize: 22 }}
                    >
                      {formatPrice(p.price, p.status)}
                    </span>
                    <span
                      className="text-gray-600 text-xs"
                      style={{ fontFamily: "Jost, sans-serif" }}
                    >
                      {p.area} sq.ft · {p.bhk} BHK
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/properties/"
              className="inline-block border border-[#333] text-gray-400 px-10 py-3 hover:border-[#C9A055] hover:text-[#C9A055] transition"
              style={{ fontFamily: "Jost, sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}
            >
              View all {properties.length} Properties
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY VANI ESTATES ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className="text-[11px] mb-3"
            style={{
              color: "#C9A055",
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "Jost, sans-serif",
            }}
          >
            Why Vani Estates
          </div>
          <h2
            className="text-4xl md:text-5xl mb-4 leading-tight"
            style={{ ...serif, color: "#F5EFE8", fontWeight: 400 }}
          >
            Three decades of <em className="text-[#C9A055] font-normal">trust</em>,
            built one family at a time
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mb-14"
            style={{ fontFamily: "Jost, sans-serif", lineHeight: 1.8 }}
          >
            Vani Estates is South Bangalore&apos;s most established name in property —
            because we&apos;ve been on the ground, in these neighbourhoods, since 1990.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                t: "Local Expertise",
                d: "Every street, every builder, every market trend across Jayanagar, JP Nagar, Banashankari and Basavanagudi.",
              },
              {
                t: "Transparent Dealings",
                d: "RERA-registered, paperwork-first, no hidden charges. The way property should be done.",
              },
              {
                t: "Trusted Community",
                d: "500+ properties dealt. 4.9★ on Google. Most of our business comes by referral.",
              },
            ].map((b) => (
              <div key={b.t} className="bg-[#0f0f0f] border border-[#1f1f1f] p-8">
                <div
                  className="text-3xl mb-4"
                  style={{ color: "#C9A055" }}
                >
                  ✦
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ ...serif, color: "#F5EFE8", fontWeight: 500 }}
                >
                  {b.t}
                </h3>
                <p
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "Jost, sans-serif", lineHeight: 1.7 }}
                >
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSIGHTS / BLOG ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <div
                className="text-[11px] mb-3"
                style={{
                  color: "#C9A055",
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Insights & Guides
              </div>
              <h2
                className="text-4xl md:text-5xl leading-tight"
                style={{ ...serif, color: "#F5EFE8", fontWeight: 400 }}
              >
                From Our Journal
              </h2>
            </div>
            <Link
              href="/blog/"
              className="text-[#C9A055] hover:text-[#e6b86a] transition"
              style={{ fontFamily: "Jost, sans-serif", fontSize: 13, letterSpacing: 1 }}
            >
              Read all articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestBlogs.map((b: any) => (
              <Link
                href={`/blog/${b.slug}/`}
                key={b.id}
                className="group bg-[#111] border border-[#222] hover:border-[#C9A055]/40 transition p-6"
              >
                <div
                  className="text-[10px] mb-3"
                  style={{
                    color: "#C9A055",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontFamily: "Jost, sans-serif",
                  }}
                >
                  {b.category} · {b.date}
                </div>
                <h3
                  className="text-xl mb-3 line-clamp-2 group-hover:text-[#C9A055] transition"
                  style={{ ...serif, color: "#F5EFE8", fontWeight: 500, lineHeight: 1.25 }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-xs text-gray-500 line-clamp-3 mb-4"
                  style={{ fontFamily: "Jost, sans-serif", lineHeight: 1.7 }}
                >
                  {b.excerpt}
                </p>
                <span
                  className="text-[#C9A055] text-xs"
                  style={{ fontFamily: "Jost, sans-serif", letterSpacing: 1.5 }}
                >
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────────────── */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-24 bg-[#050505] border-y border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div
              className="text-[11px] mb-3"
              style={{
                color: "#C9A055",
                letterSpacing: 4,
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
              }}
            >
              Client Stories
            </div>
            <h2
              className="text-4xl md:text-5xl mb-14 leading-tight"
              style={{ ...serif, color: "#F5EFE8", fontWeight: 400 }}
            >
              What our clients say
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {testimonials.slice(0, 6).map((t: any) => (
                <div key={t.id} className="bg-[#0f0f0f] border border-[#1f1f1f] p-8">
                  <div className="text-[#C9A055] text-xl mb-4" style={{ letterSpacing: 4 }}>
                    {"★".repeat(t.rating)}
                  </div>
                  <p
                    className="text-gray-300 mb-6 line-clamp-4"
                    style={{ ...serif, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, fontSize: 18 }}
                  >
                    “{t.text}”
                  </p>
                  <div>
                    <div
                      className="text-sm"
                      style={{ color: "#F5EFE8", fontFamily: "Jost, sans-serif", fontWeight: 500 }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-[11px] mt-1"
                      style={{
                        color: "#C9A055",
                        letterSpacing: 1.5,
                        fontFamily: "Jost, sans-serif",
                      }}
                    >
                      {t.property}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CLOSING CTA ───────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-b from-[#0a0a0a] to-[#0c0905] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="text-[11px] mb-4"
            style={{
              color: "#C9A055",
              letterSpacing: 5,
              textTransform: "uppercase",
              fontFamily: "Jost, sans-serif",
            }}
          >
            Begin Your Journey
          </div>
          <h2
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{ ...serif, color: "#F5EFE8", fontWeight: 400 }}
          >
            Ready to find your <em className="text-[#C9A055] font-normal">next address</em>?
          </h2>
          <p
            className="text-gray-500 mb-10"
            style={{ fontFamily: "Jost, sans-serif", lineHeight: 1.8 }}
          >
            Send us what you&apos;re looking for. We&apos;ll come back with shortlists,
            paperwork checks, and honest pricing.
          </p>
          <a
            href="https://wa.me/919845012548"
            target="_blank"
            className="inline-block bg-[#C9A055] text-black px-12 py-4 hover:bg-[#e6b86a] transition"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Talk to Vani Estates
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Vani Estates",
            url: "https://www.vaniestates.com",
            telephone: "+919845012548",
            email: "vaniestates@gmail.com",
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
    </>
  );
}
