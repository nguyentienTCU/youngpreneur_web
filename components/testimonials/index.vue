<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">{{ t('testimonials.title') }}</h2>

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