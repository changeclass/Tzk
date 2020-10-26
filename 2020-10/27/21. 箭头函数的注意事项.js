/*
// 1. 不能作为构造函数
var fn = () => {
  this.name = "张无忌";
};
var f = new fn();
console.log(f);
*/

/*
let obj = {
  name: "张无忌",
  sayMe: () => {
    console.log("我是张无忌");
  },
};
obj.sayMe(); // 我是张无忌
*/

var fn = (...args) => {
  console.log(args);
};
fn(1, 2, 3); //[ 1, 2, 3 ]
