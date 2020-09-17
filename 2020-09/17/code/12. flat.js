// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
console.log([2, 3, 4].flatMap((x) => [x, x * 2]));
// [2, 4, 3, 6, 4, 8]

// 该方法只能展开一维数组
console.log([2, 3, 4].flatMap((x) => [[x, x * 2]]));
// [ [ 2, 4 ], [ 3, 6 ], [ 4, 8 ] ]
