/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-31 16:20:56
 * @LastEditTime: 2020-12-31 16:20:57
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
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024
        }
      },
      {
        test: /\.html$/,
        // 处理html中引入的图片
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}
