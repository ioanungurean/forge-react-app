const path = require('path');
const plugins = require('./plugins');

module.exports = (config) => {
  return {
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
                  path.resolve('node_modules/xbem/src/'),
                  path.resolve(`src/ui/themes/${config.theme}`),
                  path.resolve(`src/ui/themes/${config.theme}/fonts`),
                  path.resolve(`src/ui/themes/${config.theme}/patterns`),
                ]
              },
            }
          ]
        }
      ]
    },

    output: {
      path: path.resolve(process.cwd(), 'public'),
      filename: '[name].js',
    },

    devtool: 'source-map',

    devServer: {
      compress: true,
      contentBase: path.resolve('public'),
      historyApiFallback: true,
      hot: true,
      port: 9000,
    },

    plugins: [
      plugins.HotModuleReplacementPlugin,
    ],
  };
};
