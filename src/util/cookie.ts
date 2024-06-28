const sessionKey = "BLOG_SESSION_ID"

/**  
 * @description 保存cookie   
 * @param {number} days 默认存储多少天  
 */  
function setCookie(key:string, val:string, days: number) {  
  // 设置过期时间  
  let expire = new Date(  
      new Date().getTime() + days * 24 * 60 * 60 * 1000  
  ).toUTCString();  
  document.cookie = `${key}=${val}; expires=${expire}; path=/`;  
}  

/**   
* @description 获取cookie  
* @param {string} name 需要获取cookie的key  
* @returns {string | null} 返回cookie的值或者null  
*/  
function getCookie(name: string): string | null {  
  const arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));  
  if (arr != null) {  
      // 在较新的浏览器中，应使用 `decodeURIComponent` 而不是 `unescape`  
      return decodeURIComponent(arr[2]);  
  } else {  
      return null;  
  }  
}  

/**   
* @description 删除cookie  
* @param {string} key 需要删除cookie的key  
*/  
function clearCookie(key: string) {  
  console.log(key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;') 
  document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  console.log("======== clearCookie: ", document.cookie)
}  

export default { 
  sessionKey, 
  setCookie,  
  getCookie,  
  clearCookie  
};