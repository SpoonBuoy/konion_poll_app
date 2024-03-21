<script setup>
import router from '@/router'
import PollUserInfo from '../components/PollUserInfo.vue'
import ActionButton from './ActionButton.vue'
import CountDown from './CountDown.vue'
import StateBadge from './StateBadge.vue'

const details = () => {
  router.push({ name: 'detail' })
}
</script>

<template>
  <div
    class="flex flex-col justify-start gap-x-10 lg:gap-x-5 md:gap-x-5 items-center border-2 border-green-200 rounded-lg py-5 w-[98%] md:w-[80%] lg:w-[60%] relative"
  >
    <StateBadge message="Live" icon="bi bi-broadcast" />

    <div
      class="flex flex-col justify-start items-start w-full p-2 border-l-orange-600 border-l-8 ml-4"
    >
      <h1 class="text-sm font-bold">Controversial Poll Title</h1>
      <br />
      <span class="bi bi-person mt-2 text-xs"> <b>19833</b> Participants </span>
    </div>
    <div class="flex flex-row items-center gap-6 sm:gap-7 md:gap-10 lg:gap-16 mt-10 mb-10">
      <PollUserInfo
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        name="Chris Allen"
        votes="21"
      />
      <div class="w-16 md:w-20 lg:w-30">
        <img src="/public/flash.jpg" class="relative bottom-10" />
      </div>

      <PollUserInfo name="Donald Trump" votes="10" />
    </div>
    <div class="flex flex-row absolute bottom-0 rounded-b-lg w-full bg-green-100 justify-between">
      <CountDown text="Enter" class="w-[30%] shadow-white opacity-50 bg-inherit hover:opacity-70" />
      <ActionButton
        text="Participate"
        @click="details"
        icon="bi bi-caret-right"
        class="w-[30%] lg:w-[10%] opacity-50 shadow-white bg-inherit hover:opacity-70"
      />
    </div>
  </div>
</template>
