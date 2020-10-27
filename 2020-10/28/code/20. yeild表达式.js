// 定义一个生成器函数
function* fn() {
  let arr = ["tom", "king", "lucky"];
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}
// 生成器函数调用返回生成器对象
let generator = fn();
// 生成器对象就是ES6提供的迭代器
console.log(generator.next()); // { value: 'tom', done: false }
console.log(generator.next()); // { value: 'king', done: false }
console.log(generator.next()); // { value: 'lucky', done: false }
console.log(generator.next()); // { value: 'undefined', done: true }
