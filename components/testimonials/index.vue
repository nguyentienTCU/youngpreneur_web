<template>
  <section class="pb-20 pt-5">
    <div class="container mx-auto px-4" data-aos="fade-right">
      <h2 class="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 section-title">{{ t('testimonials.title') }}
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <TestimonialsItem v-for="testimonial in testimonials" :key="testimonial.name" :testimonial="testimonial" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialsItem from './item.vue';
import { useI18n } from '#imports';
import type { Testimonial } from '~/type/info';

const { t } = useI18n();

const testimonials = reactive<Testimonial[]>([
  {
    name: t('testimonials.testimonial1.name'),
    role: t('testimonials.testimonial1.role'),
    quote: t('testimonials.testimonial1.quote'),
    avatar: t('testimonials.testimonial1.avatar'),
    rating: parseInt(t('testimonials.testimonial1.rating')),
    date: t('testimonials.testimonial1.date')
  },
  {
    name: t('testimonials.testimonial2.name'),
    role: t('testimonials.testimonial2.role'),
    quote: t('testimonials.testimonial2.quote'),
    avatar: t('testimonials.testimonial2.avatar'),
    rating: parseInt(t('testimonials.testimonial2.rating')),
    date: t('testimonials.testimonial2.date')
  },
  {
    name: t('testimonials.testimonial3.name'),
    role: t('testimonials.testimonial3.role'),
    quote: t('testimonials.testimonial3.quote'),
    avatar: t('testimonials.testimonial3.avatar'),
    rating: parseInt(t('testimonials.testimonial3.rating')),
    date: t('testimonials.testimonial3.date')
  },
  {
    name: t('testimonials.testimonial4.name'),
    role: t('testimonials.testimonial4.role'),
    quote: t('testimonials.testimonial4.quote'),
    avatar: t('testimonials.testimonial4.avatar'),
    rating: parseInt(t('testimonials.testimonial4.rating')),
    date: t('testimonials.testimonial4.date')
  }
]);
</script>

<style scoped>
.container {
  position: relative;
  z-index: 2;
}

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
</style>