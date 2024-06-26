<script setup lang="ts">
import { ref } from 'vue'
import crew from '../data/crew.json'

interface CrewMember {
  name: string
  function: string
  description: string
  picture: string
}
const crewTyped: CrewMember[] = crew
const memberSelected = ref<CrewMember>(crewTyped[0])

function select(member: CrewMember) {
  memberSelected.value = member
}
</script>

<template>
  <section
    class="h-[880px] md:h-[1077px] lg:min-h-screen overflow-hidden bg-cover flex flex-col items-center pt-28 md:pt-36 lg:pt-48 px-6 md:px-8 bg-bottom bg-fixed bg-[url('/crew/background-crew.jpg')]"
  >
    <h1
      class="lg:w-[1110px] md:max-w-[514px] flex justify-center text-center md:self-start text-xs text-white flex gap-6"
    >
      <span class="font-bold tracking-[4.72px] text-white/25">02</span>MEET YOUR CREW
    </h1>
    <article
      class="px-0 lg:px-6 lg:px-0 md:max-w-[512px] lg:max-w-[1110px] flex flex-col h-screen lg:flex-row items-center gap-x-8 mt-6 lg:my-36"
    >
      <div
        class="lg:w-1/2 lg:h-4/5 justify-between pt-8 lg:pb-8 flex flex-col md:h-[295px] lg:h-screen"
      >
        <div class="text-center flex flex-col justify-center lg:text-left">
          <p class="text-white/50 text-s uppercase md:pb-2">{{ memberSelected.function }}</p>
          <h2 class="text-white text-m uppercase pb-6 lg:pb-0">{{ memberSelected.name }}</h2>
          <p class="text-light-blue text-body">{{ memberSelected.description }}</p>
        </div>
        <ul
          class="lg:h-1/6 flex w-auto items-end justify-center lg:justify-start gap-4 lg:gap-8 pt-16 md:pt-12 lg:pt-0"
        >
          <li v-for="member in crew" :key="member.name">
            <button
              @click="select(member)"
              :aria-label="member.name"
              class="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full duration-500 ease-in-out"
              :class="{
                'bg-white hover:bg-white': member.name === memberSelected.name,
                'bg-white/50 hover:bg-white/70': member.name !== memberSelected.name
              }"
            ></button>
          </li>
        </ul>
      </div>
      <div class="w-[271px] md:w-[446px] lg:w-1/2 lg:m-7 relative mt-8 md:mt-16">
        <img :src="memberSelected.picture" />
        <div class="absolute bottom-0 w-full h-48 bg-gradient-to-t from-dark-blue from-15%"></div>
      </div>
    </article>
  </section>
</template>
