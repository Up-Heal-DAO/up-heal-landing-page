/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GAMEASUREMENTID: process.env.GA_MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
