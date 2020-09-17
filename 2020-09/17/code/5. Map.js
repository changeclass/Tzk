let map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
// console.log(Array.from(map));

var t = Array.from({ length: 3 }, (v) => "无");

console.log(t);
// [ '无', '无', '无' ]