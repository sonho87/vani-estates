import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import EMICalculator from "./EMICalculator";
import ProtectContent from "./ProtectContent";

export const metadata: Metadata = {
  title: {
    default: "Vani Estates — Premium Property Consultants, Bangalore",
    template: "%s | Vani Estates",
  },
  description:
    "Jayanagar's most trusted property consultants since 1990. RERA registered. Buying, selling and renting premium apartments, villas, plots and commercial spaces across Jayanagar, JP Nagar, Banashankari and Basavanagudi.",
  keywords: [
    "real estate bangalore",
    "property jayanagar",
    "real estate agents south bangalore",
    "vani estates",
    "property consultants bangalore",
  ],
  metadataBase: new URL("https://www.vaniestates.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vani Estates",
  },
};

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919845012548"
      target="_blank"
      aria-label="WhatsApp Vani Estates"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12 2a9.91 9.91 0 0 0-8.56 14.88L2 22l5.26-1.38A9.9 9.9 0 0 0 12 21.83h.01a9.9 9.9 0 0 0 9.9-9.9 9.84 9.84 0 0 0-2.86-7.02zM12 20.15h-.01a8.21 8.21 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 1 1 6.99 3.86zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.55.12s-.63.8-.77.96-.28.18-.53.06a6.74 6.74 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.39.11-.51.12-.12.25-.3.37-.45a1.6 1.6 0 0 0 .25-.41.45.45 0 0 0 0-.43c-.06-.12-.55-1.33-.75-1.82s-.4-.41-.55-.41h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.78 4.78 0 0 0 1 2.52 11 11 0 0 0 4.2 3.7c.59.25 1 .4 1.36.51a3.27 3.27 0 0 0 1.49.09 2.44 2.44 0 0 0 1.6-1.13 2 2 0 0 0 .14-1.13c-.05-.1-.21-.16-.46-.28z" />
      </svg>
    </a>
  );
}

function Footer() {
  const localityLinks = [
    "Jayanagar",
    "JP Nagar",
    "Banashankari",
    "Basavanagudi",
    "Bilekahalli",
  ];

  return (
    <footer className="bg-[#EDE8DF] border-t border-[#DDD8CE] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div
              className="text-2xl mb-1"
              style={{ color: "#1A1410", fontFamily: "var(--serif)", fontWeight: 600, letterSpacing: 1 }}
            >
              VANI ESTATES
            </div>
            <div
              className="text-[10px] mb-4"
              style={{ color: "#C9A055", letterSpacing: 3, textTransform: "uppercase", fontFamily: "var(--sans)" }}
            >
              Property Consultants
            </div>
            <p className="text-[#7A6F60] text-sm leading-relaxed">
              RERA Registered: PRM/KA/RERA/1251/310/AG/250523/005790. Jayanagar&apos;s most
              trusted real estate name since 1990.
            </p>
          </div>

          <div>
            <h4
              className="text-[11px] mb-4"
              style={{ color: "#5A4F40", letterSpacing: 3, textTransform: "uppercase" }}
            >
              Localities
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#7A6F60]">
              {localityLinks.map((l) => (
                <Link key={l} href="/properties/" className="hover:text-[#C9A055] transition">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-[11px] mb-4"
              style={{ color: "#5A4F40", letterSpacing: 3, textTransform: "uppercase" }}
            >
              Explore
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#7A6F60]">
              <Link href="/properties/" className="hover:text-[#C9A055] transition">Properties</Link>
              <Link href="/blog/" className="hover:text-[#C9A055] transition">Blog</Link>
              <Link href="/about/" className="hover:text-[#C9A055] transition">About Us</Link>
              <Link href="/contact/" className="hover:text-[#C9A055] transition">Contact</Link>
            </div>
          </div>

          <div>
            <h4
              className="text-[11px] mb-4"
              style={{ color: "#5A4F40", letterSpacing: 3, textTransform: "uppercase" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#7A6F60]">
              <a href="tel:+919845012548" className="hover:text-[#C9A055]">+91 98450 12548</a>
              <a href="mailto:vaniestates@gmail.com" className="hover:text-[#C9A055]">vaniestates@gmail.com</a>
              <span>#14, 9th Main Road,</span>
              <span>3rd Block Jayanagar,</span>
              <span>Bangalore – 560 011</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#DDD8CE] pt-8 text-center text-xs text-[#7A6F60]">
          © {new Date().getFullYear()} Vani Estates · All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <EMICalculator />
        <FloatingWhatsApp />
        <ProtectContent />
      </body>
    </html>
  );
}
