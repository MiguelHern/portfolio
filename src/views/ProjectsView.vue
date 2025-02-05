<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-4">
    <CardProjectProjects
      :title="'FisioLab'"
      :description="'Sistema'"
      :image="'https://res.cloudinary.com/djfokdod6/image/upload/v1737587742/ob6w8i1rapxxir9v1kn9.png'"
      :link="'https://github.com/miusuario/fisiolab'"
      :tags="['Vue 3', 'Tailwind CSS', 'MySQL']"
    />
  </div>
</template>

<script setup>
import CardProjectProjects from '@/components/CardProjectProjects.vue'

</script>
