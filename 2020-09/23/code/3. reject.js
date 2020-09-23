async function f() {
  await Promise.reject("出错了");
  await Promise.resolve("hello world"); // 不会执行
}
// f();
async function f() {
  try {
    await Promise.reject("出错了");
  } catch (e) {}
  return await Promise.resolve("hello world");
}

f().then((v) => console.log(v));
// hello world
