let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("one");
  }, 300);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("two");
  }, 200);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("three");
  }, 100);
});
async function myAsync() {
  let result1 = await promise1;
  console.log(result1);

  let result2 = await promise2;
  console.log(result2);

  let result3 = await promise3;
  console.log(result3);
}
myAsync(); // one two three
