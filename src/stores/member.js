import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemberStore = defineStore('vote', () => {
  const vote = ref({})
  const votes = ref([])

  const url = {
    get: '',
    getAll: '',
    save: ''
  }

  const set = (v) => {
    vote.value = v
  }

  const load = (id) => {}

  const loadAll = () => {}

  const save = (v) => {}

  const get = () => {
    return vote.value
  }

  const getAll = () => {
    return votes.value
  }

  return {
    set,
    load,
    loadAll,
    save,
    get,
    getAll
  }
})
