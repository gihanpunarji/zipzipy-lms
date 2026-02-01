/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // Disable React Compiler for faster builds on Vercel
  // reactCompiler: true,

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
