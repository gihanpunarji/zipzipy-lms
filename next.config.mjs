/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // Disable React Compiler for faster builds on Vercel
  // reactCompiler: true,

  // Optimize production builds
  swcMinify: true,

  // Reduce build time by limiting worker threads
  experimental: {
    // Use Webpack instead of Turbopack for more stable builds
    turbo: false,
  },

  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Reduce output bloat
  output: 'standalone',
};

export default nextConfig;
