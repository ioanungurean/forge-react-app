const { join } = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: join(__dirname, "dist"),
    },
    historyApiFallback: true,
    hot: true, // TODO: Add fast refresh when stable
    open: true,
    port: 9000,
  },
});
