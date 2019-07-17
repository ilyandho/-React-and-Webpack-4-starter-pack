const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "handlebars-loader", // handlebars loader expects raw resource string
          "extract-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWepackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({})
  ]
};

*/

//const path = require("path");
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
    })
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
      }
    ]
  }
};
