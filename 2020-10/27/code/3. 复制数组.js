/**
 * 深复制：复制数组中的元素内容（数据）
 * 浅复制：复制数组的内存地址
 */

var arr1 = [1, 2, 3, 4, 5];
// 写法1-深复制
var arr2 = [...arr1];
arr2[2] = 6;
// 写法2
var [...arr3] = arr1;
arr3[2] = 6;
console.log(arr1, arr2, arr3); //[ 1, 2, 3, 4, 5 ] [ 1, 2, 6, 4, 5 ] [ 1, 2, 6, 4, 5 ]
