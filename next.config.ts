import type { NextConfig } from "next";

const isMobile = process.env.NEXT_PUBLIC_API_BASE !== undefined && process.env.NEXT_PUBLIC_API_BASE !== "";

const nextConfig: NextConfig = {
  ...(isMobile && {
    output: "export",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
