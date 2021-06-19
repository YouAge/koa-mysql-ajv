/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 中间件
 */
const jwtKoa  = require('koa-jwt');
const {secret} = require('../config')


/**
 * 自定义
 * @ 全局管控
 * */
const Auth =async (ctx,next)=>{
    // 过滤掉不需要的

    //验证 是否登入

}










module.exports = (app)=>{
    app.use(jwtKoa({secret}).unless({
        // 设置login，register接口。不需要认证访问
        path:[
            // /^\/api\/v1\/login/,
            // /^\/api\/register/,
            // /^\/login/,
            /^((?!\/api).)*$/   // 设置除了私有接口外的其它资源，可以不需要认证访问
        ]
    }))

}

