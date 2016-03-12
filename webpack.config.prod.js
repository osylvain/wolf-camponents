/* eslint strict: 0 */
'use strict';


const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

// add your prod specific configs here
const prodConfig = {}

const config = Object.assign({}, baseConfig, prodConfig);

module.exports = config;
