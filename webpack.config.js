const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { NODE_ENV = 'development' } = process.env;

module.exports = {
  entry:{
    main : './src/index.js',
    es6_es7: './Spotlight/es6-es7/jsFeatures.js' ,
    // dropdown_fn_handler: './vanillaJS/dropdown_navigation/dropdown-fn-handler.js',
    es6es7classes: './es2015-classes/es6es7classes.js',
    index: './reactRevamp/src/index.js',
    jsFeature: './Spotlight/es6-es7/jsFeatures.js',
    jsFeature: './Spotlight/es6-es7/jsFeatures2.js',
    basicLiterals: './basic_literals/basic_literals.js',
    basicLiterals2: './basic_literals/basic_literals2.js',
    basicLiterals3: './basic_literals/basic_literals3.js'
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
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                  }
                }
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "jsFeatures.html",
        template: "./Spotlight/es6-es7/jsFeatures.html"
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./reactRevamp/src/index.html"
      })
    ],
    devServer: {
        port: 2700,
        compress: true,
        hot: true,
        contentBase: path.join(__dirname, "./reactRevamp/src/index.html"),
        proxy: {
            "/api": "http://localhost:2600"
        }
      }
};