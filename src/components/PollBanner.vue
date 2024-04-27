<script setup>
import { onMounted, ref } from 'vue'

const more = ref('')
const add = 'POLLS'
const writer = (i, id) => {
  console.log(more.value)
  if (more.value === 'POLLS') {
    clearInterval(id)
  } else more.value += add[i]
}

onMounted(() => {
  let i = 0
  const id = setInterval(() => {
    writer(i, id)
    i++
  }, 200)
})
</script>

<template>
  <div class="flex flex-col justify-start items-center bg-orange-100 mb-4 p-4 h-[300px]">
    <!-- <img src="/public/maple.png" class="w-[6%] h-[6%]" />
    <img src="/public/onion.png" class="w-[6%] h-[6%]" /> -->

    <!-- <img
      src="/public/hotpot.png"
      class="w-[80%] h-[100%] lg:w-[15%] md:w-[30%] relative bottom-3"
    /> -->
    <h1 class="text-3xl font-bold text-orange-300">
      You know the <span class="text-orange-600 italic text-4xl">CONTROVERSY</span> <br />
      But do you know the
      <span class="text-orange-600 italic text-4xl">CONTEXT ? <br /></span>
    </h1>
    <h2 class="font-bold text-orange-600 text-lg mt-20">
      {{ more }}
    </h2>
    <!-- <h4 class="text-sm text-orange-600">by konion.xyz</h4> -->
  </div>
</template>
.
