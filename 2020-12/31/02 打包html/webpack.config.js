/**
 * @description: webpack配置文件
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-31 15:32:28
 * @LastEditTime: 2020-12-31 15:32:28
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
    rules: []
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development'
}
