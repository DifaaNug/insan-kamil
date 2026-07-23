import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "insankamilbabel.wordpress.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
    ],
    // Enable modern formats for smaller file sizes
    formats: ["image/avif", "image/webp"],
    // Set reasonable device sizes (don't serve 3840px for small cards)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Reduce quality for better performance (default is 75)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  poweredByHeader: false,
};

export default nextConfig;
