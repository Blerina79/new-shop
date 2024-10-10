
<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces/product.interface';

defineProps<{
   product:ProductCartInterface
}>()

const emit =defineEmits<{
   (e: 'removeProductFromCart', productId: number): void
}>()
</script>

<template>
 <div class="mb-10  p-10  d-flex flex-row align-items-center product">
    <strong class="flex-fill mr-10">{{ product.title }}</strong>
    <span>x {{ product.quantity }}</span>
    <span class="mr-10"></span>
    <span class="mr-10">Prix : {{ product.price }}  $</span>
    <button class="btn btn-danger"  @click="emit('removeProductFromCart',product.id)">Suprimer</button>
 </div>
</template>

<style lang="scss" scoped>
.product{
   border:var(--border);
   border-radius: var(--border-radius); 
   background-color: white;
}
 
</style>
