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
