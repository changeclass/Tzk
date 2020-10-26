function g(x) {
  return x + 2;
}
function fn(x) {
  return g(x); // 表示尾调用
}

console.log(fn(3)); // 5
