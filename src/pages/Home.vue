<script setup lang="ts">

</script>

<template>
  <section class="min-h-screen bg-cover flex flex-col lg:flex-row justify-center lg:items-center pt-24 lg:pt-40 px-6 md:px-8 bg-[url('/home/background-home-mobile.jpg')] md:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')]">
    <article class="lg:w-1/2 lg:max-w-[555px] md:max-w-[512px] md:mx-auto lg:mx-0 text-center lg:text-left">
      <h1 class="text-xs text-light-blue">SO, YOU WANT TO TRAVEL TO</h1>
      <h2 class="text-white text-xl py-6">SPACE</h2>
      <p class="text-light-blue text-body">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </article>
    <article class="lg:w-1/2 lg:max-w-[555px] flex justify-center lg:justify-end">
    <div class="mt-16 md:mt-8 lg:mt-0 lg:translate-x-10 relative flex justify-center items-center w-96 h-96">
  <h2 class="flex justify-center items-center text-s text-dark-blue w-36 md:w-72 h-36 md:h-72 rounded-full bg-white z-0">
    EXPLORE
  </h2>
  <RouterLink to="/destination" class="absolute w-[232px] md:w-96 h-[232px] md:h-96 z-10 bg-transparent rounded-full flex justify-center items-center hover:bg-white/10 duration-500 ease-in-out"></RouterLink>
</div>
    </article>
  </section>
  
</template>
