<template>
    <body class="wrapper d-flex">
        <aside id="sidebar" class="sticky-top">
            <div class="d-flex" id="sidebar-signature">
                <a href="#" id="sidebar-title"> LIBRARY MANAGEMENT </a>
            </div>

            <ul class="sidebar-nav">
                <li class="sidebar-item">
                    <a @click="$router.push('/admin')" class="sidebar-link">
                        <i class="lni lni-home"></i>
                        <span> Trang Chủ</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a
                        @click="$router.push('/admin/account/reader')"
                        class="sidebar-link">
                        <i class="lni lni-user"></i>
                        <span> Quản lý Độc Giả</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a
                        @click="$router.push('/admin/account/employee')"
                        class="sidebar-link">
                        <i class="lni lni-user"></i>
                        <span> Quản lý Nhân Viên</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a
                        @click="$router.push('/admin/book')"
                        class="sidebar-link">
                        <i class="lni lni-book"></i>
                        <span> Quản lý sách</span>
                    </a>
                </li>
            </ul>
            <div class="sidebar-footer" >
                <router-link to="/login">
                    <a class="sidebar-link" @click="DangXuat" >
                        <i class="lni lni-exit"></i>
                        <span>Đăng xuất</span>
                    </a>
                </router-link>
            </div>
        </aside>
    </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

h1 {
    font-weight: 600;
    font-size: 1.5rem;
}

body {
    font-family: "Poppins", sans-serif;
}

.wrapper {
    display: flex;
}

.main {
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    background-color: white;
}

#sidebar {
    height: 100vh;
    width: 20vw;
    min-width: 18vh;
    background-color: #2478d1;
    display: flex;
    flex-direction: column;
    z-index: 0 ;
}

#sidebar-title {
    color: white;
    font-size: 1.5vw;
    font-weight: 800;
    padding-top: 5vh;
    padding-left: 3vh;
}

.sidebar-nav {
    padding: 2rem 0;
    flex: 1 1 auto;
}

a.sidebar-link {
    padding: 0.625rem 1.625rem;
    color: white;
    display: block;
    font-size: 0.9rem;
    white-space: nowrap;
    border-left: 3px solid transparent;
}

a.sidebar-link span {
    font-size: 1.5vw;
    font-weight: 500;
}

a.sidebar-link:hover {
    background-color: rgba(255, 255, 255, 0.075);
    border-left: 3px solid #3b7ddd;
}

.sidebar-link i {
    font-size: 1.2vw;
    margin-right: 0.75rem;
    margin-bottom: 5%;
    margin-top: 5%;
}

.sidebar-item {
    position: relative;
    /* margin-left: 5%; */
}
.sidebar-item a {
    position: relative;
    cursor: pointer;
}

.sidebar-footer a {
    cursor: pointer;
}
    
</style>

<script setup>
    function DangXuat()
    {
       sessionStorage.clear()
    }
</script>