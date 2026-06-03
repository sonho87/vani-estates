import { properties } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export function generateStaticParams() {
  return properties.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const p = properties.find((x: any) => x.slug === slug) as any;
  if (!p) return {};
  const price = formatPrice(p.price, p.status);
  return {
    title: `${p.title} — ${price}`,
    description: `${p.bhk} BHK ${p.type} ${p.status === "Rent" ? "for rent" : "for sale"} in ${p.locality}, Bangalore. ${p.area} sq.ft, ${p.floor} floor. ${p.description.substring(0, 120)}...`,
    openGraph: {
      title: p.title,
      description: `${price} · ${p.area} sq.ft · ${p.locality}`,
      images: p.heroImage ? [{ url: p.heroImage }] : [],
    },
  };
}

export default async function PropertyPage({ params }: any) {
  const { slug } = await params;
  const property = properties.find((x: any) => x.slug === slug) as any;
  if (!property) return notFound();

  const p = property;
  const galleryImages = (p.images || []).filter((u: string) => u.startsWith("http"));
  const allImages =
    galleryImages.length > 0 ? galleryImages : p.heroImage ? [p.heroImage] : [];

  return (
    <article style={{ background: "#F5F0E8" }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        <nav
          className="text-xs"
          style={{
            fontFamily: "var(--sans)",
            color: "#7A6F60",
          }}
        >
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/properties/" className="hover:text-[#C9A055]">Properties</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#5A4F40" }}>{p.title}</span>
        </nav>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        {allImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2 h-[400px] md:h-[500px] bg-white border border-[#DDD8CE] overflow-hidden">
              <img
                src={allImages[0]}
                alt={p.title}
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-2">
              {allImages.slice(1, 3).map((img: string, i: number) => (
                <div
                  key={i}
                  className="bg-white border border-[#DDD8CE] overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${p.title} - ${i + 2}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-64 bg-[#EDE8DF] flex items-center justify-center border border-[#DDD8CE]">
            <span style={{ color: "#7A6F60", fontFamily: "var(--sans)" }}>
              No images available
            </span>
          </div>
        )}
        {allImages.length > 3 && (
          <p
            className="mt-2 text-xs"
            style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
          >
            + {allImages.length - 3} more photos — contact us for the full gallery
          </p>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              {p.badge && (
                <span
                  className="bg-[#C9A055] text-white text-xs font-semibold px-3 py-1"
                  style={{ fontFamily: "var(--sans)", letterSpacing: 1 }}
                >
                  {p.badge}
                </span>
              )}
              <span
                className="text-xs"
                style={{
                  fontFamily: "var(--sans)",
                  color: "#7A6F60",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {p.status === "Rent" ? "For Rent" : "For Sale"}
              </span>
            </div>
            <h1
              className="mb-3 leading-[1.1]"
              style={{
                ...serif,
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#1A1410",
                fontWeight: 400,
              }}
            >
              {p.title}
            </h1>
            <p
              className="mb-6"
              style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
            >
              {p.locality}, {p.city} · {p.type}
            </p>
            <div
              className="mb-10"
              style={{
                ...serif,
                fontSize: 40,
                fontWeight: 600,
                color: "#C9A055",
                lineHeight: 1,
              }}
            >
              {formatPrice(p.price, p.status)}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {[
                { label: "Area", value: `${p.area} sq.ft` },
                { label: "BHK", value: `${p.bhk} BHK` },
                { label: "Floor", value: p.floor },
                { label: "Facing", value: p.facing },
                { label: "Age", value: p.age },
                { label: "Parking", value: `${p.parking} slots` },
                { label: "Type", value: p.type },
                { label: "Status", value: p.status === "Rent" ? "For Rent" : "For Sale" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="bg-white border border-[#DDD8CE] p-4"
                >
                  <div
                    className="text-[10px] mb-1"
                    style={{
                      fontFamily: "var(--sans)",
                      color: "#7A6F60",
                      letterSpacing: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    {d.label}
                  </div>
                  <div
                    className="text-sm"
                    style={{
                      fontFamily: "var(--sans)",
                      color: "#1A1410",
                      fontWeight: 500,
                    }}
                  >
                    {d.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2
                className="text-2xl mb-4"
                style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
              >
                Description
              </h2>
              <p
                className="text-[15px]"
                style={{
                  fontFamily: "var(--sans)",
                  color: "#5A4F40",
                  lineHeight: 1.85,
                }}
              >
                {p.description}
              </p>
            </div>

            {p.amenities && p.amenities.length > 0 && (
              <div className="mb-12">
                <h2
                  className="text-2xl mb-4"
                  style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
                >
                  Amenities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {p.amenities.map((a: string) => (
                    <span
                      key={a}
                      className="bg-white border border-[#DDD8CE] px-3 py-2 text-xs"
                      style={{ fontFamily: "var(--sans)", color: "#5A4F40" }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {p.neighbourhood && (
              <div className="mb-12">
                <h2
                  className="text-2xl mb-4"
                  style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
                >
                  About {p.locality}
                </h2>
                <p
                  className="text-[15px]"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#5A4F40",
                    lineHeight: 1.85,
                  }}
                >
                  {p.neighbourhood}
                </p>
              </div>
            )}
          </div>

          {/* Sticky enquiry card */}
          <div>
            <div className="bg-white border border-[#DDD8CE] p-7 sticky top-28">
              <h3
                className="text-2xl mb-3"
                style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
              >
                Interested in this property?
              </h3>
              <p
                className="mb-6 text-sm"
                style={{
                  fontFamily: "var(--sans)",
                  color: "#7A6F60",
                  lineHeight: 1.6,
                }}
              >
                Contact us for site visits, pricing details, and document verification.
              </p>
              <a
                href={`https://wa.me/919845012548?text=${encodeURIComponent(
                  `Hi, I'm interested in: ${p.title} (${formatPrice(p.price, p.status)})`
                )}`}
                target="_blank"
                className="block w-full bg-[#25D366] text-white text-center font-semibold py-3 text-sm mb-3 hover:bg-[#1da851] transition"
                style={{
                  fontFamily: "var(--sans)",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                WhatsApp Enquiry
              </a>
              <a
                href="tel:+919845012548"
                className="block w-full border border-[#C9A055] text-[#C9A055] text-center font-semibold py-3 text-sm hover:bg-[#C9A055] hover:text-white transition"
                style={{
                  fontFamily: "var(--sans)",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                Call +91 98450 12548
              </a>
              <div className="mt-6 pt-6 border-t border-[#EDE8DF]">
                <p
                  className="text-[10px]"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#7A6F60",
                    letterSpacing: 1,
                  }}
                >
                  RERA: PRM/KA/RERA/1251/310/AG/250523/005790
                </p>
                {p.source && (
                  <p
                    className="text-[10px] mt-1"
                    style={{
                      fontFamily: "var(--sans)",
                      color: "#7A6F60",
                      letterSpacing: 1,
                    }}
                  >
                    Source: {p.source}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: p.title,
            description: p.description,
            url: `https://www.vaniestates.com/properties/${p.slug}/`,
            image: p.heroImage,
            offers: { "@type": "Offer", price: p.price, priceCurrency: "INR" },
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
