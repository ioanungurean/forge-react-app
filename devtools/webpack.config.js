const path = require('path');
const merge = require('webpack-merge');
const plugins = require('./webpack/plugins');

module.exports = (params) => {
  const config = {
    environment: (params && params.environment) ? params.environment : 'development',
    theme: (params && params.theme) ? params.theme : 'default',
  };

  console.info('*** Environment', config.environment);
  console.info('*** Theme', config.theme);

  return merge({
    context: path.resolve('src'),

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(jpe?g|png|svg|gif|ico|ttf|eot)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'resources',
                publicPath: path.resolve('dist'),
              },
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.json', '.css', '.scss'],
      modules: [path.resolve('src'), 'node_modules'],
      alias: {
        components: path.resolve('src/components'),
        modules: path.resolve('src/modules'),
        layout: path.resolve('src/gui/layout'),
        libs: path.resolve('src/libs'),
      },
    },

    plugins: [
      plugins.CommonsChunkPlugin,
      plugins.ModuleConcatenationPlugin,
      plugins.HtmlWebpackPlugin,
    ],
  }, require('./webpack/' + config.environment)(config));
};
