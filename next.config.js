const withBundleStats = require("next-plugin-bundle-stats")({
  outDir: "../artifacts",
  json: true,
  compare: true,
  baseline: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withBundleStats(nextConfig);
