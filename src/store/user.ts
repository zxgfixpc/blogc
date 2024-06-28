import { defineStore } from 'pinia'

export const userStore = defineStore("UserStore", {
  actions:{
    setUserLoginFlag(value:boolean) {
      this.isLogin = value
    },
    setUserInfo(name:string, avator:string) {
      this.username = name
      this.avator = avator
    }
  },
  getters:{
    getUserLoginFlag():boolean {
      return this.isLogin
    },
    getUserName():string {
      return this.username 
    },
    getUserAvator():string {
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