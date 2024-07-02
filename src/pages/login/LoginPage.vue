<template>
    <div class="container">
            <div class="login-wrapper">
                <div class="header">Login</div>
                <div class="form-wrapper">
                    <input type="text" v-model="username" placeholder="账户" class="input-item">
                    <input type="password" v-model="password" placeholder="密码" class="input-item">
                    <div class="btn" @click="submitLogin">登录</div>
                    <div class="btn" @click="toRegPage">去注册</div>
                </div>
            </div>
        </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
import loginObj from '@/api/login';
import { ref } from 'vue';
import axios from 'axios';

const router = useRouter();  
const toRegPage = () => {  
    router.push('/reg'); 
}; 

const username = ref()
const password = ref()

function submitLogin() {
    loginObj.login(username.value, password.value).then(ret => {
    console.log("reg page ret:", ret)
    if (!ret.ok) {
        ElMessage({
        message: ret.msg,
        type: 'error',
        plain: true,
        })  
    } else {
        ElMessage({
        message: '登录成功',
        type: 'warning',
        plain: true,
        })  
        window.location.replace('/home')
    }
    }).catch(error => {  
    ElMessage({
        message: error,
        type: 'error',
        plain: true,
    })  
    })
}

</script>

<style scoped>

html {
    height: 100%;
}
body {
    height: 100%;
}
.container {
    /* margin-top: 5%; */
    height: 980px;
    width: 100%;
    background-image: linear-gradient(to right, #e8e9ea, #e8e9ea); 
}
.login-wrapper {
    background-color: #cde5f0;
    width: 358px;
    height: 588px;
    border-radius: 15px;
    padding: 0 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
}
.form-wrapper {  
    display: flex;  
    flex-direction: column;   
    align-items: center; /* 水平居中（但在这里不需要）*/   
} 
.input-item {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 0;
    padding: 10px;
    border-bottom: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;
}
.input-item::placeholder {
    text-transform: uppercase;
}
.btn {
    text-align: center;
    padding: 10px;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right, #a4c1f5, #a4c1f5);
    color: #fff;
}
.msg {
    text-align: center;
    line-height: 88px;
}
a {
    text-decoration-line: none;
    color: #abc1ee;
}

</style>