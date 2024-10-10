
<script setup lang="ts">
import CartProductList from './CartProductList.vue';
import type { ProductCartInterface } from '@/interfaces/product.interface';

defineProps<{
  cart: ProductCartInterface[]
}>()


const emit =defineEmits<{
   (e: 'removeProductFromCart', productId: number): void
}>()

</script>

<template>
  <div class="p-20">
    <h2 class="mb-10">Panier</h2>
    <CartProductList :cart="cart"  @remove-product-from-cart="emit('removeProductFromCart',$event)"/>
  </div>
</template>

<style lang="scss">

</style>
