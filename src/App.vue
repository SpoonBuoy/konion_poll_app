<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PollBanner from '@/components/PollBanner.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppAlert from './components/AppAlert.vue'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <AppHeader />

  <PollBanner />
  <RouterView />
  <AppFooter />
</template>

<style scoped></style>
