<template>
  <div class="relative flex items-center justify-center h-screen bg-white overflow-hidden">
    <div class="text-center z-3">
      <h1 :class="{ 'opacity-100 translate-y-0': showContent }"
        class="text-5xl font-bold text-gray-800 opacity-0 transform translate-y-5 transition-all duration-500 color">
        Desarrollador web
      </h1>
      <p :class="{ 'opacity-100 translate-y-0': showContent }"
        class="text-xl text-gray-600 opacity-0 transform translate-y-5 transition-all duration-500 delay-200">
        Miguel <span class="text-primary">Hernández</span>
      </p>
      <button @click="downloadPdf" :class="{ 'opacity-100 translate-y-0': showContent }"
        class="mt-6 px-6 py-3 text-white bg-primary rounded-full opacity-0 transform translate-y-8 transition-all duration-300 delay-400 hover:bg-primary/80">
        <div class="flex items-center gap-3">
          Descargar CV
          <svg v-if="downloadingStatus" aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </button>
    </div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div v-for="(style, index) in circles" :key="index" class="absolute rounded-full bg-primary/60 animate-float"
        :style="style">
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';

const showContent = ref(false);

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 500);
});

const circles = computed(() =>
  Array.from({ length: 5 }, () => ({
    width: `${Math.random() * 150 + 50}px`,
    height: `${Math.random() * 150 + 50}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 20 + 10}s`
  }))
);
let downloadingStatus = ref(false)
const downloadPdf = () => {
  downloadingStatus.value = true
  const link = document.createElement('a');
  link.href = '/MiguelHernandezCV.pdf';
  link.download = 'Miguel Hernández - Currículum.pdf';
  link.click();
  downloadingStatus.value = false
};
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
