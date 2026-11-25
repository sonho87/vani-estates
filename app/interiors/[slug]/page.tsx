import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { interiorServices, getInteriorService, INTERIORS_UPDATED } from "@/lib/interiors";
import InteriorsForm from "../InteriorsForm";

const serif = { fontFamily: "var(--serif)" };
const sans = { fontFamily: "var(--sans)" };
const BASE = "https://www.vaniestates.com";

export function generateStaticParams() {
  return interiorServices.map((s: any) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const s: any = getInteriorService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDesc,
    alternates: { canonical: `/interiors/${s.slug}/` },
    openGraph: { title: s.title, description: s.metaDesc },
  };
}

export default async function InteriorServicePage({ params }: any) {
  const { slug } = await params;
  const s: any = getInteriorService(slug);
  if (!s) return notFound();
  const related = s.related.map((r: string) => getInteriorService(r)).filter(Boolean) as any[];
  const url = `${BASE}/interiors/${s.slug}/`;

  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="px-6 py-16 md:py-20 border-b border-[#DDD8CE]" style={{ background: "#EDE8DF" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <nav className="text-[12px] mb-5" style={{ ...sans, color: "#7A6F60" }}>
              <Link href="/" className="hover:text-[#C9A055]">Home</Link> /{" "}
              <Link href="/interiors/" className="hover:text-[#C9A055]">Interiors</Link> / {s.short}
            </nav>
            <p className="eyebrow mb-4">{s.eyebrow}</p>
            <h1 className="mb-6 leading-[1.08]" style={{ ...serif, fontSize: "clamp(34px, 5vw, 58px)", color: "#1A1410", fontWeight: 400 }}>
              {s.h1}
            </h1>
            {s.intro.map((p: string) => (
              <p key={p} className="mb-4 text-[16px]" style={{ ...sans, color: "#5A4F40", lineHeight: 1.85 }}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="tel:+919845012548" className="px-6 py-3 border border-[#C9A055] text-[#1A1410] hover:bg-white transition" style={{ ...sans, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
                Call 98450 12548
              </a>
            </div>
          </div>
          <InteriorsForm source={s.slug} />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <section>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>{s.costTitle}</h2>
          <div className="bg-white border border-[#DDD8CE] divide-y divide-[#DDD8CE]">
            {s.costRows.map(([item, cost]: string[]) => (
              <div key={item} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4">
                <span className="text-[15px]" style={{ ...sans, color: "#1A1410" }}>{item}</span>
                <span className="text-[16px] whitespace-nowrap" style={{ ...serif, color: "#C9A055", fontWeight: 700 }}>{cost}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[12px]" style={{ ...sans, color: "#7A6F60" }}>
            Indicative Bangalore ranges as of {INTERIORS_UPDATED}. Your quote depends on size, materials and finish,
            and is confirmed after a free site measurement.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl mb-5" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>What is included</h2>
            <ul className="space-y-3">
              {s.includes.map((i: string) => (
                <li key={i} className="flex gap-3 text-[15px]" style={{ ...sans, color: "#5A4F40", lineHeight: 1.7 }}>
                  <span style={{ color: "#C9A055" }}>✓</span>{i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl mb-5" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Tips from our team</h2>
            <ul className="space-y-3">
              {s.tips.map((t: string) => (
                <li key={t} className="flex gap-3 text-[15px]" style={{ ...sans, color: "#5A4F40", lineHeight: 1.7 }}>
                  <span style={{ color: "#C9A055" }}>•</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Questions people ask</h2>
          <div className="divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
            {s.faqs.map((f: any) => (
              <div key={f.q} className="py-6">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
                <p className="text-[15px]" style={{ ...sans, color: "#5A4F40", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl mb-5" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>Related</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/interiors/${r.slug}/`} className="bg-white border border-[#DDD8CE] p-5 hover:border-[#C9A055] transition">
                <span className="text-lg" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{r.short}</span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[14px]" style={{ ...sans, color: "#5A4F40" }}>
            Also see our <Link href="/blog/interior-design-cost-in-bangalore-2026-1-bhk-2-bhk-3-bhk-price-guide/" className="text-[#C9A055] hover:underline">interior design cost guide</Link>,{" "}
            <Link href="/home-loans/" className="text-[#C9A055] hover:underline">home loans</Link> and{" "}
            <Link href="/property-management/" className="text-[#C9A055] hover:underline">property management</Link>.
          </p>
        </section>

        <p className="text-[11px]" style={{ ...sans, color: "#7A6F60" }}>
          Interior design and execution are delivered by our partner Bonito Designs. Designs, final pricing and warranties are as per their terms.
          Vani Estates (RERA PRM/KA/RERA/1251/310/AG/250523/005790) arranges consultations and coordinates the project.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: s.faqs.map((f: any) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: s.h1,
              serviceType: "Interior design",
              description: s.metaDesc,
              url,
              areaServed: { "@type": "City", name: "Bengaluru" },
              provider: { "@type": "RealEstateAgent", name: "Vani Estates", telephone: "+919845012548", url: BASE },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
                { "@type": "ListItem", position: 2, name: "Interiors", item: `${BASE}/interiors/` },
                { "@type": "ListItem", position: 3, name: s.short, item: url },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
