const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackplugin = new HtmlWebpackPlugin({ template: './reactRevamp/src/index.html'});
const babelClassProperties = require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-class-properties"]
});

module.exports = {
  entry: './reactRevamp/src/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react','es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    htmlWebpackplugin
  ],
  devServer: {
    historyApiFallback: true
  }
};