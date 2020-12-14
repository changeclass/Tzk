// let obj: Object = {}

// 数组
let arr: Array<number> = [1, 2, 3]
// 时间
let d1: Date = new Date()
// 对象
// let user: {
//   username: string
//   age: number
// } = {
//   username: 'aaa',
//   age: 23
// }

interface Person {
  username: string
  age: number
}
// let user: Person = {
//   username: '小康',
//   age: 18
// }
function login(options: Person) {}
login({
  username: '小康',
  age: 18
})
// class Person {
//   constructor(public username: string, public age: number) {}
// }

// let user: Person = new Person('小康', 18)
