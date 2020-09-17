var arr = [1, 2, 3, "a", "b", "c", NaN];

console.log(arr.includes(3)); // true
console.log(arr.includes(NaN)); // true
console.log(arr.includes(3, 4)); // false
