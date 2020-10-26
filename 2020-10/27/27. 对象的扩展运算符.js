var obj = {
  name: "张无忌",
  age: 18,
};
// 将元对象的可枚举的属性复制到目标对象。
var target = { ...obj };
console.log(target); // { name: '张无忌', age: 18 }
