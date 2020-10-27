let set = new Set([1, 2, 3, 4, 5]);

// add(value)
var result = set.add(6);
console.log(set, result);

// delete(value) value是值 而不是索引值
var result1 = set.delete(1);
console.log(result1, set); // true Set { 2, 3, 4, 5, 6 }

// has(value) value是值 而不是索引值
var result2 = set.has(4);
console.log(result2); //true

// clear()
set.clear();
console.log(set); //Set {}
