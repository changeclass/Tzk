/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-01-04 17:44:01
 * @LastEditTime: 2021-01-04 17:44:02
 * @LastEditors: 小康
 */
const arr = [1, 2, 3]
// map
const map = (array, fn) => {
  let results = []
  for (let value of array) {
    results.push(fn(value))
  }
  return results
}
const mapResult = map(arr, (x) => x * x)
console.log(mapResult)

// every
const every = (array, fn) => {
  let results = []
  for (let value of array) {
    if (fn(value)) {
      results.push(value)
    }
  }
  return results.length > 0 ? results : false
}
const everyResult = every(arr, (x) => x > 10)
console.log(everyResult)

// some
const some = (array, fn) => {
  for (let value of array) {
    if (fn(value)) {
      return true
    }
  }
  return false
}
const someResult = some(arr, (x) => x > 1)
console.log(someResult)

// reduce
const reduce = (array, fn) => {
  let accumlator = 0 // 累加器
  for (const value of array) {
    accumlator = fn(accumlator, value)
  }
  return [accumlator]
}
const reduceResult = reduce(arr, (acc, value) => acc + value)
console.log(reduceResult)

// find
const find = (array, fn) => {
  for (const value of array) {
    if (fn(value)) {
      return value
    }
  }
  return undefined
}
const findResult = find(arr, (x) => x > 1)
console.log(findResult)
