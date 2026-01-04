/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Transpile packages that may need it for React Three Fiber
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  
  // Configure images
  images: {
    domains: ['i.scdn.co', 'open.spotify.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.scdn.co',
      },
    ],
  },
  
  // Webpack configuration for Three.js support
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
};

export default nextConfig;
