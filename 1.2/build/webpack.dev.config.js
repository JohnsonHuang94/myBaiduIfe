const webpack = require('webpack');
const merge = require('webpack-merge');
const utils = require('./utils');
const config = require('../config');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

Object.keys(common.entry).forEach(function (name) {
  common.entry[name] = ['./build/dev-client'].concat(common.entry[name])
})

var port = process.env.PORT || config.dev.port

module.exports = merge(common, {
	devtool: 'source-map',
	plugins: [
		// 自动启动浏览器
		new OpenBrowserPlugin({
			url: 'http://localhost:' + port
		}),
		//修改文件后自动刷新(貌似很慢，后面看看如何优化)
		new webpack.HotModuleReplacementPlugin(), 
	]
})