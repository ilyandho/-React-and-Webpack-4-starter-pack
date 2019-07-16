const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");

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
        test: /\.css$/i,
        use: [
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
    })
  ]
};
