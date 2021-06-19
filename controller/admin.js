/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 页面逻辑处理
 */


const {JwtKeyGen} = require("../cores/jwt-token");
const {AdminCurds} = require("./curds/admin");
const {ajvValid} = require("../cores/ajvValidator");

const {userSchema,loginSchema} = require('./schemas/user')

const {Resolve} = require('../cores/resolve')

const resolve = new Resolve()


/**
 * @ 登入 返回  token
 * */
exports.login= async (ctx, next)=>{
    const v = ctx.request.body || ctx.request.params  || {}
    ajvValid(v,loginSchema)
    const user = await AdminCurds.verify(v)
    const token = await JwtKeyGen.generateToken({id:user.id,email:user.email})
    ctx.body = resolve.success(token)

}


/**
 * 注册
 * */
exports.register = async (ctx,next)=>{
    const v = ctx.request.body || ctx.request.params  || {}
    console.log(ctx.request.body)
    ajvValid(v,userSchema)
    // 创建管理员
    const admin = await AdminCurds.create(v)
    console.log(admin)
    // 返回结果
    ctx.body = resolve.success(admin)
}


/**
 * 获取用户信息
 * */
exports.authInfo = async (ctx,next)=>{
    // 获取用户ID
    const id = ctx.auth.uid
    // 查询用户信息
    let userInfo = await AdminCurds
}
