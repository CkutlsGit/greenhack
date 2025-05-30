<script setup>
const mainStore = useMainStore()

const modalNext = ref(false)

const nameStartUp = ref('')
const ideaStartUp = ref('')

const confirmModalData = () => {
  mainStore.projectName = nameStartUp.value
  mainStore.idea = ideaStartUp.value

  modalNext.value = true
}
</script>

<template>
  <div v-if="!modalNext" class="bg-[#050E010D] absolute left-1/2 -translate-x-1/2 w-full h-full overflow-y-hidden mx-auto z-[9999] flex justify-center">
    <div class="bg-[#FDFFFD] w-[600px] h-[420px] p-6 rounded-2xl mt-32">
      <div class="flex items-center justify-between">
        <h1 class="text-4xl font-collvetica text-[#050E01]">The Final Step</h1>
        <img @click="$emit('closeModal')" class="cursor-pointer" src="@/assets/img/icon-close.svg" />
      </div>
      <div class="flex flex-col mt-6">
        <input v-model="nameStartUp" class="bg-[#050E010D] rounded-2xl py-6 px-8" type="text" placeholder="Enter the name" />
        <textarea v-model="ideaStartUp" class="bg-[#050E010D] rounded-2xl py-6 px-8 mt-2 h-32" type="text" placeholder="Enter the idea of" />
      </div>
      <div class="flex items-center mt-6">
        <img @click="$emit('closeModal')" class="bg-[#050E011A] rounded-full p-5 mr-5 cursor-pointer" src="/public/icons/array-back-icon.svg" />
        <button @click="confirmModalData" class="font-inter-tight font-semibold text-[#FDFFFD] text-3xl bg-[#2CAE28] rounded-full p-5 w-full cursor-pointer">Create</button>
      </div>
    </div>
  </div>
  <ModalConfirm v-else />
</template>

<style></style>
