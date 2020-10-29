// 主模块
// 对模块加载进行自定义
require.config({
  paths: {
    hello: "./moudle",
  },
});

// 加载指定模块 - require(names,callback)
// names: 数组类型 加载模块的名称
// callback: 回调函数，将加载完毕的模块结果进行处理
require(["hello"], function (value) {
  console.log(value);
  var h1 = document.createElement("h1");
  h1.textContent = value;
  document.body.appendChild(h1);
  console.log(11);
});
