<script setup>
const props = defineProps(['label', 'id', 'placeholder'])
</script>

<template>
  <label class="block text-gray-700 text-sm font-bold mb-2" :for="props.id">
    {{ props.label }}</label
  >
  <textarea
    :id="props.id"
    :placeholder="props.placeholder"
    class="resize mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  >
  </textarea>
</template>
