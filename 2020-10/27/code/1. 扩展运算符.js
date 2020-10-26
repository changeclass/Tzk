//  定义一个数组
var arr = [1, 2, 3, 4];
// 直接打印数组内每个元素
console.log(...arr); // 1 2 3 4

// 函数内取每个参数
function fn(a, b) {
  console.log(a + b);
}
fn(...arr); // 结果3  实际传入的为数组第一个和第二个
