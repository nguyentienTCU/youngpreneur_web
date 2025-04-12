<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="relative h-48">
      <img 
        :src="event.image" 
        :alt="event.title"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-4 left-4">
        <span class="text-white text-sm bg-blue-600 px-3 py-1 rounded-full">{{ event.date }}</span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
      <p class="text-gray-600 mb-4">{{ event.description }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-sm text-gray-500">{{ event.location }}</span>
        </div>
        <button class="text-blue-600 font-semibold hover:text-blue-700">
          Learn More →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

const props = defineProps<{
  event: Event;
}>();
</script> 