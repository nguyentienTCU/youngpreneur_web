<template>
  <div class="min-h-screen pt-20 flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <SignUp />
  </div>
</template>

<script setup lang="ts">
import SignUp from '~/components/auth/SignUp.vue';
import { useI18n } from '#imports';

const { locale } = useI18n()

// Set page title
useHead({
  title: locale.value === 'en' ? 'Sign Up | FinBud' : 'Đăng ký | FinBud',
  meta: [
    {
      name: locale.value === 'en' ? 'description' : 'mô tả',
      content: locale.value === 'en' ? 'Create a new FinBud account' : 'Tạo tài khoản FinBud mới'
    }
  ]
})
</script>