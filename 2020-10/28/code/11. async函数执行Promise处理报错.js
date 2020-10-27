function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("执行成功了！");
    }, 200);
  });
}

async function myAsync() {
  console.log("当前异步函数");
  try {
    var result = await createPromise();
  } catch (e) {
    console.log("出错了", e);
  }
  console.log(result);
}

myAsync();
