<template>
  <div class="h-screen flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <SignIn />
  </div>
</template>

<script setup lang="ts">
import SignIn from '~/components/auth/SignIn.vue';

// Set page title
useHead({
  title: 'Sign In | FinBud',
  meta: [
    { name: 'description', content: 'Sign in to your FinBud account' }
  ]
})
</script> 