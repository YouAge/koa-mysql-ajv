/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const Ajv = require('ajv')
const addFormats = require("ajv-formats")
// const localize = require("ajv-i18n")
const {ParameterException} = require("./http-exception");
const ajv = new Ajv({allErrors: true,useDefaults:true})
addFormats(ajv)
require("ajv-errors")(ajv /*, {singleError: true} */) //自定义错误

const  ajvValid = (data,schema)=>{
    const validate = ajv.compile(schema)
    const valid = validate(data)
    if(!valid) {
        // localize.zh(validate.errors) // 自定义错误
        //  return 'fds'
        // console.log(validate.errors)
        throw new ParameterException(validate.errors)
    }
}


/**
 * 自定义验证,类型
 * */
ajv.addFormat("byte", (value)=>{

    return true
})

/**
 * @ 自定义关键字 验证
 * @ 通过的校验类型，结合起来
 * */
ajv.addKeyword('free',{
    macro(){
        return {
            minLength:10
        }
    }

})



class AjvValidator{



}


module.exports ={
    ajvValid
}
