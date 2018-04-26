const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	resolve: {
		// 自动解析确定的拓展, 添加san文件
    	extensions: ['.json', '.js', '.san']   
	},
	output: {
	    path: config.build.assetsRoot,
	    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
	    filename: '[name].js'
	},
	plugins: [
		// clean dist 
		new CleanWebpackPlugin(['dist']),
		// injuect   HTML
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		// san中处理css, less, sass之类
		new webpack.LoaderOptionsPlugin({
         options: {
           san: {
			    loaders: utils.cssLoaders()
			}
         }
       })
	],
	module: {
		rules: [
			// 处理css
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			// 处理图片
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			// 处理字体
			{
				test: /\.(woff|woff2|eot|ttf|otf|fon)$/,
				use: [
					'file-loader'
				]
			},
			// 处理 san 组件
			{
				test: /\.san$/,
				use: [
					'san-loader'
				]
			}
		]
	}
}
