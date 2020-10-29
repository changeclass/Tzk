// ES5
function Hero() {
  this.name = "张无忌";
  this.sayMe = function () {
    console.log("this is 张无忌");
  };
}

Hero.prototype = {
  age: 18,
  myJob: function () {
    console.log("我是教主");
  },
};

var hero = new Hero();

// ES6创建类
class Hero1 {
  constructor() {
    this.name = "张无忌";
    this.sayMe = function () {
      console.log("this is 张无忌");
    };
  }
}
