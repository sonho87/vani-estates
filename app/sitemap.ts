import { properties, blogs } from "@/lib/data";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

// Stable lastmod — bump this only when content meaningfully changes.
// Using a fixed date (rather than new Date()) avoids signalling a fresh
// "last modified" to Google on every deploy, which can erode crawl trust.
const LAST_MODIFIED = "2026-06-14";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vaniestates.com";

  const staticPages = [
    { url: base + "/", lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 1 },
    { url: base + "/properties/", lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: base + "/blog/", lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: base + "/property-management/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: base + "/about/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: base + "/contact/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const propertyPages = properties.map((p: any) => ({
    url: `${base}/properties/${p.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogPages = blogs.map((b: any) => ({
    url: `${base}/blog/${b.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...propertyPages, ...blogPages];
}
