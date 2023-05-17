const { StatsWriterPlugin } = require("webpack-stats-plugin");

const withBundleStats = require("next-plugin-bundle-stats")({
  json: true,
  html: false,
  compare: true,
  baseline: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (webpackConfig, { dev, isServer }) => {
    if (!dev && !isServer) {
      webpackConfig.plugins.push(
        new StatsWriterPlugin({
          filename: "./artifacts/bundle-stats.json",
          stats: {
            assets: true,
            chunks: true,
            modules: true,
            builtAt: true,
            hash: true,
          },
        })
      );
    }

    return webpackConfig;
  },
};

module.exports = withBundleStats(nextConfig);
