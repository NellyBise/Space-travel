<script setup lang="ts">
 import { ref } from 'vue';
 import crew from '../data/crew.json'
 const memberSelected = ref(crew[0])
 function select(member) {
    memberSelected.value = member
}
</script>


<template>
  <section class="min-h-screen overflow-hidden bg-cover flex flex-col items-center pt-28 lg:pt-40 px-6 md:px-8 bg-[url('/crew/background-crew-mobile.jpg')] md:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')]">
    <h1 class="lg:w-[1110px] md:max-w-[514px] flex justify-center text-center md:self-start text-xs text-white flex gap-6"><span class="font-bold tracking-[4.72px] text-white/25">02</span>MEET YOUR CREW</h1>
    <article class="px-0 lg:px-6 lg:px-0 md:max-w-[512px] lg:max-w-[1110px] flex flex-col h-screen lg:flex-row items-center gap-x-8 py-6 lg:py-36">
      <div class="lg:w-1/2 pt-8 lg:pb-8 flex flex-col h-[295px] lg:h-screen">
        <div class="lg:h-5/6 text-center flex flex-col justify-center lg:text-left">
            <p class="text-white/50 text-s uppercase">{{ memberSelected.function }}</p>
            <h2 class="text-white text-m uppercase pb-6 md:pb-0">{{ memberSelected.name }}</h2>
            <p class="text-light-blue text-body">{{ memberSelected.description }}</p>
        </div>
        <ul class="lg:h-1/6 flex w-auto items-end justify-center lg:justify-start gap-4 lg:gap-8 lg:pb-16 pt-24 md:pt-12 lg:pt-0">
            <button @click="select(member)" v-for="member in crew" :key="member.name"  class="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full hover:bg-white duration-500 ease-in-out"
            :class="{ 'bg-white': member.name === memberSelected.name, 'bg-white/50 ': member.name !== memberSelected.name }"></button>
        </ul>
      </div>
      <div class="w-[271px] md:w-[446px] lg:w-1/2 p-7 relative pt-20 md:pt-8">
        <img :src="memberSelected.picture" >
        <div class="absolute bottom-0 w-full h-48 bg-gradient-to-t from-dark-blue from-15%"></div>
      </div>
    </article>
  </section>
</template>
