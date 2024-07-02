import axios from "axios";
// ElementUI 单独引入
import {ElMessage} from "element-plus";
import cookie from './cookie'

// 创建实例
const service = axios.create({
    // baseURL: "/devApi",     // 请求地址
    baseURL: "",    // 请求地址
    timeout: 5000    // 超时
});
// console.log(process.env.VUE_APP_API)
// 拦截器
// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        if (cookie.getUserID()) {
            config.headers['BLOG_USER_ID'] = cookie.getUserID()
        }
        if (cookie.getSessionID()) {
            config.headers['BLOG_SESSION_ID'] = cookie.getSessionID()
        }

        return config;
    },
    function (error) {
        // 对请求错误做些什么
        console.log("service,error:", error);
        return Promise.reject(error);
    });
// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
        // 对响应数据做些什么
        const data = response.data;
        console.log("返回数据：", data)
        if (data.errno === 0) {
            return Promise.resolve(data);
        } else {
            ElMessage({
                message: data.err_msg,
                type: "error"
            });
            return Promise.reject(new Error(result.err_msg));
        }
    },
    function (error) {
        // 对响应错误做些什么
        return error;
    }
);

// 暴露service
export default service;