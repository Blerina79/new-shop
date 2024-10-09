
<script setup lang="ts">
</script>

<template>
   <header class="px-20  d-flex flex-row align-items-center">
    <a href="#"  class="d-flex flex-row align-items-center mr-10">
        <img src="../assets/logo.svg" alt="logo">
        <span class="logo">New Tech</span>
    </a>
    <ul class=" d-flex  flex-row flex-fill">
        <li class="mr-10">
            <a href="#">Shop</a>
        </li>
        <li>
            <a href="#">Admin</a>
        </li>
    </ul>
    <ul class=" d-flex  flex-row ">
        <li class="mr-10">
            <a href="#">Inscription</a>
        </li>
        <li>
            <a href="#">Connexion</a>
        </li>
    </ul>
   </header> 
</template>

<style lang="scss" scoped>

header{

    background-color: var(--primary-1);
    a{
        color: var(--text-primary-color);
        img{
            width: 20px;
            margin-right: 5px;
        }
        .logo{
            font-weight: 700;
            font-size: 20px;
        }
    }

   
}
 
</style>
