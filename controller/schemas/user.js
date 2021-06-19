/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const userSchema = {
    type:'object',
    properties: {
        username: {type: "string",minLength:4,errorMessage:{
             type:'必须是字符串',
                minLength: '长度比较大于3'
            }},
        email: {type: "string",format:'email',  errorMessage: '邮箱格式不对'},
        password:{type:'string',default: 'free.2021',minLength:6},
        action: {type:"array", default: ["show"],}

    },
    required:['username','email','action','password']
}

const loginSchema = {
    type:'object',
    properties:{
        email:{type:'string'},
        password:{type:'string'},
    },
    required:['email','password']
}




module.exports ={
    userSchema,
    loginSchema
}
