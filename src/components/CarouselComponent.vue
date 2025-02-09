<script setup>
import { ref, computed } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { projects } from '@/data/projects';
import { RouterLink } from 'vue-router';

const currentIndex = ref(0);
const startX = ref(0);
const deltaX = ref(0);
const isSwiping = ref(false);
const transitionEnabled = ref(false);

const projectTitle = computed(() => projects[currentIndex.value]?.title);

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
    <div class="flex" :class="{ 'transition-transform duration-500 ease-in-out': transitionEnabled }"
      :style="{ transform: `translateX(calc(-${currentIndex * 100}% + ${deltaX}px))` }" @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave">
      <div v-for="project in projects" :key="project.id"
        class="w-full flex-shrink-0 flex text-black text-2xl font-bold">
        <div class="flex flex-col">
          <img :src="project.cover.url" alt="" class="aspect-video">
        </div>
      </div>

    </div>
    <div class="flex justify-between gap-3 mt-3">
      <div>
        <RouterLink :to="'/project/' + (currentIndex + 1)" class="flex items-center gap-3">
          <h3 class="">{{ projectTitle }}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </RouterLink>

        <ul class="flex flex-wrap gap-2 mt-2 z-10">
          <li v-for="tag in projects[currentIndex].tags" :key="tag"
            class="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-xs">
            {{ tag }}
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-3">
        <button
          class="p-2 border-2 border-solid rounded-full text-black hover:text-primary focus:outline-none transition-colors duration-300 ease-in-out"
          @click="prevSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          class="p-2 border-2 border-solid rounded-full text-black hover:text-primary focus:outline-none transition-colors duration-300 ease-in-out"
          @click="nextSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
