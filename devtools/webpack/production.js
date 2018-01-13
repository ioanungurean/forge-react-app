const path = require('path');
const plugins = require('./plugins');

module.exports = (config) => {
  return {
    entry: {
      index: path.resolve('src/index.js'),
      vendor: ['react', 'react-dom'],
    },

    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: plugins.ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [
                    path.resolve('node_modules/xbem/src'),
                    path.resolve(`src/gui/themes/${config.theme}`),
                    path.resolve(`src/gui/themes/${config.theme}/fonts`),
                    path.resolve(`src/gui/themes/${config.theme}/patterns`)
                  ],
                },
              },
            ],
          }),
        },
      ],
    },

    output: {
      path: path.resolve(process.cwd(), 'public'),
      filename: '[name].[chunkhash].js',
    },

    // uncomment the line below if you need to run analysis
    plugins: [
      plugins.HashedModuleIdsPlugin,
      plugins.WebpackChunkHash,
      plugins.ExtractTextPlugin,
      // plugins.BundleAnalyzerPlugin,
    ],
  };
};
