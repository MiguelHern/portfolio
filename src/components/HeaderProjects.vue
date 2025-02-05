<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const volverAProyectos = () => {
  router.push('/proyectos');
};
</script>

<template>
    <nav>
      <router-link to="/">Inicio</router-link>/
      <router-link to="/projects">Proyectos</router-link>
    </nav>
    <!-- Mostrar botón "Atrás" solo si estamos en una subruta de "proyectos" -->
    <button v-if="route.path.startsWith('/proyectos/') && route.path !== '/proyectos'" @click="volverAProyectos">
      Atrás
    </button>
    <RouterView/>
</template>
