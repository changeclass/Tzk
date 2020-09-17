const a1 = [1, 2];
// 写法一
const a2 = [...a1];

console.log(a2); // [ 1, 2 ]
a2[0] = 2;
console.log(a1); // [ 1, 2 ]
console.log(a2); // [ 2, 2 ]
