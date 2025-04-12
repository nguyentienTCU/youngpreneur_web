<template>
  <div class="min-h-screen pt-20 flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <SignUp />
  </div>
</template>

<script setup lang="ts">
import SignUp from '~/components/auth/SignUp.vue';

// Set page title
useHead({
  title: 'Sign Up | FinBud',
  meta: [
    { name: 'description', content: 'Create a new FinBud account' }
  ]
})
</script> 