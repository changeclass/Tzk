let arr = [1, 2, 3, 4, 5];

/**
 * @param {any} 6 填充的值
 * @param {any} 1 开始填充的位置
 * @param {any} 3 结束填充的位置（不包含此索引）
 */
var result = arr.fill(6, 1, 3);
console.log(result, arr); //[ 1, 6, 6, 4, 5 ] [ 1, 6, 6, 4, 5 ]
