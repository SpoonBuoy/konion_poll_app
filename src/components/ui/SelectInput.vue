<script setup>
const props = defineProps(['label', 'id', 'options'])
</script>

<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="props.id">
      {{ props.label }}</label
    >
    <select
      class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Select"
    >
      <option v-for="(opt, idx) in options" :key="idx">{{ opt }}</option>
    </select>
    <div
      class="pointer-events-none relative -right-[90%] bottom-7 flex items-center px-2 text-gray-700"
    >
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</template>
