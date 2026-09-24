import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      // Canonicalise www → apex on the .co.uk host only. Host-scoped so
      // preview deployments on *.vercel.app are unaffected.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.danthomson.co.uk" }],
        destination: "https://danthomson.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
