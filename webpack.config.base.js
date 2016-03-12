/* eslint strict: 0 */
'use strict';

const path = require('path');

module.exports = {
    module: {
        //TODO: if we want to use css modules, we should use the modules query para for the cs loader and configuration showed here
        //https://github.com/css-modules/webpack-demo
        loaders: [
            {test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/},
            {test: /.scss/, loaders: ['style', 'css?sourceMap', 'autoprefixer', 'sass?sourceMap']}
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    plugins: [],
    externals: []
};
