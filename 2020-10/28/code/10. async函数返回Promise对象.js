async function myAsync() {
  return "hello world";
}
let promise = myAsync();
promise.then((value) => {
  console.log(value);
});
