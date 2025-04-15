<template>
  <div class=" py-12 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-8 ">
      <h2 class="text-center text-2xl sm:text-4xl mb-8 sm:mb-16 font-semibold">
        {{ t('feature.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-16">
        <HomeFeatureItem v-for="item in content" :key="item.icon" :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Feature } from '~/type/info';
import { useI18n } from '#imports';
import { computed } from 'vue';

const { t } = useI18n();

const content = computed<Feature[]>(() => [
  {
    icon: t('feature.content1.icon'),
    title: t('feature.content1.title'),
    description: t('feature.content1.description'),
  },
  {
    icon: t('feature.content2.icon'),
    title: t('feature.content2.title'),
    description: t('feature.content2.description'),
  },
  {
    icon: t('feature.content3.icon'),
    title: t('feature.content3.title'),
    description: t('feature.content3.description'),
  },
]);
</script>