function fn() {
  console.log(this);
}
fn(); // Object (当前环境的全局对象)
