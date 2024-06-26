<script setup lang="ts"></script>

<template>
  <section
    class="h-[880px] md:h-[1136px] min-h-screen bg-cover flex flex-col lg:flex-row justify-center lg:items-center pt-24 lg:pt-40 px-6 md:px-8 bg-fixed bg-[url('/home/background-home-portrait.png')] lg:bg-[url('/home/background-home.png')]"
  >
    <article
      class="lg:w-1/2 lg:max-w-[555px] md:max-w-[512px] md:mx-auto lg:mx-0 text-center lg:text-left"
    >
      <h1 class="text-xs text-light-blue">SO, YOU WANT TO TRAVEL TO</h1>
      <h2 class="text-white text-xl py-6">SPACE</h2>
      <p class="text-light-blue text-body">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>
    </article>
    <article class="lg:w-1/2 lg:max-w-[555px] flex justify-center lg:justify-end">
      <div
        class="mt-8 lg:mt-0 lg:translate-x-10 relative flex justify-center items-center w-96 h-96"
      >
        <RouterLink
          to="/destination"
          class="absolute flex justify-center items-center text-s text-dark-blue w-36 md:w-[272px] h-36 md:h-[272px] rounded-full bg-white duration-500 outline outline-transparent outline-[80px] hover:outline-white/10 hover:text-dark-blue/50"
          >EXPLORE</RouterLink
        >
      </div>
    </article>
  </section>
</template>
