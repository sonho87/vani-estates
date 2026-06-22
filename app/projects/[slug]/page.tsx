import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

const statusColor: Record<string, string> = {
  "Ready to Move": "#2E7D32",
  Ongoing: "#C9A055",
  Upcoming: "#1565C0",
  Completed: "#6A4FB6",
};

export function generateStaticParams() {
  return projects.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x: any) => x.slug === slug) as any;
  if (!p) return {};
  return {
    title: `${p.name} by ${p.builder} — ${p.locality}, Bangalore`,
    description: `${p.name} by ${p.builder} in ${p.locality}, Bangalore. ${p.configurations} ${p.type.toLowerCase()}s · ${p.status}. ${p.overview.substring(0, 110)}...`,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: {
      title: `${p.name} by ${p.builder}`,
      description: `${p.configurations} · ${p.locality}, Bangalore · ${p.status}`,
      images: p.heroImage ? [{ url: p.heroImage }] : [],
    },
  };
}

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;
  const p = projects.find((x: any) => x.slug === slug) as any;
  if (!p) return notFound();

  const images = (p.images && p.images.length ? p.images : [p.heroImage]).filter(Boolean);

  const specs = [
    ["Builder", p.builder],
    ["Status", p.status],
    ["Configurations", p.configurations],
    ["Type", p.type],
    ["Locality", `${p.locality}, ${p.city}`],
    ["Sizes", p.sizeRange],
    ["Price", p.priceRange],
    ["Possession", p.possession],
    ["RERA", p.rera ? p.rera : "Available on request"],
  ];

  return (
    <article style={{ background: "#F5F0E8" }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        <nav className="text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/projects/" className="hover:text-[#C9A055]">New Projects</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#5A4F40" }}>{p.name}</span>
        </nav>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="md:col-span-2 h-[400px] md:h-[480px] bg-white border border-[#DDD8CE] overflow-hidden relative">
            <img src={images[0]} alt={p.name} className="w-full h-full object-cover" />
            <span
              className="absolute top-4 left-4 text-white text-[11px] px-3 py-1"
              style={{
                fontFamily: "var(--sans)",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                fontWeight: 600,
                background: statusColor[p.status] || "#C9A055",
              }}
            >
              {p.status}
            </span>
          </div>
          <div className="hidden md:grid grid-rows-2 gap-2">
            {images.slice(1, 3).map((img: string, i: number) => (
              <div key={i} className="bg-white border border-[#DDD8CE] overflow-hidden">
                <img src={img} alt={`${p.name} ${i + 2}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2">
          <div
            className="text-[11px] mb-2"
            style={{ fontFamily: "var(--sans)", color: "#C9A055", letterSpacing: 2, textTransform: "uppercase" }}
          >
            {p.builder}
          </div>
          <h1
            className="mb-3 leading-[1.1]"
            style={{ ...serif, fontSize: "clamp(30px, 4vw, 50px)", color: "#1A1410", fontWeight: 400 }}
          >
            {p.name}
          </h1>
          <p className="mb-8" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
            {p.locality}, {p.city} · {p.configurations} {p.type}s
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {specs.map(([label, value]) => (
              <div key={label} className="bg-white border border-[#DDD8CE] p-4">
                <div
                  className="text-[10px] mb-1"
                  style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 2, textTransform: "uppercase" }}
                >
                  {label}
                </div>
                <div className="text-sm" style={{ fontFamily: "var(--sans)", color: "#1A1410", fontWeight: 500 }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Overview
            </h2>
            <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
              {p.overview}
            </p>
          </div>

          {/* Highlights */}
          {p.highlights?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                Why this project
              </h2>
              <ul className="space-y-2">
                {p.highlights.map((h: string) => (
                  <li key={h} className="flex gap-3" style={{ fontFamily: "var(--sans)", color: "#5A4F40", fontSize: 14, lineHeight: 1.6 }}>
                    <span style={{ color: "#C9A055" }}>◆</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Amenities */}
          {p.amenities?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                Amenities
              </h2>
              <div className="flex flex-wrap gap-2">
                {p.amenities.map((a: string) => (
                  <span key={a} className="bg-white border border-[#DDD8CE] px-3 py-2 text-xs" style={{ fontFamily: "var(--sans)", color: "#5A4F40" }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Floor plans */}
          <div className="mb-4">
            <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Floor Plans
            </h2>
            {p.floorPlans?.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {p.floorPlans.map((fp: any) => (
                  <div key={fp.label} className="bg-white border border-[#DDD8CE] p-3">
                    <img src={fp.image} alt={`${p.name} ${fp.label} floor plan`} className="w-full" loading="lazy" />
                    <div className="text-sm mt-2 text-center" style={{ fontFamily: "var(--sans)", color: "#1A1410" }}>
                      {fp.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.7 }}>
                Detailed floor plans are available on request. WhatsApp or call us and we&apos;ll
                share the official plans and price sheet for {p.name}.
              </p>
            )}
          </div>
        </div>

        {/* Sticky enquiry */}
        <div>
          <div className="bg-white border border-[#DDD8CE] p-7 sticky top-28">
            <h3 className="text-2xl mb-1" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Interested in {p.name}?
            </h3>
            <p className="mb-6 text-sm" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.6 }}>
              Get the official brochure, floor plans, current price list and site-visit booking.
            </p>
            <a
              href={`https://wa.me/919845012548?text=${encodeURIComponent(
                `Hi Vani Estates — I'm interested in ${p.name} by ${p.builder} (${p.locality}). Please share details.`
              )}`}
              target="_blank"
              className="block w-full bg-[#25D366] text-white text-center font-semibold py-3 text-sm mb-3 hover:bg-[#1da851] transition"
              style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              WhatsApp Enquiry
            </a>
            <a
              href="tel:+919845012548"
              className="block w-full border border-[#C9A055] text-[#C9A055] text-center font-semibold py-3 text-sm hover:bg-[#C9A055] hover:text-white transition"
              style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              Call +91 98450 12548
            </a>
            <div className="mt-6 pt-6 border-t border-[#EDE8DF]">
              <p className="text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.5 }}>
                {p.sourceNote}
              </p>
              <p className="text-[10px] mt-2" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
                Vani Estates RERA: PRM/KA/RERA/1251/310/AG/250523/005790
              </p>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Residence",
            name: `${p.name} by ${p.builder}`,
            description: p.overview,
            url: `https://www.vaniestates.com/projects/${p.slug}/`,
            image: p.heroImage,
            address: {
              "@type": "PostalAddress",
              addressLocality: p.locality,
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </article>
  );
}
