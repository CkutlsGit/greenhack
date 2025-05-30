<script setup>
const props = defineProps({
  user: Object,
  place: Number
})
</script>

<template>
    <div
    class="overflow-hidden text-ellipsis whitespace-nowrap text-left font-inter-tight font-medium text-xl"
  >
    {{ place }}
  </div>
  <div
    class="overflow-hidden text-ellipsis whitespace-nowrap text-left font-inter-tight font-medium text-xl"
  >
    {{ user.user.username }}
  </div>
  <div
    class="overflow-hidden text-ellipsis whitespace-nowrap text-left font-inter-tight font-medium text-xl"
  >
    {{ user.score }}
  </div>
  <div
    class="overflow-hidden text-ellipsis whitespace-nowrap text-left font-inter-tight font-medium text-xl"
  >
    {{ user.greenPoints }}
  </div>
</template>

<style></style>
