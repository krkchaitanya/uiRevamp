const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV = 'development' } = process.env;

module.exports = {
  entry:{
    main : './src/index.js',
    es6_es7: './Spotlight/es6-es7/jsFeatures.js' 
    },
    output :{
      path :path.resolve('./dist'),
      filename: "[name].min.js"
    },
    mode: NODE_ENV,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'survivor',
          template: './Spotlight/es6-es7/jsFeatures.html'
        })
    ],
    devServer: {
        port: 2811,
        compress: true,
        proxy: {
            "/api": "http://localhost:2600"
        }
      }
};