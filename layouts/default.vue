<template>
  <div>
    <Header />
    <slot />
    <Chatbot />
    <Footer />
  </div>
</template>

<script setup>
import Chatbot from '@/components/chatbot/index.vue'
</script>