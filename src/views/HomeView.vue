<script setup>
import { ref } from 'vue'
import ActivePoll from '@/components/ActivePoll.vue'

const activePolls = ref(5)
</script>
<template>
  <div class="flex flex-col gap-10 justify-center items-center">
    <ActivePoll v-for="i in activePolls" :key="i" />
  </div>
</template>
