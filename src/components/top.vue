<template>
    <div class="main-header">
        <div class="logo">
            <img :src="logoURL" alt="Vue" /> 
        </div>
        <button class="hamburger-btn" @click="toggleMenu">
            <span class="fa fa-bars"></span>
        </button>
    </div>
</template>

<script setup>
import { ref,  defineEmits } from 'vue';
import logoURL from '../assets/logo.svg';

const emits = defineEmits(['update:isExpanded']);

const isExpanded = ref(false);

const toggleMenu = () => {
    isExpanded.value = !isExpanded.value;
    console.log("Hamburger clicked. IsExpanded:", isExpanded.value); // Add this
    emits('update:isExpanded', isExpanded.value);
};

</script>

<style scoped>
.main-header{
    background-color: #1e293b !important;
    border: 2px !important;
    display: flex;  
    align-items: center;  
    padding: 1rem;  
    z-index: 1000;  /* Or any high value to ensure it appears on top */
    position: relative;  /* Position can also be `absolute` or `fixed` */
    margin-bottom: 0px !important;

}

.hamburger-btn {
    background: none;
    border: none;
    color: white;  
    font-size: 24px;  
    cursor: pointer;
    margin-left: 200px;  /* pushes the button to the right */
}

.logo {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: #1e293b;
    width: 40px;
}

@media (max-width: 992px) {
    .logo {
        display: block;
        margin: 0 auto;
        left: 0;
        right: 0;
        text-align: center;
        position: absolute;
        margin-top: 1rem;
    }

    .hamburger-btn {
        margin-left: auto;
        margin-right: 1rem;
        
    }
}

</style>
