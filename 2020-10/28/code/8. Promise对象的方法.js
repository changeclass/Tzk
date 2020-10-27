let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("one");
  }, 100);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("two");
  }, 300);
});
let promise3 = new Promise((resolve, reject) => {
  resolve("promise3");
});

let promise = Promise.race([promise1, promise2]);

promise.then((value) => {
  console.log(value); // one 因为第一个先执行完
});
