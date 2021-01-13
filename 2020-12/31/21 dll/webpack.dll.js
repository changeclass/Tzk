/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-01-02 15:30:59
 * @LastEditTime: 2021-01-02 15:31:00
 * @LastEditors: 小康
 */
// 使用dll技术，对某些第三方库进行单独打包
const { resolve } = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    // 最终要打包生成的文件名：[要打包的库]
    jquery: ['jquery']
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    // 打包的库向外暴露出去的内容的名字
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      // 打包生成manifest.json提供映射关系
      name: '[name]_[hash]',
      path: resolve(__dirname, 'dll/manifest.json')
    })
  ],
  mode: 'production'
}
