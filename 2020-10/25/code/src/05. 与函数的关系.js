/**
 * 使用let关键字声明变量将当前环境封闭
 */
let v = 100;
function fn() {
  // 全局作用域
  console.log(v); // 由于在此作用域中还存在一个v的声明,因此v无法使用全局变量的v
  let v = 1000;
  console.log(v);
}
fn();
