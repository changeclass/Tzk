// 初始化状态
let promise = new Promise(function (resolve, reject) {
  /**
   * resolve - 是一个函数，将Promise对象的状态改为成功
   * rejecte - 是一个函数，将Promise对象的状态改为失败
   */
  setTimeout(() => {
    resolve("测试成功了！");
  }, 200);
});

// then将promise的状态改变
promise.then(function (value) {
  console.log(value); // 测试成功了！
});

