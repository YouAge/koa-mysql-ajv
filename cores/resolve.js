/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 接口定义
 */


class Resolve{

    success(data={},msg='success',code=200,errorCode=0){
        return {
            data,
            msg,
            code,
            errorCode
        }
    }

    error(data={},msg='error',code=201,errorCode=0){
        return {
            data,
            msg,
            code,
            errorCode
        }
    }

}

module.exports= {
    Resolve
}
