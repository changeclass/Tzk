const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')

const app = new Koa()
const routing = require('./routes/index')
// 通过配置文件导入链接字符串
const { connectionStr } = require('./config')
mongoose.connect(connectionStr, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log('链接成功了');
})

// 默认配置
app.use(error({
  postFormat: (e, { staack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { staack, ...rest }
}))


app.use(bodyparser())
app.use(parameter(app))
routing(app)
app.listen(3000, () => {
  console.log("程序启动了!");
})