// 属性
const foo = "bar";
const baz = { foo }; // // {foo: "bar"}

const baz1 = { foo: foo };

// console.log(baz);
// console.log(baz1);

// 方法
const o = {
  method() {
    let x = 1;
    let y = 2;
    return { x, y };
  },
};

// console.log(o.method()); // { x: 1, y: 2 }
const obj = {
  f() {
    this.foo = "bar";
  },
};

new obj.f(); // 报错
