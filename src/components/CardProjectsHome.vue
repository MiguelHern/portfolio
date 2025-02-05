<template>
  <div
    class="group w-full card p-12 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-600 cursor-pointer rounded-lg shadow-md shadow-gray-600"
  >
    <header class="flex justify-between ">
      <span>{{ id }} | {{ rol }}</span>
      <div v-html="svg" class="group group-hover:text-primary transition duration-300 ease-in-out"></div>
    </header>
    <div class="grid grid-cols-1 lg:grid-cols-5 py-8 items-center">
      <div class="col-span-2 aspect-video">
        <img :src="cover.url" alt="" class="h-full rounded-md" />
      </div>
      <div class="col-span-3 lg:ml-12 mt-4 md:mt-8 lg:mt-0">
        <h4 class="text-4xl">{{ title }}</h4>
        <p class="text-gray-400 mt-2 mb-4">
          {{ description.shortDescription }}
        </p>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="tag in tags"
            :key="tag"
            class="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-xs"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  title: String,
  rol: String,
  description: String,
  cover: String,
  tags: Array,
  svg: String,
})
</script>

<style scoped></style>
