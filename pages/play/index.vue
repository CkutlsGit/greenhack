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
              <h2 class="text-2xl font-bold mb-4">Rain Village Attacks</h2>
              <p class="text-base">
          Hidden Leaf Village, the birthplace of Naruto, the main character, has
          been attacked by the legendary Hidden Rain Village and is dominating
          at the moment.
              </p>
            </div>

            <!-- Right Section -->
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-2">Your Solution</h3>
              <textarea
              class="w-full h-24 p-3  rounded-md resize-none bg-[#f1f3f0]"
              placeholder="Enter your plan"
              ></textarea>
              <div class="flex justify-between items-center mt-4">
              <button
                class="px-4 py-2 bg-[#f1f3f0] rounded-md hover:bg-gray-400"
              >
                Skip the AI
              </button>
              <div class="text-sm text-gray-500 bg-[#f1f3f0] px-2 py-1 rounded-md">
                1 / 5
              </div>
              <button
                class="px-4 py-2 bg-[#050e01] text-white rounded-md hover:bg-blue-600"
              >
                Enter the answer →
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
