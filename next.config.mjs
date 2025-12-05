/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing configuration
  output: 'export', 
  
  // ADD THIS BLOCK to disable Image Optimization
  images: {
    unoptimized: true,
  },
}

export default nextConfig