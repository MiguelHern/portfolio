<script setup>
import HeaderComponent from './components/HeaderMain.vue'
</script>

<template>
  <header class="">
    <HeaderComponent/>
  </header>
  <main class="mx-auto  max-w-7xl items-center justify-between px-6 lg:px-8">
    <RouterView />
  </main>

</template>

<style scoped>

</style>
