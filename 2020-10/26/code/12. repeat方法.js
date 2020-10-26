let str = "abc";
console.log(str.repeat(3)); // abcabcabc
// 子方法不会影响原有字符串
console.log(str); // abc
// number 为小数,则向下取整
console.log(str.repeat(2.5)); // abcabc
// number 为负数或无穷大,则会报错
// console.log(str.repeat(-1)); // Invalid count value
// number 为NaN,则为0
console.log(str.repeat(NaN)); // ''
// number 参数为字符串,则先转换为数字值
console.log(str.repeat("2")); // abcabc
