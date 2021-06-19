/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 评论
 */

const moment = require('moment')
const {Model,Sequelize} = require("sequelize");
const {sequelize} = require('./db')
class Comment extends Model{}

Comment.init({
    id:{
        type:Sequelize.INIT,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:Sequelize.STRING(100),
        allowNull:false,
        comment:'评论人的名字'
    },
    email:{
        type:Sequelize.STRING(100),
        allowNull:false,
        comment:'评论人邮箱'
    },
    content:{
        type:Sequelize.INIT,
        allowNull:false,
        comment:"评论内容"
    },
    target_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        comment:'评论的文章的id'
    },

    parent_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        defaultValue:0,
        comment:'评论的父级'
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD');
        }
    }

},{
    sequelize,
    modelName: 'comment',
    tableName: 'comment'
})

module.exports = {
    Comment
}
