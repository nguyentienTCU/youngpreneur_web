<template>
  <div class="h-screen flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <ForgotPassword />
  </div>
</template>

<script setup lang="ts">
import ForgotPassword from '~/components/auth/ForgotPassword.vue';

// Set page title
useHead({
  title: 'Forgot Password | FinBud',
  meta: [
    { name: 'description', content: 'Reset your FinBud password' }
  ]
})
</script> 