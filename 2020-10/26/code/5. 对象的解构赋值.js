// 变量名与属性名要一一对应
let { x, y } = {
  x: 10,
  y: 20,
};

console.log(x, y); // 10 20

let {
  m: { age, name },
  n,
} = {
  m: {
    age: 12,
    name: "123",
  },
  n: 10,
};
console.log(n, age, name); // 10 12 123
// console.log(m); // 报错  m is not defined
