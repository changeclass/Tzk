// 遍历数组
let arr = [1, 2, 3, 4, 5];
for (let attr of arr) {
  // attr得到的是数组的元素内容
  console.log(attr);
}

// 遍历Set集合
let set = new Set(ar);
for (let attr of set) {
  // attr得到的是Set的元素内容
  console.log(attr);
}
// 遍历map集合
let num = 100,
  str = "张无忌",
  fun = function () {},
  obj = {};

map.set("num", num);
map.set("str", str);
map.set("fun", fun);
map.set("obj", obj);
for (let attr of map) {
  // attr得到的是Map的[key,value]键值对数组
  console.log(attr);
}

// 遍历字符串
let string = "XiaoKang";
for (let attr of string) {
  // attr得到的是字符串的每一个
  console.log(attr);
}
