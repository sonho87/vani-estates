import type { Metadata } from "next";

const serif = { fontFamily: "var(--serif)" };

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vani Estates collects, uses and protects the information you share with us when you enquire about properties or services.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="eyebrow eyebrow-wide mb-4">Legal</p>
        <h1
          className="mb-3 leading-[1.1]"
          style={{ ...serif, fontSize: "clamp(36px, 5vw, 56px)", color: "#1A1410", fontWeight: 400 }}
        >
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
          Last updated: June 2026
        </p>

        <div
          className="space-y-7 text-[15px]"
          style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}
        >
          <p>
            Vani Estates (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy.
            This policy explains what information we collect when you use vaniestates.com or contact
            us, and how we use and protect it.
          </p>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Information we collect
            </h2>
            <p>
              We only collect information you choose to share with us — typically your name, phone
              number, email address and the details of your property requirement — when you fill in
              an enquiry form, message us on WhatsApp, call us, or email us. We do not require you to
              create an account to browse the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              How we use your information
            </h2>
            <p>
              We use your information solely to respond to your enquiry, help you buy, sell, rent or
              manage property, and stay in touch about your requirement. We do not sell, rent or
              trade your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Cookies & analytics
            </h2>
            <p>
              Our website may use basic analytics (such as Google Search Console and standard server
              logs) to understand how visitors find and use the site. This data is aggregated and is
              not used to personally identify you. Your browser settings let you control or disable
              cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Third-party links
            </h2>
            <p>
              The site may link to third-party services (for example WhatsApp, Google Maps, or
              builder websites). Those services have their own privacy policies, and we are not
              responsible for their practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Data security & retention
            </h2>
            <p>
              We take reasonable steps to keep your information safe and retain it only as long as
              needed to serve your enquiry and meet our legal and business obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Your choices
            </h2>
            <p>
              You can ask us at any time to update or delete the personal information you have shared
              with us, or to stop contacting you. Just write to us at the details below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>
              Contact us
            </h2>
            <p>
              Vani Estates, #14, 9th Main Road, 3rd Block Jayanagar, Bangalore – 560 011.
              <br />
              Phone:{" "}
              <a href="tel:+919845012548" className="text-[#C9A055] hover:underline">
                +91 98450 12548
              </a>
              {" · "}Email:{" "}
              <a href="mailto:vaniestates@gmail.com" className="text-[#C9A055] hover:underline">
                vaniestates@gmail.com
              </a>
            </p>
          </div>

          <p className="text-sm" style={{ color: "#7A6F60", fontStyle: "italic" }}>
            This policy may be updated from time to time. Continued use of the site means you accept
            the current version.
          </p>
        </div>
      </section>
    </div>
  );
}
