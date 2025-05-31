export const useGameStore = defineStore('game', () => {
    const problems = ref()
    const solutions = ref([])
    const result = ref()

    return { problems, solutions, result }
})