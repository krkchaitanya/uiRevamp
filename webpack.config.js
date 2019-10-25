const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { NODE_ENV = 'development' } = process.env;

module.exports = {
  entry:{
    main : './src/index.js',
    es6_es7: './Spotlight/es6-es7/jsFeatures.js' ,
    dropdown_fn_handler: './vanillaJS/dropdown_navigation/dropdown-fn-handler.js',
    es6es7classes: './es2015-classes/es6es7classes.js'
    },
    output :{
      path :path.join(__dirname, './dist'),
      filename: "js/[name].min.js"
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
        filename: "html/index.html"
      })
    ],
    devServer: {
        port: 2811,
        compress: true,
        contentBase: path.join(__dirname, "./dist/html"),
        proxy: {
            "/api": "http://localhost:2600"
        }
      }
};