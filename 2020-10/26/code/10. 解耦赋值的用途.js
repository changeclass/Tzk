/*
// 1. 交换变量的值
let x = 1;
let y = 2;

console.log(x, y); // 1 2
[x, y] = [y, x];
console.log(x, y); // 2 1
*/
/*
// 2. 返回多个值
function fn() {
  return { a: 1, b: 2, c: 3 };
}
let { a, b, c } = fn();
console.log(a, b, c); //1 2 3
*/
/*
// 3. 函数参数的定义
function f([a, b, c = 3]) {
  console.log(a, b, c);
}
f([1, 2]); //1 2 3
*/
// 4. 提取JSON数据
let jsonData = {
  name: "xiaokang",
  age: 20,
};
let { name, age } = jsonData;
console.log(name, age); // xiaokang 20
