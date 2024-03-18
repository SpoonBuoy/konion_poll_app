<script setup>
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'
const props = defineProps(['img', 'name'])
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <AvatarRoot
      class="bg-blackA3 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle"
    >
      <AvatarImage
        class="h-24 w-24 lg:h-52 lg:w-52 rounded-[inherit] object-cover"
        :src="props.img"
        :alt="props.name"
      />
      <AvatarFallback
        class="text-white leading-1 flex h-24 w-24 lg:h-52 lg:w-52 items-center justify-center bg-black text-[50px] font-medium"
        delay-ms="200"
      >
        {{ props.name[0] }}
      </AvatarFallback>
    </AvatarRoot>
    <h4>{{ props.name }}</h4>
  </div>
</template>
