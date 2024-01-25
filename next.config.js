const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'utfs.io' },
      { hostname: 'demos.creative-tim.com' },
    ],
  },
};

module.exports = nextConfig;
