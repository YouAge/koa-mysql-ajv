/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: token
 */

const jwt = require('jsonwebtoken')
const {secret,expTime} = require('../config')
/**
 * @ 生成token
 * */

class JwtKeyGen{

    /**
     * 生成token
     * */
   static generateToken(data){
        return jwt.sign(data,secret,{expiresIn:expTime})
    }
    /**
     * @ 验证token
     * */


}


module.exports = {
    JwtKeyGen
}
