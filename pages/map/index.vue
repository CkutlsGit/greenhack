<script setup>
const modalOpen = ref(false)
</script>

<template>
  <section>
    <ModalFinalStep v-if="modalOpen" @close-modal="modalOpen = false" />
    <ClientOnly>
      <MapWithMarkers @open-modal="modalOpen = true" />
    </ClientOnly>
    <NuxtLayout class="mt-6" name="main-info-blocks"></NuxtLayout>
  </section>
</template>

<style>

</style>