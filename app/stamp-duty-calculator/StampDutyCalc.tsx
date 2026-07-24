"use client";

import { useMemo, useState } from "react";

const serif = { fontFamily: "var(--serif)" };
const sans = { fontFamily: "var(--sans)" };

function fmt(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

// Karnataka stamp duty slabs (property value based)
function stampRate(value: number) {
  if (value <= 2000000) return 0.02; // up to ₹20 L → 2%
  if (value <= 4500000) return 0.03; // ₹20–45 L → 3%
  return 0.05; // above ₹45 L → 5%
}

export default function StampDutyCalc() {
  const [value, setValue] = useState(7500000);
  const [area, setArea] = useState<"urban" | "rural">("urban");

  const calc = useMemo(() => {
    const rate = stampRate(value);
    const stampDuty = value * rate;
    const cess = stampDuty * 0.1; // 10% cess on stamp duty
    const surcharge = stampDuty * (area === "urban" ? 0.02 : 0.03); // BBMP 2% / rural 3%
    const registration = value * 0.01; // 1% registration
    const total = stampDuty + cess + surcharge + registration;
    return { rate, stampDuty, cess, surcharge, registration, total, effective: total / value };
  }, [value, area]);

  const rows: [string, number][] = [
    [`Stamp duty (${(calc.rate * 100).toFixed(0)}%)`, calc.stampDuty],
    ["Cess (10% of stamp duty)", calc.cess],
    [`Surcharge (${area === "urban" ? "2%" : "3%"} of stamp duty)`, calc.surcharge],
    ["Registration (1%)", calc.registration],
  ];

  return (
    <div className="bg-white border border-[#DDD8CE] p-7 md:p-9">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div>
          <label className="block mb-2" style={{ ...sans, fontSize: 12, color: "#7A6F60", letterSpacing: 1.5, textTransform: "uppercase" }}>
            Property value
          </label>
          <div className="flex items-baseline gap-2 mb-3">
            <span style={{ ...serif, fontSize: 30, color: "#C9A055", fontWeight: 600 }}>{fmt(value)}</span>
          </div>
          <input
            type="range"
            min={1000000}
            max={100000000}
            step={100000}
            value={value}
            onChange={(e) => setValue(+e.target.value)}
            className="w-full cursor-pointer"
            style={{ accentColor: "#C9A055" }}
          />
          <div className="flex justify-between mt-1 mb-6" style={{ ...sans, fontSize: 10, color: "#7A6F60" }}>
            <span>₹10 L</span><span>₹10 Cr</span>
          </div>

          <label className="block mb-2" style={{ ...sans, fontSize: 12, color: "#7A6F60", letterSpacing: 1.5, textTransform: "uppercase" }}>
            Location
          </label>
          <div className="flex gap-2">
            {(["urban", "rural"] as const).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setArea(a)}
                className="flex-1 py-2.5 text-xs border transition"
                style={{
                  ...sans,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  background: area === a ? "#C9A055" : "transparent",
                  borderColor: area === a ? "#C9A055" : "#DDD8CE",
                  color: area === a ? "#fff" : "#5A4F40",
                }}
              >
                {a === "urban" ? "City / BBMP" : "Rural / Panchayat"}
              </button>
            ))}
          </div>
          <label className="block mt-6 mb-2" style={{ ...sans, fontSize: 12, color: "#7A6F60", letterSpacing: 1.5, textTransform: "uppercase" }}>
            Or type an exact value
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Math.max(0, +e.target.value))}
            className="w-full bg-[#F5F0E8] border border-[#DDD8CE] px-4 py-3 text-sm outline-none focus:border-[#C9A055]"
            style={{ ...sans, color: "#1A1410" }}
          />
        </div>

        {/* Result */}
        <div className="border p-6" style={{ background: "#FBF7F0", borderColor: "rgba(201,160,85,0.4)" }}>
          <div className="text-center mb-5">
            <div className="mb-1" style={{ ...sans, fontSize: 11, color: "#7A6F60", letterSpacing: 2, textTransform: "uppercase" }}>
              Total charges (approx.)
            </div>
            <div style={{ ...serif, fontSize: 40, color: "#C9A055", fontWeight: 700, lineHeight: 1 }}>
              {fmt(calc.total)}
            </div>
            <div className="mt-1" style={{ ...sans, fontSize: 12, color: "#7A6F60" }}>
              ≈ {(calc.effective * 100).toFixed(1)}% of property value
            </div>
          </div>
          <div className="space-y-2">
            {rows.map(([label, amt]) => (
              <div key={label} className="flex justify-between border-b border-[#EDE1CE] pb-2" style={{ ...sans, fontSize: 13 }}>
                <span style={{ color: "#7A6F60" }}>{label}</span>
                <span style={{ color: "#1A1410", fontWeight: 500 }}>{fmt(amt)}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2" style={{ ...sans, fontSize: 14, fontWeight: 700 }}>
              <span style={{ color: "#1A1410" }}>Total</span>
              <span style={{ color: "#C9A055" }}>{fmt(calc.total)}</span>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-[#EDE1CE]">
            <div style={{ ...sans, fontSize: 12, color: "#5A4F40", lineHeight: 1.6 }}>
              You&apos;d also need the <strong>down payment</strong> (typically 20%) and interiors.
              This is on top of the property price.
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[11px]" style={{ ...sans, color: "#7A6F60", fontStyle: "italic" }}>
        Indicative estimate based on current Karnataka slabs (2% up to ₹20 L, 3% ₹20–45 L, 5% above
        ₹45 L, plus cess, surcharge and 1% registration). Actual duty depends on guidance value,
        property type and current rules — we&apos;ll confirm the exact figure for your purchase.
      </p>
    </div>
  );
}
