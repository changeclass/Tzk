const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 }; // 此处的b会覆盖target的b
const source2 = { c: 3 }; // 此处的c会覆盖source1的c

Object.assign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}

console.log(Object.assign(target) === target); //true

let obj = { a: 1 };
console.log(Object.assign(obj, undefined) === obj); // true
console.log(Object.assign(obj, null) === obj); // true
