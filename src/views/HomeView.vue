<script setup>
import { ref } from 'vue'
import PollMenuBar from '@/components/PollMenuBar.vue'
import ActivePoll from '@/components/ActivePoll.vue'

const activePolls = ref(5)
</script>
<template>
  <PollMenuBar />
  <div class="flex flex-col gap-10 justify-center items-center">
    <ActivePoll v-for="i in activePolls" :key="i" />
  </div>
</template>
