/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // Enable static generation optimizations
  generateEtags: false,
  poweredByHeader: false,
  // Allow external API calls
  experimental: {
    esmExternals: 'loose',
  },
}

export default nextConfig
