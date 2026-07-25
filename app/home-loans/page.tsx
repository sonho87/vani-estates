import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Home Loans in Bangalore — One Application, 150+ Banks | Vani Estates",
  description:
    "Get your home loan sorted with Vani Estates. Through our lending partner's network of 150+ nationalised and private banks, we help you compare rates, check eligibility and get approved — including NRI home loans. We handle the paperwork.",
  alternates: { canonical: "/home-loans/" },
  openGraph: {
    title: "Home Loans in Bangalore — One Application, 150+ Banks",
    description:
      "Compare 150+ banks, get the best rate, and let us handle the paperwork. NRI home loans too. Free assistance from Vani Estates.",
  },
};

const benefits = [
  ["One application, 150+ banks", "Instead of running bank to bank, one application is matched across 150+ nationalised and private lenders."],
  ["The best rate for your profile", "We help you compare offers so you get the lowest rate and best terms you qualify for — not just the first bank's quote."],
  ["We handle the paperwork", "Documentation, follow-ups and coordination with the bank — handled, so you're not chasing anyone."],
  ["NRI home loans", "Buying from abroad? We arrange NRI home loans too, coordinated with your Power of Attorney and NRE/NRO setup."],
];

const faqs = [
  {
    q: "How does the 150-bank network work?",
    a: "Through our lending partner (ButterMoney), your single application is matched across a network of 150+ nationalised and private banks and housing-finance companies. Instead of applying to one bank and hoping, you see where you qualify and at what rate — then pick the best offer.",
  },
  {
    q: "Does it cost me anything?",
    a: "Our loan assistance is designed to make the process easier at no added hassle to you. Message us with your requirement and we'll explain exactly how it works for your case.",
  },
  {
    q: "Can NRIs get a home loan?",
    a: "Yes. Indian banks lend to NRIs, typically up to 80% of value, with EMIs from your NRE/NRO account. We coordinate the loan alongside your Power of Attorney and registration so you can buy remotely. See our NRI services for the full process.",
  },
  {
    q: "What documents will I need?",
    a: "Identity and address proof, income proof (salary slips + bank statements, or ITRs for self-employed), employment proof, and the property documents. We'll give you a simple checklist for your situation.",
  },
];

export default function HomeLoansPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="text-center px-6 py-24 border-b border-[#DDD8CE]" style={{ background: "#EDE8DF" }}>
        <p className="eyebrow eyebrow-wide mb-4">Home Loans · 150+ Banks</p>
        <h1 className="mb-5 leading-[1.05] mx-auto max-w-4xl" style={{ ...serif, fontSize: "clamp(38px, 6vw, 72px)", color: "#1A1410", fontWeight: 300 }}>
          One application.{" "}
          <em className="not-italic" style={{ color: "#C9A055", fontStyle: "italic" }}>150+ banks.</em>{" "}
          Best rate.
        </h1>
        <p className="max-w-2xl mx-auto mb-9" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontSize: 17, lineHeight: 1.9 }}>
          Skip the bank-to-bank runaround. Through our lending partner&apos;s network of 150+
          nationalised and private banks, we help you check eligibility, compare rates and get
          approved — and we handle the paperwork. NRI home loans too.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent("Hi Vani Estates — I'd like help with a home loan. My requirement: ")}`}
            target="_blank"
            className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            Check My Eligibility
          </a>
          <a
            href="tel:+919845012548"
            className="inline-block border border-[#C9A055] text-[#C9A055] px-10 py-4 hover:bg-[#C9A055] hover:text-white transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            +91 98450 12548
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Benefits */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Why Through Us</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Your loan, made easy</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map(([t, d]) => (
              <div key={t} className="bg-white border border-[#DDD8CE] p-8">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{t}</h3>
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* End-to-end */}
        <div className="mb-24 border border-[#C9A055]/40 p-9 md:p-12 text-center" style={{ background: "#FBF7F0" }}>
          <div className="eyebrow mb-3">Find it. Finance it. Furnish it.</div>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>One team for the whole journey</h2>
          <p className="max-w-2xl mx-auto mb-8" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
            We help you <Link href="/properties/" className="text-[#C9A055] hover:underline">find your home</Link>,
            arrange the <strong>home loan</strong>, and even design the{" "}
            <Link href="/interiors/" className="text-[#C9A055] hover:underline">interiors</Link> through our
            partner — so buying, financing and furnishing is one smooth, trusted experience.
          </p>
          <Link
            href="/blog/home-loan-guide-homebuyers-bangalore-eligibility-documents-process-nri-2026/"
            className="inline-block border border-[#C9A055] text-[#C9A055] px-8 py-3 hover:bg-[#C9A055] hover:text-white transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}
          >
            Read the Home Loan Guide
          </Link>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Common Questions</div>
            <h2 className="text-4xl md:text-5xl" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Frequently asked</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 border border-[#DDD8CE] bg-white">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Let&apos;s get you approved</h2>
          <p className="max-w-xl mx-auto mb-8" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.8 }}>
            Tell us your requirement and we&apos;ll check your eligibility across 150+ banks and find your
            best rate — free assistance. Try the numbers first with the <strong>EMI Calc</strong> button below.
          </p>
          <a
            href={`https://wa.me/919845012548?text=${encodeURIComponent("Hi Vani Estates — please check my home loan eligibility. My requirement: ")}`}
            target="_blank"
            className="inline-block bg-[#C9A055] text-white px-10 py-4 hover:bg-[#b8913e] transition"
            style={{ fontFamily: "var(--sans)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}
          >
            WhatsApp Us
          </a>
          <p className="mt-6 text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
            Loan facilitation via our partner network (ButterMoney). Loan approval, rates and terms are
            at the sole discretion of the lending banks, subject to their eligibility criteria.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Home Loan Assistance",
            provider: { "@type": "RealEstateAgent", name: "Vani Estates", telephone: "+919845012548" },
            areaServed: "Bangalore",
            url: "https://www.vaniestates.com/home-loans/",
          }),
        }}
      />
    </div>
  );
}
