console.log(...[1, 1, 2, 3, 4]); // 1 1 2 3 4
console.log(1, ...[2, 3, 4], 5); // 1 2 3 4 5

// function push(array, ...items) {
//   array.push(...items);
// }

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
var result = add(...numbers);
console.log(result); // 42

var x = 1;
const arr = [...(x > 0 ? ["a"] : []), "b"];
console.log(arr); // [ 'a', 'b' ]
