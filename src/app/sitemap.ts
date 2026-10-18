import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: "2026-10-18", changeFrequency: "monthly", priority: 1 }];
}
