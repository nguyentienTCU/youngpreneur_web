<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <div class="flex items-center gap-2 mb-4">
        <span class="px-3 py-1 bg-flame/10 text-flame rounded-full text-sm">{{ post.category }}</span>
        <span class="text-gray-600 text-sm">{{ post.date }}</span>
      </div>
      <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-600">{{ t('blog.author') }}{{ post.author }}</span>
        <NuxtLink :to="`/blog/${post.id}`" class="text-flame font-semibold hover:text-flame/80 transition-colors">
          {{ t('blog.button3') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/type/info';
import { useI18n } from '#imports';

const { t } = useI18n();

defineProps<{
  post: BlogPost;
}>();
</script>

<style scoped>
.text-flame {
  color: #FF6B00;
}
</style>