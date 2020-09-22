const obj1 = { a: { b: 1 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: { b: 1 } }
// 如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
obj1.a.b = 2;
console.log(obj2); // { a: { b: 2 } }
