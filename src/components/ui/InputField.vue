<script setup>
const props = defineProps(['label', 'placeholder', 'id', 'type'])
</script>

<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="props.id">
      {{ props.label }}</label
    >
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :id="props.id"
      :type="props.type"
      :placeholder="props.placeholder"
    />
  </div>
</template>
