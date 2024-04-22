<template>
    <div class="footer" style="font-size: larger;"><span><i class="fa-regular fa-copyright"></i> 2024 ThanhB2110100. All rights reserved.</span></div>
</template>

<style scoped>
:root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

body {
    height: 100vh;
    overflow: hidden;
}

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: #3CB371;
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
}
</style>
<script>

import { RouterLink } from 'vue-router'
export default {
    name: 'Footer',
}
</script>