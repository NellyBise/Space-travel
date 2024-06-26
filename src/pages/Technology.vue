<script setup lang="ts">
import { ref } from 'vue'
import technologies from '../data/technologies.json'

interface Technology {
  name: string
  description: string
  picturePortrait: string
  id: number
}

const technologyTyped: Technology[] = technologies
const selectedTechnology = ref<Technology>(technologyTyped[0])

function select(technology: Technology) {
  selectedTechnology.value = technology
}
</script>

<template>
  <section
    class="min-h-screen bg-cover flex flex-col items-center pt-28 md:pt-36 lg:pt-48 lg:w-full lg:pl-[165px] bg-right md:bg-center bg-fixed bg-[url('/technology/background-technology.jpg')]"
  >
    <h1
      class="md:max-w-[514px] flex justify-center text-center md:self-start text-xs text-white flex md:px-8 lg:px-0 gap-6"
    >
      <span class="font-bold tracking-[4.72px] text-white/25">03</span>SPACE LAUNCH 101
    </h1>
    <article
      class="w-full flex flex-col-reverse lg:flex-row items-center gap-x-8 py-20 md:py-36 lg:py-[91px]"
    >
      <div class="lg:w-1/2 flex flex-col lg:flex-row lg:gap-8 items-center pt-8 lg:pb-8">
        <ul
          class="flex lg:flex-col items-center w-auto text-s gap-4 lg:gap-8 pb-8 lg:pb-0 md:pb-10"
        >
          <li v-for="technology in technologies" :key="technology.name">
            <button
              class="flex items-center justify-center h-10 w-10 md:w-14 md:h-14 lg:h-20 lg:w-20 rounded-full border border-white/50 hover:border-white duration-700 ease-in-out"
              :class="{
                'text-dark-blue bg-white': technology.name === selectedTechnology?.name,
                'text-white': technology.name !== selectedTechnology?.name
              }"
              @click="select(technology)"
            >
              {{ technology.id }}
            </button>
          </li>
        </ul>
        <div class="text-center lg:text-left max-w-[514px] px-6 md:px-0">
          <p class="text-white/50 text-s uppercase mb-2 lg:mb-0">THE TERMINOLOGY...</p>
          <h2 class="text-white text-m uppercase mb-2 lg:mb-0">{{ selectedTechnology.name }}</h2>
          <p class="text-light-blue text-body">
            {{ selectedTechnology.description }}
          </p>
        </div>
      </div>
      <img
        :src="selectedTechnology.picturePortrait"
        class="w-full lg:w-1/2 h-[258px] md:h-[357px] lg:h-[600px] object-cover"
        :alt="selectedTechnology.name"
      />
    </article>
  </section>
</template>
