// 参数没有默认值，因此length为1
console.log(function (a) {}.length); // 1
// 参数只有一个且含有默认值，因此length为0
console.log(function (a = 5) {}.length); // 0
// 参数有三个，其中一个为默认值参数，因此length为2
console.log(function (a, b, c = 5) {}.length); // 2
// 设置默认值的参数不是尾参数，那么也不会累计默认值后边的参数
console.log(function (a, b = 5, c) {}.length); // 1
