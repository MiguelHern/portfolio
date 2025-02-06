<template>
  <li class="border-3 border-solid border-[#7c7c6f] rounded-xl p-4 flex flex-col">
    <div class="w-10 mb-4 md:mb-8 self-center md:self-end">
      <div v-html="svg"></div>
    </div>
    <p></p>
    <h4 class="sm:text-sm md:text-lg lg:text-2xl font-semibold md:text-start text-center">{{ title }}</h4>
  </li>
</template>
<script setup>
defineProps ({
  title: String,
  svg: String,
})
</script>
