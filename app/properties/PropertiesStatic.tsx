import Link from "next/link";
import { formatPrice } from "@/lib/utils";

// Server-rendered listing shown before the interactive view loads.
// This is what search engines read, so it carries the full list.
export default function PropertiesStatic({ properties }: { properties: any[] }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16" style={{ background: "#F5F0E8" }}>
      <h1 className="mb-4 leading-[1.05]" style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px, 6vw, 64px)", color: "#1A1410", fontWeight: 300 }}>
        Flats & houses for sale and rent in South Bangalore
      </h1>
      <p className="mb-10 max-w-3xl" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 15, lineHeight: 1.85 }}>
        Verified homes in Jayanagar, JP Nagar, Basavanagudi and Banashankari, listed by Vani Estates since 1990.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => (
          <Link key={p.slug} href={`/properties/${p.slug}/`} className="bg-white border border-[#DDD8CE] block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.heroImage} alt={p.title} className="w-full h-52 object-cover" loading="lazy" />
            <div className="p-5" style={{ fontFamily: "var(--sans)" }}>
              <h2 className="mb-1" style={{ fontFamily: "var(--serif)", fontSize: 22, color: "#1A1410", fontWeight: 600 }}>{p.title}</h2>
              <p className="text-sm" style={{ color: "#7A6F60" }}>
                {p.locality} · {p.bhk} BHK · {p.area} sq ft · For {p.status === "Rent" ? "rent" : "sale"}
              </p>
              <p className="mt-2" style={{ color: "#C9A055", fontWeight: 600 }}>{formatPrice(p.price, p.status)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
