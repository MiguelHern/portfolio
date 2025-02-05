<script setup>
import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { projects } from '@/data/projects';

const currentIndex = ref(0);
const startX = ref(0);
const deltaX = ref(0);
const isSwiping = ref(false);
const transitionEnabled = ref(false);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length;
};

const { pause, resume } = useIntervalFn(nextSlide, 4000);

const handleMouseEnter = () => { pause(); };
const handleMouseLeave = () => { resume(); };

const handleTouchStart = (event) => {
  startX.value = event.touches[0].clientX;
  isSwiping.value = true;
  transitionEnabled.value = false;
};

const handleTouchMove = (event) => {
  if (!isSwiping.value) return;
  deltaX.value = event.touches[0].clientX - startX.value;
};

const handleTouchEnd = () => {
  isSwiping.value = false;
  transitionEnabled.value = true;

  if (deltaX.value > 50) {
    prevSlide();
  } else if (deltaX.value < -50) {
    nextSlide();
  }
  deltaX.value = 0;
};
</script>

<template>
  <div class="relative w-full overflow-hidden" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
    @touchend="handleTouchEnd">
  <div class="flex"
    :class="{ 'transition-transform duration-500 ease-in-out': transitionEnabled }"
    :style="{ transform: `translateX(calc(-${currentIndex * 100}% + ${deltaX}px))` }"
    @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">

    <div v-for="project in projects" :key="project.id"
      class="w-full flex-shrink-0 flex text-black text-2xl font-bold">
      <div class="flex flex-col">
        <img :src="project.cover.url" alt="" class="aspect-video border border-primary/25 rounded-md" loading="lazy" >
        <div class="grid grid-cols-2">
          <div>
            <p class="mt-4">{{ project.description.category }}</p>
            <ul class="flex flex-wrap gap-2 mt-2">
              <li v-for="tag in project.tags" :key="tag"
                class="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-xs">
                {{ tag }}
              </li>
            </ul>
          </div>
          <!-- Controles dentro de cada tarjeta -->
          <div class="flex items-center justify-end gap-3">
            <button
              class="p-2 border-2 border-solid rounded-full text-black hover:text-primary focus:outline-none transition-colors duration-300 ease-in-out"
              @click.stop="prevSlide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              class="p-2 border-2 border-solid rounded-full text-black hover:text-primary focus:outline-none transition-colors duration-300 ease-in-out"
              @click.stop="nextSlide"
              aria-label="Siguiente slide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>
