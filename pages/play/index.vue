<script setup>
const config = useRuntimeConfig()

const mainStore = useMainStore()
const gameStore = useGameStore()

const solutionUser = ref()

const stepProblem = ref(1)
const timeProblem = ref(60)
const timeInterval = ref()

const disableNextButton = ref(false)

onMounted(() => {
  timeFunction()
})

const timeFunction = () => {
  timeInterval.value = setInterval(() => {
    if (timeProblem.value > 0) {
      timeProblem.value -= 1
    }
    else {
      stepProblem.value += 1
      timeProblem.value = 60
      solutionUser.value = null
    }
}, 1000)
}

const nextStep = async () => {
  if (stepProblem.value === 5) {
    clearInterval(timeInterval.value)
    disableNextButton.value = true

    gameStore.solutions.push({
    text: solutionUser.value
  })

  const response = await $fetch(`${ config.public.apikey }/ai/evaluate`, {
    method: 'POST',
    body: JSON.stringify({
      startupInitDto: {
        location: mainStore.location,
        projectName: mainStore.projectName,
        idea: mainStore.idea
      },
      problemsPayload: {
        problems: [
          ...gameStore.problems
        ]
      },
      userSolutions: [
        ...gameStore.solutions
      ]
    })
  })
  console.log(response)
  gameStore.result = response.result

  await navigateTo('/chat')
  }
  timeProblem.value = 60
  
  gameStore.solutions.push({
    text: solutionUser.value
  })
  console.log(gameStore)
  solutionUser.value = null
  stepProblem.value += 1
}
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
            >{{ timeProblem }}</span
          >
        </header>

        <div class="flex flex-1 items-center justify-center">
          <div
            class="bg-white p-6 rounded-lg shadow-lg text-black max-w-2xl w-full flex flex-col space-y-6"
          >
            <!-- Left Section -->
            <div class="flex-1">
              <h2 class="text-[#050E01] text-3xl font-inter-tight mb-4">{{ gameStore.problems[stepProblem - 1].title }}</h2>
              <p class="text-[#bfc2be] font-medium text-2xl font-inter-tight">
                {{ gameStore.problems[stepProblem - 1].description }}
              </p>
            </div>

            <!-- Right Section -->
            <div class="flex-1">
              <h3 class="text-3xl text-[#050E01] font-inter-tight mb-2">Your Solution</h3>
              <textarea
              class="w-full h-24 p-3 rounded-md resize-none bg-[#f1f3f0] text-[#7e817e] font-medium focus:outline-none focus:ring-0"
              placeholder="Enter your plan" v-model="solutionUser"
              ></textarea>
              <div class="flex items-center mt-4 justify-between space-x-4">
                <button
                class="px-4 py-2 bg-[#f1f3f0] text-[#bfc2be] font-inter-tight rounded-lg hover:bg-gray-300 cursor-pointer transition-all duration-200 font-medium text-1xl"
                >
                Skip AI
                </button>
                <div class="flex-1 flex justify-center">
                <div class="inline-block text-base bg-[#f1f3f0] text-[#bfc2be] font-inter-tight rounded-lg px-3 py-2">
                  {{ stepProblem }} / 5
                </div>
                </div>
                <button
                class="px-4 py-2 bg-[#050e01] text-white rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-2"
                @click="nextStep" :disabled="disableNextButton"
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
