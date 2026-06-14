import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const serif = { fontFamily: "var(--serif)" };

export function generateStaticParams() {
  return blogs.map((b: any) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const b = blogs.find((x: any) => x.slug === slug) as any;
  if (!b) return {};
  return {
    title: b.title,
    description: b.excerpt,
    alternates: { canonical: `/blog/${b.slug}/` },
    openGraph: { title: b.title, description: b.excerpt },
  };
}

export default async function BlogPost({ params }: any) {
  const { slug } = await params;
  const blog = blogs.find((x: any) => x.slug === slug) as any;
  if (!blog) return notFound();
  const related = blogs
    .filter((b: any) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <article style={{ background: "#F5F0E8" }}>
      <div className="max-w-4xl mx-auto px-6 py-5">
        <nav
          className="text-xs"
          style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
        >
          <Link href="/" className="hover:text-[#C9A055]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog/" className="hover:text-[#C9A055]">Blog</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#5A4F40" }}>{blog.category}</span>
        </nav>
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-10">
        <span
          className="text-[10px]"
          style={{
            fontFamily: "var(--sans)",
            color: "#C9A055",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {blog.category}
        </span>
        <h1
          className="mt-4 mb-5 leading-[1.1]"
          style={{
            ...serif,
            fontSize: "clamp(32px, 4.5vw, 56px)",
            color: "#1A1410",
            fontWeight: 500,
          }}
        >
          {blog.title}
        </h1>
        <div
          className="flex items-center gap-3 text-sm"
          style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
        >
          <span>{blog.date}</span>
          <span>·</span>
          <span>By Vani Estates</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="prose max-w-none
            [&_h2]:font-serif-display [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:text-[#1A1410] [&_h2]:font-semibold [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:font-serif-display [&_h3]:text-xl [&_h3]:text-[#1A1410] [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-[#5A4F40] [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-[15px]
            [&_ul]:text-[#5A4F40] [&_ul]:my-4 [&_li]:mb-2 [&_li]:leading-relaxed
            [&_strong]:text-[#1A1410]
            [&_a]:text-[#C9A055] [&_a:hover]:underline
            [&_table]:w-full [&_table]:my-6
            [&_th]:bg-[#EDE8DF] [&_th]:border [&_th]:border-[#DDD8CE] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_th]:text-[#1A1410]
            [&_td]:bg-white [&_td]:border [&_td]:border-[#DDD8CE] [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:text-[#5A4F40]"
          style={{ fontFamily: "var(--sans)" }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white border border-[#DDD8CE] p-9 text-center">
          <h3
            className="text-2xl mb-3"
            style={{ ...serif, color: "#1A1410", fontWeight: 600 }}
          >
            Looking for property in South Bangalore?
          </h3>
          <p
            className="text-sm mb-6"
            style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
          >
            Talk to our consultants about buying, selling, or renting.
          </p>
          <a
            href="https://wa.me/919845012548"
            target="_blank"
            className="inline-block bg-[#C9A055] text-white font-semibold px-9 py-3 text-sm hover:bg-[#b8913e] transition"
            style={{
              fontFamily: "var(--sans)",
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Contact Vani Estates
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <h3
            className="text-2xl mb-6"
            style={{ ...serif, color: "#1A1410", fontWeight: 500 }}
          >
            Related articles
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r: any) => (
              <Link
                href={`/blog/${r.slug}/`}
                key={r.id}
                className="bg-white border border-[#DDD8CE] p-5 hover:border-[#C9A055]/60 transition"
              >
                <h4
                  className="text-base line-clamp-2 mb-2"
                  style={{
                    ...serif,
                    color: "#1A1410",
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {r.title}
                </h4>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--sans)", color: "#7A6F60" }}
                >
                  {r.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            datePublished: blog.date,
            author: { "@type": "Organization", name: "Vani Estates" },
            description: blog.excerpt,
            url: `https://www.vaniestates.com/blog/${blog.slug}/`,
          }),
        }}
      />
    </article>
  );
}
