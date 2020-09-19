var obj = { a: "1", b: 12, name: "大明", [Symbol()]: 0 };

// 1. 通过for..in遍历
for (o in obj) {
  console.log(o);
}
// 2. Object.keys(obj)
console.log(Object.keys(obj)); // 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

// 3. Object.getOwnPropertyNames(obj)
console.log(Object.getOwnPropertyNames(obj)); // 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

// 4. Object.getOwnPropertySymbols(obj)
console.log(Object.getOwnPropertySymbols(obj)); // 返回一个数组，包含对象自身的所有 Symbol 属性的键名。

// 5. Reflect.ownKeys(obj)
console.log(Reflect.ownKeys(obj)); // 返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
