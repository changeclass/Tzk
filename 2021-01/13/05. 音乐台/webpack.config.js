const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptiomizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[chunkhash:8].js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // less
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'px2rem-loader',
            // options here
            options: {
              // 1rem=100px
              remUni: 108, //设计图的宽度/10 比如你的设计图是1920的宽度 这里你就1920/10=192
              remPrecision: 8
            }
          },
          'less-loader'
        ]
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
          name: 'imgs/[hash:10].[ext]'
        }
      }
      // 其他
      // {
      //   exclude: /\.(jpg|png|gif|html|js|css|less|bin)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'file/[hash:10].[ext]'
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash:8].css'
    }),
    new OptiomizeCssAssetsWebpackPlugin(),
    new CleanWebpackPlugin()
  ],
  mode: 'development',
  devServer: {
    // 构建后的路径
    contentBase: resolve(__dirname, 'dist'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  }
}
