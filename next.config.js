/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/shellcreate', 
  assetPrefix: '/shellcreate',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig