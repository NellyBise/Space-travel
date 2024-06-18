<script setup lang="ts">
import logo from '../assets/shared/logo.svg'

defineOptions({
  name: 'Header'
})
</script>

<template>
  <header class="absolute top-4 right-0 h-24 pl-16 w-screen flex justify-between items-center">
    <div class="text-white flex-shrink-0"><img :src="logo" class="text-white h-12 w-12"/></div>
    <div class="flex-grow relative left-16 z-10 h-px bg-white mx-8 opacity-25"></div>
    <nav class="bg-white/5 backdrop-blur-xl h-24 flex items-center">
      <ul class="text-nav text-white gap-12 flex pr-16 pl-[159px]">
          <li><RouterLink to="/" class="hover:underline"><span class="font-bold">00 </span>HOME</RouterLink></li>
          <li><RouterLink to="/"><span class="font-bold">01 </span>DESTINATION</RouterLink></li>
          <li><RouterLink to="/"><span class="font-bold">02 </span>CREW</RouterLink></li>
          <li><RouterLink to="/"><span class="font-bold">03 </span>TECHNOLOGY</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>