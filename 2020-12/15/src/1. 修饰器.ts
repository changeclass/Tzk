// 定义方法装饰器
function log(target: Function, name: string, descriptor: PropertyDescriptor) {
  /**
   * target : 被装饰的方法所属的类
   * name : 当前被装饰方法的名称
   * descriptor : 描述符
   */
  // 将原始方法提取出来
  let fn = descriptor.value
  // 定义新的方法
  descriptor.value = function (a: number, b: number) {
    // 调用原来的方法
    const result = fn(a, b)
    // 增加新的方法
    console.log(`${a}+${b}=${result}`)
    // 将结果返回
    return result
  }
}

class M {
  // 调用装饰器
  @log
  static add(a: number, b: number) {
    return a + b
  }
}

let v1 = M.add(1, 2)
console.log(v1)
