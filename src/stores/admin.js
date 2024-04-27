import { defineStore } from 'pinia'

export const admin = defineStore(admin, () => {
  const url = {
    addMember: '',
    createPoll: ''
  }
  const addMember = async () => {
    //add member
  }
  const createPoll = async () => {
    //create poll
  }
  return {
    addMember,
    createPoll
  }
})
