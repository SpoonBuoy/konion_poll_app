import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVoteStore = defineStore('vote', () => {
  const vote = ref({})
  const votes = ref([])
  const hasVoted = ref('false')

  const url = {
    get: '',
    getAll: '',
    save: '',
    hasVoted: ''
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
  const voted = (pollId, ip) => {
    if (hasVoted.value) return true
    //check if voted
    return hasVoted.value
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
