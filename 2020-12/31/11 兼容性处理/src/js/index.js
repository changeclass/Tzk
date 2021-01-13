const add = (x, y) => {
  return x + y
}

const promise = (resolve, reject) => {
  setTimeout(() => {
    console.log(111)
    resolve(111)
  }, 1000)
}
console.log(promise)
// 下一行eslint所有规则都失效（下一行不进行eslint检查）
// eslint-disable-next-line
console.log(add(2, 5))
