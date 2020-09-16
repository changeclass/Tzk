function log(x, y = "World") {
  console.log(x, y);
}

// log("Hello"); // Hello World
// log("Hello", "China"); // Hello China
// log("Hello", ""); // Hello

// 使用let或const再次声明 测试
/*
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
*/

// 同名参数测试
/*
function foo(x, x, y) {
  console.log(123);
}

function foo(x, x, z = 5) {
  console.log(z);
}
*/

// 惰性求值
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}
// 此时 x为99 默认值为 99+1
foo(); // 100

x = 100;
// 将x值修改为100，那么默认值就成了 100+1
foo(); // 101
