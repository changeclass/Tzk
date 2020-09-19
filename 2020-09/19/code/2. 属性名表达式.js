var foo = "abc";
var obj = {
  [foo]: 123,
  f: 456,
};
console.log(obj);

let obj1 = {
  ["h" + "ello" + foo]() {
    return "hi";
  },
};

console.log(obj1.helloabc()); // hi

// const foo = 'bar';
const bar = "abc";
// const baz = { [foo] };

const keyA = { a: 1 };
const keyB = { b: 2 };

const myObject = {
  [keyA]: "valueA",
  [keyB]: "valueB",
};

console.log(myObject); // Object {[object Object]: "valueB"}
