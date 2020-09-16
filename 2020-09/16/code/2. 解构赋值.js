// 如果没有提供参数，函数foo的参数默认为一个空对象。
function foo({ x, y = 5 } = {}) {
  console.log(x, y);
}

// foo(); // undefined 5

// 写法一
function m1({ x = 0, y = 0 } = {}) {
  console.log("m1:", x, y);
}

// 写法二
function m2({ x, y } = { x: 0, y: 0 }) {
  console.log("m2:", x, y);
}
// 函数没有参数的情况
m1(); // [0, 0]
m2(); // [0, 0]

// x 和 y 都有值的情况
m1({ x: 3, y: 8 }); // [3, 8]
m2({ x: 3, y: 8 }); // [3, 8]

// x 有值，y 无值的情况
m1({ x: 3 }); // [3, 0]
m2({ x: 3 }); // [3, undefined]

// x 和 y 都无值的情况
m1({}); // [0, 0];
m2({}); // [undefined, undefined]

m1({ z: 3 }); // [0, 0]
m2({ z: 3 }); // [undefined, undefined]
