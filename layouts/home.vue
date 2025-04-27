<template>
    <div class="bg-white">
        <Header />
        <slot />
        <Chatbot />
        <Footer />
    </div>
</template>

<script setup>
import Chatbot from '@/components/chatbot/index.vue'
</script>