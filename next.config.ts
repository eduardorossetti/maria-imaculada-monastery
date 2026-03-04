import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clarissas-monastery.s3.sa-east-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
