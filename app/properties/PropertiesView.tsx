"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { formatPrice } from "@/lib/utils";

const serif = { fontFamily: "var(--serif)" };

type Property = any;

const STATUS_TABS = ["All", "Sale", "Rent", "New"] as const;
type Status = (typeof STATUS_TABS)[number];

export default function PropertiesView({ properties }: { properties: Property[] }) {
  const [view, setView] = useState<"card" | "list">("card");
  const [status, setStatus] = useState<Status>("All");
  const [locality, setLocality] = useState<string>("All");
  const [bhkFilter, setBhkFilter] = useState<string>("All");

  // Read ?filter= from URL on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const f = params.get("filter");
    if (f === "Sale" || f === "Rent" || f === "New") setStatus(f);
  }, []);

  const localities = useMemo(
    () => ["All", ...Array.from(new Set(properties.map((p) => p.locality)))],
    [properties]
  );
  const bhkOptions = useMemo(
    () =>
      ["All", ...Array.from(new Set(properties.map((p) => String(p.bhk))))].sort(),
    [properties]
  );

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (status === "New" && !p.newProject) return false;
      if ((status === "Sale" || status === "Rent") && p.status !== status) return false;
      if (locality !== "All" && p.locality !== locality) return false;
      if (bhkFilter !== "All" && String(p.bhk) !== bhkFilter) return false;
      return true;
    });
  }, [properties, status, locality, bhkFilter]);

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
          <em
            className="not-italic"
            style={{ color: "#C9A055", fontStyle: "italic" }}
          >
            Properties
          </em>
        </h1>
        <p
          className="mb-10"
          style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
        >
          {properties.length} hand-picked listings across South Bangalore
        </p>

        {/* Filter + view-toggle bar */}
        <div className="bg-white border border-[#DDD8CE] p-5 mb-8 flex flex-wrap items-center gap-4">
          {/* Status tabs */}
          <div className="flex gap-2 flex-wrap">
            {STATUS_TABS.map((s) => (
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
                {s === "All" ? "All" : s === "New" ? "New Projects" : s}
              </button>
            ))}
          </div>

          {/* Locality */}
          <select
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="text-xs px-3 py-2 border border-[#DDD8CE] bg-[#F5F0E8] outline-none cursor-pointer"
            style={{ fontFamily: "var(--sans)", color: "#1A1410" }}
          >
            {localities.map((l) => (
              <option key={l} value={l}>
                {l === "All" ? "All Localities" : l}
              </option>
            ))}
          </select>

          {/* BHK */}
          <select
            value={bhkFilter}
            onChange={(e) => setBhkFilter(e.target.value)}
            className="text-xs px-3 py-2 border border-[#DDD8CE] bg-[#F5F0E8] outline-none cursor-pointer"
            style={{ fontFamily: "var(--sans)", color: "#1A1410" }}
          >
            {bhkOptions.map((b) => (
              <option key={b} value={b}>
                {b === "All" ? "Any BHK" : `${b} BHK`}
              </option>
            ))}
          </select>

          {/* Result count */}
          <span
            className="text-[11px] ml-auto sm:ml-2"
            style={{
              fontFamily: "var(--sans)",
              color: "#7A6F60",
              letterSpacing: 1,
            }}
          >
            {filtered.length} of {properties.length} shown
          </span>

          {/* View toggle */}
          <div className="ml-auto flex border border-[#DDD8CE]" role="group" aria-label="View mode">
            <button
              type="button"
              onClick={() => setView("card")}
              aria-pressed={view === "card"}
              className="px-3 py-2 text-xs flex items-center gap-2 transition"
              style={{
                fontFamily: "var(--sans)",
                background: view === "card" ? "#C9A055" : "transparent",
                color: view === "card" ? "#FFFFFF" : "#5A4F40",
                letterSpacing: 1,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <rect x="0" y="0" width="7" height="7" />
                <rect x="9" y="0" width="7" height="7" />
                <rect x="0" y="9" width="7" height="7" />
                <rect x="9" y="9" width="7" height="7" />
              </svg>
              Card
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              aria-pressed={view === "list"}
              className="px-3 py-2 text-xs flex items-center gap-2 border-l border-[#DDD8CE] transition"
              style={{
                fontFamily: "var(--sans)",
                background: view === "list" ? "#C9A055" : "transparent",
                color: view === "list" ? "#FFFFFF" : "#5A4F40",
                letterSpacing: 1,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <rect x="0" y="1" width="16" height="2" />
                <rect x="0" y="7" width="16" height="2" />
                <rect x="0" y="13" width="16" height="2" />
              </svg>
              List
            </button>
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            className="bg-white border border-[#DDD8CE] p-16 text-center"
            style={{ fontFamily: "var(--sans)" }}
          >
            <div
              className="mb-2"
              style={{ ...serif, fontSize: 28, color: "#1A1410", fontWeight: 500 }}
            >
              No properties match your filters
            </div>
            <p style={{ color: "#7A6F60", fontSize: 14 }}>
              Try a different status, locality or BHK.
            </p>
          </div>
        )}

        {/* CARD VIEW */}
        {view === "card" && filtered.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
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
                      style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
                    >
                      {p.area} sq.ft · {p.bhk} BHK
                    </span>
                  </div>
                  <div
                    className="flex gap-4 mt-3 text-[11px]"
                    style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
                  >
                    <span>Floor: {p.floor}</span>
                    <span>Facing: {p.facing}</span>
                    <span>Parking: {p.parking}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* LIST VIEW */}
        {view === "list" && filtered.length > 0 && (
          <div className="flex flex-col gap-4">
            {filtered.map((p) => (
              <Link
                href={`/properties/${p.slug}/`}
                key={p.id}
                className="group bg-white border border-[#DDD8CE] hover:border-[#C9A055]/60 transition flex flex-col md:flex-row overflow-hidden"
              >
                <div className="md:w-72 md:flex-shrink-0 h-48 md:h-auto bg-[#EDE8DF] overflow-hidden relative">
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
                </div>
                <div className="flex-1 p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span
                        className="text-[10px]"
                        style={{
                          fontFamily: "var(--sans)",
                          color: "#7A6F60",
                          letterSpacing: 2,
                          textTransform: "uppercase",
                        }}
                      >
                        {p.status === "Rent" ? "For Rent" : "For Sale"} · {p.type}
                      </span>
                    </div>
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
                      className="text-xs mb-3"
                      style={{
                        fontFamily: "var(--sans)",
                        color: "#7A6F60",
                        letterSpacing: 1,
                      }}
                    >
                      {p.locality}, {p.city}
                    </p>
                    <div
                      className="flex gap-4 text-[12px] flex-wrap"
                      style={{ fontFamily: "var(--sans)", color: "#5A4F40" }}
                    >
                      <span>{p.area} sq.ft</span>
                      <span>·</span>
                      <span>{p.bhk} BHK</span>
                      <span>·</span>
                      <span>Floor: {p.floor}</span>
                      <span>·</span>
                      <span>Facing: {p.facing}</span>
                      <span>·</span>
                      <span>Parking: {p.parking}</span>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <div
                      style={{
                        ...serif,
                        color: "#C9A055",
                        fontWeight: 600,
                        fontSize: 26,
                        lineHeight: 1,
                      }}
                    >
                      {formatPrice(p.price, p.status)}
                    </div>
                    <span
                      className="inline-block mt-3 px-5 py-2 text-xs border border-[#C9A055] text-[#C9A055] group-hover:bg-[#C9A055] group-hover:text-white transition"
                      style={{
                        fontFamily: "var(--sans)",
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
