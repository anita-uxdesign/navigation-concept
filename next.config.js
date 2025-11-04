/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better performance warnings
  reactStrictMode: true,
  
  // Optimize production builds
  swcMinify: true,
  
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'lucide-react'],
  },
}

module.exports = nextConfig
