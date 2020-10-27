function* g1() {
  yield 2;
  yield 3;
}
function* g2() {
  yield 1;
  yield* g1();
  yield 4;
}
// 生成器函数调用返回生成器对象
let generator = g2();
// 生成器对象就是ES6提供的迭代器
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }
console.log(generator.next()); // { value: undefined, done: true }
