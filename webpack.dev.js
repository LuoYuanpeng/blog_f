const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const webpack = require("webpack")

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: './dist',
		compress: true,
		host: 'localhost',
		port: '3335',
		historyApiFallback:true,
		hot: true,
		inline: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
})
