import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack: ensure relative chunk URLs so LAN IP access resolves identically
  // to localhost (no hostname-based absolute URLs in injected scripts)
};

export default nextConfig;
