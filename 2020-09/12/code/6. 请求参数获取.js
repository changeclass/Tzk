// 导入模块 （yarn add express 或 npm i express 安装）
const express = require("express");
// 实例化对象
const app = express();
// 定义端口号
const port = 3000;

// 引入解析模块
const bodyParser = require("body-parser");
// 解析urlencoded请求体
app.use(bodyParser.urlencoded({ extended: false }));
// 解析JSON请求体
app.use(bodyParser.json());

// 获取GET请求参数
app.get("/get", (req, res) => {
  console.log("query: ", req.query);
  console.log("id:", req.query.id);
  res.send(req.query);
});
// 获取POST请求参数
app.post("/post", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
// 设置静态目录 public
app.use(express.static(__dirname + "/public"));
// 监听端口
app.listen(port, () =>
  console.log(`Server running at  http://127.0.0.1:${port}`)
);
