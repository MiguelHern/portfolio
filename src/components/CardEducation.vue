<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  imageUrl: String,
  duration: String,
  completionDate: String,
  organization: String,
  isFirst: Boolean
})
</script>

<template>
  <div class="card-education flex flex-col h-full">
    <img
      :src="props.imageUrl"
      :alt="props.title"
      class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div class="flex flex-col flex-1 p-4 gap-3">
      <span class="font-semibold text-center flex items-center justify-center gap-3">
        <svg
          v-if="props.isFirst"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        {{ props.organization }}
      </span>
      <h3 class="text-lg font-semibold text-gray-800">{{ props.title }}</h3>
      <div class="flex justify-between items-end mt-auto">
        <span class="bg-gray-200 text-gray-700 rounded-md text-sm">Completado</span>
        <span class="text-sm text-gray-500"> {{ props.completionDate }}</span>
      </div>
    </div>
  </div>
</template>
