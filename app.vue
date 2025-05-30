<script setup>
import MapWithMarkers from '~/components/MapWithMarkers.vue'
</script>

<template>
  <client-only>
    <MapWithMarkers />
  </client-only>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>