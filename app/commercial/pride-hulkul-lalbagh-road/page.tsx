import type { Metadata } from "next";
import EnquiryForm, { TrackedLink } from "./EnquiryForm";

const serif = { fontFamily: "var(--serif)" };
const sans = { fontFamily: "var(--sans)" };
const PATH = "/commercial/pride-hulkul-lalbagh-road/";

export const metadata: Metadata = {
  title: "19,400 sq ft Office Space for Rent, Lalbagh Road, Bangalore",
  description:
    "Full-floor office space for lease at Pride Hulkul, Lalbagh Main Road, next to MTR. 19,400 sq ft bare shell, divisible, 150 car and bike parking, 3 lifts.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "19,400 sq ft Office Floor for Lease on Lalbagh Road",
    description:
      "Large bare-shell office floor at Pride Hulkul, next to MTR. Divisible to suit, private parking for 150 vehicles.",
    images: [{ url: "/commercial/pride-hulkul/1.jpg", width: 1600, height: 1200 }],
  },
};

const facts: [string, string][] = [
  ["Carpet area", "19,400 sq ft, one floor"],
  ["Floor", "2nd floor"],
  ["Divisible", "Yes, to suit your requirement"],
  ["Condition", "Bare shell, plastered walls"],
  ["Rent", "₹15 lakh / month (about ₹77 per sq ft), negotiable"],
  ["Security deposit", "₹75 lakh, negotiable"],
  ["Lock-in", "10 years"],
  ["Parking", "150 car and bike slots, private"],
  ["Lifts", "2 passenger lifts + 1 service lift"],
  ["Utilities", "Electricity, water, DG and UPS charged separately"],
];

const photos = [
  ["2.jpg", "Open floor plate with glass fire-exit door"],
  ["3.jpg", "Column grid and windows along the length of the floor"],
  ["4.jpg", "View from the floor over the building's driveway"],
  ["5.jpg", "Common corridor"],
];

const fits = [
  ["IT and tech teams", "One open floor for 150 to 250 seats, with room to plan it your way."],
  ["Corporate or regional office", "A central address on Lalbagh Road that clients and staff can reach easily."],
  ["BFSI back office", "Space for large operations teams, with parking for everyone."],
  ["Training or GCC setups", "Big, flexible floor plate for classrooms, labs or delivery centres."],
];

const faqs = [
  {
    q: "Can the floor be split?",
    a: "Yes. The 19,400 sq ft floor can be divided to suit your requirement. It works best for teams needing about 5,000 sq ft and above.",
  },
  {
    q: "What does bare shell mean here?",
    a: "The walls are plastered and the floor is ready for your fit-out. You design the interiors, cabling, lighting and air conditioning to your own standard.",
  },
  {
    q: "What are the commercial terms?",
    a: "Rent is ₹15 lakh a month for the full floor with a ₹75 lakh deposit and a 10-year lock-in. Both rent and deposit are negotiable. Electricity, water, DG and UPS are charged separately.",
  },
  {
    q: "How do I see the space?",
    a: "Call or WhatsApp us on +91 98450 12548. We arrange site visits Monday to Saturday and can share floor plans before you come.",
  },
];

const btn = { ...sans, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" as const, fontWeight: 700 };
const waText = encodeURIComponent("Hi Vani Estates, I'm interested in the office space at Pride Hulkul, Lalbagh Road. Our requirement is ");

export default function PrideHulkulPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      {/* Hero */}
      <section className="border-b border-[#DDD8CE]" style={{ background: "#EDE8DF" }}>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow eyebrow-wide mb-4">Commercial · For Lease</p>
            <h1 className="mb-5 leading-[1.05]" style={{ ...serif, fontSize: "clamp(38px, 5.5vw, 66px)", color: "#1A1410", fontWeight: 300 }}>
              19,400 sq ft office floor{" "}
              <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>on Lalbagh Road</em>
            </h1>
            <p className="mb-8" style={{ ...sans, color: "#7A6F60", fontSize: 16, lineHeight: 1.9 }}>
              Pride Hulkul, Lalbagh Main Road, next to MTR. A large bare-shell floor with private
              parking for 150 vehicles, ready for your fit-out. Divisible for larger teams.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["19,400 sq ft", "Divisible", "150 parking", "3 lifts"].map((t) => (
                <span key={t} className="px-4 py-2 border border-[#C9A055] text-[#1A1410]" style={{ ...sans, fontSize: 13 }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackedLink href={`https://wa.me/919845012548?text=${waText}`} kind="whatsapp" className="text-center bg-[#25D366] text-white px-9 py-4 hover:bg-[#1da851] transition" style={btn}>
                WhatsApp Us
              </TrackedLink>
              <TrackedLink href="tel:+919845012548" kind="call" className="text-center border border-[#C9A055] text-[#C9A055] px-9 py-4 hover:bg-[#C9A055] hover:text-white transition" style={btn}>
                +91 98450 12548
              </TrackedLink>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/commercial/pride-hulkul/1.jpg" alt="Open bare-shell office floor at Pride Hulkul, Lalbagh Road" className="w-full h-auto border border-[#DDD8CE]" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Who it's for */}
        <div className="max-w-4xl mx-auto mb-16 p-5 md:p-6 text-center" style={{ background: "#FBF7F0", border: "1px solid rgba(201,160,85,0.45)", ...sans }}>
          <p style={{ color: "#5A4F40", fontSize: 14, lineHeight: 1.7 }}>
            <strong style={{ color: "#1A1410" }}>Built for larger teams.</strong> This space suits
            requirements of <strong style={{ color: "#C9A055" }}>5,000 sq ft and above</strong>. If you
            need a few seats or a small cabin, a coworking centre will be a better fit.
          </p>
        </div>

        {/* Facts + form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="mb-6" style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 400 }}>
              Space and terms
            </h2>
            <div className="bg-white border border-[#DDD8CE]">
              {facts.map(([k, v]) => (
                <div key={k} className="flex gap-5 px-6 py-4 border-b border-[#DDD8CE] last:border-b-0">
                  <div className="min-w-[130px] text-[11px] pt-0.5" style={{ ...sans, color: "#7A6F60", letterSpacing: 1.5, textTransform: "uppercase" }}>
                    {k}
                  </div>
                  <div className="text-[15px]" style={{ ...sans, color: "#1A1410", lineHeight: 1.6 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <EnquiryForm />
        </div>

        {/* Photos */}
        <h2 className="mb-6" style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 400 }}>Photos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {photos.map(([f, alt]) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={f} src={`/commercial/pride-hulkul/${f}`} alt={alt} loading="lazy" className="w-full h-64 object-cover border border-[#DDD8CE]" />
          ))}
        </div>

        {/* Location + fits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="mb-5" style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 400 }}>Location</h2>
            <p className="mb-5" style={{ ...sans, color: "#5A4F40", fontSize: 15, lineHeight: 1.85 }}>
              On Lalbagh Main Road, right next to MTR and a few minutes from Lalbagh, Shanthinagar,
              Richmond Circle and the CBD. The Lalbagh bus stop is at the gate, and Jayanagar,
              Basavanagudi and Wilson Garden are a short drive away, which makes it an easy commute
              for teams across South Bangalore.
            </p>
            <iframe
              title="Pride Hulkul, Lalbagh Road"
              src="https://www.google.com/maps?q=Pride+Hulkul+Lalbagh+Road+Bangalore&output=embed"
              className="w-full border border-[#DDD8CE]"
              style={{ border: 0, minHeight: 300 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h2 className="mb-5" style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 400 }}>Works well for</h2>
            <div className="space-y-4">
              {fits.map(([t, d]) => (
                <div key={t} className="bg-white border border-[#DDD8CE] p-5">
                  <h3 className="mb-1" style={{ ...serif, fontSize: 22, color: "#1A1410", fontWeight: 600 }}>{t}</h3>
                  <p style={{ ...sans, color: "#7A6F60", fontSize: 14, lineHeight: 1.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-center" style={{ ...serif, fontSize: 36, color: "#1A1410", fontWeight: 400 }}>Questions</h2>
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-[#DDD8CE] py-5">
              <h3 className="mb-2" style={{ ...serif, fontSize: 22, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
              <p style={{ ...sans, color: "#5A4F40", fontSize: 15, lineHeight: 1.8 }}>{f.a}</p>
            </div>
          ))}
          <p className="mt-8 text-center text-[13px]" style={{ ...sans, color: "#7A6F60" }}>
            Offered by Vani Estates, Jayanagar. RERA PRM/KA/RERA/1251/310/AG/250523/005790.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vaniestates.com/" },
                { "@type": "ListItem", position: 2, name: "Pride Hulkul office space", item: "https://www.vaniestates.com" + PATH },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
