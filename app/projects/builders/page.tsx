import { listedBuilders, projectsByBuilder } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Top Branded Builders in Bangalore — Sobha, Prestige, Brigade & More",
  description:
    "An honest agent's guide to Bangalore's top branded developers — Sobha, Prestige, Brigade, Total Environment. Track records, investor perspective and the new projects Vani Estates represents.",
  alternates: { canonical: "/projects/builders/" },
};

export default function BuildersIndexPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="eyebrow eyebrow-wide mb-4">Builders</p>
        <h1 className="mb-4 leading-[1.05]" style={{ ...serif, fontSize: "clamp(40px, 6vw, 64px)", color: "#1A1410", fontWeight: 300 }}>
          Bangalore&apos;s{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>branded builders</em>
        </h1>
        <p className="mb-12 max-w-3xl" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
          The developer behind a project matters as much as the project itself — for construction
          quality, on-time delivery and resale value. Here&apos;s our honest, 35-year view of the
          builders we work with, and the projects we currently represent.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {listedBuilders().map((b: any) => {
            const count = projectsByBuilder(b.slug).length;
            return (
              <Link
                key={b.slug}
                href={`/projects/builders/${b.slug}/`}
                className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition p-8"
              >
                <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                  <h2 className="text-2xl group-hover:text-[#C9A055] transition" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
                    {b.name}
                  </h2>
                  <span className="text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
                    Est. {b.established}
                  </span>
                </div>
                <div className="text-[11px] mb-3" style={{ fontFamily: "var(--sans)", color: "#C9A055", letterSpacing: 1.5, textTransform: "uppercase" }}>
                  {b.tagline}
                </div>
                <p className="text-sm mb-4" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.75 }}>
                  {b.overview.substring(0, 160)}…
                </p>
                <span className="text-xs text-[#C9A055]" style={{ fontFamily: "var(--sans)", letterSpacing: 1.5 }}>
                  {count > 0 ? `View ${count} project${count > 1 ? "s" : ""} →` : "View builder & upcoming →"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
