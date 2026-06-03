import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return blogs.map((b: any) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const b = blogs.find((x: any) => x.slug === slug) as any;
  if (!b) return {};
  return { title: b.title, description: b.excerpt, openGraph: { title: b.title, description: b.excerpt } };
}

export default async function BlogPost({ params }: any) {
  const { slug } = await params;
  const blog = blogs.find((x: any) => x.slug === slug) as any;
  if (!blog) return notFound();
  const related = blogs.filter((b: any) => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  return (
    <article className="bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <nav className="text-xs text-gray-600">
          <Link href="/" className="hover:text-[#C9A055]">Home</Link><span className="mx-2">›</span>
          <Link href="/blog/" className="hover:text-[#C9A055]">Blog</Link><span className="mx-2">›</span>
          <span className="text-gray-400">{blog.category}</span>
        </nav>
      </div>
      <header className="max-w-4xl mx-auto px-4 py-8">
        <span className="text-[#C9A055] text-xs uppercase tracking-[3px]">{blog.category}</span>
        <h1 className="text-2xl md:text-4xl font-light mt-3 mb-4 leading-tight">{blog.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{blog.date}</span><span>·</span><span>By Vani Estates</span>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="prose prose-invert prose-sm max-w-none [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-gray-200 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-gray-300 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-gray-400 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-gray-400 [&_li]:mb-2 [&_strong]:text-gray-200 [&_table]:w-full [&_th]:bg-[#111] [&_th]:border [&_th]:border-[#333] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_td]:border [&_td]:border-[#222] [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:text-gray-400" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-[#111] border border-[#222] p-8 text-center">
          <h3 className="text-lg font-medium mb-3">Looking for Property in South Bangalore?</h3>
          <p className="text-gray-500 text-sm mb-6">Talk to our experts about buying, selling, or renting.</p>
          <a href="https://wa.me/919845012548" target="_blank" className="inline-block bg-[#C9A055] text-black font-semibold px-8 py-3 text-sm tracking-wider uppercase hover:bg-[#b8913e] transition">Contact Vani Estates</a>
        </div>
      </div>
      {related.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <h3 className="text-lg font-medium mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r: any) => (
              <Link href={`/blog/${r.slug}/`} key={r.id} className="bg-[#111] border border-[#222] p-4 hover:border-[#C9A055]/30 transition">
                <h4 className="text-sm font-medium line-clamp-2 mb-2">{r.title}</h4>
                <span className="text-gray-600 text-xs">{r.date}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: blog.title, datePublished: blog.date,
        author: { "@type": "Organization", name: "Vani Estates" },
        description: blog.excerpt,
        url: `https://www.vaniestates.com/blog/${blog.slug}/`,
      }) }} />
    </article>
  );
}
