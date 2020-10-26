// 构建一个类数组对象
var obj = {
  0: "张无忌",
  1: "周芷若",
  2: "赵敏",
  length: 3,
};

console.log(Array.from(obj)); //[ '张无忌', '周芷若', '赵敏' ]
