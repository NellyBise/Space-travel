<script setup lang="ts">
import { ref, onMounted } from 'vue';
import logo from '../assets/shared/logo.svg'
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'

defineOptions({
  name: 'Header',
})
const isOpen = ref<boolean>(false)
  onMounted(() => {
  if (window.innerWidth >= 768) {
    isOpen.value = true
  }
})
</script>

<template>
  <header class="absolute right-0 lg:mt-10 pl-16 w-screen flex justify-between items-center h-[88px] md:h-24">
    <RouterLink to="/" class="text-white flex-shrink-0"><img :src="logo" alt="" class="text-white h-10 w-10 md:h-12 md:w-12"/></RouterLink>
    <div class="hidden lg:block flex-grow relative left-16 z-10 h-px bg-white mx-8 opacity-25"></div>
    <nav>
      <ul :class="{
        'flex flex-col fixed font-barlow tracking-[2px] md:relative p-0 top-0 right-0 md:flex-row md:justify-center md:items-center w-64 md:w-auto h-screen md:h-full bg-white/5 backdrop-blur-xl text-nav text-white md:gap-12 flex md:pr-16 pl-6 md:pl-[159px] transform transition-transform duration-300 ease-in-out': true,
        'translate-x-0 pointer-events-auto': isOpen,
        'translate-x-full pointer-events-none': !isOpen
      }">
        <button class="w-6 mr-2.5 mt-8 mb-12 self-end md:hidden" @click="isOpen = !isOpen"><img :src="iconClose" alt="cliquer pour fermer le menu de navigation"/></button>
        <li><RouterLink to="/" class="md:h-24 flex items-center border-r-[3px] md:border-r-0 md:border-b-[3px] border-r-transparent md:border-b-transparent md:hover:border-b-white/50 hover:border-r-white/50 duration-500 ease-in-out gap-3 my-4 md:my-0"><span class="font-bold">00</span>HOME</RouterLink></li>
        <li><RouterLink to="/destination" class="md:h-24 flex items-center border-r-[3px] md:border-r-0 md:border-b-[3px] border-r-transparent md:border-b-transparent md:hover:border-b-white/50 hover:border-r-white/50 duration-500 ease-in-out gap-3 my-4 md:my-0"><span class="font-bold">01</span>DESTINATION</RouterLink></li>
        <li><RouterLink to="/" class="md:h-24 flex items-center border-r-[3px] md:border-r-0 md:border-b-[3px] border-r-transparent md:border-b-transparent md:hover:border-b-white/50 hover:border-r-white/50 duration-500 ease-in-out gap-3 my-4 md:my-0"><span class="font-bold">02</span>CREW</RouterLink></li>
        <li><RouterLink to="/" class="md:h-24 flex items-center border-r-[3px] md:border-r-0 md:border-b-[3px] border-r-transparent md:border-b-transparent md:hover:border-b-white/50 hover:border-r-white/50 duration-500 ease-in-out gap-3 my-4 md:my-0"><span class="font-bold">03</span>TECHNOLOGY</RouterLink></li>
      </ul>
    </nav>
    <div className="w-6 mr-2.5 md:hidden">
      <button v-if="!isOpen" @click="isOpen = !isOpen">
        <img :src="iconHamburger" alt="Cliquer pour ouvrir le menu de navigation"/>
      </button>
    </div>
  </header>
</template>