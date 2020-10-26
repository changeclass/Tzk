let str = "xiaokangboke";
// ES5提供判断是否包含的方法
console.log(str.indexOf("o"));
// ES6提供判断是否包含

console.log(str.includes("o")); //true
console.log(str.includes("o", 3)); //true
// 区分大小写
console.log(str.includes("O", 3)); //false

// 基于includes实现不区分大小写的判断
function myIncludes(str, searchStr, index = 0) {
  str = str.toLowerCase();
  searchStr = searchStr.toLowerCase();
  return str.includes(searchStr, index);
}
console.log(myIncludes(str, "X"));
console.log(str.startsWith("xiao"));
