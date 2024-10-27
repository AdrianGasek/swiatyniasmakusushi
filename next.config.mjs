/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://d.basemaps.cartocdn.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
