<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PollBanner from '@/components/PollBanner.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <PollBanner />

  <RouterView />
  <AppFooter />
</template>

<style scoped></style>
