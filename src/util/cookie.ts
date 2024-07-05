const sessionKey = "BLOG_SESSION_ID";
const userIDKey = "BLOG_USER_ID";
const userAvatarKey = "BLOG_USER_AVATAR";

/*
 * cookie中判断是一个cookie，需要判断name domain path是否都相同，所以在设置path时，统一为'/'
 */

function setUserIDAndSessionID(userID: string, sessionID: string) {
  setCookie(sessionKey, sessionID, 3);
  setCookie(userIDKey, userID, 3);
}

function setAvatar(url: string) {
  console.log("======= setAvatar:", url);
  setCookie(userAvatarKey, url, 3);
}

function getAvatar(): string {
  const avatar = getCookie(userAvatarKey);
  if (avatar === null) {
    return "";
  }
  return avatar;
}

function getUserID(): string {
  const userID = getCookie(userIDKey);
  if (userID === null) {
    return "";
  }
  return userID;
}

function getSessionID(): string {
  const userID = getCookie(sessionKey);
  if (userID === null) {
    return "";
  }
  return userID;
}

function clearUserIDAndSessionID() {
  clearCookie(userIDKey);
  clearCookie(sessionKey);
}

// 设置cookie
function setCookie(key: string, val: string, hour: number) {
  // 设置过期时间
  let expire = new Date(
    new Date().getTime() + hour * 3600 * 1000
  ).toUTCString();
  document.cookie = `${key}=${val}; expires=${expire}; path=/`;
}

// 获取cookie
function getCookie(name: string): string | null {
  const arr = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  );
  if (arr != null) {
    // 在较新的浏览器中，应使用 `decodeURIComponent` 而不是 `unescape`
    return decodeURIComponent(arr[2]);
  } else {
    return null;
  }
}

// 清除cookie
function clearCookie(key: string) {
  document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
}

export default {
  setUserIDAndSessionID,
  getUserID,
  getSessionID,
  setAvatar,
  getAvatar,
  clearUserIDAndSessionID,
};
