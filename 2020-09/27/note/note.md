## 内容输出

通过 `{{}}` 我们可以很方便的中模板中输出数据，但是这种方式会有一个问题，当页面加载渲染比较慢的时候，页面中会出现 `{{}}` ，`vue` 提供了几个指令来解决这个问题

> 指令中的表达式不需要使用 `{{}}`

### v-text

```html
<p v-text="title"></p>
```

> 弊端：`v-text` 会填充整个 `innerHTML`

### v-cloak

```html
<p v-cloak>{{title}}</p>
```

需要配合 <u>css</u> 进行处理

```css
<style>
[v-cloak] {
  display: none;
}
</style>
```

### v-html

为了防止 `xss` 攻击，默认情况下输出是不会作为 `html` 解析的，通过 `v-html` 可以让内容作为 `html` 进行解析

### v-once

只渲染元素和组件一次，后期的更新不再渲染

### v-pre

忽略这个元素和它子元素内容的编译

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        [v-cloak] {
            display: none;
        }
    </style>
</head>

<body>

    <div id="app">
        <!-- v-text指令会将内部全部inner HTML替换 -->
        <p v-text='title'>你好</p>

        <!-- 会输出文本和变量的值 -->
        <p v-cloak>你好，{{title}}</p>

        <!-- 会将content变量作为html输出 -->
        <p v-html='content'></p>

        <!-- 忽略语法，直接输出{{title}} -->
        <p v-pre>{{title}}</p>
    </div>

    <script src="./js/vue.js"></script>
    <script>

        /**
         * 指令
         *  - 值是表达式模式
         *  - 不支持 {{}} 语法
         *
         * v-if 与 v-show 的区别
         *      v-if：值为true的时候渲染标签，false删除（不渲染）标签
         *      v-show：渲染结构，但是根据值来隐藏和显示标签
         * 使用v-if还是v-show：该结构是否经常变化
         *
         */
        let app = new Vue({
            el: '#app',
            data: {
                title: '小康',
                content: '<h1>小康</h1>'
            }
        });
    </script>
</body>

</html>
```

![image-20200927194247024](https://files.alexhchu.com/2020/09/27/d892381399c6a.png)

## 逻辑处理

### v-show与v-if

`v-show`根据表达式的值（布尔值），切换元素的显示与隐藏（display 属性）

> 适用于状态切换比较频繁的情况

`v-if`根据表达式的值（布尔值），创建或销毁元素

> 适用于状态切换不频繁的情况

当逻辑表达式为false

![image-20200927195010721](https://files.alexhchu.com/2020/09/27/ae4c7b6d78fa8.png)

逻辑表达式为true时

![image-20200927195652604](https://files.alexhchu.com/2020/09/27/286e28ab1f72b.png)

### v-else / v-else-if

与 `v-else` 配合

## 循环与列表

### v-for

根据数据循环渲染 `v-for` 指令所在的元素及其子元素

可以循环的数据：Array | Object | number | string | Iterable (2.6 新增)

```html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>
```

> <u>v-for</u> 中也可以使用 <u>of</u> 语法，在 <u>vue</u> 中两者没有什么区别

```javascript
let app = new Vue({
    data: {
        users: [
            { id: 1, username: 'zmouse' },
            { id: 2, username: 'mt' },
            { id: 3, username: 'hai' }
        ]
    },
});
app.$mount('#app');
```

```html
<ul>
    <!-- for in 与 for of没有区别 -->
    <li v-for="(user,index) of users">
        <input type="checkbox"> {{index}} - {{user.username}}
    </li>
</ul>

<ul>
    <li v-for="i of 10">
        {{i}}
    </li>
</ul>
```

![image-20200927201821367](https://files.alexhchu.com/2020/09/27/9dd3f368216d3.png)

### :key

默认情况下，在渲染 `DOM` 过程中使用 <u>原地复用</u> ，这样一般情况下会比较高效，但是对于循环列表，特别是依赖某种状态的列表，会有一些问题，我们可以通过 `:key` 属性，来给每个循环节点添加一个标识。

> 虚拟dom为了节约性能，因此只会变化需要变化的地方。也就是说如果数据没有发生变化，那么DOM不会被重新渲染。

```html
<ul>
    <!-- for in 与 for of没有区别 -->
    <li v-for="(user,index) of users" :key="user.id">
        <input type="checkbox"> {{index}} - {{user.username}}
    </li>
</ul>
```

## 属性绑定

### v-bind

绑定数据（表达式）到指定的属性上，`<div v-bind:参数="值/表达式"></div>`，这里的参数就是指定的属性名称

```html
<div id="app">
    <p v-bind:id='id'></p>
    <p v-bind:id='"id"'></p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            id: 'test'
        }
    })
</script>
```

![image-20200927210741884](https://files.alexhchu.com/2020/09/27/ea4c6a60e5232.png)

#### 缩写

有的一些常用指令会有对应的缩写，`v-bind` 对应的缩写为：`:`

```html
<p :id='id'></p>
```



### 样式

针对样式属性，`v-bind` 值有一些特殊的写法

#### style

原生普通写法

```html
<div style="width: 100px; height: 100px; background: red"></div>
```

**v-bind 写法**

```html
<div :style="'width: 100px; height: 100px; background: red'"></div>
```

**对象写法**

```html
<div :style="style1"></div>

...
<script>
new Vue({
	el: '#app',
	data: {
		style1: {
      width: '100px',
      height: '100px',
      background: 'green'
    }
	}
});
</script>
```

**数组写法**

```html
<div :style="[style1, style2]"></div>

...
<script>
new Vue({
	el: '#app',
	data: {
		style1: {
      width: '100px',
      height: '100px',
      background: 'green'
    }
	},
  style2: {
    border: '1px solid black'
  }
});
</script>
```

![image-20200927210917692](https://files.alexhchu.com/2020/09/27/e4946bda8a047.png)

#### class

**原生普通写法**

```html
<div class="box1 box2"></div>
```

**v-bind 写法**

```html
<div :class="'box1 box2'"></div>
```

**数组写法**

```html
<div :class="['box1', 'box2']"></div>
```

**对象写法**

```html
<p :class="{'test1':flag}">xiaokang.me</p>

<script>
    let app = new Vue({
        data: {
            flag: true,
        }
    });
    app.$mount('#app');

</script>
```

![image-20200927211218924](https://files.alexhchu.com/2020/09/27/3c1fdbf0e64f5.png)

使用对象写法，可以根据值（boolean）动态添加对应的 <u>class</u>，如上述代码，会根据变量`flag`的值动态判断是否添加这个class。

## 双向数据流

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>

<body>

    <div id="app">
        <input type="text" v-model='text'>
    </div>

    <script src="./js/vue.js"></script>
    <script>

        // 模板 => vdom => dom

        let app = new Vue({
            data: {
                text: '文本'

            }
        });
        app.$mount('#app');

    </script>
</body>

</html>
```

当数据`text`更新时，也会更新试图。更新试图时，数据也会更新。

![0229caa6-1200-4bda-adcf-077d365295a8](https://files.alexhchu.com/2020/09/27/36cef1ec7d2c6.gif)

