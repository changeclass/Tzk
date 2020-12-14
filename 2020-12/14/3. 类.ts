// class User {
//   // 定义成员属性
//   id: number
//   username: string

//   // 定义成员方法
//   postArticle(title: string, content: string) {
//     console.log(title, content)
//   }

//   // 构造函数
//   constructor(id: number, username: string) {
//     // 构造函数的作用：创建类的函数，当类实例化时被调用
//     console.log('构造函数')
//     this.id = id
//     this.username = username
//   }
// }
class User {
  postArticle(title: string, content: string) {
    console.log(title, content)
  }
  constructor(public id: number, public username: string) {}
}

// const user = new User(1, '小康')
// user.postArticle('title', 'content')
