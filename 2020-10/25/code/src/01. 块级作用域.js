// 在ES5版本中只存在全局作用域和函数作用域，ES5中不存在块级作用域

if (true) {
  var a = 6;
  let b = 7;
  console.log(a); // 6
  console.log(b); // 7
}
console.log(a); // 6
console.log(b); //  b is not defined
