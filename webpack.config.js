const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template:"./src/template.html",
    }),
  ],
  module: {
    rules: [
        {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test      : /\.(woff2?|ttf|otf|eot)(\?v=\w+)?$/,
        type      : 'asset/resource',
        generator : {
          filename : 'fonts/[name][ext][query]',
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name][ext]',
        },
      },
    ],
  },
};
