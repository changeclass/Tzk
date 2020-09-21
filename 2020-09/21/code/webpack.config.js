const path = require("path");
//  导出的就是一个对象，这个对象就是webpack命令执行过程中使用到的配置
module.exports = {
  // 编译模式
  // mode: "development",
  mode: "production",
  // 入口文件
  entry: "./src/index.js",
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    // [name]表示占位符
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
};
