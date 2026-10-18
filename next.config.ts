import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Vercel keeps .next/cache between deploys, and a cached Turbopack build once
    // shipped an outdated globals.css. The site is small, so always compile fresh.
    turbopackFileSystemCacheForBuild: false,
  },
  images: {
    // Placeholder photography is served from Unsplash until HQ's own photos replace it.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
