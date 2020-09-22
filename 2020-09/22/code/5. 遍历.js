let { keys, values, entries } = Object;
let obj = { a: 1, b: 2, c: 3 };

// keys 键
for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

// values 值
for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

// 键值对
for (let [key, value] of entries(obj)) {
  console.log(key, value); // ['a', 1], ['b', 2], ['c', 3]
}
