const fs = require("fs");
// 读文件
function readFile() {
  return new Promise((resolve, reject) => {
    // console.log(__dirname);
    fs.readFile(__dirname + "/1.txt", "utf-8", (err, data) => {
      if (!err) {
        resolve(data);
      }
    });
  });
}

readFile().then((data) => {
  // data为文件内容
  console.log(data);
});
