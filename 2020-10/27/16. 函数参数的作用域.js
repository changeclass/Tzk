let v = 100;
function fn(arg = v) {
  let v = 1000;
  console.log(arg);
}

fn(); // 100
