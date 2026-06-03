import { properties, blogs } from "@/lib/data";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vaniestates.com";

  const staticPages = [
    { url: base + "/", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: base + "/properties/", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: base + "/blog/", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: base + "/about/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: base + "/contact/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const propertyPages = properties.map((p: any) => ({
    url: `${base}/properties/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogPages = blogs.map((b: any) => ({
    url: `${base}/blog/${b.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...propertyPages, ...blogPages];
}
