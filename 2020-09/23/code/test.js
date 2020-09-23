class Test {
  constructor(obj) {
    this.x = 5;
    this.y = 6;
    this.init(obj);
  }
  init(obj) {
    // 欲实现初始化时将传入的对象解析然后赋值到当前对象的属性
    for (let [key, value] of Object.entries(obj)) {
      console.log([key, value]);
      this[key] = value;
    }
    // Test.test();
    console.log("内部调用", Test.test());
  }
  static test() {
    // console.log(66);
    return 666;
  }
}

let test = new Test({ x: 1, y: 2 });
console.log(test.x);
console.log(test.y);
console.log(Test.test());
