const webpack = require('webpack');
const path = require('path');

const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackTemplate = require('html-webpack-template');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  HtmlWebpackPlugin:
    new HtmlWebpackPlugin({
      title: 'React App',
      appMountId: 'root',
      inlineManifestWebpackName: 'webpackManifest',
      template: HtmlWebpackTemplate,
      favicon: path.resolve('src/favicon.ico'),
      minify: { collapseWhitespace: true },
      inject: false,
    }),

  HashedModuleIdsPlugin:
    new webpack.HashedModuleIdsPlugin(),

  WebpackChunkHash:
    new WebpackChunkHash(),

  MiniCssExtractPlugin:
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),

  MiniCssExtractPluginLoader:
    MiniCssExtractPlugin.loader,

  OptimizeCSSAssetsPlugin:
    new OptimizeCSSAssetsPlugin(),

  UglifyJsPlugin:
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }),

  HotModuleReplacementPlugin:
    new webpack.HotModuleReplacementPlugin(),

  ErrorOverlayPlugin: new ErrorOverlayPlugin(),

  FriendlyErrorsWebpackPlugin: new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: ['You application is running at: http://localhost:9000'],
    },
  }),

  BundleAnalyzerPlugin:
    new BundleAnalyzerPlugin(),
};
