const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new HtmlWepackPlugin({
      title: "Webpack 4 Starter Pack",
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/assets/images",
        to: "assets/images"
      }
    ])
  ],
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      },
      {
        test: [/.css$/],
        include: [path.resolve(__dirname, "not_exist_path")],
        use: ["style-loader", "css-loader"]
      },
      {
        test: [/.css$|.scss$/],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: [/.css$|.scss$/],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images"
            }
          }
        ]
      }
    ]
  }
};
