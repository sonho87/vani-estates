import Link from "next/link";
import { blogs } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Blog — Guides, Tips & Market Insights",
  description:
    "Expert articles on buying, selling, and investing in Bangalore real estate. Locality guides for Jayanagar, JP Nagar, Banashankari, and document verification guides.",
};

const serif = { fontFamily: "var(--serif)" };

export default function BlogPage() {
  const sorted = [...blogs].reverse();

  return (
    <section className="py-16" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="eyebrow eyebrow-wide mb-4">Insights &amp; Guides</p>
        <h1
          className="mb-4 leading-[1.05]"
          style={{
            ...serif,
            fontSize: "clamp(40px, 6vw, 64px)",
            color: "#1A1410",
            fontWeight: 300,
          }}
        >
          From our{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            journal
          </em>
        </h1>
        <p
          className="mb-12"
          style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
        >
          {blogs.length} articles on the Bangalore property market
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((b: any) => (
            <Link
              href={`/blog/${b.slug}/`}
              key={b.id}
              className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition p-7"
            >
              <span
                className="text-[10px]"
                style={{
                  fontFamily: "var(--sans)",
                  color: "#C9A055",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {b.category}
              </span>
              <h2
                className="text-xl mt-3 mb-3 group-hover:text-[#C9A055] transition line-clamp-2"
                style={{
                  ...serif,
                  color: "#1A1410",
                  fontWeight: 600,
                  lineHeight: 1.25,
                }}
              >
                {b.title}
              </h2>
              <p
                className="text-sm line-clamp-3 mb-4"
                style={{
                  fontFamily: "var(--sans)",
                  color: "#7A6F60",
                  lineHeight: 1.7,
                }}
              >
                {b.excerpt}
              </p>
              <span
                className="text-xs"
                style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
              >
                {b.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
