/**
 * let与var关键字的区别 - 都是定义变量
 * let提供了块级作用域
 *  * 也可以在全局作用域和函数作用域定义变量
 * var提供了全局作用域和函数作用域
 */

var m = 100;
let n = 1000;

console.log(m); // 100
console.log(n); // 1000
