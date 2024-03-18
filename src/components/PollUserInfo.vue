<script setup>
import AvatarWithName from './AvatarWithName.vue'
const props = defineProps(['src', 'name', 'votes'])
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <AvatarWithName :img="props.src" :name="props.name" />
    <span class="text-lg text-bold">{{ props.votes }}</span>
  </div>
</template>
