<template>
  <div class="bg-gray-50 p-6 rounded-lg">
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
      </div>
      <div>
        <h4 class="font-semibold">{{ testimonial.name }}</h4>
        <p class="text-sm text-gray-600">{{ testimonial.role }}</p>
      </div>
    </div>
    <p class="text-lg italic mb-4">"{{ testimonial.quote }}"</p>
    <div class="flex items-center">
      <div class="flex text-yellow-400">
        <span v-for="star in testimonial.rating" :key="star">★</span>
      </div>
      <span class="ml-2 text-sm text-gray-600">{{ testimonial.date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/type/info';

const props = defineProps<{
  testimonial: Testimonial;
}>();
</script>