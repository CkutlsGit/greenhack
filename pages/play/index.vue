<script setup lang="ts">
</script>

<template>
  <div class=" bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-4">
    <section
      class="relative w-full max-w-8xl h-[80vh] rounded-[10px] shadow-2xl overflow-hidden"
    >
      <img
        src="@/assets/img/earth-play-img.png"
        alt="Earth"
        class="absolute inset-0 h-full w-full object-contain"
      />

      <div class="relative z-10 flex flex-col h-full p-5 text-white">
        <header class="flex justify-center mb-8">
          <span
            class="px-6 py-2 rounded-full bg-white/20 backdrop-blur font-mono text-lg"
            >01:00</span
          >
        </header>

        <div class="flex flex-1 items-center justify-center">
          <div
            class="bg-white p-6 rounded-lg shadow-lg text-black max-w-2xl w-full flex flex-col space-y-6"
          >
            <!-- Left Section -->
            <div class="flex-1">
              <h2 class="text-2xl text-[#050E01] text-3xl font-inter-tight text-3xl  mb-4">Rain Village Attacks</h2>
              <p class="text-[#bfc2be] font-medium text-2xl font-inter-tight">
            Hidden Leaf Village, the birthplace of Naruto, the main character, has
            been attacked by the legendary Hidden Rain Village and is dominating
            at the moment.
              </p>
            </div>

            <!-- Right Section -->
            <div class="flex-1">
              <h3 class="text-3xl text-[#050E01] text-3xl font-inter-tight mb-2">Your Solution</h3>
              <textarea
              class="w-full h-24 p-3 rounded-md resize-none bg-[#f1f3f0] text-[#7e817e] font-medium focus:outline-none focus:ring-0"
              placeholder="Enter your plan"
              ></textarea>
              <div class="flex items-center mt-4 justify-between space-x-4">
                <button
                class="px-4 py-2 bg-[#f1f3f0] text-[#bfc2be] font-inter-tight rounded-lg hover:bg-gray-300 cursor-pointer transition-all duration-200 font-medium text-1xl"
                >
                Skip AI
                </button>
                <div class="flex-1 flex justify-center">
                <div class="inline-block text-base bg-[#f1f3f0] text-[#bfc2be] font-inter-tight rounded-lg px-3 py-2">
                  1 / 5
                </div>
                </div>
                <button
                class="px-4 py-2 bg-[#050e01] text-white rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  </div>
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
</style>
