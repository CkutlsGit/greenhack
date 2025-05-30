<script setup>
const config = useRuntimeConfig()
const route = useRoute()

const url = ref('')

onMounted(async () => {
  if (route.query.code) {
    const response = await $fetch(`${ config.public.apikey }/auth/google/callback?code=${ route.query.code }`) 

    console.log(response)
  }
  else {
    const response = await $fetch(`${ config.public.apikey }/auth/google/url`)
  
    url.value = response.url
  }
})

const googleAuth = () => {
  window.open(url.value, '_self')
}
</script>

<template>
  <header class="header bg-[#FDFFFD] border-b-2 border-[#050E011A]">
    <nav class="header__content flex items-center justify-between py-7 px-16">
      <div class="header__logo">
        <h1 class="text-[#050E0154] text-3xl font-collvetica leading-5">
          Death By <br>
          <span class="gradient-logo text-4xl">AI CO Founder</span>
        </h1>
      </div>
      <div class="header__buttons flex gap-8">
        <button @click="googleAuth" class="capitalize text-[#050E01] font-medium text-3xl font-inter-tight cursor-pointer">sign up</button>
        <button @click="googleAuth" class="capitalize text-[#F2F7F1] bg-[#050E01] py-5 px-10 rounded-full font-medium text-3xl font-inter-tight cursor-pointer">log in</button>
      </div>
    </nav>
  </header>
</template>

<style>

</style>