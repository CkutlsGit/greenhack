export const useMainStore = defineStore('main', () => {
    const location = ref('')
    const projectName = ref('')
    const idea = ref('')

    return { location, projectName, idea }
})