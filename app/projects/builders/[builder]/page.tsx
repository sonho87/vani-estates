import { builders, projectsByBuilder, getBuilder } from "@/lib/projects";
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
  return builders.map((b: any) => ({ builder: b.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { builder: slug } = await params;
  const b = getBuilder(slug) as any;
  if (!b) return {};
  return {
    title: `${b.name} Projects in ${b.region || "Bangalore"} — Honest Agent's View`,
    description: `${b.name} new projects in ${b.region || "Bangalore"}, reviewed by Vani Estates — a RERA-registered channel partner with 35+ years in South Bangalore. ${b.overview.substring(0, 100)}...`,
    alternates: { canonical: `/projects/builders/${b.slug}/` },
    robots: b.draft ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${b.name} Projects in ${b.region || "Bangalore"} — Vani Estates`,
      description: b.tagline,
    },
  };
}

export default async function BuilderPage({ params }: any) {
  const { builder: slug } = await params;
  const b = getBuilder(slug) as any;
  if (!b) return notFound();
  const list = projectsByBuilder(b.slug);

  return (
    <div style={{ background: "#F5F0E8" }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        <nav className="text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/projects/" className="hover:text-[#C9A055]">New Projects</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#5A4F40" }}>{b.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-16">
        <p className="eyebrow eyebrow-wide mb-4">Builder · Est. {b.established} · {b.hq}</p>
        <h1 className="mb-5 leading-[1.05] max-w-4xl" style={{ ...serif, fontSize: "clamp(38px, 6vw, 68px)", color: "#1A1410", fontWeight: 300 }}>
          {b.name}{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>projects</em>{" "}
          in Bangalore
        </h1>
        <p className="max-w-3xl text-[17px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.9 }}>
          {b.overview}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Investor view */}
        <div className="mb-16 border border-[#C9A055]/40 p-8" style={{ background: "#FBF7F0" }}>
          <div className="eyebrow mb-3">An Agent&apos;s Honest View</div>
          <h2 className="text-2xl md:text-3xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 500 }}>
            Should you invest with {b.name}?
          </h2>
          <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
            {b.investorView}
          </p>
          <p className="text-[13px] mt-4" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontStyle: "italic" }}>
            Our perspective as a RERA-registered channel partner with 35+ years in South Bangalore — not paid promotion. We&apos;ll tell you honestly when a project isn&apos;t right for your goal.
          </p>
        </div>

        {/* Projects by this builder */}
        <h2 className="text-3xl mb-8" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
          {b.name} projects we represent
        </h2>
        {list.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {list.map((p: any) => (
              <Link
                href={`/projects/${p.slug}/`}
                key={p.id}
                className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition overflow-hidden flex flex-col"
              >
                <div className="h-52 bg-[#EDE8DF] overflow-hidden relative">
                  {p.heroImage && (
                    <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                  )}
                  <span
                    className="absolute top-3 left-3 text-white text-[10px] px-3 py-1"
                    style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600, background: statusColor[p.status] || "#C9A055" }}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl mb-2 line-clamp-2 group-hover:text-[#C9A055] transition" style={{ ...serif, color: "#1A1410", fontWeight: 600, lineHeight: 1.2 }}>
                    {p.name}
                  </h3>
                  <p className="text-xs mb-4" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
                    {p.locality}, {p.city} · {p.configurations}
                  </p>
                  <div className="mt-auto pt-4 border-t border-[#EDE8DF] flex items-center justify-between">
                    <span style={{ ...serif, color: "#C9A055", fontWeight: 600, fontSize: 18 }}>{p.priceRange}</span>
                    <span className="text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
                      {p.possession === "Ready to Move" ? "Ready to Move" : `Possession: ${p.possession}`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#DDD8CE] p-12 text-center mb-16" style={{ fontFamily: "var(--sans)" }}>
            <div className="mb-2" style={{ ...serif, fontSize: 24, color: "#1A1410", fontWeight: 500 }}>
              {b.name} launches coming soon
            </div>
            <p style={{ color: "#7A6F60", fontSize: 14 }}>
              We&apos;re onboarding new {b.name} projects. Message us to be alerted the moment one launches — early buyers get the best pricing.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center p-10 border border-[#DDD8CE] bg-white">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Looking at a {b.name} project?
          </h2>
          <p className="max-w-2xl mx-auto mb-6" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            Get the real price sheet, honest investment analysis and a site-visit booking — for any {b.name} project in Bangalore, not just the ones listed here.
          </p>
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent(`Hi Vani Estates — I'm interested in ${b.name} projects in Bangalore. Please share options and pricing.`)}`}
            target="_blank"
            className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vaniestates.com/" },
              { "@type": "ListItem", position: 2, name: "New Projects", item: "https://www.vaniestates.com/projects/" },
              { "@type": "ListItem", position: 3, name: b.name, item: `https://www.vaniestates.com/projects/builders/${b.slug}/` },
            ],
          }),
        }}
      />
    </div>
  );
}
