<script setup>
import { ref } from 'vue'
import PollUserInfo from '../components/PollUserInfo.vue'
import InfoMessage from '../components/InfoMessage.vue'

const done = ref(false)
const voted = ref(true)
import VoteData from '../components/VoteData.vue'
</script>

<template>
  <div class="p-5 pt-7">
    <div class="flex flex-row p-5 gap-x-20 lg:gap-x-40 md:gap-x-40 justify-center items-center">
      <div class="flex flex-col">
        <PollUserInfo name="Member 1" />
        <VoteData />
      </div>
      <div class="flex flex-col">
        <PollUserInfo name="Member 2" />
        <VoteData />
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
