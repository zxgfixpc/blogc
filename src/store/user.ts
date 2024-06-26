import { defineStore } from 'pinia'

export const UserStore = defineStore("UserStore", {
  actions:{
    SetUserLoginFlag(value:boolean) {
      this.isLogin = value
    },
    SetUserInfo(name:string, avator:string) {
      this.username = name
      this.avator = avator
    }
  },
  getters:{
    GetUserLoginFlag():boolean {
      return this.isLogin
    },
    GetUserName():string {
      return this.username 
    },
    GetUserAvator():string {
      return this.avator 
    }
  },
  state() {
    return {
      isLogin: false,
      username: '',
      avator:'',
    }
  }
})