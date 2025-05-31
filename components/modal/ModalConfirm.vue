<script setup>
const config = useRuntimeConfig()

const mainStore = useMainStore()
const gameStore = useGameStore()

const loading = ref(false)

const startGameFunction = async () => {
  loading.value = true
  const response = await $fetch(`${ config.public.apikey }/ai/start`, {
    method: 'POST',
    body: JSON.stringify({
      location: mainStore.location,
      projectName: mainStore.projectName,
      idea: mainStore.idea 
    })
  })

  gameStore.problems = response.result.problems
  loading.value = false

  await navigateTo('/play')
}
</script>

<template>
  <div class="bg-[#050E010D] absolute mt-32 inset-0 w-full h-full overflow-y-hidden z-[10000] flex flex-col items-center">
    <div class="bg-[#FDFFFD] w-[600px] h-[420px] p-6 rounded-2xl mt-32 relative mx-auto">
      <h1 class="text-4xl font-collvetica text-[#050E01]">{{ mainStore.projectName }}</h1>
      <div class="flex items-center mt-6">
        <h2 class="text-[#050E01] opacity-50 font-semibold font-inter-tight text-2xl">Location</h2>
        <h2 class="ml-4 text-[#050E01] font-semibold font-inter-tight text-2xl">{{ mainStore.location }}</h2>
      </div>
      <div class="flex items-start mt-6">
        <h2 class="text-[#050E01] opacity-50 font-semibold font-inter-tight text-2xl max-w-full break-all">Main Idea</h2>
        <h2 class="ml-4 text-[#050E01] font-semibold font-inter-tight text-2xl">
          {{ mainStore.idea }}
        </h2>
      </div>
    </div>
    <div class=" absolute bottom-50 w-[600px] bg-[#FDFFFD] py-6 rounded-full px-10 z-[100000] flex items-center justify-center">
      <img @click="$emit('closeModal')" class="bg-[#050E011A] rounded-full p-5 mr-5 cursor-pointer" src="/public/icons/array-back-icon.svg" />
      <button @click="startGameFunction" :class="{ 'bg-[#050E01] opacity-30' : loading }" :disabled="loading" class="font-inter-tight font-semibold text-[#FDFFFD] text-3xl bg-[#2CAE28] rounded-full p-5 w-full cursor-pointer">Start a journey</button>
    </div>
  </div>
  <LoaderItemAi v-if="loading" />
</template>

<style></style>
