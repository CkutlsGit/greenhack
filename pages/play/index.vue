<script setup lang="ts">

const config = useRuntimeConfig()

// Заводим 5 пустых ответов
const answers = ref<string[]>(Array(5).fill(''))
// Текущий индекс вопроса
const current = ref(0)

// Можно ли переключаться вперёд
const canNext = computed(() => answers.value[current.value].trim().length > 0)
// Можно ли отправить (все 5 непустые)
const canSubmit = computed(() => answers.value.every(a => a.trim().length > 0))

// Результаты от API
const apiResult = ref<any | null>(null)

function prev() {
  if (current.value > 0) current.value--
}
function next() {
  if (current.value < answers.value.length - 1) current.value++
}

async function submitSolutions() {
  const payload = {
    location: "Челябинск",
    projectName: "АлмаВид",
    idea: "Открыть топовое агентство недвижимости на ЧМЗ",
    problemsPayload: {
      problems: [
        {
          title: "Regulatory Compliance",
          description:
            "Navigating the complex regulatory environment in Челябинск can be daunting for a new real estate agency. The Federal Law No. 214-FZ on shared construction participation imposes strict requirements that can be challenging to meet. Ensuring compliance with these regulations is crucial to avoid legal penalties. How will you solve it?",
        },
        {
          title: "Market Competition",
          description:
            "The real estate market in Челябинск is highly competitive, with many established players. This makes it difficult for new entrants like АлмаВид to gain a foothold. The recent economic downturn has also led to a decrease in property demand, further intensifying competition. How will you solve it?",
        },
        {
          title: "Access to Capital",
          description:
            "Securing funding is a significant challenge for startups in Челябинск, especially in the real estate sector. The local banking sector's cautious lending practices, influenced by the Central Bank of Russia's monetary policy, can limit access to necessary capital. How will you solve it?",
        },
        {
          title: "Talent Acquisition",
          description:
            "Attracting skilled professionals to join a new agency like АлмаВид in Челябинск can be difficult. The local job market is competitive, and the recent increase in unemployment rates has not made it easier to find qualified candidates. How will you solve it?",
        },
        {
          title: "Technological Integration",
          description:
            "Implementing advanced technology solutions is essential for a modern real estate agency, but it can be challenging in Челябинск. The local infrastructure may not always support the latest tech innovations, and adapting to digital transformation can be costly. How will you solve it?",
        },
      ],
    },
    userSolutions: answers.value.map((text) => ({ text })),
  }

  try {
    const res = await $fetch(`${config.public.apikey}/ai/evaluate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
    })
    console.log('API Response:', res) // Отладочный вывод
    apiResult.value = res.result // Сохраняем результат
    console.log('apiResult:', apiResult.value) // Проверяем, что сохраняется
  } catch (e) {
    console.error('API Error:', e)
  }
}
</script>

<template>
  <main class="bg-gray-50 h-auto rounded-3xl m-8 p-8 flex flex-col shadow-lg">
    <!-- Шапка: номер и таймер -->
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800">
        {{ current + 1 }}. Ваше решение для проблемы {{ current + 1 }}
      </h2>
      <div class="text-lg font-mono px-4 py-2 border rounded bg-gray-100 text-gray-600 shadow-sm">
        0:20
      </div>
    </div>

    <!-- Поле ввода -->
    <div class="flex-1 border p-6 mb-8 rounded bg-white shadow-inner">
      <textarea
        v-model="answers[current]"
        rows="10"
        class="w-full h-full resize-none outline-none p-4 border rounded focus:ring-2 focus:ring-blue-400 text-gray-700"
        placeholder="Напишите ваше решение..."
      />
    </div>

    <!-- Навигация и кнопка отправки -->
    <div class="flex justify-between items-center">
      <button
        @click="prev"
        :disabled="current === 0"
        class="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 shadow-md transition-all"
      >
        ← Назад
      </button>

      <div>
        <button
          v-if="current < answers.length - 1"
          @click="next"
          :disabled="!canNext"
          class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 shadow-md transition-all"
        >
          Далее →
        </button>
        <button
          v-else
          @click="submitSolutions"
          :disabled="!canSubmit"
          class="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 shadow-md transition-all"
        >
          Отправить
        </button>
      </div>
    </div>

    <!-- Результаты -->
    <div v-if="apiResult" class="mt-8 p-6 bg-white rounded shadow-lg">
      <h3 class="text-2xl font-bold mb-4 text-gray-800">Результаты оценки</h3>
      <ul>
        <li v-for="(evaluation, index) in apiResult.evaluations" :key="index" class="mb-4">
          <h4 class="text-xl font-semibold text-gray-700">Проблема {{ index + 1 }}</h4>
          <p class="text-gray-600"><strong>Оценка:</strong> {{ evaluation.score }}</p>
          <p class="text-gray-600"><strong>Отзыв:</strong> {{ evaluation.feedback }}</p>
          <p class="text-gray-600"><strong>Прогноз:</strong> {{ evaluation.future }}</p>
        </li>
      </ul>
      <p class="text-lg font-medium text-gray-700 mt-4">
        <strong>Выживаемость стартапа:</strong> {{ apiResult.survives ? 'Да' : 'Нет' }}
      </p>
    </div>

    <div v-if="apiResult">
      <pre>{{ apiResult }}</pre>
    </div>
  </main>
</template>

<style scoped>
/* Улучшенные стили */
textarea {
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

button {
  font-size: 1rem;
  font-weight: 600;
}

main {
  max-width: 800px;
  margin: 0 auto;
}
</style>