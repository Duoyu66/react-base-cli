/**
 * @author: 百米八秒的Rapper
 * @date: 2022-12-01 15:03:43
 * @fileName : user  description: 【  】
 **/
import request from "@/utils/request";
//登录请求用于用户登录，mobile 手机号 code 验证码
export const login =(mobile,code)=>{
    return request({
        method:'POST',
        url:'/authorizations',
        data:{
            mobile,
            code
        }
    })
}