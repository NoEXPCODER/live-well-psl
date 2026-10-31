import type { MetadataRoute } from "next";
import { LISTS, SITE, latestChecked } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, lastModified: "2026-10-31" },
    { url: `${SITE}/lists`, lastModified: "2026-10-31" },
    ...LISTS.map((l) => ({ url: `${SITE}/lists/${l.slug}`, lastModified: latestChecked(l) })),
    { url: `${SITE}/about`, lastModified: "2026-10-31" },
    { url: `${SITE}/changelog`, lastModified: "2026-10-31" },
  ];
}
