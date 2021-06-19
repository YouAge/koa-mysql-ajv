/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 启动入口
 */

const Koa = require('koa')
const requireDirectry = require("require-directory")
const koaBody = require('koa-body')
const router = require('./router/v1')
// const middleware = require('./middlewares')
const koaError = require("./middlewares/exception");
const cors = require('koa2-cors')

const RateLimit = require('koa2-ratelimit').RateLimit
const app = new Koa()
app.use(cors())
// 初始发

const limiter = RateLimit.middleware({
    interval: { min: 5 }, // 15 minutes = 15*60*1000
    max: 10, // limit each IP to 100 requests per interval
    message:'请求过于频繁'
});





class InitMar{
    static initCore(app){
        this.app = app
        this.initMiddleUser(app)
        this.initRouters(app)
    }

    // 初始发中间件
    static initMiddleUser(app){
        // middleware(app)
        app.use(limiter) // 添加接口的 频率限制
        app.use(koaBody({
            multipart: true,
            formidable: {
                maxFileSize: 50000 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
            }
        }));
        app.use(koaError)

    }

    // 初始化路由
    static initRouters(app){
        // 获取api
        app.use(router.routes()).use(router.allowedMethods()) // 注册
    }

}



InitMar.initCore(app)



// 监听端口
app.listen({
    host:'0.0.0.0',
    port:6452,
}, () => {
    console.log("服务器已启动，http://127.0.0.1:6452");
})
