/**  
 * @description 保存cookie  
 * @param {Record<string, string>} json 需要存储cookie的对象  
 * @param {number} days 默认存储多少天  
 */  
function SetCookie(kvs: Record<string, string>, days: number) {  
  // 设置过期时间  
  let expire = new Date(  
      new Date().getTime() + days * 24 * 60 * 60 * 1000  
  ).toUTCString();  

  for (const key in kvs) {  
      document.cookie = `${key}=${kvs[key]}; expires=${expire}`;  
  }  
}  

/**   
* @description 获取cookie  
* @param {string} name 需要获取cookie的key  
* @returns {string | null} 返回cookie的值或者null  
*/  
function GetCookie(name: string): string | null {  
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
* @param {string} name 需要删除cookie的key  
*/  
function ClearCookie(name: string) {  
  const kv: Record<string, string> = {};  
  kv[name] = '';  
  SetCookie(kv, -1);  
}  

export default {  
  SetCookie,  
  GetCookie,  
  ClearCookie  
};