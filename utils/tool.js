/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */



exports.jolValid = async (ctx,next,data,joi)=>{
    try {
        await joi.validateAsync(data)
        console.log('dsf')
        next()
    }catch (e) {
        console.log(e.details)
        ctx.body = e.details
    }

}
