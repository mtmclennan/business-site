/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pluralpost.com",
        port: "",
      },
    ],
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
