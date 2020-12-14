interface Point {
  x: number
  y: number
  // 加问好表示类型是可选的
  color?: string
  // 只读属性使用 readonly 修饰
  readonly info: string
}

let p1: Point = {
  x: 100,
  y: 100,
  info: '这是一个只读属性，不能被修改'
}
// p1.info = '1'
