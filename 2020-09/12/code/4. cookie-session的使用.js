// 导入模块 （yarn add express 或 npm i express 安装）
const express = require("express");
// 实例化对象
const app = express();
// 定义端口号
const port = 3000;
// 引入cookie-session模块（yarn add cookie-session 或 npm i cookie-session 安装）
const cookieSession = require("cookie-session");

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
// 建立cookie的路由
app.get("/cookie", (req, res) => {
  // 设置Cookie
  req.session.id = 1;
  res.send("已建立ID");
});
// 清除当前session的路由（不会删除客户端的cookie）
app.get("/clear", (req, res) => {
  // 设置Cookie
  req.session.id = null;
  res.send("已清除ID");
});

// 监听端口
app.listen(port, () =>
  console.log(`Server running at  http://127.0.0.1:${port}`)
);
