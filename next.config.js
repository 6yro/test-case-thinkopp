/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles/scss")],
  },
  images: {
    domains: ["celes.club"],
  },
};

module.exports = nextConfig;
