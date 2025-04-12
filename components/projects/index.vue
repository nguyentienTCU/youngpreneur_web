<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Project Showcase</h2>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories"
          :key="category"
          class="px-4 py-2 rounded-full"
          :class="[
            selectedCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <Project
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- View More Button -->
      <div class="text-right mt-8">
        <NuxtLink to="/projects" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          View All Projects →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Project from './Project.vue';
import { ref, computed } from 'vue';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  team: string;
  category: string;
}

const projects = ref<Project[]>([
  {
    id: '1',
    title: 'Eco-Friendly Packaging Solution',
    description: 'A sustainable packaging solution that reduces waste and costs for e-commerce businesses.',
    image: '/app.png',
    team: 'Team Green Innovators',
    category: 'Business Case'
  },
  {
    id: '2',
    title: 'AI-Powered Learning Platform',
    description: 'Personalized learning experience using artificial intelligence to adapt to student needs.',
    image: '/Thumbnail.png',
    team: 'TechEd Solutions',
    category: 'Startup Pitch'
  },
  {
    id: '3',
    title: 'Community Health App',
    description: 'Mobile application connecting local healthcare providers with patients in underserved areas.',
    image: '/app.png',
    team: 'HealthTech Team',
    category: 'Hackathon'
  },
  {
    id: '4',
    title: 'Smart City Solutions',
    description: 'An innovative platform that uses IoT and AI to optimize city resources and improve urban living conditions.',
    image: '/Thumbnail.png',
    team: 'UrbanTech Collective',
    category: 'Business Case'
  }
]);

const categories = ['All Projects', 'Business Case', 'Startup Pitch', 'Hackathon'];
const selectedCategory = ref('All Projects');

// Filter projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All Projects') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === selectedCategory.value);
});
</script> 