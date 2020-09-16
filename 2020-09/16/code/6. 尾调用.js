function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

var result = factorial(5, 1); // 120
console.log(result);
