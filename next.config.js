/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_BASE_PATH || ""; // e.g. "/intelligence-khollective"

const nextConfig = {
  reactStrictMode: true,
  output: "export", // enable next export for static hosting
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;


