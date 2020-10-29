class Hero {
  constructor() {
    this.name = "张无忌";
    this.sayMe = () => {
      console.log("this is ", this.name);
      // 在constructor中调用静态方法是类名直接调用
      Hero.sayYou();
    };
  }
  // 不可枚举的方法
  toString() {
    console.log("name toString", this.name);
  }
  static sayYou() {
    console.log("this is sayYou");
  }
  static sayHe() {
    // 在静态方法中可以使用类名，也可以使用this
    // Hero.sayYou();
    this.sayYou();
  }
}

let hero = new Hero();
hero.sayMe();

Hero.sayHe();
