// WeakSet集合只能存储对象
var ws = new WeakSet();

var obj1 = {};
var obj2 = {};

ws.add(obj1).add(obj2);

console.log(ws);
