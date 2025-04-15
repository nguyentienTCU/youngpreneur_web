<template>
  <div class="h-screen flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <SignIn />
  </div>
</template>

<script setup lang="ts">
import SignIn from '~/components/auth/SignIn.vue';
import { useI18n } from '#imports';

const { locale } = useI18n()

// Set page title
useHead({
  title: locale.value === 'en' ? 'Sign In | FinBud' : 'Đăng nhập | FinBud',
  meta: [
    {
      name: locale.value === 'en' ? 'description' : 'mô tả',
      content: locale.value === 'en' ? 'Sign in to your FinBud account' : 'Đăng nhập vào tài khoản FinBud'
    }
  ]
})
</script>