import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "About Vani Estates — RERA Registered Property Consultants in Bangalore",
  description:
    "Founded in 1990 by Amarnath R, Vani Estates is Jayanagar's most trusted property consultancy. 35+ years of South Bangalore real estate expertise across Jayanagar, JP Nagar, Banashankari & Basavanagudi.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Vani Estates — RERA Registered Property Consultants in Bangalore",
    description:
      "35+ years of trusted real estate service. Founded by Amarnath R in 1990. Buying, selling, renting and NRI property management in South Bangalore.",
  },
};

export default function AboutPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      {/* Hero */}
      <section
        className="text-center px-6 py-24 border-b border-[#DDD8CE]"
        style={{ background: "#EDE8DF" }}
      >
        <p className="eyebrow eyebrow-wide mb-4">Est. 1990 · Jayanagar, Bangalore</p>
        <h1
          className="mb-5 leading-[1.05] mx-auto max-w-4xl"
          style={{
            ...serif,
            fontSize: "clamp(44px, 7vw, 80px)",
            color: "#1A1410",
            fontWeight: 300,
          }}
        >
          About{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            Vani Estates
          </em>
        </h1>
        <p
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--sans)",
            color: "#7A6F60",
            fontSize: 17,
            lineHeight: 1.9,
          }}
        >
          Jayanagar&apos;s most trusted property consultants for over 35 years. We&apos;ve
          helped thousands of families buy, sell and rent their perfect home in South
          Bangalore.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Story + Stats */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="eyebrow mb-4">Our Story</div>
            <h2
              className="mb-7 leading-tight"
              style={{
                ...serif,
                fontSize: "clamp(32px, 4.5vw, 48px)",
                color: "#1A1410",
                fontWeight: 400,
              }}
            >
              35 years of trusted service in{" "}
              <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
                South Bangalore
              </em>
            </h2>
            <div
              className="space-y-5"
              style={{
                fontFamily: "var(--sans)",
                color: "#5A4F40",
                fontSize: 15,
                lineHeight: 1.9,
              }}
            >
              <p>
                Founded by <strong style={{ color: "#1A1410" }}>Amarnath R</strong> in 1990,
                Vani Estates began as a small consultancy in Jayanagar with one simple
                mission — to help families find the right property with complete honesty
                and transparency.
              </p>
              <p>
                Over three decades, we&apos;ve grown into one of South Bangalore&apos;s
                most recognized real estate firms, serving clients across Jayanagar, JP
                Nagar, Banashankari and Basavanagudi.
              </p>
              <p>
                Amarnath is also the proud owner of{" "}
                <strong style={{ color: "#1A1410" }}>Vani Circulating Library</strong> in
                Jayanagar 2nd Block — a beloved community institution that reflects our
                deep roots in the neighbourhood.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#DDD8CE] p-10 flex flex-col gap-8">
            {[
              ["500+", "Properties Dealt"],
              ["3000+", "Happy Clients"],
              ["35+", "Years of Experience"],
              ["4", "Prime Localities"],
            ].map(([num, label], i, arr) => (
              <div
                key={label}
                className={`flex items-center gap-6 ${
                  i < arr.length - 1 ? "pb-7 border-b border-[#EDE8DF]" : ""
                }`}
              >
                <div
                  className="leading-none min-w-[120px]"
                  style={{
                    ...serif,
                    fontSize: 52,
                    color: "#C9A055",
                    fontWeight: 700,
                  }}
                >
                  {num}
                </div>
                <div
                  className="text-[13px]"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#7A6F60",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Why Choose Us</div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ ...serif, color: "#1A1410", fontWeight: 400 }}
            >
              Our promise to you
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "◈",
                t: "Transparent Dealings",
                d: "No hidden charges, no misleading information. Every transaction is clear and documented.",
              },
              {
                icon: "◉",
                t: "Deep Local Knowledge",
                d: "35 years of experience in South Bangalore — every street, every builder, every market trend.",
              },
              {
                icon: "◎",
                t: "End-to-End Support",
                d: "From property search to registration, we guide you through every step of the process.",
              },
              {
                icon: "◐",
                t: "Trusted Community",
                d: "3000+ happy families. Our reputation is built on referrals and long-term relationships.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="bg-white border border-[#DDD8CE] p-8"
              >
                <div
                  className="text-3xl mb-4 opacity-80"
                  style={{ color: "#C9A055" }}
                >
                  {v.icon}
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
                >
                  {v.t}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#7A6F60",
                    lineHeight: 1.8,
                  }}
                >
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div id="team" className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">The People Behind Vani Estates</div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ ...serif, color: "#1A1410", fontWeight: 400 }}
            >
              Meet our team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Amarnath R",
                role: "Founder & CEO",
                exp: "35 Years",
                phone: "+91 98450 12548",
                photo: "/amarnath.jpg",
                bio: "Amarnath R is the heart of Vani Estates. With over 35 years in South Bangalore's real estate market, he brings unmatched expertise in property valuation, legal documentation, negotiation and registration. He also owns the iconic Vani Circulating Library in Jayanagar 2nd Block.",
              },
              {
                name: "Raakhesh Lakshman",
                role: "Senior Property Consultant",
                exp: "14 Years",
                phone: "+91 98450 12548",
                photo: null,
                bio: "Raakhesh brings 14 years of hands-on experience in South Bangalore's residential market. With deep knowledge of JP Nagar, Banashankari and Basavanagudi, he helps buyers and sellers navigate the market with confidence and clarity.",
              },
            ].map((a) => (
              <div
                key={a.name}
                className="bg-white border border-[#DDD8CE] flex gap-7 p-9"
              >
                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.name}
                    className="flex-shrink-0 w-24 h-24 rounded-full object-cover"
                    style={{
                      border: "2px solid rgba(201,160,85,0.45)",
                    }}
                  />
                ) : (
                  <div
                    className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center"
                    style={{
                      background: "#EDE8DF",
                      border: "2px solid rgba(201,160,85,0.35)",
                      color: "#C9A055",
                      opacity: 0.7,
                      ...serif,
                      fontSize: 38,
                      fontWeight: 600,
                    }}
                  >
                    {a.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <h3
                    className="text-2xl mb-1"
                    style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
                  >
                    {a.name}
                  </h3>
                  <div
                    className="text-xs mb-4"
                    style={{
                      fontFamily: "var(--sans)",
                      color: "#C9A055",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {a.role} · {a.exp} Experience
                  </div>
                  <p
                    className="mb-5 text-sm"
                    style={{
                      fontFamily: "var(--sans)",
                      color: "#5A4F40",
                      lineHeight: 1.8,
                    }}
                  >
                    {a.bio}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={`https://wa.me/${a.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      className="bg-[#25D366] text-white px-5 py-2 text-xs hover:bg-[#1da851] transition"
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`tel:${a.phone.replace(/\s/g, "")}`}
                      className="border border-[#C9A055]/60 text-[#C9A055] px-5 py-2 text-xs hover:bg-[#C9A055] hover:text-white transition"
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {a.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office / Location */}
        <div className="bg-white border border-[#DDD8CE] p-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">Find Us</div>
            <h2
              className="text-3xl md:text-4xl mb-7"
              style={{ ...serif, color: "#1A1410", fontWeight: 400 }}
            >
              Visit our office
            </h2>
            {[
              [
                "Address",
                "#14, 9th Main Road, 3rd Block Jayanagar\n(Next to SBI Bank), Bangalore – 560 011",
              ],
              ["Phone", "+91 98450 12548"],
              ["Email", "vaniestates@gmail.com"],
              [
                "Hours",
                "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 5:00 PM",
              ],
            ].map(([k, v]) => (
              <div key={k} className="mb-5 flex gap-4">
                <div
                  className="text-[11px] min-w-[80px] pt-0.5"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#7A6F60",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {k}
                </div>
                <div
                  className="text-sm whitespace-pre-line"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#1A1410",
                    lineHeight: 1.7,
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
          <div
            className="border border-[#DDD8CE] overflow-hidden flex flex-col"
            style={{ background: "#EDE8DF", minHeight: 320 }}
          >
            <iframe
              title="Vani Estates — Jayanagar 3rd Block"
              src="https://www.google.com/maps?q=Vani+Estates+%2314+9th+Main+Road+3rd+Block+Jayanagar+Bangalore+560011&output=embed"
              className="w-full flex-1"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Vani+Estates+%2314+9th+Main+Road+3rd+Block+Jayanagar+Bangalore+560011"
              target="_blank"
              className="block bg-[#C9A055] text-white text-center py-3 hover:bg-[#b8913e] transition"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

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
            foundingDate: "1990",
            founder: { "@type": "Person", name: "Amarnath R" },
            areaServed: ["Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi"],
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
    </div>
  );
}
