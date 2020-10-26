let [a = 1] = [];
console.log(a); // 1
let [b = 1] = [100];
console.log(b); // 100

// 底层将为变量赋值的值与undefined进行比较
let [x, y = 100] = [100, undefined];
console.log(x, y); // 100 100

// 只与undefined比较
let [v, w = 100] = [100, null];
console.log(v, w); // 100 null
