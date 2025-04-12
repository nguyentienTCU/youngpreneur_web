<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <div class="flex items-center gap-2 mb-4">
        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{{ post.category }}</span>
        <span class="text-gray-600 text-sm">{{ post.date }}</span>
      </div>
      <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-600">By: {{ post.author }}</span>
        <NuxtLink :to="`/blog/${post.id}`" class="text-blue-600 font-semibold hover:text-blue-800">
          Read More →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

defineProps<{
  post: BlogPost;
}>();
</script> 