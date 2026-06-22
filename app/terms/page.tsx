import type { Metadata } from "next";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description:
    "Terms of use and disclaimer for the Vani Estates website — property listing accuracy, RERA information, and how to use the information on this site.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow eyebrow-wide mb-4">Legal</p>
        <h1
          className="mb-3 leading-[1.1]"
          style={{ ...serif, fontSize: "clamp(36px, 5vw, 56px)", color: "#1A1410", fontWeight: 400 }}
        >
          Terms &amp; Disclaimer
        </h1>
        <p className="mb-10 text-sm" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
          Last updated: June 2026
        </p>

        <div
          className="space-y-7 text-[15px]"
          style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}
        >
          <p>
            Welcome to vaniestates.com. By using this website you agree to these terms. Vani Estates
            is a RERA-registered real estate consultancy (RERA No.
            PRM/KA/RERA/1251/310/AG/250523/005790) based in Jayanagar, Bangalore.
          </p>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Accuracy of listings
            </h2>
            <p>
              Property details, prices, images, sizes, availability and project information on this
              site are provided in good faith and may change without notice. Prices and availability
              are indicative and must be confirmed with us before you act on them. We do our best to
              keep information current but cannot guarantee it is error-free at every moment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              New projects &amp; builder information
            </h2>
            <p>
              Where we showcase projects by third-party builders, the project images, plans, RERA
              numbers and specifications are provided by those builders. Buyers should independently
              verify all project details and the project&apos;s RERA registration on
              rera.karnataka.gov.in before making any decision.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Not professional advice
            </h2>
            <p>
              Articles and guides on this site (including legal, tax, loan and investment content)
              are for general information only and are not legal, financial or tax advice. Rules and
              rates change. Please consult a qualified lawyer, chartered accountant or financial
              advisor before making decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Intellectual property
            </h2>
            <p>
              The content, branding and design of this website belong to Vani Estates unless
              otherwise stated. Please do not copy or reproduce our content or images without
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Limitation of liability
            </h2>
            <p>
              Vani Estates is not liable for any loss arising from reliance on information on this
              website. Any property transaction is subject to separate, written agreements and
              proper due diligence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Contact
            </h2>
            <p>
              Questions about these terms? Reach us at{" "}
              <a href="tel:+919845012548" className="text-[#C9A055] hover:underline">
                +91 98450 12548
              </a>{" "}
              or{" "}
              <a href="mailto:vaniestates@gmail.com" className="text-[#C9A055] hover:underline">
                vaniestates@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
