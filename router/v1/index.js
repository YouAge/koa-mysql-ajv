/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: v1 路径的入口
 */




// const require_module = require.context('./')

// const {wrappingKoaRouter} = require ("swagger-decorator")

const Router = require("koa-router")

const fs = require('fs')
const router = new Router()
// wrappingKoaRouter(router,'localhost:8080','/doc',{
//     title:'api 接口文档',
//     version:'0.0.1',
//     description:'koa2 接口文档'
// })


fs.readdirSync(__dirname).forEach(item=>{
    if (item.includes('index') || !item.includes('.js')) return
    const route = require(`./${item}`)
    const name = item.split('.js')[0]
    // app.use(route.routes(`/v1/${name}`)).use(route.allowedMethods())
    router.use(`/api/v1/${name}`,route.routes(),route.allowedMethods())
})


router.get('/',async (ctx,next)=>{
    ctx.body = {
        code:200,
        data:'koa 项目已启动成功'
    }
})

module.exports = router



