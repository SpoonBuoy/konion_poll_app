<script setup>
const props = defineProps(['message', 'gif', 'icon'])
</script>

<template>
  <div
    class="absolute top-3 right-3 bg-green-400 text-white px-5 py-0.5 rounded-lg text-sm font-semibold flex flex-row gap-2"
  >
    <i :class="icon" class="animate-pulse" />
    {{ props.message }}
  </div>
</template>
