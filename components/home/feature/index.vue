<template>
  <div class=" py-12 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-8 ">
      <h2 class="text-center text-xl sm:text-4xl mb-6 sm:mb-16 font-semibold section-title">
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
</style>