const Router = require('koa-router')

const router = new Router({ prefix: '/users' })

const { find, findById, delete: del, update, create, login } = require('../controllers/user')


router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', update)
router.delete('/:id', del)
// 用户登录
router.post('/login', login)

module.exports = router