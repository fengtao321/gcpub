/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  env: {
    ENV: process.env.ENV,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
