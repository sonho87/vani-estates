"use client";

import { useState } from "react";

const field =
  "w-full bg-[#F5F0E8] border border-[#DDD8CE] px-4 py-3 text-sm outline-none focus:border-[#C9A055]";
const fieldStyle = { fontFamily: "var(--sans)", color: "#1A1410" };

export default function InteriorsForm({ source = "interiors", defaultType = "" }: { source?: string; defaultType?: string }) {
  const [name, setName] = useState("");
  const [type, setType] = useState(defaultType);
  const [stage, setStage] = useState("");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [when, setWhen] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const w = window as any;
    if (typeof w.gtag === "function") w.gtag("event", "generate_lead", { lead_type: "interiors", page: source });
    const text =
      `Hi Vani Estates, I'd like a free interiors consultation.\n` +
      `Name: ${name}\nHome: ${type}\nStatus: ${stage}\nLocation: ${area}\nBudget: ${budget}\nStart: ${when}`;
    window.open(`https://wa.me/919845012548?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form onSubmit={submit} className="bg-white border border-[#DDD8CE] p-7 md:p-9 space-y-4">
      <h2 className="text-2xl mb-1" style={{ fontFamily: "var(--serif)", color: "#1A1410", fontWeight: 600 }}>
        Free design consultation
      </h2>
      <p className="text-sm mb-2" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
        Tell us about your home. We reply on WhatsApp and set up a free consult and site measurement.
      </p>
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} style={fieldStyle} />
      <div className="grid sm:grid-cols-2 gap-4">
        <select required value={type} onChange={(e) => setType(e.target.value)} className={field} style={fieldStyle}>
          <option value="" disabled>Type of home</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK or larger</option>
          <option>Villa / independent house</option>
          <option>Office / clinic / shop</option>
          <option>Only kitchen or wardrobes</option>
        </select>
        <select required value={stage} onChange={(e) => setStage(e.target.value)} className={field} style={fieldStyle}>
          <option value="" disabled>The home is</option>
          <option>New, just got the keys</option>
          <option>New, handover coming soon</option>
          <option>Old, needs renovation</option>
          <option>Being furnished for rent</option>
        </select>
      </div>
      <input required value={area} onChange={(e) => setArea(e.target.value)} placeholder="Location (e.g. JP Nagar, Sarjapur Road)" className={field} style={fieldStyle} />
      <div className="grid sm:grid-cols-2 gap-4">
        <select required value={budget} onChange={(e) => setBudget(e.target.value)} className={field} style={fieldStyle}>
          <option value="" disabled>Rough budget</option>
          <option>Under ₹4 lakh</option>
          <option>₹4 to 8 lakh</option>
          <option>₹8 to 15 lakh</option>
          <option>₹15 to 25 lakh</option>
          <option>Above ₹25 lakh</option>
          <option>Not sure yet</option>
        </select>
        <select required value={when} onChange={(e) => setWhen(e.target.value)} className={field} style={fieldStyle}>
          <option value="" disabled>When to start</option>
          <option>Within 1 month</option>
          <option>1 to 3 months</option>
          <option>3 to 6 months</option>
          <option>Just exploring</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-[#C9A055] text-white py-3 text-sm hover:bg-[#b8913e] transition"
        style={{ fontFamily: "var(--sans)", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}
      >
        Book my free consult on WhatsApp
      </button>
      <p className="text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
        Free and without obligation. Your details stay with us.
      </p>
    </form>
  );
}
