<script setup>
const props = defineProps(['text', 'action'])
</script>

<template>
  <button
    class="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] text-grass11 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
    @click="action"
  >
    {{ props.text }}
  </button>
</template>
