/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-31 17:33:44
 * @LastEditTime: 2020-12-31 17:33:44
 * @LastEditors: 小康
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      { test: /.css$/, use: ['style-loader', 'css-loader'] },
      { exclude: /\.(css|js|html)/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  // 开发服务器devServer 启动指令 webpack serve
  devServer: {
    // 构建后的路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 300,
    // 自动打开浏览器
    open: true
  }
}
