import Link from "next/link";
import { properties, blogs, testimonials } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function Home() {
  const featured = properties.filter((p: any) => p.featured).slice(0, 6);
  const latestBlogs = blogs.slice(-4).reverse();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')] bg-cover bg-center opacity-15"></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#C9A055] text-sm uppercase tracking-[6px] mb-6">South Bangalore&apos;s Trusted Real Estate Partner</p>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            Find Your Perfect <br />
            <span className="font-semibold" style={{ color: "#C9A055" }}>Property in Bangalore</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            RERA registered agency with 35+ years of expertise in Jayanagar, JP Nagar, Banashankari & Basavanagudi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties/" className="bg-[#C9A055] text-black font-semibold px-8 py-4 text-sm tracking-wider uppercase hover:bg-[#b8913e] transition">
              View All Properties
            </Link>
            <a href="https://wa.me/919845012548" target="_blank" className="border border-[#C9A055] text-[#C9A055] font-semibold px-8 py-4 text-sm tracking-wider uppercase hover:bg-[#C9A055] hover:text-black transition">
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[#C9A055] text-xs uppercase tracking-[4px] mb-3">Curated Listings</p>
          <h2 className="text-3xl font-light mb-12">Featured Properties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p: any) => (
              <Link href={`/properties/${p.slug}/`} key={p.id} className="group bg-[#111] border border-[#222] hover:border-[#C9A055]/30 transition overflow-hidden">
                <div className="h-52 bg-[#1a1a1a] overflow-hidden relative">
                  {p.heroImage && <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />}
                  {p.badge && <span className="absolute top-3 left-3 bg-[#C9A055] text-black text-xs font-semibold px-3 py-1">{p.badge}</span>}
                  <span className="absolute top-3 right-3 bg-black/70 text-gray-300 text-xs px-3 py-1">{p.status === "Rent" ? "For Rent" : "For Sale"}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs mb-3">{p.locality}, {p.city}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C9A055] font-semibold">{formatPrice(p.price, p.status)}</span>
                    <span className="text-gray-600 text-xs">{p.area} sq.ft · {p.bhk} BHK</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/properties/" className="border border-[#333] text-gray-400 px-8 py-3 text-sm tracking-wider uppercase hover:border-[#C9A055] hover:text-[#C9A055] transition">
              View All {properties.length} Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Why Vani Estates */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[#C9A055] text-xs uppercase tracking-[4px] mb-3">Why Choose Us</p>
          <h2 className="text-3xl font-light mb-12">Trusted by 500+ Families</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "35+", label: "Years Experience" },
              { num: "500+", label: "Properties Dealt" },
              { num: "4.9★", label: "Google Rating" },
              { num: "RERA", label: "Registered Agent" },
            ].map((s) => (
              <div key={s.label} className="text-center py-8 border border-[#222]">
                <div className="text-3xl font-semibold text-[#C9A055] mb-2">{s.num}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[#C9A055] text-xs uppercase tracking-[4px] mb-3">Insights & Guides</p>
          <h2 className="text-3xl font-light mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestBlogs.map((b: any) => (
              <Link href={`/blog/${b.slug}/`} key={b.id} className="group bg-[#111] border border-[#222] hover:border-[#C9A055]/30 transition p-5">
                <span className="text-[#C9A055] text-xs uppercase tracking-wider">{b.category}</span>
                <h3 className="font-medium text-sm mt-2 mb-3 line-clamp-2 group-hover:text-[#C9A055] transition">{b.title}</h3>
                <p className="text-gray-600 text-xs line-clamp-3">{b.excerpt}</p>
                <span className="text-gray-600 text-xs mt-3 block">{b.date}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog/" className="border border-[#333] text-gray-400 px-8 py-3 text-sm tracking-wider uppercase hover:border-[#C9A055] hover:text-[#C9A055] transition">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-20 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-[#C9A055] text-xs uppercase tracking-[4px] mb-3">Client Testimonials</p>
            <h2 className="text-3xl font-light mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((t: any) => (
                <div key={t.id} className="bg-[#111] border border-[#222] p-6">
                  <div className="text-[#C9A055] text-sm mb-3">{"★".repeat(t.rating)}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{t.text}</p>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-gray-600 text-xs">{t.property}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-gray-500 mb-8">Get in touch with our team — we&apos;ll help you every step of the way.</p>
          <a href="https://wa.me/919845012548" target="_blank" className="inline-block bg-[#C9A055] text-black font-semibold px-10 py-4 text-sm tracking-wider uppercase hover:bg-[#b8913e] transition">
            Contact Vani Estates
          </a>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Vani Estates",
            url: "https://www.vaniestates.com",
            telephone: "+919845012548",
            email: "vaniestates@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jayanagar",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560041",
              addressCountry: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "16",
            },
          }),
        }}
      />
    </>
  );
}
