
<script setup lang="ts">
import type  { FiltersInterface, FilterUpdate } from '@/interfaces';

defineProps<{
    filters:FiltersInterface
}>()

const emit =defineEmits<{
    (e:'updateFilter',filterUpdate:FilterUpdate): void
}>()

</script>

<template>
<div class="p-20">
    <section class="mb-20">
        <h3 class="mb-10">Rechercher</h3>
        <input :value="filters.search" @input="emit('updateFilter',{search:($event.target as HTMLInputElement).value})"    type="text" placeholder="Rechercher">
    </section>
</div>
    
</template>

<style  lang="scss">
</style>