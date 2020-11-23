const Router = require('koa-router')
const jsonwebtoken = require('jsonwebtoken')

const router = new Router({ prefix: '/users' })
const { find, findById, delete: del, update, create, login } = require('../controllers/user')
const { secret } = require('../config')

const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace("Bearer ", '')
  try {
    const user = jsonwebtoken.verify(token, secret)
    ctx.state.user = user
  } catch (err) {
    ctx.throw(401, err.message)
  }
  await next()
}

router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', auth, update)
router.delete('/:id', auth, del)
// 用户登录
router.post('/login', login)

module.exports = router