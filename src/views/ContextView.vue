<script setup>
import MemberPerspective from '@/components/MemberPerspective.vue'
import AvatarWithName from '@/components/AvatarWithName.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-y-10">
    <div><h2>Poll Context Details ...</h2></div>
    <div class="flex flex-col md:flex-row lg:flex-row gap-5">
      <div class="flex flex-col border-2 p-2">
        <AvatarWithName name="arsalan" img="" />
        <MemberPerspective member="" class="mt-5" />
      </div>
      <div class="flex flex-col border-2 p-2">
        <AvatarWithName name="arsalan" img="" />
        <MemberPerspective member="" class="mt-5" />
      </div>
    </div>
  </div>
</template>
