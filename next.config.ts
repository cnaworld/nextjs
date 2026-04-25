import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "http://hehe.cnaworld.xyz:31492/:path*",
      },
    ];
  },
};

export default nextConfig;
