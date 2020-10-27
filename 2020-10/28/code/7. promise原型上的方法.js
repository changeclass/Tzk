let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("测试成功了！");
  }, 200);
});

// then将promise的状态改变
promise
  .then((value) => {
    console.log("then() :", value);
  })
  .catch((value) => {
    console.log("catch() :", value); // catch() : 测试成功了！
  })
  .finally(() => {
    console.log("finally"); // finally
  });
