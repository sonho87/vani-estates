import Link from "next/link";
import { blogs } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Blog — Guides, Tips & Market Insights",
  description: "Expert articles on buying, selling, and investing in Bangalore real estate. Locality guides for Jayanagar, JP Nagar, Banashankari. RERA, Khata, and document verification guides.",
};

export default function BlogPage() {
  const sorted = [...blogs].reverse();

  return (
    <section className="py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <p
          className="text-[11px] mb-4 font-sans-ui"
          style={{ color: "#C9A055", letterSpacing: 5, textTransform: "uppercase" }}
        >
          Insights &amp; Guides
        </p>
        <h1
          className="font-serif-display mb-4 leading-[1.05]"
          style={{ fontSize: "clamp(36px, 5vw, 60px)", color: "#F5EFE8", fontWeight: 300 }}
        >
          From our{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            journal
          </em>
        </h1>
        <p className="text-gray-500 mb-12 font-sans-ui">{blogs.length} articles on the Bangalore property market</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((b: any) => (
            <Link href={`/blog/${b.slug}/`} key={b.id} className="group bg-[#111] border border-[#222] hover:border-[#C9A055]/30 transition p-6">
              <span className="text-[#C9A055] text-[10px] uppercase font-sans-ui" style={{ letterSpacing: 2 }}>{b.category}</span>
              <h2 className="font-serif-display text-xl mt-3 mb-3 group-hover:text-[#C9A055] transition line-clamp-2" style={{ color: "#F5EFE8", fontWeight: 500, lineHeight: 1.25 }}>{b.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{b.excerpt}</p>
              <span className="text-gray-600 text-xs">{b.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
