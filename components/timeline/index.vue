<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">{{ t('timeline.title') }}</h2>

      <!-- Events Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TimelineItem v-for="event in events" :key="event.title" :event="event" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Events } from '~/type/info';
import { useI18n } from '#imports';

const { t } = useI18n();


const events: Events[] = [
  {
    title: t('timeline.event1.title'),
    description: t('timeline.event1.description'),
    date: t('timeline.event1.date'),
    image: t('timeline.event1.image')
  },
  {
    title: t('timeline.event2.title'),
    description: t('timeline.event2.description'),
    date: t('timeline.event2.date'),
    image: t('timeline.event2.image')
  },
  {
    title: t('timeline.event3.title'),
    description: t('timeline.event3.description'),
    date: t('timeline.event3.date'),
    image: t('timeline.event3.image')
  },
  {
    title: t('timeline.event4.title'),
    description: t('timeline.event4.description'),
    date: t('timeline.event4.date'),
    image: t('timeline.event4.image')
  },
  {
    title: t('timeline.event5.title'),
    description: t('timeline.event5.description'),
    date: t('timeline.event5.date'),
    image: t('timeline.event5.image')
  },
  {
    title: t('timeline.event6.title'),
    description: t('timeline.event6.description'),
    date: t('timeline.event6.date'),
    image: t('timeline.event6.image')
  },
  {
    title: t('timeline.event7.title'),
    description: t('timeline.event7.description'),
    date: t('timeline.event7.date'),
    image: t('timeline.event7.image')
  },
  {
    title: t('timeline.event8.title'),
    description: t('timeline.event8.description'),
    date: t('timeline.event8.date'),
    image: t('timeline.event8.image')
  }
];
</script>