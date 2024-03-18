<script setup>
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'

const props = defineProps(['member'])
</script>

<template>
  <div>
    <AvatarRoot>
      <AvatarImage src="props.member.avatar" />
      <AvatarFallback> CT </AvatarFallback>
    </AvatarRoot>
    {{ props.member.name ? props.member.name : 'Member 1' }}
    Name
    <div>
      {{ props.member.perspective ? props.member.perspective : 'No Perspective' }}
      Perspective
    </div>
  </div>
</template>
