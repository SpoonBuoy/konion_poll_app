<script setup>
const props = defineProps(['member'])
</script>

<template>
  <div>
    {{
      props.member.perspective
        ? props.member.perspective
        : 'No Perspective git push -u origin maingit push -u origin maingit push -u origin maingit push -u origin maingit push -u origin maingit push -u origin maingit push -u origin maingit push -u origin maingit push -u origin main'
    }}
    Perspective
  </div>
</template>
