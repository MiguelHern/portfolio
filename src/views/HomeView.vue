<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CardTechnologies from '@/components/CardTechnologies.vue'
import CardProjectsHome from '@/components/CardProjectsHome.vue'
import { projects } from '@/data/projects'
import { technologiesFrontEnd, technologiesBackEnd, technologiesTools } from '@/data/technologies'
import { education } from '@/data/education'
import CardEducation from '@/components/CardEducation.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import HomeCover from '@/components/HomeCover.vue'

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
    <HomeCover/>

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
        <CardProjectsHome v-bind="project"/>
      </RouterLink>


    </section>


    <section class="py-18" id="education">
      <h2 class="">Educación</h2>
      <div class="mt-18 md:text-start text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardEducation v-for="(edu, index) in education" :key="edu.id" v-bind="edu" :isFirst="index === 0" />
      </div>
    </section>

    <section class="py-18" id="summary">
      <h2 class="">Resumen</h2>
      <div class="mt-18">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12">
          <h4>Mi enfoque</h4>
          <p>
            Soy ingeniero en sistemas computacionales con una sólida base en desarrollo backend,
            pero mi mayor enfoque se encuentra en el desarrollo frontend. Me dedico a crear
            interfaces web dinámicas y funcionales utilizando tecnologías como Vue.js, Tailwind CSS
            y TypeScript. Además, tengo experiencia en la integración de APIs para desarrollar
            aplicaciones interactivas que manejan datos en tiempo real y mejoran la experiencia del
            usuario. Siempre busco soluciones innovadoras para optimizar el rendimiento y la
            escalabilidad de las aplicaciones.
          </p>

          <h4>Intereses</h4>
          <p>
            Mi objetivo es siempre entregar soluciones limpias, escalables y fáciles de mantener. Me
            apasiona la creación de interfaces de usuario que no solo sean atractivas, sino también
            funcionales. Busco constantemente maneras de mejorar mis habilidades en la creación de
            experiencias de usuario excepcionales y optimizar el rendimiento de las aplicaciones.
            Creo firmemente en el trabajo colaborativo y en la importancia de la comunicación fluida
            para construir soluciones de software de alta calidad.
          </p>

          <h4>Trayectoria</h4>
          <p>
            He trabajado en el desarrollo de aplicaciones web de alto rendimiento, consumiendo y
            gestionando APIs para conectar el frontend con servicios backend de manera eficiente. En
            proyectos para clientes en sectores como la salud y la educación, he contribuido a la
            creación de soluciones innovadoras que optimizan la interacción con datos y mejoran la
            experiencia del usuario.
          </p>
        </div>
      </div>
    </section>

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
<style scoped>



</style>
