// Server-rendered static version of the projects listing. Used as the
// Suspense fallback so the project names, builder links and copy are present
// in the static HTML for SEO (the interactive client filter hydrates over it).
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

const statusColor: Record<string, string> = {
  "Ready to Move": "#2E7D32",
  Ongoing: "#C9A055",
  Upcoming: "#1565C0",
  Completed: "#6A4FB6",
};

export default function ProjectsStatic({
  projects,
  builders,
}: {
  projects: any[];
  builders: any[];
}) {
  return (
    <section className="py-16" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="eyebrow eyebrow-wide mb-4">New Projects · Branded Builders</p>
        <h1
          className="mb-4 leading-[1.05]"
          style={{ ...serif, fontSize: "clamp(40px, 6vw, 64px)", color: "#1A1410", fontWeight: 300 }}
        >
          New projects from{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>
            builders you trust
          </em>
        </h1>
        <p className="mb-10 max-w-3xl" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
          Hand-picked, RERA-registered projects from India&apos;s most respected developers —
          Sobha, Prestige, Brigade &amp; Total Environment. Whether you want to invest early and
          exit on completion, or buy a ready-to-move branded home, we only list projects we&apos;d
          recommend to our own family.
        </p>

        {/* Browse by builder */}
        <div className="mb-10">
          <div className="text-[11px] mb-3" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 2, textTransform: "uppercase" }}>
            Browse by builder
          </div>
          <div className="flex flex-wrap gap-2">
            {builders.map((b) => (
              <Link
                key={b.slug}
                href={`/projects/builders/${b.slug}/`}
                className="text-xs px-4 py-2 border border-[#DDD8CE] bg-white hover:border-[#C9A055] hover:text-[#C9A055] transition"
                style={{ fontFamily: "var(--sans)", letterSpacing: 0.5, color: "#5A4F40", fontWeight: 500 }}
              >
                {b.name}
              </Link>
            ))}
            <Link
              href="/projects/builders/"
              className="text-xs px-4 py-2 border border-[#C9A055] text-[#C9A055] hover:bg-[#C9A055] hover:text-white transition"
              style={{ fontFamily: "var(--sans)", letterSpacing: 0.5, fontWeight: 600 }}
            >
              All builders →
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              href={`/projects/${p.slug}/`}
              key={p.id}
              className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition overflow-hidden flex flex-col"
            >
              <div className="h-56 bg-[#EDE8DF] overflow-hidden relative">
                {p.heroImage && (
                  <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                )}
                <span
                  className="absolute top-3 left-3 text-white text-[10px] px-3 py-1"
                  style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600, background: statusColor[p.status] || "#C9A055" }}
                >
                  {p.status}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-[10px] mb-2" style={{ fontFamily: "var(--sans)", color: "#C9A055", letterSpacing: 2, textTransform: "uppercase" }}>
                  {p.builder}
                </div>
                <h2 className="text-xl mb-2 line-clamp-2" style={{ ...serif, color: "#1A1410", fontWeight: 600, lineHeight: 1.2 }}>
                  {p.name}
                </h2>
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
      </div>
    </section>
  );
}
