/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-31 17:49:39
 * @LastEditTime: 2020-12-31 17:49:40
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
      // less
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // html中引入图片
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // 图片
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]'
        }
      },
      // 其他
      {
        exclude: /\.(jpg|png|gif|html|js|css|less)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
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
