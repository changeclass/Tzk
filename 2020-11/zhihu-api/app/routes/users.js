const Router = require('koa-router')
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt')
const router = new Router({ prefix: '/users' })
const { find, findById, delete: del,
  update, create, login, checkOwner,
  listFollowing, follow, unfollow,
  listFollower, checkUserExist } = require('../controllers/user')
const { secret } = require('../config')

const auth = jwt({ secret })

router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', auth, checkOwner, update)
router.delete('/:id', auth, checkOwner, del)
// 用户登录
router.post('/login', login)
// 关注的人
router.get('/:id/following', listFollowing)
// 粉丝列表
router.get('/:id/follower', listFollower)
// 关注
router.put('/following/:id', auth, checkUserExist, follow)
// 取消关注
router.delete('/following/:id', auth, checkUserExist, unfollow)
module.exports = router