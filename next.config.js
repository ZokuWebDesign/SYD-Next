/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  distDir: 'dist',   // Output to a 'dist' folder instead of '.next'

  env: {
    PUBLIC_GOOGLE_ANALYTICS_ID: process.env.PUBLIC_GOOGLE_ANALYTICS_ID,
    PUBLIC_GTM_ID: process.env.PUBLIC_GTM_ID,
    PUBLIC_GOOGLE_TAG_ID: process.env.PUBLIC_GOOGLE_TAG_ID,
    PUBLIC_CLARITY_ID: process.env.PUBLIC_CLARITY_ID,
    VITE_GA_MEASUREMENT_ID: process.env.VITE_GA_MEASUREMENT_ID,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/webp', 'image/avif'], // Modern image formats
  },
  webpack(config) {
    // SVG Configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false
                }
              ]
            }
          }
        }
      ]
    });

    return config;
  },
}

module.exports = nextConfig
