<script setup>
import ResourceList from '../components/ResourceList.vue'
import ActionButton from '@/components/ActionButton.vue'
</script>

<template>
  <div class="flex flex-col p-2 justify-center items-center gap-10">
    <ActionButton text="Add Resource" class="w-48" />
    <ResourceList class="flex flex-col justify-between gap-5" />
  </div>
</template>
