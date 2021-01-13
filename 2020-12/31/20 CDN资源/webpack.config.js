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
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },

  plugins: [new HtmlWebpackPlugin()],
  mode: 'development',
  externals: {
    // 忽略的库名  -- npm 包名
    jquery: 'JQuery'
  }
}
