<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div class="relative h-48">
      <img 
        :src="profile.image" 
        :alt="profile.name"
        class="w-full h-full object-cover"
      />
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 class="text-white font-semibold text-lg">{{ profile.name }}</h3>
      </div>
    </div>
    <div class="p-4">
      <p class="text-gray-600 text-sm mb-4">{{ profile.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in profile.tags" 
          :key="tag"
          class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Profile {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

defineProps<{
  profile: Profile;
}>();
</script> 