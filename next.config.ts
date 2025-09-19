


// import type { NextConfig } from "next";
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// /** @type {NextConfig} */
// const nextConfig: NextConfig = withBundleAnalyzer({
//   productionBrowserSourceMaps: false,
//   output: "export",
//   compress: true,
//   trailingSlash: true,

//   images: {
//     unoptimized: true, 
//   },

//   modularizeImports: {
//     lodash: {
//       transform: "lodash/{{member}}",
//     },
//     "date-fns": {
//       transform: "date-fns/{{member}}",
//     },
//   },
// });

// export default nextConfig;





// import type { NextConfig } from "next";
// import bundleAnalyzer from "@next/bundle-analyzer";

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });

// /** @type {NextConfig} */
// const nextConfig: NextConfig = withBundleAnalyzer({
//   reactStrictMode: true, 
//   swcMinify: true,      
//   compress: true,     
//   productionBrowserSourceMaps: false, 
//   trailingSlash: true,  
//   output: "export",     

//   images: {
//     unoptimized: true,
//   },

//   modularizeImports: {
//     lodash: {
//       transform: "lodash/{{member}}",
//     },
//     "date-fns": {
//       transform: "date-fns/{{member}}",
//     },
//   },

//   experimental: {
//     optimizeCss: true, 
//     scrollRestoration: true,
//   },
// });

// export default nextConfig;



import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {NextConfig} */
const nextConfig: NextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  trailingSlash: true,
  output: "export",

  images: {
    unoptimized: true,
  },

  // ✅ Valid optimizations only
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // ✅ Font optimization via webpack
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize font loading
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        fonts: {
          name: 'fonts',
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          chunks: 'all',
          priority: 10,
          enforce: true,
        },
      };
    }
    return config;
  },

  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
    },
  },
});

export default nextConfig;