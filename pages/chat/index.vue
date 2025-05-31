<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Define isMobile, isLaptop, and isDesktop as reactive variables
const isMobile = ref(false);
const isLaptop = ref(false);
const isDesktop = ref(false);

const updateDeviceType = () => {
  isMobile.value = window.innerWidth <= 768;
  isLaptop.value = window.innerWidth > 768 && window.innerWidth <= 1024;
  isDesktop.value = window.innerWidth > 1024;
};

// Update isMobile, isLaptop, and isDesktop on window resize
onMounted(() => {
  updateDeviceType();
  window.addEventListener('resize', updateDeviceType);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateDeviceType);
});
</script>

<template>
    <div class="bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-4">
        <section
            class="relative w-full max-w-8xl h-[80vh] rounded-[10px] shadow-2xl overflow-hidden"
        >
            <img
                src="@/assets/img/storm-img.png"
                alt="Earth"
                class="absolute inset-0 h-full w-full object-contain"
            />

            <!-- Таблица над роботом -->
            <div 
                class="absolute bg-white p-4 rounded shadow-lg z-20 w-[400px] h-[150px] flex items-center overflow-hidden"
                :class="{
                    'bottom-[520px] right-[200px]': isDesktop,
                    'bottom-[300px] right-[100px]': isLaptop,
                    'bottom-[20px] right-[20px]': isMobile
                }"
            >
                <div class="flex flex-col items-start overflow-y-auto h-full w-full">
                    <span class="text-2xl text-[#050E01] font-bold font-inter-tight mb-2">User tries to...</span>
                    <p class="text-[#a6a9a5] font-bold font-inter-tight">
                       "Привет! Как я могу помочь вам сегодня?"
                       "Привет! Как я могу помочь вам сегодня?"
                       "Привет! Как я могу помочь вам сегодня?"
                    </p>
                </div>
            </div>

    <!-- Диалоговое окно персонажа -->
    <div 
      class="absolute top-10 left-10 bg-white p-6 rounded shadow-md z-20 w-[40%] h-[70%] overflow-auto flex flex-col"
    >
    <div class="flex items-center mb-4">
      <img 
        src="@/assets/img/robot-img.png"
        alt="Character Avatar" 
        class="w-16 h-16 rounded-full mr-4 bg-blue-500"
      />
    <h3 class="text-2xl text-[#2CAE28]  font-bold text-3xl font-inter-tight">
      AI CO Founder
    </h3>
    </div>
    <div class="flex-1 overflow-y-auto">
      <p class="text-[#a6a9a5] font-medium text-2xl font-inter-tight mb-4">
        Привет! Я здесь, чтобы помочь вам. Если у вас есть вопросы, просто задавайте их, и я постараюсь ответить.
        Привет! Я здесь, чтобы помочь вам. Если у вас есть вопросы, просто задавайте их, и я постараюсь ответить.
        Привет! Я здесь, чтобы помочь вам. Если у вас есть вопросы, просто задавайте их, и я постараюсь ответить.
      </p>
    </div>
    <div class="mt-4 flex items-center justify-end">
      
      <span class="text-green-500 font-bold text-2xl text-[#050E01] font-bold text-3xl font-inter-tight">+10 pts</span>
    </div>
    </div>

      <!-- Добавляем робота в нижний правый угол -->
      <img
        src="@/assets/img/robot-img.png"
        alt="Robot"
        class="robot-icon"
      />

      <!-- Обновленная плашка внизу по центру -->
    <div 
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent flex items-center justify-between w-[500px]"
    >
      <!-- Кнопка "Skip the AI" -->
      <button 
        class="text-4xl text-[#050E01] font-inter-tight pl-10 pr-10 bg-gray-200 font-bold text-lg py-4 px-6 rounded-full hover:bg-gray-300 transition"
      >
        Skip the AI
      </button>

      <!-- Текст "1/5" -->
      <span 
        class="bg-gray-100 text-black font-medium text-lg py-3 px-6 rounded-full shadow"
      >
        1 / 5
      </span>

      <!-- Кнопка "Next problem ->" -->
      <button 
        class="pl-10 pr-8 bg-black text-4xl text-[#050E01] font-bold text-lg font-inter-tight text-white py-4 px-6 rounded-full hover:bg-gray-800 transition flex items-center"
      >
        Next problem 
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="2" 
        stroke="currentColor" 
        class="w-6 h-6 ml-3"
        >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M9 5l7 7-7 7" 
        />
        </svg>
      </button>
    </div>
    </section>
  </div>
</template>

<style scoped>
/**** Custom scrollbar for textarea ****/
textarea::-webkit-scrollbar {
  width: 8px;
}
textarea::-webkit-scrollbar-track {
  background: transparent;
}
textarea::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.4);
}

/* Стили для робота */
.robot-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 500px;
  height: 500px;
  z-index: 10;
}

/* Добавляем шрифт font-inter-tight */
.font-inter-tight {
  font-family: 'Inter', sans-serif;
}

/* Стили для кнопок */
button {
  transition: all 0.3s ease;
}

/* Стили для текста */
span {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
