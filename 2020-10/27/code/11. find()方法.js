let arr = [1, 2, 3, 4, 5];
/**
 * find方法调用的回调函数
 * @param {any} element 数组内容的每一个元素
 * @param {any} index 数组内容的索引
 * @param {any} array 数组
 * @returns {any} 返回符合表达式的第一个元素的值
 */
var result = arr.find(function (element, index, array) {
  console.log(element);
  return index > 3;
});

console.log(result);
