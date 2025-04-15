<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="relative h-48">
      <img :src="event.image" :alt="event.title" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-4 left-4">
        <span class="text-white text-sm bg-blue-600 px-3 py-1 rounded-full">{{ event.date }}</span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
      <p class="text-gray-600">{{ event.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Events } from '~/type/info';
const props = defineProps<{
  event: Events;
}>();
</script>