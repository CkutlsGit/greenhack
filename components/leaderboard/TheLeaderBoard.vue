<script setup>
const config = useRuntimeConfig()

const leaderboardData = ref()

onMounted(async () => {
  const response = await $fetch(`${ config.public.apikey }/leaderboard`)

  leaderboardData.value = response
  console.log(leaderboardData.value)
})
</script>

<template>
  <article class="bg-[#FDFFFD] rounded-3xl p-6 shadow-md h-[800px] w-1/5">
    <h2 class="text-3xl text-[#050E01] mb-8 font-collvetica">Leaderboard</h2>
    <div
      class="grid grid-cols-[50px_1fr_80px_50px] gap-x-2.5 py-2.5 border-b border-[#050E011A] items-center font-bold"
    >
      <div
        class="overflow-hidden text-ellipsis whitespace-nowrap text-left font-inter-tight font-medium text-xl"
      >
        Rank
      </div>
      <div
        class="overflow-hidden text-ellipsis whitespace-nowrap text-left font-inter-tight font-medium text-xl"
      >
        Username
      </div>
      <div
        class="overflow-hidden text-ellipsis whitespace-nowrap text-left font-inter-tight font-medium text-xl"
      >
        Points
      </div>
      <div class="overflow-hidden text-ellipsis whitespace-nowrap text-left">
        <img
          src="/assets/img/icon-green.svg"
          alt="Green icon"
          class="block w-5 h-5"
        />
      </div>
    </div>
    <ul
    v-if="leaderboardData"  
    class="grid grid-cols-[50px_1fr_80px_50px] gap-x-2.5 py-2.5 border-b border-gray-200 items-center last:border-b-0"
    >
    <LeaderboardLeaderBoardItem v-for="(user, index) of leaderboardData.entries" :key="user.user.id" :user="user" :place="index + 1" />
    </ul>
  </article>
</template>

<style></style>
