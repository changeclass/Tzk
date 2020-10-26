// 原始字符串应用在带标签的模板字符串
// 函数的第一个参数中，存在着raw属性用于获取模板字符串的原始字符串
// 原始字符串
//  * 模板字符串被定义时的内容，而不是处理之后的内容
function fn(arg) {
  console.log(arg.raw);
}
fn`this is function.`; // [ 'this is function.' ]
