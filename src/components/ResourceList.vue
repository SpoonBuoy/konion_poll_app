<script setup>
import { ref } from 'vue'
import LinkResource from './LinkResource.vue'
const total = ref(3)
</script>

<template>
  <div>
    <div v-for="i in total" :key="i">
      <LinkResource />
    </div>
  </div>
</template>
