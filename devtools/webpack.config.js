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
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(jpe?g|png|svg|gif|ico|ttf|eot|json)$/,
          use: {
            loader: 'file-loader',
            options: { name: '[name].[hash].[ext]' },
          },
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.json', '.css', '.scss'],
      modules: [path.resolve('src'), 'node_modules'],
      alias: {
        components: path.resolve('src/components/'),
        modules: path.resolve('src/modules/'),
        layout: path.resolve('src/ui/layout'),
        libs: path.resolve('src/libs/'),
      },
    },

    plugins: [
      plugins.CommonsChunkPlugin,
      plugins.ModuleConcatenationPlugin,
      plugins.HtmlWebpackPlugin,
    ],
  }, require('./webpack/' + config.environment)(config));
};
