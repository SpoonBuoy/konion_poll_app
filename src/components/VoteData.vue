<script setup>
import { computed, ref } from 'vue'
import ActionButton from './ActionButton.vue'
const isWinner = ref(true)
const greenVote = computed(() => {
  return isWinner.value ? 'text-green-600' : 'text-rose-500'
})
const votes = ref(12)
const upVote = () => {
  votes.value++
}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5 m-2 p-2">
    <span class="text-5xl font-bold font-sz" :class="greenVote">{{ votes }}</span>
    <ActionButton text="Vote" @click="upVote" />
  </div>
</template>
