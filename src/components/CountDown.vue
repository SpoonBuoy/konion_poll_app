<script setup>
import { ref } from 'vue'

const hr = ref(10)
const min = ref(10)
const sec = ref(10)
setInterval(() => {
  if (sec.value == 0) {
    if (min.value == 0) {
      hr.value--
      min.value = 60
    }
    min.value--
    sec.value = 60
  }
  sec.value--
}, 1000)
</script>

<template>
  <span class="countdown flex flex-row font-mono text-sm font-bold text-black m-2 ml-4">
    <span class="hrs" style="--value: 10">{{ hr < 10 ? `0${hr}` : hr }}</span
    >: <span class="mins" style="--value: 24">{{ min < 10 ? `0${min}` : min }}</span
    >:
    <span class="secs" style="--value: 3">{{ sec < 10 ? `0${sec}` : sec }}</span>
  </span>
</template>
