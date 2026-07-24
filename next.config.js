const nextConfig = {
  output: 'export',
  distDir: 'dist',
  
  // REQUIRED — replace with your actual repo name
  basePath: '/shellcreate',
  assetPrefix: '/shellcreate',
  
  images: { unoptimized: true },
  trailingSlash: true,  // Fixes 404 on page refresh
}