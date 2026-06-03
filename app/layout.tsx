import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import SiteHeader from "./SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Vani Estates — Trusted Real Estate Agents in South Bangalore",
    template: "%s | Vani Estates",
  },
  description: "RERA registered real estate agency specializing in Jayanagar, JP Nagar, Banashankari & Basavanagudi. 35+ years of trusted property dealing in South Bangalore.",
  keywords: ["real estate bangalore", "property jayanagar", "real estate agents south bangalore", "vani estates"],
  metadataBase: new URL("https://www.vaniestates.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vani Estates",
  },
};

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#222] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3
              className="text-2xl mb-1"
              style={{ color: "#F5EFE8", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: 1 }}
            >
              VANI ESTATES
            </h3>
            <div
              className="text-[10px] mb-4"
              style={{ color: "#C9A055", letterSpacing: 3, textTransform: "uppercase", fontFamily: "Jost, sans-serif" }}
            >
              Property Consultants
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              RERA Registered: PRM/KA/RERA/1251/310/AG/250523/005790. Jayanagar&apos;s most trusted real estate name since 1990.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Localities</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              {["Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi", "Bilekahalli"].map((l) => (
                <Link key={l} href={`/properties/?locality=${l}`} className="hover:text-[#C9A055] transition">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <span>Property Buying</span>
              <span>Property Selling</span>
              <span>Rental Services</span>
              <span>NRI Property Management</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <a href="tel:+919845012548" className="hover:text-[#C9A055]">+91 98450 12548</a>
              <a href="mailto:vaniestates@gmail.com" className="hover:text-[#C9A055]">vaniestates@gmail.com</a>
              <span>Jayanagar, Bangalore 560041</span>
            </div>
          </div>
        </div>
        <div className="border-t border-[#222] pt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Vani Estates. All rights reserved.
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
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
