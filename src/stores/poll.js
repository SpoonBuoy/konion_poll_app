import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePollStore = defineStore('poll', () => {
  const poll = ref({})
  const polls = ref([])

  const url = {
    get: '',
    post: '',
    getAll: ''
  }

  const get = () => {
    return poll.value
  }

  const getAll = () => {
    return polls.value
  }

  const set = (p) => {
    poll.value = p
  }

  const load = (id) => {
    //loads a poll with id
  }

  const loadAll = () => {
    //loads all polls
  }

  const save = () => {
    //saves a poll
  }

  const addVote = (pollId, memberId) => {
    //adds a vote to member in poll
  }

  return {
    set,
    load,
    loadAll,
    save,
    addVote,
    get,
    getAll
  }
})
