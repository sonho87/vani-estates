import Link from "next/link";
import { properties, blogs, testimonials } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const serif = { fontFamily: "var(--serif)" };

export default function Home() {
  const featured = properties.filter((p: any) => p.featured).slice(0, 6);
  const latestBlogs = blogs.slice(-4).reverse();

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #F5F0E8 0%, #EDE8DF 100%)",
        }}
      >
        {/* Soft gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 50%, rgba(201,160,85,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,160,85,0.06) 0%, transparent 50%)",
          }}
        />
        {/* Vertical gold line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(201,160,85,0.18), transparent)",
          }}
        />

        <div className="relative text-center max-w-4xl w-full">
          <p className="eyebrow eyebrow-wide mb-5 fade-in">
            Jayanagar&apos;s Most Trusted — Since 1990
          </p>

          <h1
            className="leading-none mb-3 fade-in"
            style={{
              ...serif,
              color: "#1A1410",
              fontWeight: 300,
              fontSize: "clamp(52px, 8vw, 96px)",
              letterSpacing: -1,
            }}
          >
            Luxury Lives Here
          </h1>

          <div
            className="italic mb-8 fade-in"
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
            className="text-base md:text-lg max-w-2xl mx-auto mb-12 fade-in"
            style={{
              color: "#7A6F60",
              lineHeight: 1.8,
              fontFamily: "var(--sans)",
            }}
          >
            Discover premium apartments, villas, plots and commercial spaces across
            Jayanagar, JP Nagar, Banashankari and Basavanagudi.
          </p>

          {/* Search Widget */}
          <div
            className="bg-white border border-[#DDD8CE] shadow-sm fade-in mx-auto max-w-3xl text-left"
          >
            <div className="flex border-b border-[#DDD8CE]">
              {["Buy", "Rent", "Resale", "New Projects"].map((t, i) => (
                <div
                  key={t}
                  className="flex-1 text-center py-3 cursor-default"
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 13,
                    letterSpacing: 1,
                    color: i === 0 ? "#C9A055" : "#7A6F60",
                    borderBottom:
                      i === 0 ? "2px solid #C9A055" : "2px solid transparent",
                    marginBottom: -1,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-4"
              style={{ gap: 1, background: "#DDD8CE" }}
            >
              {[
                { ph: "All Areas", opts: ["All Areas", "Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi"] },
                { ph: "All Types", opts: ["All Types", "Apartment", "Villa", "Plot", "Commercial"] },
                { ph: "Any Budget", opts: ["Any Budget", "Under ₹50L", "₹50L–₹1Cr", "₹1Cr–₹2Cr", "₹2Cr+"] },
              ].map((s) => (
                <select
                  key={s.ph}
                  className="bg-[#EDE8DF] px-4 py-4 outline-none appearance-none cursor-pointer"
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 13,
                    color: "#1A1410",
                  }}
                  defaultValue={s.ph}
                >
                  {s.opts.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ))}
              <Link
                href="/properties/"
                className="bg-[#C9A055] hover:bg-[#e6b86a] text-white text-center flex items-center justify-center px-6 py-4 transition"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                Search
              </Link>
            </div>
          </div>

          {/* Quick locality links */}
          <div className="flex gap-7 justify-center mt-8 flex-wrap fade-in">
            {["Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi"].map((l) => (
              <Link
                key={l}
                href="/properties/"
                className="text-xs hover:text-[#C9A055] transition"
                style={{
                  fontFamily: "var(--sans)",
                  color: "#7A6F60",
                  letterSpacing: 1,
                }}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <div
            className="text-[10px]"
            style={{
              fontFamily: "var(--sans)",
              color: "#7A6F60",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Scroll
          </div>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, #C9A05560, transparent)",
            }}
          />
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <section
        className="border-y border-[#DDD8CE]"
        style={{ background: "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "500+", label: "Properties Sold" },
            { num: "35+", label: "Years of Trust" },
            { num: "4.9★", label: "Google Rating" },
            { num: "4", label: "Prime Localities" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-10 text-center ${
                i < 3 ? "md:border-r border-[#DDD8CE]" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-[#DDD8CE]" : ""}`}
            >
              <div
                className="text-4xl md:text-5xl leading-none"
                style={{ ...serif, color: "#C9A055", fontWeight: 700 }}
              >
                {s.num}
              </div>
              <div
                className="text-[11px] mt-2"
                style={{
                  fontFamily: "var(--sans)",
                  color: "#7A6F60",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── FEATURED PROPERTIES ───────── */}
      <section className="py-24" style={{ background: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <div className="eyebrow mb-3">Handpicked for You</div>
              <h2
                className="text-4xl md:text-5xl leading-tight"
                style={{ ...serif, color: "#1A1410", fontWeight: 400 }}
              >
                Featured Properties
              </h2>
            </div>
            <Link
              href="/properties/"
              className="text-[#C9A055] hover:text-[#b8913e] transition"
              style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 1 }}
            >
              View all listings →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p: any) => (
              <Link
                href={`/properties/${p.slug}/`}
                key={p.id}
                className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition overflow-hidden"
              >
                <div className="h-56 bg-[#EDE8DF] overflow-hidden relative">
                  {p.heroImage && (
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      loading="lazy"
                    />
                  )}
                  {p.badge && (
                    <span
                      className="absolute top-3 left-3 bg-[#C9A055] text-white text-xs font-semibold px-3 py-1"
                      style={{ fontFamily: "var(--sans)", letterSpacing: 1 }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <span
                    className="absolute top-3 right-3 bg-white/90 text-[#5A4F40] text-[10px] px-3 py-1"
                    style={{
                      fontFamily: "var(--sans)",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    {p.status === "Rent" ? "For Rent" : "For Sale"}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl mb-2 line-clamp-2 group-hover:text-[#C9A055] transition"
                    style={{
                      ...serif,
                      color: "#1A1410",
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-xs mb-4"
                    style={{
                      fontFamily: "var(--sans)",
                      color: "#7A6F60",
                      letterSpacing: 1,
                    }}
                  >
                    {p.locality}, {p.city}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#EDE8DF]">
                    <span
                      style={{
                        ...serif,
                        color: "#C9A055",
                        fontWeight: 600,
                        fontSize: 22,
                      }}
                    >
                      {formatPrice(p.price, p.status)}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--sans)",
                        color: "#7A6F60",
                      }}
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
              className="inline-block border border-[#DDD8CE] hover:border-[#C9A055] hover:text-[#C9A055] transition"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 12,
                color: "#5A4F40",
                letterSpacing: 2,
                textTransform: "uppercase",
                padding: "12px 36px",
              }}
            >
              View all {properties.length} Properties
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── WHY VANI ESTATES ───────── */}
      <section
        className="py-24 border-y border-[#DDD8CE]"
        style={{ background: "#EDE8DF" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="eyebrow mb-3">Why Vani Estates</div>
          <h2
            className="text-4xl md:text-5xl mb-4 leading-tight"
            style={{ ...serif, color: "#1A1410", fontWeight: 400 }}
          >
            Three decades of{" "}
            <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
              trust
            </em>
            , built one family at a time
          </h2>
          <p
            className="max-w-2xl mx-auto mb-14"
            style={{
              fontFamily: "var(--sans)",
              color: "#7A6F60",
              lineHeight: 1.8,
            }}
          >
            Vani Estates is South Bangalore&apos;s most established name in property —
            because we&apos;ve been on the ground, in these neighbourhoods, since 1990.
          </p>

          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              {
                icon: "◈",
                t: "Transparent Dealings",
                d: "No hidden charges, no misleading information. Every transaction clear and documented.",
              },
              {
                icon: "◉",
                t: "Deep Local Knowledge",
                d: "35 years on these streets — every builder, every project, every market trend.",
              },
              {
                icon: "◎",
                t: "End-to-End Support",
                d: "From shortlists and site visits to paperwork and registration — we guide every step.",
              },
              {
                icon: "◐",
                t: "Trusted Community",
                d: "Hundreds of happy families. Most of our business comes by referral.",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="bg-white border border-[#DDD8CE] p-8"
              >
                <div
                  className="text-3xl mb-4 opacity-80"
                  style={{ color: "#C9A055" }}
                >
                  {b.icon}
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
                >
                  {b.t}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#7A6F60",
                    lineHeight: 1.7,
                  }}
                >
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── INSIGHTS / JOURNAL ───────── */}
      <section className="py-24" style={{ background: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <div className="eyebrow mb-3">Insights &amp; Guides</div>
              <h2
                className="text-4xl md:text-5xl leading-tight"
                style={{ ...serif, color: "#1A1410", fontWeight: 400 }}
              >
                From Our Journal
              </h2>
            </div>
            <Link
              href="/blog/"
              className="text-[#C9A055] hover:text-[#b8913e] transition"
              style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 1 }}
            >
              Read all articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestBlogs.map((b: any) => (
              <Link
                href={`/blog/${b.slug}/`}
                key={b.id}
                className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition p-6"
              >
                <div
                  className="text-[10px] mb-3"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#C9A055",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {b.category} · {b.date}
                </div>
                <h3
                  className="text-xl mb-3 line-clamp-2 group-hover:text-[#C9A055] transition"
                  style={{
                    ...serif,
                    color: "#1A1410",
                    fontWeight: 600,
                    lineHeight: 1.25,
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-xs line-clamp-3 mb-4"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#7A6F60",
                    lineHeight: 1.7,
                  }}
                >
                  {b.excerpt}
                </p>
                <span
                  className="text-xs text-[#C9A055]"
                  style={{ fontFamily: "var(--sans)", letterSpacing: 1.5 }}
                >
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      {testimonials && testimonials.length > 0 && (
        <section
          className="py-24 border-y border-[#DDD8CE]"
          style={{ background: "#EDE8DF" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="eyebrow mb-3">Client Stories</div>
              <h2
                className="text-4xl md:text-5xl leading-tight"
                style={{ ...serif, color: "#1A1410", fontWeight: 400 }}
              >
                What our clients say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((t: any) => (
                <div
                  key={t.id}
                  className="bg-white border border-[#DDD8CE] p-9"
                >
                  <div
                    className="text-[#C9A055] mb-5"
                    style={{ fontSize: 22, letterSpacing: 4 }}
                  >
                    {"★".repeat(t.rating)}
                  </div>
                  <p
                    className="mb-7"
                    style={{
                      ...serif,
                      color: "#1A1410",
                      fontWeight: 400,
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      fontSize: 19,
                    }}
                  >
                    “{t.text}”
                  </p>
                  <div className="border-t border-[#EDE8DF] pt-5">
                    <div
                      className="text-sm"
                      style={{
                        color: "#1A1410",
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-[11px] mt-1"
                      style={{
                        color: "#C9A055",
                        letterSpacing: 1.5,
                        fontFamily: "var(--sans)",
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

      {/* ───────── CLOSING CTA ───────── */}
      <section
        className="py-28 text-center"
        style={{
          background:
            "linear-gradient(180deg, #F5F0E8 0%, #EDE8DF 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="eyebrow eyebrow-wide mb-4">Begin Your Journey</div>
          <h2
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{ ...serif, color: "#1A1410", fontWeight: 400 }}
          >
            Ready to find your{" "}
            <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
              next address
            </em>
            ?
          </h2>
          <p
            className="mb-10"
            style={{
              fontFamily: "var(--sans)",
              color: "#7A6F60",
              lineHeight: 1.8,
            }}
          >
            Tell us what you&apos;re looking for. We&apos;ll come back with shortlists,
            paperwork checks, and honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919845012548"
              target="_blank"
              className="inline-block bg-[#C9A055] text-white px-12 py-4 hover:bg-[#b8913e] transition"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Talk to Vani Estates
            </a>
            <a
              href="tel:+919845012548"
              className="inline-block border border-[#C9A055] text-[#C9A055] px-12 py-4 hover:bg-[#C9A055] hover:text-white transition"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              +91 98450 12548
            </a>
          </div>
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
            foundingDate: "1990",
            address: {
              "@type": "PostalAddress",
              streetAddress: "#14, 9th Main Road, 3rd Block Jayanagar",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560011",
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
