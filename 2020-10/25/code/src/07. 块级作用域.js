let a = 100; // 全局变量

(function () {
  // 函数作用域
  let b = 1000; // 局部变量
})();
if (true) {
  // 块级作用域
  let c = 10000;
}
// 此时只能找到a,而b\c会报错
console.log(a);
console.log(b);
console.log(c);
