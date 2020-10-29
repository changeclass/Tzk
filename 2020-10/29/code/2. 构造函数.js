class Hero {
  constructor() {
    this.name = "张无忌";
    this.say = function () {
      console.log("Im am ", this.name);
    };
  }
}

let hero = new Hero();
hero.say(); //Im am  张无忌
