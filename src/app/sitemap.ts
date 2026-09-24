import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { books } from "@/lib/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/projects", priority: 0.8, freq: "monthly" },
    { path: "/books", priority: 0.8, freq: "monthly" },
    { path: "/writing", priority: 0.7, freq: "monthly" },
    { path: "/speaking", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.6, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  for (const book of books) {
    entries.push({
      url: `${SITE_URL}/books/${book.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return entries;
}
