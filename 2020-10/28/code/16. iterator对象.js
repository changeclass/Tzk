function fn(array) {
  var index = 0;
  return {
    next: function () {
      return index < array.length
        ? {
            // 是否迭代完毕
            done: false,
            value: array[index++],
          }
        : {
            done: true,
          };
    },
  };
}

let arr = ["tom", "king", "luck"];
let iterator = fn(arr);

console.log(iterator.next()); // { done: false, value: 'tom' }
console.log(iterator.next()); // { done: false, value: 'king' }
console.log(iterator.next()); // { done: false, value: 'luck' }
console.log(iterator.next()); // { done: true }
