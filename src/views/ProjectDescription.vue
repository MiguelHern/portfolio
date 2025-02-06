<template>
  <div v-if="project">
    <section class="h-screen flex flex-col pt-16 items-center justify-center gap-12">
      <header class="text-center">
        <div>
          <h1>{{ project.title }}</h1>
          <p class="text-primary! text-sm!">{{ project.description.category }}</p>
        </div>
      </header>
      <div class="">
        <img
          :src="project.cover.url"
          :alt="project.cover.description"
          class="shadow-lg shadow-primary rounded-lg"
        />
      </div>
    </section>
    <div class="bg-black-rewashed text-white px-8 rounded-xl my-16">
      <section class="w-full md:py-18 py-4">
        <header class="md:text-start text-center">
          <p class="text-primary!">{{ project.description.category }}</p>
          <h2 class="text-center! md:text-start!">Resumen del Proyecto</h2>
        </header>
        <div class="grid grid-cols-4 mt-8">
          <div class="col-span-2 border-y-1 border-[#7c7c6f] p-4 pl-0">
            <h3>Reto</h3>
            <p class="text-gray-600">
              {{ project.challenge }}
            </p>
          </div>
          <div class="col-span-2 border-y-1 border-[#7c7c6f] p-4">
            <h3>Oportunidad</h3>
            <p class="text-gray-600">
              {{ project.opportunity }}
            </p>
          </div>

          <div class="p-4 pl-0 col-span-2 md:col-span-1">
            <h3>Línea del tiempo</h3>
            <time datetime="2025-02-01" class="text-gray-600"
              >{{ project.timeline.start }} - {{ project.timeline.end }}</time
            >
          </div>
          <div class="p-4  col-span-2 md:col-span-1">
            <h3>Responsabilidades</h3>
            <ul class="text-gray-600">
              <li v-for="responsibility in project.responsibilities" :key="responsibility">
                {{ responsibility }}
              </li>
            </ul>
          </div>
          <div class="p-4 md:pl-4 pl-0 col-span-2 md:col-span-1">
            <h3>Tecnologías</h3>
            <ul class="text-gray-600">
              <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
            </ul>
          </div>
          <div class="p-4 col-span-2 md:col-span-1">
            <h3>Hola</h3>
            <p class="text-gray-600"></p>
          </div>
        </div>
      </section>

      <section class="md:py-18 py-4">
        <h2 class="border-b border-[#7c7c6f] pb-4">Descripción del proyecto</h2>
        <p class="mt-4">
          {{ project.description.longDescription }}
        </p>
      </section>

      <section class="py-18">
        <h2 class="border-b border-[#7c7c6f] pb-4">Mi rol</h2>
        <ul class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <li v-for="(desc, title) in project.myRole" :key="title">
            <h3>{{ title }}</h3>
            <p>
              {{ desc }}
            </p>
          </li>
        </ul>
      </section>

      <section class="md:py-18 py-4">
        <h2 class="border-b border-[#7c7c6f] pb-4">Galería del proyecto</h2>
        <div class="md:grid md:space-y-0 grid-cols-2 gap-4 mt-8">
          <figure class="col-span-2 overflow-hidden">
            <img
              :src="project.cover.url"
              :alt="project.cover.description"
              class="overflow-hidden rounded-lg shadow-md shadow-primary"
            />

            <figcaption class="md:mt-2 mt-0.5 font-thin">
              {{ project.cover.description }}
            </figcaption>
          </figure>
          <figure
            v-for="(image, index) in project.gallery"
            :key="index"
            class="flex flex-col h-full"
          >
            <img
              :src="image.url"
              :alt="image.description"
              class="project-image h-full rounded-lg shadow-md shadow-primary"
            />

            <figcaption class="md:mt-2 mt-0.5 font-thin">{{ image.description }}</figcaption>
          </figure>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'
import { projects } from '@/data/projects'

const route = useRoute()
const projectId = ref(route.params.id)
const project = ref(null)

const loadProject = () => {
  project.value = projects.find((p) => p.id === projectId.value)
}

onMounted(() => {
  loadProject()
})

watch(
  () => route.params.id,
  (newId) => {
    projectId.value = newId
    loadProject()
  },
)
</script>

<style scoped>
h1 {
  font-size: var(--text-5xl);
}

h2 {
  font-size: var(--text-lg); /* Reducción del tamaño de h2 */
  font-weight: var(--font-weight-bold);
  text-align: start;
}

h3 {
  font-size: var(--text-md); /* Reducción del tamaño de h3 */
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
}

h4 {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
}
p,
ul,
time {
  color: var(--color-gray-400);
  font-size: var(--text-lg);
}

@media (min-width: 640px) {
  /* sm */
  h2 {
    font-size: var(--text-xl); /* Reducción del tamaño de h2 */
  }
  h3 {
    font-size: var(--text-lg); /* Reducción del tamaño de h3 */
  }
  h4 {
    font-size: var(--text-sm);
  }
}

@media (min-width: 768px) {
  /* md */
  h2 {
    font-size: var(--text-2xl); /* Reducción del tamaño de h2 */
  }
  h3 {
    font-size: var(--text-xl); /* Reducción del tamaño de h3 */
  }
  h4 {
    font-size: var(--text-lg);
  }
}

@media (min-width: 1024px) {
  /* lg */
  h2 {
    font-size: var(--text-3xl); /* Reducción del tamaño de h2 */
  }
  h3 {
    font-size: var(--text-2xl); /* Reducción del tamaño de h3 */
  }
  h4 {
    font-size: var(--text-2xl);
  }
}
</style>
