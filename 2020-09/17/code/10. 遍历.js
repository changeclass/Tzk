var arr = ["a", "b"];

console.log(arr.keys());
console.log(arr.values());
console.log(arr.entries());

// 遍历键（索引）
for (let index of arr.keys()) {
  console.log(index); // 0 1
}

// 遍历值
for (let elem of arr.values()) {
  console.log(elem); // a b
}
// 遍历键值对
for (let [index, elem] of arr.entries()) {
  console.log(index, elem);
  // 0 a
  // 1 b
}
