/**
 * @author: 百米八秒的Rapper
 * @date: 2022-11-30 21:48:04
 * @fileName : request  description: 【  】
 **/
import axios from 'axios'
//创建axios实例
const instance = axios.create({
    baseURL:'http://geek.itheima.net/v1_0/',
    timeout:5000
})
//请求拦截器
instance.interceptors.request.use(
    function (config){
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)
//添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        return response.data;
    }
)
export default instance;