<script setup>
onMounted(() => {
  document.body.style.overflowY = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflowY = 'unset'
})
</script>

<template>
  <section class=" bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-4">
    <div
      class="relative w-full max-w-8xl h-[90vh] rounded-[10px] shadow-2xl overflow-hidden"
    >
      <img
        src="@/assets/img/storm-img.png"
        alt="Earth"
        class="absolute inset-0 h-full w-full object-contain"
      />
      <div class=" pl-40 pt-2">
        <h2 class="text-[#2CAE28] font-medium font-inter-tight text-3xl py-2 px-3 bg-[#2CAE281A] rounded-xl w-12 mb-4">AI</h2>
        <div class="relative z-[10000] w-[800px] bg-[#FDFFFD] rounded-3xl p-6">
          <h1 class="text-[#050E01] font-collvetica text-4xl mb-4">The Results</h1>
          <ul>
            <li class="flex items-center justify-between bg-[#050E010D] rounded-2xl py-4 px-8 mb-2">
              <h2 class="text-[#050E01] font-inter-tight font-semibold text-4xl opacity-50">rain village attacks</h2>
              <h2 class="text-[#2CAE28] font-collvetica text-4xl">+10 pts</h2>
            </li>
            <li class="flex items-center justify-between bg-[#050E010D] rounded-2xl py-4 px-8 mb-2">
              <h2 class="text-[#050E01] font-inter-tight font-semibold text-4xl opacity-50">rain village attacks</h2>
              <div class="flex items-center gap-8">
                <h2 class="flex items-center text-[#EB5E45] font-collvetica text-4xl">+1 eco pt <img class="ml-2" src="@/assets/img/icon-green.svg"></h2>
                <h2 class="text-[#EB5E45] font-collvetica text-4xl">+10 pts</h2>
              </div>
            </li>
            <li class="flex items-center justify-between bg-[#050E010D] rounded-2xl py-4 px-8 mb-2">
              <h2 class="text-[#050E01] font-inter-tight font-semibold text-4xl opacity-50">rain village attacks</h2>
              <h2 class="text-[#2CAE28] font-collvetica text-4xl">+10 pts</h2>
            </li>
            <li class="flex items-center justify-between bg-[#050E010D] rounded-2xl py-4 px-8 mb-2">
              <h2 class="text-[#050E01] font-inter-tight font-semibold text-4xl opacity-50">rain village attacks</h2>
              <div class="flex items-center gap-8">
                <h2 class="flex items-center text-[#12880F] font-collvetica text-4xl">+1 eco pt <img class="ml-2" src="@/assets/img/icon-green.svg"></h2>
                <h2 class="text-[#2CAE28] font-collvetica text-4xl">+10 pts</h2>
              </div>
            </li>
            <li class="flex items-center justify-between bg-[#050E010D] rounded-2xl py-4 px-8 mb-2">
              <h2 class="text-[#050E01] font-inter-tight font-semibold text-4xl opacity-50">rain village attacks</h2>
              <h2 class="text-[#2CAE28] font-collvetica text-4xl">+10 pts</h2>
            </li>
          </ul>
        </div>
        <h2 class="relative z-[10000] mt-4 p-6 bg-[#FDFFFD] rounded-3xl text-[#2167E0] text-3xl font-collvetica w-[700px]">An example of a real project that delivered results</h2>
        <h2 class="relative z-[10000] mt-2 p-2 bg-[#FDFFFD] rounded-3xl text-[#050E01] text-3xl font-collvetica w-[500px] flex items-center">
          <img class="mr-6" src="@/assets/img/icon-heart.svg">
          Your startup survived!
        </h2>
        <!-- <h2 class="releative z-[10000] mt-2 p-2 bg-[#FDFFFD] rounded-3xl text-[#050E01] text-3xl font-collvetica w-[500px] flex items-center">
          <img class="mr-6" src="@/assets/img/icon-death.svg">
          Your startup is dead
        </h2> -->
      </div>
      
      <NuxtLink to="/">
        <button class="absolute right-20 bottom-10 flex items-center gap-4 text-[#FDFFFD] font-semibold text-3xl py-5 px-8 font-inter-tight bg-[#2CAE28] rounded-full z-[10000] cursor-pointer">
        Return to the lobby
        <img src="@/assets/img/array-forward-icon.svg">
      </button>
      </NuxtLink>
      <img
        src="@/assets/img/robot-img.png"
        alt="Robot"
        class="robot-icon"
      />
  </div>
  </section>
</template>

<style scoped>
/**** Custom scrollbar for textarea ****/
textarea::-webkit-scrollbar {
  width: 8px;
}
textarea::-webkit-scrollbar-track {
  background: transparent;
}
textarea::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.4);
}

.robot-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 500px;
  height: 500px;
  z-index: 10;
}
</style>
