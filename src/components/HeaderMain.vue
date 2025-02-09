<template>
  <nav class="fixed top-0 left-0 right-0 bg-white mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 z-50"
    aria-label="Global">
    <div class="flex lg:flex-1">
      <RouterLink class="-m-1.5 p-1.5 font-bold" to="/">
        <span class="sr-only">Your Tecnologías</span>
        Miguel <span class="text-primary">Hernández</span>
      </RouterLink>
    </div>

    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        @click="toggleMenuMedimum">
        <span class="sr-only">Open main menu</span>
        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
          data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <div class="hidden lg:flex lg:gap-x-12">
      <div class="relative">
        <button type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
          aria-expanded="false" @click.prevent="scrollToSection('projects')" @mouseenter="showMenu"
          @mouseleave="hideMenu">
          Proyectos
          <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            data-slot="icon">
            <path fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd" />
          </svg>
        </button>

        <!--
          'Proyectos' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        -->
        <div v-if="isActive" @mouseenter="showMenu" @mouseleave="hideMenu"
          class="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
          <div class="p-4">
            <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
              <div
                class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <svg class="size-6 text-gray-600 group-hover:text-primary" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>

              </div>
              <div class="flex-auto">
                <RouterLink :to="'/projects'" aria-label="Ir a la página de todos los proyectos"
                  class="block font-semibold text-gray-900">
                  Ver todos los proyectos
                  <span class="absolute inset-0"></span>
                </RouterLink>
              </div>
            </div>


          </div>

        </div>
      </div>

      <a href="#" class="text-sm/6 font-semibold text-gray-900"
        @click.prevent="scrollToSection('education')">Educación</a>
      <a href="#" class="text-sm/6 font-semibold text-gray-900" @click.prevent="scrollToSection('summary')">Sobre
        mi</a>
      <a href="#" class="text-sm/6 font-semibold text-gray-900"
        @click.prevent="scrollToSection('technologies')">Tecnologías</a>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div class="lg:hidden" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div v-if="menuMedium" class="fixed inset-0 z-10 bg-black/90"></div>
    <div
      class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300"
      :class="menuMedium ? 'translate-x-0' : 'translate-x-full'">
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Tecnologías</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Proyectos</a>
              <a href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Educación</a>
            <a href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Sobre mi</a>
            <a href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Tecnologías</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const scrollToSection = (id) => {
  if (route.path === '/') {
    // Estamos en la misma página, hacer scroll directo
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    // No estamos en la misma página, navegar y luego hacer scroll
    router.push({ path: '/', hash: `#${id}` })
  }
}

const isActive = ref(false)
let timeout

const showMenu = () => {
  clearTimeout(timeout)
  isActive.value = true
}

const hideMenu = () => {
  timeout = setTimeout(() => {
    isActive.value = false
  }, 200) // Retardo para evitar desaparición abrupta
}
const menuMedium = ref(false)
const toggleMenuMedimum = () => {
  menuMedium.value = !menuMedium.value
}
</script>

<style scoped></style>
