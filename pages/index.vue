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
      <NuxtLink to="/map">
        <button
        class="bg-[#fdfffd33] bottom-0 left-1/2 -translate-x-1/2 cursor-pointer text-[#FDFFFD] font-semibold text-3xl font-inter-tight -mt-40 flex items-center rounded-full py-5 px-10 absolute"
      >
        Create a business
        <img class="ml-6" src="@/assets/img/array-forward-icon.svg" />
      </button>
      </NuxtLink>
      <img
        class="absolute bottom-1/6 left-1/9"
        src="@/assets/img/array-icon.svg"
        alt=""
      />
    </div>
  </main>
  <NuxtLayout name="main-info-blocks"></NuxtLayout>
</template>

<style></style>
