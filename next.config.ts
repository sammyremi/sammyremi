import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static export — generates a self-contained `out/` directory that GitHub
  // Pages (or any CDN) can serve without a Node.js server.
  output: "export",
  ...(basePath ? { basePath } : {}),

  // Trailing slash ensures every route is written as index.html inside its
  // own folder, so direct navigation and page refreshes work on GitHub Pages
  // without a server-side rewrite rule.
  trailingSlash: true,

  // Next.js image optimisation requires a server runtime.  GitHub Pages is
  // a static host, so we disable it.  Images are still served — they just
  // will not be resized or converted on-the-fly.  All our images are already
  // pre-converted to WebP and sized correctly, so this has no visual impact.
  images: {
    unoptimized: true,
  },

  devIndicators: false,

  experimental: {
    // Tree-shake large libraries so the client bundle stays small.
    optimizePackageImports: ["lucide-react", "framer-motion", "gsap"],
  },
};

export default nextConfig;