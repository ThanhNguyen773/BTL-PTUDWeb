<template>
    
    <Service/>
    <ProductSection/>
    <Featured/>
</template>

<script>
import '../assets/css/home.css'
import Service from '../components/Service.vue';
import ProductSection from '../components/ProductSection.vue';
export default {
    name: 'HomePage',
    components: { Service, ProductSection }
}
</script>
