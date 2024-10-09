
<script setup lang="ts">
import ShopProductList from './ShopProductList.vue';
import type { ProductInterface } from '@/interfaces/product.interface';

defineProps<{
   products:ProductInterface[]
}>()

const emit = defineEmits<{
 (e:'addProductToCart', productId:number):void
}>()

</script>

<template>
 <div>
    <ShopProductList  @add-product-to-cart="emit('addProductToCart',$event)" :products="products"/>
 </div>
</template>

<style lang="scss" scoped>
 
</style>
