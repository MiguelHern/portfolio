
<template>
  <section class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 md:px-8">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center">Sobre Mí</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold mb-4">Mi Enfoque</h3>
          <p class="text-gray-300">
            Me apasiona crear soluciones tecnológicas innovadoras que mejoren la vida de las personas.
            Mi enfoque se centra en el desarrollo de aplicaciones web y móviles intuitivas y eficientes,
            siempre buscando el equilibrio perfecto entre funcionalidad y diseño.
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill" class="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
              {{ skill }}
            </span>
          </div>
        </div>
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold mb-4">Mis Intereses</h3>
          <ul class="space-y-4">
            <li v-for="interest in interests" :key="interest.title" class="flex items-start">
              <component :is="interest.icon" class="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
              <div>
                <h4 class="font-medium">{{ interest.title }}</h4>
                <p class="text-gray-300">{{ interest.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Code, Cpu, Globe, BookOpen } from 'lucide-vue-next'

const skills = ref([
  'Vue.js', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'REST APIs'
])

const interests = ref([
  {
    title: 'Desarrollo Web Moderno',
    description: 'Exploro constantemente nuevas tecnologías y frameworks para crear experiencias web excepcionales.',
    icon: Code
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Me fascina el potencial de la IA para resolver problemas complejos y mejorar procesos.',
    icon: Cpu
  },
  {
    title: 'Tecnologías Emergentes',
    description: 'Siempre estoy al tanto de las últimas tendencias en tecnología y su impacto en la industria.',
    icon: Globe
  },
  {
    title: 'Aprendizaje Continuo',
    description: 'Creo en el aprendizaje constante y disfruto compartir conocimientos con la comunidad.',
    icon: BookOpen
  }
])
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si lo deseas */
</style>
