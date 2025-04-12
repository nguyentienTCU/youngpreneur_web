<template>
  <div class="bg-blue-50 rounded-lg p-8">
    <h3 class="text-2xl font-bold mb-6">Featured Project</h3>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="relative h-64">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h4 class="text-xl font-bold mb-4">{{ project.title }}</h4>
        <p class="text-gray-600 mb-6">{{ project.description }}</p>
        <div class="flex gap-4">
          <button class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            View Project
          </button>
          <button class="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  team: string;
}

defineProps<{
  project: Project;
}>();
</script> 