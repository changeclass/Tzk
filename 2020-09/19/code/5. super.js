var proto = {
  foo: "hellp",
};
var obj = {
  foo: "world",
  find() {
    return super.foo;
  },
};
// 将obj的原型设置为proto
// obj.__proto__ = proto;
Object.setPrototypeOf(obj, proto); // 参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

console.log(obj.find());
