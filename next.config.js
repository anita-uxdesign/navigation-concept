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
  
  // Static export for GitHub Pages - only in production
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  
  // Base path for GitHub Pages (repository name) - only in production
  basePath: process.env.NODE_ENV === 'production' ? '/navigation-concept' : '',
  
  // Optimize images - unoptimized for static export
  images: {
    unoptimized: true,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'lucide-react'],
  },
}

module.exports = nextConfig
