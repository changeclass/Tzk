const arr1 = ["a", "b"];
const arr2 = ["c"];
const arr3 = ["d", "e"];

// ES5 的合并数组
var arr4 = arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
var arr5 = [...arr1, ...arr2, ...arr3];
// [ 'a', 'b', 'c', 'd', 'e' ]

console.log(arr4[0] === arr1[0]); // true
console.log(arr5[0] === arr1[0]); // true
