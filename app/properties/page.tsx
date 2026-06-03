import Link from "next/link";
import { properties } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties for Sale & Rent in South Bangalore",
  description: "Browse 13+ verified property listings in Jayanagar, JP Nagar, Banashankari & Basavanagudi. Flats, villas, commercial spaces from RERA registered agents.",
};

export default function PropertiesPage() {
  return (
    <section className="py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[#C9A055] text-xs uppercase tracking-[4px] mb-3">Our Listings</p>
        <h1 className="text-3xl font-light mb-3">Properties in South Bangalore</h1>
        <p className="text-gray-500 mb-10">{properties.length} properties found</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p: any) => (
            <Link href={`/properties/${p.slug}/`} key={p.id} className="group bg-[#111] border border-[#222] hover:border-[#C9A055]/30 transition overflow-hidden">
              <div className="h-52 bg-[#1a1a1a] overflow-hidden relative">
                {p.heroImage && <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />}
                {p.badge && <span className="absolute top-3 left-3 bg-[#C9A055] text-black text-xs font-semibold px-3 py-1">{p.badge}</span>}
                <span className="absolute top-3 right-3 bg-black/70 text-gray-300 text-xs px-3 py-1">{p.status === "Rent" ? "For Rent" : "For Sale"}</span>
              </div>
              <div className="p-5">
                <h2 className="font-medium text-sm mb-2 line-clamp-2">{p.title}</h2>
                <p className="text-gray-500 text-xs mb-3">{p.locality}, {p.city} · {p.type}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#C9A055] font-semibold">{formatPrice(p.price, p.status)}</span>
                  <span className="text-gray-600 text-xs">{p.area} sq.ft · {p.bhk} BHK</span>
                </div>
                <div className="flex gap-4 mt-3 text-xs text-gray-600">
                  <span>Floor: {p.floor}</span>
                  <span>Facing: {p.facing}</span>
                  <span>Parking: {p.parking}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
