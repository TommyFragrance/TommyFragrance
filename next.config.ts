import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "www.fragrantica.com" },
      { protocol: "https", hostname: "fimgs.net" }
    ]
  }
};

export default nextConfig;
