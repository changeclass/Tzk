// 导入模块 （yarn add express 或 npm i express 安装）
const express = require("express");
// 实例化对象
const app = express();
// 定义端口号
const port = 3000;
// 设置模板（视图）存放目录
app.set("views", "./views");
// 设置模板引擎
app.set("view engine", "pug");

// 渲染模板引擎
app.get("/pug", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

// 监听端口
app.listen(port, () =>
  console.log(`Server running at  http://127.0.0.1:${port}`)
);
