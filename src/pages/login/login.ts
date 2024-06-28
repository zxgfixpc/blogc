import Cookie from "@/util/cookie";

function login(name:string, password:string) :boolean {
  console.log("======== login:", name, password)
  let sessionID = name+password // todo
  Cookie.setCookie(Cookie.sessionKey, sessionID, 1)
  
  
  console.log("======== get cookie :", Cookie.getCookie(Cookie.sessionKey))
  setTimeout(() => {  
    console.log('延时后的消息')
  }, 20000)

  window.location.replace('/home')

  return true
}

export default {
  login
}