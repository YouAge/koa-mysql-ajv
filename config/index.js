/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 配置文件
 */



module.exports = {
    secret:'sd4.0)($256f1@。jabilsdjf-a.sfa465a4g43', // jwt 密钥
    database:{
        host:'localhost',
        port: '5432',
        user:'postgres',
        password:'123456',
        dbName:'free-blog'
    },
    expTime : 60*60*3  //||60*60*24 *3  //token  过期时间 3天
}
