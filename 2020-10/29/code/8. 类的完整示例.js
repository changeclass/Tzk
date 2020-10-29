// 定义一个类
class Parent {
  // 表示当前类的构造器（如果省略，JavaScript会自动生成）
  constructor(name) {
    this.name = name;
  }
  // 类的方法，不是原型方法
  toString() {
    console.log("this is parent toString");
    return "this is parent toString";
  }
  // 由当前类直接调用的方法
  static staticMethod() {
    console.log("this is parent static");
    return "this is parent static";
  }
  sayMe() {
    console.log("this is parent sayMe");
    return "this is parent sayMe";
  }
}
// 类具有原型
Parent.prototype.sayYou = function () {
  console.log("this is parent sayYou");
  return "this is parent sayYou";
};
//
class Child extends Parent {
  constructor(name, age) {
    super(name); // 指向父类构造器
    this.age = age;
    super.sayMe(); // 指向父类的实例对象
    super.sayYou(); // 指向父类的实例对象
  }
  toString() {
    console.log("this is child toString", super.toString());
  }
  static staticMethod() {
    console.log("this is child static", super.staticMethod());
  }
}

let child = new Child("XiaoKang", 18);
console.log(child);
// 将子类和父类的相同方法同时调用
child.toString();
Child.staticMethod();
