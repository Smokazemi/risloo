import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.risloo.ir',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[id].[contenthash].css',
        })
      )
    }

    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        'ajv': require.resolve('ajv'),
      }
    }

    return config
  },
  experimental: {
    esmExternals: true
  }
}

export default nextConfig