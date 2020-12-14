function fn(a: string | number) {
  if (typeof a === 'string') {
    // 此时 a 变量就是 string类型
    a.substring(1)
  } else {
    // 这里就是当变量a为number类型时
    a.toFixed()
  }
}
