let set = new Set([
  1,
  2,
  3,
  4,
  5,
  2,
  NaN,
  NaN,
  undefined,
  undefined,
  null,
  null,
]);
console.log(set); // Set { 1, 2, 3, 4, 5 }

let set1 = new Set([[], [], {}, {}]);
console.log(set1); //Set { [], [], {}, {} }
