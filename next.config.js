/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  moment: {
    location: 'id',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['picsum.photos',],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
