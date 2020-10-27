function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("执行成功了！");
    }, 200);
  });
}

async function myAsync() {
  console.log("当前异步函数");
  var result = await createPromise();
  console.log(result);
}

myAsync();
