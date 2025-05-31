<script setup></script>

<template>
  <section>
    <div class="flex gap-4 px-10 pb-8">
      <div class="bg-[#FDFFFD] p-6 rounded-3xl min-w-[1000px]">
        <h1 class="text-4xl font-collvetica mb-6">AI Futures</h1>
        <div class="flex items-center gap-4">
          <div class="bg-[#387BDB1A] p-6 rounded-3xl w-3/5">
            <img class="w-24" src="@/assets/img/icon-town.svg" />
            <p
              class="text-3xl font-medium font-inter-tight text-[#387BDB] mt-6"
            >
              Problems based on local legislation
            </p>
          </div>
          <div class="bg-[#2CAE281A] p-6 rounded-3xl w-1/2">
            <img class="w-24" src="@/assets/img/icon-computer.svg" />
            <p
              class="text-3xl font-medium font-inter-tight text-[#2CAE28] mt-6"
            >
              Smart game interface
            </p>
          </div>
        </div>
        <div class="bg-[#F289381A] p-6 rounded-3xl mt-4">
          <img class="w-24" src="@/assets/img/icon-town-orange.svg" />
          <p class="text-3xl font-medium font-inter-tight text-[#E57620] mt-6">
            Choosing different location countries for business conditions
          </p>
        </div>
      </div>
      <div class="w-full">
        <LeaderboardTheLeaderBoard />
      </div>
    </div>
  </section>
</template>

<style></style>
