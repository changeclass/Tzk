// let str1 = 'xiaokang.me'
// // 如果是 let ，把 'string' 作为值
// let t = typeof str1
// // 如果是 type，把 'string' 作为类型
// type myType = typeof str1
// let str2: myType = '小康'
// let str3: typeof str1 = '小康'

// let p1 = {
//   name: 'xiaokang',
//   age: 18
// }
// // type PT = typeof p1

// function getPersonVal(k: keyof typeof p1) {
//   return p1[k]
// }

interface Personal {
  name: string
  age: number
}

type personKeys = keyof Personal

type newPersonal = {
  [k in personKeys]: string
}
