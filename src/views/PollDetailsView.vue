<script setup>
import { ref } from 'vue'
import PollUserInfo from '../components/PollUserInfo.vue'
import ActionButton from '../components/ActionButton.vue'
import InfoMessage from '../components/InfoMessage.vue'

const done = ref(false)
const voted = ref(true)
</script>

<template>
  <div class="bg-red-200 p-5">
    <div class="flex flex-row p-5 gap-20 justify-center items-center">
      <div class="flex flex-col">
        <PollUserInfo name="Member 1" />
        <ActionButton text="Vote" />
      </div>
      <div class="flex flex-col">
        <PollUserInfo name="Member 2" />
        <ActionButton text="Vote" />
      </div>
    </div>
    <div class="flex flex-row justify-center">
      <div>
        <InfoMessage v-if="done" message="show winner" />
        <InfoMessage v-if="voted" message="you've voted for someone" />
      </div>
    </div>
  </div>
</template>
