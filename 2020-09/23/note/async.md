## async基本用法

`async`函数返回一个 Promise 对象，可以使用`then`方法添加回调函数。当函数执行的时候，一旦遇到`await`就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

```javascript
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

```

- 函数声明形式

  ```javascript
  async function foo() {}
  ```

- 函数表达式

  ```javascript
  const foo = async function () {};
  ```

- 对象的方法

  ```javascript
  let obj = { async foo() {} };
  obj.foo().then(...)
  ```

- Class的写法

  ```javascript
  class Storage {
    constructor() {
      this.cachePromise = caches.open('avatars');
    }
  
    async getAvatar(name) {
      const cache = await this.cachePromise;
      return cache.match(`/avatars/${name}.jpg`);
    }
  }
  
  const storage = new Storage();
  storage.getAvatar('jake').then(…);
  ```

- 箭头函数

  ```javascript
  const foo = async () => {};
  ```

  

## 语法

`async`返回的是一个promise对象，其内部函数`return`会作为then方法回调函数的参数。

```javascript
async function f() {
  return "hello world";
}

// then方法的参数即f()函数内部的返回值(return)
f().then((v) => console.log(v));
// "hello world"

```

`async`函数返回的 Promise 对象，必须等到内部所有`await`命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到`return`语句或者抛出错误。也就是说，只有`async`函数内部的异步操作执行完，才会执行`then`方法指定的回调函数。

`await`命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。

任何一个`await`语句后面的 Promise 对象变为`reject`状态，那么整个`async`函数都会中断执行。

```javascript
async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
```

![image-20200923164723939](https://files.alexhchu.com/2020/09/23/6e08cf5a3181e.png)

如果希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个`await`放在`try...catch`结构里面，这样不管这个异步操作是否成功，第二个`await`都会执行。

```javascript
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// hello world
```

除了上面的写法也可以在`await`后面的Promise对象后再跟一个`catch`方法。

```javascript
async function f() {
  await Promise.reject('出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// 出错了
// hello world
```

