import Link from "next/link";
import { properties } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties for Sale & Rent in South Bangalore",
  description:
    "Browse verified property listings in Jayanagar, JP Nagar, Banashankari & Basavanagudi. Flats, villas and commercial spaces from RERA registered consultants.",
};

const serif = { fontFamily: "var(--serif)" };

export default function PropertiesPage() {
  return (
    <section className="py-16" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="eyebrow eyebrow-wide mb-4">Explore</p>
        <h1
          className="mb-4 leading-[1.05]"
          style={{
            ...serif,
            fontSize: "clamp(40px, 6vw, 64px)",
            color: "#1A1410",
            fontWeight: 300,
          }}
        >
          All{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            Properties
          </em>
        </h1>
        <p
          className="mb-12"
          style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
        >
          {properties.length} hand-picked listings across South Bangalore
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p: any) => (
            <Link
              href={`/properties/${p.slug}/`}
              key={p.id}
              className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition overflow-hidden"
            >
              <div className="h-56 bg-[#EDE8DF] overflow-hidden relative">
                {p.heroImage && (
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                )}
                {p.badge && (
                  <span
                    className="absolute top-3 left-3 bg-[#C9A055] text-white text-xs font-semibold px-3 py-1"
                    style={{ fontFamily: "var(--sans)", letterSpacing: 1 }}
                  >
                    {p.badge}
                  </span>
                )}
                <span
                  className="absolute top-3 right-3 bg-white/90 text-[#5A4F40] text-[10px] px-3 py-1"
                  style={{
                    fontFamily: "var(--sans)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {p.status === "Rent" ? "For Rent" : "For Sale"}
                </span>
              </div>
              <div className="p-6">
                <h2
                  className="text-xl mb-2 line-clamp-2 group-hover:text-[#C9A055] transition"
                  style={{
                    ...serif,
                    color: "#1A1410",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h2>
                <p
                  className="text-xs mb-4"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#7A6F60",
                    letterSpacing: 1,
                  }}
                >
                  {p.locality}, {p.city} · {p.type}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#EDE8DF]">
                  <span
                    style={{
                      ...serif,
                      color: "#C9A055",
                      fontWeight: 600,
                      fontSize: 22,
                    }}
                  >
                    {formatPrice(p.price, p.status)}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--sans)",
                      color: "#7A6F60",
                    }}
                  >
                    {p.area} sq.ft · {p.bhk} BHK
                  </span>
                </div>
                <div
                  className="flex gap-4 mt-3 text-[11px]"
                  style={{
                    fontFamily: "var(--sans)",
                    color: "#7A6F60",
                  }}
                >
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
