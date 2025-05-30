<script setup lang="ts">
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
    <div class="absolute bottom-[520px] right-[200px] bg-white p-8 rounded shadow-lg z-20 w-[400px] h-[150px] flex items-center">
      <p class="text-base text-gray-600">
        Пример текста: "Привет! Как я могу помочь вам сегодня?"
      </p>
    </div>

      <!-- Таблица слева -->
      <div class="absolute top-10 left-10 bg-white p-4 rounded shadow-md z-20 w-[40%] h-[70%] overflow-auto">
        <table class="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th class="border border-gray-300 px-4 py-2">Заголовок A</th>
              <th class="border border-gray-300 px-4 py-2">Заголовок B</th>
              <th class="border border-gray-300 px-4 py-2">Заголовок C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Данные A1</td>
              <td class="border border-gray-300 px-4 py-2">Данные B1</td>
              <td class="border border-gray-300 px-4 py-2">Данные C1</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Данные A2</td>
              <td class="border border-gray-300 px-4 py-2">Данные B2</td>
              <td class="border border-gray-300 px-4 py-2">Данные C2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Добавляем робота в нижний правый угол -->
      <img
        src="@/assets/img/robot-img.png"
        alt="Robot"
        class="robot-icon"
      />
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
</style>
