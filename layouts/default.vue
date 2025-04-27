<template>
  <div :class="{ 'bg-gradient-to-r from-flame to-golden': $route.path !== '/' }">
    <Header />
    <slot />
    <Chatbot />
    <Footer />
  </div>
</template>

<script setup>
import Chatbot from '@/components/chatbot/index.vue'
</script>

<style>
.btn-primary {
  background-color: #FF3C38;
  color: #FFFFFF;
}
</style>