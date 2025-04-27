<template>
  <div class="testimonial-card">
    <div class="flex items-center mb-4">
      <div class="avatar-container">
        <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
      </div>
      <div>
        <h4 class="text-base sm:text-lg name-text">{{ testimonial.name }}</h4>
        <p class="text-xs sm:text-sm role-text">{{ testimonial.role }}</p>
      </div>
    </div>
    <p class="text-sm sm:text-base quote-text">"{{ testimonial.quote }}"</p>
    <div class="flex items-center">
      <div class="flex star-rating text-sm sm:text-base">
        <span v-for="star in testimonial.rating" :key="star">★</span>
      </div>
      <span class="text-xs sm:text-sm date-text">{{ testimonial.date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/type/info';

const props = defineProps<{
  testimonial: Testimonial;
}>();
</script>

<style scoped>
.testimonial-card {
  background: linear-gradient(135deg, #FFF4E5 0%, #FFF8ED 100%);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(255, 107, 74, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 107, 74, 0.1);
}

.testimonial-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 107, 74, 0.15);
  border-color: rgba(255, 107, 74, 0.2);
}

.avatar-container {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  overflow: hidden;
  margin-right: 1rem;
  box-shadow: 0 2px 10px rgba(255, 107, 74, 0.15);
  border: 2px solid rgba(255, 107, 74, 0.1);
}

.name-text {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.125rem;
}

.role-text {
  font-size: 0.875rem;
  color: #ff6b4a;
  opacity: 0.9;
}

.quote-text {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #2d2d2d;
  margin-bottom: 1rem;
  font-style: italic;
}

.star-rating {
  color: #FFC300;
  filter: drop-shadow(0 0 2px rgba(255, 195, 0, 0.3));
}

.date-text {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  opacity: 0.8;
}
</style>