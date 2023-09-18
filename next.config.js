/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/server.js",
      },
    ];
  },
};

module.exports = nextConfig;
