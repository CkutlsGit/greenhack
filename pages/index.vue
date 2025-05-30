<script setup></script>

<template>
  <main class="bg-[#FDFFFD] h-[900px] rounded-3xl m-8">
    <div>
      <img class="absolute right-0" src="@/assets/img/sun-img.png" />
      <div class="text-center pt-44">
        <h1
          class="text-[#050E01] font-collvetica opacity-50 font-bold text-8xl"
        >
          feel the real
        </h1>
        <h1 class="text-[#050E01] font-collvetica font-bold text-9xl ml-64">
          business
        </h1>
      </div>
      <img
        class="absolute -mt-15 left-1/2 -translate-x-1/2"
        src="@/assets/img/earth-img.png"
      />
      <button
        class="bg-[#fdfffd33] bottom-0 left-1/2 -translate-x-1/2 cursor-pointer text-[#FDFFFD] font-semibold text-3xl font-inter-tight -mt-40 flex items-center rounded-full py-5 px-10 absolute"
      >
        Create a business
        <img class="ml-6" src="@/assets/img/array-forward-icon.svg" />
      </button>
      <img
        class="absolute bottom-1/6 left-1/9"
        src="@/assets/img/array-icon.svg"
        alt=""
      />
    </div>
  </main>
  <section>
    <div class="flex gap-4 px-10 pb-8">
      <div class="bg-[#FDFFFD] p-6 rounded-3xl min-w-[1000px]">
        <h1 class=" text-4xl font-collvetica mb-6">AI Futures</h1>
        <div class="flex items-center gap-4">
          <div class="bg-[#387BDB1A] p-6 rounded-3xl">
            <img class="w-24" src="@/assets/img/icon-town.svg" />
            <p
              class="text-3xl font-medium font-inter-tight text-[#387BDB] mt-6"
            >
              Problems based on local legislation
            </p>
          </div>
          <div class="bg-[#2CAE281A] p-6 rounded-3xl">
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
