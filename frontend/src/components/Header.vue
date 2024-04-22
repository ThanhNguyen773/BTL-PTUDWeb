<script setup>
import { ref } from 'vue';
import '../assets/css/header.css'
import { RouterLink  } from 'vue-router'
const islogin = ref(localStorage.isLogin)

</script>

<template>
    <header>
        <div id="menu-bar" class="fas fa-bars"></div>
        
        <a href="/" class="logo"><img src="../assets/images/logo2.png" alt=""></a>
        <div class="icons" style="color:aliceblue">
            <RouterLink to="/cart"><i class="fa-solid fa-book"></i></RouterLink>
            <!-- <RouterLink to="/info" v-if="islogin === 'staff'">Tài khoản</RouterLink> -->
            
            <span>
                <RouterLink to="/login" >{{ islogin === 'user' ||islogin === 'staff'||islogin === 'admin' ? 'Tài khoản' : 'Đăng nhập' }}</RouterLink>
                <RouterLink to="/signup" >{{ islogin === 'user' ||islogin === 'staff'||islogin === 'admin' ? '' : 'Đăng ký' }}</RouterLink>
            </span>
            
        </div>
        
    </header>
</template>
