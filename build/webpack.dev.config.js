const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const webpackConfig = merge(baseConfig, {
    mode: 'development',
    devServer: {
        hot: true,
        port: 8000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = webpackConfig;