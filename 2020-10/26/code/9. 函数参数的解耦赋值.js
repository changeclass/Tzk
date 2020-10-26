// 数组解耦
function fn1([n, m]) {
  console.log(n, m);
}
fn1([10, 20]); //10 20

// 对象解耦
function fn2({ n, m }) {
  console.log(n, m);
}
fn2({
  n: 10,
  m: 20,
}); //10 20
