import Cookie from "@/util/cookie";

function login(name:string, password:string) :boolean {
  console.log("======== login:", name, password)
  let sessionID = name+password // todo
  Cookie.setCookie(Cookie.sessionKey, sessionID, 1)
  
  
  console.log("======== get cookie :", Cookie.getCookie(Cookie.sessionKey))

  window.location.replace('/home')

  return true
}

export default {
  login
}