import { api } from '@/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResourceStore = defineStore('vote', () => {
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

  const load = async (id) => {
    const res = await api
      .url(url.get + id)
      .get()
      .json()
  }

  const loadAll = async () => {
    const res = await api.url(url.getAll).get().json()
  }

  const save = async (v) => {
    const res = await api.url(url.save).post(v).json()
    loadAll()
  }

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
