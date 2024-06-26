<script setup lang="ts">
import { ref } from 'vue'
import destinations from '../data/destinations.json'

interface Destination {
  name: string
  distance: string
  traveltime: string
  description: string
  picture: string
}
const destinationTyped: Destination[] = destinations
const selectedDestination = ref<Destination>(destinationTyped[0])

function select(destination: Destination) {
  selectedDestination.value = destination
}
</script>

<template>
  <section
    class="min-h-screen bg-cover flex flex-col items-center pt-28 md:pt-36 lg:pt-48 px-6 md:px-8 bg-fixed bg-[url('/destination/background-destination-portrait.jpg')] lg:bg-[url('/destination/background-destination.jpg')]"
  >
    <h1
      class="lg:w-[1110px] md:max-w-[514px] flex justify-center text-center md:self-start text-xs text-white flex gap-6"
    >
      <span class="font-bold tracking-[4.72px] text-white/25">01</span>PICK YOUR DESTINATION
    </h1>
    <article
      class="md:max-w-[514px] lg:max-w-[1110px] flex flex-col lg:flex-row items-center gap-x-8 py-12 md:py-36"
    >
      <img :src="selectedDestination.picture" class="w-[150px] md:w-[300px] lg:w-1/2 lg:p-7" />
      <div class="lg:w-1/2 lg:px-12 flex flex-col items-center lg:items-start pt-16 lg:pb-8">
        <ul class="flex items-center w-auto text-nav gap-8 pb-6 md:pb-10">
          <li v-for="destination in destinations" :key="destination.name">
            <button
              @click="select(destination)"
              class="flex items-center pb-3 border-b-[3px] duration-700 ease-in-out"
              :class="{
                'text-white border-b-white': destination.name === selectedDestination.name,
                'text-light-blue border-b-transparent hover:border-b-white/50':
                  destination.name !== selectedDestination.name
              }"
            >
              {{ destination.name }}
            </button>
          </li>
        </ul>
        <h2 class="text-white text-l uppercase">{{ selectedDestination.name }}</h2>
        <p class="text-light-blue text-body text-center lg:text-left">
          {{ selectedDestination.description }}
        </p>
        <div class="h-px bg-white relative z-0 opacity-25 w-full my-6 md:my-10"></div>
        <div class="flex flex-col md:flex-row w-full text-center lg:text-left gap-y-6 md:gap-y-8">
          <div class="md:w-1/2">
            <p class="text-light-blue text-subs pb-2">AVG. DISTANCE</p>
            <p class="text-white text-subl uppercase">{{ selectedDestination.distance }}</p>
          </div>
          <div class="md:w-1/2">
            <p class="text-light-blue text-subs pb-2">EST. TRAVEL TIME</p>
            <p class="text-white text-subl uppercase">{{ selectedDestination.traveltime }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
