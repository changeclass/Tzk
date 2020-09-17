// ES5 的写法
var a = Math.max.apply(null, [14, 3, 77]);

// ES6 的写法
var b = Math.max(...[14, 3, 77]);

// 直观写法
var c = Math.max(14, 3, 77);

// 结果均为77
console.log(a);
console.log(b);
console.log(c);
