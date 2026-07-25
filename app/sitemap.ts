import { properties, blogs } from "@/lib/data";
import { publishedProjects, builders } from "@/lib/projects";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

// Stable lastmod — bump this only when content meaningfully changes.
// Using a fixed date (rather than new Date()) avoids signalling a fresh
// "last modified" to Google on every deploy, which can erode crawl trust.
const LAST_MODIFIED = "2026-07-10";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vaniestates.com";

  const staticPages = [
    { url: base + "/", lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 1 },
    { url: base + "/properties/", lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: base + "/projects/", lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: base + "/projects/builders/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: base + "/blog/", lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: base + "/guides/", lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: base + "/stamp-duty-calculator/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: base + "/nri/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: base + "/property-management/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: base + "/rent-out-your-property/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: base + "/home-loans/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: base + "/interiors/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: base + "/about/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: base + "/contact/", lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: base + "/privacy-policy/", lastModified: LAST_MODIFIED, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: base + "/terms/", lastModified: LAST_MODIFIED, changeFrequency: "yearly" as const, priority: 0.3 },
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

  // Only PUBLISHED projects (real data + RERA) go in the sitemap.
  // Placeholder projects are also noindex via their page metadata.
  const projectPages = publishedProjects().map((p: any) => ({
    url: `${base}/projects/${p.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const builderPages = builders.map((b: any) => ({
    url: `${base}/projects/builders/${b.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...propertyPages,
    ...projectPages,
    ...builderPages,
    ...blogPages,
  ];
}
