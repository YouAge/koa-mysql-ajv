/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 数据库 操作
 */
const bcrypt = require('bcryptjs')

const {AuthFailed} = require("../../cores/http-exception");
const {Admin} = require("../../models/admin");

class AdminCurds{

     async findEmail(email){
        return  await Admin.findOne({
            where:{
                email,
                deleted_at:null
            }
        })
    }

    /**
     * 添加数据
     * */
    static async create(params){
        const {email,password,username,action} = params
        const hasAdmin = await AdminCurds.prototype.findEmail(email)
        if(hasAdmin){
            throw new AuthFailed('账号已存在')
        }
        const admin = new Admin()
        admin.username =username
        admin.email = email
        admin.password = password
        admin.action = action
        await admin.save()
        return {
            email:admin.email,
            username:admin.username
        }
    }

    /**
     * @ 验证账号密码
     * */
    static async verify({email,password}){
        const admin =  await AdminCurds.prototype.findEmail(email)
        if(!admin){
            throw new AuthFailed('请求输入正确的账号或者密码')
        }

        // 验证密码
        const correct = bcrypt.compareSync(password,admin.password)
        if(!correct) throw new AuthFailed('请求输入正确的账号或者密码')
        return admin
     }
}


const adminCurds = new AdminCurds()
module.exports = {
    AdminCurds,
    adminCurds
}
