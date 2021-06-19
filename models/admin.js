/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 管理员模型
 */

const moment = require('moment');
const bcrypt = require('bcryptjs')
const {Sequelize, Model} = require('sequelize')
const {db} = require('./db')

/**
 *  field:'super_id', 映射数据库字段名
 *  defaultValue：m
 * */

class Admin extends Model{
}

Admin.init({
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,  // 主键
        autoIncrement:true // 自增长
    },
    username:{
        type: Sequelize.STRING(64),
        allowNull:false,
        comment:"管理员昵称"
    },
    email:{
        type:Sequelize.STRING(128),
        unique:true,
        allowNull:false,
        comment:'邮箱'
    },
    password:{
        type:Sequelize.STRING,
        set(val) {
            // 加密
            const salt = bcrypt.genSaltSync(10);
            // 生成加密密码
            const psw = bcrypt.hashSync(val, salt);
            this.setDataValue("password", psw);
        },
        allowNull: false,
        comment: '管理员密码'
    },
    action:{
        type:Sequelize.STRING,
        allowNull:false,
        defaultValue:'show',
        comment:'按钮 操作权限，增删改差， add_del_edit_show',
        get(){
            return this.getDataValue('action').split('_')
        },
        set(value){
            if(Array.isArray(value)){
                value = value.join('_')
            }
        }
    },
    status:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: false,
        comment:'状态'
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD');
        }
    }

},{
    sequelize:db,
    // schema: 'blog', // 修改模式
    modelName:'admin',
    tableName: 'admin'
})

module.exports ={
    Admin
}
