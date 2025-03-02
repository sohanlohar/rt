/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for images on GitHub Pages
  },
  basePath: "https://github.com/sohanlohar/rt", // Set this to your GitHub repository name
  assetPrefix: "https://github.com/sohanlohar/rt",
};

export default nextConfig;
