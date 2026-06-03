import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Vani Estates — Call, WhatsApp or Visit Us",
  description:
    "Get in touch with Vani Estates for buying, selling or renting property in South Bangalore. Call +91 98450 12548, WhatsApp us, or visit our office in Jayanagar, Bangalore 560041.",
  openGraph: {
    title: "Contact Vani Estates — Call, WhatsApp or Visit Us",
    description:
      "Call +91 98450 12548, WhatsApp, or email vaniestates@gmail.com. RERA registered real estate agents in Jayanagar, Bangalore.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-xs text-gray-600">
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">Contact</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
        <p
          className="text-[11px] mb-4 font-sans-ui"
          style={{ color: "#C9A055", letterSpacing: 5, textTransform: "uppercase" }}
        >
          Get In Touch
        </p>
        <h1
          className="font-serif-display mb-6 leading-[1.05]"
          style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#F5EFE8", fontWeight: 300 }}
        >
          Let&apos;s start a{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            conversation
          </em>
          .
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-sans-ui">
          Looking to buy, sell or rent in South Bangalore? The fastest way to reach us is on
          WhatsApp — we usually reply within the hour.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-10">
        {/* Left: contact details + CTAs */}
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/919845012548"
              target="_blank"
              className="bg-[#25D366] text-white text-center font-semibold py-4 text-sm tracking-wider hover:bg-[#1da851] transition"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919845012548"
              className="border border-[#C9A055] text-[#C9A055] text-center font-semibold py-4 text-sm tracking-wider hover:bg-[#C9A055] hover:text-black transition"
            >
              Call Now
            </a>
          </div>

          <div className="bg-[#111] border border-[#222] p-6 space-y-5">
            <div>
              <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">Phone</div>
              <a href="tel:+919845012548" className="text-gray-200 hover:text-[#C9A055]">
                +91 98450 12548
              </a>
            </div>
            <div>
              <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">WhatsApp</div>
              <a
                href="https://wa.me/919845012548"
                target="_blank"
                className="text-gray-200 hover:text-[#C9A055]"
              >
                wa.me/919845012548
              </a>
            </div>
            <div>
              <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">Email</div>
              <a
                href="mailto:vaniestates@gmail.com"
                className="text-gray-200 hover:text-[#C9A055] break-all"
              >
                vaniestates@gmail.com
              </a>
            </div>
            <div>
              <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">Office</div>
              <p className="text-gray-200">Jayanagar, Bangalore 560041</p>
            </div>
            <div className="pt-4 border-t border-[#222]">
              <p className="text-gray-600 text-xs">RERA: PRM/KA/RERA/1251/310/AG/250523/005790</p>
            </div>
          </div>

          {/* Visual-only contact form (no backend — submits to WhatsApp) */}
          <form
            action="https://wa.me/919845012548"
            method="get"
            target="_blank"
            className="bg-[#111] border border-[#222] p-6 space-y-4"
          >
            <h2 className="text-2xl font-serif-display" style={{ color: "#F5EFE8", fontWeight: 500 }}>Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:border-[#C9A055] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:border-[#C9A055] outline-none"
              />
            </div>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:border-[#C9A055] outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#C9A055] text-black font-semibold py-3 text-sm tracking-wider uppercase hover:bg-[#b8913e] transition"
            >
              Continue on WhatsApp
            </button>
            <p className="text-gray-600 text-xs">
              Tapping send opens WhatsApp so we can reply to you instantly.
            </p>
          </form>
        </div>

        {/* Right: map */}
        <div className="min-h-[400px]">
          <div className="bg-[#111] border border-[#222] h-full overflow-hidden">
            <iframe
              title="Vani Estates — Jayanagar, Bangalore"
              src="https://www.google.com/maps?q=Jayanagar,+Bangalore,+Karnataka+560041&output=embed"
              className="w-full h-full min-h-[400px]"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
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
            url: "https://www.vaniestates.com/contact/",
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
          }),
        }}
      />
    </div>
  );
}
