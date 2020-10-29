class Hero {
  constructor() {
    this.v = 100;
  }
  get getV() {
    return this.v;
  }
  set setV(value) {
    this.v = value;
  }
}
var obj = new Hero();
console.log(obj.getV); // 100
