<script setup>
// импорт не нужен, Nuxt сам найдёт компонент
</script>

<template>
  <ClientOnly>
    <MapWithMarkers />
  </ClientOnly>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>