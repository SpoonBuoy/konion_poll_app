<script setup>
const props = defineProps(['message'])
</script>

<template>
  <div>
    <h2>{{ props.message }}</h2>
  </div>
</template>
