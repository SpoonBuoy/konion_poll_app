<script setup>
import { ref } from 'vue'
import ResourceList from '../components/ResourceList.vue'
import ActionButton from '@/components/ActionButton.vue'

import AddResourceDialog from '@/components/AddResourceDialog.vue'
const showDialog = ref(false)
const add = () => {
  showDialog.value = true
}
const dialogBtnClicked = () => {
  showDialog.value = false
}
</script>

<template>
  <div class="flex flex-col p-2 justify-center items-center gap-10">
    <AddResourceDialog :open="showDialog" @child-update="dialogBtnClicked" />
    <ActionButton text="Add Resource" class="w-48" @click="add" />
    <ResourceList class="flex flex-col justify-between gap-5" />
  </div>
</template>
