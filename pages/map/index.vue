<script setup>
const modalOpen = ref(false)
const mainStore = useMainStore()

const getLocationInfo = (location) => {
  modalOpen.value = true
  mainStore.location = location
}
</script>

<template>
  <section>
    <ModalFinalStep v-if="modalOpen" @close-modal="modalOpen = false" />
    <ClientOnly>
      <MapWithMarkers @open-modal="getLocationInfo" />
    </ClientOnly>
    <NuxtLayout class="mt-6" name="main-info-blocks"></NuxtLayout>
  </section>
</template>

<style>

</style>