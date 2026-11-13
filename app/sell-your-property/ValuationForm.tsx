"use client";

import { useState } from "react";

const field =
  "w-full bg-[#F5F0E8] border border-[#DDD8CE] px-4 py-3 text-sm outline-none focus:border-[#C9A055]";
const fieldStyle = { fontFamily: "var(--sans)", color: "#1A1410" };

export default function ValuationForm() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [size, setSize] = useState("");
  const [where, setWhere] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const w = window as any;
    if (typeof w.gtag === "function") w.gtag("event", "generate_lead", { lead_type: "owner_valuation" });
    const text =
      `Hi Vani Estates, I'd like a free valuation.\n` +
      `Name: ${name}\nI want to: ${need}\nProperty: ${type}\nArea: ${area}\nSize: ${size}\nI live in: ${where}`;
    window.open(`https://wa.me/919845012548?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form onSubmit={submit} className="bg-white border border-[#DDD8CE] p-7 md:p-9 space-y-4">
      <h2 className="text-2xl mb-1" style={{ fontFamily: "var(--serif)", color: "#1A1410", fontWeight: 600 }}>
        Free property valuation
      </h2>
      <p className="text-sm mb-2" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
        Tell us about your property. We reply on WhatsApp within a day, with a price range based on recent sales nearby.
      </p>
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} style={fieldStyle} />
      <select required value={need} onChange={(e) => setNeed(e.target.value)} className={field} style={fieldStyle}>
        <option value="" disabled>I want to</option>
        <option>Sell my property</option>
        <option>Rent it out and have it managed</option>
        <option>Have a vacant property looked after</option>
        <option>Just know its value</option>
      </select>
      <div className="grid sm:grid-cols-2 gap-4">
        <select required value={type} onChange={(e) => setType(e.target.value)} className={field} style={fieldStyle}>
          <option value="" disabled>Property type</option>
          <option>Apartment</option>
          <option>Independent house</option>
          <option>Site / plot</option>
          <option>Commercial</option>
        </select>
        <input required value={area} onChange={(e) => setArea(e.target.value)} placeholder="Area (e.g. Jayanagar 4th Block)" className={field} style={fieldStyle} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input value={size} onChange={(e) => setSize(e.target.value)} placeholder="Size (e.g. 3 BHK, 1,400 sq ft)" className={field} style={fieldStyle} />
        <select required value={where} onChange={(e) => setWhere(e.target.value)} className={field} style={fieldStyle}>
          <option value="" disabled>Where do you live?</option>
          <option>Bangalore</option>
          <option>Elsewhere in India</option>
          <option>Abroad (NRI)</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-[#C9A055] text-white py-3 text-sm hover:bg-[#b8913e] transition"
        style={{ fontFamily: "var(--sans)", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}
      >
        Get my valuation on WhatsApp
      </button>
      <p className="text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
        Free and without obligation. Your details stay with us.
      </p>
    </form>
  );
}
