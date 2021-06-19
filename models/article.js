/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 文章模型
 */

const moment = require('moment')
const {Category} = require("./category");

const {Model,Sequelize,DataTypes} = require("sequelize");
const {db} = require('./db')

class Article extends Model{}

// 模型
Article.init({
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,  // 主键
        autoIncrement:true // 自增长
    },
    title:{
        type:Sequelize.STRING(100),
        allowNull:false,
        comment:'文章标题'
    },
    author:{ //
        type:Sequelize.STRING(30),
        allowNull:true,
        defaultValue:'Mental',
        comment:'文章作者'
    },
    content:{
        type:Sequelize.TEXT,
        allowNull:false,
        comment:'文章内容'
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '文章简介'
    },
    keyword: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0,
        comment: '文章关键字'
    },
    cover: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '文章封面'
    },
    browse: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '文章浏览次数'
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
    modelName: 'article',
    tableName: 'article'
})

/**
 * 关联模型
 * */


// 文章关联分类
Category.hasMany(Article, {
    foreignKey: 'category_id', sourceKey: 'id', as: 'article'
})
Article.belongsTo(Category, {
    foreignKey: 'category_id', targetKey: 'id', as: 'category'
})

module.exports={
    Article
}
