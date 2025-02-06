<template>
  <div class="mt-16">
    <h2 class="text-2xl text-start mb-4">Proyectos destacados</h2>
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <CardProjects v-for="project in projects" :key="project.id" v-bind="project" />
    </div>
    <h2 class="text-2xl text-start my-4">Otros proyectos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <CardProjects v-for="project in otherProjects" :key="project.id" v-bind="project" />
    </div>
  </div>

</template>

<script setup>
import CardProjects from '@/components/cards/CardProjectProjects.vue'
import { projects } from '@/data/projects';
import { otherProjects } from '@/data/otherProjects';



</script>
