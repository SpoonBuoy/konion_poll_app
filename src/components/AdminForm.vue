<script setup>
import InputField from './ui/InputField.vue'
import TextArea from './ui/TextArea.vue'
import SelectInput from './ui/SelectInput.vue'
import ActionButton from './ActionButton.vue'
import { ref } from 'vue'

const opts = ref(['Arsalan', 'Rashid'])
const memberData = ref({})
const pollData = ref({})

const addMember = async () => {
  //
}
const createPoll = async () => {
  //
}
</script>

<template>
  <h1 class="text-center font-bold text-xl">Admin Section</h1>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10 p-5">
    <h1>Member Details</h1>
    <br />
    <InputField id="username" label="Member Name" placeholder="Name" />
    <TextArea label="Description" placeholder="Enter Member's Description" />
    <TextArea label="Perception" placeholder="Enter Member's Perception" />
    <ActionButton class="mt-5" text="Add Member" />
  </form>

  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10 p-5">
    <h1>Poll Details</h1>
    <br />
    <InputField id="title" label="Poll Title" placeholder="Title" />
    <TextArea label="Description" placeholder="Enter Poll Description" />
    <div class="flex flex-row justify-between">
      <SelectInput class="w-[40%]" label="First Member" id="member-1" :options="opts" />
      <SelectInput class="w-[40%]" label="Second Member" id="member-2" :options="opts" />
    </div>
    <InputField id="banner" label="Poll Banner" placeholder="Banner" type="file" />
    <ActionButton class="mt-5" text="Create Poll" />
  </form>
</template>
