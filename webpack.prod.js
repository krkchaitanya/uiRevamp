const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');


module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname,"./reactRevamp/dist"),
        filename: 'app_bundle.min.js'
    }
});