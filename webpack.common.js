const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// extract text pulgin --> compiles scss and gives output of css...used in HTML.
const extractPlugin = new ExtractTextPlugin({
  // output -->> ./dist/css/style.css
  filename: './css/style.css'
});

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: { presets: ["es2015"] }
            }
          },
          {
            test: /\.scss$/,
            use: extractPlugin.extract({
              use: ['css-loader', 'sass-loader'],
              fallback: 'style-loader'
            })
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        ]
      },
      plugins: [
        extractPlugin
      ],
    };