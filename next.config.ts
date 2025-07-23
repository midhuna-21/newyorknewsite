import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withBundleAnalyzer({
  productionBrowserSourceMaps: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
});

export default nextConfig;

