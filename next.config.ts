import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "http://c.ghasemi.works:31492/:path*",
      },
    ];
  },
};

export default nextConfig;
