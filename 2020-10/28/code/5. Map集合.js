// 创建Map集合
let map = new Map();

let num = 100,
  str = "张无忌",
  fun = function () {},
  obj = {};

map.set("num", num);
map.set("str", str);
map.set("fun", fun);
map.set("obj", obj);

console.log(map);

console.log(map.get("str")); // 张无忌
