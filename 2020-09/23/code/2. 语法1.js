async function f() {
  return "hello world";
}

// then方法的参数即f()函数内部的返回值(return)
f().then((v) => console.log(v));
// "hello world"
