/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-01-05 20:41:50
 * @LastEditTime: 2021-01-05 20:41:50
 * @LastEditors: 小康
 */
// world wild web ==> W. W. W
const fp = require('lodash/fp')

// const firstLetterToUpper = fp.flowRight(
//   fp.join('. '),
//   fp.map(fp.first),
//   fp.map(fp.toUpper),
//   fp.split(' ')
// )

const firstLetterToUpper = fp.flowRight(
  fp.join('. '),
  fp.map(fp.flowRight(fp.first, fp.toUpper)),
  fp.split(' ')
)
console.log(firstLetterToUpper('world wild web'))
