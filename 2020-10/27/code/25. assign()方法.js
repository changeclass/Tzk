var obj = {
  name: "张无忌",
  age: 18,
};

var target = {};
let result = Object.assign(target, obj);
console.log(result, target); // { name: '张无忌', age: 18 } { name: '张无忌', age: 18 }
