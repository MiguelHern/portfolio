<template>
  <section id="summary" class="py-18">
    <h2 class="">Sobre Mí</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-18">
      <div class="col-span-1 md:col-span-2 bg-white rounded-lg shadow-md p-6 h-full">
        <div class="flex items-center space-x-4 mb-6">
          <h2 class="text-2xl font-semibold">¡Hola! Soy Miguel Hernández</h2>
        </div>
        <p class="text-muted-foreground mb-4">
          Soy un desarrollador frontend apasionado con experiencia en la creación de interfaces intuitivas y
          eficientes. Me especializo en Vue.js, Tailwind CSS y el consumo de APIs, y disfruto diseñando experiencias
          de usuario atractivas y optimizadas.
        </p>
        <div class="flex items-center space-x-4 mb-4">
          <Briefcase class="w-5 h-5 text-primary" />
          <p class="text-muted-foreground">
            Mi experiencia incluye el desarrollo frontend con Vue 3, diseño de interfaces de usuario intuitivas y la
            integración con APIs para optimizar procesos en aplicaciones web.
          </p>
        </div>
        <div class="flex items-center space-x-4 mb-4">
          <Target class="w-5 h-5 text-primary" />
          <p class="text-muted-foreground">
            Mi objetivo es seguir creciendo como desarrollador frontend, creando soluciones eficientes y accesibles.
            Siempre estoy buscando nuevas oportunidades para aprender y mejorar mis habilidades.
          </p>
        </div>
        <div class="flex items-center space-x-4">
          <Heart class="w-5 h-5 text-primary" />
          <p class="text-muted-foreground">
            Cuando no estoy trabajando, me gusta ver series y películas, explorar nuevas tecnologías, aprender sobre
            modelado 3D y sumergirme en el mundo de los videojuegos.
          </p>
        </div>

      </div>
      <div class="rounded-lg shadow-md p-6 h-full">
        <h4 class="text-center mb-4">Habilidades blandas</h4>
        <div class="w-48 mx-auto flex flex-wrap items-center justify-center gap-2">
          <span v-for="skill in softSkills" :key="skill"
            class="px-2 py-1 bg-primary text-white text-sm font-semibold rounded-full">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Briefcase, Target, Heart } from 'lucide-vue-next'

const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Resolución de problemas',
  'Gestión del tiempo',
  'Pensamiento crítico',
  'Aprendizaje continuo',
  'Atención al detalle',
];

</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
