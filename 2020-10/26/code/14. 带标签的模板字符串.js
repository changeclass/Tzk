let str = "console";
console.log`this is ${str}`;
/**
 * 带标签的模板字符串
 *  * 不是模板字符串的用法，而是函数调用的一种特殊形式
 *  * 整体结构
 *   * 函数名称
 *   * 将函数字符串作为函数的参数
 */

function fn(arg) {
  console.log(arg);
}
fn("str"); // str
fn(`str`); // str
fn`str`; // [ 'str' ]
