// 导入模块 （yarn add express 或 npm i express 安装）
const express = require("express");
// 实例化对象
const app = express();
// 定义端口号
const port = 3000;
// 设置路由
/**
 * 当访问根路径时返回Hello World
 */
app.get("/", (req, res) => res.send("Hello World!"));
// 监听端口
app.listen(port, () =>
  console.log(`Server running at  http://127.0.0.1:${port}`)
);
