const path = require('path');
const plugins = require('./plugins');

module.exports = (config) => {
  return {
    entry: {
      index: [
        'react-hot-loader/patch',
        path.resolve('src/index.js')
      ],
      vendor: ['react', 'react-dom'],
    },

    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  path.resolve('node_modules/xbem/src'),
                  path.resolve(`src/gui/layout`),
                  path.resolve(`src/gui/themes/${config.theme}`),
                  path.resolve(`src/gui/themes/${config.theme}/fonts`),
                  path.resolve(`src/gui/themes/${config.theme}/patterns`),
                ],
              },
            },
          ],
        },
      ],
    },

    output: {
      path: path.resolve(process.cwd(), 'public'),
      publicPath: '/',
      filename: '[name].[hash].js',
    },

    devtool: 'eval-source-map',

    devServer: {
      contentBase: path.resolve('public'),
      historyApiFallback: true,
      hot: true,
      port: 9000,
    },

    plugins: [
      plugins.HotModuleReplacementPlugin,
    ],

    optimization: {
      namedModules: true,
    },
  };
};
