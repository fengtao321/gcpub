/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  env: {
    ENV: process.env.ENV,
  },
};

module.exports = nextConfig;
