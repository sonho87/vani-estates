import { projects, getBuilder } from "@/lib/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

const statusColor: Record<string, string> = {
  "Ready to Move": "#2E7D32",
  Ongoing: "#C9A055",
  Upcoming: "#1565C0",
  Completed: "#6A4FB6",
};

export function generateStaticParams() {
  return projects.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x: any) => x.slug === slug) as any;
  if (!p) return {};
  return {
    title: `${p.name} by ${p.builder} — ${p.locality}, Bangalore`,
    description: `${p.name} by ${p.builder} in ${p.locality}, Bangalore. ${p.configurations} ${p.type.toLowerCase()}s · ${p.status}. ${p.overview.substring(0, 110)}...`,
    alternates: { canonical: `/projects/${p.slug}/` },
    // Placeholder projects (no real data / RERA yet) must not be indexed.
    robots: p.published ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${p.name} by ${p.builder}`,
      description: `${p.configurations} · ${p.locality}, Bangalore · ${p.status}`,
      images: p.heroImage ? [{ url: p.heroImage }] : [],
    },
  };
}

function waLink(text: string) {
  return `https://wa.me/919845012548?text=${encodeURIComponent(text)}`;
}

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;
  const p = projects.find((x: any) => x.slug === slug) as any;
  if (!p) return notFound();

  const builder = getBuilder(p.builderSlug);
  const images = (p.images && p.images.length ? p.images : [p.heroImage]).filter(Boolean);
  const inv = p.investment || {};
  const hasInvestment = inv.rentalYield || inv.appreciationNote || inv.exitTimeline || inv.thesis;

  const specs = [
    ["Builder", p.builder],
    ["Status", p.status],
    ["Configurations", p.configurations],
    ["Type", p.type],
    ["Locality", `${p.locality}, ${p.city}`],
    ["Sizes", p.sizeRange],
    ["Price", p.priceRange],
    ["Price / sq.ft", p.pricePerSqft],
    ["Possession", p.possession],
    ["RERA", p.rera ? p.rera : "Available on request"],
  ].filter(([, v]) => v);

  return (
    <article style={{ background: "#F5F0E8" }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        <nav className="text-xs" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/projects/" className="hover:text-[#C9A055]">New Projects</Link>
          {builder && (
            <>
              <span className="mx-2">›</span>
              <Link href={`/projects/builders/${builder.slug}/`} className="hover:text-[#C9A055]">
                {builder.name}
              </Link>
            </>
          )}
          <span className="mx-2">›</span>
          <span style={{ color: "#5A4F40" }}>{p.name}</span>
        </nav>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="md:col-span-2 h-[400px] md:h-[480px] bg-white border border-[#DDD8CE] overflow-hidden relative">
            <img src={images[0]} alt={p.name} className="w-full h-full object-cover" />
            <span
              className="absolute top-4 left-4 text-white text-[11px] px-3 py-1"
              style={{
                fontFamily: "var(--sans)",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                fontWeight: 600,
                background: statusColor[p.status] || "#C9A055",
              }}
            >
              {p.status}
            </span>
          </div>
          <div className="hidden md:grid grid-rows-2 gap-2">
            {images.slice(1, 3).map((img: string, i: number) => (
              <div key={i} className="bg-white border border-[#DDD8CE] overflow-hidden">
                <img src={img} alt={`${p.name} ${i + 2}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2">
          <div className="text-[11px] mb-2" style={{ fontFamily: "var(--sans)", color: "#C9A055", letterSpacing: 2, textTransform: "uppercase" }}>
            {builder ? (
              <Link href={`/projects/builders/${builder.slug}/`} className="hover:underline">{p.builder}</Link>
            ) : p.builder}
          </div>
          <h1 className="mb-3 leading-[1.1]" style={{ ...serif, fontSize: "clamp(30px, 4vw, 50px)", color: "#1A1410", fontWeight: 400 }}>
            {p.name}
          </h1>
          <p className="mb-8" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
            {p.locality}, {p.city} · {p.configurations} {p.type}s
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {specs.map(([label, value]) => (
              <div key={label} className="bg-white border border-[#DDD8CE] p-4">
                <div className="text-[10px] mb-1" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 2, textTransform: "uppercase" }}>
                  {label}
                </div>
                <div className="text-sm" style={{ fontFamily: "var(--sans)", color: "#1A1410", fontWeight: 500 }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Overview</h2>
            <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
              {p.overview}
            </p>
          </div>

          {/* Price & payment plans */}
          <div className="mb-10 bg-white border border-[#DDD8CE] p-7">
            <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Price &amp; payment</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <div className="text-[10px] mb-1" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 2, textTransform: "uppercase" }}>Price range</div>
                <div style={{ ...serif, fontSize: 26, color: "#C9A055", fontWeight: 600 }}>{p.priceRange}</div>
                {p.priceValidAsOf && (
                  <div className="text-[11px] mt-1" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>Indicative · as of {p.priceValidAsOf}</div>
                )}
              </div>
              {p.paymentPlans && p.paymentPlans.length > 0 && (
                <div>
                  <div className="text-[10px] mb-2" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 2, textTransform: "uppercase" }}>Payment plans</div>
                  <div className="flex flex-wrap gap-2">
                    {p.paymentPlans.map((pl: string) => (
                      <span key={pl} className="bg-[#F5F0E8] border border-[#DDD8CE] px-3 py-1.5 text-xs" style={{ fontFamily: "var(--sans)", color: "#5A4F40" }}>{pl}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a
              href={waLink(`Hi Vani Estates — please send me the current price sheet & payment plans for ${p.name} (${p.builder}).`)}
              target="_blank"
              className="inline-block bg-[#C9A055] text-white px-7 py-3 text-sm hover:bg-[#b8913e] transition"
              style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}
            >
              Get the current price sheet →
            </a>
            <p className="text-[11px] mt-3" style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}>
              Builder prices change with construction stage &amp; tower release. We send you the live quote — no inflated portal pricing.
            </p>
          </div>

          {/* Investment snapshot — the differentiator */}
          {hasInvestment ? (
            <div className="mb-10 border border-[#C9A055]/40 p-7" style={{ background: "#FBF7F0" }}>
              <div className="eyebrow mb-3">The Investor View</div>
              <h2 className="text-2xl mb-5" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Is it a good investment?</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-5">
                {inv.rentalYield && (
                  <div className="bg-white border border-[#DDD8CE] p-4">
                    <div className="text-[10px] mb-1" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1.5, textTransform: "uppercase" }}>Est. rental yield</div>
                    <div style={{ ...serif, fontSize: 22, color: "#C9A055", fontWeight: 600 }}>{inv.rentalYield}</div>
                  </div>
                )}
                {inv.exitTimeline && (
                  <div className="bg-white border border-[#DDD8CE] p-4">
                    <div className="text-[10px] mb-1" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1.5, textTransform: "uppercase" }}>Exit timeline</div>
                    <div className="text-sm mt-1" style={{ fontFamily: "var(--sans)", color: "#1A1410", fontWeight: 500 }}>{inv.exitTimeline}</div>
                  </div>
                )}
                {inv.appreciationNote && (
                  <div className="bg-white border border-[#DDD8CE] p-4">
                    <div className="text-[10px] mb-1" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1.5, textTransform: "uppercase" }}>Appreciation</div>
                    <div className="text-sm mt-1" style={{ fontFamily: "var(--sans)", color: "#1A1410", fontWeight: 500 }}>{inv.appreciationNote}</div>
                  </div>
                )}
              </div>
              {inv.thesis && (
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>{inv.thesis}</p>
              )}
              <p className="text-[11px] mt-4" style={{ fontFamily: "var(--sans)", color: "#7A6F60", fontStyle: "italic" }}>
                Estimates based on local market data and our experience — not a guaranteed return. Talk to us for a property-specific analysis.
              </p>
            </div>
          ) : (
            <div className="mb-10 border border-[#C9A055]/40 p-7" style={{ background: "#FBF7F0" }}>
              <div className="eyebrow mb-3">The Investor View</div>
              <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Want the investment math?</h2>
              <p className="text-[15px] mb-5" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
                We&apos;ll walk you through the real numbers for {p.name} — entry price, expected rental yield, the appreciation case for {p.corridor || p.locality}, and a realistic exit-at-possession scenario. Honest math, including the reasons to wait if that&apos;s our view.
              </p>
              <a
                href={waLink(`Hi Vani Estates — please share the investment analysis (yield, appreciation, exit) for ${p.name}.`)}
                target="_blank"
                className="inline-block bg-[#C9A055] text-white px-7 py-3 text-sm hover:bg-[#b8913e] transition"
                style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}
              >
                Get the investment analysis →
              </a>
            </div>
          )}

          {/* Highlights */}
          {p.highlights?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Why this project</h2>
              <ul className="space-y-2">
                {p.highlights.map((h: string) => (
                  <li key={h} className="flex gap-3" style={{ fontFamily: "var(--sans)", color: "#5A4F40", fontSize: 14, lineHeight: 1.6 }}>
                    <span style={{ color: "#C9A055" }}>◆</span><span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Connectivity */}
          {p.connectivity?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Connectivity</h2>
              <div className="flex flex-wrap gap-2">
                {p.connectivity.map((c: string) => (
                  <span key={c} className="bg-white border border-[#DDD8CE] px-3 py-2 text-xs" style={{ fontFamily: "var(--sans)", color: "#5A4F40" }}>{c}</span>
                ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          {p.amenities?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {p.amenities.map((a: string) => (
                  <span key={a} className="bg-white border border-[#DDD8CE] px-3 py-2 text-xs" style={{ fontFamily: "var(--sans)", color: "#5A4F40" }}>{a}</span>
                ))}
              </div>
            </div>
          )}

          {/* Video */}
          {p.videoUrl && (
            <div className="mb-10">
              <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Walkthrough</h2>
              <div className="aspect-video bg-white border border-[#DDD8CE] overflow-hidden">
                <iframe src={p.videoUrl} title={`${p.name} walkthrough`} className="w-full h-full" allowFullScreen loading="lazy" />
              </div>
            </div>
          )}

          {/* Floor plans */}
          <div className="mb-10">
            <h2 className="text-2xl mb-4" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Floor Plans</h2>
            {p.floorPlans?.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {p.floorPlans.map((fp: any) => (
                  <div key={fp.label} className="bg-white border border-[#DDD8CE] p-3">
                    <img src={fp.image} alt={`${p.name} ${fp.label} floor plan`} className="w-full" loading="lazy" />
                    <div className="text-sm mt-2 text-center" style={{ fontFamily: "var(--sans)", color: "#1A1410" }}>{fp.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.7 }}>
                Detailed floor plans are available on request. WhatsApp or call us and we&apos;ll share the official plans and price sheet for {p.name}.
              </p>
            )}
          </div>

          {/* NRI box */}
          <div className="mb-4 border border-[#DDD8CE] p-7 bg-white">
            <div className="eyebrow mb-3">Buying From Abroad?</div>
            <h2 className="text-2xl mb-3" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>NRI-friendly, end to end</h2>
            <p className="text-[15px] mb-5" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.85 }}>
              {p.nriNote}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink(`Hi Vani Estates — I'm an NRI interested in ${p.name}. I'd like a video call and the details.`)}
                target="_blank"
                className="inline-block bg-[#25D366] text-white px-7 py-3 text-sm hover:bg-[#1da851] transition"
                style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}
              >
                Book a video call
              </a>
              <Link
                href="/nri/"
                className="inline-block border border-[#C9A055] text-[#C9A055] px-7 py-3 text-sm hover:bg-[#C9A055] hover:text-white transition"
                style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}
              >
                NRI services
              </Link>
            </div>
          </div>
        </div>

        {/* Sticky enquiry */}
        <div>
          <div className="bg-white border border-[#DDD8CE] p-7 sticky top-28">
            <h3 className="text-2xl mb-1" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>Interested in {p.name}?</h3>
            <p className="mb-6 text-sm" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.6 }}>
              Get the official brochure, floor plans, current price list and site-visit booking.
            </p>
            <a
              href={waLink(`Hi Vani Estates — I'm interested in ${p.name} by ${p.builder} (${p.locality}). Please share details.`)}
              target="_blank"
              className="block w-full bg-[#25D366] text-white text-center font-semibold py-3 text-sm mb-3 hover:bg-[#1da851] transition"
              style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              WhatsApp Enquiry
            </a>
            <a
              href="tel:+919845012548"
              className="block w-full border border-[#C9A055] text-[#C9A055] text-center font-semibold py-3 text-sm hover:bg-[#C9A055] hover:text-white transition"
              style={{ fontFamily: "var(--sans)", letterSpacing: 1.5, textTransform: "uppercase" }}
            >
              Call +91 98450 12548
            </a>
            <div className="mt-6 pt-6 border-t border-[#EDE8DF]">
              <p className="text-[11px]" style={{ fontFamily: "var(--sans)", color: "#7A6F60", lineHeight: 1.5 }}>{p.sourceNote}</p>
              <p className="text-[10px] mt-2" style={{ fontFamily: "var(--sans)", color: "#7A6F60", letterSpacing: 1 }}>
                Vani Estates RERA: PRM/KA/RERA/1251/310/AG/250523/005790
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      {p.faqs?.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 pb-20">
          <h2 className="text-3xl mb-8 text-center" style={{ ...serif, color: "#1A1410", fontWeight: 400 }}>
            {p.name} — FAQs
          </h2>
          <div className="divide-y divide-[#DDD8CE] border-y border-[#DDD8CE]">
            {p.faqs.map((f: any) => (
              <div key={f.q} className="py-7">
                <h3 className="text-xl mb-2" style={{ ...serif, color: "#1A1410", fontWeight: 600 }}>{f.q}</h3>
                <p className="text-[15px]" style={{ fontFamily: "var(--sans)", color: "#5A4F40", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Residence",
            name: `${p.name} by ${p.builder}`,
            description: p.overview,
            url: `https://www.vaniestates.com/projects/${p.slug}/`,
            image: p.heroImage,
            address: { "@type": "PostalAddress", addressLocality: p.locality, addressRegion: "Karnataka", addressCountry: "IN" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vaniestates.com/" },
              { "@type": "ListItem", position: 2, name: "New Projects", item: "https://www.vaniestates.com/projects/" },
              { "@type": "ListItem", position: 3, name: p.name, item: `https://www.vaniestates.com/projects/${p.slug}/` },
            ],
          }),
        }}
      />
      {p.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: p.faqs.map((f: any) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
    </article>
  );
}
