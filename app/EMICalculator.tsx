"use client";

import { useEffect, useMemo, useState } from "react";

const serif = { fontFamily: "var(--serif)" };
const sans = { fontFamily: "var(--sans)" };

function fmtCompact(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export default function EMICalculator() {
  const [open, setOpen] = useState(false);
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  // Lock body scroll when modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const emi = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return principal / n;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [principal, rate, tenure]);

  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - principal;

  const labelStyle = {
    ...sans,
    fontSize: 11,
    color: "#7A6F60",
    letterSpacing: 1.5,
    textTransform: "uppercase" as const,
  };
  const valueStyle = {
    ...serif,
    fontSize: 22,
    color: "#C9A055",
    fontWeight: 600,
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        aria-label="Open EMI calculator"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-white hover:bg-[#FFF8EE] transition px-4 py-3 shadow-lg flex items-center gap-2"
        style={{
          border: "1px solid rgba(201,160,85,0.6)",
          color: "#C9A055",
          ...sans,
          fontSize: 11,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <rect x="1" y="1" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="3" y="3" width="10" height="2.5" />
          <rect x="3" y="7" width="2" height="2" />
          <rect x="7" y="7" width="2" height="2" />
          <rect x="11" y="7" width="2" height="6" />
          <rect x="3" y="11" width="2" height="2" />
          <rect x="7" y="11" width="2" height="2" />
        </svg>
        EMI Calc
      </button>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="EMI Calculator"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(26,20,16,0.55)", backdropFilter: "blur(4px)" }}
        >
          <div
            className="bg-white border border-[#DDD8CE] w-full max-w-xl max-h-[92vh] overflow-y-auto relative"
            style={{ padding: 36 }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-xl text-[#7A6F60] hover:text-[#C9A055] transition"
            >
              ×
            </button>

            <div
              className="text-[11px] mb-2"
              style={{
                ...sans,
                color: "#C9A055",
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Financial Planning
            </div>
            <h2
              className="mb-8"
              style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 600 }}
            >
              EMI Calculator
            </h2>

            <div className="flex flex-col gap-7">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between mb-3">
                  <span style={labelStyle}>Loan Amount</span>
                  <span style={valueStyle}>{fmtCompact(principal)}</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={50000000}
                  step={100000}
                  value={principal}
                  onChange={(e) => setPrincipal(+e.target.value)}
                  className="w-full cursor-pointer"
                  style={{ accentColor: "#C9A055" }}
                />
                <div className="flex justify-between mt-1">
                  <span style={{ ...labelStyle, fontSize: 10 }}>₹5L</span>
                  <span style={{ ...labelStyle, fontSize: 10 }}>₹5 Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-3">
                  <span style={labelStyle}>Interest Rate (p.a.)</span>
                  <span style={valueStyle}>{rate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={15}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(+e.target.value)}
                  className="w-full cursor-pointer"
                  style={{ accentColor: "#C9A055" }}
                />
                <div className="flex justify-between mt-1">
                  <span style={{ ...labelStyle, fontSize: 10 }}>6%</span>
                  <span style={{ ...labelStyle, fontSize: 10 }}>15%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between mb-3">
                  <span style={labelStyle}>Tenure</span>
                  <span style={valueStyle}>{tenure} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={tenure}
                  onChange={(e) => setTenure(+e.target.value)}
                  className="w-full cursor-pointer"
                  style={{ accentColor: "#C9A055" }}
                />
                <div className="flex justify-between mt-1">
                  <span style={{ ...labelStyle, fontSize: 10 }}>1 yr</span>
                  <span style={{ ...labelStyle, fontSize: 10 }}>30 yrs</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div
              className="mt-9 border p-7"
              style={{ background: "#FBF7F0", borderColor: "rgba(201,160,85,0.4)" }}
            >
              <div className="text-center mb-6">
                <div
                  className="mb-2"
                  style={{
                    ...sans,
                    fontSize: 11,
                    color: "#7A6F60",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Monthly EMI
                </div>
                <div
                  style={{
                    ...serif,
                    fontSize: 48,
                    color: "#C9A055",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  ₹{Math.round(emi).toLocaleString("en-IN")}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div
                    className="mb-1"
                    style={{
                      ...sans,
                      fontSize: 10,
                      color: "#7A6F60",
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Principal
                  </div>
                  <div style={{ ...serif, fontSize: 20, color: "#1A1410" }}>
                    {fmtCompact(principal)}
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="mb-1"
                    style={{
                      ...sans,
                      fontSize: 10,
                      color: "#7A6F60",
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Total Interest
                  </div>
                  <div style={{ ...serif, fontSize: 20, color: "#1A1410" }}>
                    {fmtCompact(totalInterest)}
                  </div>
                </div>
              </div>
              <div
                className="text-center mt-4 pt-4 border-t"
                style={{ borderColor: "#DDD8CE" }}
              >
                <div
                  className="mb-1"
                  style={{
                    ...sans,
                    fontSize: 10,
                    color: "#7A6F60",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  Total Payable
                </div>
                <div style={{ ...serif, fontSize: 24, color: "#1A1410" }}>
                  {fmtCompact(totalPayment)}
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/919845012548?text=${encodeURIComponent(
                `Hi Vani Estates — I'd like home-loan guidance. My estimated loan: ${fmtCompact(
                  principal
                )} at ${rate.toFixed(1)}% for ${tenure} years (EMI ~₹${Math.round(
                  emi
                ).toLocaleString("en-IN")}).`
              )}`}
              target="_blank"
              className="block mt-6 text-center bg-[#C9A055] hover:bg-[#b8913e] text-white py-3 transition"
              style={{
                ...sans,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Discuss This Loan →
            </a>
            <p
              className="text-center mt-3"
              style={{ ...sans, fontSize: 11, color: "#7A6F60" }}
            >
              Indicative only. Final rates depend on your bank and credit profile.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
