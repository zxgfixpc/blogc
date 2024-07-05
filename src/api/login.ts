import cookie from "@/util/cookie";
import service from "@/util/request";
import { SERVER_IP_PORT, LOGIN_PATH, REGISTER_PATH } from "./consts";

async function login(name:string, password:string) {
  try {
    const response = await service.request({  
      method: "post",  
      url: LOGIN_PATH,  
      data: {  
        user_id: name,  
        password: password,  
      },  
    });  
    cookie.setUserIDAndSessionID(name, response.data.session_id); 
    return {ok: true, msg: "登录成功"}
  } catch (error) {  
    // 请求失败，处理错误  
    console.error("请求失败:", error); 
    return {ok: false, msg: "登录失败"} 
  }
}

async function register(name:string, password:string) {
  try {
    const response = await service.request({  
      method: "post",  
      url: REGISTER_PATH,  
      data: {  
        user_id: name,  
        password: password,  
      },  
    });  
    cookie.setUserIDAndSessionID(name, response.data.session_id); 
    return {ok: true, msg: "注册成功"}
  } catch (error) {  
    // 请求失败，处理错误  
    console.error("请求失败:", error); 
    return {ok: false, msg: "注册失败"} 
  }
}

export default {
  login,
  register
}