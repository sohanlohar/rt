/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enable static export
  basePath: "/rt", // Replace with your GitHub repository name
  assetPrefix: "/rt/",
};

export default nextConfig;
