function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async会返回一个promise对象
async function asyncPrint(value, ms) {
  // 等待1秒 await后跟的也是promise对象 只有当timeout函数执行完成后才会执行下边的代码
  await timeout(ms);
  console.log(value);
}

asyncPrint("hello world", 1000).then(() => {
  console.log(666);
});
