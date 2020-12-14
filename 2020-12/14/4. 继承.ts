class User1 {
  postArticle(title: string, content: string) {
    console.log(title, content)
  }
  constructor(public id: number, public username: string) {}
}

class Vip extends User1 {
  constructor(id: number, username: string, source: number) {
    // 手动调用父类构造函数
    super(id, username)
    console.log('子类构造函数')
  }
}

// const user = new User(1, '小康')
// user.postArticle('title', 'content')
