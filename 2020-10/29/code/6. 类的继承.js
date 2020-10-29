class Parent {
  constructor() {
    this.name = "parent";
    this.sayMe = function () {
      console.log("this is sayMe");
    };
  }
  sayYou() {
    console.log("this is sayyou");
  }
  static staticMethod() {
    console.log("this is staticMethod");
  }
}

// 声明child类时，指定child类作为Parent类的子类
class Child extends Parent {
  constructor() {
    super(); // super指向当前子类的父类的构造器
    this.age = 18;
  }
}

let child = new Child();
console.log(child);
child.sayYou();
Child.staticMethod();
