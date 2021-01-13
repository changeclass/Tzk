/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-31 11:56:57
 * @LastEditTime: 2020-12-31 11:56:57
 * @LastEditors: 小康
 */
const { resolve } = require('path')

module.exports = {
  // 入口
  entry: './src/index.js',
  // 输出
  output: {
    // 输出的文件名
    filename: 'built.js',
    // 输出的路径
    path: resolve(__dirname, 'build')
  },
  // loader配置
  module: {
    rules: [
      // css解析
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // less解析
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    // 详细plugins配置
  ],
  // 模式 development 或 production
  mode: 'development' // 开发模式
}
