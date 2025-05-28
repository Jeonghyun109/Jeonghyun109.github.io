import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
