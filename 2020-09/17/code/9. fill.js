var a = [1, 2, 3];
a.fill(4);
console.log(a); // [ 4, 4, 4 ]

var b = [1, 2, 3, 4, 5, 6];
// 填充从1开始2结束位置填充5
b.fill(5, 1, 2);
console.log(b); // [ 1, 5, 3, 4, 5, 6 ]
