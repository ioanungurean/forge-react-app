const path = require("path");
const plugins = require("./plugins");

module.exports = config => {
  return {
    entry: {
      index: path.resolve("src/index.tsx"),
      vendor: ["react", "react-dom"]
    },

    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [plugins.MiniCssExtractPluginLoader]
        }
      ]
    },

    output: {
      path: path.resolve(process.cwd(), "public"),
      filename: "[name].[chunkhash].js"
    },

    plugins: [
      ...(config.eval ? [plugins.BundleAnalyzerPlugin] : []),
      plugins.HashedModuleIdsPlugin,
      plugins.WebpackChunkHash,
      plugins.MiniCssExtractPlugin
    ],

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.css$/,
            chunks: "all",
            enforce: true
          }
        }
      },
      minimizer: [plugins.UglifyJsPlugin, plugins.OptimizeCSSAssetsPlugin]
    }
  };
};
