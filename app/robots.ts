import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Required for `output: "export"` — tells Next.js to generate this at build
// time rather than on each request.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
