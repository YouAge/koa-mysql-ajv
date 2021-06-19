/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
const Router = require('koa-router')
const {login,register} = require("../../controller/admin");
const router = new Router()




router.post('/login',login)

router.post('/register',register)





module.exports = router
