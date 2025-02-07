<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CardTechnologies from '@/components/cards/CardTechnologies.vue'
import CardProjectsHome from '@/components/cards/CardProjectsHome.vue'
import { projects } from '@/data/projects'
import { technologiesFrontEnd, technologiesBackEnd, technologiesTools } from '@/data/technologies'
import { education } from '@/data/education'
import CardEducation from '@/components/cards/CardEducationHome.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import HomeCover from '@/components/HomeCover.vue'
import AboutMe from '@/components/AboutMe.vue'

const techCategories = {
  FrontEnd: technologiesFrontEnd,
  BackEnd: technologiesBackEnd,
  Herramientas: technologiesTools,
}

const isMobile = ref(window.innerWidth < 768)

const checkWidth = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  window.addEventListener('resize', checkWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWidth)
})
</script>


<template>
  <main>
    <HomeCover />

    <section v-if="isMobile" class="py-18" id="projectsss">
      <h2>Proyectos</h2>
      <div class="space-y-12 mt-18">
        <CarouselComponent />
        <RouterLink :to="'/projects'" aria-label="Ir a la página de todos los proyectos"
          class="flex gap-3 btn items-center bg-primary hover:bg-primary/90 text-white group rounded-md justify-center">
          Ver todos los proyectos
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            aria-label="Icono de carpeta" stroke="currentColor"
            class="size-6 group-hover:scale-110 transition-transform duration-300 ease-in-out">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </RouterLink>
      </div>
    </section>

    <section v-if="!isMobile" class="py-18" id="projects">
      <h2>Proyectos</h2>

      <RouterLink :to="'/project/' + project.id" v-for="project in projects" :key="project.id"
        aria-label="Ir al proyecto seleccionado" class="space-y-12 block mt-18">
        <CardProjectsHome v-bind="project" />
      </RouterLink>


    </section>


    <section class="py-18" id="education">
      <h2 class="">Educación</h2>
      <div class="mt-18 md:text-start text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardEducation v-for="(edu, index) in education" :key="edu.id" v-bind="edu" :isFirst="index === 0" />
      </div>
    </section>
    <AboutMe/>

    <section class="py-18" id="technologies">
      <h2>Tecnologías</h2>
      <div class="mt-18">
        <div v-for="(techs, category) in techCategories" :key="category">
          <h3 class="text-sm sm:text-base md:text-lg">{{ category }}</h3>
          <ul class="grid grid-cols-3  lg:grid-cols-4 gap-4 my-12">
            <CardTechnologies v-for="tech in techs" :key="tech.id" v-bind="tech" />
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped></style>
