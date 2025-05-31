<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const evaluations = computed(() => gameStore.result?.evaluations ?? [])
const problems    = computed(() => gameStore.result?.problems    ?? [])
const solutions   = computed(() => gameStore.result?.solutions   ?? [])

const isMobile  = ref(false)
const isLaptop  = ref(false)
const isDesktop = ref(false)
const currentProblemIndex = ref(0)

/* speech */
const synth  = window.speechSynthesis
const voices = ref<SpeechSynthesisVoice[]>([])
const speak = (t: string) => {
  if (!t.trim()) return
  synth.cancel()
  const u = new SpeechSynthesisUtterance(t)
  u.voice =
    voices.value.find(v => v.lang.startsWith('en') && v.name.includes('Google')) ??
    voices.value.find(v => v.lang.startsWith('en')) ??
    voices.value.find(v => v.default)
  synth.speak(u)
}
const speakCurrent = () => {
  const txt = [evaluations.value[0]?.feedback, evaluations.value[0]?.future]
    .filter(Boolean)
    .join('. ')
  speak(txt)
}

onMounted(() => {
  const initVoices = () => {
    voices.value = synth.getVoices()
    speakCurrent()
  }
  voices.value = synth.getVoices()
  voices.value.length ? speakCurrent() : (synth.onvoiceschanged = initVoices)

  updateDeviceType()
  window.addEventListener('resize', updateDeviceType)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateDeviceType)
  synth.cancel()
})

watch(currentProblemIndex, i => {
  const txt = [evaluations.value[i]?.feedback, evaluations.value[i]?.future]
    .filter(Boolean)
    .join('. ')
  speak(txt)
})

const updateDeviceType = () => {
  const w = window.innerWidth
  isMobile.value  = w <= 768
  isLaptop.value  = w > 768 && w <= 1024
  isDesktop.value = w > 1024
}
</script>

<template>
  <div class="bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-4">
    <section class="relative w-full max-w-8xl h-[80vh] rounded-[10px] shadow-2xl overflow-hidden">
      <img
        src="@/assets/img/storm-img.png"
        alt="Earth"
        class="absolute inset-0 h-full w-full object-contain"
      />

      <div
        class="absolute bg-white p-4 rounded shadow-lg z-20 w-[400px] h-[150px] flex items-center overflow-hidden"
        :class="{
          'bottom-[520px] right-[200px]': isDesktop,
          'bottom-[300px] right-[100px]': isLaptop,
          'bottom-[20px]  right-[20px]': isMobile
        }"
      >
        <div class="flex flex-col items-start overflow-y-auto h-full w-full">
          <span class="text-2xl text-[#050E01] font-bold font-inter-tight mb-2">User tries to…</span>
          <p class="text-[#a6a9a5] font-bold font-inter-tight whitespace-pre-line">
            {{ solutions[currentProblemIndex]?.text }}
          </p>
        </div>
      </div>

      <div
        class="absolute top-10 left-10 bg-white p-6 rounded shadow-md z-20 w-[40%] h-[70%] overflow-auto flex flex-col"
      >
        <div class="flex items-center mb-4">
          <img
            src="@/assets/img/robot-img.png"
            alt="Character Avatar"
            class="w-16 h-16 rounded-full mr-4 bg-blue-500"
          />
          <h3 class="text-2xl text-[#2CAE28] font-bold text-3xl font-inter-tight">
            AI CO Founder
          </h3>
        </div>

        <div class="flex-1 overflow-y-auto space-y-6 pr-2">
          <div v-if="problems.length > 0">
            <h4 class="text-[#050E01] text-xl font-semibold mb-1">
              {{ problems[currentProblemIndex].title }}
            </h4>
            <p class="text-[#a6a9a5] font-medium text-2xl font-inter-tight">
              {{ evaluations[currentProblemIndex]?.feedback }}
            </p>
            <p class="text-[#a6a9a5] font-medium text-2xl font-inter-tight mb-4">
              {{ evaluations[currentProblemIndex]?.future }}
            </p>
            <p class="text-[#2CAE28] font-semibold mb-1">
              Estimation — {{ evaluations[currentProblemIndex]?.score }} / 100,
              eco {{ evaluations[currentProblemIndex]?.eco }}
            </p>
          </div>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <button
            class="text-4xl text-[#050E01] font-inter-tight pl-10 pr-10 bg-gray-200 font-bold text-lg py-4 px-6 rounded-full hover:bg-gray-300 transition"
            :disabled="currentProblemIndex === 0"
            @click="currentProblemIndex--"
          >
            Previous
          </button>

          <span class="text-green-500 font-bold text-2xl text-[#050E01] font-inter-tight">
            {{ currentProblemIndex + 1 }} / {{ problems.length }}
          </span>

          <button
            class="pl-10 pr-8 bg-black text-4xl text-[#050E01] font-bold text-lg font-inter-tight text-white py-4 px-6 rounded-full hover:bg-gray-800 transition flex items-center"
            :disabled="currentProblemIndex === problems.length - 1"
            @click="currentProblemIndex++"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 ml-3"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <img
        src="@/assets/img/robot-img.png"
        alt="Robot"
        class="robot-icon"
      />
    </section>
  </div>
</template>

<style scoped>
textarea::-webkit-scrollbar { width: 8px; }
textarea::-webkit-scrollbar-track { background: transparent; }
textarea::-webkit-scrollbar-thumb { border-radius: 9999px; background: rgba(255, 255, 255, 0.4); }
.robot-icon { position: absolute; bottom: 10px; right: 10px; width: 500px; height: 500px; z-index: 10; }
.font-inter-tight { font-family: 'Inter', sans-serif; }
button { transition: all 0.3s ease; }
span { display: flex; align-items: center; justify-content: center; }
</style>
