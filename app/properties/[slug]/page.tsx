import { properties } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

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
  const allImages = galleryImages.length > 0 ? galleryImages : p.heroImage ? [p.heroImage] : [];

  return (
    <article className="bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-xs text-gray-600">
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/properties/" className="hover:text-[#C9A055]">Properties</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">{p.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-8">
        {allImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2 h-[400px] md:h-[500px] bg-[#111] overflow-hidden">
              <img src={allImages[0]} alt={p.title} className="w-full h-full object-contain bg-black" />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-2">
              {allImages.slice(1, 3).map((img: string, i: number) => (
                <div key={i} className="bg-[#111] overflow-hidden">
                  <img src={img} alt={`${p.title} - ${i + 2}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-64 bg-[#111] flex items-center justify-center">
            <span className="text-gray-600">No images available</span>
          </div>
        )}
        {allImages.length > 3 && (
          <p className="text-gray-600 text-xs mt-2">+ {allImages.length - 3} more photos — contact us for full gallery</p>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              {p.badge && <span className="bg-[#C9A055] text-black text-xs font-semibold px-3 py-1">{p.badge}</span>}
              <span className="text-gray-600 text-xs uppercase tracking-wider">{p.status === "Rent" ? "For Rent" : "For Sale"}</span>
            </div>
            <h1
              className="font-serif-display mb-3 leading-[1.1]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#F5EFE8", fontWeight: 400 }}
            >
              {p.title}
            </h1>
            <p className="text-gray-500 mb-6 font-sans-ui">{p.locality}, {p.city} · {p.type}</p>
            <div
              className="mb-8 font-serif-display"
              style={{ fontSize: 38, fontWeight: 600, color: "#C9A055", lineHeight: 1 }}
            >
              {formatPrice(p.price, p.status)}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
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
                <div key={d.label} className="bg-[#111] border border-[#222] p-4">
                  <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">{d.label}</div>
                  <div className="font-medium text-sm">{d.value}</div>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h2 className="text-2xl mb-4 font-serif-display" style={{ color: "#F5EFE8", fontWeight: 500 }}>Description</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>

            {p.amenities && p.amenities.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl mb-4 font-serif-display" style={{ color: "#F5EFE8", fontWeight: 500 }}>Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {p.amenities.map((a: string) => (
                    <span key={a} className="bg-[#111] border border-[#222] px-3 py-2 text-xs text-gray-400">{a}</span>
                  ))}
                </div>
              </div>
            )}

            {p.neighbourhood && (
              <div className="mb-10">
                <h2 className="text-2xl mb-4 font-serif-display" style={{ color: "#F5EFE8", fontWeight: 500 }}>About {p.locality}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{p.neighbourhood}</p>
              </div>
            )}
          </div>

          <div>
            <div className="bg-[#111] border border-[#222] p-6 sticky top-24">
              <h3 className="text-2xl mb-4 font-serif-display" style={{ color: "#F5EFE8", fontWeight: 500 }}>Interested in this property?</h3>
              <p className="text-gray-500 text-sm mb-6">Contact us for site visits, pricing, and documentation.</p>
              <a href={`https://wa.me/919845012548?text=${encodeURIComponent(`Hi, I'm interested in: ${p.title} (${formatPrice(p.price, p.status)})`)}`} target="_blank" className="block w-full bg-[#25D366] text-white text-center font-semibold py-3 text-sm tracking-wider mb-3 hover:bg-[#1da851] transition">WhatsApp Enquiry</a>
              <a href="tel:+919845012548" className="block w-full border border-[#C9A055] text-[#C9A055] text-center font-semibold py-3 text-sm tracking-wider hover:bg-[#C9A055] hover:text-black transition">Call Now</a>
              <div className="mt-6 pt-6 border-t border-[#222]">
                <p className="text-gray-600 text-xs">RERA: PRM/KA/RERA/1251/310/AG/250523/005790</p>
                {p.source && <p className="text-gray-600 text-xs mt-1">Source: {p.source}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "RealEstateListing",
        name: p.title, description: p.description,
        url: `https://www.vaniestates.com/properties/${p.slug}/`,
        image: p.heroImage,
        offers: { "@type": "Offer", price: p.price, priceCurrency: "INR" },
        address: { "@type": "PostalAddress", addressLocality: p.locality, addressRegion: "Karnataka", addressCountry: "IN" },
      }) }} />
    </article>
  );
}
