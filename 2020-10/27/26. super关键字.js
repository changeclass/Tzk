/*
function Hero() {
  this.name = "张无忌";
  this.sayMe = function () {
    console.log(this.name);
  };
}
Hero.prototype.age = 18;
var hero = new Hero();
hero.sayMe();
hero.sayYou = function () {
  console.log(this.age);
};
hero.sayYou();
*/
var prop = {
  age: 18,
};
var obj = {
  name: "张无忌",
  sayMe() {
    console.log(super.age); // prop.age
  },
};

Object.setPrototypeOf(obj, prop);
obj.sayMe();
