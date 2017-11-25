const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const WebpackChunkHash = require('webpack-chunk-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  CommonsChunkPlugin:
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),

  ModuleConcatenationPlugin:
    new webpack.optimize.ModuleConcatenationPlugin(),

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

  HotModuleReplacementPlugin:
    new webpack.HotModuleReplacementPlugin(),

  HashedModuleIdsPlugin:
    new webpack.HashedModuleIdsPlugin(),

  WebpackChunkHash:
    new WebpackChunkHash(),

  ExtractTextPlugin:
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true,
    }),

  BundleAnalyzerPlugin: new BundleAnalyzerPlugin(),
};
