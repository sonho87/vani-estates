// Self-qualification note. Placed on rental/contact/locality pages so
// budget seekers (1 BHK / sub-₹35k rent) self-exclude before calling —
// stated honestly, which also reinforces the premium positioning.
export default function QualifyNote({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "p-4" : "p-5 md:p-6"}
      style={{
        background: "#FBF7F0",
        border: "1px solid rgba(201,160,85,0.45)",
        fontFamily: "var(--sans)",
      }}
    >
      <p
        className="text-center"
        style={{ color: "#5A4F40", fontSize: compact ? 13 : 14, lineHeight: 1.7 }}
      >
        <strong style={{ color: "#1A1410" }}>Please note our focus:</strong> we specialise in South
        Bangalore homes — <strong style={{ color: "#C9A055" }}>rentals from ₹35,000/month (2 BHK &amp;
        above)</strong> and <strong style={{ color: "#C9A055" }}>resale from ₹75 lakh</strong>.
        Jayanagar and the surrounding areas don&apos;t have 1 BHK or sub-₹35k rentals — for those,
        an app like NoBroker will serve you better. Tell us your budget and we&apos;ll be straight
        with you about what&apos;s possible.
      </p>
    </div>
  );
}
