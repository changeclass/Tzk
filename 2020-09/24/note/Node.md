## PUG

- 基本语法
- 属性
- 类名，id名
- 注释
- 某个标签内容添加内容
- 定义变量
- 变量
- 遍历
  - each
  - for
- case-when
- mixin

### 基本语法

PUG采用的是缩进格式。例如生成如图HTML结构，PUG的模板语法：

![image-20200924154122398](https://files.alexhchu.com/2020/09/24/a6e40ac80dfa1.png)

```pug
html(lang='en')
    head
        mete(charset='UTF-8')
    body
        h1 你好
```

> 缩进无所谓是tab还是空格，但需要统一，不可以混用。

从上面的代码和效果来看，通过`h1 你好`就可以进行创建一个`H1`标签。其他标签也是同理。常用的不同的标签有`script`和`style`。这两个标签需要添加一个`.`

```pug
html(lang='en')
    head
        mete(charset='UTF-8')
        style.
            h1 {
                color: red;
                font-size: 24px;
            }
    body
        h1 你好
        script.
            console.log('你好')
```

### 属性

添加属性方式很简单，只需要在标签后加一对括号，括号内写入属性即可。例如将H1添加一个类：

```javascript
html(lang='en')
    head
        mete(charset='UTF-8')
        style.
            .test {
                color: red;
                font-size: 24px;
            }
    body
        h1(class='test') 你好
        script.
            console.log('你好')
```

![image-20200924155407214](https://files.alexhchu.com/2020/09/24/86839a4aeb0b1.png)

### 添加类和ID

除了上述的通过括号写属性方式，添加ID与class也有一个简单的方式：

```pug
div.test
div#test
```

### 注释

注释分为pug模板注释，即pug里的注释，不会渲染到HTML。另一种注释为写入到HTML的注释。

1. PUG模板注释

   pug模板注释使用`//-`

   ```pug
   html(lang='en')
       head
           mete(charset='UTF-8')
           style.
               .test {
                   color: red;
                   font-size: 24px;
               }
       body
           h1(class='test') 你好
           //- dads
               asdasd
           script.
               console.log('你好')
   ```

   ![image-20200924155624120](https://files.alexhchu.com/2020/09/24/7146401f1a2f6.png)

2. 生成HTML的注释

   渲染到HTML的注释与JavaScript注释相似，`//`

   ```pug
   html(lang='en')
       head
           mete(charset='UTF-8')
           style.
               .test {
                   color: red;
                   font-size: 24px;
               }
       body
           h1(class='test') 你好
           //- dads
               asdasd
           // 这个注释会当作HTML的注释渲染
           script.
               console.log('你好')
   ```

   ![image-20200924155712461](https://files.alexhchu.com/2020/09/24/c08a6c48fbebe.png)

### 某个标签内容添加内容

即类似向某个div内添加内容。

```pug
html(lang='en')
    head
        mete(charset='UTF-8')
        style.
            .test {
                color: red;
                font-size: 24px;
            }
    body
        h1(class='test') 你好
        //- 添加类test
        div.test
            h1 div内的h1标签
        div#test
            h1 div内的h1标签
        //- dads
            asdasd
        // 这个注释会当作HTML的注释渲染
        script.
            console.log('你好')
```

![image-20200924160119054](https://files.alexhchu.com/2020/09/24/2e383c46aa774.png)

### 变量和case-when

pug模板本身可以定义变量，也可以接收服务器传来的变量。这里主要说说pug中定义变量及使用。

case-when类似于JavaScript中的switch。

```pug
html(lang='en')
    head
        mete(charset='UTF-8')
        style.
            .test {
                color: red;
                font-size: 24px;
            }
    body
        h1(class='test') 你好
        //- 添加类test
        div.test
            h1 div内的h1标签
        div#test
            h1 div内的h1标签
        - let test =Math.floor( Math.random()*10)
            case test
                    when 3
                        p p的值为#{test}
                    when 4
                        p p的值为#{test}
                    when 5
                        p p的值为#{test}
                    default
                        p p得值不是3 4 5

        script.
            console.log('你好')
```

![image-20200924162006371](https://files.alexhchu.com/2020/09/24/66acae30316df.png)

通过示例代码可以看到，在标签后使用变量需要用`#{}`这种符号括起来。但在属性里则不需要。

```pug
div(name=name)
```

如上表示将div的`name`属性设置为`name`变量的值。

### 遍历

条件判断很容易理解，即JavaScript`if else else if`，在pug中，这三个也是同样存在的。相同的，Pug 目前支持两种主要的迭代方式： `each` 和 `while`。

为了便于演示，将属于在服务器端进行发送，而不是在pug进行定义。

```javascript
const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");

let app = new Koa();

let router = new Router();

app.use(views(__dirname + "/views"), {
    map: {
        html: "pug",
    },
});

router.get("/", async (ctx) => {
    //   ctx.body = "hello";
    let data = [
        {
            name: "坤坤1号",
            age: 20,
            hobby: '唱歌'
        },
        {
            name: "坤坤2号",
            age: 21,
            hobby: 'rap'
        },
        {
            name: "坤坤3号",
            age: 23,
            hobby: '打篮球'
        },
    ]
    await ctx.render("index.pug", {
        data
    });
});

app.use(router.routes());
app.listen(3000);

```



1. each循环

   ```pug
   ul
   	each item,index in data
       	li 我的名字是#{item.name},我喜欢#{item.hobby}
   ```

   ![image-20200924164158884](https://files.alexhchu.com/2020/09/24/834a1c01a8c72.png)

2. while

   ```pug
   - var n = 0;
   ul
     while n < 4
       li= n++
   ```

   

### Mixin

混入是一种允许在 Pug 中重复使用一整个代码块的方法。类似于JavaScript的函数。

```javascript
mixin pet(name)
  li.pet= name
ul
  +pet('猫')
  +pet('狗')
  +pet('猪')
```

![image-20200924165419262](https://files.alexhchu.com/2020/09/24/d53e5c1c129f4.png)