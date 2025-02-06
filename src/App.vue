<script setup>
import HeaderComponent from './components/HeaderMain.vue'
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <main class="mx-auto max-w-7xl items-center justify-between px-6 lg:px-8">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
