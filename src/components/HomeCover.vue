<template>
  <div class="relative flex items-center justify-center h-screen bg-white overflow-hidden">
    <div class="text-center z-10">
      <h1 :class="{ 'opacity-100 translate-y-0': showContent }"
        class="text-5xl font-bold text-gray-800 opacity-0 transform translate-y-5 transition-all duration-500">
        {{ title }}
      </h1>
      <p :class="{ 'opacity-100 translate-y-0': showContent }"
        class="text-xl text-gray-600 opacity-0 transform translate-y-5 transition-all duration-500 delay-200">
        Miguel <span class="text-primary">Hernández</span>
      </p>

      <button @click="scrollToProjects" :class="{ 'opacity-100 translate-y-0': showContent }"
        class="mt-6 px-6 py-3 text-white bg-primary rounded-full opacity-0 transform translate-y-8 transition-all duration-300 delay-400 hover:bg-primary/80">
        Descargar CV
      </button>
    </div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div v-for="(style, index) in circles" :key="index"
        class="absolute rounded-full bg-primary/60 animate-float" :style="style">
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';

const name = ref('Miguel Hernández');
const title = ref('Desarrollador Web');
const showContent = ref(false);

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 500);
});

const scrollToProjects = () => {
  console.log('Scrolling to projects...');
};

const circles = computed(() =>
  Array.from({ length: 5 }, () => ({
    width: `${Math.random() * 150 + 50}px`,
    height: `${Math.random() * 150 + 50}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 20 + 10}s`
  }))
);
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
  }
}

.animate-float {
  animation: float linear infinite;
}
</style>
