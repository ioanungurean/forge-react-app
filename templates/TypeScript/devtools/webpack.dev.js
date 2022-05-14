const webpack = require("webpack");
const { join } = require("path");
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
    hot: true,
    open: true,
    port: 9000,
  },
});
