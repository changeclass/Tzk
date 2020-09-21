## 项目说明

一个基于Gitee的“说说”，通过在gitee仓库中的issue进行说说的展示。项目灵感来自于：[微博](https://tomotoes.com/blog/weibo/)

![image-20200921161543706](https://files.alexhchu.com/2020/09/21/59c7e63d3e50c.png)

## 开坑记录

> 项目最早写于2020年8月9日，但当时的做法是通过外部载入各种依赖（JQuery、marked等）进行的，虽然中间还有一次试图将其并入js内部，但采用的方式仅仅是通过jQuery的getScript方式，由于同时间所用Hexo博客主题作者更新了pjax，导致出现了一些出人意料地错误。直到9月20日，最终决定通过webpack打包，将其放在一起并放弃jQuery（为了减少体积）。

### 基本架构

为了方便使用，采用了类似jQuery的写法。

```javascript
// 导入代码高亮模块
const hljs = require("./js/highlight.min");
// // 导入marked解析模块
const marked = require("./js/marked.min");
(function (window, undefiend) {
    let Speak = function (obj) {
        // 传入一个对象
        return new Speak.prototype.init(obj);
    };
    Speak.prototype = {
        constructor: Speak,
        init: function (obj) {
            for (let i in obj) {
                this[i] = obj[i];
            }
            // 调用初始化方法
            return this;
        },
    };
    Speak.extend = Speak.prototype.extend = function (obj) {
        for (var key in obj) {
            this[key] = obj[key];
        }
    };
    // 插入元素方法
    Speak.extend({
    });

    // 对象方法
    Speak.prototype.extend({
        s: 1,
    });

    Speak.prototype.init.prototype = Speak.prototype;

    window.Speak = Speak;
})(window);

```

其好处就是在使用时只需要实例化Speak对象即可完成一切。

### 第一个问题：原生JS发送异步请求

由于一开始的写法是获取与创建是分开写的，即获取后返回一个promise对象，通过then方法在将获取到的数据进行创建（渲染）。因此放弃jQuery的Ajax方法后也要返回一个Promise对象，这样才能以最小的成本兼容以前的写法。

> 参数`_this`调用时传入this

````javascript
getSpeak: function (_this) {
    return new Promise((resolve, reject) => {
        let url =
            "https://gitee.com/api/v5/repos/" +
            _this.owner +
            "/" +
            _this.repo +
            "/issues?state=open&sort=created&direction=desc&page=" +
            _this.page +
            "&per_page=" +
            _this.per_page +
            "&creator=" +
            _this.owner;
        // 创建核心对象
        let xhr = new XMLHttpRequest();
        // 发送请求
        xhr.open("get", url);
        // 监听请求
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                // 如果成功则执行
                if (/^(2|3)\d{2}$/.test(xhr.status)) {
                    let date = xhr.responseText;
                    _this.text = [];
                    _this.total_count = xhr.getResponseHeader("total_count");
                    _this.total_page = Math.ceil(_this.total_count / _this.per_page);
                    if (date) {
                        date = JSON.parse(date);
                        for (let i in date) {
                            var temp = {};
                            temp.comments = date[i]["comments"];
                            temp.body = Speak.getBody(date[i]["body"]);
                            temp.labels = Speak.getLabels(_this, date[i]["labels"]);
                            temp.created_at = Speak.getTime(date[i]["created_at"]);
                            temp.html_url = date[i]["html_url"];
                            _this.text.push(temp);
                        }
                    }
                    resolve(date, xhr);
                    return;
                }
                // 失败执行
                reject(xhr.statusText, xhr);
            }
        };
        // 发送请求数据
        xhr.send(null);
    });
},
````

调用API后，将返回的数据再次进行提取与处理即（`getBody`、`getLabels`等方法），并将结果放入一个临时的对象，将其对象添加到数组。等渲染时遍历此数组即可。因此这个数组大概是这样的：

```javascript
[
    {
        // 内容
        comments:'内容',
        labels:'标签',
        created_at:'创建时间',
        html_url:'当前issue的地址'
    },
    {
        // 内容
        comments:'内容',
        labels:'标签',
        created_at:'创建时间',
        html_url:'当前issue的地址'
    },
]
```

### 第二个问题：创建元素

jQuery的工厂函数过于好用，但为了减少体积，不得不抛弃。因此便遇到了另一个问题，dom元素的操作。

1. 由于gitee的图片是带有防盗链的，因此需要在头部插入一个标签meta标签，表示`no-referrer`才可以正常使用其防盗链图片。

   ```javascript
   noRefer: function () {
       let element = document.createElement("meta");
       element.name = "referrer";
       element.content = "no-referrer";
       document.head.appendChild(element);
   },
   ```

2. 外部CSS的嵌入

   由于使用了打包工具，只需要通过`require`进行加载即可。

   ```javascript
   loadingCss: function () {
       let element = document.createElement("style");
       element.innerHTML = require("./css/loading.css")["default"][0][1];
       document.head.appendChild(element);
   },
   speakCss: function () {
       let element = document.createElement("style");
       element.innerHTML = require("./css/Speak.css")["default"][0][1];
       document.head.appendChild(element);
   },
   ```

3. 按钮的插入

   起初并不打算插入翻页按钮，因为嵌入到博客后，每个博客都会有自己的风格及按钮样式，但又为了初始化及使用方便，因此还是决定添加按钮和页码显示的label。

   ```javascript
   createBtn: function (_this){
       var container = document.getElementsByClassName('is-container')[0]
       container.insertAdjacentHTML('afterend',_this.prevBtn)
       container.insertAdjacentHTML('afterend',_this.nextBtn)
       container.insertAdjacentHTML('afterend',_this.pageLabel)
   }
   ```

   关于`insertAdjacentHTML`方法可参考：[insertAdjacentHTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML)

   

### 第三个问题：代码高亮插件highlight过大

`highlight.min.js`文件已经100kb大小了，加上`marked.min.js`34kb，导致最后生成的文件大小150kb+。

> 不过没办法，目前无解。

## 如何使用

使用很简单，只需要一个class为`container`的容器和一个实例化的Speak对象即可。

> 由于基于某个主题开发，部分样式可能存在细微差别。

```html
<div class="is-container"></div>
<script src="main.js"></script>
<script>
    new Speak(
        {
            nickname: '🦄Dreamy.TZK',
            per_page: 5,
            owner: "antmoe",
            repo: "xiaokang.me",
            defaultLabelName: "Default",
            defaultLabelColor: "#ffc107",
            // highlight样式
            highlightcss:
            "https://cdn.bootcdn.net/ajax/libs/highlight.js/10.1.1/styles/monokai-sublime.min.css",
            emojiLabel:
            {
                Coder: "🎯",
                日常: "💬",
                Whoiam: '😶',
                想法: "💫",
                TODO: "🚧",
                随便说说: "🎈",
                测试: '👻',
            },
            prevBtn:'<a class="btn-beautify button--animated left larger prev red" href="#" title="上一页" style="display:none;float:left" data-pjax-state=""><i class="far fa-hand-point-left fa-fw"></i> 上一页</a>',
            nextBtn:'<a class="btn-beautify button--animated larger next red" href="#" title="下一页" style="float: right; display: block;" data-pjax-state=""><i class="far fa-hand-point-right fa-fw"></i> 下一页</a>',
        });
</script>
```

DEMO：https://demo121.now.sh/