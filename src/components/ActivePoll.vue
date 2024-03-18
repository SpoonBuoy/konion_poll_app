<script setup>
import PollUserInfo from '../components/PollUserInfo.vue'
import ActionButton from './ActionButton.vue'
import StateBadge from './StateBadge.vue'
</script>

<template>
  <div
    class="flex flex-col justify-start gap-10 items-center border-2 border-black rounded-lg py-5 w-[98%] md:w-[80%] lg:w-[60%] relative"
  >
    <StateBadge message="Live" icon="bi bi-broadcast" />
    <div class="flex flex-row items-center gap-6 sm:gap-7 md:gap-10 lg:gap-16 mt-10">
      <PollUserInfo
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        name="Chris Allen"
        votes="21"
      />
      <h1>VS</h1>
      <PollUserInfo name="Donald Trump" votes="10" />
    </div>

    <ActionButton text="Enter" />
  </div>
</template>
