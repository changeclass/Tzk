/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-31 17:23:29
 * @LastEditTime: 2020-12-31 17:23:29
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
      // 排除 css js html 文件
      { exclude: /\.(css|js|html)/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}
