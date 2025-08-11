import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gyeongnam.go.kr',
      },
      {
        protocol: 'http',
        hostname: 'www.nhtimes.co.kr',
      },
    ],
  },
};

export default nextConfig;
