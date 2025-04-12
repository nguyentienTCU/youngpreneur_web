<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold">Our Community</h2>
        <div class="flex gap-4">
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
      </div>
      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        <Project
          v-for="profile in filteredProfiles.slice(0, 4)"
          :key="profile.id"
          :profile="profile"
        />
      </div>
      <!-- View More Button -->
      <div class="mt-12 text-right">
        <NuxtLink to="/profiles" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          View All Members →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Project from './profile.vue';
import { ref, computed } from 'vue';

interface Profile {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

const allProfiles = ref<Profile[]>([
  {
    id: '1',
    name: 'A',
    description: 'Experienced mentor in technology and entrepreneurship with 10+ years of industry experience.',
    image: '/app.png',
    tags: ['Mentor', 'Technology', 'Entrepreneurship']
  },
  {
    id: '2',
    name: 'B',
    description: 'Passionate about sustainable business practices and social impact entrepreneurship.',
    image: '/Thumbnail.png',
    tags: ['Mentor', 'Sustainability', 'Social Impact']
  },
  {
    id: '3',
    name: 'C',
    description: 'Aspiring entrepreneur looking to learn about startup development and fundraising.',
    image: '/app.png',
    tags: ['Mentee', 'Technology', 'Startup']
  },
  {
    id: '4',
    name: 'D',
    description: 'Interested in sustainable business models and environmental impact.',
    image: '/Thumbnail.png',
    tags: ['Mentee', 'Sustainability', 'Environment']
  }
]);

const categories = ['All', 'Mentor', 'Mentee'];
const selectedCategory = ref('All');

const filteredProfiles = computed(() => {
  if (selectedCategory.value === 'All') {
    return allProfiles.value;
  }
  return allProfiles.value.filter(profile => profile.tags.includes(selectedCategory.value));
});
</script> 