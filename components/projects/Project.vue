<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="relative h-48">
      <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover" />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">Team: {{ project.team }}</span>
        <button class="text-blue-600 font-semibold hover:text-blue-700">
          {{ t('projects.button2') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Projects } from '~/type/info';
import { useI18n } from '#imports';

const { t } = useI18n();


defineProps<{
  project: Projects;
}>();
</script>