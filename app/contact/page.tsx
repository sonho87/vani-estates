import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Contact Vani Estates — Call, WhatsApp or Visit Us",
  description:
    "Get in touch with Vani Estates for buying, selling or renting property in South Bangalore. Call +91 98450 12548, WhatsApp, or visit our office in 3rd Block Jayanagar.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="eyebrow eyebrow-wide mb-4">Get in Touch</div>
          <h1
            className="mb-7 leading-[1.05]"
            style={{
              ...serif,
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "#1A1410",
              fontWeight: 300,
            }}
          >
            Let&apos;s find your{" "}
            <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
              perfect property
            </em>
          </h1>
          <p
            className="mb-12"
            style={{
              fontFamily: "var(--sans)",
              color: "#7A6F60",
              fontSize: 15,
              lineHeight: 1.85,
            }}
          >
            Our consultants are available 7 days a week to help you find, buy, sell, or
            rent the right property in South Bangalore.
          </p>

          <div className="space-y-6">
            {[
              ["Phone", "+91 98450 12548", "tel:+919845012548"],
              ["WhatsApp", "+91 98450 12548", "https://wa.me/919845012548"],
              ["Email", "vaniestates@gmail.com", "mailto:vaniestates@gmail.com"],
              [
                "Office",
                "#14, 9th Main Road, 3rd Block Jayanagar, Bangalore – 560 011",
                null,
              ],
              ["Hours", "Mon – Sat 9 AM – 7 PM · Sunday 10 AM – 5 PM", null],
            ].map(([k, v, href]) => (
              <div key={k} className="flex gap-5 border-b border-[#DDD8CE] pb-5">
                <div
                  className="text-[11px] min-w-[90px] pt-0.5"
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
                  className="text-[15px]"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#1A1410",
                    lineHeight: 1.6,
                  }}
                >
                  {href ? (
                    <a
                      href={href as string}
                      target={(href as string).startsWith("http") ? "_blank" : undefined}
                      className="hover:text-[#C9A055] transition"
                    >
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="https://wa.me/919845012548"
              target="_blank"
              className="bg-[#25D366] text-white px-8 py-3 hover:bg-[#1da851] transition"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919845012548"
              className="border border-[#C9A055] text-[#C9A055] px-8 py-3 hover:bg-[#C9A055] hover:text-white transition"
              style={{
                fontFamily: "var(--sans)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Form + map */}
        <div className="space-y-6">
          <form
            action="https://wa.me/919845012548"
            method="get"
            target="_blank"
            className="bg-white border border-[#DDD8CE] p-9 space-y-4"
          >
            <h2
              className="text-2xl mb-1"
              style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
            >
              Send us a message
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
            >
              We&apos;ll reply on WhatsApp — usually within the hour.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#F5F0E8] border border-[#DDD8CE] px-4 py-3 text-sm outline-none focus:border-[#C9A055]"
                style={{ fontFamily: "var(--sans)", color: "#1A1410" }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#F5F0E8] border border-[#DDD8CE] px-4 py-3 text-sm outline-none focus:border-[#C9A055]"
                style={{ fontFamily: "var(--sans)", color: "#1A1410" }}
              />
            </div>
            <select
              className="w-full bg-[#F5F0E8] border border-[#DDD8CE] px-4 py-3 text-sm outline-none focus:border-[#C9A055]"
              style={{ fontFamily: "var(--sans)", color: "#1A1410" }}
              defaultValue="Buy"
            >
              <option>Buy</option>
              <option>Rent</option>
              <option>Sell</option>
              <option>Rent Out My Property</option>
              <option>NRI Property Management</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us what you're looking for…"
              className="w-full bg-[#F5F0E8] border border-[#DDD8CE] px-4 py-3 text-sm outline-none resize-none focus:border-[#C9A055]"
              style={{ fontFamily: "var(--sans)", color: "#1A1410" }}
            />
            <button
              type="submit"
              className="w-full bg-[#C9A055] text-white py-3 text-sm hover:bg-[#b8913e] transition"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Continue on WhatsApp
            </button>
            <p
              className="text-[11px]"
              style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
            >
              Tapping send opens WhatsApp so we can reply to you instantly.
            </p>
          </form>

          <div
            className="bg-white border border-[#DDD8CE] overflow-hidden flex flex-col"
            style={{ minHeight: 320 }}
          >
            <iframe
              title="Vani Estates — Jayanagar"
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Vani Estates",
            url: "https://www.vaniestates.com/contact/",
            telephone: "+919845012548",
            email: "vaniestates@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "#14, 9th Main Road, 3rd Block Jayanagar",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560011",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </div>
  );
}
