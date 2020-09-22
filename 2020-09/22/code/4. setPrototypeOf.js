let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

// console.log(obj.x, obj.y, obj.z);
console.log(Object.getPrototypeOf(obj)); // { y: 20, z: 40 }
