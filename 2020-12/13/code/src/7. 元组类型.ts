// 元组类型中初始化时，值与类型必须一一匹配
let data1: [string, number] = ['小康', 18]
// 但是元组类型可以添加值，但只能添加定义中的类型
data1.push(1)
data1.push('小康1')
