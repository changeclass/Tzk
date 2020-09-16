// 参数为数值
Math.sign(-5); // -1
Math.sign(5); // +1
Math.sign(0); // +0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
// 参数为非数值
Math.sign(""); // 0
Math.sign(true); // +1
Math.sign(false); // 0
Math.sign(null); // 0
Math.sign("9"); // +1
Math.sign("foo"); // NaN
Math.sign(); // NaN
Math.sign(undefined); // NaN
