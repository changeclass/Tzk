const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({ prefix: '/topics' })
const {
    find, findById, create, update,
    checkTopicExist, listFollowersTopic,
    listQuestions
} = require('../controller/topics')
const { secret } = require('../config')

const auth = jwt({ secret })

// 查询话题
router.get('/', find)
// 创建话题
router.post('/', auth, create)
// 查询某个话题
router.get('/:id', checkTopicExist, findById)
// 更新话题
router.patch('/:id', auth, checkTopicExist, update)

// 获得关注话题的人
router.get('/:id/followers', checkTopicExist, listFollowersTopic)
// 获得此话题下的问题
router.get('/:id/questions', checkTopicExist, listQuestions)
module.exports = router