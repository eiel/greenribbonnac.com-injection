const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const publicPath = path.resolve(__dirname, "docs");

module.exports = {
  mode: "production",
  output: {
    path: publicPath,
    filename: "main.js"
  },
  devServer: {
    contentBase: publicPath,
    compress: true,
    host: "0.0.0.0"
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
