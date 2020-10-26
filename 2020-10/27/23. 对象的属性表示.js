let name = "张无忌";
function sayMe() {
  console.log("this is 张无忌");
}
var obj = {
  // ES6运行变量名直接作为对象的属性和方法
  name,
  sayMe,
};

console.log(obj.name); //张无忌
