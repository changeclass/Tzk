// 普通字符串
let str1 = "this is string";

let str2 = `this is string`;

// console.log(str1, str2);

// 1. 与变量配合使用
let name = "xiaokang";
let str3 = `My name is ${name}`; // this is string this is string
console.log(str3);
// 2. 模板字符串里的字符会原样输出
let str4 = `Hello 
World`;
console.log(str4);
/*
Hello 
World
*/
