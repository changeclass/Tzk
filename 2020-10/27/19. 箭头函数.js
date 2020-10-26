let fn1 = () => 2;
console.log(fn1()); // 2
let fn2 = (a, b) => a + b;
console.log(fn2(1, 2)); // 3
let fn3 = () => {
  console.log("log");
  return 1;
};
console.log(fn3());
// log
// 1
