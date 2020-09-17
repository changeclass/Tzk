[1, 5, 10, 15].find(function (value, index, arr) {
  return value > 9;
}); // 10
console.log(
  [1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9;
  })
); // 2

// 指定this
function f(v) {
  // 这个this指向第二个参数
  return v > this.age;
}
let person = { name: "John", age: 20 };
console.log([10, 12, 26, 15].find(f, person)); // 26


