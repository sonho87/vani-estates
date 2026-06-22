"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { projectStatuses } from "@/lib/projects";

const serif = { fontFamily: "var(--serif)" };

const statusColor: Record<string, string> = {
  "Ready to Move": "#2E7D32",
  Ongoing: "#C9A055",
  Upcoming: "#1565C0",
  Completed: "#6A4FB6",
};

export default function ProjectsView({ projects }: { projects: any[] }) {
  return (
    <Suspense fallback={null}>
      <ProjectsViewInner projects={projects} />
    </Suspense>
  );
}

function ProjectsViewInner({ projects }: { projects: any[] }) {
  const [status, setStatus] = useState<string>("All");
  const searchParams = useSearchParams();
  const statusFromUrl = searchParams?.get("status") ?? null;

  useEffect(() => {
    if (statusFromUrl && projectStatuses.includes(statusFromUrl)) {
      setStatus(statusFromUrl);
    } else if (statusFromUrl === null) {
      setStatus("All");
    }
  }, [statusFromUrl]);

  const filtered = useMemo(
    () => (status === "All" ? projects : projects.filter((p) => p.status === status)),
    [projects, status]
  );

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
          Sobha, Total Environment, Prestige and more. Whether you want to invest early and exit
          on completion, or buy a ready-to-move branded home, we only list projects we&apos;d
          recommend to our own family.
        </p>

        {/* Status filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectStatuses.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(s)}
              className="text-xs px-4 py-2 border transition"
              style={{
                fontFamily: "var(--sans)",
                letterSpacing: 1,
                textTransform: "uppercase",
                background: status === s ? "#C9A055" : "transparent",
                borderColor: status === s ? "#C9A055" : "#DDD8CE",
                color: status === s ? "#FFFFFF" : "#5A4F40",
                fontWeight: 600,
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white border border-[#DDD8CE] p-16 text-center" style={{ fontFamily: "var(--sans)" }}>
            <div className="mb-2" style={{ ...serif, fontSize: 28, color: "#1A1410", fontWeight: 500 }}>
              No projects in this category yet
            </div>
            <p style={{ color: "#7A6F60", fontSize: 14 }}>
              New branded projects are added regularly — talk to us about what&apos;s launching.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link
                href={`/projects/${p.slug}/`}
                key={p.id}
                className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition overflow-hidden flex flex-col"
              >
                <div className="h-56 bg-[#EDE8DF] overflow-hidden relative">
                  {p.heroImage && (
                    <img
                      src={p.heroImage}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      loading="lazy"
                    />
                  )}
                  <span
                    className="absolute top-3 left-3 text-white text-[10px] px-3 py-1"
                    style={{
                      fontFamily: "var(--sans)",
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      fontWeight: 600,
                      background: statusColor[p.status] || "#C9A055",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="text-[10px] mb-2"
                    style={{ fontFamily: "var(--sans)", color: "#C9A055", letterSpacing: 2, textTransform: "uppercase" }}
                  >
                    {p.builder}
                  </div>
                  <h2
                    className="text-xl mb-2 line-clamp-2 group-hover:text-[#C9A055] transition"
                    style={{ ...serif, color: "#1A1410", fontWeight: 600, lineHeight: 1.2 }}
                  >
                    {p.name}
                  </h2>
                  <p className="text-xs mb-4" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
                    {p.locality}, {p.city} · {p.configurations}
                  </p>
                  <div className="mt-auto pt-4 border-t border-[#EDE8DF] flex items-center justify-between">
                    <span style={{ ...serif, color: "#C9A055", fontWeight: 600, fontSize: 18 }}>
                      {p.priceRange}
                    </span>
                    <span className="text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
                      {p.possession === "Ready to Move" ? "Ready to Move" : `Possession: ${p.possession}`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Builder CTA */}
        <div className="mt-16 bg-white border border-[#DDD8CE] p-10 text-center">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            Are you a builder?
          </h2>
          <p className="max-w-2xl mx-auto mb-6" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            We market select, branded projects to a qualified South Bangalore audience. If you&apos;d
            like Vani Estates to represent your project, let&apos;s talk.
          </p>
          <a
            href="https://wa.me/919845012548?text=Hi%20Vani%20Estates%20%E2%80%94%20I%27d%20like%20to%20discuss%20listing%20our%20project%20with%20you."
            target="_blank"
            className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
