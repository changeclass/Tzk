const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // 响应数据
  // 响应的数据必须是JSON格式
  // 响应的数据作为调用的函数的参数传递
  res.end('fn({"msg":"Hello world"})');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
