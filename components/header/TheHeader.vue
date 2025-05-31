<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const url = ref('')
const authToken = ref('')
const userData = ref()

const getUserInfo = async () => {
  const responseUser = await $fetch(`${ config.public.apikey }/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': authToken.value
      }
    })

    userData.value = responseUser
}

onMounted(async () => {
  authToken.value = GetCookie('authtoken')
  
  if (!authToken.value) {
    if (route.query.code) {
    const response = await $fetch(`${ config.public.apikey }/auth/google/callback?code=${ route.query.code }`) 

    SetCookie('authtoken', response.authToken)
    authToken.value = response.authToken

    await router.replace({ query: {} })

    getUserInfo()
  }
  else {
    const response = await $fetch(`${ config.public.apikey }/auth/google/url`)
  
    url.value = response.url
  }
  }
  else {
    getUserInfo()
  }
})

const googleAuth = () => {
  window.open(url.value, '_self')
}
</script>

<template>
  <header class="header bg-[#FDFFFD] border-b-2 border-[#050E011A]">
    <nav class="header__content flex items-center justify-between py-7 px-16">
      <div class="header__logo cursor-pointer">
        <h1 class="text-[#050E0154] text-3xl font-collvetica leading-5">
          Death By <br>
          <span class="text-[#2CAE28] text-4xl">AI CO Founder</span>
        </h1>
      </div>
      <div v-if="!authToken" class="header__buttons flex gap-8">
        <button @click="googleAuth" class="capitalize text-[#050E01] font-medium text-3xl font-inter-tight cursor-pointer">sign up</button>
        <button @click="googleAuth" class="capitalize text-[#F2F7F1] bg-[#050E01] py-5 px-10 rounded-full font-medium text-3xl font-inter-tight cursor-pointer">log in</button>
      </div>
      <div v-else-if="authToken && userData" class="header__user flex items-center gap-6">
        <h2 class="text-3xl text-[#050E01] font-medium font-inter-tight">{{ userData.nickname }}</h2>
        <img class="w-14 h-14 rounded-xl" :src="userData.avatarUrl" alt="User icon">
      </div>
    </nav>
  </header>
</template>

<style>

</style>