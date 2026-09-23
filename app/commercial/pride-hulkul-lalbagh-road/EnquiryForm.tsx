"use client";

import { useState } from "react";

// Pushes a lead event for Google Ads / GA4 conversion tracking.
// Safe no-op until the Google tag is installed.
export function trackLead(kind: string) {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "commercial_lead", lead_type: kind, property: "pride-hulkul" });
  if (typeof w.gtag === "function") w.gtag("event", "generate_lead", { lead_type: kind });
}

const field =
  "w-full bg-[#F5F0E8] border border-[#DDD8CE] px-4 py-3 text-sm outline-none focus:border-[#C9A055]";
const fieldStyle = { fontFamily: "var(--sans)", color: "#1A1410" };

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [area, setArea] = useState("");
  const [team, setTeam] = useState("");
  const [when, setWhen] = useState("");
  const small = area === "Under 5,000 sq ft";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (small) return;
    trackLead("form");
    const text =
      `Hi Vani Estates, I'm enquiring about the office space at Pride Hulkul, Lalbagh Road.\n` +
      `Name: ${name}\nCompany: ${company}\nArea required: ${area}\nTeam size: ${team}\nMove-in: ${when}`;
    window.open(`https://wa.me/919845012548?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form onSubmit={submit} className="bg-white border border-[#DDD8CE] p-7 md:p-9 space-y-4">
      <h2 className="text-2xl mb-1" style={{ fontFamily: "var(--serif)", color: "#1A1410", fontWeight: 600 }}>
        Request a site visit
      </h2>
      <p className="text-sm mb-2" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
        Share your requirement and we&apos;ll call back with floor plans and terms.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} style={fieldStyle} />
        <input required value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" className={field} style={fieldStyle} />
      </div>
      <select required value={area} onChange={(e) => setArea(e.target.value)} className={field} style={fieldStyle}>
        <option value="" disabled>Area required</option>
        <option>Under 5,000 sq ft</option>
        <option>5,000 to 10,000 sq ft</option>
        <option>10,000 to 15,000 sq ft</option>
        <option>Full floor, 19,400 sq ft</option>
      </select>
      {small && (
        <p className="text-[13px] p-3" style={{ fontFamily: "var(--sans)", color: "#5A4F40", background: "#FBF7F0", border: "1px solid rgba(201,160,85,0.45)" }}>
          Thanks for checking. This space suits larger teams, so it won&apos;t be a fit for under
          5,000 sq ft. A coworking centre will serve you better.
        </p>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <select required value={team} onChange={(e) => setTeam(e.target.value)} className={field} style={fieldStyle}>
          <option value="" disabled>Team size</option>
          <option>50 to 100 people</option>
          <option>100 to 200 people</option>
          <option>200+ people</option>
          <option>Not an office (bank, clinic, other)</option>
        </select>
        <select required value={when} onChange={(e) => setWhen(e.target.value)} className={field} style={fieldStyle}>
          <option value="" disabled>Move-in</option>
          <option>Within 3 months</option>
          <option>3 to 6 months</option>
          <option>6+ months</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={small}
        className="w-full bg-[#C9A055] text-white py-3 text-sm hover:bg-[#b8913e] transition disabled:opacity-40"
        style={{ fontFamily: "var(--sans)", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}
      >
        Send on WhatsApp
      </button>
    </form>
  );
}

export function TrackedLink({ href, kind, className, style, children }: {
  href: string; kind: string; className?: string; style?: React.CSSProperties; children: React.ReactNode;
}) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} onClick={() => trackLead(kind)} className={className} style={style}>
      {children}
    </a>
  );
}
