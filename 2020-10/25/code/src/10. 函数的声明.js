if (true) {
  function fn() {
    console.log("块级作用域函数");
  }
  let t = function () {
    console.log("函数t");
  };
}
fn(); // 块级作用域函数
// t();
