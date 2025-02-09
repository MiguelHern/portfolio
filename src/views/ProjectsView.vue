<template>
  <div class="mt-16">
    <section class="pb-8">
      <h2 class=" text-start font-thin text-3xl">Proyectos destacados</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-8">
        <CardProjects v-for="project in projects" :key="project.id" v-bind="project" />
      </div>
    </section>
    <section class="py-8">
      <h2 class=" text-start font-thin text-3xl">Otros proyectos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
        <CardProjects v-for="project in otherProjects" :key="project.id" v-bind="project" />
      </div>
    </section>

  </div>

</template>

<script setup>
import CardProjects from '@/components/cards/CardProjectProjects.vue'
import { projects } from '@/data/projects';
import { otherProjects } from '@/data/otherProjects';



</script>
