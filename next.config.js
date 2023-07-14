/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['www.inshop-online.com'],
  },
  i18n,
  webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    if (!isServer) {
      config.resolve = {
        fallback: {
          fs: false
        },
        alias: {
          "@": path.resolve(__dirname, './src'),
          ...config.resolve.alias
        }
      }
    }

    return config;
  },
}

module.exports = nextConfig
