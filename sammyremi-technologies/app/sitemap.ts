import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Required for `output: "export"` — tells Next.js to generate this at build
// time rather than on each request.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
