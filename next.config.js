/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  ...(basePath && { basePath }),
  ...(basePath && { assetPrefix: basePath }),
  trailingSlash: true,
};

export default nextConfig;


