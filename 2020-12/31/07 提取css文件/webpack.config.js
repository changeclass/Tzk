/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-31 19:32:48
 * @LastEditTime: 2020-12-31 19:32:48
 * @LastEditors: 小康
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css' //对输出的文件进行重命名,默认为main.css
    })
  ],
  mode: 'development'
}
