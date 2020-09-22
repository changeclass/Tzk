var obj1 = {
  name: "1",
};
var obj2 = {
  name: "1",
};

// is方法用于判断两个对象是否严格相等即===
console.log(Object.is(obj1, obj2)); // false

console.log(Object.is("123", "123")); //true
