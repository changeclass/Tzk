const Koa = require('koa')
const koaBody = require('koa-body')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')
const path = require('path')
const koaStatic = require('koa-static')
const app = new Koa()
const routing = require('./routes/index')
// 通过配置文件导入链接字符串
const { connectionStr } = require('./config')
mongoose.connect(connectionStr, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log('链接成功了');
})
// 静态文件
app.use(koaStatic(path.join(__dirname, 'public')))

// 默认配置
app.use(error({
  postFormat: (e, { staack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { staack, ...rest }
}))


app.use(koaBody({
  // 启用文件传输
  multipart: true,
  formidable: {
    // 上传目录
    uploadDir: path.join(__dirname, '/public/uploads'),
    // 保留扩展名
    keepExtensions: true
  }
}))

app.use(parameter(app))
routing(app)
app.listen(3000, () => {
  console.log("程序启动了!");
})