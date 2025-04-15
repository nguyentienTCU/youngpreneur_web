<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">{{ t('projects.title') }}</h2>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button v-if="locale === 'en'" v-for="category in categories" :key="category.en" class="px-4 py-2 rounded-full"
          :class="[
            selectedCategory === category.en
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]" @click="selectedCategory = category.en">
          {{ category.en }}
        </button>

        <button v-if="locale === 'vi'" v-for="category in categories" :key="category.en" class="px-4 py-2 rounded-full"
          :class="[
            selectedCategory === category.en
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]" @click="selectedCategory = category.en">
          {{ category.vi }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <Project v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>

      <!-- View More Button -->
      <div class="text-right mt-8">
        <NuxtLink to="/projects"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          {{ t('projects.button1') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Project from './Project.vue';
import { ref, computed, reactive } from 'vue';
import { useI18n } from '#imports';

import type { Projects } from '~/type/info';

const { t, locale } = useI18n();

const projects = reactive<Projects[]>([
  {
    id: t('projects.project1.id'),
    title: t('projects.project1.title'),
    description: t('projects.project1.description'),
    image: t('projects.project1.image'),
    team: t('projects.project1.team'),
    category: t('projects.project1.category'),
  },
  {
    id: t('projects.project2.id'),
    title: t('projects.project2.title'),
    description: t('projects.project2.description'),
    image: t('projects.project2.image'),
    team: t('projects.project2.team'),
    category: t('projects.project2.category'),
  },
  {
    id: t('projects.project3.id'),
    title: t('projects.project3.title'),
    description: t('projects.project3.description'),
    image: t('projects.project3.image'),
    team: t('projects.project3.team'),
    category: t('projects.project3.category'),
  },
  {
    id: t('projects.project4.id'),
    title: t('projects.project4.title'),
    description: t('projects.project4.description'),
    image: t('projects.project4.image'),
    team: t('projects.project4.team'),
    category: t('projects.project4.category'),
  }
]);

const categories = [
  { en: 'All Projects', vi: 'Tất cả dự án' },
  { en: 'Business Case', vi: 'Đề án kinh tế' },
  { en: 'Startup Pitch', vi: 'Thuyết trình khởi nghiệp' },
  { en: 'Hackathon', vi: 'hackathon' }
];
const selectedCategory = ref('All Projects');

// Filter projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All Projects') {
    return projects;
  }
  return projects.filter(project => project.category === selectedCategory.value);
});
</script>