var x = 1;
function foo(
  x,
  y = function () {
    // x指向第一个参数x
    x = 2;
  }
) {
  var x = 3;
  // 此函数内虽然定义了X，但与该作用域不是同一个作用域
  y();
  // 由于此作用域声明了一个 x为3 因此打印出的结果为此作用域的x
  console.log(x);
}

foo(); // 3
x; // 1
