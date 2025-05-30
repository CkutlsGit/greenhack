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

      <div class="relative z-10 flex flex-col h-full p-10 text-white">
      <header class="flex justify-center mb-8">
      <span
      class="px-6 py-2 rounded-full bg-white/20 backdrop-blur font-mono text-lg"
      >01:00</span
      >
      </header>

      <article class="mb-8 max-w-prose">
      <h1 class="text-4xl font-bold mb-4 leading-tight">
      Rain Village Attacks
      </h1>
      <p class="text-lg leading-relaxed">
      Hidden Leaf Village, the birthplace of Naruto, the main character, has
      been attacked by the legendary Hidden Rain Village and is
      dominating at the moment.
      </p>
      </article>

      <section class="flex flex-col gap-4 mt-auto">
      <label class="text-2xl font-semibold">Your Solution</label>
      <textarea
      rows="6"
      class="w-full rounded-xl p-4 bg-white/20 backdrop-blur placeholder-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
      placeholder="Enter your plan"
      ></textarea>

      <div class="flex items-center justify-between mt-4">
      <button
        class="px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
      >
        Skip the AI
      </button>

      <div class="font-semibold">1 / 5</div>

      <button
        class="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition flex items-center gap-2"
      >
        Enter the answer
        <span class="i-lucide-arrow-right" />
      </button>
      </div>
      </section>
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
