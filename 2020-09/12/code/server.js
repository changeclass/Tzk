// 导入模块 （yarn add express 或 npm i express 安装）
const express = require("express");
// 实例化对象
const app = express();
// 定义端口号
const port = 3000;
// 引入cookie-session模块（yarn add cookie-session 或 npm i cookie-session 安装）
const cookieSession = require("cookie-session");

// 引入解析模块
const bodyParser = require("body-parser");
// 解析urlencoded请求体
app.use(bodyParser.urlencoded({ extended: false }));
// 解析JSON请求体
app.use(bodyParser.json());
// 为cookieSession设置属性
app.use(
  cookieSession({
    // 建立cookie的名字
    name: "XiaoKang",
    // 设置session 的key
    // 是个数组 每一次请求会循环去一个数值进行加密
    keys: ["123", "456", "xiaokang"],
    // 过期事件 24小时过期
    maxAge: 24 * 69 * 60 * 1000,
  })
);
// 设置模板（视图）存放目录
app.set("views", "./views");
// 设置模板引擎
app.set("view engine", "pug");
// 为所有请求的放回信息添加返回头
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length,Authorization,Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});
// 设置路由
/**
 * 当访问根路径时返回Hello World
 */
app.get("/", (req, res) => res.send("Hello World!"));
// 渲染模板引擎
app.get("/pug", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});
// 建立Cookie
app.get("/cookie", (req, res) => {
  // 设置Cookie
  req.session.id = 1;
  res.send("已建立ID");
});
// 清除Cookie
app.get("/clear", (req, res) => {
  // 设置Cookie
  req.session.id = null;
  res.send("已清除ID");
});
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
