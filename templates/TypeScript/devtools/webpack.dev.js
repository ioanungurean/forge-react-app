const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    hot: true, // TODO: Add fast refresh when stable
    open: true,
    port: 9000,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
