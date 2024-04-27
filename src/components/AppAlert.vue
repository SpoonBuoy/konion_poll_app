<script setup>
import { computed } from 'vue'

const props = defineProps(['message', 'type', 'badgeText'])

const bgcolor = computed(() => {
  switch (props.type) {
    case 'info':
      return 'bg-cyan'
    case 'success':
      return 'bg-green'
    case 'warn':
      return 'bg-orange'
    default:
      return 'bg-indigo'
  }
  //return 'bg-indigo'
})
</script>

<template>
  <div class="text-center py-4 lg:px-4 m-2" :class="`${bgcolor}-700`">
    <div
      :class="`p-2 ${bgcolor}-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`"
      role="alert"
    >
      <span
        :class="`flex rounded-full ${bgcolor}-600 uppercase px-2 py-1 text-xs font-bold mr-3`"
        >{{ props.badgeText }}</span
      >
      <span class="font-semibold mr-2 text-left flex-auto">{{ props.message }}</span>
    </div>
  </div>
</template>
