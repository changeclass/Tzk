let set = new Set([1, 2, 3, 4, 5]);

// values方法
// 返回一个迭代器对象，但这个迭代器对象没有length属性，
// 常规的循环语句无法使用,只能使用for...of循环
console.log(set.values()); // [Set Iterator] { 1, 2, 3, 4, 5 }

// keys方法
console.log(set.keys()); // [Set Iterator] { 1, 2, 3, 4, 5 }

// entries()方法
console.log(set.entries()); // [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] }

// forEach()方法
set.forEach(function (value, index, array) {
  /**
   * value表示当前遍历的值
   * index实际上是key，key与value相同
   * array表示当前遍历的set集合
   */
  console.log(value, index, array);
});
/*
1 1 Set { 1, 2, 3, 4, 5 }
2 2 Set { 1, 2, 3, 4, 5 }
3 3 Set { 1, 2, 3, 4, 5 }
4 4 Set { 1, 2, 3, 4, 5 }
5 5 Set { 1, 2, 3, 4, 5 }
*/
