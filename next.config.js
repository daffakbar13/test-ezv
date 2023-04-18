/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.dummyjson.com'],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
