const path = require("path");
const merge = require("webpack-merge");
const plugins = require("./webpack/plugins");

module.exports = params => {
  const config = {
    mode: params && params.mode ? params.mode : "development",
    eval: params && params.eval ? params.eval : false
  };

  console.info("*** Environment: ", config.mode);
  console.info("*** Evaluate: ", config.eval);

  return merge.smartStrategy({
    "module.rules.use": "prepend"
  })(
    {
      context: path.resolve("src"),

      mode: config.mode,

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                  includePaths: [path.resolve(`src/ui/shared`)]
                }
              }
            ]
          },
          {
            test: /\.(jpe?g|png|svg|gif|ico|ttf|woff|woff2|eot)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[hash].[ext]",
                  outputPath: "assets/"
                }
              }
            ]
          }
        ]
      },

      resolve: {
        extensions: [".js", ".json", ".css", ".scss"],
        modules: [path.resolve("src"), "node_modules"],
        alias: {
          components: path.resolve("src/components"),
          modules: path.resolve("src/modules"),
          utils: path.resolve("src/utils")
        }
      },

      plugins: [plugins.HtmlWebpackPlugin],

      optimization: {
        splitChunks: {
          name: "vendor",
          chunks: "all"
        }
      }
    },
    require("./webpack/" + config.mode)(config)
  );
};
