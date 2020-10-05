---
title: 4. 数据存储
katex: false
tags:
  - NodeJs
  - 博客开发
categories:
  - NodeJs开发
date: 2020-10-05 09:44:25
---

代码地址：https://github.com/changeclass/Node_Blog.git

## 操作数据库

### 创建

创建数据库为了方便操作，我们使用可视化工具进行操作。可视化工具使用`Navicat Premium`。

1. 鼠标右键选择新建数据库

   ![image-20201005103218959](https://files.alexhchu.com/2020/10/05/f572f296749d5.png)

2. 数据库名为`myblog`其他默认即可。

3. 接下来开始建表。

   - users表

     ![image-20201005104149144](https://files.alexhchu.com/2020/10/05/2d4d0b3a6c1d7.png)

   - blogs表

     ![image-20201005104546150](https://files.alexhchu.com/2020/10/05/a4510e12c332f.png)

   

在使用数据库操作时，首先要选择数据库即`use 数据库名`。例如我们的数据库叫`myblog`，那么输入的命令即

```mysql
use myblog
```

### 增

```mysql
insert into users (username,`password`,realname) values("张三","123","张三");
```

1. 对`password`使用反引号的目的是：因为password是关键字，如果不加反引号，则会当作系统关键字处理。

2. 语法

   ```mysql
   insert into users (键1,键2,...) values(值1,值2,...);
   ```

![image-20201005105117464](https://files.alexhchu.com/2020/10/05/fdbf4468b67e7.png)

### 改

1. 条件修改

   ```mysql
   update users set realname='李四2' where username='lisi';
   ```

   > 如果遇到安全问题，那么可尝试设置安全模式。`SET SQL_SAFE_UPDATES=0;`
   >
   > 如果不添加后边的条件，那么会修改全部记录

### 删

1. 条件删除

   ```mysql
   delete from users where username='lisi';
   ```

   与修改类似，如果不添加条件，那么会删除整个表。

> 出于数据的宝贵，建议不要真的删除数据，而是使用一个标识表示数据是否生效。当删除时实际执行的是更新操作。

### 查

1. 标准查询

   ```mysql
   select * from users where username='zhangsan' and `password`='123';
   ```

   其语法如下：

   ```mysql
   select 键1,键2, from 表 where 条件1 and 条件2;
   ```

   如果全部键则可以用`*`代替。where后接查询条件，and表示并，or表示或。



2. 模糊查询使用like关键字。

   ```mysql
   select * from users where password like '%1%';
   ```

   ![image-20201005105715801](https://files.alexhchu.com/2020/10/05/ca09920b68f6c.png)

   表示查询字段中包含1的记录。

3. 排序

   排序使用关键字`order by`。默认为升序，`desc`表示降序

   ```mysql
   select * from users where password like '%1%' order by id desc;
   ```

   ![image-20201005110142564](https://files.alexhchu.com/2020/10/05/93373f83b76cc.png)

## 通过NodeJs操作MySQL——基础

```javascript
const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
    host:'localhost', // 主机 本地可使用localhost
    user:'root', // 数据库用户名
    password:'root', // 数据库用户的密码
    port:'3306', // 数据库端口号，默认3306
    database:'myblog' // 需要连接的数据库
})
// 开始连接
con.connect()
// 定义查询语句
const sql = 'select * from users;'
// 创建查询对象
con.query(sql,(err,result)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(result)
    // 返回一个列表，其元素是RowDataPacket对象
})
// 关闭连接
con.end()
```

1. 安装并导入`mysql`对象

2. 创建连接对象

   ```javascript
   const con = mysql.createConnection({
       host:'localhost', // 主机 本地可使用localhost
       user:'root', // 数据库用户名
       password:'root', // 数据库用户的密码
       port:'3306', // 数据库端口号，默认3306
       database:'myblog' // 需要连接的数据库
   })
   ```

3. 连接并定义sql语句

   ```javascript
   // 开始连接
   con.connect()
   // 定义查询语句
   const sql = 'select * from users;'
   ```

4. 开始查询

   ```javascript
   // 创建查询对象
   con.query(sql,(err,result)=>{
       if(err){
           console.error(err)
           return
       }
       console.log(result)
       // 返回一个列表，其元素是RowDataPacket对象
   })
   ```

5. 关闭连接

   ```javascript
   // 关闭连接
   con.end()
   ```

### 查询

当使用查询语句时，返回结果是一个列表，其元素是RowDataPacket对象。

![image-20201005162853783](https://7.dusays.com/2020/10/05/51f03eb5e2135.png)

### 修改

当修改时也返回一个对象，通过`changedRows`可以判断修改成功的行数。

![image-20201005163136924](https://7.dusays.com/2020/10/05/8da46503b9c60.png)

### 新增

与修改返回的类似。

![image-20201005164916113](https://7.dusays.com/2020/10/05/fec8925de4a9b.png)

## NodeJs连接MySQL做成工具

封装成工具的原因很简单，为了更简单的使用查询语句。当查询时，只需要调用一个方法即可完成。而不需要每次查询都需要建立连接。

为了区分生成环境和开发环境，我们需要对两个环境配置不同的MySQL连接配置。

在src目录下新建一个文件夹写入`db.js`用于定义不同环境下的MySQL配置。

```javascript
const env = process.env.NODE_ENV // 环境信息

let MYSQL_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost', // 主机 本地可使用localhost
        user: 'root', // 数据库用户名
        password: 'root', // 数据库用户的密码
        port: '3306', // 数据库端口号，默认3306
        database: 'myblog' // 需要连接的数据库
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost', // 主机 本地可使用localhost
        user: 'root', // 数据库用户名
        password: 'root', // 数据库用户的密码
        port: '3306', // 数据库端口号，默认3306
        database: 'myblog' // 需要连接的数据库
    }
}
module.exports = {MYSQL_CONF}
```

> 由于测试，所以开发环境与生产环境的配置是一样的。

接下来只需要创建连接时使用`MYSQL_CONF`即可。

同样的在src目录下创建一个db的文件夹，用于存放一些关于数据库操作的逻辑。

```javascript
const mysql = require('mysql')

const {MYSQL_CONF} = require('../conf/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)
// 开始连接
con.connect()

// 统一执行 sql 的函数
function exec(sql) {
    return new Promise(((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                console.error(err)
                reject(err)
                return
            }
            resolve(result)
            // 返回一个列表，其元素是RowDataPacket对象
        })
    }))

}

module.exports = {
    exec
}
```

> MySQL是异步操作，为了简化，将其封装成一个promise对象。

## 修改：获取文章列表

由于将获取数据的方法封装成了promise对象，那么在路由处获取数据时应修改为如下：

```javascript
const result = getList(author, keyword)
return result.then(listData => {
    return new SuccessModel(listData)
})
```

路由获取到数据后同样的返回一个promise对象，所以`app.js`处也需要修改。

```javascript
// 处理Blog路由
const blogResult = handleBlogRouter(req, res)
if (blogResult) {
    blogResult.then(blogData => {
        res.end(JSON.stringify(blogData))
    })
    return
}
```

![image-20201005182158046](https://7.dusays.com/2020/10/05/c7afbc10d1fbf.png)

![image-20201005182124077](https://7.dusays.com/2020/10/05/e87b52032a0f8.png)

## 修改：获取博客详情与新建博客

获取博客详情接口比较简单，

```javascript
// 博客详情
const getDetail = (id) => {
    const sql = `select * from blogs where id=${id};`
    return exec(sql).then(rows => {
        // 将数组变成对象格式即返回元素第一项
        return rows[0]
    })
}
```

路由处做出同样的处理

```javascript
if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id)
    return result.then(data => {
        return new SuccessModel(data)
    })
}
```

新建博客时，返回的数据为插入的ID，当插入数据后，MySQL会返回一个对象，其中`insertId`表示当前插入的ID，将其返回即可。

```javascript
const newBlog = (blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()
    const sql = `insert into blogs (title,content,createtime,author) values('${title}','${content}',${createTime},'${author}');`
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}
```

由于没有完成登陆接口，因此登陆后才会有的作者信息需要使用假数据。

```javascript
if (method === 'POST' && req.path === '/api/blog/new') {
    req.body.author = 'zhangsan' // 登陆后改为真实数据
    const result = newBlog(req.body)
    return result.then(data => {
        return new SuccessModel(data)
    })
}
```

## 修改：博客更新与删除

更新博客与新建类似，但只需要修改标题和内容即可。

```javascript
// 更新博客
const updataBlog = (id, blogData = {}) => {
    // id为更新博客的ID
    const title = blogData.title
    const content = blogData.content
    const sql = `update blogs set title='${title}',content='${content}' where id=${id};`
    return exec(sql).then(updateData=>{
        return updateData.affectedRows > 0;
    })
}
```

删除博客为真删除，而不是加删除（出于学习目的）。需要进行双重验证，防止删除他人的博文。

```javascript
// 删除博客
const delBlog = (id, author) => {
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    // id 就是要删除博客的 ID
    return exec(sql).then(deleteData => {
        return deleteData.affectedRows > 0;
    })
}
```

路由处修改与上面的几种方法类似。

```javascript
// 更新一篇博客
if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updataBlog(id, req.body)
    return result.then(val => {
        if (val) {
            return new SuccessModel(val)
        } else {
            return new ErrorModel('更新博客失败')
        }
    })

}
// 删除一篇博客
if (method === 'POST' && req.path === '/api/blog/del') {
    const author = 'zhangsan'
    const result = delBlog(id, author)
    return result.then(val => {
        if (val) {
            return new SuccessModel()
        } else {
            return new ErrorModel("删除失败")
        }
    })
}
```

## 修改：登陆接口

登陆成功后返回其用户名与真实姓名，密码是不需要返回的。

````javascript
const {exec} = require('../db/mysql')
const loginCheck = (username,password)=>{
    const sql = `select username,realname from users where username='${username}' and password='${password}';`
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })
}
````

获取完数据后路由处也只需要简单的修改即可。

```javascript
// 登陆
if (method === 'POST' && req.path === '/api/user/login') {
    const {username, password} = req.body
    const result = loginCheck(username, password)
    return result.then(data => {
        if (data.username) {
            return new SuccessModel("登陆成功")
        } else {
            return new ErrorModel("登陆失败")
        }
    })
}
```

最后只需要将`app.js`处修改即可。

```javascript
// 处理User路由
const userResult = handleUserRouter(req, res)

if (userResult) {
    userResult.then(userData => {
        res.end(JSON.stringify(userData))
    })
    return
}
```

> 与Blog逻辑相似。