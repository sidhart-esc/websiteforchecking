import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed hostname: "**" — it let the Next.js Image Optimization API
  // (/_next/image?url=...) fetch and process an image from *any* HTTPS
  // host on request. That's an open image-proxy (bandwidth/cost abuse,
  // SSRF-adjacent) and is the exact surface the Next.js AVIF Image
  // Optimization RCE (fixed by upgrading to 16.3.4) exploited. Only
  // images.unsplash.com is actually used (seeded blog/news cover images);
  // add more hosts here explicitly if a real need comes up. New CMS cover
  // images should go through /api/admin/upload instead of an arbitrary
  // external URL.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Stop advertising the framework in responses (minor info-disclosure hardening).
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
