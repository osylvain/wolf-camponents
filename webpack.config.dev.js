/* eslint strict: 0 */
'use strict';


const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

// add your dev specific configs here
const devConfigs = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack-hot-middleware/client',
        './app/scripts/index'
    ],
    output: {
        publicPath: 'http://localhost:8080/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV__: true,
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};

const config = Object.assign({}, baseConfig, devConfigs);

module.exports = config;
