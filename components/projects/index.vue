<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 section-title">{{ t('projects.title') }}</h2>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
        <button v-if="locale === 'en'" v-for="category in categories" :key="category.en"
          class="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300" :class="[
            selectedCategory === category.en
              ? 'bg-flame text-white'
              : 'border-2 border-flame text-flame hover:bg-golden-hover'
          ]" @click="selectedCategory = category.en">
          {{ category.en }}
        </button>

        <button v-if="locale === 'vi'" v-for="category in categories" :key="category.en"
          class="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300" :class="[
            selectedCategory === category.en
              ? 'bg-flame text-white'
              : 'border-2 border-flame text-flame hover:bg-golden-hover'
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
          class="inline-block transparent-btn px-6 py-3 rounded-md transition-all duration-300 hover:scale-105">
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

<style scoped>
.section-title {
  background: linear-gradient(135deg, #e74c3c 0%, #ff6b4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 15px rgba(255, 107, 74, 0.2);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #e74c3c 0%, #ff6b4a 100%);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(255, 107, 74, 0.3);
}

.bg-flame {
  background-color: #FF6B00;
}

.text-flame {
  color: #FF6B00;
}

.border-flame {
  border-color: #FF6B00;
}

.bg-golden-hover {
  background-color: rgba(255, 195, 0, 0.1);
}

.transparent-btn {
  background: transparent;
  color: #FF6B00;
  border: 2px solid #FF6B00;
  box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);
}

.transparent-btn:hover {
  background: rgba(255, 107, 0, 0.1);
  box-shadow: 0 6px 20px rgba(255, 107, 0, 0.3);
}
</style>