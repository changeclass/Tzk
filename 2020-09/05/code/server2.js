const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // 获取请求的参数
  var urlObj = require("url").parse(req.url);
  // 提取函数名称
  var functionName = urlObj.query.split("&")[0].split("=")[1];
  console.log(functionName);
  res.end(`${functionName}({"msg":"Hello world"})`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
