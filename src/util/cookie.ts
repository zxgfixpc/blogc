const sessionKey = "BLOG_SESSION_ID"

/*
 * cookie中判断是一个cookie，需要判断name domain path是否都相同，所以在设置path时，统一为'/'
 */

// 设置cookie 
function setCookie(key:string, val:string, days: number) {  
  // 设置过期时间  
  let expire = new Date(  
      new Date().getTime() + days * 24 * 60 * 60 * 1000  
  ).toUTCString();  
  document.cookie = `${key}=${val}; expires=${expire}; path=/`;  
}  

// 获取cookie 
function getCookie(name: string): string | null {  
  const arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));  
  if (arr != null) {  
      // 在较新的浏览器中，应使用 `decodeURIComponent` 而不是 `unescape`  
      return decodeURIComponent(arr[2]);  
  } else {  
      return null;  
  }  
}  

// 清除cookie
function clearCookie(key: string) {  
  document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'
}  

export default { 
  sessionKey, 
  setCookie,  
  getCookie,  
  clearCookie  
};