const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = path.resolve(__dirname, "docs");

module.exports = {
    mode: "production",
    output: {
        path: publicPath,
        filename: "main.js", // string    // the filename template for entry chunks
    },
    devServer: {
        contentBase: publicPath,
        compress: true,
        host: "0.0.0.0"
    },
    plugins: [new HtmlWebpackPlugin()]
};
