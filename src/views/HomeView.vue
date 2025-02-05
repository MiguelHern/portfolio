<script setup>
import CardTechnologies from '@/components/CardTechnologies.vue'
import CardProjectsHome from '@/components/CardProjectsHome.vue'
import { projects } from '@/data/projects'
import { technologiesFrontEnd, technologiesBackEnd, technologiesTools } from '@/data/technologies'
import { education } from '@/data/education'
import CardEducation from '@/components/CardEducation.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

const techCategories = {
  FrontEnd: technologiesFrontEnd,
  BackEnd: technologiesBackEnd,
  Herramientas: technologiesTools,
}
</script>

<template>
  <main>
    <section class="h-screen relative">
      <div
        class="absolute top-1/2 md:-translate-y-1/2 left-1/2 md:left-0 md:translate-x-0 -translate-x-1/2 flex flex-col items-center md:text-start text-center bg-white md:shadow-sm shadow-xl rounded-lg p-4">
        <div class="space-y-6">
          <p class="text-xl font-thin">
            Hola, soy Miguel <span class="text-primary">Hernández</span>
          </p>
          <h1 class="text-5xl">Ingeniero en <br />sistemas</h1>
          <ul class="flex gap-3 md:justify-start justify-center">
            <li>
              <a href="">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="stroke-black hover:stroke-primary transition-colors duration-200 ease-in-out">
                  <g clip-path="url(#clip0_10_109)">
                    <path
                      d="M12 25.3333C5.33333 27.3333 5.33333 22 2.66666 21.3333M21.3333 29.3333V24.1733C21.3833 23.5375 21.2974 22.8984 21.0814 22.2984C20.8653 21.6984 20.5239 21.1512 20.08 20.6933C24.2667 20.2267 28.6667 18.64 28.6667 11.36C28.6663 9.49843 27.9503 7.70826 26.6667 6.36C27.2745 4.73134 27.2315 2.93113 26.5467 1.33333C26.5467 1.33333 24.9733 0.866665 21.3333 3.30666C18.2773 2.47843 15.056 2.47843 12 3.30666C8.36 0.866665 6.78666 1.33333 6.78666 1.33333C6.10183 2.93113 6.05886 4.73134 6.66666 6.36C5.3735 7.71826 4.65669 9.52462 4.66666 11.4C4.66666 18.6267 9.06666 20.2133 13.2533 20.7333C12.8147 21.1866 12.4763 21.7272 12.2604 22.3199C12.0445 22.9126 11.9557 23.5441 12 24.1733V29.3333"
                      stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_109">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="stroke-black hover:stroke-primary transition-colors duration-200 ease-in-out">
                  <path
                    d="M21.3333 10.6667C23.4551 10.6667 25.4899 11.5095 26.9902 13.0098C28.4905 14.5101 29.3333 16.5449 29.3333 18.6667V28H24V18.6667C24 17.9594 23.719 17.2811 23.2189 16.781C22.7189 16.2809 22.0406 16 21.3333 16C20.6261 16 19.9478 16.2809 19.4477 16.781C18.9476 17.2811 18.6667 17.9594 18.6667 18.6667V28H13.3333V18.6667C13.3333 16.5449 14.1762 14.5101 15.6765 13.0098C17.1768 11.5095 19.2116 10.6667 21.3333 10.6667Z"
                    stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 12H2.66666V28H8V12Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M5.33333 7.99999C6.80609 7.99999 8 6.80608 8 5.33332C8 3.86056 6.80609 2.66666 5.33333 2.66666C3.86057 2.66666 2.66666 3.86056 2.66666 5.33332C2.66666 6.80608 3.86057 7.99999 5.33333 7.99999Z"
                    stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
          </ul>
          <button class="btn btn-primary rounded-sm">Descargar CV</button>
        </div>
      </div>

      <div class="h-full -z-50">
        <iframe src="https://my.spline.design/robotfollowcursorforlandingpage-c350a36ea0746e001c43284802342ee2/"
          frameborder="0" width="100%" height="100%"></iframe>
      </div>

      <div class="absolute top-1/2 -translate-y-1/2 right-0 hidden md:flex flex-col items-end">
        <div class="w-2/3 max-w-md text-lg font-thin">
          <p>
            Soy ingeniero en sistemas computacionales con experiencia en desarrollo frontend,
            especializado en Vue.js y familiarizado con TypeScript. Me apasiona crear interfaces
            intuitivas y funcionales que mejoren la experiencia del usuario.
          </p>
        </div>
      </div>
    </section>

    <section class="py-18" id="projectsss">
      <h2 class="">Proyectos</h2>

      <div class="space-y-12 mt-18">
        <CarouselComponent />
        <RouterLink :to="'/projects'" class="flex gap-3 btn items-center bg-primary hover:bg-primary/90 text-white group rounded-md justify-center">
          Ver todos los proyectos
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6 group-hover:scale-110 transition-transform duration-300 ease-in-out">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </RouterLink>
      </div>
    </section>

    <section class="py-18" id="projects">
      <h2 class="">Proyectos</h2>
      <RouterLink :to="'/project/' + project.id" v-for="project in projects" :key="project.id"
        class="space-y-12 block mt-18">
        <CardProjectsHome v-bind="project" />
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
